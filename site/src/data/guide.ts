/**
 * 指南数据（站点内唯一真源）。
 *
 * 历史：先前的 AI-USAGE.md 与 AGENTS.md 已删，改用结构化数据。
 * 页面（/starmap/）按本文件渲染成表格与分区；/ai/design-points.json 的 guide 字段由
 * buildGuideMarkdown() 以 slim 模式生成（去掉与 points 重复的任务→文章表），
 * /ai/guide.md|json 用 full 模式（独立可读）；构建前校验直接读本文件的 content/ 路径。
 * 三处共享这一份。
 */

export type MainSource = {
  /** 产品语境：决定这个项目该选哪个基准规范 */
  context: string
  /** 设计地图点 id：项目选型派生点用它，避免同一基准规范多语境撞 id */
  id?: string
  /** 设计地图点短名（项目选型方案用） */
  short?: string
  /** 基准规范名称 */
  source: string
  /** 基准规范文章：一个项目只从这些文件里取数值 */
  files: string[]
  /** 补充说明：细页、分区入口或数值可取性 */
  note?: string
}

export const MAIN_SOURCES: MainSource[] = [
  {
    context: "原生应用（iOS / macOS / visionOS）",
    id: "project-apple-hig",
    short: "Apple 平台",
    source: "Apple HIG",
    files: ["content/color/developer.apple.com--color.md", "content/type/developer.apple.com--typography.md", "content/layout/developer.apple.com--layout.md", "content/icons/developer.apple.com--icons.md"],
    note: "布局篇只作原则，间距按缺口规则回源；图标在 icons 分区",
  },
  {
    context: "商家后台 / 商家工具",
    id: "project-polaris",
    short: "商家后台",
    source: "Polaris",
    files: ["content/color/polaris.shopify.com--color.md", "content/type/polaris.shopify.com--typography.md", "content/layout/polaris.shopify.com--layout.md", "content/icons/polaris.shopify.com--iconography.md", "content/motion/polaris.shopify.com--motion.md", "content/layout/polaris.shopify.com--depth.md", "content/dataviz/polaris.shopify.com--data-visualizations.md"],
  },
  {
    context: "开发者工具 / 代码协作",
    id: "project-primer",
    short: "开发者工具",
    source: "Primer",
    files: ["content/color/primer.style--color.md", "content/type/primer.style--typography.md", "content/icons/primer.style--octicons-guidelines.md", "content/layout/primer.style--layout.md", "content/patterns/primer--notification-messaging.md", "content/layout/primer.style--responsive.md"],
    note: "交互模式篇在 patterns/ 分区（primer--*）；notification-messaging 带 12/14px 字号锚点，布局读 primer.style--layout.md",
  },
  {
    context: "新品牌官网（非复刻既有品牌）",
    id: "project-new-brand",
    short: "新品牌官网",
    source: "中文走 TDesign / 英文走 Carbon",
    files: [],
    note: "新品牌没有 DESIGN.md 可复刻：数值照对应产品语境行取，气质手法只参照 brands/ 学构成、不取它的值；只有复刻既有品牌才用 brands 行",
  },
  {
    context: "企业产品 / 数据密集界面",
    id: "project-carbon",
    short: "企业数据密集",
    source: "Carbon",
    files: ["content/color/carbondesignsystem.com--color.md", "content/type/carbondesignsystem.com--typography.md", "content/layout/carbondesignsystem.com--spacing.md", "content/motion/carbondesignsystem.com--motion.md", "content/layout/carbondesignsystem.com--2x-grid.md", "content/layout/carbondesignsystem.com--2x-grid-usage.md", "content/motion/carbondesignsystem.com--motion-choreography.md", "content/color/carbondesignsystem.com--themes.md", "content/icons/carbondesignsystem.com--iconography.md"],
    note: "细页：2x-grid 与 2x-grid-usage；图表与表格另见 dataviz、components 分区",
  },
  {
    context: "数据看板 / 图表产品",
    id: "project-carbon-dataviz",
    short: "数据看板",
    source: "Carbon（数据可视化）",
    files: ["content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md", "content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md", "content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md", "content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md", "content/dataviz/carbondesignsystem.com--data-visualization-flow-charts.md", "content/dataviz/carbondesignsystem.com--data-visualization-gantt-charts.md", "content/dataviz/carbondesignsystem.com--data-visualization-legends.md", "content/dataviz/carbondesignsystem.com--data-visualization-spatial-charts.md"],
    note: "图表为主的分析产品；表格、表单与后台布局仍走企业数据密集行，Polaris 数据可视化篇作对照",
  },
  {
    context: "创意与内容工具",
    id: "project-spectrum",
    short: "创意工具",
    source: "Spectrum",
    files: ["content/color/spectrum.adobe.com--color.md", "content/type/spectrum.adobe.com--typography.md", "content/type/spectrum.adobe.com--typography-system.md", "content/layout/spectrum.adobe.com--spacing.md", "content/motion/spectrum.adobe.com--motion.md", "content/icons/spectrum.adobe.com--iconography.md"],
  },
  {
    context: "政务 / 公共服务网站（表单与流程密集）",
    id: "project-gov-uk-uswds",
    short: "政务服务",
    source: "GOV.UK 或 USWDS（按所在体系二选一）",
    files: ["content/color/govuk--colour.md", "content/type/govuk--type-scale.md", "content/layout/govuk--spacing.md", "content/type/designsystem.digital.gov--typography.md", "content/type/designsystem.digital.gov--typesetting-overview.md", "content/layout/designsystem.digital.gov--layout-grid.md", "content/layout/designsystem.digital.gov--spacing-units.md", "content/color/designsystem.digital.gov--color-overview.md"],
    note: "表单、校验、错误文案与分步流程按 patterns 分区的 govuk--* 篇；英国体系用 GOV.UK，美国体系用 USWDS，两套都把无障碍与文字优先当硬约束",
  },
  {
    context: "医疗健康服务（NHS 体系）",
    id: "project-nhs-uk",
    short: "医疗健康",
    source: "NHS.UK",
    files: ["content/type/nhs.uk--typography.md", "content/layout/nhs.uk--layout.md", "content/layout/nhs.uk--spacing.md", "content/color/nhs.uk--colour.md"],
  },
  {
    context: "协作与项目管理工具",
    id: "project-atlassian",
    short: "协作工具",
    source: "Atlassian",
    files: ["content/color/atlassian.design--color-new.md", "content/type/atlassian.design--typography.md", "content/layout/atlassian.design--spacing.md", "content/motion/atlassian.design--motion.md", "content/layout/atlassian.design--elevation.md", "content/icons/atlassian.design--iconography.md"],
  },
  {
    context: "中文产品 UI（中后台 / 工具 / 内容 / 协作）",
    id: "project-tdesign",
    short: "中文产品 UI",
    source: "TDesign",
    files: ["content/color/tdesign.tencent.com--color.md", "content/type/tdesign.tencent.com--fonts.md", "content/layout/tdesign.tencent.com--layout.md", "content/icons/tdesign.tencent.com--icon.md", "content/motion/tdesign.tencent.com--motion.md", "content/color/tdesign.tencent.com--dark.md"],
    note: "token 级，数值全在正文；Ant 的字阶、色板、间距在图片里取不到数，相关文章已删。中文产品 UI 不分页型都落这一行，中文案例站因此同源，差异靠结构与风格；价值观篇 principles/tdesign.tencent.com--values.md 只作气质参照，不取数值",
  },
  {
    context: "无障碍整改 / 合规审查",
    id: "project-w3c-wcag-2-2",
    short: "无障碍整改",
    source: "W3C（WCAG 2.2）",
    files: ["content/a11y/w3c--wcag-2.2.md", "content/a11y/w3c--easy-checks.md"],
    note: "存量产品改造与合规审查：选用标准按 WCAG 2.2 与快速检查清单，组件级键盘与 ARIA 模式读 a11y 分区的 APG 篇，GOV.UK、NHS 的无障碍做法见对应行",
  },
  {
    context: "多产品线自建设计系统",
    id: "project-w3c-dtcg-token",
    short: "自建设计系统",
    source: "W3C DTCG（Token 规范）",
    files: ["content/tokens/dtcg--design-token.md", "content/tokens/dtcg--aliases.md", "content/tokens/dtcg--file-format.md", "content/tokens/dtcg--groups.md", "content/tokens/dtcg--terminology.md", "content/tokens/dtcg--types.md", "content/tokens/primer.style--primitives-token-names.md"],
    note: "Token 结构按 DTCG 规范定，命名参考 Primer 的 primitives 篇；组件与交互做法按产品形态走对应行，不自造 token 语义",
  },
  {
    context: "复刻既有站点（Hallmark 识别）",
    id: "project-hallmark-clone",
    short: "复刻站点",
    source: "该站抽取的 DESIGN.md",
    files: [],
    note: "先用 Hallmark 识别目标站，按 PROJECT-SELECTION.md 的流程落 content/brands/designmd--<域名>.md，再把这个文件填进本行 files；只服务这一复刻项目，不并进其他项目",
  },
  {
    context: "品牌官网 / 营销页",
    id: "project-brand",
    source: "对应品牌 DESIGN.md",
    files: [],
    note: "见 brands 分区里对应品牌的 DESIGN.md",
  },
]

