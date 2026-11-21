# DECISIONS · WeekDeck · 团队周报看板（weekdeck）

- 基准规范：**TDesign**（`site/dist/ai/guide.md:24`「中文产品 UI（中后台 / 工具 / 内容 / 协作）」行）
主源：`content/color/tdesign.tencent.com--color.md` 与 `content/type/tdesign.tencent.com--fonts.md`（TDesign，项目语境「中文产品 UI（中后台 / 工具 / 内容 / 协作）」按 guide 项目选型方案定）。
四轴：genre = 工具/协作（周报作周期出版物的语汇）· 主色 = TDesign 扩展色黄系 Yellow4 `#f5ba18` · macrostructure = Stat-Led · nav = N6 报头 · footer = Ft2 单行。
界面性质：**应用数据表面，不是营销页**，没有 hero 营销段、功能区、CTA 段落；周报数据本身就是页面。设计场景主攻：s10 图表与数据可视化、s19 状态与反馈（路由数据 `site/src/data/star-points.json`）。

---

## 0. 站名

站名按需求 `briefs/weekdeck.md` 的 `name` 字段定为 WeekDeck，入库时不另跑命名核验；原批次的起名候选与闸门记录随改名撤下。

---

## 1. 色彩：全部取自 TDesign 原文

| Token | 值 | 原文位置 | 用途 |
| --- | --- | --- | --- |
| `--accent` | `#f5ba18` | content/color/tdesign.tencent.com--color.md:207（Yellow4） | 主 CTA 填充（生成周报/生成按钮） |
| `--accent-hover` | `#ffd36d` | content/color/tdesign.tencent.com--color.md:206（Yellow3） | CTA hover（hover 取浅一档，映射规则为派生；色阶见 content/color/tdesign.tencent.com--color.md:206） |
| `--accent-active` | `#d8a100` | content/color/tdesign.tencent.com--color.md:208（Yellow5） | CTA 按下态（active 取深一档，映射规则为派生；色阶见 content/color/tdesign.tencent.com--color.md:208） |
| `--accent-mid` | `#b38500` | content/color/tdesign.tencent.com--color.md:209（Yellow6） | focus ring（对白底 3.35:1、对灰底 3.02:1，均 ≥3 非文本） |
| `--accent-strong` | `#8b6600` | content/color/tdesign.tencent.com--color.md:210（Yellow7） | 图表实际线、直标文字、选中 chip 文字 |
| `--accent-soft` | `#fff5e4` | content/color/tdesign.tencent.com--color.md:204（Yellow1） | 图表面积填充、选中 chip 底 |
| `--accent-line` | `#ffe7b5` | content/color/tdesign.tencent.com--color.md:205（Yellow2） | 选中 chip 描边 |
| `--white` | `#ffffff` | content/color/tdesign.tencent.com--color.md:93 | 卡片、弹窗 |
| `--gray1` | `#f3f3f3` | content/color/tdesign.tencent.com--color.md:140 | 页面画布、hover 底、报告输出底 |
| `--gray2` | `#eeeeee` | content/color/tdesign.tencent.com--color.md:142 | 1px 发丝分隔线、todo chip 底、图表网格 |
| `--gray3` | `#e8e8e8` | content/color/tdesign.tencent.com--color.md:143 | 进度条未开始段、禁用按钮底 |
| `--gray4` | `#dddddd` | content/color/tdesign.tencent.com--color.md:144 | 输入框边（常态 1px 不变宽）、次按钮边 |
| `--gray5` | `#c6c6c6` | content/color/tdesign.tencent.com--color.md:145 | 今天虚线、十字线、空状态图形 |
| `--gray7` | `#8b8b8b` | content/color/tdesign.tencent.com--color.md:147 | 图表计划虚线、轴线（对白 3.41:1 ≥3） |
| `--gray8` | `#777777` | content/color/tdesign.tencent.com--color.md:148 | todo 状态点 |
| `--ink1` | `rgba(0,0,0,.9)` | content/type/tdesign.tencent.com--fonts.md:95-96（Font Gy1） | 正文、标题 |
| `--ink2` | `rgba(0,0,0,.6)` | content/type/tdesign.tencent.com--fonts.md:97-98（Font Gy2） | 次级信息、轴刻度文字 |
| `--ink3` | `rgba(0,0,0,.4)` | content/type/tdesign.tencent.com--fonts.md:99-100（Font Gy3） | 仅 placeholder（不承载正文） |
| `--ink4` | `rgba(0,0,0,.26)` | content/type/tdesign.tencent.com--fonts.md:101-102（Font Gy4） | 仅 disabled 文字 |
| `--st-todo` / `--st-todo-text` | `#777777` / `#5e5e5e` | content/color/tdesign.tencent.com--color.md:148-149（Gray8 / Gray9） | 未开始状态点 / 未开始 chip 文字 |
| `--st-doing` / `--st-doing-text` | `#366ef4` / `#0052d9` | content/color/tdesign.tencent.com--color.md:47-48（Blue6 / Blue7） | 进行中状态点、进度段 / 进行中 chip 文字 |
| `--st-review` / `--st-review-text` | `#e37318` / `#954500` | content/color/tdesign.tencent.com--color.md:70-72（Orange5 / Orange7） | 评审中状态点、警告图标 / 评审中、警告文案 |
| `--st-done` / `--st-done-text` | `#2ba471` / `#006c45` | content/color/tdesign.tencent.com--color.md:82-84（Green5 / Green7） | 完成状态点、进度段 / 完成 chip 文字 |
| `--st-block` / `--st-block-text` | `#d54941` / `#ad352f` | content/color/tdesign.tencent.com--color.md:59-60（Red6 / Red7） | 阻塞状态点、错误边 / 阻塞、错误文案 |
| 状态软底 | Blue1 `#f2f3ff` / Orange1 `#fff1e9` / Green1 `#e3f9e9` / Red1 `#fff0ed` | content/color/tdesign.tencent.com--color.md:47-48 / content/color/tdesign.tencent.com--color.md:117-118 / content/color/tdesign.tencent.com--color.md:152-153 / content/color/tdesign.tencent.com--color.md:82-83 | 四种状态 chip 底色 |

