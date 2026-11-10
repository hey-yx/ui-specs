/**
 * 项目选型方案：由 guide.ts 的 MAIN_SOURCES 派生设计地图点，单一真源，不手抄第二份。
 *
 * - 每个产品语境一个点，tasks 挂在 s17（项目选型方案），设计地图上作为独立分区显示；
 * - articles 直接用基准规范文章（去掉 content/ 前缀），端点构建时校验文章存在；
 * - files 为空的行（两个品牌行）没有固定文章，不派生成点，只在对照表里保留。
 */
import { MAIN_SOURCES, type MainSourceStack } from './guide.ts'
import { SELECT_SHOTS, type SelectShot } from './select-shots.ts'

export interface ProjectPointFile {
  id: string
  name: string
  domain: string
  group: string
  /** 选型行标记：星图用方块与「选规范」标注，和设计点分开 */
  kind?: 'source'
  select: string
  /** 该行支持的框架与官方组件库，弹窗里单独一块 */
  stacks?: MainSourceStack[]
  /** 官方库但不分 React / Vue：服务端模板、Web Components 这类 */
  libs?: { name: string; kind: string }[]
  tasks: string[]
  articles: string[]
  /** 主题系统截图：只有收录过的行才有，弹窗顶部展示 */
  shot?: SelectShot
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildProjectPoints(): ProjectPointFile[] {
  return MAIN_SOURCES.filter((m) => m.files.length > 0).map((m) => {
    const id = m.id ?? `project-${slug(m.source)}`
    return {
      id,
      name: m.short ?? m.context,
      domain: 'tokens',
      group: '项目选型方案',
      kind: 'source',
      select: `项目语境是「${m.context}」时选它：基准规范 ${m.source} 拥有数值决定权，其他来源只取原则与反例；缺的维度按「基准规范缺口与派生」回源或走兜底档。`,
      stacks: m.stacks,
      libs: m.libs,
      tasks: ['s17'],
      articles: m.files.map((f) => f.replace(/^content\//, '')),
      shot: SELECT_SHOTS[id],
    }
  })
}
