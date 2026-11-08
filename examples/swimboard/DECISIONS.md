# 决策取值记录 · SwimBoard（swimboard 工作台）

对照文件：`index.html`（单文件，72,893 字节）。引用一律 `content/完整路径:行号`，行号即该值与原文的行号。

---

## 1. 设计前提

| 项 | 结论 | 依据 |
| --- | --- | --- |
| 受众 | 4–6 人的产品设计组，每天开着这个页面认领/推进任务 | `briefs/swimboard.md:4-5` |
| 用途 | 打开即看本周冲刺的四列看板，核心动作是看清阶段、负责人、截止日，然后新建或移动任务 | `briefs/swimboard.md:6` |
| 语气 | 工具腔、短句、名词开头（「结算页可用性测试脚本」），不用营销动词 | 需求「不是营销页」`briefs/swimboard.md:4` |
| 产品语境 | 中文产品 UI · 协作工具的后台工作台（中后台 / 工具 / 协作） | 指南项目选型表 `site/dist/ai/guide.md:27` |
| 基准规范 | **TDesign**（色彩 / 字体 / 布局 / 图标 / 动效 / 中后台框架） | `site/dist/ai/guide.md:27` |
| 设计场景 | S3 后台与数据面板（主）+ S4 表单流程 + S5 组件 + S19 状态反馈 | `site/dist/ai/design-points.json` 的 `points_by_task` |

**基准规范裁决（一个项目只认一个基准规范）**：指南表里有两行都沾边——`site/dist/ai/guide.md:26`（协作与项目管理工具 → Atlassian）与 `site/dist/ai/guide.md:27`（中文产品 UI 含协作 → TDesign）。本项目界面文案全中文、正文 14px 中文行高、标签与侧栏条目都是 2–5 个汉字，选用依据取「语言 + 界面语言密度优先」，落 TDesign；Atlassian 行只作为备选不取任何数值。代价与理由记在 `FINDINGS.md` §3 第 4 条。

**基准规范提供的维度**：色板与语义 token（`content/color/tdesign.tencent.com--color.md`）、字阶/行高/字重/字色（`content/type/tdesign.tencent.com--fonts.md`）、8px 网格与侧栏 232/64、断点（`content/layout/tdesign.tencent.com--layout.md`）、页面框架（`content/layout/tdesign.tencent.com--page-framework.md`）、动效时长与曲线（`content/motion/tdesign.tencent.com--motion.md`）、图标栅格与描边（`content/icons/tdesign.tencent.com--icon.md`）。
**基准规范缺的维度**：圆角、组件尺寸、阴影层级、遮罩、发丝线宽、触控尺寸、<768 的响应式策略 —— 全部按指南「基准规范缺口与派生」处理，见 §10。

---

## 2. 结构决策

不是营销页，是工作台：一屏内把「我现在该动哪个任务」摆完，所以采用**固定侧栏 + 看板画布 + 底部署名条**的应用骨架，没有 hero、没有介绍区块、没有 CTA 区。

