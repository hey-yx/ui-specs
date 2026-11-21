# SwimBoard · 决策与取值记录

本文件中的实测来自子代理自验。主会话复验见 `../VERIFIED.md`。

## 0. 基准规范

基准规范：TDesign（腾讯），选型行 `project-tdesign`（指南「项目选型方案」：中文产品 UI / 中后台 / 工具 / 协作）。框架按需求文件 `framework: vue` 走 `tdesign-vue-next`，版本与 peer 现场核对，见第 7 节。
一个项目只认这一套数值；其余来源只取原则（方法层、无障碍、文案规范），带数值的引用一律落在这套文件里，或按「基准规范缺口与派生」回源并标 derived。

## 1. 设计前提

- 产品：SwimBoard，四人产品设计组的周任务看板（演示项目，数据虚构，页内已标注）。
- 谁在用：组内设计与研究同学，每天打开就是本周冲刺；不看报表，只看「哪件事该我动」。
- 一条任务链（页面按这条链组织，不做无关区块）：
  1. 打开本周冲刺 → 2. 按成员或状态找任务 → 3. 认领未分配任务 → 4. 推进到下一状态 → 5. 列表与计数同步。
- 状态模型（互斥、覆盖全部数据，不靠文案打补丁）：状态只有四个值 `待开始 / 进行中 / 待验收 / 已完成`；认领人是另一条轴（未认领 / 四个成员）。「未认领」不是状态，是认领人为空；汇总里的「未认领 2 项」只数认领人这条轴，不与状态混用。

## 2. 视觉方向

- paper band：浅色（页面底用的是中性浅灰，内容面纯白），不是深色后台壳。
- 密度：高密度任务面；卡片不做大留白，列内 12 的间距，卡内 12 的内边距。
- 页面壳：顶部导航布局（内容为主、导航仅一条），不做侧栏。依据当时读的 TDesign 中后台框架篇：「功能模块少、主要操作区在内容区时用上下布局」；该篇已在 2026-11-15 从库中移除，结构改由 Hallmark 按产品动作定。
- 首屏落点：本周冲刺带 + 四列列头 + 前两张可行动卡片；主行动是顶栏「新建任务」与每张卡的下一步按钮，不放 hero、不放 KPI 三连、不放浏览器窗框。
- 强调色占比：橙色只出现在主按钮、行内下一步按钮、当前步骤轨、焦点环和「本周冲刺」小标；面积约 5%，其余是中性灰与白。

## 3. 结构决策（Hallmark 三件 + 版型原型）

Hallmark 三件（批次临时分派，本轮照用）：

- macrostructure：Workbench（05）。Hallmark 原文是「产品截图是主内容，页面是用起来的样子」，这里把这条规则落到产品自身：页面就是工作台本身，没有产品介绍层；标题保持小号功能性（周次 24，不喊口号），区块靠间距与分隔线分段，不做截图巡览和粘性 CTA（引用 `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:59`：对比变化不超过三档，全都强调就等于没有强调）。
- nav：N13 Inline ⌘K search pill。可见的搜索胶囊常驻顶栏，⌘K / Ctrl K 打开聚光面板，面板内含分组结果、↑↓ 选择、↵ 定位、esc 关闭、焦点锁在面板内；窄屏胶囊收成图标，面板变全屏 sheet。
- footer：Ft4 Dense typographic。页脚只有一行紧凑注记（演示项目、团队人数、本周项数、数据为虚构示例、生成日期），不做四列链接或营销收尾。
- 强调色：TDesign 官方色板 Orange7 #954500（`content/color/tdesign.tencent.com--color.md:72`）。选它的理由：橙与批内另一站的绿色不同色系；比 Orange5 深两档，白字压得住（6.71:1，Orange5 只有 3.12:1，`content/color/tdesign.tencent.com--color.md:64`）；同一色相在库里有 10 级色阶，hover / active / 浅底都能在同族里取，不用跨源借色。

版型原型（区块顺序，与 macrostructure 分开写）：全局栏 → 冲刺带（标题 + 汇总 + 筛选）→ 四列看板 / 窄屏紧凑列表 → 一行页脚注记。密度取舍参考数据密集版型「筛选条常驻顶部、主体最大面积给数据」（`content/layouts/layout--dashboard-data-dense-dashboard.md:21`，只借区块顺序，不借它的配色与阴影数值）。

