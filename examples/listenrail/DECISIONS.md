# DECISIONS · ListenRail（listenrail）

## 1. 设计前提

| 项 | 结论 | 依据 |
| --- | --- | --- |
| 受众 | 通勤路上找中文播客听的人，手机为主、桌面为辅；愿意留邮箱换每周更新 | `briefs/listenrail.md:5-6` |
| 核心用途 | 三十秒内听懂这是一档什么节目并订阅；订阅之外能立刻听一期 | `briefs/listenrail.md:6` |
| 语气 | 克制的编辑口吻（editorial）：句子短、不喊口号、不给结论 | 需求未见语气词，按内容产品默认取编辑体 |
| 产品语境 | 新品牌官网（内容订阅型），中文 | 需求：中文播客节目官网，非复刻既有品牌 |
| 基准规范 | **TDesign**（中文新品牌官网走 TDesign 行） | `site/dist/ai/guide.md:20` |
| 读取的基准规范文章 | 色彩、字体、布局、图标、动效、深色模式六篇 | `site/dist/ai/guide.md:27` |
| 设计场景 | S2 落地页 + S4 表单流程 + S5 组件 + S6 数值层 + S9 无障碍验收 | `site/dist/ai/design-points.json` `points_by_task` |

一个项目只认一个基准规范：本页所有色值、字号、字重、行高、间距、断点、动效时长与缓动都出自 TDesign 六篇；GOV.UK 只取校验流程的原则（何时校验、错误文案句式），WCAG 只取触控目标下限，二者不提供任何数值样式。

## 2. 结构决策

**版式：Marquee Hero。** 首屏由超大字号的主张占满，下方硬切到内容列表；这与「一句话听懂这是什么节目」的任务一致。

- 首屏：眉标（中文播客 · 每周四更新）→ 64px 节目名 → 28px 主张 → 16px 说明 → 订阅表单；右侧 7:4 分栏放「最新一期」面板，面板里带一个起播入口。
- 一屏 85%：首屏实测 765px / 900px 视口 = 85.0%，下一节露头；依据 `site/dist/ai/guide.md:49`（首屏占比派生档）。
- 分隔：首屏与正文之间用 2px 实色横线硬切（Marquee 的结构信号），其余分区用 1px `#e8e8e8` 发丝线。
- 区块顺序：首屏（主张 + 表单）→ 在哪儿听 → 往期节目（8 期，可筛）→ 听友评论 → 深色订阅条 → 页脚。顺序取自订阅型版式「Hero(Value Prop + Form) → Recent Issues → Social Proof → About」`content/layouts/layout--newsletter-content-first.md:53-56`。听友评论不放数字（订阅数、播放量），因为需求没有给出真实数据，编造计数属于禁止项；`content/layouts/layout--newsletter-content-first.md:63` 明确「订阅数只有在当前、可核验、有日期时才展示，否则用定性社会证明」。
- **导航：N9 边缘对齐**。品牌左、三个锚点 + 订阅右，靠容器边缘；单页站点只有三个去处，不做折叠菜单（`content/howto/nngroup.com--is-navigation-useful.md` 的选用标准：导航条目少于 5 且同页可达时不值得折叠）。320 宽只保留订阅，其余三条锚点隐藏（页脚仍可达）。
- **页脚：Ft5 陈述式**。左侧品牌 + 一句人话说明，右侧三个锚点，底部版权与「封面为程序绘制」的声明。不用四列链接矩阵。
- **强调色：只用品牌蓝 `#0052d9` 一个色相**，实填面积实测 0.25%（1280）到 1.53%（375），远低于 5%。所有 hover / active 都取同一蓝的同族深浅（Blue6 / Blue8），不引入第二色相：`content/color/tdesign.tencent.com--color.md:507-510` 的 `brand-color-hover:@blue-color-6`、`brand-color-active:@blue-color-8`，以及配色方法点「把一个基色调成一组变体，状态色也是同一个色的变体」`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:26`。
- 层级：全页只有一个 64px 元素（节目名）、三个 28px 区块标题；正文档 16px，元信息 12px。依据 `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77`（字号最多 3 档、最大元素不超过 2 个）。
- 图标：全部内联 SVG，24 视口、2px 描边、直角端点，尺寸 16 / 20 / 24 三档；依据 `content/icons/tdesign.tencent.com--icon.md:38`（24px 栅格，输出 16/20/24/32）与 `:56`（统一 2px 描边）。封面是程序绘制的 SVG 弧线/波形，按 `data-v` 换构图，零外链。
- 文案：单句 20 字以内，中英文与数字之间加空格；错误文案空值用祈使句、格式错用描述句。依据 `content/principles/ant.design--copywriting-cn.md` 与 `content/markdown/github.com--chinese-copywriting-guidelines.md`（设计点 `markdown-cn-copywriting`），错误句式取 `content/patterns/govuk--validation.md:20-24`。

