---
title: "Umami · 品牌设计语言"
source: https://umami.hey-yx.com
section: brands
tag: "品牌规范"
fetched: 2026-11-23
status: full
id: brands-83
publisher: "Umami 站点抽取"
---

# Umami · 品牌设计语言（DESIGN.md）

> 来源：[https://umami.hey-yx.com](https://umami.hey-yx.com)

## 概览（Overview）

Umami v3.5.0（基于 Zen UI + Tailwind v4）是一套**极简高对比、1px 细边框（Hairline）驱动的现代数据看板与工具型表面语言**：中性灰阶画布托举纯白（暗色模式下为炭黑）卡片，以克制的电光蓝 `#3080ff` 作为唯一主交互与数据主色，搭配等宽对齐的粗体数字与轻量状态反馈。

> **选型调配边界**：本卡只锁定**表面语言、色板、字阶、圆角、组件质感与动效数值**；**页面版式与外壳结构不锁定 Umami 原站的左侧悬浮栏**，生成具体页面时由 Hallmark 与 `briefs/layouts.md` 根据产品动作灵活调配（可用于顶部导航、分栏工作台、单栏仪表盘或紧凑工具页）。

**核心特征：**
- **双主题原生对等**：通过 `html[data-theme="light" | "dark"]` 切换，亮色浅灰画布 `#fafafa` + 纯白卡片 `#ffffff`；暗色深灰画布 `#262626` + 炭黑卡片 `#171717`，主品牌蓝 `#3080ff` 在双模式下保持一致。
- **1px 细边框取代厚重阴影**：卡片与面板主要依赖 `1px solid` 中性灰边框区分层级，仅在下拉浮层使用轻量阴影。
- **统一 `36px` 控件高度**：按钮、输入框、下拉选择器、页标题行统一 `h-9`（`36px`），工具栏水平对齐紧凑利落。
- **数据可视化同源配色**：Chart.js 柱状图与地理热力图复用主色 `#3080ff`（实心 + `45%` 透明叠加），涨跌状态使用高对比度浅底深字胶囊。

## 色板（Colors）

### 品牌与交互主色
| Token | Light | Dark | 用途 |
|---|---|---|---|
| `--zen-primary` | `#3080ff` | `#3080ff` | 主 CTA 按钮、激活标签下划线、柱状图与进度条主色 |
| `--zen-primary-fg` | `#fafafa` | `#fafafa` | 主按钮上的文字与图标色 |

### 中性灰阶（`--zen-palette-50..950`）
`#fafafa` (50) · `#f5f5f5` (100) · `#e5e5e5` (200) · `#d4d4d4` (300) · `#a1a1a1` (400) · `#737373` (500) · `#525252` (600) · `#404040` (700) · `#262626` (800) · `#171717` (900) · `#0a0a0a` (950)。

### 表面、文字与边框（Light / Dark）
| 语义角色 | Token | Light | Dark | 用途 |
|---|---|---|---|---|
| 页面画布 | `--zen-surface-raised` | `#fafafa` | `#262626` | 页面底层背景 |
| 卡片 / 浮层 | `--zen-surface` / `--zen-surface-overlay` | `#ffffff` | `#171717` | 内容卡片、侧栏容器、下拉浮层 |
| 反色表面 | `--zen-surface-inverted` | `#171717` | `#f5f5f5` | Tooltip 等反色提示胶囊底色 |
| 凹陷 / 激活底 | `--zen-surface-sunken` / `--zen-interactive-bg` | `#f5f5f5` | `#262626` | 激活导航项、次级按钮默认底、Switch 未选轨道 |
| 交互悬停 / 按下 | `--zen-interactive-hover` / `--zen-interactive-pressed` | `#e5e5e5` / `#d4d4d4` | `#404040` / `#525252` | 次级/幽灵按钮 hover 与 active |
| 主文字 | `--zen-fg` | `#171717` | `#f5f5f5` | 标题、KPI 数值、正文 |
| 次要文字 | `--zen-fg-muted` | `#737373` | `#a1a1a1` | 副标题、说明、未激活 Tab |
| 禁用文字 | `--zen-fg-disabled` | `#a1a1a1` | `#737373` | 禁用控件、占位符 |
| 默认边框 | `--zen-border` | `#d4d4d4` | `#404040` | 按钮、输入框、选择器描边 |
| 弱分隔边框 | `--zen-border-muted` | `#e5e5e5` | `#303030` | 卡片外框、水平分割线 |
| 强边框 | `--zen-border-strong` | `#a1a1a1` | `#525252` | 控件 hover 态描边 |
| 焦点环 | `--zen-focus-ring` | `#a1a1a1` | `#737373` | 聚焦时取 `50%` 透明度的 `3px` 焦点环 |

### 语义状态色（KPI 涨跌胶囊与提示）
| 状态 | 基准色 | Light 底 / 字 | Dark 底 / 字 |
|---|---|---|---|
| Info | `#3080ff` | `#eff6ff` / `#1c398e` | `#3080ff33` / `#dbeafe` |
| Success（上升） | `#00c758` | `#f0fdf4` / `#0d542b` | `#00c75833` / `#dcfce7` |
| Warning | `#edb200` | `#fefce8` / `#733e0a` | `#edb20033` / `#fef9c2` |
| Error（下降） | `#fb2c36` | `#fef2f2` / `#82181a` | `#fb2c3633` / `#ffe2e2` |

## 字阶（Typography）

### 字体栈
- **无衬线正文字体（`--zen-font-family`）**：`Inter` 可变字体（`font-weight: 100 900; font-display: swap`），回退 `ui-sans-serif, system-ui, sans-serif`。
- **等宽字体（`--zen-font-family-mono`）**：`ui-monospace, SFMono-Regular, Menlo, monospace`，用于 URL 路径、事件名与代码片段。

### 字阶表
| 层级 | 字号 | 字重 | 行高 | 用途 |
|---|---|---|---|---|
| KPI 主指标 | `32px–36px` | `700` | `1.1` | 卡片核心数字（开启 `tabular-nums` 等宽对齐） |
| 页面标题（H2） | `24px–28px` | `700` | `36px`（盒高对齐控件） | 顶部页面主标题 |
| 卡片标题 | `18px` | `600` | `1.35` | 看板卡片头部标题（如「访问趋势」「付费转化漏斗」） |
| 正文与控件 | `14px`（`0.875rem`） | `400` / `500` | `1.4`–`1.5` | 按钮（`500`）、导航项、表格与说明正文 |
| 移动端输入 | `16px` | `400` | `1.5` | 避免 iOS Safari 聚焦自动缩放 |
| 辅助元信息 / 胶囊 | `12px–13px` | `500` | `1.3` | 涨跌徽章、图例、轴刻度 |

## 间距与圆角（Spacing & Radii）

| Token / 属性 | 数值 | 用途 |
|---|---|---|
| `--zen-padding-x` | `12px`（`0.75rem`） | 紧凑容器水平内边距 |
| `--zen-padding-y` | `8px`（`0.5rem`） | 紧凑容器垂直内边距 |
| `--zen-gap` | `12px`（`0.75rem`） | 网格与控件组间距 |
| 按钮内边距 | `8px 16px`（`px-4 py-2`），`gap: 8px` | `36px`（`h-9`）标准按钮 |
| `--zen-radius` | `6px`（`0.375rem`） | 按钮、输入框、Tab 滑块、导航项、Modal 外框圆角 |
| `--radius-lg` / `--radius-xl` | `8px` / `12px` | 浮层 Popover（`8px`）、看板卡片容器（`8px`–`12px`） |
| 复选框圆角 | `4px`（`rounded-[4px]`） | `16×16px` Checkbox 控件 |
| 圆形徽章 / 点阵 | `9999px`（`rounded-full`） | 7×24 热力图圆点（`16×16px`）、漏斗步骤编号圈、Switch 滑块 |
| `shadow-xs` / `shadow-sm` | `0 1px 2px #0000000d` / `0 1px 3px #0000001a` | 描边按钮、输入框、分段切换组 |
| `shadow-lg` / `shadow-xl` | `0 10px 15px -3px #0000001a` / `0 20px 25px -5px #0000001a` | Popover 浮层（`shadow-lg`）、Modal 弹窗（`shadow-xl`） |
| 层级（`z-index`） | `9998` / `9999` / `10000` / `10001` | `--zen-layer-backdrop` / `modal` / `floating` / `toast` |

## 动效（Motion）

### 全局基线
- **默认过渡时长**：`150ms`（`--default-transition-duration: 0.15s`）
- **默认缓动曲线**：`cubic-bezier(0.4, 0, 0.2, 1)`

### 交互与弹层过渡规则（Base UI `data-starting-style` / `data-ending-style`）
- **按钮**：`transition-all 150ms`；主按钮 `hover:opacity-90` / `active:opacity-80`；描边按钮 `hover:border-edge-strong` / `active:bg-surface-raised`；次级按钮切换 `--zen-interactive-bg` 阶梯。
- **输入框 / 组合框 / 开关**：`transition-[color,box-shadow,border-color] 150ms`，聚焦时平滑展开 `3px` 焦点环（`ring-[3px] ring-focus-ring/50`）；Switch 滑块 `transition-transform`。
- **Line Tabs**：文字颜色 `transition-colors 150ms`，激活指示条固定 `2px` `#3080ff`。
- **Modal 遮罩与弹窗**：无背景模糊（无 `backdrop-blur`）；遮罩 `.zen-modal-overlay` 使用 `opacity 0 ↔ 1`（`200ms ease-out`，关闭 `ease-in`）；居中弹窗 `.zen-modal-center` 使用轻微过冲弹簧缩放 `scale(0.8) → scale(1)`（`300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`）。
- **Popover / Tooltip**：`opacity-0 scale-95`（Popover 另带 `translateY(±8px)`）→ `opacity-100 scale-100`，`200ms ease-out`（关闭 `ease-in`），且显式声明 `motion-reduce:transition-none`。

### 加载与数据动效
- **`zen-dots-blink`**：`1.2s infinite both`，三点脉冲透明度 `0.2 → 1 → 0.2`，用于异步卡片占位加载。
- **`zen-skeleton-shimmer`**：`translateX(-100% → 100%)` 骨架屏扫光。
- **`zen-spinner-rotate` + `zen-spinner-dash`**：SVG 环形加载器（`stroke-dasharray: 1 200 → 89 200`）。
- **`icon-pop`**：`0% { opacity: 0; transform: scale(0.5) } → 100% { opacity: 1; transform: scale(1) }`。
- **运行时数据插值**：KPI 数值与百分比在挂载/刷新时执行平滑 Count-up 计数插值，柱状图伴随自下而上的柱高生长动画（在 `prefers-reduced-motion: reduce` 时应禁用位移动画，仅保留瞬时切换或淡入）。

## 组件语言（Component Language）

- **开源组件库**：基于 `@umami/react-zen`（MIT License，底层为 `@base-ui/react` + Tailwind CSS），可免费商用与集成。
- **按钮族**：
  - 主按钮（Primary CTA）：`#3080ff` 实心底 + `#fafafa` 文字，高 `36px`，圆角 `6px`，无投影。
  - 描边按钮 / 筛选器（Outline）：`--zen-surface` 底 + `1px` `--zen-border` + `shadow-xs`，hover 时边框加深至 `--zen-border-strong`。
  - 危险按钮（Delete）：`#fb2c36`（`--zen-status-error`）实心底 + `#ffffff` 文字，高 `36px`，圆角 `6px`。
- **表单控件**：
  - 输入框与只读复制框：`36px` 高，`6px` 圆角；只读框使用 `--zen-surface-raised` 底色并在右侧内嵌复制/刷新图标按钮（Dark 模式下 `#262626` 略浅于可编辑框 `#171717`，视觉区分明确）；校验错误态切为 `border-status-error` + `ring-status-error/20`。
  - Switch 开关：`32×18.4px`（`w-8 h-[1.15rem]`）胶囊，未选 `--zen-interactive-bg`（Light `#f5f5f5` / Dark `#262626`），选中 `--zen-primary`，内含 `16px` `--zen-surface` 圆形滑块（Light `#ffffff` / Dark `#171717`）。
  - Checkbox 复选框：`16×16px`，`4px` 圆角，`1px --zen-border`，选中态填充 `--zen-primary`。
  - 分段切换组（Toggle Group）：`bg-surface shadow-sm border border-edge rounded` 外框，内部 `36px` 高按钮无圆角并由 `1px` 竖线分隔，激活态 `bg-interactive`。
- **Line Tabs**：无背景底，文字 `muted → fg`，激活项底部 `2px` `#3080ff` 指示条。
- **数据表格（CSS Grid Table）**：`thead` 底边 `1px --zen-border`，表头 `font-bold`、`8px` 内边距（首列左 0 / 末列右 0），行高 `min-h-10`（实测 `49px–53px`）且行间 `1px --zen-border-muted`（无整行 hover 变色）；单元格内链接带 `--zen-border` 下划线，hover 变为 `--zen-primary`。小屏自动降级为堆叠键值卡片。
- **空状态（Empty States）**：标准空态在 `1px --zen-border` 卡片内居中展示 `14px --zen-fg-muted` 纯文案（「暂无数据。」），主操作按钮留在页头；密钥/安全类空态可配圆形弱对比图标 + 居中说明（`gap-5`）。
- **弹窗、浮层与提示**：Modal 遮罩为 `bg-black/80`（`rgba(0,0,0,0.8)`，无 `backdrop-blur`），弹窗主体使用 `shadow-xl` + `1px --zen-border` + `24px–32px` 内边距，宽度按表单复杂度分 `400px` / `600px` / `866px`，无右上角 `×` 按钮（靠底部「取消」或 `Escape`/遮罩关闭）；Popover 宽 `288px`（`w-72 rounded-lg shadow-lg p-4`）；Tooltip 采用反色胶囊 `bg-surface-inverted text-surface text-sm px-2 py-1 rounded`（Dark 模式下为 `#f5f5f5` 浅底 + `#171717` 深字）。
- **数据卡片**：`1px` `--zen-border-muted` 细边框，`8px–12px` 圆角，右上角可放轻量来源胶囊（如 `> OhMyStamp`），内部支持柱状图、带步骤编号连线的转化漏斗、以及 `16×16px` 圆点热力矩阵。

## 可访问性（Accessibility）

- **实测对比度**：Light 模式下 `#171717` on `#ffffff`（17.9:1）与 `#737373` on `#ffffff`（4.7:1）均满足 WCAG AA；Dark 模式下 `#f5f5f5` on `#171717`（16.5:1）与 `#a1a1a1` on `#171717`（7.3:1）满足 WCAG AA。语义胶囊均使用浅底深字（Light）或深底高明度字（Dark）确保可读。
- **键盘焦点**：所有交互控件具有明确 `3px` 焦点环（`focus-ring/50`）与边框高亮，图标按钮内部 SVG 设置 `pointer-events-none`。

## 边界（Boundaries）

- **适合用于**：流量/业务数据分析看板、开发者或运营工具后台、需要原生 Light/Dark 双主题且强调数据可读性与克制微交互的 SaaS 应用。
- **典型落地场景（结合暗色与组件实测特征）**：
  1. **SaaS 指标与转化分析看板**：`tabular-nums` 等宽 KPI 大字 + 高对比涨跌胶囊 + `#3080ff` 同源柱状图/转化漏斗/7×24 热力点阵。
  2. **开发者控制台与密钥 / Webhook 配置台**：自带只读复制框（Dark 下 `#262626` 略浅于可编辑框 `#171717`，无需灰字即可区分不可编辑态）、密钥空态与 `bg-black/80` 无模糊确认弹窗。
  3. **Feature Flag / 规则开关与夜间值班面板**：原生 `html[data-theme="dark"]`（`#262626` 画布托举 `#171717` 炭黑卡片，`16.5:1` 对比度低眩光），搭配 `32×18.4px` Switch 开关、分段切换组与 Line Tabs，适合长时间盯屏操作。
  4. **React + Tailwind v4 开源或独立工具后台**：可直接选用 MIT 协议的 `@umami/react-zen` 组件库落地，兼具 Base UI 无障碍键盘焦点与轻量体积。
- **不适合用于**：强品牌叙事或视觉冲击力优先的营销着陆页、富插画/重渐变展示站、需要极高信息密度的金融交易终端（此类场景应换 IBM Carbon）。
- **版式提醒**：本卡不绑定 Umami 的左侧悬浮导航布局，实际页面结构按 `briefs/layouts.md` 与 Hallmark 自由选配。

## 信息架构与留白克制（Information Architecture）

> 以下原则抽取自 `https://umami.hey-yx.com` 生产站点实勘（2026-11-23）：Umami 之所以「该干净的地方干净、该有配置的地方都有」，核心在于**只把高频概览留在主画布，把复杂配置与明细下钻全部做渐进式收口**，避免首屏数据堆砌。

- **连体 KPI 指标条（Unified KPI Strip）**：不把 4–5 个指标拆成各自独立的圆角小卡片，而是收进**同一个 `1px` 边框圆角容器**内，用 `1px` 竖线分隔；每格只放「指标名 + 大号数字 + 涨跌胶囊」三样，不堆角标与说明副标题。
- **主图独占宽幅呼吸感**：KPI 条下方直接给主趋势柱状图整行宽幅（稀疏水平网格线 + 双层实心/半透明堆叠柱 + 底部居中图例 + 右下角轻量 `备注` 按钮），不与次级热力图或表格强行并排挤压。
- **全局筛选单行对齐**：页头只保留单行筛选栏（左侧 `筛选器` 按钮，右侧 `< >` 步进箭头 + 预设时间窗下拉），不把多维条件输入框直接摊在首屏。
- **渐进式披露（Progressive Disclosure）**：
  - **Breakdown 卡片**：用 Line Tabs 归组同类维度（如 `路径 | URL | 入口 | 退出`），仅展示 Top 行 + 比例条，底部居中放一枚 `更多` 按钮；点击 `更多` 才弹出 `866px` 双栏 Modal（左侧维度分组树 + 右侧可搜索可导出的完整明细表）。
  - **复杂规则与低频设置后置**：多条件筛选器收进居中 Modal（含开关、Tab 与规则行）；追踪代码、功能开关、分享链接与危险区收进独立的「编辑 / 设置」子视图；账户、语言、Light/Dark 主题切换收进左下角触发的 Popover，不占顶栏。
- **路由与状态过渡**：客户端路由切换子视图时保持外壳、面包屑与筛选栏常驻，仅平滑替换主内容区；主题切换直接原地更新 `html[data-theme]`，无整页闪烁或布局抖动。
