/**
 * 站点数据模型：把内容集合组织成页面、派生文件、搜索索引共用的结构。
 *
 * 单一真源是 content/** 的 frontmatter；分区顺序与显示信息来自 src/data/sections.ts。
 * 这里只做组装，不做任何内容判断。
 */
import type { CollectionEntry } from 'astro:content'
import { SECTIONS, type SectionDef } from '../data/sections'

export type Spec = CollectionEntry<'specs'>

export interface SectionWithItems extends SectionDef {
  items: Spec[]
}

export interface SiteModel {
  sections: SectionWithItems[]
  bySection: Map<string, SectionWithItems>
  all: Spec[]
  total: number
  totalChars: number
}

/** 条目 id → 站点路径。id 形如 howto-0，路径用 /a/<section>/<file-stem>/ */
export function specPath(spec: Spec): string {
  const stem = spec.data.file.replace(/^[^/]+\//, '').replace(/\.md$/, '')
  return `/a/${spec.data.section}/${stem}/`
}

/** 按分区配置顺序组装全部条目 */
export function buildModel(specs: Spec[]): SiteModel {
  const bySection = new Map<string, Spec[]>()
  for (const spec of specs) {
    const list = bySection.get(spec.data.section)
    if (list) list.push(spec)
    else bySection.set(spec.data.section, [spec])
  }

  const sections: SectionWithItems[] = SECTIONS.map((def) => {
    const items = bySection.get(def.key) ?? []
    // 分区内保持条目 id 序号顺序（历史 catalog 就是这个顺序）
    items.sort((a, b) => compareIds(a.data.id, b.data.id))
    return { ...def, items }
  })

  const all = sections.flatMap((s) => s.items)
  return {
    sections,
    bySection: new Map(sections.map((s) => [s.key, s])),
    all,
    total: all.length,
    totalChars: all.reduce((sum, s) => sum + s.data.chars, 0),
  }
}

/** id 形如 howto-10 / dtcg-3，按尾部数字排序；数字相同时按前缀再排 */
function compareIds(a: string, b: string): number {
  const pa = splitId(a)
  const pb = splitId(b)
  if (pa.n !== pb.n) return pa.n - pb.n
  return pa.p < pb.p ? -1 : pa.p > pb.p ? 1 : 0
}

function splitId(id: string): { p: string; n: number } {
  const m = id.match(/^(.*?)-(\d+)$/)
  return m ? { p: m[1], n: Number(m[2]) } : { p: id, n: 0 }
}

export { SECTIONS }
