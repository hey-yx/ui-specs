# DECISIONS · MetricRail（metricrail）

需求来源：`briefs/metricrail.md`（只读）。库 / 指南：`site/dist/ai/guide.md`、`site/dist/ai/design-points.json`、原文 `content/`。交付：`index.html`（单文件，52,653 字节）、本文件、`FINDINGS.md`。所有实测数字来自 `file://` 打开本页 + CDP `Emulation.setDeviceMetricsOverride` 的真实浏览器，未跑 `npm run build`。

## 1. 设计前提

| 项 | 结论 |
| --- | --- |
| 受众 | 运营 / 增长 / 财务分析人员；每天开机先看当天数据 |
| 用途 | 一屏看完当日与周期数据，下钻到区域与渠道明细，导出结果 |
| 语气 | utilitarian（克制、密集、数字优先、无营销话术）；界面文案全中文 |
| 产品语境 | **数据看板 / 图表产品**（中文，企业内部后台），不是品牌官网、不是中文通用中后台 |
| 基准规范 | **Carbon（数据可视化）**，取指南「项目选型方案」的「数据看板 / 图表产品」行，对应设计点 `project-carbon-dataviz`（s17）。一个项目只认这一个基准规范；它拥有数值决定权，本稿中它只提供原则（8 篇原文无 UI 数值） |
| 设计场景 | s17 项目选型 · s3 后台与数据面板 · s10 图表与数据可视化 · s6 数值层 · s1 通用页面基本功 · s5 组件设计 · s4 表单与流程 · s9 无障碍验收 · s19 状态与反馈 · s13 文案与写作 · s18 导航与信息架构 |
| 方法层必读 | `howto-ui-color-framework`（界面配色框架）、`howto-visual-hierarchy`（视觉层级），先定搭配再取数值 |
| 数值来源 | 基准规范无数值的维度按指南「基准规范缺口与派生」逐条回源或标 derived；见 §3–§6、§10 |
| 可访问性底线 | 高于风格：正文 ≥ 4.5:1、非文本 ≥ 3:1、键盘可达、减少动效（`content/a11y/w3c--wcag-2.2.md:397`、`:512`；`content/motion/atlassian.design--motion.md:170`） |

## 2. 结构决策（Hallmark 管结构，UISpecs 管数值）

