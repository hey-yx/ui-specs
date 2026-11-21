# PayloadDeck · 取值记录

- 需求：`briefs/payloaddeck.md`（日志解析 API 的开发者文档，英文，30 分钟接入）
- 基准规范：**Primer**（GitHub）
- 版式：**Component Playground · N13 / Ft4**（Hallmark 三件，版式不进数值记录）
- 强调色：**`#0969da`**（`content/tokens/primer.style--color-themes.md:28`）
- 交付：`examples/payloaddeck/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 设计前提

1. 读者是后端与平台工程师，目标是在半小时内把第一条日志发进 API 并看到结构化结果。首屏必须先给「发一条、读结果、查数据」的路径，不能先讲产品故事。
2. 文档站的主内容是代码和响应，不是营销段落。版式用 Component Playground：左侧目录固定，主栏放可运行的示例，代码块与试解析面板是页面主体。
3. 试解析必须真的能跑。输入为空、缺时间戳、成功三种结果都在本页出现，不靠截图示意。
4. 文案用工程口吻：说请求体、字段类型、错误码和重试条件。不写「强大」「无缝」「极速」这类词。
5. 英文产品名在需求里已定为 PayloadDeck，页面里的事实、端点、SDK 包名都围绕「日志行变 JSON」这一件事。

## 2. 场景命中

按指南「场景必选」表判：

| 场景 | 是否命中 | 处置 |
| --- | --- | --- |
| S1 页面基本功 | 必过 | 走完 |
| S2 数值层 | 必过 | 走完，逐条带行号 |
| S17 评审与体验底线 | 必过 | 逐条走查，见 FINDINGS |
| S3 无障碍 | 命中（对比度、焦点、键盘、弹层、减弱动效） | 走完 |
| S4 文案 | 命中（英文文档语气、错误提示） | 走完 |
| S5 组件 | 命中（按钮、输入、代码块、Tabs、表格、搜索弹层） | 走完 |
| S7 导航 | 命中（顶栏、侧栏目录、站内搜索） | 走完 |
| S8 状态与反馈 | 命中（空、加载、错误、成功、复制反馈） | 逐态造出来看过 |
| S9 表单与流程 | 命中（试解析输入、校验、提交） | 走完 |
| S6 图标 | 命中（内联 SVG 图标） | 走完 |
| S10 图表 | 未命中 | 跳过 |
| S11 落地页 | 未命中 | 跳过 |
| S12 后台与数据面板 | 未命中 | 跳过 |

## 3. 设计点与读过的原文

按 `points_by_task` 与 `select` 判据选点，逐点读 `articles` 原文，不按 `value_notes` 抄示意值：

- 版式与响应式：`layout-responsive-adaptation`、`layout-intrinsic-patterns`、`layout-spacing-values`
- 方法层：`howto-ui-color-framework`、`howto-visual-hierarchy`
- 导航：`patterns-global-nav`
- 色彩与字阶：`color-token-tiers`、`type-type-in-code`、`type-line-spacing-pct`
- 动效：`motion-duration`、`motion-easing`、`motion-reduced`、`motion-disclosure`、`motion-inputs`、`motion-loading`、`motion-feedback`
- 无障碍：`a11y-contrast-threshold`、`a11y-focus-visibility`、`a11y-modal-focus-trap`、`a11y-tabs-tree-keys`
- 组件与反馈：`components-button-hierarchy`、`patterns-feedback-criteria`
- 文案与评审：`markdown-en-voice`、`patterns-review-checklist`

## 4. 口径分工

- 版式、区块顺序、反 slop 骨架归 Hallmark：Component Playground，左侧目录加主栏示例，不做 hero 大标语。
- 颜色、字号、间距、动效数值归 Primer 原文；Primer 缺的维度按指南缺口规则回源或派生，逐条标 derived。
- 两套不互相加码：Hallmark 不覆盖 Primer 的数值，Primer 不决定版式。

## 5. 色彩

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 页面底 | `#ffffff` | `content/tokens/primer.style--color-themes.md:20` | 正文压它 15.80:1 |
| 正文 | `#1f2328` | `content/tokens/primer.style--color-themes.md:24` | 白底 **15.80:1** |
| 次要文字 | `#59636e` | `content/tokens/primer.style--color-themes.md:25` | 白底 **6.11:1**，浅底 5.74:1 |
| 禁用 | `#818b98` | `content/tokens/primer.style--color-themes.md:27` | 白底 3.45:1，仅禁用 |
| 强调 / 链接 | `#0969da` | `content/tokens/primer.style--color-themes.md:28` | 白底 **5.19:1**，浅底 4.88:1 |
| 主按钮底 / 白字 | `#0969da` | `content/tokens/primer.style--color-themes.md:37` | 白字 **5.19:1** |
| 强调悬停 | `#0757b8` | derived（同族加深） | 白底 **6.85:1** |
| 成功 | `#1a7f37` | `content/tokens/primer.style--color-themes.md:30` | 白底 **5.08:1** |
| 注意 | `#9a6700` | `content/tokens/primer.style--color-themes.md:31` | 白底 **4.87:1** |
| 危险 / 错误边框 | `#cf222e` | `content/tokens/primer.style--color-themes.md:38` | 白底 **5.36:1** |
| 分隔线 | `#d1d9e0` | `content/tokens/primer.style--color-themes.md:32` | 1.43:1，仅装饰 |
| 浅底 / 搜索框 | `#f6f8fa` | `content/tokens/primer.style--color-themes.md:21` | 不承载正文 |
| 深底 / Toast | `#25292e` | `content/tokens/primer.style--color-themes.md:23` | 白字 **14.63:1** |
| 危险浅底 | `#ffebe9` | derived（同族浅底） | 危险字 4.67:1 |
| 成功浅底 | `#dafbe1` | derived（同族浅底） | 成功字 4.56:1 |
| 浅底加深 | `#eef1f4` | derived（浅底再加深一档） | 不承载正文 |

