import { defineCollection, z } from 'astro:content'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { glob } from 'astro/loaders'
import { relative } from 'node:path'
import { absolutizeLinks, listContentFiles, loadDoc, resolveInPageAnchors } from './lib/content.js'

const CONTENT_ROOT = fileURLToPath(new URL('../../content', import.meta.url))

/**
 * 渲染管线版本号，掺进 content 的 digest。
 * 增量构建的缓存键只看正文原文，管线代码（清洗、去 h1、锚点改写）改了不会失效，
 * 会拿到上次渲染的旧 HTML；改了预处理逻辑就把它加一，逼全库重渲染。
 */
const RENDER_VERSION = 4

/**
 * 正文集合的自定义 loader。
 *
 * 关键点：frontmatter 由本 loader 自己解析（src/lib/content.js），不走 Astro 的内置解析。
 * 原因：designmd--* 的正文里嵌了一段 YAML（品牌 token），以 --- 开头且含未加引号的
 * 冒号值，Astro 内置 YAML 解析会直接报错。
 *
 * 不用内置 glob loader 的原因：它只做 frontmatter 解析，清洗（去 import、去 JSX、
 * 品牌 DESIGN.md 的 YAML frontmatter 转代码块）与字数统计得另跑一遍，
 * 派生文件就会和页面渲染读到两套正文。这里一次读盘完成
 * 解析 → 清洗 → 统计 → 渲染，页面、catalog.json、搜索索引共用同一份数据。
 */
const uiSpecsLoader = {
  name: 'ui-specs-loader',
  async load(context) {
    const files = await listContentFiles(CONTENT_ROOT)
    const seen = new Set()

    for (const abs of files) {
      const doc = await loadDoc(CONTENT_ROOT, abs)
      if (!doc) continue
      seen.add(doc.id)
      await writeEntry(context, doc, abs)
    }

    // 清掉磁盘上已删除的条目
    for (const id of context.store.keys()) {
      if (!seen.has(id)) context.store.delete(id)
    }

    // 热更新：文件改动时重跑该篇
    if (context.watcher) {
      context.watcher.add(CONTENT_ROOT)
      const onChange = async (changed) => {
        if (!changed.endsWith('.md') || !changed.startsWith(CONTENT_ROOT)) return
        const doc = await loadDoc(CONTENT_ROOT, changed)
        if (doc) {
          await writeEntry(context, doc, changed)
          return
        }
        const stem = changed.split('/').pop() ?? ''
        for (const [id, entry] of context.store.entries()) {
          if (entry.filePath?.endsWith(stem)) context.store.delete(id)
        }
      }
      context.watcher.on('change', onChange)
      context.watcher.on('add', onChange)
    }
  },
}

async function writeEntry(context, doc, absPath) {
  const filePath = relative(fileURLToPath(context.config.root), absPath).split('\\').join('/')
  const data = await context.parseData({
    id: doc.id,
    data: {
      title: doc.title,
      source: doc.source,
      section: doc.section,
      tag: doc.tag,
      fetched: doc.fetched,
      status: doc.status,
      id: doc.id,
      publisher: doc.publisher,
      known: doc.known,
      chars: doc.chars,
      imgs: doc.imgs,
      file: doc.file,
    },
    filePath,
  })
  const rendered = await context.renderMarkdown(doc.body, { fileURL: pathToFileURL(absPath) })
  // 每篇源文都以自身标题作为首个 h1，页面 doc-title 已渲染同一标题，
  // 这里去掉正文首个 h1，避免页面出现两个同名大标题；原始正文与 /md 端点保持不变。
  rendered.html = stripLeadingH1(rendered.html)
  // 正文里指向小章节的 #锚点改指回真实标题 id（采集丢了原站 heading id，见 resolveInPageAnchors）
  rendered.html = resolveInPageAnchors(rendered.html)
  // 正文里的相对链接与根相对路径 → 上游绝对地址（以该篇 source 为基准，代码块跳过）
  rendered.html = absolutizeLinks(rendered.html, doc.source, doc.file)
  context.store.set({
    id: doc.id,
    data,
    body: doc.body,
    filePath,
    digest: context.generateDigest(`${RENDER_VERSION}\n${doc.raw}`),
    rendered,
  })
}

/**
 * 去掉正文开头的第一个 h1。
 * 采集的每篇源文都以自身标题开头，页面已用 doc-title 渲染标题，
 * 不去掉会出现两个同名大标题；只删开头那一个，正文中间的结构不动。
 */
function stripLeadingH1(html: string): string {
  return html.replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, '')
}

const specs = defineCollection({
  loader: uiSpecsLoader,
  schema: z.object({
    title: z.string(),
    source: z.string(),
    section: z.string(),
    tag: z.string(),
    fetched: z.string(),
    status: z.string(),
    id: z.string(),
    publisher: z.string(),
    known: z.enum(['full', 'partial']).optional(),
    chars: z.number(),
    imgs: z.number(),
    file: z.string(),
  }),
})

/**
 * 案例取值记录集合（examples/<站>/DECISIONS.md、FINDINGS.md）：
 * 只为在 /examples/<站>/decisions|findings/ 渲染可读页面；成品本体在 public/examples/。
 */
const examples = defineCollection({
  loader: glob({ pattern: '*/*.md', base: fileURLToPath(new URL('../../examples', import.meta.url)) }),
})

/**
 * 建站需求集合：仓库根 briefs/ 的 Markdown 就是唯一真源，没有额外的配置文件。
 *
 * 新增一站＝丢一份 briefs/<slug>.md 进去：frontmatter 写 name / category / lang
 * （可选 framework），正文写产品是什么、给谁用。dev 下 content 层会监听该目录，
 * 文件增改即重载；不用跑生成脚本，也不用重启。
 * layouts.md 是版式速查手册，同目录放着，靠 id 排除（见 data/case-briefs.ts）。
 */
const briefs = defineCollection({
  loader: glob({ pattern: '*.md', base: fileURLToPath(new URL('../../briefs', import.meta.url)) }),
  schema: z.object({
    name: z.string().optional(),
    category: z.string().optional(),
    lang: z.string().optional(),
    framework: z.enum(['react', 'vue']).optional(),
  }),
})

export const collections = { specs, examples, briefs }
