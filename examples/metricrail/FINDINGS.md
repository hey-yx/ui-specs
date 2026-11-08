# FINDINGS · MetricRail（metricrail）

## 1. 本稿相对合格线的落点（可核验事实）

- 三件套齐备：`index.html`（52,653 字节，单文件）、`DECISIONS.md`、`FINDINGS.md`；`briefs/metricrail.md` 未改，仓库其余文件未动，未跑 `npm run build`，未读 `~/workspace/archive/`。
- 七步按序执行：语境「数据看板 / 图表产品」→ 用 python 筛 `design-points.json` 的 `points_by_task`（s17/s3/s10/s6/s1/s5/s4/s9/s19/s13/s18）→ 读 `select` 定取舍 → 逐篇读原文并连行号记账 → 项目选型定基准规范 → 出稿 → 测试回炉（DECISIONS §9 四条改动，改后整轮重测）。
- 一个基准规范：`project-carbon-dataviz` → Carbon（数据可视化）。取值记录引用全部 `content/完整路径:行号`；色值、字阶、间距、时长、缓动逐值可在引用行 ±3 行内找到原文同值；基准规范外的数值逐条标「回源」或 derived（DECISIONS §10）。
- 零外部请求：`<link>` 0、`@import` 0、`src=` 0、`http(s)://` 0、`url(` 0，外链文件节点 0；`performance.getEntriesByType('resource').length === 0`；未捕获 JS 错误 `[]`。
- 四档 `documentElement.scrollWidth === clientWidth`：320 → 305/305，375 → 360/360，768 → 753/753，1280 → 1265/1265；四档 `body.scrollWidth` 同值。
- 行高（实测）：`:where(body, body *) { line-height: calc(1em + 8px) }`；默认态 227 个含直接文本节点 0 违例，抽屉 + 对话框全开 250 节点 0 违例。
- 对比度（WCAG 公式，读 computedStyle）：文字最低 5.59:1，非文本最低 3.41:1；正文、次要文字、按钮文字、禁用态、错误态、成功态、大字、控件边界、图表标记、焦点环各算过一次（DECISIONS §8）。
- 强调色 `#0052d9` 实填 5,058 px²（实测）；四档占比 1.843% / 1.561% / 0.746% / 0.444%，均 < 5%（320×568 短视口 2.92%）。
- 数字自洽：默认近 7 日 / 全部渠道下，明细表 20 行成交额求和 2,960,725 = 页面「周期合计」2,960,725（`equal: true`）；KPI、折线、表格、下钻、导出 CSV 同出一份 200 天确定性数据。
- 交互真跑 9 组（渠道筛选、周期切换、校验三态、清空、关键词空状态、抽屉开合、导出/复制、图例悬停与隔离、标签页键盘），每组记录前后数字（DECISIONS §8）；抽屉 Esc 关闭后焦点回触发点；复制用真实 `click_at_xy` 触发用户手势。
- 结构四轴有据（实测）：Stat-Led / N9 / Ft2 / `#0052d9`，依据写在 DECISIONS §2；基准规范与 Hallmark 分工、catalog 轮换跳过的原因也写在 §2。

## 2. 数值缺口与替代