| 轴 | 取值 | 依据 |
| --- | --- | --- |
| 版型 / 宏观结构 | **Stat-Led（Hallmark 04）**，H4 旋钮：tabular display / qualifier below / secondary stats row of four。一个 36px 当日成交额主数字 + 四个 20px 次级指标 + 周期合计一行；往下依次是趋势图、明细表（字号数值见 §4，属回源值，本行引用只作结构依据）。无 hero、无步骤卡、无反色卡阵列、无编号眉题、无重画的浏览器/手机框 | 展示型看板「按重要性排序，最重要的数据占最大面积、对比度最高，放页面顶部，其余按 F 形铺开」（`content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:32-34`）；「字号最多 3 档、最大的元素不超过 2 个」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77`）；「筛选条常驻顶部，KPI 卡横排，主图与明细表并排或上下叠」「minimal padding / maximum data visibility」（`content/layouts/layout--dashboard-data-dense-dashboard.md:21`、`:25-27`、`:37`）；「先看总量，再逐层下钻到明细，每层都要有返回上一步的路」「总览层 / 维度选择 / 明细」（`content/layouts/layout--dashboard-drill-down-analytics.md:21`、`:25-27`）；KPI 大数字定义见 `content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:70-72` |
| 导航 | **N9 Edge-aligned minimal**：品牌「MetricRail」硬左，唯一的 primary「导出结果」硬右，中间留白；不造多页导航。跳转链接（Skip to main）放页首 | 页头「header name 只链回本站首页」「链接不开新 tab、不链别的域名」「工具图标打开面板而非直接导航」「产品级链接左对齐、系统级右对齐」（`content/patterns/carbon--global-header.md:41-54`、`:150-153`）；「每屏只放一个 primary 按钮」（`content/components/carbondesignsystem.com--button-usage.md:67`、`:85`）；跳转链接（WCAG 2.4.1，`content/patterns/carbon--global-header.md:322-325`；`content/a11y/web.dev--a11y-focus.md:123-137`） |
| 页脚 | **Ft2 Inline single line**：一条发丝线 + 一行小字，声明「演示数据，非真实经营数据」。无三栏、无链接矩阵 | Hallmark Ft2 路由；「诚实文案、不编造指标」（`content/patterns/ui-specs--test-walkthrough.md:22`、`:36`）；页脚单行偏好（page-design-preferences 覆盖层） |
| 强调色 | **#0052d9**（TDesign Blue7 腾讯蓝），只落在：导出主按钮实填、选中周期的下划线、图表「本期」折线描边、焦点环、图例色块。实填面积 5,058 px²，四档 0.444%–1.843% | 回源色板整套取一色（GAP_RULES「色值」条，`content/color/tdesign.tencent.com--color.md:65-66`）；「一个基色推出各种变体」「选中态只降亮度、hover 只降饱和」（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:24-26`、`:242`）；「同一仪表盘内每个数据集始终用一致颜色」（`content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:42`）；「简单设计限 2 主色 + 2 辅色」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58`） |
| 主题 / 目录轮换 | stamp `theme: UISpecs/Carbon（数据可视化）`；按 hallmark `references/ui-specs.md` 跳过 catalog 主题轮换与 OKLCH 换算，保留 hex token 可溯源；不写 `.hallmark/log.json`（本任务只许在 `examples/metricrail/` 下新建三个文件） | `content/color/carbondesignsystem.com--color.md:113-121` 的 Theme/Token/Role/Value 分层；任务文件域限制 |
| 数据呈现 | 折线图用内联 SVG 画线与网格，轴标签/tooltip 全走 HTML 文本（保证行高公式逐元素生效）；柱状/面积图未做，因此 Y 轴按区间裁剪是允许的 | 折线图看趋势、可裁剪 Y 轴（`content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:43-45`）；柱状/面积须从零起（同篇 `:33`）；图表九元素（`:31-39`）；tooltip 重复两轴数值（`content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:47`）；图例悬停将其它系列降到 30%（`content/dataviz/carbondesignsystem.com--data-visualization-legends.md:86`）、单系列不用图例（同篇 `:30`）、默认置于图底部（`:52-56`）；图表标记 ≥ 3:1（`content/patterns/primer--data-visualization.md:49`） |

## 3. 色彩表（整套回源 `content/color/tdesign.tencent.com--color.md`，GAP_RULES「色值」条）

| token | 值 | 出处 | 用在哪 | 实测对比度（WCAG 公式，浏览器实算） |
| --- | --- | --- | --- | --- |
| `--paper` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:186-187` | 页面底、表格底、对话框底 | 实测：`#242424` 压其上 15.52:1 |
| `--paper-2` | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:188-189` | 卡片 / 筛选栏底 | 实测：正文 13.99:1、次要 5.84:1 |
| `--paper-3` | `#eeeeee` | `content/color/tdesign.tencent.com--color.md:190-191` | 表头底、hover 底、禁用底 | 实测：禁用态文字 5.59:1 |
| `--line` | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:192-193` | 装饰发丝线、网格线（1px derived） | 实测：不承担控件边界，边界另取 `--line-strong` 3.41:1 |
| `--line-strong` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:200-201` | 输入框 / 下拉 / 对话框描边 | 实测：对 `#ffffff` 3.41:1（非文本 ≥ 3:1） |
| `--ink` | `#242424` | `content/color/tdesign.tencent.com--color.md:212-213` | 正文、主数字、跳转链接底 | 实测：13.99:1 |
| `--ink-2` | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:204-205` | 次要文字、表头、禁用态文字、页脚 | 实测：6.48:1（白底）/ 5.84:1（卡底）/ 5.59:1（禁用底） |
| `--ink-3` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:200-201` | 未选中图例文字 | 实测：3.41:1（非选中态，按非文本 3:1 校验） |
| `--accent` | `#0052d9` | `content/color/tdesign.tencent.com--color.md:65-66` | 主按钮、选中下划线、本期折线、焦点环 | 实测：白字压其上 6.54:1；对白底 6.54:1；对卡底 5.90:1 |
| `--accent-deep` | `#003cab` | `content/color/tdesign.tencent.com--color.md:68-69` | 主按钮 hover | 实测：白字压其上 9.40:1 |
| `--accent-soft` | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:47-48` | 已应用筛选指示、行 hover、下钻按钮 hover | 实测：`#242424` 压其上 14.07:1 |
| `--danger` | `#ad352f` | `content/color/tdesign.tencent.com--color.md:100-101` | 日期校验错误文字、下跌环比 | 实测：对卡底 5.69:1（不取 4.32:1 的 Red6 当小字） |
| `--danger-soft` | `#fff0ed` | `content/color/tdesign.tencent.com--color.md:82-83` | 错误字段底 | 实测：错误文字压其上 6.31:1 |
| `--success` | `#006c45` | `content/color/tdesign.tencent.com--color.md:170-171` | 校验成功 / 复制成功文字、上涨环比 | 实测：对卡底 5.86:1 |
| `--success-soft` | `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:152-153` | 成功字段底 | 实测：`#006c45` 压其上 5.33:1 |
| `--series-2` | `#00668e` | `content/color/tdesign.tencent.com--color.md:380-381` | 「上期」折线 | 实测：对卡底 5.75:1（图表标记 ≥ 3:1） |
| `--on-accent` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:186-187` | 主按钮文字 | 实测：6.54:1 |

分类色板顺序取色的原则来自基准规范（`content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:32`），但该篇色值在库内被「（色板示例见原文）」占位，故整套 hex 走 GAP_RULES「色值」回源，未跨源混搭（见 FINDINGS §2）。

## 4. 字号 / 行高 / 字重表（回源 `content/type/tdesign.tencent.com--fonts.md`）

| 角色 | 字号 | 行高 | 字重 | 出处 |
| --- | --- | --- | --- | --- |
| 正文 / 表格 / 标签 / 按钮 / 轴标签 | 14px | 22px（**公式产物 derived**：14 + 8） | 400 / 600 | `content/type/tdesign.tencent.com--fonts.md:52`、`:67`、`:81` |
| 分区标题 / KPI 次级数值 / 品牌字样 | 20px | 28px（**公式产物 derived**：20 + 8） | 600 | `content/type/tdesign.tencent.com--fonts.md:54`、`:67`、`:81` |
| 当日成交额主数字（全页唯一最大元素） | 36px | 44px（**公式产物 derived**：36 + 8） | 600 | `content/type/tdesign.tencent.com--fonts.md:58`、`:67`、`:81` |

- 三档字号符合方法层 `howto-visual-hierarchy` 的「最多 3 档、最大元素 ≤ 2 个」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77`）；本稿最大元素 1 个。
- 行高实现：`:where(body, body *) { line-height: calc(1em + 8px) }`，`em` 按每个元素自身字号解析（`content/type/tdesign.tencent.com--fonts.md:67`）。实测全量普查 227 个含直接文本节点、0 违例；浮层全开 250 节点、0 违例。
- 字体栈（零外链系统栈）：`content/type/tdesign.tencent.com--fonts.md:34`。数字字体 TCloud Number 零外链拿不到，降级 `font-variant-numeric: tabular-nums`（同篇 `:37`，GAP_RULES「数字字体」条，标**降级**）。
- 金额排版（derived）：两位小数、千分位分隔、`tabular-nums`，全站一套（GAP_RULES「金额排版」条）。

