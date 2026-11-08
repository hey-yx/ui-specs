# DECISIONS · PickBin（pickbin）

## 1. 设计前提

| 项 | 决定 | 依据 |
| --- | --- | --- |
| 受众 | 要把一份文件临时交给同事或客户的人；不注册、不装 App、单次使用 | `briefs/pickbin.md:5` |
| 用途 | 三步完成一次传送：投柜 → 取码 → 取件；投件方与取件方是两个人 | `briefs/pickbin.md:6` |
| 语气 | 直接、事务性。不承诺"安全加密""极速"，因为演示版不存储任何文件 | `briefs/pickbin.md:14`（边界：前端模拟） |
| 产品语境 | 中文产品 UI（工具类 Web 应用，非后台、非官网） | `site/dist/ai/guide.md:27` |
| 基准规范 | **TDesign**（中文产品 UI 行） | `guide.md:27` |
| 设计场景 | S4 表单与流程 + S19 状态与反馈 + S9 无障碍验收 | `site/dist/ai/design-points.json` → `points_by_task` |

一个项目一个基准规范，数值决定权全在 TDesign 六篇：`color` / `fonts` / `layout` / `icon` / `motion` / `dark`（未用 dark）。方法层两篇只定搭配，不定数值（`guide.md:56-59`）。

## 2. 结构决策

**版式：顶部导航 + 首屏一行说明 + 柜面双栏 + 三步骤说明 + 限制表 + 页脚。**

- 首屏不放大 hero。产品本身就是一个表单，"把工具举到首屏"比"先把口号做大"更符合任务型页面；`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77` 要求最大元素不超过 2 个，本页只有 h1（28px）与取件码（36px）两处大字号。
- 柜面用 7:5 双栏（`content/layout/tdesign.tencent.com--layout.md:87` 的 12 栅格，7/12 与 5/12），投柜是主任务所以更宽；≥992px 时取件卡 `position:sticky`，滚动时留在视野内，不留下右侧空白。
- 三步说明放在柜面**之后**而不是之前：它是"看懂了再回来查"的内容，放前面会把主操作推到首屏之外（第一版就是这么错的，见第 9 节）。
- 移动端单列，投柜在取件之前，与真实发生顺序一致。

**导航：** 页头只放品牌（链回本页顶部）+ 2 个页内锚点。`briefs/pickbin.md` 没有第二个页面，不做假导航、不做汉堡菜单。依据 `content/patterns/carbon--global-header.md:42`（logo 只链回本站首页）与 `:44`（链接不开新标签、不指向别的域名）——本条只取原则，数值仍走基准规范。

**页脚：** 品牌行 + 演示声明 + 3 个页内链接。页脚不做栏目矩阵：单页工具没有第二层信息架构。

**强调色：** 腾讯蓝 `#0052d9`（blue-7），只用于主按钮、当前步骤点、选中态边框、焦点环、行内链接。全站一个强调色，不加第二色相；功能性反馈另用绿（成功）/ 红（错误），不参与强调。
`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:208` 的规则（深变体=降亮度升饱和）用于解释 hover/active 为何往深处走，实际取值仍回基准规范色阶。

**演示声明：** 页头下方常驻一条灰底横幅（"文件不上传、不保存，刷新即清空"）。这是本页唯一主动加的信息层，理由是产品承诺"把文件交给别人"，而演示版并不真的传送——不写清楚就是欺骗。形态参照 `content/components/govuk--phase-banner.md:20`（阶段横幅：告诉用户服务仍在建设中）。

## 3. 色彩表

基准规范色板：`content/color/tdesign.tencent.com--color.md`。对比度一列中，浏览器实测值由 `getComputedStyle` 取实际渲染色后按 WCAG 相对亮度公式计算。

