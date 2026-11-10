# 取值记录：Apple HIG 重设计

基准规范 Apple HIG（项目选型 `project-apple-hig`）。版式由 Hallmark 介入，与本库的版型原型、数值共同作用；数值按下表，无障碍底线优先。

## 色值（派生）

Apple 色彩篇只给语义色角色与用途，不给 hex，全部色值按角色派生，对照原文：

- 背景色分级：`content/color/developer.apple.com--color.md:99`
- 文字色分级：`content/color/developer.apple.com--color.md:419`
- 分隔线：`content/color/developer.apple.com--color.md:562`

| token | 亮色 | 暗色 | 用途 | 性质 |
| --- | --- | --- | --- | --- |
| paper | #ffffff | #000000 | 页面底色 | 派生 |
| paper-2 | #f5f5f7 | #1c1c1e | 次要面、卡片 | 派生 |
| hover | #f2f2f6 | #2c2c2e | 悬停底色 | 派生 |
| ink | #1d1d1f | #f5f5f7 | 标题与主文字 | 派生 |
| ink-2 | #3a3a3c | #d1d1d6 | 正文 | 派生 |
| muted | #5f5f66 | #a1a1a6 | 说明文字 | 派生 |
| faint | #6e6e73 | #98989d | 元数据与篇数 | 派生 |
| accent | #0066cc | #0a84ff | 链接与焦点环 | 派生 |
| rule | #d2d2d7 | #38383a | hairline | 派生 |

## 字号（原文）

取 iOS Dynamic Type xSmall 档，出处 `content/type/developer.apple.com--typography.md:363-589`。

| token | 值 | 对应样式 |
| --- | --- | --- |
| text-xs | 11px | Caption 2 |
| text-sm | 12px | Caption 1 |
| text-ui | 13px | Callout |
| text-base | 14px | Body |
| text-lg | 17px | Title 3 |
| text-xl | 19px | Title 2 |
| text-2xl | 25px | Title 1 |
| text-display | 31px | Large Title |

正文用 17px（派生：桌面长文在 14px 上偏小，取 Title 3 档），行高 1.65（派生：中文长文）。

## 间距与圆角（派生）

间距引 8px 基数，出处 `content/layout/atlassian.design--spacing.md:20-34`。2px 与 4px 是半档，24 到 96 的倍数是同一基数的派生序列，均标派生。

圆角无规范可引，控件 8px、小组件 4px，标派生。

## 动效（回源）

基准规范 motion 篇没有时长与曲线。时长引 NN/g 三档，出处 `content/motion/nngroup.com--animation-duration.md:80-84`：100ms 微反馈、200ms 常规、300ms 大面积。缓动引 W3C 等价定义，出处 `content/standards/w3c--css-easing-1.md:126-140`。

## 对比度实测

浏览器实测计算，括号内为比值。正文与元数据在亮暗两态都过 4.5。

| 组合 | 亮色 | 暗色 |
| --- | --- | --- |
| ink 压 paper | 16.83 | 19.29 |
| ink-2 压 paper | 11.35 | 13.8 |
| muted 压 paper | 6.33 | 8.16 |
| faint 压 paper | 5.07 | 7.31 |
| muted 压 paper-2 | 5.82 | 6.61 |
| faint 压 paper-2 | 4.66 | 5.93 |
| accent 压 paper | 5.57 | 5.76 |
| faint 压 hover | 4.54 | 4.66 |

## 交互与响应（实测）

- 首页五组统计数值由内容集合实时算，不在文档写死。
- 主题三态循环：自动、浅色、深色，写入 `UISpecs-theme`；系统切浅色时自动跟随（Chrome，CDP 模拟）。
- 搜索展开 420px 输入框，输入 typography 出 8 条结果。
- 320 / 375 / 414 三档：首页、文章页、分区页、设计地图、流程、案例页无横向溢出。
- 焦点环：Tab 进入 skip link，2px accent，offset 2px。
- 减动效：`prefers-reduced-motion: reduce` 下过渡 0s，平滑滚动关闭。

## 版式改造：文档三栏（Apple 文档骨架）

走的是指南包路由：拉 `/ai/design-points.json`，按场景反查设计点，再读点里的原文。2026-11-08 这一轮覆盖 8 个场景，排除的场景见下表末尾。

### 场景与点

