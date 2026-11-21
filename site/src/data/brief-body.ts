/** 建站需求正文的轻量解析：首段做摘要，`##` 分节，`-` 列表转块。
 *  只服务 briefs/*.md 的受控格式，不引第三方 Markdown 依赖。
 */
export type BriefBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }

export interface BriefSection {
  title: string
  blocks: BriefBlock[]
}

export interface ParsedBrief {
  lead: string
  sections: BriefSection[]
}

export function parseBriefBody(body: string): ParsedBrief {
  const lines = body.replace(/\r\n/g, '\n').split('\n')
  let lead = ''
  let current: BriefSection | null = null
  let paragraph: string[] = []
  let list: string[] = []
  const sections: BriefSection[] = []

  const flushParagraph = () => {
    const text = paragraph.join(' ').trim()
    paragraph = []
    if (!text) return
    if (current) current.blocks.push({ type: 'p', text })
    else lead = lead ? `${lead} ${text}` : text
  }

  const flushList = () => {
    if (!list.length) return
    const items = list
    list = []
    if (!current) current = { title: '', blocks: [] }
    current.blocks.push({ type: 'list', items })
    if (!sections.includes(current)) sections.push(current)
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flushParagraph()
      flushList()
      continue
    }
    if (line.startsWith('## ')) {
      flushParagraph()
      flushList()
      current = { title: line.slice(3).trim(), blocks: [] }
      sections.push(current)
      continue
    }
    if (line.startsWith('- ')) {
      flushParagraph()
      list.push(line.slice(2).trim())
      continue
    }
    flushList()
    paragraph.push(line)
  }

  flushParagraph()
  flushList()

  return {
    lead,
    sections: sections.filter((section) => section.title || section.blocks.length),
  }
}

export function briefLead(body: string): string {
  return parseBriefBody(body).lead
}