/** 基准规范缺口与派生：examples/ 各站（含测试批次）的 FINDINGS.md 反复踩到的缺口收敛成回源规则。
 * 基准规范没覆盖的维度禁止现场各自派生（五站曾组合出五套互不对齐的间距）：先按下表回源取次源，
 * 回不到才走兜底档；例外与派生值连同理由记进 DECISIONS，缺口记进 FINDINGS。 */
export type GapRule = {
  /** 缺口维度 */
  dim: string
  /** 回源文章：基准规范缺这维度时改从这些原文取值，仍记 文件:行号 */
  files: string[]
  /** 处理与兜底 */
  rule: string
}

export const GAP_RULES: GapRule[] = [
  {
    dim: '间距',
    files: ['content/layout/atlassian.design--spacing.md', 'content/layout/uisdc.com--code-for-design-of-spacing.md', 'content/layout/polaris.shopify.com--layout-tokens.md'],
    rule: '基准规范没有 spacing scale 时从回源文章整套取一种尺度（Atlassian 8px 基数、优设 8/16/24/32/48/64、Polaris 4px 基数），全站只用这一套；批次默认取 Atlassian 8px 基数，换用别套回源必须在 DECISIONS 记理由；禁止拿字阶步进自己组合。',
  },
  {
    dim: '动效时长与缓动',
    files: ['content/motion/nngroup.com--animation-duration.md', 'content/motion/atlassian.design--motion.md', 'content/motion/carbondesignsystem.com--motion.md', 'content/standards/w3c--css-easing-1.md'],
    rule: '基准规范没有动效篇时按场景档位从回源文章取时长与缓动，进场比退出稍长；prefers-reduced-motion 兜底照做。风格层已下线，时长一律按 UX 回源取（交互微动效 200-300ms 档），裁决记取值记录；批次默认取 NN/g 100/200/300 三档，缓动优先引 w3c--css-easing-1 或 atlassian motion 的定值曲线，回源确无曲线才用 CSS 关键字，禁止自造 cubic-bezier。',
  },
  {
    dim: '圆角',
    files: [],
    rule: '库内没有通用 radius 规范（brands 篇的圆角只属该品牌）：整站统一派生档（4px / 8px 两档起步）标 derived，成套自洽，不逐处随手取。',
  },
  {
    dim: '数字字体',
    files: ['content/type/tdesign.tencent.com--fonts.md'],
    rule: '规范点名的数字字体（如 TCloud Number）零外部请求拿不到时，用 font-variant-numeric: tabular-nums 近似等距效果，标「降级」，不冒充原文值。',
  },
  {
    dim: '发丝线宽',
    files: [],
    rule: '基准规范只给分隔线颜色没给线宽时，1px 记 derived；装饰分隔色不承担控件边界，边界按非文本 3:1 另取。',
  },
  {
    dim: '色阶当文字',
    files: ['content/color/tdesign.tencent.com--color.md', 'content/type/tdesign.tencent.com--fonts.md'],
    rule: '色阶值不等于能当文字，原文自述的对比度也会错（fonts.md 自述文字对比满足 4.5，其白色 35% 档压 #181818 实测 3.23:1）；任何色值当文字前对实际底色复算，不达 4.5 的档只给禁用与装饰，文字换同族深档（只在本基准规范色板内加深；基准规范无色板按派生色 token 深化，不跨源借色）；基准规范语义 token 映射出的 hover / active 同样按实际底色复算，不达 AA 就同族换档并记取值记录。',
  },
  {
    dim: '图表几何参数',
    files: [],
    rule: '基准规范不给轴档数、柱宽、环半径这类几何参数：标 derived 全站统一自定，不冒充原文值；构图原则回源 Carbon 图表解剖系列（content/dataviz/）。',
  },
  {
    dim: '组件尺寸',
    files: [],
    rule: '基准规范不给输入框、表格行高等组件尺寸：标 derived 全站统一（行高与控件高度成套自定），不逐处随手取。',
  },
  {
    dim: '色值',
    files: ['content/color/tdesign.tencent.com--color.md', 'content/color/govuk--colour.md'],
    rule: '基准规范只有语义规则没给色板数值时，要么回源取色板原文值（TDesign 色阶或 GOV.UK 调色板）做整套 token，要么成套派生逐条标 derived 记 FINDINGS；两半混用是缺陷。',
  },
  {
    dim: '字阶',
    files: ['content/type/tdesign.tencent.com--fonts.md', 'content/type/govuk--type-scale.md'],
    rule: '基准规范没给字号时，回源取一套字阶原文值（TDesign 字阶或 GOV.UK type scale）或派生 3-4 档标 derived；全站只用这一套，行高同源定。',
  },
  {
    dim: '正文行长',
    files: [],
    rule: '基准规范没给行长时用 max-width 封顶（英文每行 60-75 字符；中文 35-45 字，窄栏可到 20-35，同页只用一种），值标 derived；长行是可读性问题不是风格问题。',
  },
  {
    dim: '首屏占比',
    files: [],
    rule: 'hero 高度控制在一屏 85% 上下，让下一节露头；超长首屏会让人以为页面到头。标 derived。',
  },
  {
    dim: '弹层遮罩',
    files: [],
    rule: '遮罩全站一档（rgba(0,0,0,0.45) 上下），弹层内不再叠第二层遮罩；标 derived 成套自定。',
  },
  {
    dim: '触控目标与焦点环',
    files: ['content/a11y/w3c--wcag-2.2.md'],
    rule: '基准规范没给触控目标与焦点环规格时：触控目标照 WCAG 2.2 目标尺寸下限（稳妥取 44px），焦点环用 2px 实线加 2px 偏移的高对比样式；标 derived。',
  },
  {
    dim: '金额排版',
    files: [],
    rule: '基准规范没给金额排版时：两位小数、千分位分隔、负号在币种符号前、金额用 tabular-nums（数字字体缺字时按「数字字体」条降级），全站一套；标 derived。',
  },
]

