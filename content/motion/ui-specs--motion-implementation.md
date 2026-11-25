---
title: "动效落地：33 条组件过渡的取值与实现"
source: https://github.com/hey-yx/ui-specs
section: motion
tag: "方法"
fetched: 2026-11-12
status: full
id: motion-ui-specs-implementation
publisher: "UISpecs 本库原创"
---

# 动效落地：33 条组件过渡的取值与实现

> 来源：[本库原创](https://github.com/hey-yx/ui-specs)

---

库里的 33 条组件过渡配方来自 transitions.dev，每篇是一段可参考的 CSS 与 React 代码，带一套可调的默认值。代码是参考对象：照它的属性、起止状态与顺序，按本项目的类名、结构和基准规范重写，不整段抄。这篇把它们摊开：默认值集中在哪几条曲线上、入场与出场怎么不对称、哪些属性可以动、浮层为什么用 `hidden` 切换就没有动画、验收时怎么证明过渡真的在跑。具体动作仍回各配方原文取，本文只给规律与落地顺序。

## 一、取值规律

### 曲线

33 条配方共有 31 处 ease 默认值是 `cubic-bezier(0.22, 1, 0.36, 1)`，入场与出场共用一条曲线也能读顺，因为位移与缩放幅度小。回弹只出现在需要「落定」感的动作：数字滚动 `cubic-bezier(0.34, 1.45, 0.64, 1)`、开关 `cubic-bezier(0.34, 1.35, 0.64, 1)`、点赞 `cubic-bezier(0.34, 1.96, 0.64, 1)`、头像组回弹 `cubic-bezier(0.34, 3.85, 0.64, 1)`。线性只给循环动画（微光扫过、矩阵点阵），循环没有终点，缓动只会让它忽快忽慢。

### 时长

浮层类入场 250 到 400ms，出场 150 到 250ms：菜单 250ms 进、150ms 出，弹窗 250ms 进、150ms 出，toast 350ms 进、250ms 出，横幅堆叠 350ms 进、250ms 出，面板 400ms 进、350ms 出。工具提示是反向例外，150ms 进、50ms 出，因为它跟着指针移动，慢了会拖。

微交互 150 到 200ms：勾选框底色 150ms、勾线 350ms，文本切换 200ms，图标交换 200ms，标签页滑块 250ms。

庆祝与序列动作 450 到 600ms：成功勾 550ms，点赞粒子 600ms，数字滚动 500ms。抖动是分段短脉冲，正向 80ms、反向 60ms，回正 280ms。

循环动画 1000 到 2000ms：微光 2000ms，骨架脉冲 1000ms。

### 位移、缩放与模糊

位移按容器大小分档：浮层 8 到 16px，页面切换 8px，面板 100px，文本行 8 到 12px，抖动 6px。缩放只做「刚出现」的暗示：浮层 0.96 到 0.99，图标从 0.25 到 1，数字轮两侧 0.7、中间 0.9。模糊用来遮住过渡中的形变，常用 2px，文本逐行入场 3px，成功勾从 10px 收到 0。

### 交错

多处同时变化要错开：文本行 40ms，数字每一位 70ms，滚轮每一位 90ms。交错只给「同一个动作拆成多份」的场景，普通组件不要加。

## 二、33 条配方速查

| 配方 | 动的属性 | 入场 / 出场 | 关键默认值 | 出处 |
| --- | --- | --- | --- | --- |
| 卡片尺寸 | width, height | 300ms / 300ms | 300ms | `content/motion/transitions.dev--01-card-resize.md:42` |
| 数字滚动 | transform, opacity, filter | 500ms | 8px、70ms 交错、2px、回弹曲线 | `content/motion/transitions.dev--02-number-pop-in.md:58` |
| 通知徽标 | transform, opacity, filter | 260 / 500 / 400ms，出场 180ms | 位移 -8.2 / 12.4px、2px | `content/motion/transitions.dev--03-notification-badge.md:57` |
| 文本切换 | transform, opacity, filter | 200ms | 8px、2px、ease-out | `content/motion/transitions.dev--04-text-states-swap.md:47` |
| 菜单下拉 | transform, opacity | 250ms / 150ms | 0.97 起、关闭 0.99 | `content/motion/transitions.dev--05-menu-dropdown.md:51` |
| 弹窗 | transform, opacity | 250ms / 150ms | 0.96 | `content/motion/transitions.dev--06-modal.md:46` |
| 面板展开 | transform, opacity, filter | 400ms / 350ms | 100px、2px | `content/motion/transitions.dev--07-panel-reveal.md:52` |
| 页面对切 | transform, opacity, filter | 200ms / 200ms | 8px、3px | `content/motion/transitions.dev--08-page-side-by-side.md:51` |
| 图标交换 | transform, opacity, filter | 200ms | 0.25 到 1、2px | `content/motion/transitions.dev--09-icon-swap.md:47` |
| 成功勾 | opacity, rotate, translateY, filter, stroke | 550 / 450 / 500ms，勾线延迟 80ms | 模糊 10px 到 0 | `content/motion/transitions.dev--10-success-check.md:68` |
| 头像组悬停 | transform | 320ms | 1.05、回弹 3.85 | `content/motion/transitions.dev--11-avatar-group-hover.md:64` |
| 错误抖动 | transform, border-color | 80 / 60ms，回正 280ms | 6px | `content/motion/transitions.dev--12-error-state-shake.md:70` |
| 输入清空 | transform, opacity, filter | 400ms / 400ms | 整体 1000ms、2px | `content/motion/transitions.dev--13-input-clear-with-dissolve.md:52` |
| 骨架加载 | opacity, filter | 脉冲 1000ms、揭示 400ms | 2px | `content/motion/transitions.dev--14-skeleton-loader-and-reveal.md:49` |
| 文本逐行 | transform, opacity, filter | 500ms | 12px、40ms 交错、3px | `content/motion/transitions.dev--15-texts-reveal.md:44` |
| 标签页滑块 | transform, width | 250ms | 250ms | `content/motion/transitions.dev--16-tabs-sliding.md:47` |
| 微光文本 | background-position | 2000ms 循环 | 线性 | `content/motion/transitions.dev--17-shimmer-text.md:41` |
| 工具提示 | opacity, transform | 150ms 进 / 50ms 出，延迟 80ms | 0.98 | `content/motion/transitions.dev--18-tooltip-open-close.md:46` |
| 3D 倾斜 | transform, opacity | 跟随与回正 | 同一曲线 | `content/motion/transitions.dev--19-3d-tilt.md:46` |
| 下拉形变 | width, height, radius, transform, opacity, filter | 350ms / 250ms | 圆角 40 到 20、0.97 | `content/motion/transitions.dev--20-dropdown-menu-morph.md:41` |
| 手风琴 | grid-template-rows, transform, filter | 展开 / 收起 | 同一曲线 | `content/motion/transitions.dev--21-accordion.md:44` |
| toast | transform, opacity, filter | 350ms / 250ms | 16px、2px、0.97 | `content/motion/transitions.dev--22-toast-open-close.md:37` |
| 点赞 | transform, opacity | 粒子 600ms | 回弹 1.96 | `content/motion/transitions.dev--23-like-button.md:41` |
| 了解更多 | transform | 悬停 | 同一曲线 | `content/motion/transitions.dev--24-learn-more-hover.md:41` |
| 勾选框 | background, box-shadow, stroke-dashoffset | 底色 150ms、勾线 350ms | 取消 150ms | `content/motion/transitions.dev--25-checkbox-check.md:41` |
| 数字滚轮 | transform, opacity, filter | 单步 130ms、交错 90ms | 0.7 / 0.9、模糊 | `content/motion/transitions.dev--26-spinning-counter.md:44` |
| 开关 | transform, background | 350ms | 回弹 1.35 | `content/motion/transitions.dev--27-toggle.md:39` |
| 思考状态 | transform, opacity, filter | 循环 | 8px、2px | `content/motion/transitions.dev--37-thinking-states.md:50` |
| 推理流 | transform, opacity | 循环 | 同一曲线 | `content/motion/transitions.dev--38-reasoning-stream.md:47` |
| 流式文本 | opacity, filter | 逐词 | 1px | `content/motion/transitions.dev--39-streaming-text.md:38` |
| 矩阵加载 | opacity, transform | 循环 | ease-in-out | `content/motion/transitions.dev--40-matrix-dot-loader.md:41` |
| 横幅堆叠 | transform, opacity, filter | 350ms / 250ms | 2px、0.97、纵深 0.06 | `content/motion/transitions.dev--41-banner-stacking.md:43` |
| 数字微变 | transform, opacity, filter | 455ms | 0.14em、0.042em | `content/motion/transitions.dev--44-number-subtle-change.md:48` |

## 三、实现顺序

1. 先定动作。浮层、原地变化、反馈、输入、展开、加载、文本七类各对应一组配方点，先选点再写 CSS。时长与曲线按基准规范覆盖配方默认值，两条账分开记：动作来自配方，毫秒来自基准规范或缺口规则。
2. 入场先给初态，或用 `@starting-style` 配合离散显隐。传统写法要求元素常驻 DOM 并切类名（初始带 `opacity: 0` 与位移，但不要让隐藏元素继续留在点击命中或可读流中）；如果用 `display: none` 控制关闭态，必须配合 `@starting-style`（在打开态规则内声明 `@starting-style { opacity: 0; transform: ...; }`）或在移除 `hidden` 的同一拍补初态类并在下一帧切终态，否则元素从 `display: none` 切到可见时没有起始帧，声明了 `transition` 也不会跑（`getAnimations()` 返回 0）。单向一次性微反馈（如点击波纹、成功勾）直接用 `@keyframes` 播完移除即可。
3. 出场与关闭态要对称。常规容器关闭可加 `is-closing` 类等 `transitionend` 或定时器到点再设 `hidden`，关闭时长比入场短（如菜单 250ms 进、150ms 出；toast 350ms 进、250ms 出）；若使用现代 CSS `transition-behavior: allow-discrete` 搭配 `display`，也要确保关闭时不拦截指针事件。直接把元素设成 `hidden` 或 `display: none` 而无退场配置，关闭方向就会硬切。
4. 只动合成属性。优先动 `transform`、`opacity`、`filter`（或 `clip-path`、`backdrop-filter` 这类不触发布局的属性）。几何变化是配方刻意为之的例外：标签页滑块动 `width`，卡片尺寸动 `width/height`，手风琴动 `grid-template-rows`，它们有 JS 配合且范围受控，不要把这个做法推广到普通卡片或列表。
5. 可打断优先。交互状态变化用 CSS transition，能中途反向；keyframes 只给一次性序列（成功勾、粒子、抖动、循环加载、点击反馈波纹）。勾选框的勾线用 `stroke-dashoffset` 过渡，中途取消能反向画回，这是它不用 keyframes 的原因。
6. 起点跟着触发件。菜单与下拉从触发按钮的位置长出来（`transform-origin` 指过去，0.97 起），弹窗居中缩放（0.96），抽屉与面板从停靠边缘滑入。起点错了，动作再对也像换了一块屏。
7. 减弱动效要瞬时到位。每条配方都带 `prefers-reduced-motion: reduce` 的兜底，把过渡和关键帧动画清零，不是把时长调短；功能结果仍要发生（菜单开、值更新、面板显示）。

## 四、验收

动效不能只靠截图验收，截图只有静态一帧。每个有状态变化的组件写成一行清单：组件、触发动作、配方文件、动的属性、起始值与结束值、入场与出场时长、曲线出处。

浏览器里逐项测三件事：动作后 `el.getAnimations()` 不为空；`currentTime` 在推进，不是停在 0；首帧计算值不等于终态值。开与关两个方向各测一次，只测开的方向会漏掉出场丢失。用 `hidden` 或 `display` 控制显隐的元素，再补一条：移除隐藏后第一帧必须能看到起始值，直接是终态就是没过渡。

验收记录写实测值，不写「已按规范实现」。规范给的是数值与配方，过渡有没有真的发生只能由运行时的动画对象证明。

## 五、克制边界与选型分工

### 1. 选型动效篇与缺口回源分工

- **时长与曲线优先按项目选型取**：先读当前主源（`main_sources`）里的动效篇（如 TDesign、Carbon、Fluent 2、Polaris、Spectrum、Apple HIG）；
- **选型无具体数值时按缺口规则回源**：参考 NN/g 动效时长研究（简单反馈约 100ms、状态切换与微交互 200–300ms）与 W3C 定值缓动曲线，禁止凭感觉自造 `cubic-bezier`；
- **动作结构取自配方**：抽屉、弹窗、Toast、下拉、手风琴、数字变化的具体位移、缩放与交错方式按本篇第 2 节查表回对应配方原文。

### 2. 必须配克制过渡 vs 严禁动效

| 类别 | 适用元素 | 要求 |
| --- | --- | --- |
| 必须配过渡 | 抽屉（Drawer）、弹窗（Modal）、浮层（Popover/Dropdown）、提示条（Toast/Banner）、Tab 指示条、交互微反馈 | 用指数缓出或选型主曲线，仅动 `transform` / `opacity` 等合成属性，且首屏状态默认可见、不靠全屏延迟入场遮挡 |
| 严禁过渡 | `:focus-visible` 焦点环 | 键盘聚焦边框/轮廓必须 `0ms` 瞬时出现，严禁给 `outline` 或焦点 `box-shadow` 加 `transition` |
| 严禁写法 | `transition: all` / 静止 `opacity: 0` / 散落整屏淡入 | 显式列出属性名；禁止给页面每个区块加统一滚动淡入；常规控件状态切换禁止使用过冲回弹曲线（控制点 y > 1.05） |
