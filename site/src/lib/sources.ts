import { SOURCE_GROUPS } from '../data/sources'

/** 统计各来源组的篇数（构建期按 publisher/source 匹配，先命中先算，不重复计数） */
export function countSources(
  items: Array<{ publisher: string; source: string }>,
): Array<{ name: string; count: number; note?: string }> {
  const groups = SOURCE_GROUPS.map((group) => ({
    name: group.name,
    note: group.note,
    publishers: group.publishers ?? [],
    domains: group.domains ?? [],
  }))
  const counts = new Map<string, number>(groups.map((g) => [g.name, 0]))
  for (const item of items) {
    const publisher = (item.publisher ?? '').toLowerCase()
    const source = (item.source ?? '').toLowerCase()
    for (const group of groups) {
      const hit =
        group.publishers.some((p) => publisher.includes(p.toLowerCase())) ||
        group.domains.some((d) => source.includes(d.toLowerCase()))
      if (hit) {
        counts.set(group.name, (counts.get(group.name) ?? 0) + 1)
        break
      }
    }
  }
  return groups.map((g) => ({ name: g.name, count: counts.get(g.name) ?? 0, note: g.note }))
}
