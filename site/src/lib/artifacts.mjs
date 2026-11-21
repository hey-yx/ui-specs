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
import { TYPE_BY_DOMAIN, METHOD_REQUIRED, REQUIRED_RULES, REQUIRED_SCENARIOS, SHOW_PROJECT_SELECTION, requiredRulesFor } from '../data/guide.ts'
import { compareIds } from './model.ts'

/** 取条目的 frontmatter（兼容 spec.data 与扁平对象两种形态） */
function fields(item) {
  return item.data ?? item
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
    '按需拉取优先：仓库外优先拉轻端点 /ai/routing.json、/ai/reference-screens.json，再按需拉 /ai/points/<id>.json 与原文 /md/<path>，避免一次性加载整包被截断。仓库内可直接读本地路径。',
    '选型与骨架解耦：按产品同构从 /ai/routing.json 的 main_sources（TDesign / Carbon / Primer / Polaris / Spectrum / Fluent 2 / Apple HIG）定唯一数值底座；结构层在仓库内由 Hallmark（对照 .hallmark/log.json 避重）加 briefs/layouts.md 决定，在仓库外参考 /ai/reference-screens.json 与 layouts/howto 设计点自由组合，不套用固定预制外壳。',
    '表面语法与外壳自由分化：brands-* 仅用于明确复刻某品牌或抽取局部手法，禁止拿英文品牌 DESIGN.md 硬套普通中文产品。页底色、顶栏形态、页脚形态与分隔方式必须从选中选型与产品品类长出来（如 0px 直角格栅、深色全局顶栏、品牌浅底带、半透明分栏、极简两极或报头导航），禁止把「#ffffff / #f3f3f3 白卡灰底 + 同一单行页脚」当默认通用皮肤；多站生成时确保同批顶栏不重复、页脚每种不超过 2 次、灰底不超过半数。',
    '反 AI Slop 底线：去掉 logo 和主色后仍能认出这是什么产品；首屏必须有真实业务物件或数据（数据型首屏给足行密度或核心指标），不做满屏居中空 hero 与三列图标卡片；强调色面积克制；文案写具体事实与动作，页面不写设计说明或「演示口径」自检词，标题与页脚不对仗、不喊生活方式口号。',
    '交互、动效与图表：有状态变化时必须覆盖空态、加载、错误、超长四态；入场先给初态，出场等过渡结束再隐藏，prefers-reduced-motion 关动画；悬停态包进 @media (hover: hover)；图表一律内联 SVG，不引外部图表库。',
    '可访问性底线高于任何风格：正文对比度 >= 4.5:1、大字与控件边界 >= 3:1、键盘路径完整且焦点环高对比可见、独立触控目标 >= 44px（桌面次要链接 >= 24px）；320 / 375 / 768 / 1280 四档无横向溢出。',
    '两种交付模式：外部开发者默认模式只做首页（除非需求指定多页），适配用户项目技术栈（无工程则单文件 HTML），直接交付可运行代码与简短说明，不要求五件套文档；仓库内案例验收模式跑完整 6 步与评审底线 s17、scripts/score-case.py，交付 index.html、DECISIONS.md、FINDINGS.md、preview.png、meta.json 五件。',
    '原文端点 /md/<path>（path 即 articles[].path）；点带 method 的先读 method 方法篇，数值仍按裁决优先级从主源取；缺口按 guide 的「数值文章缺口与派生」回源或兜底。',
    '需求已有名字就沿用；没给名字才走 NameYouLike 口径（起名提示词与核验：https://github.com/hey-yx/NameYouLike）：英文产品名、绑产品事实、落一次真碰撞检索。',
  ],
  type_by_domain: TYPE_BY_DOMAIN,
  protocols: {
    values:
      '规范值：仓库审计模式下数值必须连 文件:行号 记进取值记录；同一 token 只认一篇数值原文；checks 是自测题，出稿前逐题自查。',
    patterns:
      '场景模式：逐字段文案、错误提示与行为规则可照抄原文（官方模式文章自带完整可抄代码与错误文案）；模式内部数值以主源为准。',
    layouts:
      '版型：只借区块顺序、转化结构与取舍逻辑，照抄布局是违规；具体尺寸、间距、字号按主源取。',
    styles:
      '品牌语言：仅在明确复刻某品牌时沿用其 DESIGN.md 色板与排版语言；一般中文产品只用它作局部手法参考，禁止拿英文品牌皮肤硬套中文界面，数值一律回选型行取。',
    cases: '案例：借取舍逻辑与实证方法，不借数值；案例里的效果数字是叙事证据，不是设计值。',
  },
}