## 3. 色彩表

基准规范：`content/color/tdesign.tencent.com--color.md`。对比度为 Chrome 实测（按 WCAG 相对亮度公式现算，半透明色先在实际上层底合成再算）。

| Token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--color-bg` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:186-187` | 页面底、输入框底 | 与 ink 17.49:1 |
| `--color-surface` | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:189` | 往期区块底、最新一期面板底 | 与 ink 15.96:1 |
| `--color-subtle` | `#eeeeee` | `content/color/tdesign.tencent.com--color.md:191` | 禁用按钮底 | 与 ink-2 4.95:1 |
| `--color-line` | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:193` | 发丝分隔线、面板内分隔 | 1.23:1（纯装饰，不承担控件边界） |
| `--color-line-strong` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:201` | 输入框、筛选按钮、播放按钮描边 | 白底 3.41:1 / 灰底 3.07:1（≥3:1） |
| `--color-ink` | `rgba(0,0,0,.9)` | `content/type/tdesign.tencent.com--fonts.md:96` | 标题、正文强调、深色条底（合成后 `#1a1a1a`） | 白底 17.49:1 |
| `--color-ink-2` | `rgba(0,0,0,.6)` | `content/type/tdesign.tencent.com--fonts.md:98` | 说明、元信息、页脚小字 | 白底 5.74:1 / 灰底 5.17–5.56:1 |
| `--color-ink-3` | `rgba(0,0,0,.26)` | `content/type/tdesign.tencent.com--fonts.md:102` | 引号、外链箭头 | 1.88:1（仅装饰） |
| `--color-accent` | `#0052d9` | `content/color/tdesign.tencent.com--color.md:34` | 订阅按钮、链接、进度条、焦点环 | 白底 6.54:1 / 灰底 5.90:1 |
| `--color-accent-hover` | `#003cab` | `content/color/tdesign.tencent.com--color.md:69`（Blue8） | 主按钮 hover | 白字 9.40:1 |
| `--color-accent-active` | `#002a7c` | `content/color/tdesign.tencent.com--color.md:72`（Blue9） | 主按钮 active、次级链接 hover | 白字 12.95:1 |
| `--color-danger` | `#ad352f` | `content/color/tdesign.tencent.com--color.md:101`（Red7） | 错误文案与输入框错误边 | 6.31:1 |
| `--color-success` | `#006c45` | `content/color/tdesign.tencent.com--color.md:171`（Green7） | 订阅成功文案 | 6.50:1 |
| `--color-on-band` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:186-187` | 深色条标题 | 17.40:1 |
| `--color-on-band-2` | `#ffffff` 60% | `content/color/tdesign.tencent.com--dark.md:45` | 深色条说明文字 | 6.90:1 |

两处「不直接用原文默认档」的换档，按色阶当文字规则 `site/dist/ai/guide.md:43` 处理：