| 场景 | 选中的点 | 读的原文 | 用在哪 |
| --- | --- | --- | --- |
| s17 项目选型 | project-apple-hig | 选型行与 Apple HIG 原文 | 本站基准规范不变 |
| s18 导航 | patterns-global-nav | `content/patterns/carbon--global-header.md` | 顶栏：logo 回首页，产品链接左、全局链接右 |
| s18 导航 | components-nav-aids | `content/components/govuk--breadcrumbs.md:45-53` | 扁平站且已有侧栏，文章页与分区页去掉面包屑 |
| s1 基本功 | howto-visual-hierarchy | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:74-77` | 字号最多 3 档，最大元素每页 1 个（h1） |
| s1 基本功 | type-measure-limit | `content/type/designsystem.digital.gov--measure.md:24-78` | 拉丁 measure 44-88ex，中文不适用 ex，正文按字数定 |
| s1 基本功 | layout-spacing-values | `content/layout/nhs.uk--spacing.md:26-70` | 小屏间距降一档，见下表 |
| s6 数值层 | type-scale-steps | `content/type/govuk--type-scale.md:26-38` | 行高与字号成对，字阶不随手加档 |
| s14 Web 标准 | standards-clreq-typesetting | `content/standards/w3c--clreq.md:1939-1957` | `line-break: strict` 处理行首行尾禁则 |
| s19 状态反馈 | principles-interaction-states | `content/principles/polaris.shopify.com--interaction-states.md:38-46` | 链接统一 hover 改色、focus 2px 环、当前项用字重 |
| s9 无障碍 | a11y-manual-acceptance | `content/a11y/w3c--easy-checks.md` | 按 Easy Checks 跑标题结构、对比度、键盘、缩放 |

排除：s2 落地页（本站不是营销页）、s3 后台面板、s4 表单流程、s5 组件（本轮没有新组件）、s8 图标（沿用现有 SVG）、s10 图表、s11 品牌语言（基准规范已定）、s12 token 标准（token 结构未动）、s13 文案、s15 案例库。

### 版式数值

| token | 值 | 性质 | 依据 |
| --- | --- | --- | --- |
| 外壳宽 | 1320 | 派生 | 216 左栏 + 正文 42em + 168 右栏 + 32 栏距，8px 基数 |
| 左栏 | 216 | 派生 | 侧栏容得下最长的分区名（文案与设计价值观）不折行 |
| 右栏 | 168 | 派生 | 目录条目最长的 h2 折两行仍可读 |
| 栏距 | 32 | 派生 | 8px 基数 |
| 正文宽 | 42em | 派生 | 中文约 42 字/行，落在中文行长区间；USWDS 的 ex 刻度只适用拉丁 |
| 三栏断点 | 1200 | 派生 | 低于此宽度正文掉到 650 以下，右栏收掉 |
| 左栏断点 | 1024 | 派生 | 再窄正文不足 42em，左栏收起，导航回落到首页列表与分区页 |
| 小屏间距 | lg 24→16，xl 32→24，2xl 48→32，3xl 64→48，4xl 96→64 | 回源 | `content/layout/nhs.uk--spacing.md:26-70` 的大小屏两套刻度 |

### 验收（本轮实测）

- build 452 页通过；首页、分区页、文章页、设计地图、案例页、流程、建站需求 7 个入口与 `/ai/design-points.json`、`/catalog.json` 两个端点均 200。
- 宽度 1440 / 1280 / 1200 / 1199 / 1024 / 1023 / 768 / 375 / 360 / 320 / 414：`scrollWidth === clientWidth`，无横向溢出；1200 起三栏、1024-1199 两栏、1023 以下单栏。
- 键盘：Tab 走到左栏「概述」，`:focus-visible` 生效，2px accent 环。
- 右栏目录条目来自本页 h2/h3，少于 2 条不占列（分区页、设计地图无右栏）。

### 间距修正（2026-11-08 复检）

第一版数值合规但组合出错，三处都是叠加或余量问题：

- 文章页标题比左栏低 38px：`.article-page` 顶部 32 与 `.doc-head` 顶部 32 叠加，改为 `.article-page > .doc-head { padding-top: 0 }`（Stack 模式：纵向间距只由一层给）。
- 三栏右侧多出 94px 空档：壳宽 1320 让正文轨道 776、正文 42em 只占 714，右栏隔着余量；壳宽收到 1264，正文轨道 720，余量 6。
- 侧栏条目 5px 不在 8px 基数上，改 4px。

### 正文间距回到刻度（2026-11-08 二次复检）

正文排版一直是 em 现算，没走间距刻度，量出来全是 4px 网格外的值：

| 位置 | 改前 | 现在 | 依据 |
| --- | --- | --- | --- |
| 段落 | 0.7em（11.9px） | 下 16 | 8px 基数（Atlassian 间距篇） |
| 标题上/下 | 1.3em / 0.5em（32.5 / 12.5） | 32 / 12 | 同上，h3 用 24 / 8 |
| 列表 | 0.7em / 1.4em（11.9 / 23.8） | 16 / 24 | 同上 |
| 列表项 | 0.25em（4.25） | 4 | 4px 半档 |
| 引用、代码块 | 1em（17） | 24 | 8px 基数 |
| 分隔线 | 1.4em（23.8） | 32 | 8px 基数 |
| 页面标题上边距 | 1.3em 穿透到容器外（+32.5） | 0 | Stack：间距由容器一段给 |
| 正文首元素 | 自带 margin-top | 0 | 同上 |

另修采集清洗：来源块引是多行时 `stripSourceHeader` 没剥掉，页面顶部会重复一次标题与来源，影响 7 篇；正则改成按行吃 `>` 开头的块引用。

### 指南并入设计地图、需求页换清单（2026-11-08）

- 七步流程原来是独立页 `/flow/`，与 `/starmap/` 的设计地图分两处讲同一件事。现在七步块嵌在设计地图页内（`#flow`），任务轨最右的「项目选型」标明是第 5 步；`/flow/` 走 301 到 `/starmap/`，顶栏与左栏去掉「流程」「AI 用法」两个入口。依据：扁平站同一主题不拆两页（`content/components/govuk--breadcrumbs.md` 同类判断）。
- 建站需求总览从 `brief-grid` 卡片墙改成 `brief-list` 清单行：一条需求一行，名称 + slug + 两个动作（需求 / 成品），下面两行小字给产品、受众、核心任务、必备条数。依据：这一页是索引不是成品展示，卡片语汇留给 `/examples/`；行距与分隔线沿用首页 index-row 的 `--space-lg` + hairline。
- 测试回炉补浏览器自动化：AI_PROMPT 第 6 步从「真跑交互」改成「用浏览器自动化真跑（表单、筛选、导航、弹窗、主题切换），逐个点过并量四档宽度与溢出」。

### 七步改成单一来源 + 每步判断依据（2026-11-08）

原来同一套七步有三份文案：`USAGE_STEPS`（生成 `/ai/guide.md`）、`AI_PROMPT`（页面提示词）、`/starmap/` 手写七个 `li`。三份已经不一致：guide.md 那份没有方法层必读、没有浏览器自动化，提示词却是 7 条、页面又是另一套标题。

现在 `USAGE_STEPS` 是唯一来源，带 `title / desc / gate`（判断依据），`branch` 只给第 3 步的两条进路用；guide.md 与 AI_PROMPT 都由它拼，页面七个 `li` 改成 `map` 渲染。每步补了判断依据：第 1 步「语境 + 基准规范」写成一句、第 4 步加组合检查（单值合规不等于组合合规）、第 5 步覆盖改版项目、第 7 步浏览器自动化加四档宽度与回退规则。

### 提示词以一处为准，README 由构建回写（2026-11-08）

README 里那份提示词原来是手抄的，改一处就得记着改两处。现在 README 只留一对 `<!-- AI-PROMPT:START/END -->` 标记，内容由 `site/scripts/sync-readme-prompt.mjs` 在构建后从 `dist/starmap/index.html` 回写，`npm run build` 自动跑。