## 5. 间距 / 圆角 / 容器 / 断点

| 项 | 值 | 出处 / 规则 |
| --- | --- | --- |
| 间距整套 | 4 / 8 / 12 / 16 / 24 / 32 / 48 px | 回源 Atlassian 8px 基数：`content/layout/atlassian.design--spacing.md:22`、`:32`、`:70`、`:86`、`:94`、`:102`、`:118`、`:126`、`:142`（GAP_RULES「间距」条，批次默认取 Atlassian 8px 基数） |
| 圆角 | 4px（控件）/ 8px（卡片）两档 | **derived**：GAP_RULES「圆角」条，库无通用 radius 原文；成套自洽，卡片设 `overflow:hidden` 裁切直角子块 |
| 控件高 / 表格行高 | 44px / 44px | **derived**：GAP_RULES「组件尺寸」条；取 WCAG 2.2「稳妥取 44px」（`content/a11y/w3c--wcag-2.2.md:871`、`:875`、`:907`） |
| 发丝线 | 1px | **derived**：GAP_RULES「发丝线宽」条；装饰线不承担控件边界，边界按 3:1 另取 `#8b8b8b` |
| 容器 | `max-width: 1280px`，左右内边距 16/24px | **derived**：GAP_RULES「正文行长」/「首屏占比」条；数据密集界面按卡片分栏，不按窄文栏 |
| 断点 | 960px（KPI 由双栏转单栏）、640px（抽屉满宽、表单字段折行） | **derived**：GAP_RULES 未给断点；四档验收 320 / 375 / 768 / 1280 见 §8 |
| 弹层遮罩 / 抽屉宽度 | `rgba(0,0,0,0.45)` 一档；`min(46vw, 620px)`，≤640px 改 100% | **derived**：GAP_RULES「弹层遮罩」条；抽屉宽度按屏占比而非内容宽度 |
| 焦点环 | 2px 实线 + 2px 偏移，色 `#0052d9` | **derived**：GAP_RULES「触控目标与焦点环」条；焦点环对白底 6.54:1 ≥ 3:1（`content/a11y/w3c--wcag-2.2.md:791-792`） |
| 图表几何 | 绘图区高 240px、4 条网格、2px 线宽、2.5px 点半径、内边距 8/10px | **derived**：GAP_RULES「图表几何参数」条；构图原则回源 Carbon 图表解剖系列（`content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:31-39`） |