- 错误色原文给的是 Red6 `#d54941`，原文自述 4.32:1（`content/color/tdesign.tencent.com--color.md:77-80`），低于 4.5；同族加深一档到 Red7 `#ad352f`（`:101`），实测 6.31:1。
- 成功色同理从 Green5 `#2ba471`（`:150`）换到 Green7 `#006c45`（`:171`），实测 6.50:1。
- 主按钮 hover 原按语义 token 映射应取 Blue6 `#366ef4`（`content/color/tdesign.tencent.com--color.md:508`），但白字压 Blue6 实测 4.47:1，差 0.03 不达 AA；按同一基准规范色阶加深到 Blue8 `#003cab`（`:69`，9.40:1），active 再深到 Blue9 `#002a7c`（`:72`，12.95:1）。这是同族换档，不跨源。
- Font Gy 的透明度档经合成后实测：Gy2 在白底 5.74、在 Gray1 上 5.17，与原文自述「常用文字对比度均大于 4.5」一致（`content/color/tdesign.tencent.com--color.md:184`、`:223-269`）。

## 4. 字号 / 行高 / 字重

字号全部取 TDesign 字阶原文，不新增档位（`content/type/tdesign.tencent.com--fonts.md:44-60`）。

| 角色 | 字号 | 出处 | 行高 | 字重 |
| --- | --- | --- | --- | --- |
| 节目名（display，全页 1 个） | 64px | `content/type/tdesign.tencent.com--fonts.md:60`（第二字阶 +16） | 72px（公式产物） | 600 |
| 区块标题 h2 | 28px | `content/type/tdesign.tencent.com--fonts.md:57`（第二字阶 +4） | 36px（公式产物） | 600 |
| 正文、列表标题、导航 | 16px | `content/type/tdesign.tencent.com--fonts.md:53`（第一字阶 +2） | 24px（公式产物） | 400 / 列表标题 600 |
| 元信息、标签、页脚小字 | 12px | `content/type/tdesign.tencent.com--fonts.md:51`（桌面端最小字号，`:44`） | 20px（公式产物） | 400 |
| 28px 主张（≤559px 窄屏） | 24px | `content/type/tdesign.tencent.com--fonts.md:56`（第二字阶 +4） | 32px（公式产物） | 400 |

- 28px 主张在 ≤559px 收到 24px：基准规范没有响应式字阶，这是派生的响应式一档，24px 仍是 TDesign 字阶内的原值，不是新字号。
- 行高公式取原文 `line-height = font size + 8`（`content/type/tdesign.tencent.com--fonts.md:67`），实现为 `:where(body, body *) { line-height: calc(1em + 8px) }`，零特异性、每个元素按自身字号算；全站没有任何一处单独写 `line-height`。全量普查 103 个含直接文本的节点，0 违例（四档宽度各测一次）。
- 字重只有 400 / 600 两档（`content/type/tdesign.tencent.com--fonts.md:81`）。
- 字族用原文完整降级链（`content/type/tdesign.tencent.com--fonts.md:34`），零外链字体。
- 数字：时长、期号、计数全部 `font-variant-numeric: tabular-nums`。原文点名的 TCloud Number（`content/type/tdesign.tencent.com--fonts.md:37`）零外链拿不到，按降级处理，不冒充。正文行长 40em（≈640px，中文 40 字），派生，见 `site/dist/ai/guide.md:48`。

## 5. 间距 / 圆角 / 容器 / 断点

| 维度 | 取值 | 出处 |
| --- | --- | --- |
| 间距尺度 | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px | `content/layout/tdesign.tencent.com--layout.md:107`（8 倍数原则 + 4、12 两档） |
| 栅格槽宽 | 16px | `content/layout/tdesign.tencent.com--layout.md:77` |
| 页面安全边距 | 24px（<768 收 16px） | `content/layout/tdesign.tencent.com--layout.md:81`（默认 24，建议 8 的倍数） |
| 栅格 | 12 列 | `content/layout/tdesign.tencent.com--layout.md:87` |
| 容器 | `max-width:1120px` | **derived**：基准规范只给画板 1440/1920（`:25`）与 12 栅格（`:87`），未给最大内容宽度；按 8px 基数取整封顶 |
| 断点 | 768 / 992 | `content/layout/tdesign.tencent.com--layout.md:117-119`（sm 768、md 992） |
| 圆角 | 4px（控件）/ 8px（面板） | **derived**：库无通用 radius 规范，按 `site/dist/ai/guide.md:40` 整站两档 |
| 发丝线 | 1px | **derived**：基准规范只给分隔线颜色，线宽按 `site/dist/ai/guide.md:42` |
| 硬切分隔 | 2px 实色 | **derived**：Marquee 的结构信号，与 1px 发丝线分工明确 |
| 组件尺寸 | 输入框 48px 高、主按钮 48px、筛选块与播放键 44px、列表封面 64px（<560 收 56px）、平台行 64px | **derived**：基准规范无组件尺寸规格，按 `site/dist/ai/guide.md:45` 成套自定；44px 下限另见 `content/a11y/w3c--wcag-2.2.md:871` |
| 焦点环 | 2px 实线 + 2px 偏移 | **derived**：`site/dist/ai/guide.md:51` |

