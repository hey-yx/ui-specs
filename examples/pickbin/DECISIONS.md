# DECISIONS · PickBin

方向与取值以本文为准。本轮按 `site/dist/ai/guide.md` 的 6 步重跑 `briefs/pickbin.md`，四轴按上一轮锁定，其余按当前规范重推。旧稿已归档到仓库外；没有读旧 `index.html`，只读了旧稿的决策记录与发现记录，了解四轴与上一轮验收深度。

基准规范：TDesign（腾讯）。

## 0. 四轴与首屏

| 轴 | 取值 | 依据 |
| --- | --- | --- |
| macrostructure | Narrative Workflow（01 投柜 / 02 拿码 / 03 取件） | Hallmark `references/macrostructures/14-narrative-workflow.md`：产品有明确的三步先后，阶段编号就是页面骨架 |
| nav | N9 · Edge-aligned minimal | Hallmark `references/component-cookbook.md`：单页工具只有「存件」与「取件」两个入口，词标左、取件右，中间留空 |
| footer | Ft2 · Inline-rule single line | Hallmark `references/component-cookbook.md`：单页工具只留一条边界说明，不做站点地图 |
| 强调色 | Green7 #006c45 | content/color/tdesign.tencent.com--color.md:84；绿色对应柜格可用与存件完成，不用 TDesign 默认蓝 |
| 版型 | Funnel (3-Step Conversion) 的区块顺序 | content/layouts/layout--funnel-3-step-conversion.md:57-61；只取 Hero → Step 1 → Step 2 → Step 3 → CTA 的顺序，不取它「每步一个色相」的配色建议 |

首屏：左侧是主张、说明、主按钮与一条次入口；右侧是一只 3×2 金属柜，右侧一格 1×2 开着，露出 Green1 内衬与一张空白凭条。柜口本身是拖放区，产品证据就是这只柜子与凭条，不是抽象插画。首屏产品证据是柜体、开着的柜口、拖放提示与取件码小条；遮住文案后仍要能读出「存文件、拿码」，本轮没有另存遮挡截图。

## 1. 读的篇目与用途

| 篇目 | 用途 |
| --- | --- |
| `site/dist/ai/guide.md`、`site/dist/ai/design-points.json` | 指南包：6 步、必选场景、方法层必读、点与文章路由 |
| `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md` | 单色相怎么推深浅与状态色，避免另起第二色相 |
| `content/howto/nngroup.com--visual-hierarchy-ux-definition.md` | 字号最多 3 档、最大元素最多 2 个、用对比而不是堆色 |
| `content/howto/awwwards.com--understanding-web-ui-visual-hierarchy.md` | 首屏扫描顺序与留白对理解的作用 |
| `content/howto/adhamdannaway.com--ui-design-tips.md` | 颜色只给交互件、控件 3:1、正文 4.5:1、状态不只靠颜色 |
| `content/layout/every-layout.dev--stack.md` | 纵向间距只由父级一层给，避免相邻 margin 叠双份 |
| `content/layout/every-layout.dev--sidebar.md` | 主列与侧栏的换行条件，窄容器不靠视口断点 |
| `content/layout/every-layout.dev--switcher.md` | 三阶段横排与竖排的切换，不用中间态挤压 |
| `content/motion/ui-specs--motion-implementation.md` | 动效清单：组件、触发、配方、属性、起止值、时长、曲线；入场先给初态 |
| `content/color/tdesign.tencent.com--color.md` | 色板与功能色原文值 |
| `content/type/tdesign.tencent.com--fonts.md` | 字阶、行高公式、字重、文字透明度 |
| `content/layout/tdesign.tencent.com--layout.md` | 8px 网格、槽与安全边距、断点、间距档 |
| `content/motion/tdesign.tencent.com--motion.md` | 200 / 240 / 280ms 与三条缓动曲线 |
| `content/icons/tdesign.tencent.com--icon.md` | 24px 栅格、2px 描边、常用尺寸 |
| 中后台框架篇（2026-11-15 已从库中移除） | 单页工具用上下布局，不套中后台侧栏 |
| `content/components/tdesign.tencent.com--button.md` | 主次按钮层级、一屏一个主按钮、尺寸与形状 |
| `content/components/tdesign.tencent.com--input.md` | 输入状态、清空、提示文本、尺寸 |
| `content/components/tdesign.tencent.com--upload.md` | 初始、拖拽、上传中、成功、失败五态；文件列表与进度 |
| `content/components/polaris--progress.md` | 可测量的任务用带 value 的进度条，没有终点的等待改用 spinner |
| `content/components/tdesign.tencent.com--steps.md` | 已完成、进行中、未完成三态；窄屏转竖排 |
| `content/components/tdesign.tencent.com--form.md` | 标签、必填、校验、错误提示与滚动到首个错误 |
| `content/components/tdesign.tencent.com--radio.md` | 有效期用互斥单选组，不用下拉 |
| `content/components/polaris--banner.md` | 错误与成功用横幅就近提示，可带关闭按钮 |
| `content/components/tdesign.tencent.com--message.md` | 复制成功等瞬时反馈，3 秒消失 |
| `content/components/tdesign.tencent.com--loading.md` | 局部等待用加载态，不用整页遮罩 |
| `content/components/tdesign.tencent.com--tag.md` | 文件状态与有效期标签，尺寸与形状 |
| `content/a11y/w3c--wcag-2.2.md` | 44px 目标、对比度、焦点可见、键盘可达 |
| Hallmark `SKILL.md`、`references/macrostructures/14-narrative-workflow.md`、`references/component-cookbook.md`、`references/responsive.md`、`references/slop-test.md` | 结构、N9、Ft2、响应式硬线、反 slop 与产出前自评 |