| 决策 | 内容 | 依据 |
| --- | --- | --- |
| 宏观结构 | 应用骨架：左 232px 固定侧栏（导航 / 项目 / 筛选）+ 右侧画布（65px 顶栏 → 65px 冲刺摘要带 → 四列看板 → 37px 状态条，均为 1280 档实测） | 左右布局「功能模块较多、需频繁切换」`content/layout/tdesign.tencent.com--page-framework.md:58`；侧栏展开宽度 232px `content/layout/tdesign.tencent.com--layout.md:97` |
| 导航 | 全局导航在侧栏（视图 / 项目 / 常用筛选三组），区域操作用顶栏（搜索、新建）；侧栏计数与筛选结果同源 | 整站导航 vs 区域导航的分工 `content/layout/tdesign.tencent.com--page-framework.md:37-41` |
| 看板列 | 四列等宽、列头 48px、1px 竖分隔线、列内卡片纵向 8px 间距；不画四个圆角容器盒 | 信息密度选择：靠内间距升降一档而非加大容器 `content/layout/polaris.shopify.com--density.md:120`（原则层：密度是显式取舍）；列宽与分隔由本稿自定（§10） |
| 进度统计 | 一条 65px 带子：完成率 20px + 6px 进度条 + 四状态计数 + 周期切换 + 复制摘要，不做 KPI 卡阵列 | 视觉层级「最大的元素不超过 2 个」`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77` |
| 页脚 | 应用型署名条（12px）：示例数据 / 任务数 / 快捷键 / 版本，不用营销页脚 | 工作台无「公司介绍/备案」需求；页脚只放辅助信息 `content/layout/tdesign.tencent.com--layout.md:37` |
| 强调色 | 全站单一强调色腾讯蓝 `#0052d9`，只出现在主按钮、侧栏选中项、进度条填充、焦点环、logo 底 | 基准规范默认主题色「强调信息、引导操作」`content/color/tdesign.tencent.com--color.md:26-34`；配色框架「一个蓝加它的深浅变体」`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:82` |
| 状态色 | 四列各一枚 6px 圆点：待办灰 / 进行中蓝 / 评审橙 / 完成绿，仅作图例，不铺满列头 | 功能色只用于特定语义 `content/color/tdesign.tencent.com--color.md:38`；「不要靠颜色单独传达层级」`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:60`（列名文字同时在场） |
| 标签色 | 设计蓝 / 研究紫 / 规范绿 / 前端青，浅底 + 同族深字 | 扩展色「有更多颜色需求时（数据可视化、插画）」`content/color/tdesign.tencent.com--color.md:357` |

---

## 3. 色彩表

基准规范色板取值（**全部来自 TDesign 官方色板**，未跨源借色）。对比度按 WCAG 公式对实际底色实算，括号内为实测值。