唯一来源仍是 `src/data/guide.ts` 的 `USAGE_STEPS`：页面七个 li、`/ai/guide.md` 的七步、`AI_PROMPT`、README 四处都从它派生。实测：给第 6 步判断依据加一个临时标记，构建后 README / guide.md / 页面三处同时出现，撤回后三处同时归零。

2026-11-09 起 README 不再内联提示词：正文只留一句指路（首页复制、`/ai/guide.md` 看细节），回写脚本与构建里的那一步一并删除。提示词仍只有 `USAGE_STEPS` 一份来源，出口是首页面板与 `/ai/design-points.json` 的使用说明。

### 指南页下线，七步只留提示词与端点（2026-11-09）

`/guide/` 删掉两块说明卡之后只剩七步，与首页提示词面板逐字相同，等于同一份文案的第二个渲染面。判断依据也在提示词里（每条末尾的「判断依据：」），不是页面额外加的。页面整体下线：顶栏入口去掉（案例、需求、地图三件），`/guide` 与 `/flow` 重定向到首页，`.flow-*` 样式与 `SITE_ROUTE_RE` 里的 guide 前缀一并清掉。人类读流程走首页提示词面板，机器读 `/ai/guide.md` 与 `/ai/guide.json`。

### 需求页压成两列索引（2026-11-08 第三次）

上一版一行 173px（名称行 + 产品 3 行 + 受众/任务/必备一行 + 两个动作），11 条要滚两屏，页面像文档堆砌而不是索引。

现在一条需求 63px：左列固定 264px 放名称与 slug，右列放一句产品说明（单行截断，不换行）；不再渲染受众、核心任务、必备条数与成品链接，这些留在详情页。窄屏（≤768）折成两行，产品说明最多 2 行。

踩到的坑：详情页的 `.brief-product` 带 `-webkit-line-clamp: 3` 与 `min-height`，同名类把列表版挤成 3 行；列表规则改成 `.brief-list .brief-product` 限定作用域才生效。

### 设计地图补区块标题（2026-11-08）

设计地图页里提示词块与七步块各有 h2，地图本身没有：筛选按钮直接跟在流程块后面，看不出下面是「设计点 + 场景轨」的图。地图前补 `h2 设计地图` 与 `18 个设计场景`（场景数从 `star-points.json` 的 tasks 取），区块与另两块同构：上边 48 留白 + hairline，标题走 `.sec-title` 的既有 25px 档，不新增字号。原来在页首描述地图的那句说明下移到地图标题下，页首不再重复导语。

依据：标题要贴近它的内容，组与组之间才是大间距（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:87` 邻近原则）；标题与内容成组后，筛选按钮与地图不再像一条孤立工具条。目录侧不新增条目：指南页的抽屉目录本来就复用筛选芯片，按 `Toc.astro` 的芯片优先分支返回。

### 首页改成目录门户（2026-11-08）

需求：给本站自己做设计。基准规范不变：Apple HIG（项目选型 `project-apple-hig`）。设计地图节点名从「Apple 平台」改为「Apple HIG」，`context` 仍写原生应用（iOS / macOS / visionOS）；`source` 与选型表基准规范列写「Apple HIG（人机界面规范）」。其余容易看不出归属的规范补了来源：TDesign（腾讯）、Carbon（IBM）、Polaris（Shopify）、Primer（GitHub）、Spectrum（Adobe）、NHS.UK（英国医疗），政务行标英国 / 美国；GOV.UK、USWDS、W3C、DTCG 本身是规范名，未加括号。首页从单列链接表改成可检索的目录门户：首屏左文案 + 搜索，右一枚「Apple HIG 取值示例」卡；下方 19 个分区改成等宽卡片网格。

#### 场景与点

| 场景 | 选中的点 | 读的原文 | 用在哪 |
| --- | --- | --- | --- |
| s15 案例库 | macrostructure-11 Catalogue | `Hallmark 版式库 references/macrostructures/11-catalogue.md` | 等宽分区卡，4 / 3 / 2 / 1 列；每格同权 |
| s1 页面基本功 | howto-visual-hierarchy | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77` | 字号 25 / 19 / 17 三档，最大元素控制在品牌与示例值 |
| s1 页面基本功 | layout-intrinsic-patterns | `content/layout/every-layout.dev--stack.md:28-44` | 首屏两栏、卡片网格；纵向间距只由容器给 |
| s6 数值层 | layout-spacing-scale | `content/layout/atlassian.design--spacing.md:20-34,96-102` | 8px 基数、4px 半档；卡片内边距与栅格间距 16 |
| s6 数值层 | type-hierarchy-recipe | `content/type/developer.apple.com--typography.md:363-438` | 品牌 31、页题 25、区块 19、条目 17、说明 13、元数据 12 |
| s14 Web 标准 | standards-clreq-typesetting | `content/standards/w3c--clreq.md:1939-1957` | 中文行首行尾禁则 `line-break: strict`（沿用） |
| s19 状态反馈 | principles-interaction-states | `content/principles/polaris.shopify.com--interaction-states.md:38-46` | 卡片 hover 只换底色；焦点 2px 环（沿用） |
| s9 无障碍验收 | a11y-manual-acceptance | `content/a11y/w3c--easy-checks.md` | 标题结构、键盘、对比度、缩放逐项实测 |

排除：s2 落地页（本站不是营销页）、s3 后台、s4 表单、s5 组件（无新组件）、s8 图标（沿用现有 SVG）、s10 图表、s11 品牌语言（基准规范已定）、s12 token 标准（token 结构未动）、s13 文案、s16 评审（并入 s9）、s17 项目选型（基准规范不变）。

#### 版式数值

