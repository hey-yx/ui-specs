# MetricRail · 取值记录

站点：`index.html`（单文件，React 18 + TDesign React 经 import map 从 esm.sh 引）
需求：`briefs/metricrail.md`（frontmatter 指定 `framework: react`）
基准规范：TDesign（腾讯）
框架与组件库：React 18.3.1，`tdesign-react` 1.18.6
自验环境：`browser_exec` 本地 Chromium，`http://127.0.0.1:8898/` 临时服务；视口用 `Emulation.setDeviceMetricsOverride` 切换

---

## 1 设计前提

**产品类型 + 给谁用**：数据后台看板，给运营、增长、财务的分析人员用，每天开机先看当天数据。需求里只有这一句，页面区块、语气、数值都由七步推出来。

**为什么选 TDesign**：需求是中文产品 UI（中后台），`content/PROJECT-SELECTION.md` 的「中文产品 UI」行把 TDesign 列为基准规范，且该行 React 与 Vue 两栈都有官方组件库。`briefs/rotation.json` 给本批分配强调色 Blue10 `#001a57`，来源是 TDesign 色板，基准规范与需求、调度表三者一致。

**为什么开 React**：需求写了 `framework: react`。按第 3 步，只在有 React 官方组件库的行里选，TDesign 行的 `tdesign-react` 满足。组件一律来自该库，同类控件不手写。

**腔调**：先给数，再给解释。标题不写「洞察」「赋能」这类词，指标名用「今日成交额」「订单量」「转化率」「客单价」，辅助句只补比较对象与差值。

---

## 2 版式三件与理由（照调度表，未换件）

`briefs/rotation.json` 指定：Stat-Led（04）+ N3 + Ft3 + Blue10 `#001a57`。

### 2.1 Stat-Led（`briefs/layouts.md:25`）

「一个巨大数字打头，其余支撑它」。本页首屏是 `¥1,284,600` 的 64px 数字，下面一行「比昨日 +12.4%」，再下面三张 KPI 卡支撑它，趋势图与渠道结构在第二屏。数字是首屏唯一的最大元素，页面标题 24px 退到第二层。

### 2.2 N3 左缘竖条（`briefs/layouts.md:51`）

「左缘竖条，品牌字旋转」。本页固定 64px 深蓝竖条，品牌字 `METRICRAIL` 竖排，四个图标按钮（总览、报表、渠道、设置），底部账号圆标。竖条占满视口高，主区从 64px 之后开始。≤767px 收窄到 48px，不隐藏，保证导航一直可用。

### 2.3 Ft3 三栏索引（`briefs/layouts.md:69`）

「三四栏分类索引」。本页页脚三栏：产品、数据、帮助，每栏三个链接，下面一行数据更新时间与用途说明。速查表提醒 Ft3 是易被认出的模板指纹（`:79`），本页仍用，理由是看板的信息架构需要把「指标字典 / 更新时间 / 导出记录」这类入口收在一处，三栏索引正对这个动作。

### 2.4 强调色 Blue10 `#001a57`（`content/color/tdesign.tencent.com--color.md:51`）

深墨蓝只出现在四个地方：竖条底、主按钮、巨大数字、折线。浅色变体取同族 Blue1 `#f2f3ff`（`:42`）与 Blue2 `#d9e1ff`（`:43`），用于头像底与渠道条形图。没有第二个色相。

---

## 3 色彩表

对比度用 WCAG 2.x 相对亮度公式现算，括号里是「文字色 / 底色」。

| Token | 值 | 出处 | 用途 | 实测 |
| --- | --- | --- | --- | --- |
| accent | `#001a57` Blue10 | `content/color/tdesign.tencent.com--color.md:51` | 竖条、主按钮、巨大数字、折线 | 白字 / 它 16.34:1；它 / `#f3f3f3` 14.72:1 |
| accent-soft | `#d9e1ff` Blue2 | 同上 `:43` | 渠道浅条、头像底 | 装饰，不承载文字 |
| paper | `#ffffff` | 白 | 卡片 | 正文 / 白 17.58:1 |
| paper-2 | `#f3f3f3` Gray1 | 同上 `:95` | 页面底 | 次要文字 / 它 5.58:1 |
| rule | `#e8e8e8` Gray3 | 同上 `:97` | 卡片边框、分隔线 | 装饰，1px |
| ink | `rgba(0,0,0,.9)` Font Gy1 | `content/type/tdesign.tencent.com--fonts.md:104` | 正文、表格、KPI 标签 | / 白 17.58:1 |
| ink-2 | `rgba(0,0,0,.6)` Font Gy2 | 同上 `:105` | 辅助说明、图表刻度、页脚注 | / 白 5.74:1；/ `#f3f3f3` 5.58:1 |
| success-text | `#006c45` Green7 | `content/color/tdesign.tencent.com--color.md:84` | 增长差值、Tag 增长文字 | / 白 6.50:1；/ Green1 5.88:1 |
| danger-text | `#ad352f` Red7 | 同上 `:60` | Tag 下滑文字 | / Red1 5.69:1 |