| 缺口（基准规范 Carbon 数据可视化 8 篇原文的实际状态） | 处理 | 对应 GAP_RULES 条 |
| --- | --- | --- |
| 基准规范 8 篇全是原则与图表类型说明，没有任何 UI hex / px / ms。`content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:34`、`:38`、`:46` 等色板示例被「（色板示例见原文）」占位，取不到色值 | 整套色板 token 回源 `content/color/tdesign.tencent.com--color.md`，19 个 token 全出自这一篇，不与其它色板混用；图表分类色板顺序原则仍取基准规范（`:32`） | **色值**（「基准规范只有语义规则没给色板数值时，要么回源取色板原文值做整套 token……两半混用是缺陷」） |
| 基准规范无字阶、行高、字重、字体栈 | 回源 `content/type/tdesign.tencent.com--fonts.md`：14/20/36px 三档、`行高 = 字号 + 8`、400/600、系统字体栈 | **字阶**；行高公式另按简报硬规则逐元素实现 |
| 基准规范无 spacing scale | 回源 `content/layout/atlassian.design--spacing.md` 8px 基数整套（4/8/12/16/24/32/48px），全站只用这一套 | **间距**（批次默认 Atlassian 8px 基数；禁止拿字阶步进自己组合） |
| 基准规范无动效篇 | 时长回源 `content/motion/nngroup.com--animation-duration.md` 的 100/200/300 三档；缓动回源 `content/standards/w3c--css-easing-1.md` 三条定值曲线，未自造 cubic-bezier | **动效时长与缓动** |
| 基准规范无触控目标与焦点环规格 | 回源 WCAG 2.2，控件高稳妥取 44px、焦点环 2px 实线 + 2px 偏移（值本身标 derived，规则口径回源） | **触控目标与焦点环** |
| 基准规范点名的表格数字等距效果需要 TCloud Number，零外链拿不到 | 降级 `font-variant-numeric: tabular-nums`，取值记录标「降级」 | **数字字体** |
| 基准规范只给分隔线颜色语义、未给线宽 | 1px 标 derived；装饰线与控件边界分开，边界另取 3.41:1 的 `#8b8b8b` | **发丝线宽** |
| 基准规范无圆角、组件尺寸、图表几何、遮罩、断点、容器宽度、金额排版、行长、首屏占比 | 全部标 derived，成套统一规则写在 DECISIONS §5、§10 | **圆角**、**组件尺寸**、**图表几何参数**、**弹层遮罩**、**正文行长**、**首屏占比**、**金额排版** |
| 色阶当文字：TDesign Red6 `#d54941` 自述 4.32:1（`content/color/tdesign.tencent.com--color.md:77`），Orange5 3.12:1、Green5 3.16:1，均不满足小字 4.5:1 | 错误文字取同族深档 Red7 `#ad352f`（实测 5.69:1）、成功文字取 Green7 `#006c45`（5.86:1）；hover 态 `#003cab` 白字 9.40:1 逐态复算 | **色阶当文字**（「不达 4.5 的档只给禁用与装饰，文字换同族深档」「hover/active 同样按实际底色复算」） |
| Carbon 禁用态用降透明度（`content/patterns/carbon--disabled-states.md:45-55`，文字 25% opacity），会让禁用态文字掉到 4.5:1 以下 | 禁用态改用色阶替换：`#eeeeee` 底 + `#5e5e5e` 字，实测 5.59:1；`cursor:not-allowed` 表达不可交互 | **色阶当文字**；WCAG 1.4.11 对 inactive 组件有豁免（`content/a11y/w3c--wcag-2.2.md:516`），但本稿仍按 4.5:1 交付 |

## 3. 新缺口（指南没有、被迫派生的维度，含回填建议）