| 项 | 值 | 性质 | 依据 |
| --- | --- | --- | --- |
| 首页外壳 | 1264，主栏 1168 | 派生 | 内容页三栏反推；首页不显示左栏 |
| 分区卡列数 | 4 / 3 / 2 / 1 | 派生 | `minmax(260px, 1fr)`；1168 落 4 列，1024 三列，900 两列，600 以下单列 |
| 卡片内边距与栅格间距 | 16 | 原文 | Atlassian `space.200`，8px 基数 ×2 |
| 品牌 | 31 | 原文 | Apple Large Title，`typography.md:363-379` |
| 页题 | 25 | 原文 | Apple Title 1，`typography.md:384-400` |
| 区块标题 | 19 | 原文 | Apple Title 2，`typography.md:405-421` |
| 条目 | 17 | 原文 | Apple Title 3，`typography.md:426-438` |
| 说明 | 13 | 原文 | Apple Callout，`typography.md:489-505` |
| 元数据 | 12 | 原文 | Apple Subhead，`typography.md:510-526` |
| 搜索框高 | 约 50 | 派生 | 17 字号行高 25.5 + 上下 12，落在 8px 半档 |
| 示例卡数值 | 17pt / 22pt | 原文 | Apple Title 3 的 xSmall 档 Size (points) 与 Leading (points)；卡面写 xSmall，下面注明网页按 1pt = 1px 落到 17px |

#### 验收（本轮实测）

- `npm run build` 通过，当前 490 页；首页、`/a/type/developer.apple.com--typography/`、`/starmap/`、`/examples/`、`/briefs/` 均 200。
- 首页 19 张分区卡；宽度 1440 / 1280 / 1200 / 1024 / 900 / 768 / 390 / 375 / 320 逐档 `scrollWidth === clientWidth`，无横向溢出；列数 4 / 4 / 4 / 3 / 2 / 2 / 1 / 1 / 1。
- 搜索入口真点：打开 ⌘K 面板，焦点落到 `#cmdk-input`；关闭后焦点回首页搜索按钮（`Search.astro` 补 `lastTrigger`，不再一律丢给 header 按钮）。
- 对比度实算：示例卡来源 `muted` 压 `paper-2` 5.82 / 6.61，卡片篇数 `faint` 压 `paper-2` 4.66 / 5.93，示例卡链接 `accent` 压 `paper-2` 5.11 / 4.66，正文与标题均高于 4.5。
- 亮暗两态截图走查；390px 统计行按项换行，不出现「案例站」被拆开的孤词。

#### 骨架坑

首页用 `.shell:has(.home-intro)` 切成单栏，但被后置的 `.shell:not(:has(.toc-rail:not([hidden])))`（特异性更高）压回两栏，主栏只剩 216px。修法是把后者改成 `.shell:not(:has(.home-intro)):not(:has(.toc-rail:not([hidden])))`，让首页不命中该规则；只加 `.shell:has(.home-intro)` 不够。

### Apple HIG 基础层扩到 18 篇（2026-11-08）

问题：选型以 Apple HIG 为基准，库里却只有 Color / Typography / Layout / Icons 四篇；官方 Foundations 其余 14 个方向是 Accessibility、App icons、Branding、Dark Mode、Images、Immersive experiences、Inclusion、Materials、Motion、Privacy、Right to left、SF Symbols、Spatial layout、Writing。这轮把 Foundations 补齐。

补 14 篇全文，落分区：

| 文章 | 分区 | 官网 |
| --- | --- | --- |
| Accessibility | a11y | `.../accessibility` |
| App icons | icons | `.../app-icons` |
| Branding | principles | `.../branding` |
| Dark Mode | color | `.../dark-mode` |
| Images | icons | `.../images` |
| Immersive experiences | principles | `.../immersive-experiences` |
| Inclusion | a11y | `.../inclusion` |
| Materials | color | `.../materials` |
| Motion | motion | `.../motion` |
| Privacy | principles | `.../privacy` |
| Right to left | layout | `.../right-to-left` |
| SF Symbols | icons | `.../sf-symbols` |
| Spatial layout | layout | `.../spatial-layout` |
| Writing | type | `.../writing` |

取法：浏览器取 `main.innerText`；切掉文首更新日期/变更提示、重复 H1、文末 `Change log` 与 `Resources/Related`；保留正文与 `Platform considerations`。图片不搬，正文里指向原图。

同步：`guide.ts` 的 Apple `files` 从 4 条加到 18 条；项目选型派生点 `project-apple-hig` 自动列 18 篇。`content/README.md` 补了这条单篇例外，避免下一次又按「JS 渲染不收录」跳过。

验收：build 通过，504 页；新文章页 200；⌘K 搜「SF Symbols」首条命中；390 / 320 宽无横向溢出；文章页无 footer 与 change log。

标题先按 `Apple HIG · Foundation · 英文标题 中文` 统一，18 篇都改了；Patterns / Components 与全站选型标题的规范化见下一节。

当时还差 Patterns、Components、Inputs、Technologies；下一节补齐前两项，现仅剩 Inputs 20 篇、Technologies 若干。

### Apple HIG Patterns 与 Components 补齐（2026-11-08）

问题：Apple HIG 只有 Foundations，选这个基准做具体控件时没有模式与组件原文。这轮补官方 Patterns 25 篇、Components 八个分类 64 篇，Apple 语料从 18 篇到 107 篇。

- Patterns 25：Charting data、Collaboration and sharing、Drag and drop、Entering data、Feedback、File management、Going full screen、Launching、Live-viewing apps、Loading、Managing accounts、Managing notifications、Modality、Multitasking、Offering help、Onboarding、Playing audio、Playing haptics、Playing video、Printing、Ratings and reviews、Searching、Settings、Undo and redo、Workouts。
- Components 64：Content 4、Layout and organization 10、Menus and actions 12、Navigation and search 5、Presentation 8、Selection and input 11、Status 4、System experiences 10。
- 取法同 Foundations：`main.innerText`，切文首日期/重复 H1/文末 `Change log` 与 `Resources/Related`；图片不搬。
- 同步：`guide.ts` 的 Apple `files` 18 → 107，`project-apple-hig` 自动列 107 篇；build 593 页。

标题规范化扩到全部选型：176 篇选型方案专属文章统一 `来源 · 类型 · 英文 中文`，类型取 Foundation / Pattern / Component / Token / Standard。GOV.UK 的 Pattern / Component 原本已是；Primer 的 `UI Pattern` 标题统一改成 `Pattern`（含选型里的 Notification messaging）；TDesign、Carbon、Atlassian、Polaris、Primer、GOV.UK/USWDS、NHS.UK、Spectrum、DTCG、WCAG 的存量补了类型段。