| token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--blue-7` accent | `#0052d9` | `content/color/tdesign.tencent.com--color.md:34`（原文自述 6.54:1，`content/color/tdesign.tencent.com--color.md:42`） | 主按钮底、侧栏选中字/条、进度填充、焦点环、logo 底 | 白字压它 **6.54**；它压白 **6.54** |
| `--blue-6` | `#366ef4` | `content/color/tdesign.tencent.com--color.md:63` | 仅 hover 候选，**未用于文字底**（见下） | 白字压它 **4.47 < 4.5**，不达标 |
| `--blue-8` | `#003cab` | `content/color/tdesign.tencent.com--color.md:69` | 主按钮 hover 底（替原文映射的 blue-6） | 白字压它 **9.40** |
| `--blue-9` | `#002a7c` | `content/color/tdesign.tencent.com--color.md:72` | 主按钮 active 底 | 白字压它 **12.95** |
| `--blue-1` | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:48` | 侧栏选中项底、图标按钮 hover 底 | 蓝字压它 **5.93** |
| `--blue-2` | `#d9e1ff` | `content/color/tdesign.tencent.com--color.md:51` | 单选/多选选中底（选中态加强） | 蓝字压它 **5.04** |
| `--blue-3` | `#b5c7ff` | `content/color/tdesign.tencent.com--color.md:54` | 卡片 hover 描边 | 装饰（非文本，不承担控件边界） |
| `--white` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187` | 侧栏、顶栏、卡片、弹层底 | — |
| `--bgray-1` canvas | `#f3f3f4` | `content/color/tdesign.tencent.com--color.md:325` | 看板画布底（带品牌倾向的中性色，原文用于页面模板） | 正文压它 **15.69** |
| `--bgray-3` 分隔 | `#e7e8eb` | `content/color/tdesign.tencent.com--color.md:329` | 结构性分隔线（侧栏右边、栏间、区块间） | 装饰线，不承担控件边界 |
| `--gray-1` | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:189` | 列表项 hover 底、kbd 底 | 次要字压它 5.18 |
| `--gray-3` | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:193` | 进度条轨道、卡片描边 | 蓝填充压轨道 **5.34**（非文本） |
| `--gray-7` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:201` | **输入框/按钮描边**（非文本边界须 ≥3:1） | 对白 **3.41** |
| `--gray-9` / `--text-3` | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:205` | 次要说明、列计数、页脚、占位文字 | 对白 **6.48** |
| `--text-2` | `#666666` | `content/type/tdesign.tencent.com--fonts.md:98`（Font Gy2 = #000 60%） | 未选中导航项、说明段落 | 对白 **5.74** |
| `--text-1` | `#1a1a1a` | `content/type/tdesign.tencent.com--fonts.md:96`（Font Gy1 = #000 90%，白底折算） | 正文、卡片标题、导航选中字 | 对白 **17.40** |
| `--text-disabled` | `#999999` | `content/type/tdesign.tencent.com--fonts.md:100`（Font Gy3 = #000 40%） | **仅**禁用态图标/文字 | **2.85**（WCAG 1.4.3 对禁用控件豁免；不作任何可读信息） |
| `--red-7` / `--red-1` | `#ad352f` / `#fff0ed` | `content/color/tdesign.tencent.com--color.md:101` / `content/color/tdesign.tencent.com--color.md:83` | 逾期标签、错误摘要、字段错误 | **5.69** |
| `--orange-5` / `--orange-1` | `#e37318` / `#fff1e9` | `content/color/tdesign.tencent.com--color.md:115` / `content/color/tdesign.tencent.com--color.md:118` | 评审圆点（非文本）/「今天」标签底 | 圆点对白 **3.12**；橙字改用 `--orange-7 #954500`（`content/color/tdesign.tencent.com--color.md:136`）压橙底 **6.08** |
| `--green-5` / `--green-1` | `#2ba471` / `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:150` / `content/color/tdesign.tencent.com--color.md:153` | 完成圆点（非文本）/规范标签底 | 圆点对白 **3.16**；绿字用 `--green-7 #006c45`（`content/color/tdesign.tencent.com--color.md:171`）压底 **5.88** |
| `--purple-7` / `--purple-1` | `#7137bf` / `#fbf0ff` | `content/color/tdesign.tencent.com--color.md:414` / `content/color/tdesign.tencent.com--color.md:396` | 研究标签 | **6.33** |
| `--cyan-7` / `--cyan-1` | `#00668e` / `#e8f5ff` | `content/color/tdesign.tencent.com--color.md:381` / `content/color/tdesign.tencent.com--color.md:363` | 前端标签 | **5.75** |
| `--gray-10` toast 底 | `#4b4b4b` | `content/color/tdesign.tencent.com--color.md:207` | toast 底 / 头像字 | 白字压它 **8.72** |

**语义 token 映射照原文，但按实际底色复算**：原文把品牌色 hover 映射到 blue-6（`content/color/tdesign.tencent.com--color.md:508`），实测白字压 `#366ef4` 只有 4.47:1，未达 AA，故 hover 换成同族 blue-8、active 换 blue-9（`content/color/tdesign.tencent.com--color.md:509-510` 的 active 档）。这是「色阶当文字」一条的强制处置，不是自选。
原文自述「中性色常用文字对比度均大于 4.5」（`content/color/tdesign.tencent.com--color.md:184`）与实测不符：Gray7 `#8b8b8b` 压白只有 3.41、Gray8 `#777777` 4.48。故 Gray7 只做非文本边界，Gray8 只做占位文字的候选（最终占位用 Gray9）。

---

## 4. 字号 / 行高 / 字重

字阶取自 TDesign 第一字阶（`content/type/tdesign.tencent.com--fonts.md:49-54`，步进 +2 / +4），Body 14px（`content/type/tdesign.tencent.com--fonts.md:44`）；行高一律 `字号 + 8`（`content/type/tdesign.tencent.com--fonts.md:67`，公式在 `content/type/tdesign.tencent.com--fonts.md:73-74`）；字重只用 400 / 600（`content/type/tdesign.tencent.com--fonts.md:81`）。

