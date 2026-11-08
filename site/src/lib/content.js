/**
 * 内容解析、清洗与统计（构建期唯一入口）
 *
 * 旧站把这些逻辑放在运行时 JS 里，导致改一篇正文要重跑清洗、统计口径也没法校验。
 * 现在统一在构建期做一次：页面、catalog.json、搜索索引共用同一份数据。
 *
 * 清洗规则逐条移植自旧站 site.js 的 cleanMarkdown / stripMyHeader / absolutize，
 * 保证迁移前后渲染结果一致。
 *
 * 用 .js 而非 .ts：content.config.ts 由 Vite SSR 环境加载，
 * 同目录 TS 模块在该环境下拿不到具名导出（已实测），JS 模块无此问题。
 */
import { readFile, readdir } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'

/** 各来源站点的根地址，用于把文档里的根相对路径补全成绝对地址 */
const BASES = [
  ['ant.design--', 'https://ant.design'],
  ['govuk--', 'https://design-system.service.gov.uk'],
  ['carbondesignsystem.com--', 'https://carbondesignsystem.com'],
  ['polaris.shopify.com--', 'https://polaris.shopify.com'],
  ['designsystem.digital.gov--', 'https://designsystem.digital.gov'],
  ['web.dev--', 'https://web.dev'],
  ['primer.style--', 'https://raw.githubusercontent.com/primer/design/main/content'],
]

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

/**
 * 解析 frontmatter。全库 frontmatter 字段均为单行标量（已审计确认），
 * 这里只处理标量场景，带引号的值去引号。
 */
export function parseFrontmatter(raw) {
  const m = raw.match(FRONTMATTER_RE)
  if (!m) return { data: {}, body: raw }
  const data = {}
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/)
    if (!km) continue
    let value = km[2].trim()
    if (value.length > 1 && value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
    else if (value.length > 1 && value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1)
    data[km[1]] = value
  }
  return { data, body: raw.slice(m[0].length) }
}

/**
 * 剥掉采集时写入的原文 header：# 标题 + 来源行 + 分隔线。
 * 旧站 stripMyHeader 的正则把 frontmatter 和 header 一起剥，这里 frontmatter 已单独解析，
 * 所以只处理 header 部分（保留可选的前导空行）。
 */
