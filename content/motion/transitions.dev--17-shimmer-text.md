---
title: "组件动效 · 文字微光（Shimmer text）"
source: https://transitions.dev/transitions/shimmer-text/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-17-shimmer-text
publisher: "Transitions.dev"
---

# 组件动效 · 文字微光（Shimmer text）

> 来源：[Transitions.dev](https://transitions.dev/transitions/shimmer-text/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/shimmer-text/index.html`。

## 它解决什么

一句话需要显得「正在处理」或者值得看一眼时，只靠颜色和字重很难表达，暗色界面上加粗几乎看不出来。这个动效让一道高光沿着文字扫过，用运动本身提示注意力，字号、位置、字重都不变，所以不会引起重排。

## 动效怎么构成

只有一层元素 `.t-shimmer`：`position: relative`、`display: inline-block`，正文颜色取 `var(--shimmer-base)`。可见文字直接写在元素里，同一份字符串再复制到 `data-text` 属性上。

真正动的是伪元素 `::before`：用 `content: attr(data-text)` 把文字再画一遍，`position: absolute; inset: 0` 严丝合缝盖在原文字上，`pointer-events: none` 保证不挡点击与选择。

它铺的是一张横向渐变 `linear-gradient(90deg, ...)`，色标依次是 `transparent 0%`、`transparent 40%`、`var(--shimmer-highlight) 50%`、`transparent 60%`、`transparent 100%`，`background-size` 为 `var(--shimmer-band) 100%`，`background-repeat: no-repeat`。

关键是 `background-clip: text` 配 `color: transparent` 与 `-webkit-text-fill-color: transparent`：渐变被裁进字形，只有笔画上出现亮带，其余地方透明。动画 `t-shimmer` 在 `--shimmer-dur` 内把 `background-position` 从 `100% 0` 推到 `0% 0`，配 `--shimmer-ease: linear` 与 `infinite`，就是匀速循环扫光。

`--shimmer-band` 是 `400%`，渐变层铺到元素宽度的四倍，亮带只占中间一段，扫过时两头都有透明余量，看不到硬边。色标 `40%` 与 `60%` 决定亮带两侧的过渡宽度，收窄它们会让光带变硬。

伪元素的 `inset: 0` 让它和元素盒子完全重叠，`background-size` 的百分比也就相对元素宽度计算，与字号无关。

整套是纯 CSS，没有 JS，也没有状态类，元素出现动画就开始。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--shimmer-dur` | 2000ms | 一次扫光循环的时长 |
| `--shimmer-base` | #7c7c7c | 底层文字颜色，也是亮带之外看到的颜色 |
| `--shimmer-highlight` | #0d0d0d | 亮带中心的颜色 |
| `--shimmer-band` | 400% | 渐变层宽度，相对元素宽度，决定亮带宽窄与扫过余量 |
| `--shimmer-ease` | linear | 扫光缓动，匀速才有反光的观感 |
| `data-text` | 属性 | 与可见文字逐字相同的副本，供 `attr()` 取用 |
| 90deg | 角度 | 渐变的横向方向 |
| 40% / 50% / 60% | 百分比 | 渐变色标位置，亮带中心固定在 50% |
| 100% 0 → 0% 0 | 关键帧值 | `background-position` 的起止 |

## 怎么用

- 写成 `<span class="t-shimmer" data-text="…">…</span>`，属性与元素内的文字必须逐字一致。
- 不需要任何类切换，挂上去就在动；要换节奏就改 `--shimmer-dur`，要暂停就覆盖 `animation`。
- 亮色与暗色主题下分别改 `--shimmer-base` 与 `--shimmer-highlight`，渐变结构与关键帧不用动。
- reduced-motion 下 `::before` 的 `animation` 被 `none !important` 停掉，亮带不再移动；伪元素还在，但 `color` 是透明的，看到的就是单纯的底色文字。
- 底色文字始终可见，亮带只是叠上去的一层，所以动画被打断时文案照样读得到。
- 文案变化时同步更新 `data-text`，否则盖在上面那层还在显示旧字符串。

## 什么时候别用

长段落、代码块和需要长时间阅读的正文不要用，反复扫过的高光会把视线拽走。同一屏也别放多个实例，几个不同相位的亮带同时动会显得躁。

## 注意

- 底色文字用 `color`，高光层把 `color` 与 `-webkit-text-fill-color` 都写成 `transparent`，两层互不覆盖。
- `background-clip: text` 需要前缀，原文 `-webkit-background-clip` 与 `background-clip` 都写了，别只留一个。
- `content: attr(data-text)` 只能取纯文本，文案里不能带内联标签，`<strong>`、`<em>` 这类结构会被拍平。
- 伪元素绝对定位、`inset: 0`，碰到会换行的长文本时它的换行位置不一定与正文一致，原文的用法是单行短句。
- 底色与高光要拉开明度差，`#7c7c7c` 与 `#0d0d0d` 在亮色下才看得出亮带；自己换色时重新核一次对比。
- 扫光只改 `background-position`，不碰 `transform` 与盒子尺寸，所以不会引起重排。
- 高光层是绝对定位的伪元素，不参与行内布局，扫光过程中文字宽度与换行都不会变。
- 动画是 `infinite` 的，多个实例会持续占用合成与重绘，列表里要控制数量。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Shimmer text */

/*
  Usage:
    <!-- Duplicate the visible string into data-text so the
         ::before layer can mask the gradient onto the same
         glyphs. Keep them in sync if the text changes. -->
    <span class="t-shimmer" data-text="Planning next moves">
      Planning next moves
    </span>

  Pure CSS — no JS, no class toggling. Tune --shimmer-base /
  --shimmer-highlight in your own theme rules so the colors
  follow light / dark mode.
*/

:root {
  --shimmer-dur: 2000ms;
  --shimmer-base: #7c7c7c;
  --shimmer-highlight: #0d0d0d;
  --shimmer-band: 400%;
  --shimmer-ease: linear;
}

/* Two-layer construction:
   1. The base text renders normally in --shimmer-base.
   2. ::before duplicates it via content: attr(data-text),
      paints a transparent → highlight → transparent gradient
      onto it, and clips that gradient to the glyphs via
      background-clip: text. Animating background-position
      sweeps the band across the text. */
.t-shimmer {
  position: relative;
  display: inline-block;
  color: var(--shimmer-base);
}
.t-shimmer::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(
    90deg,
    transparent          0%,
    transparent         40%,
    var(--shimmer-highlight) 50%,
    transparent         60%,
    transparent        100%
  );
  background-size: var(--shimmer-band) 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: t-shimmer var(--shimmer-dur) var(--shimmer-ease) infinite;
}
@keyframes t-shimmer {
  0%   { background-position: 100% 0; }
  100% { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .t-shimmer::before { animation: none !important; }
}
```

### React

```jsx
// Transitions.dev — Shimmer text (React, self-contained)
// Drop into any React project — no extra CSS file needed.

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --shimmer-dur: 2000ms;
  --shimmer-base: #7c7c7c;
  --shimmer-highlight: #0d0d0d;
  --shimmer-band: 400%;
  --shimmer-ease: linear;
}

/* Two-layer construction:
   1. The base text renders normally in --shimmer-base.
   2. ::before duplicates it via content: attr(data-text),
      paints a transparent → highlight → transparent gradient
      onto it, and clips that gradient to the glyphs via
      background-clip: text. Animating background-position
      sweeps the band across the text. */
.t-shimmer {
  position: relative;
  display: inline-block;
  color: var(--shimmer-base);
}
.t-shimmer::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(
    90deg,
    transparent          0%,
    transparent         40%,
    var(--shimmer-highlight) 50%,
    transparent         60%,
    transparent        100%
  );
  background-size: var(--shimmer-band) 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: t-shimmer var(--shimmer-dur) var(--shimmer-ease) infinite;
}
@keyframes t-shimmer {
  0%   { background-position: 100% 0; }
  100% { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .t-shimmer::before { animation: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p15")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p15";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// Pure CSS — no hooks, no state. The `data-text` attribute
// duplicates the visible string into the masked ::before layer.
// Keep them in sync if the text changes.
export function Shimmer({ children }) {
  return (
    <span className="t-shimmer" data-text={children}>
      {children}
    </span>
  );
}
```