| 用途 | 字号 | 行高（公式产物） | 字重 | 出处 |
| --- | --- | --- | --- | --- |
| 页面标题「本周冲刺」、弹层标题、完成率数字 | 20px | 28px | 600 | `content/type/tdesign.tencent.com--fonts.md:54` |
| 卡片标题、导航项、按钮、表单标签、正文、说明 | 14px | 22px | 400 / 600 | `content/type/tdesign.tencent.com--fonts.md:52` |
| 元数据：截止日、日期徽标、列计数、标签、页脚、错误文案 | 12px | 20px | 400 / 600 | `content/type/tdesign.tencent.com--fonts.md:51` |

全站只有这 3 档字号（NN/g「最多 3 sizes」`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76`），20px 元素只有 2 个（页面标题 + 完成率，`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77` 的上限）。第一版把弹层标题写成 16px 造成第 4 档，已并入 20px 档（见 §9 第 7 条）。
实现：`:where(body, body *) { line-height: calc(1em + 8px) }`，零特异性通配，每个元素按**自身**字号算，不在 `body` 上写死。
字重：标题/关键值 600，正文与说明 400；600 在 Windows 等同 Bold、macOS 等同 Semibold（`content/type/tdesign.tencent.com--fonts.md:81`）。
字体栈直接抄 `content/type/tdesign.tencent.com--fonts.md:34`（`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Hiragino Sans GB, Microsoft YaHei UI, …`），不加载任何外部字体。
数字：原文点名 TCloud Number（`content/type/tdesign.tencent.com--fonts.md:37`），零外链拿不到，按指南降级为 `font-variant-numeric: tabular-nums`（标记「降级」，不冒充原文值）。

---

## 5. 间距 / 圆角 / 容器 / 断点

**间距**：TDesign 网格基数 8px（`content/layout/tdesign.tencent.com--layout.md:65`），另加 4 / 12 两档小间距（`content/layout/tdesign.tencent.com--layout.md:107`），一套到底：`4 / 8 / 12 / 16 / 24 / 32 / 48`。槽 16px（`content/layout/tdesign.tencent.com--layout.md:77`）、安全边距 24px（`content/layout/tdesign.tencent.com--layout.md:81`）用于画布左右与列间距。

| 用在哪 | 值 |
| --- | --- |
| 卡片内边距、列内卡片间距、弹窗字段间距 | 12 / 8 |
| 侧栏分组间距、画布留白、弹层区块间距 | 24 |
| 弹窗内边距、摘要带内边距 | 16 |
| 空状态上下留白 | 48 |

**圆角**：基准规范无圆角规范，按指南「圆角」条整站派生两档 —— `4px`（按钮、输入框、标签、导航项、弹窗内控件）/ `8px`（卡片、弹窗、抽屉），标 derived，不逐处随手取。

**容器与断点**：基准规范断点 768 / 992 / 1200（`content/layout/tdesign.tencent.com--layout.md:116-119`），侧栏 <992 自动收起为 64px（`content/layout/tdesign.tencent.com--layout.md:103`）。

| 档 | 侧栏 | 看板 | 依据 |
| --- | --- | --- | --- |
| ≥1200 | 232px 展开 | 4 列 | `content/layout/tdesign.tencent.com--layout.md:97` |
| 992–1199 | 64px 收起 | 4 列 | `content/layout/tdesign.tencent.com--layout.md:101` |
| 768–991 | 64px 收起 | 2×2 | 本稿派生（4 列在 704px 可用宽度下每列 176px 过窄） |
| <768 | 抽屉（点菜单按钮出） | 单列纵向堆叠 | **偏离基准规范**：原文最小页面宽度 768px（`content/layout/tdesign.tencent.com--layout.md:133`），四档验收要求 320/375 不出横向滚动，按可访问性底线优先改为可用布局，记 derived |

**组件尺寸（基准规范无，派生成套）**：控件高 40px、小控件 32px、图标 16/20px、卡片 108–116px（实测）、看板列头 48px。触屏（≤767）统一 44px 命中区，对应 WCAG 2.5.5 的 44×44（`content/a11y/w3c--wcag-2.2.md:871`）；桌面 40px 满足 2.5.8 的 24×24（`content/a11y/w3c--wcag-2.2.md:907`）。