验收：build 通过，593 页；新页 200；⌘K 搜「Onboarding」首条是 `Apple HIG · Pattern · Onboarding 引导`；390 无横向溢出；文章页无 `Change log` / `Resources`。

未补：Inputs 20 篇、Technologies 若干。

### 新增 GitLab Pajamas 选型（2026-11-08）

- 依据 `gitlab-org/gitlab-services/design.gitlab.com` 的 `contents/product-foundations/` 与 `contents/brand-design/color.md`：原文是 Markdown，色彩、字阶、间距、动效、层级、图标均有表值，符合基准规范四条。
- 收 10 篇：品牌色彩、字体基础、标题、间距、布局、动效基础、反馈动效、层级、边框、图标；`MAIN_SOURCES` 新增 `project-gitlab-pajamas`，语境「研发协作平台（代码托管 / CI/CD / 代码评审）」，`source` 写 `Pajamas（GitLab）`。
- `site/src/data/sources.ts` 加 GitLab Pajamas 来源组；`PROJECT-SELECTION.md` 现状表与候选池同步。
- TDesign 完整基础页其实在 `Tencent/tdesign` 的 `site/src/pages/design/*.vue` 与 `site/src/locales/pages/design-*.ts`，但是 Vue/TS 源码，不是 Markdown；现有 6 篇站点正文保持。

### 选型来源清洗（2026-11-08）

- 切掉站侧尾巴 14 个文件：Apple `layout` / `color` / `typography` / `icons` 4 篇的整块 Developer 页脚，`progress-indicators` / `live-activities` / `status-bars` 3 篇的 `Resources` 块；GOV.UK 3 篇的 `Help improve this style`；Atlassian 4 处 `Contents` / `Related`。只删尾部，正文行号不变，build 仍通过。
- GitHub 直取边界：Carbon、Polaris、Primer、DTCG、GOV.UK 的正文本身是 Markdown，可直接取；USWDS、NHS、TDesign 基础页是 Liquid/Nunjucks 或不在仓里，raw 不含渲染后的数值；Atlassian、Spectrum 没有公开正文仓；Apple HIG 没有官方文本仓，社区镜像只作结构核对。
- 新候选复核结论见 `content/PROJECT-SELECTION.md` 的 2026-11-08 节：Salesforce Lightning、Backpack 只有组件用法，GitLab Pajamas 不在 GitHub，均不满足基准规范四条；未新增选型行。

## 版式复核：按现行指南包重跑（2026-11-08）

把站点当成改动项目重走一遍指南包：拉 `/ai/design-points.json`，按场景反查点，读点里的原文，再拿原文对现有版式逐项裁决。基准规范不变（Apple HIG，`project-apple-hig`）。

这一轮的重点是 Apple HIG 从 18 篇扩到 107 篇之后，Patterns 与 Components 第一次参与站点评审。

### 场景与点