| token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--bg` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187` | 页面底、卡片底 | — |
| `--surface` | `#f3f3f3`（gray-1） | `content/color/tdesign.tencent.com--color.md:189` | 拖放区、文件行、演示横幅、禁用底 | — |
| `--surface-2` | `#e8e8e8`（gray-3） | `content/color/tdesign.tencent.com--color.md:193` | 拖放区 hover、进度条槽 | — |
| `--line` | `#dddddd`（gray-4） | `content/color/tdesign.tencent.com--color.md:195` | 卡片边、分区发丝线 | 1.36:1（装饰线，不承担控件边界） |
| `--line-strong` | `#8b8b8b`（gray-7） | `content/color/tdesign.tencent.com--color.md:202` | 输入框/选择框/拖放区边界 | **3.41:1**（白底）、**3.07:1**（灰底）≥3 ✓ |
| `--text-1` | `rgba(0,0,0,.9)`（font-gy1） | `content/type/tdesign.tencent.com--fonts.md:96` | 正文、标题、取件码 | **17.49:1** |
| `--text-2` | `rgba(0,0,0,.6)`（font-gy2） | `content/type/tdesign.tencent.com--fonts.md:98` | 次要说明、步骤名、页脚 | **5.74:1** 白底 / **5.58:1** 灰底 ✓ |
| `--text-3` | `rgba(0,0,0,.4)`（font-gy3） | `content/type/tdesign.tencent.com--fonts.md:100` | **仅禁用态** | 2.81:1（WCAG 1.4.3 对禁用控件豁免，见下） |
| `--brand` | `#0052d9`（blue-7） | `content/color/tdesign.tencent.com--color.md:34`（原文自述 6.54:1，`:42`） | 主按钮底、当前步骤、焦点环、行内链接 | **6.54:1**（白字 / 白底同值） |
| `--brand-hover` | `#003cab`（blue-8） | `content/color/tdesign.tencent.com--color.md:69` | 主按钮 hover | **9.40:1** |
| `--brand-active` | `#002a7c`（blue-9） | `content/color/tdesign.tencent.com--color.md:72` | 主按钮 active、链接 hover | **12.95:1** |
| `--brand-weak` | `#f2f3ff`（blue-1） | `content/color/tdesign.tencent.com--color.md:48` | 选中态底、拖放区拖入态 | 品牌字于其上 5.93:1 ✓ |
| `--success` | `#008858`（green-6） | `content/color/tdesign.tencent.com--color.md:168` | 成功文案与图标 | **4.50:1** ✓ |
| `--danger` | `#ad352f`（red-7） | `content/color/tdesign.tencent.com--color.md:101` | 错误文字 | **6.31:1** ✓ |
| `--danger-line` | `#d54941`（red-6） | `content/color/tdesign.tencent.com--color.md:80` | 错误左竖线、出错框边 | 4.32:1（原文 `:77` 自述 4.32）✓ 非文本 |

三条实测得来的取舍：

1. **hover 不用 blue-6。** TDesign 语义 token 把 `brand-color-hover` 映射到 blue-6（`content/color/tdesign.tencent.com--color.md:508`），`#366ef4` 配白字实测 **4.47:1**，差 0.03 不达 AA。按 `guide.md:43`「语义 token 映射出的 hover 同样按实际底色复算，不达 AA 就同族换档」，换同族 blue-8，实测 9.40:1。
2. **错误文字用 red-7 不用 red-6。** red-6 自述 4.32:1（`content/color/tdesign.tencent.com--color.md:77`），小字不达 4.5；文字换同族深档 red-7（6.31:1），red-6 只留作竖线与边框。
3. **字体灰只到 gy2。** gy3 40% 在白底是 2.85:1、灰底 2.81:1，只给禁用态（WCAG 1.4.3 的 Incidental 例外明确"inactive user interface component"的文字无对比度要求：`content/a11y/w3c--wcag-2.2.md:405`；1.4.11 对非文本同样豁免，`:516`）。任何"看起来淡一点更好看"的说明文字都没有降到 gy3。

面积：强调色实填（蓝底元素：主按钮、当前步骤点、进度条、选中框描边）在 1280×900 下 **0.52%**，成功态 0.58%，375 下 1.80%，320 下 1.59%，全部 <5%。