**阴影（基准规范无，派生四档）**：
- 卡片 hover：`0 2px 6px rgba(0,0,0,.06)`
- 下拉/搜索面板：`0 8px 28px rgba(0,0,0,.18)`
- 弹窗：`0 8px 28px rgba(0,0,0,.18)`
- 抽屉：`-8px 0 24px rgba(0,0,0,.12)`
- 遮罩：`rgba(0,0,0,.45)` 一档到底，不在弹层内叠第二层。

**发丝线**：1px（derived）。装饰分隔用 `--bgray-3`/`--gray-3`；承担控件边界的描边用 `--gray-7`（3.41:1 ≥ 3:1）。

---

## 6. 动效

基准规范有动效篇，取值不派生。

| 场景 | 时长 | 曲线 | 出处 |
| --- | --- | --- | --- |
| 按钮/导航/卡片 hover、tab 切换 | 200ms | `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:99`、`content/motion/tdesign.tencent.com--motion.md:111` |
| 弹窗入场（位移 + 遮罩淡入） | 240ms | `cubic-bezier(0,0,.15,1)`（入画） | `content/motion/tdesign.tencent.com--motion.md:100`、`content/motion/tdesign.tencent.com--motion.md:112` |
| 抽屉入场 | 280ms | `cubic-bezier(0,0,.15,1)` | `content/motion/tdesign.tencent.com--motion.md:101`、`content/motion/tdesign.tencent.com--motion.md:112` |
| 退出（弹窗/搜索关闭） | 200ms | 同上，退出比进场短 | 桌面端区间 200–600ms `content/motion/tdesign.tencent.com--motion.md:89` |
| 进度条宽度 | 280ms | `cubic-bezier(0,0,.15,1)` | 同上 |

缓动只用原文三条 token 曲线（`content/motion/tdesign.tencent.com--motion.md:111-113`），不自造贝塞尔。`--ease-in` 原文写作 `cubic-bezier(0.82,0,1,.9)`，本稿 CSS 记为 `cubic-bezier(.82,0,.9,1)`（数值等价写法，非新曲线）。
`prefers-reduced-motion: reduce` 时全部过渡压到 1ms（`content/patterns/ux-rules-checklist.md:583-585`）。
分档理由：弹出层属于「选择器、下拉菜单、抽屉、选项卡」档（`content/motion/tdesign.tencent.com--motion.md:101`），不做一值到底。

---

## 7. 设计点路由表

从 `points_by_task` 按场景筛，逐点读 `select` 选用标准决定取舍。