## 6. 动效

| 项 | 值 | 出处 |
| --- | --- | --- |
| 微反馈 / hover | 100ms | 回源 NN/g：`content/motion/nngroup.com--animation-duration.md:80`（原文写 "roughly 100 ms"）；GAP_RULES「动效时长与缓动」条默认 100/200/300 三档 |
| 退出 / 出场 | 200ms | 回源 NN/g：`content/motion/nngroup.com--animation-duration.md:82-84`（200–300 ms 档、"200 or 250ms" 消失） |
| 进场 | 300ms | 回源 NN/g：`content/motion/nngroup.com--animation-duration.md:84`（"300ms to appear"） |
| 进场缓动 | `cubic-bezier(0, 0, 0.58, 1)` | `content/standards/w3c--css-easing-1.md:136-138` |
| 出场缓动 | `cubic-bezier(0.42, 0, 1, 1)` | `content/standards/w3c--css-easing-1.md:132-134` |
| 位移缓动 | `cubic-bezier(0.42, 0, 0.58, 1)` | `content/standards/w3c--css-easing-1.md:140-142` |
| 减少动效 | `prefers-reduced-motion: reduce` 下 transition/animation 全部关闭，状态即时切换 | `content/motion/atlassian.design--motion.md:170`；`content/motion/nngroup.com--animation-duration.md:24` |
| 浮层开合 | **无过渡，即时开合**（derived 决策，见 §9 回炉） | 不依赖 rAF / CSS transition，保证无头与后台标签页下可见 |

只动 `transform` / `opacity` / `color` / `background-color`；不动画焦点环。

## 7. 设计点路由表（选点标准 → 落点）