/** 方法层必读：出稿前必读的方法点，配色、层级与布局的搭配规则在这些原文里，不许只凭数值层出稿 */
export const METHOD_REQUIRED = [
  { id: 'howto-ui-color-framework', name: '界面配色框架', why: '定主辅与面积：主色深浅变体怎么推、要不要加第二色相' },
  { id: 'howto-visual-hierarchy', name: '视觉层级', why: '定三档层级：字号最多 3 档，最大的元素不超过 2 个' },
  {
    id: 'layout-intrinsic-patterns',
    name: '布局模式',
    why: '拆骨架：纵向间距只由一层给，多栏先定栏距与正文列余量，取值合规也不会叠出双份留白',
  },
]

/** 七步用法：/ai/guide.md|json 与 /ai/design-points.json 带上，页面在 /starmap/ 的七步块 */
export type UsageStep = {
  n: number
  title: string
  desc: string
  /** 每步的完成判据：没有这条产物就算没走完，用来防「声称完成」 */
  gate: string
  branch?: { title: string; desc: string }[]
}

export const USAGE_STEPS: UsageStep[] = [
  {
    n: 1,
    title: '定语境',
    desc: '先定产品语境（中文后台 / 公共服务 / 开发者工具 / 品牌官网），它决定第 5 步选哪个基准规范。改版、重构、给本库自己改站也算项目，同样要选基准规范。',
    gate: '一句「产品类型 + 基准规范」写进取值记录。',
  },
  {
    n: 2,
    title: '拉指南包',
    desc: '拉 <站点地址>/ai/design-points.json（在本仓库干活读 site/dist/ai/design-points.json，没构建读 site/src/data/star-points.json），一次拿到 usage、guide、method_required、设计场景与设计点，不整库翻目录。',
    gate: 'usage、guide、method_required、tasks 与 points_by_task 四样都在手上。',
  },
  {
    n: 3,
    title: '选设计点',
    desc: '先读方法层必读三篇原文（界面配色框架、视觉层级、布局模式），再选点；value_notes 只是坐标，不拥有数值决定权。',
    gate: '方法层三篇读过，选点清单带 id 与 articles。',
    branch: [
      { title: '按设计场景', desc: 'tasks 里选场景（如「落地页」，键 s2），用 points_by_task 反查该场景的全部设计点。' },
      { title: '按设计问题', desc: '拿具体问题对 select 匹配设计点；value_notes 只告诉你去原文找什么量级。' },
    ],
  },
  {
    n: 4,
    title: '读原文取值',
    desc: '按设计点给出的文章（端点 /md/<path>）读 2 到 5 篇全文，把要用的值连 文件:行号 记进取值记录（引用一律 content/ 完整路径，缩写不算出处）。',
    gate: '每个值有行号；组合再查一遍，同一段间距只有一层来源、相邻元素按刻度、多栏先定栏距与正文列余量。单值合规不等于组合合规。',
  },
  {
    n: 5,
    title: '项目选型',
    desc: '按项目选型方案（产品语境 → 基准规范）选出基准规范：一个项目只认一个基准规范，它拥有数值决定权，其他来源只取原则；基准规范缺的维度按「基准规范缺口与派生」回源或走兜底档，例外记取值记录；可访问性底线高于风格。改版项目同样先定基准规范。',
    gate: '取值记录写明基准规范名，跨源数值为零。',
  },
  {
    n: 6,
    title: '出稿分工',
    desc: '结构交给 hallmark（版式、防模板化检查），数值与本库原文对齐，进 token 不写裸值；数值点的 checks 自测题逐题自查。',
    gate: '裸值为零，自测题全过，出处随稿附上。',
  },
  {
    n: 7,
    title: '测试回炉',
    desc: '用浏览器自动化逐个真点（表单校验、筛选、导航、弹窗、主题切换），量 320 / 375 / 768 / 1280 四档宽度与溢出，对比度实测。',
    gate: '交互清单逐条有结果，四档无溢出；不通过回第 3 步补点或第 4 步重取值，不许改设计点硬凑。',
  },
]