| 设计点 | 选用标准落点 | 落在页面哪里 |
| --- | --- | --- |
| `howto-ui-color-framework`（方法层） | 一个色相加深浅变体，hover 降饱和、选中降亮度 | 全站只用腾讯蓝一族；hover 走同族更浅档、选中走更亮档底 |
| `howto-visual-hierarchy`（方法层） | 字号最多 3 档、最大元素 ≤2、配色 2 主 2 辅 | 12/14/20 三档；20px 只有标题与完成率；色相数 = 蓝 + 4 个语义色 |
| `s17` 项目选型 | 中文产品 UI → TDesign | 见 §1 基准规范裁决 |
| `layout-density` | 密度是显式选择，靠内间距升降一档 | 看板列内 8/12，卡片 12 内边距，不加大容器 |
| `layout-alignment-skeleton` | 8 倍数双数组组合节奏 | 全站间距 4/8/12/16/24/32/48 |
| `patterns-search-filter` | 立即生效；收起时也要有已应用筛选指示；每类可一键清空 | ⌘K 边输边搜（结果数实时）；侧栏计数常驻；点「本周冲刺」即清空全部筛选 |
| `patterns-empty-onboarding` | 空状态整体替换内容，只给一个主行动 | 收件箱/无结果：图形 + 一句解释 + 唯一的「新建任务」 |
| `components-button-hierarchy` | 每屏一个 primary；secondary 只配取消 | 顶栏一个「新建任务」；弹窗内「创建任务」是独立 surface 的唯一 primary，「取消」为 ghost |
| `components-modal-dialog` | 事务型弹窗：打开聚焦首个输入、Tab 不出框、Esc 关、取消回滚 | 新建任务弹窗（`content/components/carbondesignsystem.com--modal-usage.md:293-302`、`content/components/carbondesignsystem.com--modal-usage.md:370-374`、`content/components/carbondesignsystem.com--modal-usage.md:398-399`） |
| `patterns-form-validation` | 提交时校验、错误摘要置顶并聚焦、字段错误紧贴、`Error:` 前缀 | 弹窗：标题前缀改 `document.title`，摘要 `tabindex="-1"` 接焦点，字段红框 + 文案（`content/patterns/govuk--validation.md:66-68`、`content/patterns/govuk--validation.md:80`） |
| `components-input-selection` | 下拉仅作最后手段 | 所属列、负责人、标签全用 radio/checkbox 片，不用 `<select>`（`content/components/govuk--select.md:55`） |
| `motion-duration` | 按场景分档，弹出层用慢档 | §6 |
| `a11y-focus-visibility` | `focus-visible` 才出环、页首跳转链接 | 全站 2px 蓝环 + 2px 偏移；`.skip` 链接 |
| `a11y-modal-focus-trap` | 焦点锁在框内、Esc 关、关闭归还焦点 | 弹窗 + 抽屉共用一段 trap 逻辑 |
| `principles-interaction-states` | hover/focus/active/disabled 全站统一，阴影按层级分 | 按钮四态、卡片 hover 抬 2px 阴影、弹层高层阴影 |
| `components-cards` | 卡片标题用 h3、整卡可读、reduced motion 停动效 | 卡内 `h3 > button.card-title`，整卡可点，动效已挂 reduced-motion 兜底 |
| `icons-spec` | 24 网格绘制、2px 描边、缩放到 16 交付 | 全部图标 `viewBox="0 0 24 24"`、`stroke-width="2"`，显示 16/20 |
| `patterns-states-feedback` | 禁用态不可点、读屏不读 | 完成列卡片推进按钮 `disabled` + 降档色 |

**看了但没采用**（避免为了凑点而加功能）：
- `patterns-loading`、`patterns-notification`：本地数据无异步、无推送，加了是假状态。
- `dataviz-chart-anatomy` / `layouts-dashboard-density`：本页只有一条完成进度，不构成图表，进度条按状态指示器处理。
- `brands-productivity`（Raycast/Notion 营销页气质）：那是营销页构成手法，工作台不搬。
- `components-nav-aids`、`components-table-tag`：无面包屑/分页/表格需求。

---

## 8. 交付自验（数字全部来自真实浏览器：Chrome，CDP 覆盖视口）

| 项 | 结果 |
| --- | --- |
| 横向溢出 320 | `scrollWidth 320 / clientWidth 320` ✅ |
| 横向溢出 375 | `375 / 375` ✅ |
| 横向溢出 768 | `768 / 768` ✅ |
| 横向溢出 1280 | `1280 / 1280` ✅ |
| 外部资源 | `performance.getEntriesByType('resource').length === 0` ✅（无 CDN、无外链字体/图片，图标全内联 SVG） |
| 行高普查 | 320：156 个含直接文本节点 / 0 违例；375：156 / 0；768：138 / 0；1280：158 / 0 ✅ |
| 正文对比度 | 卡片标题 `#1a1a1a` 压白 **17.40** |
| 次要文字 | 说明/日期 压白 **6.48**；页脚 **6.48**；未选中导航 `#666` **5.74** |
| 按钮文字 | 白字压 `#0052d9` **6.54**；hover `#003cab` **9.40** |
| 标签文字 | 5.69（逾期）– 6.33（研究），最低 **5.69** ≥ 4.5 |
| 禁用态 | `#999` 压白 **2.85**（禁用控件豁免，仅用于「已完成」卡片的推进按钮，禁用图标不承载信息） |
| 非文本 | 输入描边 **3.41**、进度填充对轨道 **5.34**、状态圆点 3.12/3.16/6.54/3.41、焦点环 **6.54**，均 ≥3 |
| 强调色面积 | 默认 1280 视图 **0.51%**；弹窗打开 **0.83%**（均 <5%） |