TDesign 原文把 Green5 `#2ba471` 标成成功色（`:76`，原文自述对比 3.16:1），Red6 `#d54941` 标成错误色（`:52`，4.32:1）。两个当 12px 文字都不达 4.5:1，按 guide 缺口表「色阶当文字」条换同族深档：成功用 Green7，错误用 Red7，只在本基准规范色板内加深。

---

## 4 字阶与行高

字阶取 TDesign 两级阶梯（`content/type/tdesign.tencent.com--fonts.md:52-61`），行高按原文公式「字号 + 8」（`:69`），字重只用 400 与 600（`:87`）。

| 用途 | 字号 / 行高 | 依据 |
| --- | --- | --- |
| 巨大成交额 | 64 / 72 | 字阶最大档 `:61`，行高 64+8 |
| 巨大成交额（≤991px） | 48 / 56 | `:60` |
| KPI 数值 | 28 / 36 | `:58` |
| 页面标题 | 24 / 32 | `:57` |
| 卡片标题 | 16 / 24 | `:55` |
| 正文、表格、按钮 | 14 / 22 | 桌面正文 `:54` |
| 辅助、标签、页脚注 | 12 / 20 | 桌面最小 `:53` |

数字统一 `font-variant-numeric: tabular-nums`。TDesign 点名的 TCloud Number 不可分发，按缺口表「数字字体」条降级为等距数字，不冒充原文值。

---

## 5 间距、圆角、断点

- 网格基数 8px（`content/layout/tdesign.tencent.com--layout.md:78`），间距在 8 的倍数上加 4、12 两档（`:138`）。本页用到 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40。
- 槽 16px（`:92`）：KPI 三卡与双栏卡片都用 16px 间距。
- 侧边距原文默认 24px，可按 8 的倍数调整（`:96`）：桌面 32，≤991px 20，≤767px 16，≤374px 12。
- 圆角：库内没有通用 radius 规范，按 guide 缺口表派生两档，控件 4px、卡片 8px，标 derived。组件库默认 3px / 6px，映射到这两档。
- 断点取 TDesign sm 768 / md 992 / lg 1200（`content/layout/tdesign.tencent.com--layout.md:156-158`）。≤991px 双栏改单栏，≤767px 竖条收窄，KPI 改单列。

---

## 6 组件库与变量映射

组件来自 `tdesign-react` 1.18.6，经 `https://esm.sh/tdesign-react@1.18.6?bundle&external=react,react-dom` 引入；React 与 ReactDOM 由 import map 指向 18.3.1，避免双份 React。样式引 `dist/tdesign.min.css`。

**映射清单**（默认值读自 `tdesign-react` 包内 `dist/tdesign.min.css`，映射值来自本库原文）：

| 变量 | 库默认 | 映射为 | 依据 |
| --- | --- | --- | --- |
| `--td-brand-color` | `var(--td-brand-color-7)` = `#0052d9` | `#001a57` | Blue10，`content/color/tdesign.tencent.com--color.md:51` |
| `--td-brand-color-hover` | `var(--td-brand-color-6)` = `#366ef4` | `#002a7c` | Blue9，`:50`；Blue10 已是最深档，hover 反向上浮一档 |
| `--td-brand-color-active` | `var(--td-brand-color-8)` = `#003cab` | `#001a57` | 按下回到最深档 |
| `--td-brand-color-focus` | `var(--td-brand-color-2)` = `#d9e1ff` | `#d9e1ff` | Blue2，`:43`，与默认同值，显式写明 |
| `--td-brand-color-disabled` | `var(--td-brand-color-3)` = `#b5c7ff` | `#dddddd` | Gray4，`:98`，禁用态不抢语义 |
| `--td-success-color` | Green5 `#2ba471` | `#006c45` | Green7，`:84`，Tag 12px 文字对比从 2.86 提到 5.88 |
| `--td-error-color` | Red6 `#d54941` | `#ad352f` | Red7，`:60`，Tag 12px 文字对比从 3.83 提到 5.69 |
| `--td-radius-default` | `3px` | `4px` | 缺口表派生档 |
| `--td-radius-medium` | `6px` | `8px` | 缺口表派生档 |
| `--td-font-family` | `PingFang SC, Microsoft YaHei, Arial Regular` | 系统栈 | 字体不外链；框架与组件库走 esm.sh，见第 6 节 |