强调色挑 Primer 的 `#0969da`，不沿用 GitHub 品牌绿：这是开发者工具文档，蓝是链接与主操作，绿色只留给成功状态。选择范围只在 Primer 色板内，没有跨源借色。

## 6. 字阶与字体

| token | 字号 / 行高 | 出处 |
| --- | --- | --- |
| xs | 12 / 20 | `content/type/tdesign.tencent.com--fonts.md:53,69` |
| sm | 14 / 22 | `content/type/tdesign.tencent.com--fonts.md:54,69` |
| md | 16 / 24 | `content/type/tdesign.tencent.com--fonts.md:55,69` |
| lg | 20 / 28 | `content/type/tdesign.tencent.com--fonts.md:56,69` |
| xl | 24 / 32 | `content/type/tdesign.tencent.com--fonts.md:57,69` |
| 2xl | 36 / 44 | `content/type/tdesign.tencent.com--fonts.md:59,69` |

- 字重只用 400 与 600：`content/type/tdesign.tencent.com--fonts.md:87`。
- Primer 原文只给「system fonts」原则（`content/type/primer.style--typography.md:43`），具体系统字体栈与等宽栈标 derived。
- 正文行长按原文 80 字符上限（`content/type/primer.style--typography.md:55`）收到 68ch，标 derived。

## 7. 间距、尺寸与断点

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 基础间距 | 8px / 16px / 24px / 32px / 48px | `content/layout/uisdc.com--code-for-design-of-spacing.md:48` |
| 最大间距档 | 64px | `site/src/data/guide.ts:274`（GAP 默认 8px 档） |
| 内容最大宽 | 1280px | `content/layout/primer.style--layout.md:99` |
| 内容左右内距 | 16px / 24px | `content/layout/primer.style--layout.md:110,114` |
| 断点 | 768px / 1012px | `content/layout/primer.style--layout.md:97,98` |
| 行宽 | 68ch | derived（原文上限 80 字符，取 68ch） |
| 圆角 | 4px / 8px | derived（GAP_RULES 圆角两档） |
| 控件高度 | 40px（主）/ 32px（小） | derived（GAP_RULES 组件尺寸） |
| 侧栏 / 顶栏 | 240px / 56px | derived（版式骨架尺寸） |
| 发丝线 | 1px | derived（GAP_RULES 发丝线宽） |
| 焦点环 | 2px 实线 + 2px 偏移 | `site/src/data/guide.ts:350`（GAP） |
| 触控下限 | 24 / 44 CSS px | `content/a11y/w3c--wcag-2.2.md:907,875` |

Primer 没有通用 spacing scale，按缺口规则整套取优设 8px 基数，不拿字阶步进自己组合。组件内部的 6px / 10px / 12px 内距属于控件尺寸，标 derived，不进入全站间距档。