## 2. 场景命中与取舍

| 场景 | 判定 | 用到的点与回答的问题 |
| --- | --- | --- |
| S1 项目选型方案 | 命中 | `project-tdesign`：中文产品 UI，TDesign 拥有数值决定权 |
| S2 通用页面基本功 | 命中 | 视觉层级、界面配色框架、布局模式、间距取值、层级三件套、全局导航：三档层级、单色相、Stack/Sidebar/Switcher、8px 间距、N9 |
| S3 数值层 | 命中 | 色彩分层、界面配色实操、动效时长、缓动、减少动效、网格对齐：token 分层、对比度、200/240/280ms、三条曲线、reduced motion |
| S4 文案 | 命中 | 中文文案与排版、中文排版禁则、通知分层：按钮不超过 20 字、标点全角、错误文案分层 |
| S5 组件 | 命中 | 按钮层级、图标统一、输入/反馈/加载/浮层/就地/展开/文本动效、焦点可见：一屏一个主按钮、2px 描边图标、七类动效配方、焦点环 |
| S6 图标 | 命中 | 图标可用性、图标统一、图标栅格、图标配文、隐喻通用：一套 2px 描边图标，24px 栅格，图标旁必须有文字 |
| S7 导航与信息架构 | 跳过 | 单页工具，只有存件与取件两个入口，N9 已足够，不做多级导航 |
| S8 状态与反馈 | 命中 | 通知分层、反馈目标与通过标准、反馈/加载/就地动效：空态、加载、错误、成功、复制反馈逐态造出来 |
| S9 表单与流程 | 命中 | 表单无障碍、按钮层级、通知分层、中文文案：标签绑定、必填语义、错误就地提示、一个主按钮 |
| S10 图表与数据可视化 | 跳过 | 页面没有图表与指标 |
| S11 落地页与营销页 | 不命中 | 这是工具页，首屏是存件入口，不是营销落地页；版式由 Narrative Workflow 承担，不套产品官网版型 |
| S12 后台与数据面板 | 跳过 | 没有表格、筛选与批量操作 |
| S16 无障碍验收 | 命中 | 对比度阈值、焦点可见、表单无障碍、导航与播报、减少动效、WCAG 清单：4.5:1 / 3:1、2px 焦点环、aria-live、键盘全流程 |
| S17 评审与体验底线 | 命中 | 评审清单、测试逐页走查、反馈标准、WCAG 清单：交付前逐条走查，不通过回退 |

## 3. 色板