export function stripSourceHeader(body) {
  // 来源块引用可能是多行（来源 + 摘要），逐行吃；单行与多行两种写法都要能剥
  return body.replace(/^\n?#[^\n]*\n\n(?:>[^\n]*\n)+\n?---\n\n/, '')
}

/**
 * 正文清洗：去 import 行与 JSX 组件；品牌 DESIGN.md 的 token frontmatter 转成 yaml 代码块。
 */
export function cleanBody(body, file) {
  let out = body.replace(/\r\n/g, '\n')
  const name = file.split('/').pop() ?? ''
  if (name.startsWith('designmd--')) {
    const m = out.match(/^---\n([\s\S]*?)\n---\n/)
    if (m) out = '```yaml\n' + m[1] + '\n```\n' + out.slice(m[0].length)
  } else {
    out = out.replace(/^---\n[\s\S]*?\n---\n/, '')
  }
  out = out.replace(/^import .*$/gm, '')
  out = out.replace(/^# \{[^}]*\}\s*$/gm, '')
  out = out.replace(/<[A-Za-z]*Video\b[^>]*\/?>/g, '>（视频示例见原文）')
  out = out.replace(/<ResourceCard\b([^>]*)\/?>/g, (_all, attrs) => {
    const get = (k) => {
      const r = attrs.match(new RegExp(k + '="([^"]*)"'))
      return r ? r[1] : ''
    }
    const t = get('title')
    const h = get('href')
    const d = get('description')
    return '- ' + (t ? `**${t}**` : '') + (h ? ` [链接](${h})` : '') + (d ? ` — ${d}` : '')
  })
  out = out.replace(/^\s*<\/?[A-Z][A-Za-z]*(\s[^>\n]*)?\/?>\s*$/gm, '')
  out = out.replace(/<PageDescription>([\s\S]*?)<\/PageDescription>/g, (_all, t) => `> ${t.trim()}\n`)
  out = out.replace(/\n{3,}/g, '\n\n')
  return out.trim()
}

/** 正文里的根相对路径 → 来源站点绝对地址 */
export function absolutizeLinks(html, file) {
  const name = file.split('/').pop() ?? ''
  let base = null
  for (const [prefix, url] of BASES) {
    if (name.startsWith(prefix)) {
      base = url
      break
    }
  }
  if (!base) return html
  return html.replace(/(src|href)="\/(?!\/)/g, `$1="${base}/`)
}

/** 页内锚点比较用的归一化：统一全半角与大小写，去掉空白、标点与符号 */
function anchorKey(s) {
  return s.normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, '')
}

function plainText(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * 修复正文里跳不动的页内锚点。
 *
 * 采集把原站的 <h2 id="x">标题</h2> 转成了「标题文字 + 空锚点 <a href="#x"></a>」，
 * 标题元素本身只剩按文字生成的 id（如 1-introduction）。正文里指向 #x 的小章节链接
 * 因此没有目标元素，点了不动。这里按三个确定性信号把链接改指回真实标题：
 *   1. 标题内空锚点带的原站 id（W3C 规范的头层级全靠这条）
 *   2. 归一化后 id 相同（下划线、点号与连字符的差异）
 *   3. 链接文字与标题文字归一化后相同；纯数字目标对应「N. 标题」
 * 只改唯一命中的链接；命中多个或找不到目标就原样保留，不猜。
 * 代码示例（pre/code）里的锚点不动。
 */
export function resolveInPageAnchors(html) {
  const holes = []
  const masked = html.replace(/<(pre|code)\b[\s\S]*?<\/\1>/g, (m) => {
    holes.push(m)
    return `\u0000${holes.length - 1}\u0000`
  })

  const ids = new Set()
  for (const m of masked.matchAll(/\bid="([^"]+)"/g)) ids.add(m[1])

  const heads = []
  for (const m of masked.matchAll(/<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/g)) {
    const attr = m[2]
    const inner = m[3]
    const idMatch = attr.match(/\bid="([^"]+)"/)
    const aliases = []
    for (const a of inner.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
      const href = a[1].match(/\bhref="#([^"]+)"/)
      if (href && !plainText(a[2])) aliases.push(href[1])
    }
    heads.push({ id: idMatch ? idMatch[1] : '', text: plainText(inner), aliases })
  }

  const headingIdFor = (target, linkText) => {
    const byAlias = new Set()
    for (const h of heads) if (h.id && h.aliases.includes(target)) byAlias.add(h.id)
    if (byAlias.size === 1) return [...byAlias][0]
    if (byAlias.size > 1) return null

    const key = anchorKey(target)
    const byId = heads.filter((h) => h.id && anchorKey(h.id) === key)
    if (byId.length === 1) return byId[0].id
    if (byId.length > 1) return null

    const textKey = anchorKey(linkText)
    if (textKey) {
      const byText = heads.filter((h) => h.id && anchorKey(h.text) === textKey)
      if (byText.length === 1) return byText[0].id
      if (byText.length > 1) return null
    }

    if (/^\d+$/.test(target)) {
      // 「16. 标题」优先于「16 标题」；每一步只认唯一命中
      for (const re of [new RegExp(`^${target}[.、)．]`), new RegExp(`^${target}\\s`)]) {
        const byNum = heads.filter((h) => h.id && re.test(h.text))
        if (byNum.length === 1) return byNum[0].id
        if (byNum.length > 1) return null
      }
    }
    return null
  }

  const out = masked.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/g, (all, attr, inner) => {
    const href = attr.match(/\bhref="#([^"]*)"/)
    if (!href) return all
    const target = href[1]
    if (!target || target === 'main' || ids.has(target)) return all
    const id = headingIdFor(target, plainText(inner))
    if (!id) return all
    return `<a${attr.replace(`href="#${target}"`, `href="#${id}"`)}>${inner}</a>`
  })

  return out.replace(/\u0000(\d+)\u0000/g, (_all, i) => holes[Number(i)])
}

/**
 * 字数口径：CJK 字符数 + 英文单词数。
 * 图片数：Markdown 图片语法出现次数。
 * 这两个口径与历史 catalog.json 完全一致（已对全库零误差校验）。
 * 统计对象是 frontmatter 之后的原始正文（含原文 header 行），不是清洗后的版本——
 * 否则数字会和历史 catalog 对不上，生成物一上线就变成假 diff。
 */
export function countStats(body) {
  const chars =
    (body.match(/[一-鿿]/g) ?? []).length + (body.match(/[A-Za-z][A-Za-z'-]*/g) ?? []).length
  const imgs = (body.match(/!\[[^\]]*\]\(/g) ?? []).length
  return { chars, imgs }
}

/**
 * 递归列出 content/ 下的正文文件。
 *
 * 排除：README.md（采集手册）与 PROJECT-SELECTION.md（项目选型规范）。
 * 两者与正文同在 content/ 下，但不是文章；在 content/ 新增手册要同步加进 SKIP。
 */
export async function listContentFiles(root) {
  const SKIP = new Set(['README.md', 'PROJECT-SELECTION.md'])
  const out = []
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) await walk(full)
      else if (entry.name.endsWith('.md') && !SKIP.has(entry.name)) out.push(full)
    }
  }
  await walk(root)
  return out.sort()
}

/** 读一篇正文并完成解析、清洗、统计 */
export async function loadDoc(root, absPath) {
  const raw = await readFile(absPath, 'utf8')
  const file = relative(root, absPath).split(sep).join('/')
  const { data, body } = parseFrontmatter(raw)
  if (!data.id || !data.title) return null
  // 统计走原始正文（与历史 catalog 同口径），渲染走清洗后正文
  const { chars, imgs } = countStats(body)
  return {
    id: data.id,
    file,
    path: absPath,
    title: data.title,
    source: data.source ?? '',
    section: data.section ?? '',
    tag: data.tag ?? '',
    fetched: data.fetched ?? '',
    status: data.status ?? 'full',
    publisher: data.publisher ?? '',
    known: data.known,
    chars,
    imgs,
    // 顺序要紧：先剥原文 header（# 标题 + 来源行 + 分隔线），
    // 再做 designmd 的 YAML→代码块转换。反过来的话代码块会被 header 规则吃掉。
    body: cleanBody(stripSourceHeader(body), file),
    raw,
  }
}