字号未映射：库默认的 body-medium 14px、body-large 16px、headline 24/28px 等本来就在 TDesign 字阶内，与规范一致，不需要覆盖。这也是「按组件实际引用的变量逐个核」的结果，不是只改品牌色就完事。

**映射后实测**：主按钮背景 `rgb(0, 26, 87)`、圆角 4px、字号 14px；竖条背景 `rgb(0, 26, 87)`；Tag 增长文字 `rgb(0, 108, 69)` 配 `rgb(227, 249, 233)` 底。

**组件清单**：Button、Select、Table、Tag、Dialog、MessagePlugin 全部来自 tdesign-react。手写部分只有三类：内联 SVG 图表（数据可视化不在组件库范围）、左缘竖条（版式件，不是控件）、卡片容器（只承担布局，无交互与状态）。

---

## 7 结构与内容

- 顶行：更新时间小字、页面标题、时间范围 Select、导出数据 Button。
- 首屏：巨大成交额，一句比较，三张 KPI 卡（订单量、转化率、客单价）。
- 第二屏：成交额走势（内联 SVG 折线，7 天，单位万元）与渠道结构（横向条形图，Blue10 主色，Blue2 其余）。
- 第三屏：渠道明细表（5 行，访客、转化率、成交额、占比、趋势标签），导出明细 Button。
- 页脚：三栏索引加一行更新时间。

数据是构造的，但内部自洽：5 个渠道成交额合计 1,284,600，与巨大数字一致；占比合计 100.0%。

---

## 8 交互与状态

| 状态 | 触发 | 实测 |
| --- | --- | --- |
| 筛选 | 时间范围选「本周」 | 表格 0 行，显示「本周数据还没出来」空态；顶部 Message 提示「本周渠道数据将在明早 8 点生成」；切回「今日」恢复 5 行 |
| 弹层 | 点「导出数据」 | Dialog 打开，标题「导出今日数据」，底部「取消 / 导出 CSV」 |
| 加载 | 点「导出 CSV」 | 按钮加 `t-is-loading` 并 disabled，1.2s 后关闭 |
| 通知 | 导出完成 | Message success「已导出 3,842 行，文件 metricrail-2026-11-10.csv」，Dialog `display:none` |
| 悬停 | 图表数据点 | 圆点半径 3.5 → 5，200ms；原生 `title` 提示日期与数值 |

所有过渡 200ms（微观反馈）、240ms（弹层）、280ms（消息），取自 `content/motion/tdesign.tencent.com--motion.md:101-103`。缓动只用 CSS 关键字 `ease-out`：原文只给「Cubic」类别，没有可引的具体曲线，按缺口表兜底，不自造 cubic-bezier。`prefers-reduced-motion: reduce` 时全部过渡关掉。

---

## 9 自验摘要

- 四档与断点边界 320 / 375 / 767 / 768 / 991 / 992 / 1199 / 1200 / 1280，`scrollWidth === clientWidth`，无横向溢出。
- 对比度逐项实测，最低 5.58:1（次要文字在灰底），全部 ≥ 4.5。
- 交互真点：筛选、空态、弹层、加载、通知逐项跑过，前后状态记在第 8 节。
- 焦点：16 个可聚焦元素逐个 `focus()`，全部有可见轮廓；Select 补 `:focus-within` 轮廓，因为库默认只有边框变色。
- 外部请求：esm.sh 上 3 个（TDesign CSS、React bundle、TDesign bundle）。旧口径要求零外部请求，本站按 README 的框架例外验收，见 FINDINGS 第 3 节。