**交互实测（前后数字）**

| 交互 | 前 | 后 |
| --- | --- | --- |
| 视图筛选：本周冲刺 → 我负责的 | 12 张卡 / 3-3-2-4 | 3 张 / 1-1-0-1，完成 1/3 |
| → 已逾期 | 3 张 | 2 张 / 0-1-1-0 |
| → 收件箱 | 2 张 | 0 张，整块换成空状态（含 1 个主按钮） |
| → 回本周冲刺 | 0 张 | 12 张 / 3-3-2-4 复原 |
| 项目筛选「组件库 3.0」 | 12 张 / 33% | 4 张 / 25%（1-2-0-1） |
| 周期切「上周」 | 本周 12 张 / 33% | 上周 10 张 / 90%（0-1-0-9） |
| 新建任务·空标题提交 | 弹窗无错误 | 摘要「请修正 1 个问题 / 请输入任务标题」+ 焦点移到摘要 + 字段红框 + `document.title` 变「错误：新建任务 — SwimBoard」，卡片仍 12 |
| 新建任务·53 字标题 | 计数 53/48 变红 | 摘要「任务标题需在 48 个字符以内（当前 53 个字符）」，不拦输入，卡片仍 12 |
| 新建任务·合法提交（列=进行中） | 12 张 / 3-3-2-4 | 13 张 / 3-4-2-4，toast「已创建：…」 |
| 抽屉开合 | `hidden=true`，x=1280（屏外） | x=880、宽 400、遮罩 opacity 1、焦点在关闭按钮；8 次 Tab 后焦点仍在抽屉内 |
| 抽屉状态流转 进行中 → 完成 | 13 张 / 3-4-2-4 / 31% | 13 张 / 3-3-2-5 / 38%，toast「已从「进行中」移到「完成」」 |
| ⌘K 搜索 | 打开即 13 个结果（显示前 8） | 输入「结算」→ 1 个结果；「赵」→ 2 个；无结果时出空提示 |
| 复制站会摘要 | 「复制站会摘要」 | 授权后「已复制」+ toast，2s 复位；无焦点窗口下浏览器拒权 → toast「浏览器拒绝了剪贴板访问，请检查站点权限」（两态都实测） |
| 移动端侧栏 | `aria-expanded=false`，x=-283 | 点菜单 x=0、`aria-expanded=true`；点视图后关闭，卡片 12 → 3，无横向溢出 |

---

## 9. 回炉记录（第一版问题 → 改法 → 改后数字）