**为什么 CTA 不是白字**：白字压 `#f5ba18` 实测 1.76:1，远低于 4.5:1（可访问性底线优先于观感）；改用 `rgba(0,0,0,.9)` 实测 **10.52:1**，hover 态 12.82:1，按下态 8.14:1。全站仅 CTA 一处由强调色承载文字。

**色彩纪律**：配色先读方法层必读（界面配色框架、视觉层级）再取色板。功能色只出现在 6px 状态点、状态 chip、进度条分段、警告/错误信号；强调色（饱和黄）1280 首屏像素占比 **0.35%**，加浅黄底（图表面积/选中底）合计 **4.13%**，低于 5%。界面主色层次 = 白卡片 / 灰画布 / 灰阶发丝线 + 黄色仅做行动与选中信号。色相按 30° 间隔基准取单一色相（content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:282），状态表达按「选中只降亮度、hover 只降饱和」的单维度思路（content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:242）映射到 TDesign 同族色阶。

---

## 2. 字体与字阶

- 字体栈逐字取 content/type/tdesign.tencent.com--fonts.md:34（仅补引号）；单文件零外部请求，不引第二字体族（配对坍缩为单栈，见 FINDINGS）。
- 字阶 10 / 12 / 14 / 16 / 20 / 24 / 28 / 36 / 48 / 64（content/type/tdesign.tencent.com--fonts.md:49-60）。
- 行高公式 `line-height = font-size + 8`（content/type/tdesign.tencent.com--fonts.md:69）写入每个字号 token：12/20、14/22、16/24、20/28、28/36、36/44、48/56、64/72。页面审计 168 个文本节点 **0 违例**。
- 字重只有 400 与 600（content/type/tdesign.tencent.com--fonts.md:81）。
- h1「本周周报」4 字 → 64px/72 顶档（content/type/tdesign.tencent.com--fonts.md:61），≤640 降 48px（content/type/tdesign.tencent.com--fonts.md:60），≤480 降 36px（content/type/tdesign.tencent.com--fonts.md:59）；按字数套档、不做一档打天下。
- 层级三档映射（视觉层级最多 3 档、最大元素 ≤2 个，content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77；字号档出处 content/type/tdesign.tencent.com--fonts.md:61）：大档 = h1 64px + KPI 主数字 48px（全页仅此 2 个最大元素）；中档 = KPI 数字 28px、区块标题 20px、卡内标题 16px；小档 = 正文 14px、元信息 12px。
- KPI 主数字 48px/56（content/type/tdesign.tencent.com--fonts.md:60）作 Stat-Led 巨数（展示型仪表盘：最重要数据最高对比、最大面积，content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:32）；其余 KPI 28px/36。
- 数字一律 `font-variant-numeric: tabular-nums`。TCloud Number（content/type/tdesign.tencent.com--fonts.md:37）是外部字体，单文件零请求约束下不可用，按 guide「主源缺口与派生」降级 tabular-nums（FINDINGS 记录）。