| Token | 值 | 出处 | 用在哪 |
| --- | --- | --- | --- |
| `--accent` | #006c45 | content/color/tdesign.tencent.com--color.md:84 | 主按钮、阶段编号、开放柜门内衬边线、凭条条带、链接 |
| `--accent-hover` | #005334 | content/color/tdesign.tencent.com--color.md:85 | 主按钮 hover |
| `--accent-active` | #003b23 | content/color/tdesign.tencent.com--color.md:86 | 主按钮 active |
| `--accent-soft` | #e3f9e9 | content/color/tdesign.tencent.com--color.md:78 | 开放柜门内衬、已选文件底、成功横幅底 |
| `--accent-mid` | #c6f3d7 | content/color/tdesign.tencent.com--color.md:79 | 进度槽、柜内纸叠阴影 |
| `--accent-3` | #92dab2 | content/color/tdesign.tencent.com--color.md:80 | 柜内高光、LED 光晕 |
| `--success` | #2ba471 | content/color/tdesign.tencent.com--color.md:76 | 成功图标与 LED，仅非文本 |
| `--error` | #d54941 | content/color/tdesign.tencent.com--color.md:52 | 错误图标与输入边框 |
| `--error-text` | #ad352f | content/color/tdesign.tencent.com--color.md:60 | 错误文案 |
| `--error-soft` | #fff0ed | content/color/tdesign.tencent.com--color.md:54 | 错误横幅底 |
| `--warning` | #e37318 | content/color/tdesign.tencent.com--color.md:64 | 告警图标，仅非文本 |
| `--paper` | #ffffff | content/color/tdesign.tencent.com--color.md:93 | 页面与凭条底 |
| `--band` | #f3f3f3 | content/color/tdesign.tencent.com--color.md:95 | 工具区、柜体背板 |
| `--fill` | #eeeeee | content/color/tdesign.tencent.com--color.md:96 | 禁用底、进度槽 |
| `--hairline` | #e8e8e8 | content/color/tdesign.tencent.com--color.md:97 | 1px 分隔线 |
| `--line-soft` | #dddddd | content/color/tdesign.tencent.com--color.md:98 | 柜门边、装饰线 |
| `--line-mid` | #c6c6c6 | content/color/tdesign.tencent.com--color.md:99 | 柜体结构线 |
| `--line-strong` | #777777 | content/color/tdesign.tencent.com--color.md:102 | 输入框与次按钮边界，白底 4.48:1 |
| `--ink` | rgba(0,0,0,.9) | content/type/tdesign.tencent.com--fonts.md:104 | 正文与标题 |
| `--ink-2` | rgba(0,0,0,.6) | content/type/tdesign.tencent.com--fonts.md:105 | 说明、标签 |
| `--gray-deep` | #393939 | content/color/tdesign.tencent.com--color.md:105 | hover 深线、柜体主结构 |
| `--gray-ink` | #181818 | content/color/tdesign.tencent.com--color.md:108 | 取件窗口深底、代码字 |

文字对比度全部按实际底色复算，结果见第 12 节。色阶不当文字：Green5 #2ba471 只有 3.16:1，只做图标与 LED；Gray7 #8b8b8b 只有 3.4:1，只做非文本与禁用。

## 4. 字阶、行高、字重

字阶取 content/type/tdesign.tencent.com--fonts.md:53-61：12 / 14 / 16 / 20 / 24 / 28 / 36 / 48 / 64。

| 用途 | 字号 | 行高 | 出处 |
| --- | --- | --- | --- |
| 桌面 H1 | 48px | 56px | content/type/tdesign.tencent.com--fonts.md:60；行高按 :69 的字号 + 8 派生 |
| 移动 H1 | 36px | 44px | content/type/tdesign.tencent.com--fonts.md:59；行高派生 |
| 阶段标题 | 24px | 32px | content/type/tdesign.tencent.com--fonts.md:57；行高派生 |
| 小标题 | 16px | 24px | content/type/tdesign.tencent.com--fonts.md:55；行高派生 |
| 正文 | 16px | 24px | content/type/tdesign.tencent.com--fonts.md:55；行高按 :69 派生 |
| 密集正文与列表 | 14px | 22px | content/type/tdesign.tencent.com--fonts.md:54；行高派生 |
| 说明与小字 | 12px | 20px | content/type/tdesign.tencent.com--fonts.md:53；行高派生 |
| 取件码桌面 | 36px | 44px | content/type/tdesign.tencent.com--fonts.md:59；行高派生 |
| 取件码移动 | 28px | 36px | content/type/tdesign.tencent.com--fonts.md:58；行高派生 |

