---
title: "组件动效 · 点阵加载（Matrix dot loader）"
source: https://transitions.dev/transitions/matrix-dot-loader/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-40-matrix-dot-loader
publisher: "Transitions.dev"
---

# 组件动效 · 点阵加载（Matrix dot loader）

> 来源：[Transitions.dev](https://transitions.dev/transitions/matrix-dot-loader/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/matrix-dot-loader/index.html`。

## 它解决什么

点阵加载器用于「系统在处理、但进度不可知」的等待窗口。十六个小方块按同一套明暗节奏轮流被点亮，拼成一个持续脉冲的 4×4 方阵，不需要文字也看得出进程还活着。它比旋转圆圈更接近「计算中」的语感，常放在对话界面、推理输出、后台任务的占位位置。

## 动效怎么构成

DOM 只有一层：容器 `div.t-matrix` 里由 JS 生成十六个 `<i>`，按四列排开。容器只负责几何，`display: grid` 配 `grid-template-columns: repeat(4, 2px)`、`grid-auto-rows: 2px`、`gap: 2px`，点阵的整体尺寸完全由这三个值决定，想换密度改这里就够。

真正在动的是每个 `<i>` 的 `background-color`，不是 transform，也不是 opacity。所有点共用同一条 `@keyframes t-matrix-pulse` 和同一个周期变量 `--matrix-cycle`，节奏一致；个体差异全部交给 `animation-delay: calc(var(--d, 0) * 1ms)`。JS 为每个点写入毫秒数 `--d`，等于把波形编码成一张延迟表，`data-variant` 只是换表。

原文给了四张表。`scan` 按列推进，延迟为 `col * cycle/10`；`twinkle` 按顺序 `[7,2,11,5,14,9,0,12,3,15,6,10,13,1,8,4]` 乘以 `cycle/16`，读起来像随机抖动；`orbit` 只让外圈 `[1,2,7,11,14,13,8,4]` 参与，乘以 `cycle/8`，中心四点保持稳定；`pulse` 先亮内圈 `[5,6,9,10]`，其余点晚 `cycle*0.16`。

关键帧本身很短：`0%, 45%, 100%` 落在底色，`15%` 落在亮色。一个 1200ms 周期里亮点只占前段，后面大半时间停在暗色上，所以看到的是「一闪一停」，而不是均匀呼吸。因为动画只改 `background-color`，没有位移也没有尺寸变化，整块点阵不会触发重排，旁边的文字和按钮不会被挤动。容器用 `grid-auto-rows` 统一行高，四个变体共用同一套网格，换 `data-variant` 时占位尺寸不变。CSS 本身不认识变体的名字，它只读 `--d`，所以想改图案必须重算延迟，光换属性值没有用。

圆角变体把四角挖空：给索引 `[0,3,12,15]` 加 `.is-gap`，规则是 `visibility: hidden` 加 `animation: none`，四个角既不显示，也不再参与动画循环。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--matrix-cycle` | `1200ms` | 一次明暗循环的总时长 |
| `--matrix-base` | `#d9d9d9` | 未点亮时的方块颜色 |
| `--matrix-active` | `#85858f` | 关键帧 `15%` 处的点亮颜色 |
| `--matrix-ease` | `ease-in-out` | 关键帧之间的插值曲线 |
| `--d` | `0`（默认值） | JS 写入的单点延迟毫秒数 |
| `.t-matrix` | `grid-template-columns: repeat(4, 2px)`、`grid-auto-rows: 2px`、`gap: 2px` | 四列网格、行高与点间距 |
| `.t-matrix i.is-gap` | `visibility: hidden`、`animation: none` | 圆角变体挖掉四角 |
| `t-matrix-pulse` | `0%, 45%, 100%` 为底色，`15%` 为亮色 | 单点明暗节奏 |

## 怎么用

1. 放容器：`<div class="t-matrix" data-variant="scan"></div>`，`data-variant` 决定用哪张延迟表，四张表任选。
2. 生成点：JS 输出十六个 `<i>`，逐个写内联 `--d`（毫秒），延迟按上面四个公式从列号或索引算出来。
3. 调节奏：改 `:root` 上的四个变量就能改速度与配色；`--matrix-cycle` 一动，四张表按比例整体变速，因为表里存的是 `cycle` 的倍数。
4. 圆角版本：给索引 `[0,3,12,15]` 补 `.is-gap`，形态变成带缺口的环。
5. reduced-motion：原文自带守卫，`prefers-reduced-motion: reduce` 下 `animation: none !important`，点阵退化成静态方块。此时「正在加载」只能靠文本或容器属性表达，动效不再承载信息。

## 什么时候别用

进度已知或能估算的任务用进度条，脉冲节奏传不出百分比。需要长时间停留的等待用静态骨架屏更省电，也不会一直吸引视线；点阵适合几秒级的短等待，挂久了会显得界面在空转。嵌在按钮里代替文字时也要谨慎，四点方阵在窄按钮里几乎没有视觉重量，不如直接换文案加禁用态。

## 注意

原文的 CSS 没有附带任何 `role` 或 aria 属性。「正在加载」对读屏用户不可见，需要在容器上自己补 `aria-busy="true"` 或一段可读的状态文本，结束时再更新。`--d` 以内联样式写入，如果站点 CSP 禁止内联样式，要改成属性映射或 `style-src` 白名单。配色只有 `#d9d9d9` 与 `#85858f` 两档，放到深色底上需要换成对比度足够的取值，否则脉冲几乎看不出来。`.is-gap` 用 `visibility: hidden` 而不是 `display: none`，四个角仍然占网格位置，圆角版与方角版尺寸才一致。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Matrix dot loader */

/*
  Usage:
    <div class="t-matrix" data-variant="scan"></div>

  JS builds sixteen <i> dots per loader and hands each a --d
  delay (ms) into the shared colour-pulse cycle — the variant is
  just a delay table. scan: col * cycle/10. twinkle: the order
  [7,2,11,5,14,9,0,12,3,15,6,10,13,1,8,4] * cycle/16. orbit: the
  ring [1,2,7,11,14,13,8,4] * cycle/8, centre holds steady.
  pulse: inner [5,6,9,10] first, the rest cycle*0.16 behind.
  Rounded variants mark the corners [0,3,12,15] .is-gap so they
  render nothing.
*/

:root {
  --matrix-cycle: 1200ms;
  --matrix-base: #d9d9d9;
  --matrix-active: #85858f;
  --matrix-ease: ease-in-out;
}

.t-matrix {
  display: grid;
  grid-template-columns: repeat(4, 2px);
  grid-auto-rows: 2px;
  gap: 2px;
}
.t-matrix i {
  display: block;
  background: var(--matrix-base);
  animation: t-matrix-pulse var(--matrix-cycle) var(--matrix-ease) infinite;
  animation-delay: calc(var(--d, 0) * 1ms);
}
/* Hole positions (rounded variants) render nothing. */
.t-matrix i.is-gap { visibility: hidden; animation: none; }
@keyframes t-matrix-pulse {
  0%, 45%, 100% { background-color: var(--matrix-base); }
  15%           { background-color: var(--matrix-active); }
}

@media (prefers-reduced-motion: reduce) {
  .t-matrix i { animation: none !important; }
}
```