第二方案（只留线框，本轮不实现）：

```
┌──────────────────────────────────────────────────────────┐
│ SwimBoard                    [ ⌘K 搜任务 ]      [新建任务] │ N13
├──────────┬───────────────────────────────────────────────┤
│ 待开始 2 │  第 46 周 · 11.9–11.15      [成员▾] [状态▾]   │
│ 进行中 3 │  ┌────────┬────────┬────────┬────────┐         │ N3 侧栏
│ 待验收 2 │  │ 任务卡 │ 任务卡 │ 任务卡 │ 任务卡 │         │ Index-First 13
│ 已完成 3 │  └────────┴────────┴────────┴────────┘         │
├──────────┴───────────────────────────────────────────────┤
│ SwimBoard · 10 项 · 演示数据                              │ Ft2 单行
└──────────────────────────────────────────────────────────┘
```

淘汰理由（三条，都指向实测代价而不是偏好）：
1. N3 侧栏占 232（`content/layout/tdesign.tencent.com--layout.md:120`），992 以下要收成 64 或抽屉（`content/layout/tdesign.tencent.com--layout.md:132`）；375 上首屏会被导航挤掉一条以上完整任务，和「首屏至少两条可行动任务」直接冲突。
2. 侧栏里的状态计数与看板列头计数是同一份数据的两个显示位；一旦筛选，两处都要同步，我这边已有列头计数 + 冲刺带汇总，再叠一层就是重复信息。
3. 强调色若跟着库默认取 Blue7，等于没做选色决策；Index-First 的编号侧栏也和「按成员/状态找任务」无关。

## 4. 色彩

三档层级（先定层级再取色值：系统色 → 主题色 → 状态色）：