## 4. 字号 / 行高 / 字重

行高不是拍出来的：`content/type/tdesign.tencent.com--fonts.md:67` 给出 `line-height = font size + 8`（`:73-74` 说明 n=8 的来历）。实现用零特异性通配，保证每个元素按自身字号算：

```css
:where(body, body *){ line-height: calc(1em + 8px) }
```

字阶取 TDesign 第一字阶（12/14/16/20/24/28/36，步长 +2/+4，`content/type/tdesign.tencent.com--fonts.md:49-60`）：

| 角色 | 字号 | 行高 | 字重 | 出处 | 用在哪 |
| --- | --- | --- | --- | --- | --- |
| 页面标题 | 28px（≤479px 降 24px） | 36px（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:57`（28）`:56`（24）`:81`（600） | h1 一处 |
| 取件码 | 36px | 44px（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:58` | 成功态大码，全页最大 |
| 区块标题 | 20px | 28px（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:56` | 卡片标题、限制区标题 |
| 小标题 | 16px | 24px（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:53` | 三步标题、字段名、按钮 |
| 正文 | 16px | 24px（公式产物） | 400 | `content/type/tdesign.tencent.com--fonts.md:53` | 段落、限制条目 |
| 辅助 | 14px | 22px（公式产物） | 400 | `content/type/tdesign.tencent.com--fonts.md:52` | 说明文字、步骤名、页脚 |
| 序数 | 12px | 20px（公式产物） | 400 | `content/type/tdesign.tencent.com--fonts.md:44`（桌面最小 12px） | 步骤点里的数字 |

层级只有 3 档（28/20/16，`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:59` 的"对比差不超过 3 种"），14px 与 12px 只服务元信息，不与标题竞争；全页最大元素 2 个（h1 + 取件码，`:77`）。

字重只用 400/600 两档（`content/type/tdesign.tencent.com--fonts.md:79-81`：TDesign 只给这两种配置，Windows 下 <600 一律渲染为常规）。

正文字号取 16px 而非 14px：`content/type/designsystem.digital.gov--typography.md:34`（经点 `type-body-min-size` 选中）给出的可读性下限是 16px；14px 只用于辅助文字。

数字一律 `font-variant-numeric: tabular-nums`（取件码、文件大小、百分比、剩余次数）。TDesign 点名的 TCloud Number（`content/type/tdesign.tencent.com--fonts.md:37`）零外链拿不到，按 `guide.md:41` 降级为 tabular-nums，不冒充原文值。

## 5. 间距 / 圆角 / 容器 / 断点

**间距：基准规范有整套尺度，不派生。** `content/layout/tdesign.tencent.com--layout.md:107`：8 倍数，另加 4、12 两档。全站只用这一套：

| token | 值 | 用途 |
| --- | --- | --- |
| s-1 | 4px | 图标与文字、条目内微距 |
| s-2 | 8px | 元素内间距、chips 间隔 |
| s-3 | 12px | 行内块之间 |
| s-4 | 16px | 卡片内小块间距、栅格槽宽（`:77` 原文 16px） |
| s-5 | 24px | 区块间距、卡片内边距（`:81` 原文安全边距 24px） |
| s-6 | 32px | 大区块间距、桌面卡片内边距 |
| s-7 | 48px | 章节上下留白 |
| s-8/9 | 64/80px | 大章节分隔 |

**圆角：derived（库无 radius 原文，`guide.md:40`）。** 两档：控件与 chips 4px、卡片与拖放区 8px。全站不出现第三档。

**发丝线：1px derived**（`guide.md:42`）。装饰分隔用 gray-4（1.36:1，不承担边界）；控件边界用 gray-7（3.41:1，过 3:1）。

**容器：** 内容最大宽 **960px**（derived，规则见第 10 节）；两侧留白 24px（`:81` 原文值），≥768px 用 32px，≥992px 用 48px（均为 8 的倍数）。