/** 信息类型：不同信息给 AI 的导向不同，按分区归五类（进 /ai/design-points.json 的 usage） */
export type InfoType = 'values' | 'patterns' | 'layouts' | 'styles' | 'cases'
export const TYPE_BY_DOMAIN: Record<string, InfoType> = {
  type: 'values',
  color: 'values',
  motion: 'values',
  layout: 'values',
  icons: 'values',
  tokens: 'values',
  standards: 'values',
  dataviz: 'values',
  howto: 'values',
  bento: 'values',
  markdown: 'values',
  principles: 'values',
  patterns: 'patterns',
  components: 'patterns',
  a11y: 'patterns',
  layouts: 'layouts',
  styles: 'styles',
  brands: 'styles',
  cases: 'cases',
}

/** AI 提示词：页面 /starmap/ 置顶给出，复制发给 AI 即用；改这里同步 README §怎么用 */
export const AI_PROMPT = `你要按 UI 设计规范出界面稿，数值禁止凭记忆编造，一切取值以 UISpecs 规范库原文为准：

${USAGE_STEPS.map((s) => `${s.n}. ${s.title}：${s.desc}判据：${s.gate}`).join('\n')}

另：站点命名走 NameYouLike 口径（起名提示词与核验：https://github.com/hey-yx/NameYouLike），英文产品名、绑产品事实、落一次真实碰撞检索，结果记进取值记录；图表用成熟图表库，纯测试页内联 SVG 即可。`