---

## 3. 间距、圆角、阴影、动效

- **间距（回源）**：TDesign 两篇无 spacing scale，按 guide「主源缺口与派生」回源 8px 基数尺度（content/layout/uisdc.com--code-for-design-of-spacing.md:102）：4 / 8 / 12 / 16 / 24 / 32 / 48 / 64；其中 8、16、24、32、48、64 六档在原文，4 与 12 为派生补档（倍数规则见 content/layout/uisdc.com--code-for-design-of-spacing.md:156）。全站只用这一套。
- **圆角**：库无通用 radius 规范 → derived 全站统一 4px（输入、chip 内块）/ 8px（卡片、按钮、弹窗）/ 999px（chip、进度条），不冒充原文值。
- **发丝线**：1px 记 derived（guide 发丝线宽规则）；仅作结构性分隔（表格行、区块分隔、弹窗分隔），控件边另按非文本 3:1 取。
- **阴影**：两篇无阴影定义 → 静态一律无阴影，卡片层次靠白底/灰画布/间距（层级靠底色不靠框线）；弹窗用 `rgba(0,0,0,.4)` 遮罩 + 白面分离（遮罩深度 derived）。
- **动效（回源）**：TDesign 两篇无动效篇，按 guide「主源缺口与派生」从 NN/g 取场景档位，微反馈 100ms（content/motion/nngroup.com--animation-duration.md:80）、进场 300ms、退出 200 到 250ms（content/motion/nngroup.com--animation-duration.md:84，进长出短）；进场 ease-out、离场 ease-in（content/motion/nngroup.com--animation-duration.md:92、content/motion/nngroup.com--animation-duration.md:94）。`prefers-reduced-motion: reduce` 全部压到 0.01ms（派生；reduce motion 的要求见 content/motion/nngroup.com--animation-duration.md:24）。焦点环不参与任何过渡。

---

## 4. 结构：Stat-Led / N6 / Ft2 的落地

**Stat-Led（数据即叙事）**：展示型仪表盘按重要性铺排，最重要的数据在页面顶部、其余按 F 形阅读顺序（content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:32-34），指标数量克制（content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:38），白留白分区（content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:46）。只保留 4 个 KPI：完成率 50%（48px 巨数，档出处 content/type/tdesign.tencent.com--fonts.md:60）、燃尽剩余、目标推进度、阻塞；区块顺序 KPI → 燃尽图 → 目标进度 → 成员任务，重要度递减。

**N6 报头（周报=周期出版物）**：刊期行（平台组 · 第 45 周 · 数据截至 11-05 18:30）在上，报头字「WeekDeck / OUR WEEKLY」居中，下面一行页内导航（概览 / 燃尽 / 目标 / 成员）+ 主 CTA「生成周报」，双线收尾（两条 1px 发丝线，线距 2px derived）。≤480px 导航链接 44px 命中区。

**Ft2 单行页脚**：一行署名（WeekDeck / 平台组 · 第 45 周 / 数据截至 / 示例数据声明 / 台账指针），信息密度为 spaced，不用多列 sitemap。

**信息架构**：单页四段锚点导航（点击平滑滚动，reduced-motion 降级 auto）；成员表 5 列（成员/任务/状态/本周产出/截止），≤640px 表头隐藏转块布局。

---

## 5. 图表规格（s10 设计点逐条落法；几何参数全部 derived，构图原则回源 Carbon 图表解剖系）

燃尽折线图为测试页内联 SVG（任务书允许），按 dataviz 设计点执行：

