/**
 * 机器端点数据生成器（站点端点共用一份）。
 *
 * 输入是 content/** 的 frontmatter，输出是 /catalog.json（机器目录）与
 * /ai/meta.json（分区用途）。
 *
 * 纯 JS 且不依赖 astro:content，站点端点直接 import。
 * 条目结构两种都吃：内容集合的 spec.data，或 content.js 里 loadDoc 的扁平对象。
 */
import { SECTIONS } from '../data/sections.ts'
import { TYPE_BY_DOMAIN, METHOD_REQUIRED } from '../data/guide.ts'

/** 取条目的 frontmatter（兼容 spec.data 与扁平对象两种形态） */
function fields(item) {
  return item.data ?? item
}

/** id 形如 howto-10 / dtcg-3，按尾部数字排序；数字相同时按前缀再排 */
function compareIds(a, b) {
  const pa = splitId(a)
  const pb = splitId(b)
  if (pa.n !== pb.n) return pa.n - pb.n
  return pa.p < pb.p ? -1 : pa.p > pb.p ? 1 : 0
}

function splitId(id) {
  const m = /^(.*?)-(\d+)$/.exec(id ?? '')
  return m ? { p: m[1], n: Number(m[2]) } : { p: id ?? '', n: 0 }
}

/** 按分区顺序分组条目；分区内按 id 序号排序（与站点页面顺序一致） */
export function groupBySection(items) {
  const bySection = new Map(SECTIONS.map((s) => [s.key, []]))
  for (const item of items) {
    const list = bySection.get(fields(item).section)
    if (list) list.push(item)
  }
  for (const list of bySection.values()) {
    list.sort((a, b) => compareIds(fields(a).id, fields(b).id))
  }
  return bySection
}

/** catalog.json：机器可读目录 */
export function buildCatalog(items) {
  const bySection = groupBySection(items)
  const out = {}
  for (const section of SECTIONS) {
    out[section.key] = {
      title: section.title,
      items: (bySection.get(section.key) ?? []).map((item) => {
        const f = fields(item)
        const entry = {
          id: f.id,
          tag: f.tag,
          title: f.title,
          meta: f.publisher,
          src: f.source,
          file: f.file,
          status: f.status,
          chars: f.chars,
          imgs: f.imgs,
        }
        if (f.known) entry.known = f.known
        return entry
      }),
    }
  }
  return out
}

/** meta.json：分区用途说明，给 AI 路由用 */
export function buildMetaJson() {
  const out = {}
  for (const def of SECTIONS) {
    out[def.key] = { purpose: def.purpose, use_when: def.use_when }
  }
  return { sections: out }
}

/** usage：核心规则 + 按信息类型的用法协议（不同信息给 AI 的导向不同） */
const USAGE = {
  core: [
    '拿到设计任务：在 tasks 选设计场景（用 points_by_task 反查）、或按 select 匹配设计点，读它 articles 指的原文（2-5 篇），不要全库扫描。',
    '原文端点 /md/<path>（path 即 articles[].path）；场景级路由与「产品语境 → 基准规范」的项目选型方案见 guide 字段。',
    'select 是选点标准，value_notes 是取值示意，两者都不拥有数值决定权；value_notes 是坐标不是答案，直接抄示意值不读原文算没取到值；数值一律以基准规范原文为准，引用前连 文件:行号 记进取值记录。',
    '数值冲突：一个项目只选一个基准规范，基准规范拥有数值决定权，其他来源只取原则与反例；禁止跨源拼数值。标题 32px（howto）与品牌 88px（品牌 DESIGN.md）这类差异不算矛盾，按基准规范定。',
    '可访问性底线（对比度/焦点/键盘/减少动效）高于任何风格。',
    '取值记录引用一律写 content/ 完整路径:行号，缩写不算出处。',
    '站点命名走 NameYouLike 口径（起名提示词与核验：https://github.com/hey-yx/NameYouLike）：英文产品名、绑产品事实、落一次真碰撞检索，命名结果记进取值记录。',
    '方法层必读（method_required）：配色、层级与布局先读方法点定搭配（含纵向间距与多栏余量），再取数值。',
    '页面结构与防模板化骨架走 hallmark skill，数值与规范依据以本库为准。',
    '项目里的图表用成熟图表库渲染（ECharts / Chart.js 等）；纯测试页不必用库，内联 SVG 即可。',
    '出稿后真跑交互与行为，行为或 UI 不对就回到设计点与原文重新推，不将就。',
  ],
  type_by_domain: TYPE_BY_DOMAIN,
  protocols: {
    values:
      '规范值：数值必须连 文件:行号 记进取值记录才许引用；一个项目只认一个基准规范；checks 是自测题，出稿前逐题自查，答不出说明没读原文。',
    patterns:
      '场景模式：逐字段文案、错误提示与行为规则可照抄原文（GOV.UK 类文章自带完整可抄代码与错误文案）；模式内部数值同样以原文为准。',
    layouts:
      '版型：只借区块顺序、转化结构与取舍逻辑，照抄布局是违规；具体尺寸、间距、字号按 values 的规矩从原文取。',
    styles:
      '品牌语言：品牌 DESIGN.md 只借用色板与排版语言作气质参考，落成具体 token 数值仍回基准规范取；只有复刻既有品牌才对齐它的值。',
    cases: '案例：借取舍逻辑与实证方法，不借数值；案例里的效果数字是叙事证据，不是设计值。',
  },
}

/** design-points.json：给 AI 的实时指南包（设计地图数据 + 站点指南 + 文章元数据）
 *
 * 每个设计点带选点标准（select）、取值示意（value_notes）与自测题（checks）；
 * 文章只留路由元数据，原文端点统一 /md/<path>；引用的文章不存在时直接抛错，
 * 让构建失败，不发布坏路由。
 */
export function buildDesignPoints(items, starData, guide) {
  const byFile = new Map(items.map((it) => [fields(it).file, fields(it)]))
  const points = (starData.points ?? []).map((p) => {
    const out = {
      id: p.id,
      name: p.name,
      domain: p.domain,
      type: TYPE_BY_DOMAIN[p.domain] ?? 'values',
      select: p.select,
      tasks: p.tasks,
      articles: p.articles.map((rel) => {
        const f = byFile.get(rel)
        if (!f) throw new Error(`star-points.json 引用的文章不存在：${rel}`)
        const art = {
          path: rel,
          title: f.title,
          publisher: f.publisher,
          chars: f.chars,
        }
        if (f.known) art.known = f.known
        return art
      }),
    }
    if (p.value_notes) out.value_notes = p.value_notes
    if (p.checks) out.checks = p.checks
    return out
  })
  // 反查索引：设计场景 → 设计点 id，免得消费方全量扫描过滤
  const pointsByTask = {}
  for (const p of points) {
    for (const t of p.tasks ?? []) {
      ;(pointsByTask[t] ??= []).push(p.id)
    }
  }
  return {
    usage: USAGE,
    guide,
    method_required: METHOD_REQUIRED,
    tasks: starData.tasks ?? {},
    points_by_task: pointsByTask,
    points,
  }
}