- 系统色：TDesign 官方色板（蓝/红/橙/绿/中性/扩展），本页只用其中的橙色阶、中性阶与红绿语义阶。
- 主题色（绑定界面角色）：强调 `#954500`；悬停 `#713300`；按下 `#532300`；浅底 `#fff1e9`；浅底描边 `#ffd9c2`。
- 状态色：成功文字 `#006c45`（浅底 `#e3f9e9`）；警告/待处理 `#954500`（浅底 `#fff1e9`）；错误 `#ad352f`（浅底 `#fff0ed`）。
- 主辅与面积：主色橙 ≈5% 面积，中性灰白承担 90% 以上；没有第二色相，语义色只在状态标签处出现。
- 深浅变体的推法按方法层：变深时降亮度、升饱和，hover 是更深的一档，不是换色相（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:208`、`:238`；选中态只降亮度这一条见 `:242`）。库默认把 hover 指向 brand-6（更浅一档，白字 4.52:1 压线），本页把它映射到 brand-8，同族加深，对比度升到 9.4:1。

取值表（用途 | 值 | 原文引用 | 实测）：

| 用途 | 值 | 原文引用 | 实测 |
| --- | --- | --- | --- |
| 强调色（主按钮底、当前步骤、焦点环） | #954500 | content/color/tdesign.tencent.com--color.md:72 | 白字 6.71:1 |
| 强调色 hover / 按下 | #713300 / #532300 | content/color/tdesign.tencent.com--color.md:73,74 | 白字 9.4:1 / 11.9:1 |
| 强调浅底 / 浅底描边 | #fff1e9 / #ffd9c2 | content/color/tdesign.tencent.com--color.md:66,67 | 橙字 6.28:1 |
| 库默认 hover 档（未采用，只记原因） | #be5a00 | content/color/tdesign.tencent.com--color.md:71 | 白字 4.52:1 |
| 成功文字 / 浅底 | #006c45 / #e3f9e9 | content/color/tdesign.tencent.com--color.md:84,78 | 5.88:1 |
| 错误文字 / 浅底 | #ad352f / #fff0ed | content/color/tdesign.tencent.com--color.md:60,54 | 5.69:1 |
| 页面底 / 内容面 | #f3f3f3 / #ffffff | content/color/tdesign.tencent.com--color.md:95,93 | 次要文字 5.56:1 |
| 分隔线（装饰，不承担边界） | #e8e8e8 | content/color/tdesign.tencent.com--color.md:97 | 1.23:1，仅装饰 |
| 控件边界（输入框、选择器、标签描边） | #8b8b8b | content/color/tdesign.tencent.com--color.md:101 | 3.41:1，过非文本 3:1 |
| 三级文字（元信息、时间） | #5e5e5e | content/color/tdesign.tencent.com--color.md:103 | 6.49:1 |
| 进度轨已过档 | #393939 | content/color/tdesign.tencent.com--color.md:105 | 12.6:1 |
| 正文 / 次级文字 | rgba(0,0,0,.9) / rgba(0,0,0,.6) | content/type/tdesign.tencent.com--fonts.md:104,105 | 15.8:1 / 5.7:1 |

文字色的缺口处理：库的字色 token 第三档是 40% 黑（`content/type/tdesign.tencent.com--fonts.md:106`），压白底实测约 2.9:1，不能当正文；按「色阶当文字」这条缺口规则换同族更深的中性档 #5e5e5e，不跨源借色。占位文字同样按正文算，映射成 #5e5e5e（库默认的 40% 黑不达标）。边框同理：库默认 level-1 是 Gray3，压白底 1.23:1，只配做分隔线；控件边界改用 Gray7 3.41:1。

## 5. 字阶与行高

全站只用三档字号（`content/type/tdesign.tencent.com--fonts.md:53,54,57`），档位取自 TDesign 第一/第二字阶表，不自造 13/15/18 这类表外值。层级靠字号 + 字重 + 字色叠加，不只靠颜色（`content/type/tdesign.tencent.com--fonts.md:87`：只有 400 与 600 两档字重）。

| 用途 | 字号 | 原文引用 |
| --- | --- | --- |
| 小档：元信息、时间、计数、页脚注记、键帽 | 12px | content/type/tdesign.tencent.com--fonts.md:53 |
| 中档：正文、任务标题、按钮、列头、选项 | 14px | content/type/tdesign.tencent.com--fonts.md:54 |
| 大档：冲刺标题（全页仅此一处大字） | 24px | content/type/tdesign.tencent.com--fonts.md:57 |

- 行高逐元素按「字号 + 8」推导：12 → 20、14 → 22、24 → 32（derived；公式见 `content/type/tdesign.tencent.com--fonts.md:69`，不在元素上继承固定行高，避免顶到组件内部）。浏览器普查 0 违例（第 10 节）。
- 字重只有 400 与 600（`content/type/tdesign.tencent.com--fonts.md:87`）。标题 600，正文 400。
- 字体族用 TDesign 的系统字体降级链（`content/type/tdesign.tencent.com--fonts.md:35`），零外部字体请求；编号与页脚注记用系统等宽字族，只做对齐用，不当数字字体（TCloud Number 拿不到，按缺口规则降级为 tabular-nums 近似）。
- 12 小档占可见文本节点：1280 下 26.4%，375 下 23.9%（三成以内）。档位只有 12 / 14 / 24 三档，实测无第四档（弹窗标题原为库默认 16，已并入中档）。

## 6. 间距 / 圆角 / 控件 / 阴影 / 遮罩

| 项目 | 值 | 出处或派生说明 |
| --- | --- | --- |
| 间距基数 | 8px | content/layout/tdesign.tencent.com--layout.md:78 |
| 间距档位 | 4 / 8 / 12 / 16 / 24 / 32 / 48 | content/layout/tdesign.tencent.com--layout.md:138 |
| 栏间槽宽 | 16px | content/layout/tdesign.tencent.com--layout.md:92 |
| 页面左右安全边距 | 24px | content/layout/tdesign.tencent.com--layout.md:96 |
| 断点 768 / 992 / 1200 | 992 作看板转列表的分界 | content/layout/tdesign.tencent.com--layout.md:156,157,158 |
| 圆角 4 / 8 | 4 用于卡与控件，8 用于弹窗与操作条 | derived：库无通用 radius 规范，按缺口规则成套派生两档 |
| 控件高度 32 | 按钮、选择器、输入框同档 | derived：GAP_RULES「组件尺寸」，全站一套；触控设备抬到 44 |
| 触控目标 44 | 粗指针与窄屏下的按钮、选择器、关闭键 | derived：GAP_RULES「触控目标与焦点环」 |
| 焦点环 | 2px 实线 + 2px 偏移，强调色 | derived：同上；实测非文本对比 3.41:1 以上 |
| 弹层阴影 | 0 24px 48px -24px rgba(0,0,0,.5) | derived：GAP_RULES「组件阴影与底边」，自建面板一套 |
| 遮罩 | rgba(0,0,0,.6)，全站一档 | 与 TDesign 弹窗官方遮罩同值（实测 computed），自建搜索面板共用 |
| 弹窗顶部最小留白 | 48px | content/components/tdesign.tencent.com--dialog.md:97 |
| 正文行长 | 卡片标题两行封顶，弹窗正文不超过 480 宽 | derived：GAP_RULES「正文行长」 |

纵向间距只由一层给：卡内用 gap 一处给，列表用 gap 一处给，不在子元素上再写 margin（`content/layout/every-layout.dev--stack.md:32`：给元素写固定 margin 会和父级 padding 叠成双份留白；`:44` 的相邻兄弟选择器只给「前面有元素」的那一个加间距，是同一思路在 CSS 里的落地）。本页用 flex + gap 实现同一目标，没有在子元素上散写 margin。

## 7. 组件库接入（stacks 站）

版本与 peer 现场核对（2026-11-14 从官方 registry 读）：

- `tdesign-vue-next@1.20.11`，`peerDependencies` 只有 `vue: >=3.1.0`；`vue` 最新稳定 `3.5.45`（registry dist-tags `latest`），故锁 `vue@3.5.45` + `tdesign-vue-next@1.20.11`。
- 官方全量 CSS：`https://cdn.jsdelivr.net/npm/tdesign-vue-next@1.20.11/dist/tdesign.css`（实测 200，约 507KB，含 `--td-*` 主题变量与 `.t-popup__content` 白底阴影），放在自定义样式之前。
- import map：`vue` → `https://esm.sh/vue@3.5.45/dist/vue.esm-browser.prod.js`；`tdesign-vue-next` → `https://esm.sh/tdesign-vue-next@1.20.11?bundle&external=vue`。实测 bundle 内部对 `vue` 是裸导入（399 处），所以 import map 必须映射 `vue` 本体，映射子路径无效。
- 真引的组件：Button、Select、Input、Dialog、Tag（`t-button` / `t-select` / `t-input` / `t-dialog` / `t-tag`）。库没有的：任务卡、四列看板、状态进度轨、⌘K 聚光面板、动作回执条 ， 这五件按本库组件模式与数值手写，同类组件只有一种实现（没有既用 t-tag 又自绘第二套状态标签）。
- 库形态与版型冲突的：N13 要求面板从触发位置长出、↑↓ 选择、焦点锁在面板内，TDesign 没有聚光面板件；用自建浮层，面板内只放一个 `t-input` 做输入，键位与焦点锁自己实现。弹窗仍用 `t-dialog`（新建任务），不另写第二套对话框。