1. **隐藏层参与布局**：`.scrim`/`.drawer` 的 `display` 覆盖了 `[hidden]`，320 档 `scrollWidth 319 / clientWidth 305`（溢出 14px）。加 `[hidden]{display:none!important}` 后四档全部等宽。
2. **`font:inherit` 重置行高**：按钮上 `font:inherit` 把父级 `h3` 的行高绝对值继承下来，卡片标题 14px 字号却是 24.38px 行高，首测 156 个文本节点里 14 处违例。改成分项继承（`font-family/font-size/font-weight`）+ `h1,h2,h3{font-size:inherit}` 后违例归零。
3. **看板列被空状态吃掉**：首版列是静态 DOM，进收件箱后 `board.innerHTML` 被空状态替换，再切回本周只剩空状态（12 张卡全部消失）。改 `render()` 整块重建四列，往返切换 12→0→12 复原。
4. **rAF 加类在后台标签页冻结**：弹窗/抽屉打开后 `classList.add('is-open')` 挂在 `requestAnimationFrame` 里，后台标签不执行 → 弹层不出现。改成 `void el.offsetWidth` 强制重排后同步加类。
5. **复制按钮死信号**：首版只等 `clipboard.writeText` 的 promise，权限提示悬挂时按钮毫无反馈（实测点击后 label 与 toast 都不变）。改为 600ms 超时 + `execCommand` 兜底，失败给明确文案；实测两态都能落到可见结果。
6. **选中态太弱**：选中片底色 `#f2f3ff` 与白底差异过小，视觉上像 hover。换 `#d9e1ff`（蓝字压底 5.04 ≥ 4.5）并保留 1px 主色描边 + 内描边。
7. **第 4 档字号**：弹层标题 16px 破坏「3 档字号」。并入 20px 档，全站只剩 12/14/20。
8. **抽屉下半空**：首版抽屉只有 5 行元数据 + 状态按钮，820px 高度下内容仅 400px 出头，读起来像半成品。补「说明」（每张卡一句验收口径）与「活动」两条，区块顺序改为 说明 → 活动 → 更改状态（动作贴近底部），内容高度 739px，并给打开中的卡片加 2px 主色描边。
9. **小屏命中区**：375 档实测 28 个可点元素不足 44px。≤767 统一 `min-height:44px`（导航项、图标按钮、选项卡、新建按钮），剩 14 项为卡片标题按钮（30px 高，整卡命中区 116px）与禁用的「+」。
10. **桌面端汉堡是死控件**：≥768 侧栏常驻，点菜单按钮只加了个不起作用的类。改为 ≥768 隐藏（`#menu-btn{display:none}`），只在 <768 作为抽屉入口出现。
11. **周期与到期日自相矛盾**：头部写「第 45 周 11.03–11.09」，但三张卡到期 11-10 / 11-11 / 11-12 落在周外。改成两周冲刺「第 45–46 周 11.03–11.16」，四列到期日全部落在窗口内，上周数据（10-27…11-01）同样自洽。
12. **页脚声明不实**：原写「数据存于本机浏览器」，但刷新即重置（数据在内存里）。改为「示例数据 · 不上传服务端」。

---

## 10. 超出基准规范的数值清单

| 维度 | 取值 | 处理 | 理由 |
| --- | --- | --- | --- |
| 圆角 | 4px / 8px 两档 | derived | 库内无通用 radius 规范，整站成套自定 |
| 控件高度 | 40px（桌面）/ 44px（≤767） | derived | 基准规范无组件尺寸；44 对齐 WCAG 2.5.5 |
| 小控件 | 32px（列头 +、卡片推进） | derived | 同上，与 40 成一档差 |
| 图标显示尺寸 | 16 / 20px | 原文有 16/20/24/32（`content/icons/tdesign.tencent.com--icon.md:38`），选用其中两档 | 非派生，取原文档位 |
| 卡片高度 | 108px（单行标题，1280 档实测）/ 116px（标题折行，375 档实测） | derived | 由内边距 12 + 三行内容自然得出 |
| 看板列宽 | 等分（`minmax(0,1fr)`） | derived | 基准规范栅格是 12 栏页面栅格，不覆盖工作台列宽 |
| 阴影 | 四档（见 §5） | derived | 基准规范无 elevation 篇 |
| 遮罩 | `rgba(0,0,0,.45)` | derived | 指南兜底档 |
| 发丝线宽 | 1px | derived | 基准规范只给分隔色 |
| <768 布局 | 抽屉侧栏 + 单列堆叠 | derived（**偏离**基准规范最小宽 768） | 四档验收与可访问性底线优先 |
| 768–991 看板 | 2×2 | derived | 4 列在 704px 下过窄 |
| 卡片 hover 抬升 | 2px 阴影 + 描边变蓝-3 | derived | 交互反馈，取「成功反馈是信息不是装饰」原则（`content/principles/polaris.shopify.com--interaction-states.md:40`） |
| 行程/触控 | 44px | 指南兜底 + WCAG | `content/a11y/w3c--wcag-2.2.md:871` |
| 数字等距 | `tabular-nums` | 降级 | 原文点名的 TCloud Number 零外链拿不到（`content/type/tdesign.tencent.com--fonts.md:37`） |
| 遮罩动画 | 240ms | 原文档位内 | 用 `@duration-desktop-moderate`（`content/motion/tdesign.tencent.com--motion.md:100`），不新造 |