**断点：** 直接采用基准规范三档 `content/layout/tdesign.tencent.com--layout.md:117-119`（sm 768 / md 992 / lg 1200）。页面只用到 768（页边距与三列步骤）与 992（7:5 双栏、取件卡 sticky）；1200 不改变布局，因为 960 容器在 1200 以上不再变宽。

**行长：** 正文段落 `max-width: 34em`（中文约 34 字，落在 `guide.md:48` 的 35-45 字区间下沿，同页只用一种）。标题 `max-width: 22em` 并 `text-wrap: balance`。

**控件尺寸：** 输入框、按钮、chips 统一 **44px** 高（derived：库无组件尺寸，`guide.md:45`；44 来自 `guide.md:51` 的触控目标档）。24px 高的小号行内按钮只用于句子中间的"填入这个码"（实测 70×24），符合 WCAG 2.5.8 的 24px 下限与行内文本例外。

**焦点环：** `2px solid #0052d9` + `2px offset`（derived，`guide.md:51`），`:focus-visible` 触发，鼠标点击不出现。

## 6. 动效

基准规范 `content/motion/tdesign.tencent.com--motion.md` 给的是桌面端 token，直接取用，不引第二源：

| 场景 | 时长 | 曲线 | 出处 |
| --- | --- | --- | --- |
| hover / 状态色变化、进度条推进 | 200ms | `cubic-bezier(.38,0,.24,1)`（standard） | `content/motion/tdesign.tencent.com--motion.md:99`（`@duration-desktop-base 200ms`）、`:111` |
| 卡片/面板出现、步骤切换 | 240ms | 同上 | `content/motion/tdesign.tencent.com--motion.md:100`（moderate 240ms） |
| 消息类提示（复制成功） | 280ms 淡入 | 同上 | `content/motion/tdesign.tencent.com--motion.md:101`（slow 280ms） |
| 进度条宽度 | 200ms linear | `linear` | `content/motion/tdesign.tencent.com--motion.md:114`（"与其他运动同时进行的渐变"用 linear） |

- 缓动只取基准规范三条定值（`:111-113`），没有自造 `cubic-bezier`；TDesign 的 `ease-out` 用于元素入画、`ease-in` 用于出画，本页没有出画序列（无弹层、无抽屉），故未使用。
- 没有弹层 = 没有遮罩层，`guide.md:50` 的遮罩档本次不适用。
- 减少动效：`prefers-reduced-motion: reduce` 下全部过渡压到 0.01ms（直接切换，不是"变慢"）。基准规范没有这一条，兜底依据 `guide.md:39` 与 `content/motion/atlassian.design--motion.md:170`（"reduced motion 下动效关闭并即时，且界面必须仍完全可用"）。实测生效后 `transitionDuration` = `1e-05s`。
- 转场时长是"感知"而非"装饰"：进度条按 9 帧推进（每帧 110ms，共 1.04s 实测），只是把不可见的模拟过程显性化，标 derived（第 10 节）。

## 7. 设计点路由表