主题变量映射（不只主色，成功/错误/警告文字、边框、字阶、圆角都进）：

| 变量 | 本页值 | 理由 |
| --- | --- | --- |
| `--td-brand-color-1..10` | Orange1..Orange10 十级阶 | 用同一色相整套替换，库内 hover/focus/浅底跟着走（`content/color/tdesign.tencent.com--color.md:66` 到 `:75`） |
| `--td-brand-color-hover` | brand-8 #713300 | 库默认指 brand-6，白字 4.52:1 压线 |
| `--td-brand-color-active` | brand-9 #532300 | 同族再加深一档 |
| `--td-success-color` | #006c45 | 库默认 Green5 作文字 3.16:1 |
| `--td-warning-color` | #954500 | 库默认 Orange5 3.12:1 |
| `--td-error-color` | #ad352f | 库默认 Red6 4.32:1，小字不达 AA |
| `--td-text-color-primary/secondary/placeholder` | 90% 黑 / 60% 黑 / #5e5e5e | 占位与正文同标准 |
| `--td-border-level-1/2-color` | #8b8b8b | 库默认 Gray3 只够做分隔线 |
| `--td-radius-default/medium/large` | 4 / 4 / 8 | 与派生圆角对齐 |
| `--td-font-family` | TDesign 系统字族 | 与正文同族，不混第二套字体 |
| `--td-bg-color-page` | #f3f3f3 | 页面底与卡片白拉开一层 |