## 6. 动效

基准规范 TDesign 动效篇给的是桌面三档时长与三条 cubic 曲线，直接整套取用。

| 用途 | 时长 | 出处 | 缓动 | 出处 |
| --- | --- | --- | --- | --- |
| 颜色 / 边框 / 文字色变化（微观） | 200ms | `content/motion/tdesign.tencent.com--motion.md:99`（`@duration-desktop-base`） | `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:111` |
| 跳转定位、平滑滚动后的聚焦 | 240ms | `content/motion/tdesign.tencent.com--motion.md:100`（`@duration-desktop-moderate`） | 同上 | 同上 |
| 抽屉级容器（本页未用，仅登记档位） | 280ms | `content/motion/tdesign.tencent.com--motion.md:101`（`@duration-desktop-slow`） | `cubic-bezier(0,0,.15,1)` | `content/motion/tdesign.tencent.com--motion.md:112` |

- 只动 `background-color`、`color`、`border-color`、`transform`、`opacity`。
- 首屏不做顺序进场（`content/motion/tdesign.tencent.com--motion.md:146`）。
- 播放进度条用 `transform: scaleX()`，不改宽度，避免触发布局。
- `prefers-reduced-motion: reduce` 下全部过渡关闭（实测 `transition-duration: 0s`），不是只调慢：`site/dist/ai/guide.md:39`、设计点 `motion-reduced`。

## 7. 设计点路由表

| 设计点 | 选用标准（select 摘要） | 取舍 | 落在哪 |
| --- | --- | --- | --- |
| `howto-visual-hierarchy` | 字号最多 3 档，最大元素 ≤ 2 个 | 采纳：64px 只给节目名，28px 只给区块标题 | 字号表、`.display` |
| `howto-ui-color-framework` | 一个基色调深浅变体，状态只动一个维度 | 采纳：全部状态色取 Blue6/Blue8 | 色彩表、`.btn-primary:hover/:active` |
| `howto-ui-polish` | 留白舍得给，列表项间距宁多勿少 | 采纳：列表行 16px 上下内距、区块 64/96px；「白字压图垫遮罩」不适用（全站无图） | 间距表 |
| `layouts-content-community` | 内容订阅型：价值主张 + 订阅表单进首屏，再摆往期与订阅数 | 采纳结构，**拒绝订阅数**（无真实数据，`layout--newsletter-content-first.md:63`） | 区块顺序 |
| `layouts-product-official` | 产品官网 / 功能卡 + 社会证明 | 不采纳：本页卖的是节目不是功能，功能卡与评分墙会造出没有的事实 | — |
| `components-cards` | 同级卡标题用 h3，整卡可点把链接放标题，无 hover 也完整可读 | 采纳层级与可读性；本页用列表行而非卡片，未做整卡点击 | 往期列表 |
| `components-button-hierarchy` | 每屏一个 primary，secondary 只配否定动作 | 采纳：首屏一个实心主按钮；导航与深色条的订阅是次级链接/反白按钮 | 表单、`.band` |
| `patterns-form-validation` | 提交时才校验；空值祈使句；格式错描述句；`novalidate` | 采纳全部三条；字段只有一个，未做 error summary（见 FINDINGS 局限） | 表单脚本 |
| `type-scale-steps` | 按基准规范字阶取档，不随手写字号 | 采纳 TDesign 字阶 12/16/28/64 | 字号表 |
| `type-line-height-box` | 行高与字号成对定义 | 采纳基准规范「字号 + 8」公式 | 行高 |
| `type-measure-limit` | 行长要封顶 | 采纳：中文 40 字封顶，值派生 | `--measure` |
| `layout-spacing-scale` | 间距按一套尺度取 | 采纳 TDesign 8px 基数 + 4/12 两档 | 间距表 |
| `motion-duration` | 按时长分档，别一个值用到底 | 采纳桌面三档 200/240/280 | 动效表 |
| `motion-reduced` | reduce 下关闭而非变慢 | 采纳：全局关闭过渡 | `@media (prefers-reduced-motion)` |
| `markdown-cn-copywriting` | 中英文数字间空格，单句 20 字内 | 采纳：全部界面文案按此写 | 全站文案 |
| `icons-spec` | 24 栅格、2px 描边、整数尺寸 | 采纳：所有内联 SVG 统一 24 视口 2px 描边 | 图标与封面 |