/** 维护规则：从旧 AGENTS.md 收敛成的短条目；页面不再展示，机器可读版在 /ai/guide.json 的 maintenance 字段 */
export const MAINTENANCE_RULES: { title: string; items: string[] }[] = [
  {
    title: '收文',
    items: [
      '只收全文，导读卡与半截正文不收；抓不到正文的页面直接跳过',
      '官方同源 Markdown 优先，能拿仓库原文就不爬渲染页',
      'AI 已会的通用设计法则、语法速查、纯趋势叙述文不收',
    ],
  },
  {
    title: '入库',
    items: [
      '路径 content/<分区>/<域名>--<slug>.md，分区名即目录名',
      'frontmatter 必填 id、title、source、section、tag、fetched、status、publisher；id 写入后不改',
      '加完条目在任务路由里补一行，路径写真实文件名；构建会校验引用',
    ],
  },
  {
    title: '分区与标签',
    items: [
      '分区顺序与标题在 site/src/data/sections.ts；学习路径分区（howto、bento）的顺序即阅读顺序',
      '规范分区排序：国际官方 → 工程类 → 国内 → 中文社区实战',
      '标签从词表选，不造新词：规范、品牌规范、研究、实战、课程、工程、案例库、语法标准、写作规范、阅读排版',
    ],
  },
  {
    title: '回流',
    items: [
      '每站 FINDINGS 收官把新缺口回填「基准规范缺口与派生」，取值记录格式问题回填模板',
      '同一缺口不许在两个站重复出现：第二次出现说明规则没写进 guide',
      '取值记录交付前跑 scripts/check-ledger.py 过格式',
    ],
  },
  {
    title: '站点',
    items: [
      '全部前端文件在 site/，改 site/src/ 不改 site/dist/（构建产物）',
      '零描边：层级靠字重、间距、底色与灰阶，不引入边框线',
      '信号色面积 < 5%，亮暗两态同步改，色值只走 token 区',
      '交付前 1280 / 768 / 375 / 320 四档无横向溢出，⌘K 面板流程真跑',
    ],
  },
]