1. **基准规范色板原文无 hex**。这是路由层缺口而非本稿取舍：`project-carbon-dataviz` 的 8 篇里 `data-visualization-color-palettes.md` 是唯一谈色值的文章，但示例被占位符替换，整篇只有 `content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:32` 的顺序规则、`:44` 的亮暗主题最深/最浅规则，没有一个 hex。**建议回填**：把 IBM 官方分类色板 hex 表补进该篇（带行号），并在 GAP_RULES「色值」条注明「数据看板基准规范色板篇只有原则、无 hex，必须整套回源 TDesign 或 GOV.UK」。否则每个数据看板案例都会各自派生一套色板。
2. **「图表几何参数」条只说「标 derived 全站统一自定」，没有可回源的档位示例**。本稿被迫派生 240px 绘图区高、4 条网格、2px 线宽、2.5px 点半径、8/10px 内边距。**建议回填**：给一组推荐几何档位（含轴档数、线宽、点半径、图例高度上限），或把 `content/dataviz/carbondesignsystem.com--data-visualization-legends.md:116`、`:122` 已有的「最多两行、不超过图表高度 30%」和 `content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:61`、`:63` 的 16px 轴断口 / 0.5px 线段纳入几何回源清单。
3. **GAP_RULES 没有「浮层/抽屉宽度与开合方式」条**。本稿 derived `min(46vw, 620px)` + ≤640px 满宽，且因无头/后台标签页节流，把开合改为即时状态切换（DECISIONS §9 #1/#2）。**建议回填**：在 GAP_RULES 增一行「弹层尺寸与开合」，写明宽度按屏占比、验收不依赖 rAF / CSS transition、Esc 挂 document 并回焦（这条规则目前散在 page-design-preferences 与 ui-specs-maintenance 的坑列表里，不在指南正文）。
4. **GAP_RULES 没有「禁用态配色」条**。Carbon 原文给的是 50%/25% 透明度，与「色阶当文字」的 4.5:1 底线冲突，指南没写裁决顺序。本稿按底线优先选色阶替换。**建议回填**：明确 inactive 豁免与文字对比的取舍口径，避免下个案例照抄 25% 透明度。
5. **测试环境约束未进指南**。三次回炉（rAF 不触发、CSS transition 不推进、`file://` 下 clipboard 被拒 + `<pre>.select()` 报错）都源于无头/后台标签页与 `file://` 权限，指南的「测试回炉」步只说「真跑交互与行为」。**建议回填**：把「浮层状态用真实点击与 `hidden`/`aria-*` 判定，不靠动画终态」「复制优先用户手势内 `execCommand`」「`__errs` 收集未捕获错误与未处理拒绝」写进 `content/patterns/ui-specs--test-walkthrough.md` 的通过标准。
6. **强调色面积口径未定义**。简报要求「强调色实填面积 < 5%」但没写统计口径；本稿定义为「`backgroundColor === rgb(0,82,217)` 的可见元素矩形面积 / 视口面积」，描边、文字色、浅主色底不计入。**建议回填**口径，否则不同案例不可比。

## 4. 已知局限

- 数据为 200 天确定性自造（2026-05-22 至 2026-11-07），无后端；页脚已标「演示数据，非真实经营数据」。日期范围超出该区间会走校验错误态。
- 只做折线趋势图；柱状/面积图未实现，因此没有演示「数值轴必须从零起」的分支（`content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:33`）。
- 导出只提供「复制 CSV 到剪贴板」，未做文件下载：Blob URL 不产生网络资源，但为保持 `file://` 下的零外链与一致行为，选择不做下载。CSV = 表头 + 当前筛选后的明细行（默认 21 行）。
- 加载态未真实出现：页面无异步等待过程，按 `content/patterns/ui-specs--test-walkthrough.md:35`「不到 1 秒不显示加载态」处理；`.btn[data-state="loading"]` 样式已在 CSS，但没有触发路径，未列入实测交互。
- 深色模式未做：基准规范色板篇只有亮暗映射原则（`content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:44`），库内无可用 hex，回源 TDesign 色板只取亮色档。
- 键盘验收覆盖了 tablist 方向键、跳转链接、抽屉 Esc 与焦点回返；未对全页每个可交互元素逐项发真实 Tab 走一遍焦点顺序。
- 四档实测用 CDP `Emulation.setDeviceMetricsOverride`，`clientWidth` 比设定宽度少 15px 是滚动条占位；选用标准按简报取 `scrollWidth === clientWidth`，不把该差值报成溢出。
- 窄屏明细表用容器内横向滚动（表 `min-width:44em`），页面本身不横溢；用户需横向扫读 7 列。
- 卡片圆角靠 `overflow:hidden` 裁切直角子块，未做逐角像素矩阵复验（本轮用 DOM 量测与四档溢出替代）。
