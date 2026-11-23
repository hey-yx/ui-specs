# HookPulse · 取值记录

- 需求：`briefs/hookpulse.md`（Webhook 投递监控台：投递总量/成功率/P95 延迟/活跃端点数、柱图与 7×24 失败热力、端点开关、只读签名密钥、投递日志表）
- 数值文章：**Umami**（站点抽取），选型行 `project-umami`
- frame: batch=2026-11-22-a; nav=N9; footer=Ft5; base=#262626
- 交付：`examples/hookpulse/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与版式调配

- 面向 SaaS 开发者与平台运维的 Webhook 监控台，需要同时呈现 KPI 指标、柱图、7×24 圆点热力、Switch 端点开关、只读签名密钥与投递日志表，且高度契合暗色低眩光值班场景，因此采用 `project-umami`（默认 `data-theme="dark"`，右上角提供 Light/Dark 实时切换）。
- 按 `content/brands/designmd--umami.md:20` 边界规定，页面版式不锁定原站左侧悬浮导航，改用 `Stat-Led` + `N9` 两极顶栏 + `Ft5` 一句大字收尾。

## 2. 色彩与对比度（Umami Dark / Light 双主题）

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 品牌与主交互蓝（`--zen-primary` / `--zen-primary-fg`） | `#3080ff` / `#fafafa` | `content/brands/designmd--umami.md:33-34` | `#fafafa` 压 `#3080ff` 清晰可读 |
| 页面画布（`--zen-surface-raised`） | Dark `#262626` / Light `#fafafa` | `content/brands/designmd--umami.md:42` | 底层画布与卡片分离 |
| 卡片与可编辑框（`--zen-surface`） | Dark `#171717` / Light `#ffffff` | `content/brands/designmd--umami.md:43` | 主文字压它 Dark **16.5:1** / Light **17.9:1**（`content/brands/designmd--umami.md:135`） |
| 反色 Tooltip / Toast（`--zen-surface-inverted`） | Dark `#f5f5f5` / Light `#171717` | `content/brands/designmd--umami.md:44` | 与 `--zen-surface` 反色对调 |
| Switch 未选轨道 / 激活底（`--zen-interactive-bg`） | Dark `#262626` / Light `#f5f5f5` | `content/brands/designmd--umami.md:45` | — |
| 主文字与次要文字（`--zen-fg` / `--zen-fg-muted`） | Dark `#f5f5f5` / `#a1a1a1`；Light `#171717` / `#737373` | `content/brands/designmd--umami.md:47-48` | Dark 次字 **7.3:1** / Light **4.7:1**（`content/brands/designmd--umami.md:135`） |
| 边框与弱分隔（`--zen-border` / `--zen-border-muted` / `--zen-border-strong`） | Dark `#404040` / `#303030` / `#525252`；Light `#d4d4d4` / `#e5e5e5` / `#a1a1a1` | `content/brands/designmd--umami.md:50-52` | 1px 细边框分级 |
| 焦点环（`--zen-focus-ring`） | Dark `#737373` / Light `#a1a1a1`（50% 透明度 `3px`） | `content/brands/designmd--umami.md:53` | 键盘焦点外环 |
| 语义状态胶囊（Info / Success / Warning / Error） | `#3080ff` / `#00c758` / `#edb200` / `#fb2c36` 对应双主题底字 | `content/brands/designmd--umami.md:58-61` | 浅底深字 / 深底高明度字 |
| 危险按钮（Delete） | `#fb2c36` 底 + `#ffffff` 字 | `content/brands/designmd--umami.md:121` | 用于确认移除端点 Modal |

## 3. 字阶、间距、圆角、动效与组件

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 字体栈 | `Inter` 无衬线 / `ui-monospace, SFMono-Regular, Menlo, monospace` 等宽 | `content/brands/designmd--umami.md:66-67` | URL、密钥、状态码用等宽 |
| 字阶 | KPI `32px`（`700`, `1.1`, `tabular-nums`）/ H1 `24px`（`36px` 行高）/ 卡片标题 `18px` / 正文 `14px` / 移动端输入 `16px` / 胶囊 `12px–13px` | `content/brands/designmd--umami.md:72-77` | — |
| 间距与圆角 | `--zen-gap: 12px`、控件高 `36px`、按钮 `8px 16px`、控件圆角 `6px`、卡片圆角 `12px`、圆点 `16×16px` `9999px` | `content/brands/designmd--umami.md:83-90` | — |
| 阴影与层级 | `shadow-xs` / `shadow-sm` / `shadow-lg` / `shadow-xl`，Modal `9998`–`9999`，Tooltip `10000`，Toast `10001` | `content/brands/designmd--umami.md:91-93` | — |
| 动效 | 控件 `150ms cubic-bezier(0.4, 0, 0.2, 1)`；遮罩 `200ms ease-out`；Modal 弹簧 `scale(0.8) → scale(1)` `300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)` | `content/brands/designmd--umami.md:98-106` | — |
| 只读框反转 | 只读签名密钥框使用 `--zen-surface-raised`（Dark `#262626`），略浅于可编辑输入框 `#171717` | `content/brands/designmd--umami.md:123` | 无需灰字即可分辨不可编辑态 |
| Switch 开关 | `32×18.4px`，未选 `--zen-interactive-bg`，选中 `#3080ff`，滑块 `16px` `--zen-surface` | `content/brands/designmd--umami.md:124` | 端点实时启停 |
| Modal 遮罩 | `rgba(0,0,0,0.8)`（无 `backdrop-blur`），无右上角 `×` 按钮 | `content/brands/designmd--umami.md:130` | 取消按钮、Esc 或点击遮罩关闭 |

## 4. 外壳与避重

- **batch = `2026-11-22-a` · nav = `N9` · footer = `Ft5` · base = `#262626`**：与同批 `anyttl`（`N8` / `Ft2` / `#ffffff`）无重复，批内灰底占比 `1/2`（未超半数），页脚 `<footer class="hp-foot">` DOM 骨架全库唯一。