/** design-points.json：给 AI 的实时指南包（设计地图数据 + 站点指南 + 文章元数据）
 *
 * 每个设计点带选点标准（select）与自测题（checks）；
 * 文章只留路由元数据，原文端点统一 /md/<path>；引用的文章不存在时直接抛错，
 * 让构建失败，不发布坏路由。
 */
export function buildDesignPoints(items, starData, guide) {
  const byFile = new Map(items.map((it) => [fields(it).file, fields(it)]))
  const requiredByTask = {}
  for (const r of REQUIRED_RULES) {
    for (const t of r.tasks) (requiredByTask[t] ??= []).push(r.label)
  }
  const points = (starData.points ?? [])
    .filter((p) => SHOW_PROJECT_SELECTION || p.kind !== 'source')
    .map((p) => {
      const out = {
        id: p.id,
        name: p.name,
        domain: p.domain,
        type: TYPE_BY_DOMAIN[p.domain] ?? 'values',
        select: p.select,
        // 选型点标记：guide 里让读者按 kind==='source' 找基准规范文章
        ...(p.kind ? { kind: p.kind } : {}),
        ...(p.stacks ? { stacks: p.stacks } : {}),
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
      if (p.method) {
        const f = byFile.get(p.method)
        if (!f) throw new Error(`star-points.json 引用的方法篇不存在：${p.method}`)
        out.method = { path: p.method, title: f.title, publisher: f.publisher, chars: f.chars }
      }
      if (p.checks) out.checks = p.checks
      const required = requiredRulesFor({ id: p.id, tasks: p.tasks ?? [] }).map((r) => r.title)
      if (required.length) out.required = required
      return out
    })
  // 两套索引分清：required_points 是场景必读（本库判定），related_points 是同场景全部相关点
  const pointsByRequiredTask = Object.fromEntries(REQUIRED_SCENARIOS.map((r) => [r.id, r.points]))
  // 反查索引：设计场景 → 设计点 id，免得消费方全量扫描过滤
  const pointsByTask = {}
  for (const p of points) {
    for (const t of p.tasks ?? []) {
      ;(pointsByTask[t] ??= []).push(p.id)
    }
  }
  return {
    usage: USAGE,
    ...(SHOW_PROJECT_SELECTION
      ? {
          selection: {
            baseline_required: true,
            baseline_points: 'project-*',
            rule: '先按产品语境选 project-* 里的一行作为唯一基准；数值只从该行 files 取；不能跨系统拼值。',
          },
        }
      : {}),
    guide,
    required: REQUIRED_RULES,
    required_scenarios: REQUIRED_SCENARIOS,
    method_required: METHOD_REQUIRED,
    tasks: Object.fromEntries(
      Object.entries(starData.tasks ?? {})
        .filter(([id]) => SHOW_PROJECT_SELECTION || id !== 's1')
        .map(([id, t]) => {
          const curated = pointsByRequiredTask[id] ?? []
          const related = pointsByTask[id] ?? []
          const out = { ...t, required_points: curated, related_points: related }
          if (requiredByTask[id]) out.required = requiredByTask[id]
          if (!curated.length) {
            out.points_note = id === 's1'
              ? '选型入口：候选点在 project-*，选中一行即为基准'
              : 'how-to 场景：讲怎么用库，不配必读点'
          }
          return [id, out]
        }),
    ),
    required_points_by_task: pointsByRequiredTask,
    points_by_task: pointsByTask,
    points,
  }
}