| 场景 | 选中的点 | 读的原文 | 裁决了什么 |
| --- | --- | --- | --- |
| s17 项目选型 | project-apple-hig | `content/components/developer.apple.com--sidebars.md:32,34` | 左栏只放一层分区，不加深第二层，不默认隐藏 |
| s18 导航 | components-nav-aids | `content/components/govuk--breadcrumbs.md:45-53` | 扁平站加常驻侧栏，不再上面包屑（沿用） |
| s18 导航 | patterns-global-nav | `content/patterns/carbon--global-header.md` | 顶栏三段：品牌、搜索、页面入口（沿用） |
| s17 项目选型 | project-apple-hig | `content/patterns/developer.apple.com--searching.md:28,30,32` | 搜索只开一个面板，两个入口指向同一处，占位文字写清搜什么 |
| s1 页面基本功 | howto-visual-hierarchy | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77` | 页面同时出现的字号层级收敛到三档，最大元素不超过两个 |
| s1 页面基本功 | layout-intrinsic-patterns | `content/layout/every-layout.dev--stack.md:28-44` | 首屏两栏、分区网格；纵向间距只由一层给（沿用） |
| s6 数值层 | type-hierarchy-recipe | `content/type/developer.apple.com--typography.md:363-438` | 页面标题 25，区块标题 19，条目 17，正文 17 |
| s6 数值层 | layout-spacing-scale | `content/layout/atlassian.design--spacing.md:20-34` | 8px 基数，4px 半档（沿用） |
| s15 案例库 | macrostructure-11 Catalogue | `Hallmark 版式库 references/macrostructures/11-catalogue.md` | 首页是等宽卡网格，行间用 hairline 分隔 |
| s19 状态反馈 | principles-interaction-states | `content/principles/polaris.shopify.com--interaction-states.md:38-46` | 链接 hover 改色加下划线，卡片 hover 换底色，焦点 2px 环 |
| s9 无障碍 | a11y-manual-acceptance | `content/a11y/w3c--easy-checks.md` | 键盘、对比度、缩放逐项实测 |
| s14 Web 标准 | standards-clreq-typesetting | `content/standards/w3c--clreq.md:1939-1957` | 中文行首行尾禁则 `line-break: strict`（沿用） |

排除的场景：s2 落地页（本站不是营销页）、s3 后台面板、s4 表单流程、s5 组件（本轮没有新增交互组件）、s8 图标（沿用现有 SVG）、s10 图表、s11 品牌语言（基准规范已定）、s12 token 标准（token 结构不动）、s13 文案（本站文案口径另立）、s16 评审底线（并入 s9 一起跑）。

### 复核结论与改动

| # | 发现 | 依据 | 处置 |
| --- | --- | --- | --- |
| 1 | 区块标题 `.sec-title` 在页面里是 25，与页面标题同档，`/starmap/`、`/examples/`、`/briefs/` 的 h1 与 h2 一样大，层级塌 | 字号最多三档且逐级递减（NN/g 76）；Apple Title 1 25 与 Title 2 19 分工（typography.md:384-421） | 区块标题回到 19；`h1.sec-title` 单列 25 |
| 2 | 首页示例卡的值用 31，与品牌同档，卡片抢过页面标题 | 最大元素不超过两个（NN/g 77） | 值降到 25，品牌仍是全站唯一 31 |
| 3 | 页面级元数据 25 处用 11，首页 12px 及以下文本占比 43.4%，整页偏说明书 | Apple Caption 2 11 用于控件内极小字（typography.md:537-553），页面元数据用 Caption 1 12（:510-526） | 页面元数据统一 12，11 只留 kbd 与浮层 |
| 4 | 设计地图的任务标签用 10px，不在 Apple 字阶上 | 同上 | 提到 11 |
| 5 | 首页 19 张分区卡是灰底色块，没有 Catalogue 要求的行间分隔 | Catalogue 要求等宽卡加 hairline rules between rows（Hallmark 版式库 references/macrostructures/11-catalogue.md） | 卡片改白底加顶部 hairline，hover 换底色 |
| 6 | `Base.astro` 引了 Bricolage Grotesque 字体包，skin.css 一次没用，白打包一份字体 | 全站系统字体（typography.md:12） | 删 import |
| 7 | 三处 `font-size` 直写（31、11、10），不在 token 上 | 数值走 token，不散写 | 改走 `--text-display` / `--text-xs`，10px 那条并进 11 |

Catalogue 的 specimen thumbnail 一条不采纳：本库分区的产物是规范文本，没有可缩略的图形；卡片里的名称、一句说明、篇数已经承担了「库存条目」的职责，硬造图形是装饰。

### 验收（本轮实测）

- `npm run build` 通过，603 页；`/`、`/starmap/`、`/examples/`、`/briefs/`、`/s/color/`、`/a/type/developer.apple.com--typography/`、`/ai/design-points.json`、`/catalog.json`、`/briefs/sites.json`、`/md/type/developer.apple.com--typography.md` 全部 200。
- 宽度 1440 / 1280 / 1200 / 1199 / 1024 / 1023 / 900 / 768 / 390 / 320：`scrollWidth === clientWidth`，无横向溢出；分区卡列数 4 / 4 / 4 / 4 / 3 / 3 / 3 / 2 / 1 / 1。
- 对比度（浏览器实算，含背景 alpha 合成）：亮色最低 4.66（`toc-count` 11px 压 `paper-2`），暗色最低 5.93，其余全部高于 4.5。
- 键盘：首 Tab 落在 skip link，2px 实心 accent 环、offset 2px，`:focus-visible` 生效；序列 skip link → 品牌 → 搜索 → 案例 / 需求 / 指南 → GitHub。
- 字号分布（首页）：11px 从 31 处降到 10 处，12px 从 31 增到 52，25px 从 1 增到 2（页面标题与示例值），31px 从 2 降到 1（只剩品牌）。设计地图的 10px 清零。
- 层级实测：`/starmap/` h1 25 / h2 19；文章页标题 25 / 正文 h2 19 / 正文 17；首页 h1 25 / 区块标题 19 / 品牌 31。

已知偏差：首页 12px 及以下文本占比仍是 43.4%。这轮只是把 11 提到 12，让元数据可读；要压低占比得减少元数据条目，属于内容取舍，不与版式一起做。19 张分区卡在 4 列下最后一行空一格，是网格的固有结果，不为此加第 20 张卡。

## 重设计：换基准到 GOV.UK（2026-11-08）

用户授权完全脱离现有设计重做一版，不再受「品牌必须最大」这类旧规则约束。这一版换掉基准规范，版式家族、字号、间距、圆角、配色全部换源，不是在上文那套 Apple 体系上微调。

### 为什么换基准

| 候选 | 原文在库 | 与本站的关系 | 结论 |
| --- | --- | --- | --- |
| Apple HIG | 107 篇 | 原生应用规范，不是 Web 文档站 | 旧基准，退出 |
| TDesign | 有 | 中文产品 UI，界面语言中文时贴 | 做过样张，卡片网格与旧版差异小 |
| Primer | 有 | 开发者工具，GitHub 风 | 与 TDesign 视觉接近，都靠蓝链接加卡片 |
| GOV.UK Design System | 有 | 它本身就是设计规范库，产品同构 | 采用 |

选型落到 `project-gov-uk-uswds` 的英国分支：按产品同构选，不按「政务」字面。

### 变了什么

| 维度 | 改前 | 改后 | 依据 |
| --- | --- | --- | --- |
| 基准规范 | Apple HIG | GOV.UK Design System | 产品同构 |
| 首页版式 | Catalogue 卡片网格 | Index-First 四列表行 | `Hallmark 版式库 references/macrostructures/13-index-first.md`，适用面写的是 documentation hubs 与 design system entries |
| 字阶 | 11 / 12 / 13 / 14 / 17 / 19 / 25 / 31 | 14 / 16 / 19 / 24 / 36 / 48 | `content/type/govuk--type-scale.md:40-100` |
| 正文 | 17 | 19，行高 1.5 | 同上，19/25 |
| 页面标题 | 25 | 48 | 同上，heading-xl 48/50 |
| 间距基数 | 8px | 5px | `content/layout/govuk--spacing.md` |
| 圆角 | 8 / 4 | 0 | GOV.UK 不用圆角 |
| 链接 | 默认无下划线 | 下划线常驻，hover 加深加粗 | GOV.UK 链接样式 |
| 焦点 | 2px 蓝环 | 3px 黄环 `#ffdd00` | `content/color/govuk--colour.md:98-104` |
| 顶栏 | 白底 hairline | 黑底加 10px 品牌蓝 | GOV.UK header |
| 品牌字号 | 31，全站最大 | 24 | 页面标题 48 成为最大，层级回到内容 |
| 首页示例卡 | 280 宽灰卡 | 一行文字 | Index-First 不画卡片 |

### 保留

- 三栏骨架。19 个分区需要常驻导航，GOV.UK 的单栏放不下。
- 主题三态与暗色。GOV.UK 没有暗色模式，按派生补，两份变量同值。
- 搜索面板、目录抽屉、设计地图的数据结构，七步流程与端点。

### 验收（本轮实测）