## 8. 动效

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 按钮、链接、Tabs 微反馈 | 100ms | `content/motion/nngroup.com--animation-duration.md:80` |
| 弹层退场 | 200ms | derived（原文 200 或 250ms，取短档） |
| 弹层进场 | 300ms | `content/motion/nngroup.com--animation-duration.md:84` |
| 缓出 | `cubic-bezier(0, 0, 0.58, 1)` | `content/standards/w3c--css-easing-1.md:138` |
| 缓入 | `cubic-bezier(0.42, 0, 1, 1)` | `content/standards/w3c--css-easing-1.md:134` |
| 缓入缓出 | `cubic-bezier(0.42, 0, 0.58, 1)` | `content/standards/w3c--css-easing-1.md:142` |
| 减弱动效 | 0.01ms | `site/src/data/guide.ts:285`（GAP 兜底） |

弹层与 Toast 都有初态，隐藏时用 `visibility` 收尾；`prefers-reduced-motion: reduce` 下全部压到 0.01ms，实测见 FINDINGS。

## 9. 缺口与派生

| 维度 | Primer 有没有 | 处置 |
| --- | --- | --- |
| 字号与行高 | 只给原则，无字阶表 | 按 GAP 回源 TDesign 字阶，行高沿用 +8 公式 |
| 间距 | 无 spacing scale | 按 GAP 取优设 8px 基数 |
| 圆角 | 组件篇无数值 | 派生 4 / 8 两档 |
| 控件高度 | 无 | 派生 40 / 32 |
| 阴影 | 无 | 派生 `0 12px 32px rgba(31,35,40,.18)`，只给搜索弹层 |
| 遮罩 | 无 | 派生 `rgba(0,0,0,.45)` |
| 移动端目录 | 无 | 用 `<details>` 折叠，不复用侧栏 DOM |

## 10. 命名

名字 **PayloadDeck** 由需求文件 `briefs/payloaddeck.md` 固定，英文，绑产品事实（payload 是日志载荷，deck 是可查的卡组），与页面的解析与查询主线一致。因为 brief 已定名，本案例不擅自改名，但按 NameYouLike 口径做的碰撞检索判负，正式发布前必须处理：

| 检查 | 实测 |
| --- | --- |
| npm `payloaddeck` / `payload-deck` | 404 / 404，未占用 |
| GitHub `payloaddeck` | 0 条同名仓库 |
| `payloaddeck.com` | 200，标题 `Connected tools. Focused work. · PayloadDeck`，已有同名上线产品 |
| `payloaddeck.net` / `.io` / `.ai` / `.dev` / `.app` | 可注册（RDAP，2026-11-14） |
| `payload-deck.dev` / `.io` / `.app` | 可注册（RDAP） |
| 商标 | 未查，USPTO 与 CNIPA 需人工检索 |

结论：显示名与线上产品同名，**判负**。本批次按 brief 名出稿，页面所有 `payloaddeck` 端点与 SDK 名只是演示数据；发布前应改名，不要沿用。

NameYouLike 的内部审计（`auditCandidate`，带完整产品事实）结果为 `passed: true`，`productFit: 95`，`realness: 90`，`concreteness: 80`，`slopWarnings: 0`；它只说明名字没有套路与空泛问题，不能覆盖外部同名产品这一关。

备选 **LogShape** 已按同一口径核验，可作为改名首选：npm 与 PyPI 均为 404；GitHub 只有 2018 年的 0 star 脚本和一个无描述的新仓，没有在运营的同赛道产品；`logshape.com` / `.io` / `.dev` / `.app` 四个主域全部可注册（RDAP，2026-11-14）。名字绑产品事实：把日志行「塑形」成结构化字段。


## 11. 核心交互

1. 顶栏搜索：⌘K / Ctrl K 打开，输入即时过滤，↑↓ 选中，Enter 跳到目标标题，Esc 关闭并把焦点还给搜索按钮。
2. 请求示例 Tabs：点击或左右方向键切换 cURL / Node / Python，面板与 `aria-selected` 同步。
3. 试解析：输入为空就地报错；缺 ISO 时间戳或缺 level 返回具体原因；成功时先出骨架，再给字段表；重置恢复示例行。
4. 复制：复制按钮写剪贴板，成功提示 1.6 秒；失败时提示手动选择。
5. 移动端：导航收进菜单，侧栏目录变成可展开的 Contents，搜索收成图标。
6. 页内锚点滚动时，侧栏当前项随 IntersectionObserver 更新。