## 8. 交付自验（数字均来自真实浏览器）

环境：Chromium（Hermes browser harness），`file:///Users/mac/workspace/active/UISpecs/examples/listenrail/index.html`，无网络请求。

| 项 | 结果 |
| --- | --- |
| 320 宽 | `scrollWidth 320 / clientWidth 320` |
| 375 宽 | `375 / 375` |
| 768 宽 | `753 / 753`（含 15px 滚动条） |
| 1280 宽 | `1265 / 1265`（含 15px 滚动条） |
| 外部资源 | `performance.getEntriesByType('resource').length === 0` |
| 行高普查 | 103 个含直接文本节点，违例 0（四档各测一次） |
| 强调色实填面积 | 1280: 0.25% · 768: 0.39% · 375: 1.53% · 320: 1.44% |
| 首屏占比 | hero 765px / 视口 900px = 85.0% |
| 正文对比度 | `rgba(0,0,0,.6)` 于白底 5.74:1；标题 `rgba(0,0,0,.9)` 17.49:1 |
| 次要文字对比度 | 列表元信息于 `#f3f3f3` 5.56:1；面板标签 5.17:1 |
| 按钮文字对比度 | 白字于 `#0052d9` 6.54:1 |
| 禁用态对比度 | `rgba(0,0,0,.6)` 于 `#eeeeee` 4.95:1（与原文 Gray2 层 4.9 自述一致） |
| 错误色对比度 | `#ad352f` 于白底 6.31:1 |
| 非文本对比度 | 输入框描边 3.41:1、灰底描边 3.07:1、焦点环 6.54:1 |
| 触控目标 | 播放键 44×44、筛选块高 44、主按钮高 48、输入框高 48、平台行高 64 |

交互前后数字：

| 交互 | 前 | 后 |
| --- | --- | --- |
| 筛选「对谈」 | 可见 8 行 / 计数「共 8 期」 | 可见 5 行 / 「共 5 期」 |
| 筛选「独白」 | 5 行 | 3 行 / 「共 3 期」 |
| 回到「全部」 | 3 行 | 8 行 / 「共 8 期」 |
| 表单空提交 | 无提示 | 「请输入邮箱地址。」红字 + `aria-invalid=true` + 焦点回到输入框 |
| 表单格式错（`shuo.laitingting`） | 仍是空值错误 | 「邮箱地址要像 name@example.com 这样……」 |
| 表单改正输入 | 保持错误边框 | `aria-invalid` 移除、提示清空 |
| 表单成功 | 按钮「订阅」可用 | 「已订阅」+ 按钮禁用 + 绿字回显邮箱 + 输入框只读 |
| 播放第 32 期 | 静态行，`aria-pressed=false` | 2.1 秒后计时 `00:02`、进度 `scaleX(0.0008)`（2.1/2772）、`aria-pressed=true`、标签改「暂停…」 |
| 播放中切到第 31 期 | 第 32 期播放中 | 第 32 期复位 `scaleX(0)`、第 31 期起播 |
| 再次点击 | 播放中 | 暂停：`is-playing` 移除，`aria-pressed=false`，标签回「播放…」 |
| 首屏「从这一期开始听」 | 无行播放 | 第 1 行起播（`is-playing` 命中 index 0），焦点落在该行播放键 |
| 键盘序 | — | 跳过链接 → 品牌 → 往期/听友/关于/订阅 → 邮箱 → 订阅 → 从这一期开始听 → 平台链接 |