| 设计点 | 选用标准（select 摘要） | 本页取舍 | 落在哪 |
| --- | --- | --- | --- |
| `howto-visual-hierarchy` | 字号最多 3 档、最大元素 ≤2 个、简单配色 2 主 2 辅 | 3 档（28/20/16）；大元素只有 h1 与取件码；1 强调 + 灰阶 | 第 2、4 节 |
| `howto-ui-color-framework` | 状态靠降亮度/降饱和，一次只动一个维度 | hover/active 只在基准规范 blue 阶内加深，不换色相 | 第 3 节 |
| `color-cn-picking` | 中文界面取色先看 TDesign 中性色 14 级与实测对比 | 灰阶全取 TDesign；次级文字止于 gy2 | 第 3 节 |
| `color-contrast-threshold` | 正文 4.5、大字 3、焦点 3 | 全部实测，含 hover/active/边框 | 第 3、8 节 |
| `color-semantic-roles` | 按 primary/success/danger 分工，不按色值挑色 | 蓝=动作，绿=成功，红=错误；红分文字档与线条档 | 第 3 节 |
| `type-scale-steps` | 字阶成套，不逐处随手取 | TDesign 第一字阶，7 个字号全在其中 | 第 4 节 |
| `type-line-height-box` | 字号行高成对定义 | `calc(1em + 8px)` 通配，逐元素自算 | 第 4 节 |
| `type-body-min-size` | 正文有效字号 ≥16px | 正文 16px，14px 只做辅助 | 第 4 节 |
| `type-measure-limit` | 行长封顶 | 34em | 第 5 节 |
| `type-weight-restraint` | 一套界面两档字重 | 400/600 | 第 4 节 |
| `layout-spacing-scale` | 间距按一套尺度，禁自组 | 8 基数 +4/+12 | 第 5 节 |
| `layout-grid-columns` | 先定栅格 | 12 栏，7:5 | 第 2、5 节 |
| `motion-duration` | 时长按场景分档 | 200/240/280 | 第 6 节 |
| `motion-easing` | 只用给定曲线 | TDesign 三条 | 第 6 节 |
| `motion-reduced` | reduce 下关闭而非变慢 | 0.01ms + 验证仍可用 | 第 6 节 |
| `patterns-form-validation` | 提交时校验、错误贴字段、文案说清怎么改 | 逐字段错误 + 聚焦，单字段表单不设摘要 | 第 9 节、页面错误文案 |
| `patterns-states-feedback` | 进行中要有反馈、禁用要说明 | 进度条 + 百分比 + aria-valuenow；次数用完禁用并改文案 | 页面 |
| `patterns-loading` | 加载指示放原位、避免跳动 | 进度条占据按钮下方原位，不插拔布局 | 页面 |
| `patterns-check-complete` | 完成态给确认信息与下一步 | 成功块：大码 + 复制 + 试取件 + 再传一个 | 页面 |
| `components-char-upload` | 上传给选择入口 + 具体错误 | 拖放区（常显）+ 三类错误（超 2GB/空文件/未选） | 页面 |
| `components-button-hierarchy` | 每屏一个 primary | 全页仅"生成取件码"为实心主按钮 | 第 2 节 |
| `components-input-selection` | 下拉是最后手段，少选项用 radios | 到期与次数都是 3 项 chips（原生 radio） | 页面 |
| `patterns-global-nav` | logo 只回本站、不开新 tab | 页头 2 个页内锚点 | 第 2 节 |
| `a11y-form-structure` | label 关联、错误绑定字段 | 每字段 label + `aria-describedby` + `aria-invalid` | 页面 |
| `a11y-focus-visibility` | focus-visible、跳转链接、纯键盘可完成 | skip link + 2px 焦点环 + Tab 顺序实测 | 第 8 节 |
| `icons-spec` | 一个项目跟一个图标源 | TDesign：24 栅格、2px 描边、16px 交付 | 页面内联 SVG |

方法层两篇（`guide.md:56-59`）在出稿前读过，定的是"一号强调色 + 三档层级"，不影响数值取值。

## 8. 交付自验

浏览器：Chrome（CDP 驱动），`file://` 直开，无构建。

**四档横向溢出**（`documentElement.scrollWidth === clientWidth`）：

| 宽度 | 结果 | 结论 |
| --- | --- | --- |
| 320 | 305 / 305 | ✓（滚动条占 15px；移动模拟下 320/320） |
| 375 | 360 / 360 | ✓（移动模拟下 375/375） |
| 768 | 753 / 753 | ✓ |
| 1280 | 1265 / 1265 | ✓ |

四档都另查了"越界元素"（`right > clientWidth` 或 `left < 0`）：0 个。

**零外链：** `performance.getEntriesByType('resource').length === 0`，四档均为 0。无 CDN、无外链字体、无外链图片；图标全部内联 SVG，插图 0 张。

**行高普查**（遍历含直接文本的节点，比对 `lineHeight` 与 `fontSize + 8`，容差 0.6px）：