| 场景 | 点 id | 选点标准（select）摘要 | 落在哪 |
| --- | --- | --- | --- |
| s17 | `project-carbon-dataviz` | 项目语境是「数据看板 / 图表产品」时选它，基准规范 Carbon（数据可视化）拥有数值决定权 | §1 基准规范；8 篇原文全读，取原则不取数值 |
| s3/s10 | `dataviz-dashboard-design` | 展示型看板按重要性排层级、最重要放顶部、同系列同色 | §2 版型、KPI 行、图表双系列固定色；`content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:30-46` |
| s3/s10 | `dataviz-chart-anatomy` | 矩形图九元素、数据能直标就别做长图例 | 趋势图标题/轴/刻度/绘图区/tooltip；`content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:31-39`、`:43-47` |
| s10/s6 | `dataviz-data-palette` | 分类色板严格按序取色、类别数可预测换专用板 | 双系列固定顺序取色；基准规范色值缺失 → GAP_RULES 回源（FINDINGS §2） |
| s10 | `dataviz-axes-legends` | 折线图看趋势可不从零起；图例悬停高亮、点击筛选 | §2 图表；`content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:33`、`:45`；`content/dataviz/carbondesignsystem.com--data-visualization-legends.md:86`、`:90-98` |
| s10 | `dataviz-chart-contrast` | 图表标记与背景 ≥ 3:1 | §3 色彩表；`content/patterns/primer--data-visualization.md:49` |
| s3 | `layouts-dashboard-density` | 数据密集看板适合 BI / 运营：KPI 卡 + 多图表 + 紧凑留白 | §2 版型；`content/layouts/layout--dashboard-data-dense-dashboard.md:21`、`:25-27`、`:37` |
| s3/s10 | `layouts-dashboard-analytics` | 总量逐层下钻到明细并保留上下文 | 下钻抽屉的路径「总览 → 区域 → 渠道」；`content/layouts/layout--dashboard-drill-down-analytics.md:21`、`:25-27`、`:37` |
| s3/s6 | `layout-density` | 密度是显式选择，组件内间距不拿来当页面留白 | 卡片用 16/24px、控件内 8px（derived 间距，取值见 §5 回源），分层不混用；`content/layout/polaris.shopify.com--density.md:23` |
| s1/s6 | `howto-ui-color-framework` | 方法层必读：一个基色推变体、hover/选中各只动一个维度 | §2 强调色；`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:24-26`、`:242`、`:277` |
| s1/s2/s16 | `howto-visual-hierarchy` | 方法层必读：字号最多 3 档、最大元素 ≤ 2、2 主色 + 2 辅色 | §4 字阶；`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58`、`:76-77` |
| s3/s4 | `patterns-search-filter` | 下拉筛选带「全部/任意」、收起态显示已应用筛选指示、每类可一键清空 | 渠道下拉「全部渠道」、已应用 N 项 chip、清空筛选按钮（初始 disabled）；`content/patterns/carbon--filtering.md:111-126`、`:134-139`；`content/patterns/carbon--search-pattern.md:114-116` |
| s5/s9/s4 | `components-button-hierarchy` | 每屏只放一个 primary；secondary/tertiary 分工 | 导出 = 唯一 primary；应用筛选 = secondary；清空 = tertiary；`content/components/carbondesignsystem.com--button-usage.md:67`、`:85`、`:768-771` |
| s5/s3 | `components-table-tag` | 列标题一两个词、数字列右对齐、表格用 caption | 明细表 7 列短标题、数字右对齐 + tabular-nums、caption；`content/components/carbondesignsystem.com--data-table-usage.md:230-234`、`:360-362`、`:393-397` |
| s5/s3/s18 | `components-tabs` | 标签页状态 hover/focus/disabled/选中，手动模式方向键移动焦点 | 近 7/30/90 日 tablist，`aria-selected` + 方向键；`content/components/carbondesignsystem.com--tabs-usage.md:310-311`、`:353-369` |
| s4/s13 | `patterns-form-validation` | 校验失败给错误说明与字段旁提示，不在失焦时提前校验 | 日期范围三态校验、提交时校验、错误摘要式文案；`content/patterns/govuk--validation.md:20`、`:65-68`、`:80` |
| s4/s5/s19 | `patterns-states-feedback` | 默认禁用态不可点、用降透明度做视觉、保存中给反馈 | 清空筛选初始 disabled；禁用态改色阶替换（见 §9）；`content/patterns/carbon--disabled-states.md:45-55` |
| s16/s19 | `patterns-feedback-criteria` | 反馈可感知/及时/真实/可行动，界面数字跟着数据联动 | §8 九类交互 + 数字对账；`content/patterns/ui-specs--test-walkthrough.md:28`、`:35`、`:47` |
| s9 | `a11y-contrast-threshold` / `a11y-focus-visibility` / `a11y-manual-acceptance` | 选完色要算过；focus-visible 只给键盘；交付前逐项手工检查 | §3 对比度表、§5 焦点环、§8 自验；`content/a11y/w3c--wcag-2.2.md:397`、`:512`、`:871`、`:907` |
| s6/s9 | `motion-reduced` | 减少动效下动效关闭或即时，不能只变慢 | §6；`content/motion/atlassian.design--motion.md:170` |
| s13/s4 | `markdown-cn-copywriting` | 中文文案用「你」、数字优先、中英文/中文数字间加空格（度数百分比除外） | 全站中文文案；`content/principles/ant.design--copywriting-cn.md:191`、`:260`、`:313`；`content/markdown/github.com--chinese-copywriting-guidelines.md:44-47`、`:64-70` |
| s3/s1/s18 | `patterns-global-nav` | 页头 logo 只链回首页、产品链接左对齐、全局链接右对齐、工具图标开面板 | §2 导航 N9；`content/patterns/carbon--global-header.md:41-54`、`:150-153` |
| s6/s1 | `type-scale-steps` / `type-line-height-box` / `layout-spacing-scale` / `motion-duration` / `motion-easing` / `color-contrast-threshold` | 字阶、行高公式、间距尺度、时长分档、缓动定值、对比达标线 | §3–§6，全部按 GAP_RULES 回源并连行号记账 |