- **构成**：图表标题、轴、刻度、轴标题、绘图区、tooltip、十字线、数据点齐备（九元素清单 content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:31-39；工具栏/缩放条为可选件，单图从简不设，构图避塞 content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:51）。图表标题直接给结论「实际燃尽落后计划 3 项」（标题反映主洞察，content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:43）。
- **轴**：数值轴从零起，本图虽是折线（趋势图允许不从零，content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:45），剩余任务数 0 是真实基线，仍从零画以保诚实（柱/面积类强制从零的更严规则在 content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:33）。X 轴为时间序列：刻度增量全周一致不压缩（content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:75），日期用本地化格式「周一 11-02」（content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:79），今天刻度加粗作 landmark（content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:78）。轴标题「剩余任务数」「日期」在位（无轴标题时必须由副标题给上下文，content/patterns/primer--data-visualization.md:23、content/patterns/primer--data-visualization.md:26）。
- **图例**：不设长图例，线端直接标注「实际剩余 6 项」「计划」（能直标就不做长图例，content/dataviz/carbondesignsystem.com--data-visualization-legends.md:28-30；in-chart 标签适合数据可预测的图，content/dataviz/carbondesignsystem.com--data-visualization-legends.md:40）。直标承担图例交互：悬停一类其它类透明度降至 30%（content/dataviz/carbondesignsystem.com--data-visualization-legends.md:86），点击隔离/恢复（content/dataviz/carbondesignsystem.com--data-visualization-legends.md:92）。两系列仍给灰/黄双通道区分（颜色 + 虚实线型）。
- **对比度**：图表标记与背景 ≥3:1（content/patterns/primer--data-visualization.md:49）。实际线 `#8b6600` 对白 5.25:1，计划线 `#8b8b8b` 对白 3.41:1。分段进度条相邻色段之间加 2px（派生）白色高对比分隔线（分隔线做法见 content/patterns/primer--data-visualization.md:47）。
- **tooltip 与点**：折线图的点与十字线是必备交互件（content/patterns/primer--data-visualization.md:30-31），悬停列区出现十字线 + tooltip，tooltip 同时给出该点两轴与两系列数值（content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:47）。无障碍兜底：图下折叠数据表（键盘与读屏可取全部数值）。
- **数据色板**：同一系列全站一个颜色、同一仪表盘同一数据集同色（content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:42）；系列色取自主源扩展色（TDesign 数据可视化即基于扩展色，content/color/tdesign.tencent.com--color.md:233-235），实际线 Yellow7、计划线中性 Gray7，不引 Carbon 色值（只取其构图原则）。语义状态色按警示色语义（红=错误/阻塞、橙=告警、绿=正常/成功，content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:64）。
- **标注**：今天虚线 + 标题结论行作 annotation，辅助解读波动且不遮数据（content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:66）。
- **几何参数（derived，guide「图表几何参数」规则）**：viewBox 760×332、绘图区 600×256、X 五等分 144px、Y 档距 64px（0/3/6/9/12 五档）、点 r=4、实际线 2.5px、计划线 2px 虚线 6-4、进度条高 12px、分隔线 2px，全站统一，不冒充原文值。

---

## 6. 状态与反馈规格（s19）

- **通知分层**：页面级风险用 warning 态横幅（六态清单 content/patterns/primer--notification-messaging.md:35；warning 用于潜在问题与后果，content/patterns/primer--notification-messaging.md:46），放在所指的成员区块顶部、就近于行动点（content/patterns/primer--notification-messaging.md:114-116），横幅带 16px（派生）描边图标与不小于 14px（派生）的文字，分层原则见 content/patterns/primer--notification-messaging.md:37，并带真实行动「查看阻塞项」（点击真筛选）。生成结果反馈放弹窗内、不关弹窗跳页（content/patterns/primer--notification-messaging.md:124）。复制成功按 success 态克制使用（copy 成功给绿勾即可，content/patterns/primer--notification-messaging.md:77、content/patterns/primer--notification-messaging.md:81-85）。
- **加载态**：生成按钮原位替换为 spinner + 专属标签「正在生成周报…」（加载指示放内容原位防跳动，content/patterns/primer--loading.md:105；标签尽量具体，content/patterns/primer--loading.md:138），aria-busy + 一次播报（content/patterns/primer--loading.md:140）；筛选结果数由常驻 `role=status` 播报「筛选结果：N 项任务」。不用骨架屏（单卡片小区域，骨架只适合容器型组件）。
- **空状态**：筛选无结果时整体替换表格（不带表头），图形贴情境（过滤视图空），主行动「查看全部任务」一个（content/patterns/primer--empty-states.md:42-46），文案说清原因不说「出了点问题」（content/patterns/primer--empty-states.md:70）。
- **表单校验**：弹窗内标题失焦校验 + 提交复校验；错误 = 红边 2px（派生，不跳版）+ 图标 + 文案 + `aria-invalid` + `aria-describedby`（不只靠颜色，content/howto/nngroup.com--visual-hierarchy-ux-definition.md:60），错误信息就近放在字段旁（content/patterns/primer--notification-messaging.md:120）。

---

## 7. 对比度（实测，WCAG 2.1 相对亮度；DOM 全文本节点扫描 168 个，0 处低于阈值）

