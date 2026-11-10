/**
 * 测试站点的建站需求：真源就是仓库根 `briefs/*.md`，一份文件一站，没有额外配置文件。
 *
 * frontmatter 写 name / category / lang（可选 framework），正文写产品是什么、给谁用。
 * 新增一站＝往里丢一份 Markdown，页面、详情页与 /ai/case-briefs.json 自动带上，
 * 不用跑生成脚本，也不用改任何清单。
 * 需求不进 examples/：换案例成品时不会把需求一起换掉。
 */
import { existsSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { getCollection } from 'astro:content'
// examples.ts 的 loadCases 由页面按需调用：有成品就显示链接，没有就不显示
import { allCases } from './examples'

export interface SiteBrief {
  slug: string
  name: string
  /** 产品类型短分类，需求列表与详情页显示用 */
  category: string
  lang: string
  /** 产品是什么、给谁用：只描述功能，不写页面区块、数值与版式 */
  product: string
  /** 生成时开不开框架：react / vue，省略即不开，按静态 HTML 手写 */
  framework?: 'react' | 'vue'
}

/** 数据口径，随 /ai/case-briefs.json 一起下发 */
export const BRIEFS_NOTE = [
  '建站需求只写产品是什么、给谁用。配色、版式、数值都不写在需求里：',
  '版式与配色由 hallmark 定，数值由基准规范定，页面区块由生成时按产品类型推。',
  'framework 可选 react 或 vue，省略即不开框架、按静态 HTML 手写；',
  '开启后组件用所选基准规范那一行配套的官方组件库。',
].join('')

/** briefs/ 里的手册文件，不是需求 */
const RESERVED = new Set(['layouts', 'README'])

/**
 * 需求目录：构建时本模块被捆进 dist/.prerender，import.meta.url 不可靠，
 * 按 cwd 找（构建与 dev 的 cwd 都是 site/，从仓库根跑也可能）。
 */
function briefsRoot(): string {
  const candidates = [resolve(process.cwd(), '../briefs'), resolve(process.cwd(), 'briefs')]
  const hit = candidates.find((dir) => existsSync(dir))
  if (!hit) throw new Error(`找不到 briefs/，试过：${candidates.join(' / ')}`)
  return hit
}

function briefFiles(): string[] {
  return readdirSync(briefsRoot())
    .filter((name) => name.endsWith('.md') && !RESERVED.has(name.slice(0, -3)))
    .sort()
}

/** 需求目录里最新一份文件的日期，端点用它标 updated */
function newestDate(): string {
  const times = briefFiles().map((name) => statSync(join(briefsRoot(), name)).mtimeMs)
  return times.length ? new Date(Math.max(...times)).toISOString().slice(0, 10) : ''
}

/** 读全量需求（按 slug 排序），顺带校验 frontmatter、正文与案例对应关系 */
export async function loadBriefs(): Promise<{ briefs: SiteBrief[]; updated: string }> {
  const entries = await getCollection('briefs')
  const briefs = entries
    .filter((entry) => !RESERVED.has(entry.id))
    .map((entry) => {
      const missing = (['name', 'category', 'lang'] as const).filter(
        (key) => !entry.data[key]?.toString().trim(),
      )
      if (missing.length) {
        throw new Error(`briefs/${entry.id}.md 的 frontmatter 缺字段：${missing.join(', ')}`)
      }
      const product = (entry.body ?? '').trim()
      if (!product) {
        throw new Error(`briefs/${entry.id}.md 正文是空的：产品描述写在 frontmatter 之后`)
      }
      const brief: SiteBrief = {
        slug: entry.id,
        name: entry.data.name!,
        category: entry.data.category!,
        lang: entry.data.lang!,
        product,
      }
      if (entry.data.framework) brief.framework = entry.data.framework
      return brief
    })
    .sort((a, b) => a.slug.localeCompare(b.slug))

  // 案例必须有对应需求；需求可以先有案例后跑（跑批中途是常态），所以只查这一个方向
  const slugs = new Set(briefs.map((b) => b.slug))
  const missing = allCases()
    .filter((c) => !slugs.has(c.slug))
    .map((c) => c.slug)
  if (missing.length) {
    throw new Error(`案例清单里有站没有建站需求：${missing.join(', ')}（补一份 briefs/<slug>.md）`)
  }

  return { briefs, updated: newestDate() }
}

export function briefBySlug(briefs: SiteBrief[], slug: string): SiteBrief {
  const brief = briefs.find((b) => b.slug === slug)
  if (!brief) throw new Error(`没有 ${slug} 的建站需求（briefs/${slug}.md）`)
  return brief
}