字重只用 400 与 600（content/type/tdesign.tencent.com--fonts.md:87）。字体栈取 TDesign 系统栈（content/type/tdesign.tencent.com--fonts.md:34）。数字用 `font-variant-numeric: tabular-nums` 近似 TCloud Number，标降级（content/type/tdesign.tencent.com--fonts.md:40）。

## 5. 间距、圆角、动效、目标尺寸

- 间距：8px 网格（content/layout/tdesign.tencent.com--layout.md:78），小间距 4 与 12 两档（:138），槽 16（:92），安全边距 24（:96）。96、64、48、32 为 8 的倍数派生，标 derived。
- 圆角：TDesign 只给按钮形状不给像素（content/components/tdesign.tencent.com--button.md:64），全站统一 8 与 4 两档，标 derived。
- 动效：微观 200ms（content/motion/tdesign.tencent.com--motion.md:101），常规 240ms（:102），入场 280ms（:103）；标准曲线 cubic-bezier(.38,0,.24,1)（:115），入画 cubic-bezier(0,0,.15,1)（:116），出画 cubic-bezier(0.82,0,1,.9)（:117）。
- 目标尺寸：按钮与输入框最小 44×44，取 WCAG 2.5.5 下限（content/a11y/w3c--wcag-2.2.md:871）。
- 控件边界：输入框与次按钮用 1px #777777（白底 4.48:1），不拿 #dddddd 当控件边界。
- 焦点环：2px 实线 + 2px 偏移，标 derived；键盘可见，鼠标点击不出现。
- `prefers-reduced-motion: reduce` 下所有过渡压到 0.01ms，进度与出票直接到终态。

## 6. 结构与状态

页面：N9 → Hero（左文右柜，柜口可拖放）→ 三步轨道 → 01 投柜（文件列表、逐文件进度、总数与下一步）→ 02 拿码（摘要、有效期单选、出票口、复制）→ 03 取件（输码、错误、成功、倒计时、下载）→ 收尾 → Ft2。

- 投柜：空态、拖拽态、上传中、上传完成、单文件失败、超数量、超大小、移除文件；上传中主按钮禁用，全部完成才解锁。
- 拿码：未选有效期、默认 7 天、生成中、生成成功、复制成功、复制失败兜底、去取件。
- 取件：空码、格式错、不存在、已过期、已取走、服务故障、取件成功、倒计时、逐文件下载、全部下载、取件完成、再存一个。
- 步骤轨道由同一份状态驱动，01 / 02 / 03 的已完成、进行中、未完成三态同步。
- 错误文案按「发生了什么 → 怎么办」写，不写「操作失败」这种空话。

## 7. 动效清单

| 组件 | 触发 | 配方 | 动的属性 | 起止值 | 时长 | 曲线 |
| --- | --- | --- | --- | --- | --- | --- |
| 柜门 / 柜口 | 拖拽进入 | 就地状态 | transform, box-shadow | scale(1) → scale(1.01)，内阴影加深 | 200ms | 标准 |
| 文件行 | 新文件加入 | 文本与列表显现 | opacity, transform | 0, 4px → 1, 0 | 200ms | 入画 |
| 上传进度 | 进度更新 | 加载 | transform: scaleX | 0 → 1 | 240ms | 标准 |
| 错误横幅 | 校验失败 | 错误抖动 | transform | 0 → -6px → 6px → 0 | 80 / 60ms，回正 280ms | 标准 |
| 出票 | 生成取件码 | 浮层 / 展开 | transform, opacity | translateY(24px), 0 → 0, 1 | 280ms | 入画 |
| 复制反馈 | 点复制 | 反馈 | opacity | 0 → 1 → 0 | 200ms | 标准 |
| 取件结果 | 取件成功 | 面板展开 | opacity, transform | 0, 8px → 1, 0 | 280ms | 入画 |
| 下载完成 | 单文件下载完 | 反馈 | opacity, transform | 0, 4px → 1, 0 | 200ms | 入画 |