未选 `brands-crypto` / `brands-productivity`（本稿是自有数据后台，非复刻品牌）、`layouts-dashboard-specialized`（无实时告警 / 预测场景）、`bento-grid-layout`（数据面板不用营销 bento）。

## 8. 交付自验（真实浏览器，全部实测）

**零外链**：`<link>` 0、`@import` 0、`src=` 0、`http(s)://` 0、外链文件节点 0；`performance.getEntriesByType('resource').length === 0`；JS 未捕获错误 `[]`。单文件 52,653 字节，CSS/JS 全内联，图标为内联 SVG。

**四档** `documentElement.scrollWidth === clientWidth`（实测：clientWidth 比设定宽度少 15px 为无头滚动条假象，验收标准取二者相等）：

| 档 | clientWidth / scrollWidth | body.scrollWidth | 强调色实填面积 | 占比 |
| --- | --- | --- | --- | --- |
| 320 | 305 / 305 | 305 | 5,058 px² | 1.843% |
| 375 | 360 / 360 | 360 | 5,058 px² | 1.561% |
| 768 | 753 / 753 | 753 | 5,058 px² | 0.746% |
| 1280 | 1265 / 1265 | 1265 | 5,058 px² | 0.444% |

四档全部 `< 5%`（实测）。抽屉在 320 档宽 305px 时仍为 305/305（实测）。

**行高全量普查**（遍历 `body` 内含直接文本的节点，跳过 SCRIPT/STYLE/SVG 等非渲染文本；验收标准 `lineHeight − fontSize === 8`）：默认态 227 节点 / **0 违例**；抽屉 + 导出对话框全开 250 节点 / **0 违例**。

**对比度（WCAG 公式，读取 computedStyle 的 fg 与实际底色）**：

| 对象（各行均为实测） | 实测 | 门槛 |
| --- | --- | --- |
| 实测 · 正文（页面标题，20px，`#242424` / `#f3f3f3`） | 13.99:1 | ≥ 4.5:1 |
| 实测 · 次要文字（14px，`#5e5e5e` / `#f3f3f3`） | 5.84:1 | ≥ 4.5:1 |
| 实测 · 按钮文字（白字 / `#0052d9`） | 6.54:1 | ≥ 4.5:1 |
| 实测 · 禁用态文字（`#5e5e5e` / `#eeeeee`） | 5.59:1 | ≥ 4.5:1 |
| 实测 · 页脚文字 / 表格表头 / 36px 大字 | 6.48 / 5.59 / 13.99:1 | ≥ 4.5:1 / 大字 ≥ 3:1 |
| 实测 · 错误态文字（`#ad352f` / 卡底） | 5.69:1 | ≥ 4.5:1 |
| 实测 · 成功态文字（`#006c45` / 卡底） | 5.86:1 | ≥ 4.5:1 |
| 实测 · 控件边界（`#8b8b8b` / 白底） | 3.41:1 | 非文本 ≥ 3:1 |
| 实测 · 图表本期 / 上期线（对卡底） | 5.90 / 5.75:1 | 非文本 ≥ 3:1 |
| 实测 · 焦点环（`#0052d9` / 白底） | 6.54:1 | ≥ 3:1 |