| 状态 | 统计节点 | 违例 |
| --- | --- | --- |
| 初始态（320/375） | 79 | 0 |
| 初始态（768/1280） | 80 | 0 |
| 投柜成功态（1280） | 83 | 0 |

**核心交互（真跑，前后数字）**：

| 交互 | 前 | 后 |
| --- | --- | --- |
| 选择文件（CDP 注入 357,000B 真实文件） | 文件行高 0px，步骤=1 选文件 | 文件行高 70px，显示"季度复盘-终版.pdf / 348.6 KB"，步骤=2 定规则 |
| 未选文件点提交 | 无错误 | 拖放区红框 + "选择一个文件再生成取件码。"，焦点回到拖放区，进度条不出现 |
| 生成取件码 | 进度 0%，步骤=3 | 9 帧推进（0→96%），**1.04s** 后出现 6 位码，表单让位给成功块，焦点落到"复制取件码" |
| 复制取件码 | 无反馈 | "已复制"，2.4s 后自动清空（`role=status`） |
| 填入演示码 / 用这个码试取件 | 输入框空 | 输入框值 8F3K2P / 本次生成的码，焦点进输入框并全选 |
| 取件校验（空） | — | "请输入取件码。"，`aria-invalid=true` |
| 取件校验（少于 6 位） | — | "取件码是 6 位字母和数字，现在只有 3 位。" |
| 取件校验（不存在的码） | — | "没找到这个取件码，检查一下是否输错了字母或数字。"，旧结果块隐藏 |
| 取件校验（次数用完） | 剩余 0 次 | "这个取件码的下载次数已经用完，文件已销毁。" |
| 下载一次 | 剩余 3 次 | 进度 0→100%，**0.46s**，剩余 2 次；再下载 → 1 次；第 3 次 → 0 次并禁用按钮，提示"已下载，次数用完，文件已销毁" |
| 拖放文件 | 文件行 0px | 接收 2,048B 的 `拖放测试.docx`，显示 2.0 KB |
| 再传一个 | 成功块 | 表单复位、步骤回 1、文件行 0px、焦点回拖放区 |
| 键盘 Tab 顺序 | — | 跳转链接 → 品牌 → 两步锚点 → 拖放区 → 2 个 radio → 主按钮，焦点环实测 `solid 2px / offset 2px / rgb(0,82,217)` |
| prefers-reduced-motion | 200ms | `1e-05s`（直接切换） |

**对比度（实测渲染色 + WCAG 公式）**：

| 项 | 值 |
| --- | --- |
| 正文 `rgba(0,0,0,.9)` / 白 | 17.49:1 |
| 次要文字 `rgba(0,0,0,.6)` / 白 | 5.74:1 |
| 次要文字 / 灰底 #f3f3f3 | 5.58:1 |
| 主按钮白字 / #0052d9 | 6.54:1（hover 9.40，active 12.95） |
| 次按钮文字 / 白 | 17.49:1 |
| 错误文字 #ad352f / 白 | 6.31:1 |
| 成功文字 #008858 / 白 | 4.50:1 |
| 输入框边框 #8b8b8b / 白 | 3.41:1（非文本） |
| 拖放区虚线 / 灰底 | 3.07:1（非文本） |
| 禁用按钮文字 / 灰底 | 2.81:1（WCAG 1.4.3 禁用控件豁免；若要求可读，同族换 gy2 得 5.17:1） |

**强调色面积**：0.52%（1280 初始）、0.58%（1280 成功态）、0.72%（768）、1.80%（375）、1.59%（320），全部 <5%。

## 9. 回炉记录（第一版 → 现在）

第一版出稿后按第 7 步真跑，发现 6 个问题，逐条改：