| 组合 | 实测 | 要求 |
| --- | --- | --- |
| 正文 `rgba(0,0,0,.9)` on `#ffffff` / `#f3f3f3` | 17.58:1 / 16.00:1 | ≥4.5 |
| 次级 `rgba(0,0,0,.6)` on `#ffffff` / `#f3f3f3` / `#eeeeee` | 5.74:1 / 5.58:1 / 5.50:1 | ≥4.5 |
| CTA 文字 `rgba(0,0,0,.9)` on `#f5ba18`（hover `#ffd36d` / active `#d8a100`） | 10.52:1（12.82:1 / 8.14:1） | ≥4.5 |
| 选中 chip `#8b6600` on `#fff5e4` | 4.86:1 | ≥4.5 |
| 图表直标 `#8b6600` on `#ffffff` | 5.25:1 | ≥4.5 |
| 状态文字 Green7/Blue7/Orange7/Red7 on 各自 1 底 | 5.88 / 5.93 / 6.08 / 5.69:1 | ≥4.5 |
| 未开始 chip `#5e5e5e` on `#eeeeee` | 5.59:1 | ≥4.5 |
| focus ring `#b38500` on `#ffffff` / `#f3f3f3` | 3.35:1 / 3.02:1 | ≥3（非文本） |
| 状态点 Gray8/Blue6/Orange5/Green5/Red6 on `#ffffff` | 4.48 / 4.47 / 3.12 / 3.16 / 4.32:1 | ≥3（非文本） |
| 图表标记：实际线 `#8b6600` / 计划线 `#8b8b8b` on `#ffffff` | 5.25:1 / 3.41:1 | ≥3（content/patterns/primer--data-visualization.md:49） |

占位文字 `rgba(0,0,0,.4)`（2.85:1）仅用于 textarea placeholder，不承载正文；「色阶当文字」规则本轮真实触发一次：Gray8 作 chip 文字在灰底只有 3.86:1，按 guide 规则换同族深档 Gray9 后 5.59:1。

---

## 8. 交互规格（全部真跑，前后数字见 FINDINGS）

1. **状态筛选**：6 枚 chip（全部/进行中/评审中/已完成/已阻塞/已取消）单选过滤 12 行成员表，「显示 N / 12」计数与 `role=status` 播报同步；已取消 0 行触发空状态 + 一键复原。
2. **生成周报**（表单校验 + 弹窗 + 加载 + 反馈）：标题必填 ≥4 字，失焦与提交双校验，错误三重信号；提交进入 loading，600ms 后按页内数据真生成周报全文（标题/范围/备注入文），弹窗内 success 提示 + 复制全文（绿勾反馈）。
3. **图表交互**：列区悬停出十字线 + 双系列 tooltip；直标悬停降其它系列至 30%、点击隔离/恢复。
4. **导航与横幅**：四锚点平滑滚动；警告横幅「查看阻塞项」真筛选到阻塞行并滚动到位。

八态覆盖：default · hover（按钮浅化/行 hover/chip 变灰）· `:focus-visible`（2px `#b38500` ring，无过渡）· active（按钮下移 1px）· disabled（取消/生成互斥禁用）· loading（spinner + aria-busy）· error（表单红边 + 图标 + 文案）· success（复制绿勾）。reduced-motion 全降级。

---

## 9. 质量升级 6 条的落点

1. **hero 按字数套档**：h1 4 字 → 64px/72 顶档（三级断点递减 48/36），KPI 主数字 48px 为全页第二个最大元素，最大元素恰好 2 个（字号档出处 content/type/tdesign.tencent.com--fonts.md:60-61；层级原则见 content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77）。
2. **层次靠底色不靠框线**：卡片 `border-width: 0`、静态无阴影，靠 `#ffffff` 卡片 on `#f3f3f3` 画布 + 1px `#eeeeee` 结构分隔；仅输入框/次按钮有控件边（`#dddddd`）。
3. **强调色面积 < 5%**：1280 首屏像素实测饱和黄 0.35% + 浅黄底 3.78% = **4.13%**。
4. **图表内联 SVG 精修**：燃尽图 = 面积 + 双系列折线 + 数据点 + 十字线 + 直标 + 今天标注 + 可折叠数据表；横幅/图标/空状态图形均为手写内联 SVG，无位图、无外链。
5. **交互八态齐全**：见 §8；错误态不只靠颜色（图标 + 文案 + aria）。
6. **行高 = 字号 + 8 全站执行**：168 个文本节点审计 0 违例；数字 tabular-nums 对齐；中文无负字距；正文段宽 ≤45 字，页脚单行。
