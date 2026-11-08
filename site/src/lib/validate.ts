/**
 * 内容校验：内容有问题就让构建失败，而不是等 AI 读到坏数据。
 *
 * 校验项：
 *   1. frontmatter 必填字段齐全，section 在分区配置里
 *   2. 条目 id 唯一
 *   3. 正文里的站内链接指向的文章都存在
 *   4. 指南（site/src/data/guide.ts）里引用的文章都存在
 *
 * 在构建流水线里调用（site/src/integrations/pipeline.mjs），build 时生效。
 */
import { SECTIONS } from '../data/sections.ts'

/** loadDoc()（content.js）的返回结构：frontmatter 字段平铺在顶层 */
export interface Doc {
  id: string
  file: string
  path: string
  title: string
  source: string
  section: string
  tag: string
  fetched: string
  status: string
  publisher: string
  known?: string
  chars: number
  imgs: number
  body: string
  raw: string
}

const REQUIRED_FIELDS = ['id', 'title', 'source', 'section', 'tag', 'fetched', 'status', 'publisher']

/**
 * @param docs loadDoc() 的结果数组
 * @param usage 指南全文（含 `content/…` 路径引用）
 * @returns 错误清单，空数组表示通过
 */
export function validateDocs(docs: Doc[], usage: string): string[] {
  const errors: string[] = []
  const sectionKeys = new Set(SECTIONS.map((s) => s.key))
  const byFile = new Map(docs.map((d) => [d.file, d]))

  // 1. frontmatter
  for (const d of docs) {
    for (const field of REQUIRED_FIELDS) {
      const value = d[field as keyof Doc]
      if (value === undefined || value === '') {
        errors.push(`frontmatter 缺字段 ${field}：content/${d.file}`)
      }
    }
    if (d.section && !sectionKeys.has(d.section)) {
      errors.push(`section 不在分区配置里：content/${d.file}（section=${d.section}）`)
    }
  }

  // 2. id 唯一
  const seenId = new Map<string, string>()
  for (const d of docs) {
    if (!d.id) continue
    if (seenId.has(d.id)) errors.push(`id 重复：${d.id}（content/${seenId.get(d.id)} 与 content/${d.file}）`)
    else seenId.set(d.id, d.file)
  }

  // 3. 站内链接
  for (const d of docs) {
    const links = new Set<string>()
    for (const m of d.body.matchAll(/\]\(\/?content\/([^)#]+\.md)(?:#[^)]*)?\)/g)) {
      links.add(m[1])
    }
    for (const target of links) {
      if (!byFile.has(target)) errors.push(`站内链接指向不存在的文章：content/${target}（出现在 content/${d.file}）`)
    }
  }

  // 4. 指南里引用的文章
  // 指南里引用文章可能是反引号（旧 md）或引号（guide.ts 的字符串）
  for (const m of usage.matchAll(/[`"']content\/([^`"'\n]+\.md)[`"']/g)) {
    if (!byFile.has(m[1])) errors.push(`指南引用了不存在的文章：content/${m[1]}`)
  }

  return errors
}

export interface StarPointCheck {
  q: string
  a: string
  cite: string
}

export interface StarPointFile {
  id: string
  name: string
  domain: string
  select: string
  value_notes?: string
  checks?: StarPointCheck[]
  tasks: string[]
  articles: string[]
}

/** 测量数值：带单位的量、色值、「N 到 M」区间。select 里不许有，只许进 value_notes */
const MEAS_RE =
  /(\d+\s*(px|rem|em|%|:1|°|ms|秒|倍))|(#[0-9a-fA-F]{3,8})|(\d+\s*(到|~|–|-)\s*\d+\s*(px|%|rem|em|秒|ms|°)?)/

/** 设计地图数据校验（site/src/data/star-points.json）：坏引用让构建失败 */
export function validateStarPoints(
  points: StarPointFile[],
  byFile: Map<string, Doc>,
  sectionKeys: Set<string>,
  extraArticles: string[] = [],
): string[] {
  const errors: string[] = []
  const seen = new Set<string>()
  for (const p of points) {
    const where = `设计地图点 ${p.id || '(缺 id)'}`
    if (!p.id || seen.has(p.id)) errors.push(`${where}：id 缺失或重复`)
    seen.add(p.id)
    if (!p.name) errors.push(`${where}：缺 name`)
    if (!p.select) errors.push(`${where}：缺 select`)
    else if (MEAS_RE.test(p.select)) {
      errors.push(`${where}：select 含测量数值（数值只许进 value_notes）`)
    }
    if (p.value_notes !== undefined && !/\d/.test(p.value_notes)) {
      errors.push(`${where}：value_notes 不含任何数字`)
    }
    if (p.checks !== undefined) {
      if (!Array.isArray(p.checks) || p.checks.length < 1 || p.checks.length > 2) {
        errors.push(`${where}：checks 必须 1-2 条`)
      } else {
        for (const [i, c] of p.checks.entries()) {
          const wc = `${where} checks[${i}]`
          if (!c?.q || !c.a || !c.cite) {
            errors.push(`${wc}：q / a / cite 必填`)
            continue
          }
          const m = /^content\/(.+\.md):(\d+)$/.exec(c.cite)
          if (!m) {
            errors.push(`${wc}：cite 格式应为 content/<路径>:<行号>`)
            continue
          }
          const doc = byFile.get(m[1])
          if (!doc) {
            errors.push(`${wc}：cite 指向不存在的文章 content/${m[1]}`)
            continue
          }
          const lineNo = Number(m[2])
          const lines = doc.raw.split('\n')
          if (lineNo < 1 || lineNo > lines.length) {
            errors.push(`${wc}：行号越界（content/${m[1]} 共 ${lines.length} 行）`)
            continue
          }
          // 答案里的数字必须出现在所引行的上下一行，行号漂移就让构建失败
          const digits = c.a.match(/\d+/g) ?? []
          const window = lines.slice(Math.max(0, lineNo - 2), lineNo + 1).join('\n')
          if (digits.length && !digits.some((d) => window.includes(d))) {
            errors.push(`${wc}：答案数字没出现在 ${m[1]}:${lineNo} 上下一行，行号疑漂移`)
          }
        }
      }
    }
    if (!p.domain || !sectionKeys.has(p.domain)) {
      errors.push(`${where}：domain 不是合法分区（${p.domain}）`)
    }
    if (
      !Array.isArray(p.tasks) ||
      p.tasks.length < 1 ||
      p.tasks.length > 3 ||
      p.tasks.some((t) => !/^s([1-9]|1[0-9])$/.test(t))
    ) {
      errors.push(`${where}：tasks 必须是 1-3 个 s1..s19`)
    }
    if (!Array.isArray(p.articles) || p.articles.length < 1 || p.articles.length > 6) {
      errors.push(`${where}：articles 必须 1-6 个`)
    } else {
      for (const a of p.articles) {
        if (!byFile.has(a)) errors.push(`${where}：文章不存在 content/${a}`)
      }
    }
  }
  // 每篇必须被至少一个点牵引：新文章不挂点、旧点引用被删，都会让构建失败
  const covered = new Set<string>()
  for (const p of points) for (const a of p.articles ?? []) covered.add(a)
  // 项目选型派生点（MAIN_SOURCES 里 files 非空的行）同样算牵引：复刻站点卡只填进文件列表也能过
  for (const a of extraArticles) covered.add(a)
  for (const file of byFile.keys()) {
    if (!covered.has(file))
      errors.push(`文章未被牵引：content/${file}（补进 star-points.json 某个点的 articles，或填进 MAIN_SOURCES 某行的 files）`)
  }
  return errors
}