组件计算样式实测（1280，浏览器 computed，不是推断）：

- 主按钮：32 高、底色 rgb(149,69,0)、白字、圆角 4、字号 14、行高 22；文字上下留白 5 / 5。
- 行内下一步（outline 主色）：32 高、白底、边框 rgb(149,69,0)、文字 rgb(149,69,0)，文字上下留白 5 / 5。
- 选择器：内层输入框 32 高、白底、1px 边框 rgb(139,139,139)、圆角 4；值文字上下留白 5 / 5；下拉弹层 `.t-popup__content` 白底 + 阴影，不是透明层。
- 标签（类型）：库 `varient=light` 默认浅灰底 #f3f3f3、文字 90% 黑、圆角 4，14px。
- 弹窗：宽 480、白底、圆角 8、遮罩 rgba(0,0,0,.6)；页脚两个按钮走同一档 32 高。
- 触控：粗指针或 991 以下，按钮与选择器根容器 min-height 44（只动根容器，不压库内部子件）。

## 8. 动效清单

动作来自配方点，时长与曲线来自 TDesign（两笔账分开记，`content/motion/ui-specs--motion-implementation.md:84`）。
TDesign 桌面端时长：微观/淡入淡出 200ms，列表点击/下拉 240ms，抽屉/消息 280ms（`content/motion/tdesign.tencent.com--motion.md:101,102,103`）；缓动 标准 `cubic-bezier(.38,0,.24,1)`、入画 `cubic-bezier(0,0,.15,1)`、出画 `cubic-bezier(0.82,0,1,.9)`（`content/motion/tdesign.tencent.com--motion.md:115,116,117`）。

| 组件 | 触发 | 配方 | 动的属性 | 起 → 止 | 进 / 出 | 实测 |
| --- | --- | --- | --- | --- | --- | --- |
| 任务卡（新建、跨列移动） | 认领/推进/新建 | 就地变化（文本切换同族配方：位移 + 模糊 + 透明度） | opacity、transform | 0 / 下移 8 → 1 / 0 | 240 / ， | `getAnimations()` 首帧 currentTime 76ms、opacity 0.69，240ms 后 1，class 500ms 后摘掉 |
| 搜索面板 | ⌘K / 点击胶囊 | 浮层（下拉同族：从触发件长出、缩放 0.97） | opacity、transform、visibility | 0 / 0.97 / −8 → 1 / 1 / 0 | 240 / 200 | 开：opacity 0.888 中间帧、面板 scale 0.9966；关：esc 后 opacity→0、visibility→hidden |
| 动作回执条 | 认领/推进/新建后 | 反馈条（下缘浮起） | opacity、transform、visibility | 0 / +16 → 1 / 0 | 240 / 200 | 开：首帧 opacity 0、translateY 16px；关：首帧 opacity 1，200ms 后 hidden |
| 下一步按钮 / 选择器 | 悬停、按下 | 库自带状态过渡 | background-color、border-color | 库默认 | 库默认 | 底色与边框 computed 有变化，无布局位移 |

- 出入场不对称：进场比出场长（240 对 200），与「进场比退出稍长」一致（`content/motion/tdesign.tencent.com--motion.md:82`：桌面端 200 起算）。
- 配方只取属性、起止态与顺序，不抄毫秒：文本切换配方默认 200ms / 8px / 2px 模糊（`content/motion/transitions.dev--04-text-states-swap.md:39` 到 `:42`，derived：配方默认值，毫秒改用 TDesign），下拉配方默认 0.97 起、250/150（`content/motion/transitions.dev--05-menu-dropdown.md:42` 到 `:46`，derived：同上）。
- 浮层不用 `display:none` 直切：面板与回执条常驻 DOM，用 opacity + visibility + transform 过渡，移除隐藏后第一帧能看到起始值（`content/motion/ui-specs--motion-implementation.md:85`）。
- 减弱动效：`prefers-reduced-motion: reduce` 下把所有过渡与动画压到瞬时（1 毫秒档），功能结果照常发生（`content/motion/ui-specs--motion-implementation.md:90`）。
- 首次加载不做顺序入场（`content/motion/tdesign.tencent.com--motion.md:153`）：页面直接呈现，只有用户动作后的变化才动。

