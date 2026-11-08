/**
 * 客户端检索逻辑（header 内联搜索框与 ⌘K 面板共用）。
 *
 * 索引在构建期生成（/search-index.json，约 1.6MB），首次用到时才加载，
 * 之后走内存缓存，不塞进每个页面。
 *
 * 分词口径与构建期索引一致（见 lib/search.ts 的 tokenize）：
 * 英文按词、中文按二元组，两边都小写。
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

let index: SearchIndex | null = null
let pending: Promise<SearchIndex> | null = null

export function loadIndex(): Promise<SearchIndex> {
  if (index) return Promise.resolve(index)
  if (!pending) {
    pending = fetch('/search-index.json')
      .then((res) => res.json())
      .then((data: SearchIndex) => {
        index = data
        return data
      })
  }
  return pending
}

/** 查询词分词：英文按词、中文按二元组 */
export function tokenize(text: string): Set<string> {
  const terms = new Set<string>()
  const lower = text.toLowerCase()
  for (const w of lower.match(/[a-z][a-z0-9+#.-]{1,}/g) ?? []) terms.add(w)
  for (const seg of lower.match(/[一-鿿]+/g) ?? []) {
    for (let i = 0; i < seg.length - 1; i++) terms.add(seg.slice(i, i + 2))
  }
  return terms
}

/**
 * 检索：所有词都要命中（AND），命中词多的排前面。
 * 元数据（标题 / 来源 / 标签 / 分区）与正文倒排索引一起命中。
 */
export function query(idx: SearchIndex, rawQuery: string, limit = 30): SearchDoc[] {
  const terms = tokenize(rawQuery)
  if (!terms.size) return []

  const score = new Map<number, number>()
  for (const term of terms) {
    const hits = new Set<number>()

    idx.rows.forEach((row, i) => {
      const hay = `${row.title} ${row.publisher} ${row.tag} ${row.sectionTitle}`.toLowerCase()
      if (hay.includes(term)) hits.add(i)
    })
    const post = idx.inv[term]
    if (post) {
      for (const i of post.split(',')) hits.add(Number(i))
    }

    if (hits.size === 0) return []
    for (const i of hits) score.set(i, (score.get(i) ?? 0) + 1)
  }

  return [...score.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([i]) => idx.rows[i])
}