## 9. 回炉记录

1. **播放计时不动。** 第一版用 `requestAnimationFrame` 推进进度。实测时页面在后台标签页（`document.visibilityState === 'hidden'`），rAF 完全不触发，2.2 秒后 `elapsed` 仍为空串、进度条 `transform` 为空。改为 `setInterval(tick, 200)` 并以 `performance.now()` 差值算秒数；标签页可见后复测：2.0 秒 → `00:02`、`scaleX(0.0006)`（第 30 期 3125 秒，2/3125 = 0.00064）。
2. **首屏是通用模板骨架。** 第一版单栏：眉标 → 大字 → 副标题 → 正文 → 表单，右侧只挂一排波形装饰。评审判定「套模板」「装饰漂浮」。改为 7:4 双栏，右栏换成真实的「最新一期」面板（封面、期号、标题、时长、起播入口），把装饰换成内容；波形装饰删除。
3. **副标题孤行。** `max-width:16em` 时 28px 副标题把「事。」挤到第二行。改为 `max-width:var(--measure)` + `text-wrap:balance`；1280/768 复测单行（36px 高），320/375 下两行。窄屏再把字号从 28px 收到 24px（字阶原值），实测 320 下断在「聊一件 / 你正在经历的事」，数量短语不再被拆开，行高 32px。
4. **平台入口归属不清。** 三列并排时右端箭头离平台名约 370px，读起来像「小宇宙 → Apple Podcasts」。改为单列三行（行高 64px、整行 hover），箭头与整行绑定。
5. **成功态没有可辨识的收尾。** 第一版成功后只改按钮文案，按钮仍是主色实心，看起来还能点。补 `:disabled` 档：底 `#eeeeee`、字 `rgba(0,0,0,.6)`，实测 4.95:1，并真的 `disabled`。
6. **动效时长档位对齐。** 第一版把 hover 写成 100ms，那是移动端档（`content/motion/tdesign.tencent.com--motion.md:96`）。桌面端应从 200ms 起，改为 200 / 240 / 280 三档一一对应原文 token。
7. **审稿误报核验。** 视觉评审报「最新一期卡片日期 11 月 6 日、类型写成对话、导航写听众」。回到 DOM 逐条核：两处日期均为「11 月 5 日」、全站「对谈」14 处无「对话」、导航与区块标题均为「听友」。属 OCR 误读，未改。

## 10. 超出基准规范的数值清单

全部标 derived，成套自洽，不冒充原文值。

| 项 | 值 | 为什么是派生 | 上限依据 |
| --- | --- | --- | --- |
| 容器宽度 | 1120px | 基准规范无最大内容宽度 | `site/dist/ai/guide.md:48` 同族思路：封顶而不是铺满 |
| 正文行长 | 40em（≈640px / 中文 40 字） | 基准规范无行长 | `site/dist/ai/guide.md:48` |
| 圆角 | 4px / 8px | 库无通用 radius | `site/dist/ai/guide.md:40` |
| 发丝线宽 | 1px；硬切 2px | 库只给颜色 | `site/dist/ai/guide.md:42` |
| 组件尺寸 | 输入框 48、按钮 48、筛选/播放 44、封面 64（窄屏 56）、平台行 64、列表行上下内距 16 | 基准规范无组件尺寸 | `site/dist/ai/guide.md:45`、`content/a11y/w3c--wcag-2.2.md:871` |
| 触控目标 | 44×44 起 | 基准规范无 | `content/a11y/w3c--wcag-2.2.md:871` |
| 焦点环 | 2px + 2px 偏移 | 基准规范无 | `site/dist/ai/guide.md:51` |
| 首屏高度 | 85vh | 基准规范无 | `site/dist/ai/guide.md:49` |
| 数字等距 | `tabular-nums` | TCloud Number 零外链不可得 | `site/dist/ai/guide.md:41`（降级，不冒充） |
| 遮罩 | 未使用 | 本页无弹层 | `site/dist/ai/guide.md:50` 不适用 |
