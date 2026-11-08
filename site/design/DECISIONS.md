# 取值记录：Apple HIG 重设计

基准规范 Apple HIG（项目选型 `project-apple-hig`）。结构按 Hallmark，数值按下表，无障碍底线优先。

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

- 首页 398 篇 / 18 分区 / 137 设计点 / 18 场景 / 11 案例站，数值来自页面渲染，构建通过的同一份数据。
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

### 七步改成单一来源 + 每步判据（2026-11-08）

原来同一套七步有三份文案：`USAGE_STEPS`（生成 `/ai/guide.md`）、`AI_PROMPT`（页面提示词）、`/starmap/` 手写七个 `li`。三份已经不一致：guide.md 那份没有方法层必读、没有浏览器自动化，提示词却是 7 条、页面又是另一套标题。

现在 `USAGE_STEPS` 是唯一来源，带 `title / desc / gate`（判据），`branch` 只给第 3 步的两条进路用；guide.md 与 AI_PROMPT 都由它拼，页面七个 `li` 改成 `map` 渲染。每步补了判据：第 1 步「语境 + 基准规范」写成一句、第 4 步加组合检查（单值合规不等于组合合规）、第 5 步覆盖改版项目、第 7 步浏览器自动化加四档宽度与回退规则。

### 提示词以一处为准，README 由构建回写（2026-11-08）

README 里那份提示词原来是手抄的，改一处就得记着改两处。现在 README 只留一对 `<!-- AI-PROMPT:START/END -->` 标记，内容由 `site/scripts/sync-readme-prompt.mjs` 在构建后从 `dist/starmap/index.html` 回写，`npm run build` 自动跑。

唯一来源仍是 `src/data/guide.ts` 的 `USAGE_STEPS`：页面七个 li、`/ai/guide.md` 的七步、`AI_PROMPT`、README 四处都从它派生。实测：给第 6 步判据加一个临时标记，构建后 README / guide.md / 页面三处同时出现，撤回后三处同时归零。

### 需求页压成两列索引（2026-11-08 第三次）

上一版一行 173px（名称行 + 产品 3 行 + 受众/任务/必备一行 + 两个动作），11 条要滚两屏，页面像文档堆砌而不是索引。

现在一条需求 63px：左列固定 264px 放名称与 slug，右列放一句产品说明（单行截断，不换行）；不再渲染受众、核心任务、必备条数与成品链接，这些留在详情页。窄屏（≤768）折成两行，产品说明最多 2 行。

踩到的坑：详情页的 `.brief-product` 带 `-webkit-line-clamp: 3` 与 `min-height`，同名类把列表版挤成 3 行；列表规则改成 `.brief-list .brief-product` 限定作用域才生效。