## 9. 设计点路由（读过的原文）

方法层必读四篇（先读再取值）：

- howto-ui-color-framework → `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md`（全文 400 行；取 208 / 238 / 242 三条变体规则）、`content/howto/nngroup.com--visual-hierarchy-ux-definition.md`。
- howto-visual-hierarchy → `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:59,76,77`（三档对比、三档字号、大字元素最多两个）、`content/howto/awwwards.com--understanding-web-ui-visual-hierarchy.md:48`（F 型扫描：文字密集页先竖扫左侧再横读，本页据此把列头与卡片标题压在同一左轴）。
- layout-intrinsic-patterns → `content/layout/every-layout.dev--stack.md:32,44`（间距由一层给）、`content/layout/every-layout.dev--switcher.md:61`（按容器宽度在横排与换行间切换，对应看板 992 下转紧凑列表）。
- motion-implementation → `content/motion/ui-specs--motion-implementation.md`（全文 98 行：24 处曲线统计、28 出入场毫秒、84 至 90 落地顺序与验收）。

场景点（按 points_by_task 反查，读 1 至 2 篇）：

- s3 后台与数据面板 → `layouts-dashboard-density`（`content/layouts/layout--dashboard-data-dense-dashboard.md:21`，只借区块顺序）。
- s5 组件设计 → `components-button-hierarchy`（每屏一个 primary；次级只配取消/返回；行内动作按轻量用 outline 与 text）。
- s19 状态与反馈 → `patterns-feedback-criteria`（`content/patterns/ui-specs--test-walkthrough.md:35` 等待分档；`:47` 底线复测数值），`motion-inplace`、`motion-overlays`。
- s13 文案写作 → `markdown-cn-copywriting`（`content/markdown/github.com--chinese-copywriting-guidelines.md:27,44,55,64`：中英之间、中文与数字之间、数字与单位之间加空格，度数与百分比不加）。
- s9 无障碍 → `a11y-focus-visibility`（`content/a11y/web.dev--a11y-focus.md:108` 跳转链接、`:154` 到 `:156` 可见焦点、`:180` 不要清掉 outline）、`a11y-contrast-threshold`（`content/a11y/web.dev--a11y-color-contrast.md:155` 到 `:160` 正文 4.5:1、大字与非文本 3:1，信息不靠颜色单独传达）。
- s16 评审底线 → `patterns-review-checklist`（按清单逐条过，见 FINDINGS 逐题自答）。

## 10. 交互实测（浏览器真跑，非推算）

桌面 1280×900：

| 动作 | 前 | 后 |
| --- | --- | --- |
| 初始 | ， | 列计数 2 / 3 / 2 / 3，共 10 项，未认领 2 |
| 认领 SB-128 | 按钮「认领」，未认领 2 | 按钮变「开始」，未认领 1，回执条「已认领…它现在算你的活儿」+ 撤销 |
| 推进 SB-128 | 列计数 2 / 3 / 2 / 3 | 1 / 4 / 2 / 3，卡片落到「进行中」，按钮变「提交验收」 |
| 状态筛选=进行中 | 10 张卡 | 列计数 0 / 4 / 0 / 0，4 张卡 |
| 筛选下推进 SB-128 | 进行中 4 张 | 进行中 3 张，卡片离场，回执条「已移到待验收，当前筛选里看不到它了」+「切到待验收」 |
| 点回执条动作 | 筛选=进行中 | 筛选=待验收，列计数 0 / 0 / 3 / 0，SB-128 可见 |
| 成员筛选=赵岚 | 10 张卡 | 2 张卡（SB-119、SB-112） |
| ⌘K 输入 SB-117 | 面板 10 条、四个分组 | 1 条结果 |
| ↵ 定位 | 面板开 | 面板关，SB-117 高亮，焦点落到该卡 |
| 新建任务（空标题提交） | 弹窗 480×360 | 弹窗不关，输入框红框 + role=alert 提示，高度仍 360 |
| 打字 | 有错误提示 | 提示立即撤掉，红框消失 |
| 新建任务（填标题提交） | 共 10 项，待开始 2 | 共 11 项，待开始 3，SB-133 出现，弹窗关闭 |