- `npm run build` 通过，603 页。`/`、`/starmap/`、`/examples/`、`/briefs/`、`/s/color/`、`/a/a11y/w3c--wcag-2.2/`、`/ai/design-points.json`、`/catalog.json`、`/briefs/sites.json`、`/md/color/govuk--colour.md` 全部 200。
- 宽度 1440 / 1280 / 1200 / 1024 / 900 / 768 / 390 / 320：首页与文章页 `scrollWidth === clientWidth`，无横向溢出。设计地图的 SVG 在窄屏走容器的 `overflow-x: auto` 横滑，不算页面溢出。
- 对比度（浏览器实算，含背景 alpha 合成）：亮色最低 6.08（链接 `#1a65a6` 压白），暗色最低 8.07（`toc-count` 14px 压 `#1d1d1f`），全部高于 4.5。
- 键盘：首 Tab 落在 skip link，3px 黄环、`:focus-visible` 生效；序列 skip link → 品牌 → 搜索 → 案例 / 需求 / 指南 → GitHub。
- 字号实测：首页 h1 48、正文 19、品牌 24；文章页标题 36、正文 19；顶栏黑底 `#0b0c0c`。
- 320 宽顶栏原本溢出，`≤400` 加一档：入口降到 14、间距收紧后无溢出。

## 三页改版：案例 / 需求 / 指南（2026-11-08）

用户要求三页改元素，不只换风格。三页统一按 Index-First 文档列表重排，保留数据与交互。

### 场景与点

- 案例 `/examples/`：s15 案例库 + s18 导航。选 `macrostructure-13` Index-First：原文要求「The page IS a list of links」、正文是「vertical list of categorised links」、行间用 hairline（`Hallmark 版式库 references/macrostructures/13-index-first.md`）。不选 `macrostructure-11` Catalogue：它是等大卡片网格，只适合字体、色板、SKU 这类库存（`Hallmark 版式库 references/macrostructures/11-catalogue.md`），3 个案例用两列卡片会落单。
- 需求 `/briefs/`：s18 导航 + s1 页面基本功。同一套 Index-First 列表；摘要不再单行截断，截断会把「给谁用、核心动作」藏掉。
- 指南 `/starmap/`：s18 导航 + s1 页面基本功。首屏先给地图与筛选，七步流程收进折叠块放在地图后；Index-First 的开头只留一段索引说明，不让流程长文占首屏（`:18`）。
- 间距：行间只由列表容器给一层 border-bottom，行内不再叠 margin-bottom。Stack 原文说 margin 是相邻元素的关系，父容器统一注入，避免双份留白（`content/layout/every-layout.dev--stack.md:28-44`）。

### 版式数值

- 案例列表：单列；缩略图 200 宽、8/5、1px `--rule` 边框、方角；标题 19；摘要 16；元数据一行 14；行上下 `--space-lg`；≤768 缩略图移到标题上方。
- 需求列表：单列；名称 19、分类 14 用 `--muted`；摘要 16，正常换行不截断；行上下 `--space-md`；首段拆成一句导语加 `<details>` 数据说明。
- 指南：地图在七步之前；七步放进 `<details>`，summary 保留「七步流程 · 7 步 · 1 个端点」；地图容器 `max-height: 72vh` 内部滚动，加 `tabindex="0"` 与 `aria-label`。
- 圆角 0、间距走 GOV.UK 5px 刻度、链接下划线常驻，沿用 `design.md`。

### 验收（本轮实测）

- `npm run build` 通过，607 页；`/examples/`、`/briefs/`、`/starmap/` 200。
- 1440 / 1024 / 768 / 390 / 320：三页 `scrollWidth === clientWidth`，无横向溢出；案例列表 3 行、缩略图 200 宽、390 下单列；需求 11 行、摘要 `white-space: normal`、`-webkit-line-clamp: none`；指南七步折叠默认收起，390 标题单行、计数另起一行。
- 键盘：`summary` 可聚焦展开；地图容器 `tabindex="0"`；案例与需求的标题链接可 Tab 到。

## Material 3 / Fluent 2 / Ant Design 转选型（2026-11-08）

- 先以 `reference` 分区收了三套官方 token 的具体值；用户随后要求不要停在附录，改成正式选型，并把该有的文章一起集成；随后按要求删掉参考值分区，token 文档迁入 `content/tokens/`。
- `MAIN_SOURCES` 新增三行：`project-material-3`（Android / 跨端 Material 生态）、`project-fluent-2`（Windows / Microsoft 365 Fluent 生态）、`project-ant-design`（中文中后台 React / Ant Design 既有项目）。`MAIN_SOURCES` 从 16 行增到 19 行，含文章行从 13 增到 16。
- 新增 25 篇官方文章：`material-components/material-web` 的 docs、`microsoft/fluentui` 的 docs/token、`ant-design/ant-design` 的 docs/spec 与组件文档，以及 `fluent2.microsoft.design` 的六篇官方站基础页。三篇 `tokens/*--tokens.md` 也分别填进三行 `files`，作为 Token 快照，不再游离于选型之外。
- Material 3 9 篇：色彩、字体、形状、层级、按钮、文本框、对话框、标签页 + token；Fluent 2 13 篇：色彩、字体、布局、动效、层级、Token、介绍、样式、焦点、按钮、对话框、菜单 + token；Ant Design 9 篇：色彩、字体、布局、动效、阴影、图标、按钮、表格 + token。
- 标题统一 `来源 · Foundation/Component · 英文 中文`；Ant 原有 button/icon/shadow 三篇同步改三段式标题，保留原文件以免设计地图行号漂移。构建 632 页。
- 参考值分区已取消：三篇 token 文档迁到 `content/tokens/`，`section: tokens`，仍随三套选型的 `files` 使用；`sections.ts` 从 20 个分区回到 19 个，`validate.ts` 不再为 reference 开例外。

## 指南与设计地图拆两页（2026-11-09）

上一轮的「三页改版」把七步与地图塞在同一页：提示词与七步都收在 `<details>` 里，打开页面只剩一张 2410 高的 SVG 装在 777 高的框里内滚。实测 `.star-map-wrap` 的 `scrollHeight - clientHeight` 是 1633，页面主体看得见的东西只有地图，怎么用的内容全在折叠里；两块又都由 `USAGE_STEPS` 渲染，等于同一份内容出现两遍。这一轮按「一次只服务一个任务」拆开。

### 场景与点