/** 按设计场景推导该读哪几篇：设计地图数据里每个设计点都挂着场景与文章
 *
 * mode：full（默认，/ai/guide.md|json 独立导出，带任务→文章表）；
 * slim（/ai/design-points.json 的 guide 字段，任务→文章可由 points 与 points_by_task 推出，不重复列）。
 */
export function buildGuideMarkdown(
  tasks: Record<string, { name: string; short: string }>,
  points: { name: string; tasks: string[]; articles: string[] }[],
  opts: { mode?: 'full' | 'slim' } = {},
): string {
  const mode = opts.mode ?? 'full'
  const lines: string[] = []
  lines.push('# 指南：怎么用本库')
  lines.push('')
  lines.push('一个项目一个基准规范，基准规范拥有数值决定权，其余来源只取原则；可访问性底线高于任何风格。')
  lines.push('')
  lines.push('## 七步')
  for (const s of USAGE_STEPS) lines.push(`${s.n}. ${s.title}：${s.desc}判据：${s.gate}`)
  lines.push('')
  lines.push('## 项目选型方案')
  lines.push('| 产品语境 | 基准规范 | 读这批文件 |')
  lines.push('| --- | --- | --- |')
  for (const m of MAIN_SOURCES) {
    const files = m.files.map((f) => `\`${f}\``).join(' ') || m.note || '见 brands 分区'
    lines.push(`| ${m.context} | ${m.source} | ${files} |`)
  }
  lines.push('')
  lines.push('## 基准规范缺口与派生')
  lines.push('基准规范没覆盖的维度禁止现场各自派生（五个案例曾组合出五套互不对齐的间距）：先按下表回源取次源，回不到才走兜底档；例外与派生值连同理由记进 DECISIONS，缺口记进 FINDINGS。')
  lines.push('')
  lines.push('| 缺口维度 | 回源文章 | 处理与兜底 |')
  lines.push('| --- | --- | --- |')
  for (const g of GAP_RULES) {
    const files = g.files.map((f) => `\`${f}\``).join(' ') || '（库无对应原文）'
    lines.push(`| ${g.dim} | ${files} | ${g.rule} |`)
  }
  lines.push('')
  lines.push('## 方法层必读')
  lines.push('')
  lines.push('出稿前必读这三个方法点，配色、层级与布局的搭配规则在原文里；数值层只管取值，不管搭配。')
  lines.push('')
  for (const m of METHOD_REQUIRED) lines.push(`- ${m.name}（${m.id}）：${m.why}`)
  lines.push('')
  if (mode === 'slim') {
    lines.push('设计场景 → 该读哪几篇不在此重复：按 points[].tasks 或 points_by_task 反查 points[].articles。')
    lines.push('')
    return lines.join('\n')
  }
  lines.push('## 设计场景 → 该读哪几篇')
  for (const [id, t] of Object.entries(tasks)) {
    const arts = new Set<string>()
    for (const p of points) {
      if (!p.tasks.includes(id)) continue
      for (const a of p.articles) arts.add(a)
    }
    lines.push('')
    lines.push(`### ${id.toUpperCase()} ${t.name}`)
    lines.push(t.short)
    for (const a of arts) lines.push(`- content/${a}`)
  }
  lines.push('')
  return lines.join('\n')
}
