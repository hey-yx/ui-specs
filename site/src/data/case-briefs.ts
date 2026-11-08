/** 测试站点的建站需求（真源：仓库根 briefs/sites.json）。
 *
 * 需求只写产品要做什么，外加语气与一个差异化约束（色相方向或结构倾向）。
 * 具体数值与完整版式由指南七步在生成时定，不写进这里。
 * 站点页面（/briefs/、/briefs/<站>/）与 /ai/case-briefs.json 共用这一份。
 * 每站的 briefs/<slug>.md 由 scripts/build-briefs.mjs 从 JSON 生成，不进 examples/，
 * 换案例成品时不会把需求一起换掉。
 */
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { CASES } from './examples'

export interface SiteBrief {
  slug: string
  name: string
  /** 产品类型短分类，需求列表与详情页显示用 */
  category: string
  lang: string
  product: string
  audience: string
  coreTask: string
  /** 语气与气质：决定文案腔调，不写数值 */
  tone: string
  /** 差异化约束：色相方向或结构倾向，具体取值仍按基准规范 */
  direction: string
  mustHave: string[]
  outOfScope: string
}

interface BriefFile {
  updated: string
  note: string
  sites: SiteBrief[]
}

/** 构建与 dev 的 cwd 是 site/；从仓库根跑也可能，两个位置都试一遍 */
function briefsPath(): string {
  const candidates = [
    resolve(process.cwd(), '../briefs/sites.json'),
    resolve(process.cwd(), 'briefs/sites.json'),
  ]
  const hit = candidates.find((p) => existsSync(p))
  if (!hit) throw new Error(`找不到 briefs/sites.json，试过：${candidates.join(' / ')}`)
  return hit
}

const file = JSON.parse(readFileSync(briefsPath(), 'utf8')) as BriefFile

export const BRIEFS_UPDATED = file.updated
export const BRIEFS_NOTE = file.note
export const SITE_BRIEFS: SiteBrief[] = file.sites

export const BRIEF_BY_SLUG = new Map(SITE_BRIEFS.map((b) => [b.slug, b]))

/** 案例清单与建站需求必须一一对应，缺一份就在构建时失败，而不是发布半套数据 */
const missing = CASES.filter((c) => !BRIEF_BY_SLUG.has(c.slug)).map((c) => c.slug)
const orphan = SITE_BRIEFS.filter((b) => !CASES.some((c) => c.slug === b.slug)).map((b) => b.slug)
if (missing.length || orphan.length) {
  throw new Error(`建站需求与案例清单不一致：缺需求 ${missing.join(', ') || '无'}；无对应案例 ${orphan.join(', ') || '无'}`)
}

export function briefFor(slug: string): SiteBrief {
  const brief = BRIEF_BY_SLUG.get(slug)
  if (!brief) throw new Error(`没有 ${slug} 的建站需求`)
  return brief
}
