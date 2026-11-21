/**
 * 搜索索引（构建期生成，客户端检索）。
 *
 * 旧站的做法是浏览器里现拉全部正文建索引，首搜要等十几秒。
 * 现在改成构建期生成一份倒排索引（约 1.6MB，gzip 后约 0.5MB），客户端直接查，搜完即出。
 *
 * 索引结构：
 *   rows  文档元数据（id / 标题 / 来源 / 分区 / 标签 / 路径）
 *   inv   词 → 文档下标列表，英文按词、中文按二元组
 *
 * 剪枝：出现在 maxDf 篇以上的词不入索引，避免索引膨胀到几 MB。
 * maxDf 不能太小：全库正文是英文规范、标题却是中文，
 * 「contrast」这类高频设计词（正文里 200+ 篇出现）若被剪掉，
 * 就再也搜不到，而标题/标签匹配救不回来（标题里没有这些英文词）。
 */

export interface SearchDoc {
  id: string
  title: string
  publisher: string
  section: string
  sectionTitle: string
  tag: string
  path: string
}

export interface SearchIndex {
  rows: SearchDoc[]
  inv: Record<string, string>
}

/** 正文 → 可索引词集合 */
export function tokenize(body: string): Set<string> {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`|~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()

  const terms = new Set<string>()
  for (const w of text.match(/[a-z][a-z0-9+#.-]{1,}/g) ?? []) terms.add(w)
  for (const seg of text.match(/[一-鿿]+/g) ?? []) {
    for (let i = 0; i < seg.length - 1; i++) terms.add(seg.slice(i, i + 2))
  }
  return terms
}

/**
 * 建倒排索引。
 * @param maxDf 文档频次上限，超过的词不入索引
 */
export function buildIndex(
  docs: Array<{ meta: SearchDoc; body: string }>,
  maxDf = 320,
): SearchIndex {
  const rows = docs.map((d) => d.meta)
  const inv = new Map<string, number[]>()

  docs.forEach((doc, i) => {
    for (const term of tokenize(doc.body)) {
      const list = inv.get(term)
      if (list) list.push(i)
      else inv.set(term, [i])
    }
  })

  const compact: Record<string, string> = {}
  for (const [term, list] of inv) {
    if (list.length <= maxDf) compact[term] = list.join(',')
  }
  return { rows, inv: compact }
}