- 指南 `/guide/`：s18 导航 + s1 页面基本功。一个页面一个主任务，七步直接铺开当正文，不再折叠；层级只靠标题档位、间距与分隔线，颜色只用在序号与链接上，不靠第四种对比区分区块（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:59`）。
- 分组靠留白与容器边界，不画卡片框：七步卡片沿用 `--section-surface` 面，块之间由 `.map-block` 的上边距与 hairline 分隔（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:79-83`）。
- 块间距由父容器统一注入，行内不再叠 margin（`content/layout/every-layout.dev--stack.md:28-44`）；刻度仍是 GOV.UK 的 5px 基数（`content/layout/govuk--spacing.md:47`）。
- 设计地图 `/starmap/`：只放图、图例、筛选与弹窗，回指南的入口写在导语里；导航加「地图」一项，指南与地图各占一个入口。

### 版式数值

- 地图容器去掉 `max-height: 72vh` 与纵向内滚，改整页滚动；只保留 `overflow-x: auto`，窄屏按 SVG 的 `min-width: 820` 横滑，不裁图。
- 连线整组移到标签之前渲染（`.star-lines`），每个标签加 `--paper` 底纸 rect（`.star-label-bg`，高 18、左右各留 4 到 5）：线从文字后面被截断，不再压在字上；悬停与聚焦用 `.star-line-unit.is-hot` 高亮对应那条线，筛选时线与点一起淡出到 0.18。
- 七步：列表 `ol.flow` 直接铺开，序号 40 定宽、卡片 `--space-lg / --space-xl` 内边距；不再有 `summary` 折叠条。
- 提示词只放首页（用户要求）：一个「复制提示词」按钮，悬停或点按展开 1080×720 上限的大面板看全文（2026-11-09 用户嫌 720 窄，加宽到 1080，右边放不下自动左移），面板内可滚；下上都不足 480 时改视口居中，窄屏宽 `min(720, 100vw-32)`。`pre.ai-prompt` 在面板里，供构建回写 README 与手动复制；指南页只留「提示词在首页复制」一句。
- 地图页只留必要文字（用户要求去冗余）：导语压到 39 字，图例一段只写必选类别；筛选按钮上的必选／动效／评审徽标与任务轨蓝框已删（2026-11-09 用户要求），必选信息由图例一句加各点弹窗的「必选／验收」承担，「第 7 步逐页走查」这类流程细节只在指南里讲一次。
- 项目选型点的弹窗顶部放一张该基准规范的主题系统截图：已收 15 家（16 个有文章的选型行里，政务服务 GOV.UK / USWDS 缺图，两个 .gov 站点在本机 SSL 直接断，直连与代理都试过）。图存 `site/public/img/select/<点 id>.png`（1280×800 视口、2 倍像素截，缩到 1600 宽，合计约 4.3 MB），数据在 `site/src/data/select-shots.ts`，`buildProjectPoints` 按点 id 带出，没收录的点不显示图。只收官方站，caption 写截的哪一页，caption 末尾「原页」链到截图来源；图是本站存档，不直链上游（防防盗链与改版失效）。页面类型随各行基准规范走：多数截色彩页，数据可视化截图表页，WCAG 截快速参考，DTCG 截社区官网。
- 入口在页题右侧一个「复制提示词」（2026-11-09 用户定，先后试过搜索条右侧与行尾，最后贴标题、垂直居中、间距 15）：用站内链接语言，accent 文字加下划线，不加边框也不加第二块实底，整行唯一的实底仍是搜索条右侧那块黑（零描边、信号色面积小）；≤600 放不下一排时退到搜索条下一行、左对齐。复制失败不跳页，面板展开并选中全文，按钮写「剪贴板受限，已选中」。悬停展开只在 `(hover: hover)` 下绑，触屏走点按。

### 覆盖与排除

- 覆盖：s18 导航、s1 页面基本功、s6 布局与间距，以及 method_required 的视觉层级与布局模式。
- 排除：s4 表单、s10 图表、s3 后台面板（本站没有这三类界面）；s5 动效、s19 状态反馈（本次只改了地图悬停与筛选，没有新增交互件）。

### 验收（本轮实测）

- `npm run build` 通过，610 页；README 提示词由 `dist/guide/index.html` 回写，构建尾部打印「已是最新（2145 字）」。
- `/guide/`、`/starmap/` 200；`/flow/` 与 `/roadmapx/` 是 meta refresh，分别指向 `/guide/` 与 `/starmap/`。
- 指南页：7 个 `.flow-step`、7 条「判断依据」、提示词 2161 字且已替换成当前站点地址；折叠项只剩提示词全文。
- 地图页：160 个节点、160 条线、160 个标签底纸；`.star-map-wrap` 纵向内滚 0，页面高 3061。
- 宽度 1800 / 1280 / 768 / 375 / 320：两页 `scrollWidth === clientWidth`；768 以下地图容器 `scrollWidth 820 > clientWidth`（可横滑），页面本身不溢出；顶栏四个入口在 320 仍单行。
- 交互：选场景 s1 后 136 个点与 136 条线同时淡出，再点一次归零；悬停 `layout-spacing-values` 只高亮 1 条线；点开弹窗标题与正文正常，关闭回焦；复制按钮在无剪贴板权限时回退为选中全文。
- 首页提示词：悬停展开面板 1080 宽（实测 1080×486，内容高 948 内部滚动），按钮 105×52 贴页题右侧（间距 15、垂直居中），≤375 折到标题下一行；点击后剪贴板受限时按钮写「剪贴板受限，已选中」，选中 2160 字；Esc 关闭且不因回焦重开；外点关闭；375 / 320 走居中面板（343×534 / 288×512），不溢出；宽 1800 / 768 / 375 / 320 首页无横向溢出；`/guide/` 已无提示词块（页面高 4335）。

## 去掉主题切换，只留亮色（2026-11-09）

用户要求删掉全站主题，只保留亮色版。

- 删三处：`Base.astro` 的 head 内联脚本、顶栏 `#themeBtn` 按钮与循环切换脚本；`skin.css` 的 `@media (prefers-color-scheme: dark)`、`:root[data-theme='dark']`、`:root[data-theme='light']` 三段与按钮样式。
- `:root` 是唯一色值来源，`color-scheme: light`。亮色值不变，对比度沿用本文件 52 行起的实测结果。
- 站点现在不读 `prefers-color-scheme`，系统深色偏好下也是白底。