过渡以 CSS transition 实现；最终只以 computed style 验了 reduce 下的 1e-05s，`getAnimations()` 没有逐项跑。

## 8. 响应式

- 断点按 TDesign：768 / 992 / 1200（content/layout/tdesign.tencent.com--layout.md:156-158）。
- 1280 两栏 Hero；≤991 单列，柜体在文案下方；≤767 步骤轨道竖排，按钮全宽。
- 320 / 375 / 768 / 1280 四档 `scrollWidth === clientWidth`；首屏主按钮在 375×667 完整可见。
- 320 柜体 288 宽（16px gutter），柜门文字不小于 12px；取件码 28px 不折行。

## 9. 无障碍

- 跳转链接、原生 button、label 绑定、fieldset/legend、aria-live、错误就地提示、焦点回输入框。
- 正文 4.5:1，大字与图形 3:1，焦点环 3:1。
- 键盘：添加示例文件 → 下一步 → 生成 → 复制 → 去取件 → 提交；下载与再存用鼠标复验。
- 倒计时用 `role="timer"` 且 `aria-live="off"`，不每秒播报。

## 10. 质量六条自查

1. 字号全部在 TDesign 字阶上，无 13/15/17/38。
2. 层次用白底、Green1 带、Gray14 深块与 400/600 字重，不堆卡片阴影。
3. 强调色只在主按钮、阶段号、开放柜门内衬边线、凭条条带与 LED，面积目标 <5%。
4. 柜体、凭条、步骤轨道用内联 SVG/CSS 手绘，不用位图，不用外部图标库。
5. 状态齐全：hover、active、focus-visible、disabled、loading、error、success；过渡取 TDesign 三档。
6. 中文排版：正文 16/24、密集 14/22、小字 12/20；码与数字等距；标点全角；正文行宽 36 到 40em。

## 11. 假设与边界

- 文件与取件码只在浏览器内模拟，不上传服务器；页脚写明。
- 有效期 1 / 7 / 30 天是演示设定，不是接入真实存储。
- 最多 5 个文件、单个 20 MB 是演示限制，超限就地报错。
- 示例文件是 3 个文本文件，内容为演示文案，不冒充真实业务数据。
- 6 位码使用去掉 I/O/0/1 的字母数字表，避免看错；真实产品应加服务端限流与过期清理，本页不做。
- 旧稿四轴锁定，不重新挑版式；这是为了同题对照，不代表当前规范只会选这一组。

## 12. 实测记录

测于 2026-11-14，Chromium 模拟 320 / 375 / 768 / 1280 四档；页面是最终入库的 `examples/pickbin/index.html`，测试时用 file:// 打开同一份单文件。下面全是浏览器读数，不是估算。

### 12.1 四档溢出

| 视口 | innerWidth | scrollWidth | clientWidth | 结论 |
| --- | --- | --- | --- | --- |
| 320×568 | 320 | 320 | 320 | 无横向 |
| 375×667 | 375 | 375 | 375 | 无横向 |
| 768×1024 | 768 | 753 | 753 | 无横向；15 是纵向滚动条 |
| 1280×800 | 1280 | 1265 | 1265 | 无横向；15 是纵向滚动条 |

### 12.2 首屏

| 视口 | 主按钮 | 柜体与柜口 | 结论 |
| --- | --- | --- | --- |
| 320×568 | y 329 至 373 | 柜体 288×230，y 465 至 695；柜口 75×110，y 519 至 629 | 主按钮完整；柜口标题可见，柜口按钮在首屏下沿外 |
| 375×667 | bottom 349 | 柜体从 y 441 起；柜口面板在首屏内 | 主按钮完整；柜口标题与按钮可见 |
| 768×1024 | y 345 至 389 | 640×506，bottom 935；步骤条 top 1015 | 柜体完整；步骤条在首屏下沿 |
| 1280×800 | top 361 | 步骤条 top 655 | 柜体、柜口、步骤条都在首屏 |