文字最低 5.59:1，整体最低 3.41:1（非文本，实测）。hover 态主按钮白字压 `#003cab` 9.40:1（实测）。

**数字对账**：默认近 7 日 / 全部渠道，明细表 20 行成交额求和 **2,960,725** = 页面「周期合计」**2,960,725**（`equal: true`）；当日成交额 418,759，KPI、图表、表格、下钻、导出 CSV 全部出自同一份 200 天确定性数据。

**核心交互真跑（前 → 后，数字取自 DOM）**：

| 交互 | 前 | 后 |
| --- | --- | --- |
| 渠道筛选（全部 → 自然流量） | 明细 20 条 / 已应用 0 项 / 清空 disabled=true / 当日成交额 418,759 / 周期合计 2,960,725 | 明细 **5** 条 / 已应用 **1** 项 / 清空 disabled=false / 当日成交额 **152,084** / 周期合计 **1,077,701** |
| 周期切换（近 7 日 → 近 30 日） | 折线 7 点 / 7 天 / 合计 1,077,701 / tab `true,false,false` | 折线 **30** 点 / **30** 天 / 合计 **5,435,037** / tab `false,true,false` / 已应用 1 → **2** 项 |
| 表单校验三态 | idle：error 字段 0、success 字段 0、msg=`idle` | 错误：`error` 字段 **3**（两个日期框 + 消息）、`aria-invalid` 2、「结束日期不能早于开始日期。」、数字不变；成功：error **0**、success **3**、周期天数 30 → **19**、折线 30 → **19** 点、tab 全 false（自定义区间）、合计 **3,245,943** |
| 清空筛选 | 明细 5 条 / 已应用 2 / 合计 3,245,943 / 19 天 / 19 点 | 明细 **20** 条 / 已应用 **0** / 清空 disabled=true / 合计 **2,960,725** / **7** 天 / **7** 点 / tab 回 `true,false,false` |
| 关键词空状态 | 明细 20 条 / 空态 hidden=true / 已应用 0 | 明细 **0** 条 / 空态 hidden=**false** / 已应用 **1**；点「清空筛选」→ 20 条、hidden=true、0 项 |
| 抽屉开合 | hidden=true / `is-open`=false / 明细行 0 | hidden=false / `is-open`=true / `transform:none` / rect `x=676,w=589,h=900` / 按日明细 **7** 行 / 汇总 **4** 项 / 焦点 `drawerClose` / 遮罩 hidden=false；Esc → hidden=true、焦点回 `.drill`、遮罩 hidden=true |
| 导出 / 复制成功态 | 对话框 open=false / CSV 未生成 / 按钮「复制 CSV」/ `data-state` 无 / 状态 hidden=true | 真实点击后 open=true、CSV **21** 行（表头 + 20 行）、按钮「**已复制**」、`data-state=success`、状态 hidden=false「已复制 20 行到剪贴板」、`__errs=[]` |
| 图例悬停 / 隔离 | 本期 opacity 1 / 上期 opacity 1 | hover → 本期 **0.3** → 移出回 1；点击隔离 → 上期 `aria-pressed=false`、opacity **0**；再点回 true / 1 |
| 标签页键盘 | tab7 选中 / 7 天 | `ArrowRight` → tab30 选中 / **30** 天 / 焦点 `tab30` |
| tooltip / 图例点击后的图表 | 两系列可见 | 折线点数与周期天数始终一致 |

## 9. 回炉记录（第一版问题 → 改动 → 改后实测）