窄屏 375×667：

- 首屏完整任务 5 条，其中 4 条带可执行按钮（认领 / 提交验收 / 标记完成）；行高 72，未超 80；按钮 44，首行按钮顶边 y=263。
- 认领 → 推进 真跑通过：SB-124「提交验收」→ 待验收 →「标记完成」→ 已完成，列表顺序与计数同步。
- ⌘K 面板在 375 下变全屏 sheet（375×667、圆角 0），底部键位提示隐藏，右上角 44 的关闭键可用，关闭后页面滚动恢复。
- 新建弹窗 327 宽、左右各 24，单列字段，按钮在弹窗内可点。

溢出与度量：320 / 375 / 768 / 1280 四档 `documentElement.scrollWidth === clientWidth`；行高普查 0 违例（1280 下 87 个可见文本节点，375 下 46 个）；可见文本对比度最低 5.56:1（1280 全扫，0 处不达 AA）。

## 11. 回炉记录

| 问题（实测） | 改法 | 依据 |
| --- | --- | --- |
| 筛选区「筛选」二字被挤成竖排，两个下拉的实际宽度不一致（内层 168 被外层 180 包着，第二个外层 140 装不下内层 168） | 尺寸写到组件根（`.t-select__wrap`），内层 100%，标签不换行；两个下拉等宽 168 | 组件尺寸只在根容器上给，不压库内部 |
| 375 下两个下拉各被撑到 198，总宽 404 溢出行宽（被 `overflow-x: clip` 藏住） | 栅格列改 `minmax(0,1fr)`，子项 `min-width: 0` | Hallmark gate 34/50：溢出不能靠裁切掩盖 |
| 375 标题「第 46 周 · 11 月 9 日，11 月 15 日」把「日」字单独挤到第二行 | 标题改成「第 46 周冲刺」，日期区间移到眉标 | 点击/标题不在窄屏断行；日期是次要信息 |
| 12 小档占文本节点 69%，远超三成 | 卡片编号、元信息、时间、列计数、页脚合并回中档；值只在 12 用于计数、键帽、眉标、页脚注记 | 12px 占比是告警项，靠调整层级消化，不自造档位 |
| 卡片底部左边按钮、右边「某某在推进」，无操作时整行缺失，三套底部结构 | 统一成「日期两行 + 右侧一个动作」的固定脚区，删掉重复的人名 | 反馈要可预期；同一卡片只有一种结构 |
| 弹窗页脚按钮不渲染（`:footer="false"` 把插槽盖掉） | 去掉该属性，页脚用插槽 | 组件属性与插槽冲突，按官方行为改 |
| Esc 关不掉搜索面板（把 keydown 挂在库输入组件上，拿到的是组件自定义事件不是原生键盘事件） | 键盘处理挂到 window，面板开着时优先处理 ↑↓ / ↵ / esc / Tab | 动效与键盘都要能真跑，不能只看代码 |
| 桌面与窄屏两份 DOM 同时存在，`[data-task]` 选到的是隐藏那份 | 两份按 `v-if` 只渲染一份 | 同一屏只有一个可交互副本 |

## 12. 命名

- 工作名 SwimBoard（需求文件给的名字，本轮不改）。
- 碰撞检索现场结论（由主会话统一留证）：英国有 SWIMBOARD LIMITED（Companies House 02622540，建筑企业），水上运动品类有 Swimboard 用法；未检索到同名任务看板产品。
- 因此：本轮沿用案例工作名，不声明品牌唯一性，也不声明商标可用；页内不出现「®」「™」或「独家」这类表述。

## 13. 已知局限

见 FINDINGS 的「已知局限」：纯前端演示数据、无后端与多用户、外部 CDN 依赖、错误提示未做 aria-describedby 关联、弹窗遮罩与自建面板共用一档但圆角来源不同等。