### 12.3 行高与对比度

- 行高：1280 宽、3 个示例文件时，遍历可见文本，`line-height` 与 `font-size + 8` 的差值超过 0.6px 的条目为 **0**。375 首屏沿用同一套字阶。
- 对比度：同一状态与取件结果各跑一次逐元素前景/背景复算，低于 4.5:1（小字）或 3:1（大字）的条目为 **0**。禁用态按 WCAG 豁免，另量 `#5e5e5e` 在 `#eeeeee` 上是 5.59:1。
- 关键对：`--ink` / `--paper` 17.4:1；`--ink-2` / `--paper` 5.74:1；白字 / `--accent` 6.50:1；`--error-text` / `--error-soft` 5.69:1；`--line-strong` / `--paper` 4.48:1（非文本边界，按 3:1 过）。

### 12.4 形状与状态

| 件 | 高度 | 圆角 | 状态变化 | text-decoration |
| --- | --- | --- | --- | --- |
| 主按钮 / 次按钮 | 44 / 44 | 8 / 8 | 只换背景，不变高与圆角 | none |
| 单选卡 | 56 | 4 | 选中换底与边线，不变形 | none |
| 台阶行 | 72 | 0 | 当前位置用圆形编号换底 | none |

- 主按钮实测：静止背景 `#006c45`，按下 `#005334`；高度与圆角在两种状态下都是 44 / 8。
- 次按钮实测：静止白底，按下 `#f3f3f3`；高度与圆角同样是 44 / 8。
- 焦点环：2px `#006c45` 实线，offset 2px；键盘 Tab 可见，脚本 focus 不出现。
- 头部的 `hover` 规则在无悬停能力的自动化环境里没有触发，量到的是 `active`；形状结论不依赖悬停颜色。

### 12.5 键盘

- 首 Tab 到 skip，之后是 wordmark、取件、存一个文件、我有取件码、柜口选择、空状态选择、用示例文件试试；焦点环 2px。
- 在「用示例文件试试」按 Enter：加入 3 个文件，焦点落到「文件」标题；Tab 经过 3 个移除按钮到「下一步」。
- 按 Enter 进入 02：焦点落到「拿码」标题，rail 切到 02；Tab 经「修改」、有效期单选到「生成取件码」。
- 按 Enter 生成：焦点落到「复制取件码」；按 Enter 出 toast「已复制取件码。」。
- Tab 到「去取件」并 Enter：焦点落到取件输入框；输入当次生成的 `F6QQSW`，Tab 到「取件」，Enter 后结果展开，焦点落到「文件在柜子里」，倒计时显示「还剩 6 天 23:59:45」。
- 系统剪贴板内容没有独立读回；复制按钮的成功反馈与 `execCommand` 兜底已实测，http 环境走 Clipboard API。

### 12.6 减少动效

- `Emulation.setEmulatedMedia` 设为 `prefers-reduced-motion: reduce` 后，`#ticket` 的 `transition-duration` 为 `1e-05s`，`html` 的 `scroll-behavior` 为 `auto`。
- 没有逐条跑 `getAnimations()`；上面的结论只覆盖出票元素的 computed style 与根滚动行为。

### 12.7 交互

- 示例 3 文件 → 逐个状态「已上传」→ 下一步可用；生成码后 ticket 出票、复制与去取件按钮出现，rail 02。
- 取件：空值、3 位 `ABC`、6 位错码都留在原步并给错误文案；合法码进入结果，显示倒计时与 3 个文件。
- 超限：21 MB 单文件被拒；第 6 个文件被拒，错误条出现，下一步保持不可用。
- 拖拽：`dragenter` 出现「松手就进柜」，`dragleave` 复位，`drop` 加入文件。
- 全部下载：3 个文件写入浏览器下载目录；重置回到 01，文件清空、凭条回到 `------`、结果区收起。
- 以上鼠标流程在最终版之前跑过；最终版只改了焦点、窄屏柜口文案、两处间距与 768 对象宽度，核心脚本没有改。独立审稿没有另开一轮，以上为同一会话实测。