| # | 第一版问题（实测证据） | 改动 | 改后实测 |
| --- | --- | --- | --- |
| 1 | 抽屉用 `requestAnimationFrame` 加 `.is-open`；无头 / 后台标签页不触发回调，实测 `hidden=false` 但 `cls='drawer'`、`transform: matrix(1,0,0,1,588.797,0)`（停在屏外） | 改为同步 `void el.drawer.offsetWidth` 后加类 | `is-open=true`，焦点 `drawerClose`；但见 #2 |
| 2 | 即使 `is-open=true`，CSS `transform` 过渡在后台标签页不推进，computed 仍是 `matrix(1,0,0,1,588.797,0)`，抽屉不可见 | 去掉 `transform: translateX(100%)` 与过渡，浮层改为即时开合；动效时长只留给按钮 hover / 标签切换 | `transform:none`，rect `x=676,w=589,h=900`；320 档抽屉宽 305、页面 305/305；`__errs=[]` |
| 3 | `navigator.clipboard.writeText` 在 `file://` 被拒，失败分支对 `<pre>` 调 `.select()` 抛 `TypeError: el.csvText.select is not a function`，`__errs` 出现未处理拒绝，成功态不出现 | 用户手势内先走同步 `document.execCommand('copy')`，失败再试异步 API 且 `catch` 不抛；手动选区改用 `document.createRange()` | 真实 `click_at_xy` 点击后 `data-state=success`、「已复制 20 行到剪贴板」、`__errs=[]` |
| 4 | 跳转链接用 `--accent` 实填，320×900 实测强调色面积 8,934 px² = **3.255%**；短视口（320×568）会逼近 5% | 跳转链接改 `--ink` 底 + `--paper` 字（工具类不是品牌强调），强调色只留主按钮与图例色块 | 面积 **5,058 px²**，四档 **1.843% / 1.561% / 0.746% / 0.444%**，320×568 为 2.92%，全部 < 5% |

回炉后整轮重测：四档溢出、零外链、行高普查、对比度、全部交互（见 §8），不是只测改动点。

## 10. 超出基准规范的数值清单（全部标「回源」或 derived）

**回源（按 GAP_RULES 指定文章整套取，不跨源混搭）**

| 维度（均为回源） | GAP_RULES 条 | 回源文章 | 取值 |
| --- | --- | --- | --- |
| 色值（回源） | 色值 | `content/color/tdesign.tencent.com--color.md` | §3 全表 19 个 token |
| 字阶 / 行高 / 字重 / 字体栈（回源） | 字阶、色阶当文字 | `content/type/tdesign.tencent.com--fonts.md` | 14/20/36px、`字号 + 8`、400/600、系统栈 |
| 间距（回源） | 间距 | `content/layout/atlassian.design--spacing.md` | 8px 基数整套 4–48px |
| 动效时长（回源） | 动效时长与缓动 | `content/motion/nngroup.com--animation-duration.md` | 100 / 200 / 300ms |
| 缓动曲线（回源） | 动效时长与缓动 | `content/standards/w3c--css-easing-1.md` | 三条定值 cubic-bezier，未自造 |
| 触控目标 / 焦点环（回源口径，值标 derived） | 触控目标与焦点环 | `content/a11y/w3c--wcag-2.2.md` | 44px 控件高、2px + 2px 焦点环 |
| 数字字体（降级） | 数字字体 | `content/type/tdesign.tencent.com--fonts.md:37` | **降级** `tabular-nums` |

**derived（全站统一规则，逐条可复核）**：圆角 4/8px；控件与表格行高 44px；发丝线 1px；容器 `max-width:1280px`；断点 960/640px；弹层遮罩 `rgba(0,0,0,0.45)` 一档；抽屉宽 `min(46vw,620px)`、≤640px 满宽；图表几何（240px 绘图区、4 条网格、2px 线宽、2.5px 点半径、8/10px 内边距）；金额排版（两位小数 + 千分位 + tabular-nums）；正文行长（卡片分栏，不设窄文栏）；首屏占比（无 hero，KPI 即首屏主体）；禁用态配色（色阶替换而非降透明度，保证 5.59:1）；导出 CSV 格式（表头 + 当前筛选行）；200 天确定性自造数据生成算法；浮层即时开合（§9 #2）；强调面积口径（统计 `backgroundColor === rgb(0,82,217)` 的可见元素矩形面积）。