1. **空文件行常驻（真 bug）。** `.file-row{display:flex}` 覆盖了 `[hidden]` 的 UA `display:none`，未选文件时页面就渲染出一个 70px 高、只有"移除"链接的空行。→ 加 `[hidden]{display:none !important}`。改后实测文件行高 0px。
2. **主按钮在首屏之外。** 1280×900 下"生成取件码"底边在 1053px，用户看不到唯一的主操作。原因：三步说明占了柜面之前 130px；两组 radio 各占 122px 且并排后每列只有 198px 宽，chips 折成 3 行（实测 148px 高）。→ 三步说明移到柜面之后；两组 radio 合成"设置行"（标签在左、chips 在右，单行 44px）；收紧首屏留白。主按钮底边 1053 → **824px**，900 高视口内完整可见。
3. **复制可能永远没有反馈。** 初版只调 `navigator.clipboard.writeText`：在该环境该 promise 既不 resolve 也不 reject，实测点完 2.4s 界面无任何变化。→ 改为先同步 `execCommand('copy')`，失败再走异步接口并加 800ms 超时兜底，兜底时自动选中取件码并提示"请手动复制"。改后实测"已复制"。
4. **hover 对比度不达标。** 依 TDesign token 映射的 blue-6 hover 实测 4.47:1（<4.5）。→ 换 blue-8，实测 9.40:1（第 3 节）。
5. **错误态与旧结果同时出现。** 取件码次数用完后再次输入，错误文案出现，但下面的"找到了这个文件"结果块仍留着。→ 报错时隐藏结果块。
6. **窄屏细节。** 375 下 h1 出现单字孤行（"走"独占一行）、到期 chips 折成 2+1、成功态两个按钮宽度不一致（222/160）；320 下步骤条折成 2+1。→ h1 在 ≤479px 降到 24px 并 `text-wrap: balance`；chips 水平内边距收到 10px（单行）；移动端主/次按钮满宽；步骤条 gap 收到 8px（实测高度 22px，单行）。

## 10. 超出基准规范的数值清单

全部标 derived，并写清规则；能回源的都回了源。

| 维度 | 值 | 状态 | 规则 / 为什么这样取 |
| --- | --- | --- | --- |
| 圆角 | 4px / 8px | derived | 库无 radius 原文（`guide.md:40`）；两档起步，控件小、容器大 |
| 发丝线宽 | 1px | derived | 库只给分隔线颜色不给线宽（`guide.md:42`） |
| 焦点环 | 2px + 2px offset | derived | `guide.md:51` 兜底档 |
| 控件高度 | 44px | derived | 库无组件尺寸（`guide.md:45`）；取 `guide.md:51` 的 44px 触控档 |
| 内容最大宽 | 960px | derived | TDesign 只给画板 1440/1920（`content/layout/tdesign.tencent.com--layout.md:25`）。960 为 8 的倍数，按 12 栏 × 64px + 11 槽 × 16px = 944 再加 16 余量确定；槽 16 与边距 24 用原文值（`:77`、`:81`） |
| 页边距 32/48 | 32/48px | derived | 原文只写"建议使用 8 的倍数"（`:81`），24 为默认；≥768/≥992 各升一档，仍为 8 的倍数 |
| 正文行长 | 34em | derived | `guide.md:48` 要求封顶并落在 35-45 字（中文窄栏可到 20-35）；取 34 字，全页一种 |
| 下限字号 | 12px | 回源 | TDesign 桌面最小 12px（`content/type/tdesign.tencent.com--fonts.md:44`），非派生 |
| 数字等距 | `tabular-nums` | 降级 | TCloud Number 零外链拿不到（`guide.md:41`），降级不冒充 |
| 进度模拟 | 9 帧 × 110ms ≈ 1.04s | derived | 演示用行为参数，不是设计 token；取 200ms 档的整数倍便于观察 |
| 复制反馈停留 | 2400ms | derived | 基准规范无"提示停留"规定；够读完 3 个汉字并留出反应时间 |
| 遮罩 | 未使用 | — | 全页无弹层/抽屉，`guide.md:50` 不适用 |
| 金额排版 | 未使用 | — | 无金额 |
| 首屏占比 | 未按 85% 做 | 例外 | `guide.md:49` 的 85% 针对 hero 型首屏；本页首屏就是工具本身，按"工具完整可见"排 |
