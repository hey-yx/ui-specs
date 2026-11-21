---
title: "组件动效 · 点赞按钮（Like button）"
source: https://transitions.dev/transitions/like-button/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-23-like-button
publisher: "Transitions.dev"
---

# 组件动效 · 点赞按钮（Like button）

> 来源：[Transitions.dev](https://transitions.dev/transitions/like-button/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/like-button/index.html`。

## 它解决什么

点赞要给出“这次点击生效了”的确认。图标从描边变实心只说明状态，还缺一次动作。这个动效把三件事叠在一起：颜色与填充在 150ms 内切过去，图标外壳先压到 0.82 再弹回 1，8 个粒子沿各自方向散开。粒子和心形共用同一个红，反馈是单色的，不会花。

## 动效怎么构成

按钮 `.t-like` 带 `data-liked`。心形 `.t-like-heart` 只管颜色：`color: currentColor`，点亮后过渡到 `--like-color`（`#f40051`）；里面的 path 是 `fill: transparent` 加 `stroke: currentColor`，被点亮时 `fill` 改成 `currentColor`，`fill` 与 `stroke` 各有一条 `--like-fill` 的过渡，所以从描边到实心是渐变过去的，不是瞬间跳。

弹跳挂在 HTML 包裹层 `.t-like-icon` 上，不是 svg 上。原文注释给了原因：给内联 svg 加 `transform` 会让 Chromium 按 1× 栅格化，在高 DPI 屏上发虚，包一层 HTML 元素能让矢量保持清晰。`@keyframes t-like-pop` 只有三个关键帧：`0%` 是 `scale(1)`，`30%` 压到 `scale(0.82)`，`100%` 回到 `scale(1)`，时长 `--like-pop`，缓动 `cubic-bezier(0.34, 1.96, 0.64, 1)`，过冲明显，回弹时略微超出 1。

粒子层 `.t-like-particles` 是一个 `width: 0; height: 0` 的锚点，绝对定位在 `left: 50%; top: 50%`，`pointer-events: none`，颜色继承 `--like-color`。里面 8 个 `<i>`，尺寸由 `calc(var(--like-particle-size) * var(--psize, 1))` 算，并用同值的负一半做 `left` 与 `top` 让它居中，`border-radius: 50%`。每个点的方向、终点、时长、延迟、结束缩放、大小都写在它自己的自定义属性上：`--px`、`--py`、`--pdur`、`--pdelay`、`--p-end-scale`、`--psize`，所以 8 个点可以各不相同。

`.is-bursting` 触发 `@keyframes t-like-burst`：`0%` 透明、`scale(0.4)`；`20%` 已经松弛到 `translate(calc(var(--px) * 0.25), calc(var(--py) * 0.25))` 且 `scale(1)`、完全不透明；`100%` 落到 `translate(var(--px), var(--py))` 与 `scale(var(--p-end-scale, 0.6))` 并重新透明。动画本身是 `ease-out` 加 `forwards`，粒子的“先快后慢”靠这条曲线，不靠 `--like-particle-dur` 里再调缓动。

JS 侧每次点赞重新播种：角度按 `360 / dots.length * i` 均分，再加正负 16 度抖动，距离在 `--like-particle-dist`（20px，JS 里同名的 `DIST` 常量也写 20）的 0.68 倍上再加最多 0.5 倍，`--pdur` 用 `calc(var(--like-particle-dur) * ...)` 乘 0.78 再加最多 0.44，`--pdelay` 取 0 到 70ms 之间的整数。所以每次喷出的形状都不一样。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--like-color` | `#f40051` | 点亮后的心形与粒子颜色 |
| `--like-fill` | `150ms` | `color`、`fill`、`stroke` 的过渡时长 |
| `--like-pop` | `350ms` | 弹跳动画时长 |
| `--like-pop-ease` | `cubic-bezier(0.34, 1.96, 0.64, 1)` | 弹跳缓动，带过冲 |
| `--like-particle-dur` | `600ms` | 粒子基础时长，可被 `--pdur` 覆盖 |
| `--like-particle-dist` | `20px` | 粒子飞散距离基准 |
| `--like-particle-size` | `2.5px` | 粒子直径基准，乘 `--psize` |
| `--like-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 颜色与填充的过渡缓动 |
| `--px`、`--py` | 每点写入，带 `px` | 粒子终点位移，直接进 `translate()` |
| `--pdur` | `var(--pdur, var(--like-particle-dur))` | 单点动画时长，未写入时回落到基础时长 |
| `--pdelay` | `0ms` 起，每点写入 | 单点动画延迟 |
| `--p-end-scale` | `0.6` | 粒子终点缩放的回落值 |
| `--psize` | `1` | 粒子尺寸倍率，缺省不缩放 |
| `@keyframes t-like-pop` | `scale(1)` → `scale(0.82)` → `scale(1)` | 压一下再回弹，谷值在 `30%` |
| `@keyframes t-like-burst` | `scale(0.4)` / `1` / `0.6` | 粒子起止缩放，中间帧在 `20%` |
| `aria-pressed` | `true` / `false` | 与 `data-liked` 同源 |

## 怎么用

1. 结构：`button.t-like` 里放 `span.t-like-icon` 包 svg 心形，再放 `span.t-like-particles` 装 8 个空 `<i>`，粒子层加 `aria-hidden="true"`。
2. 状态用 `data-liked` 在 true 与 false 之间切，同时把 `aria-pressed` 设成同一个布尔值。
3. 点赞时按顺序做四步：移除 `.is-bursting`，给 8 个点写一遍 `--px`、`--py`、`--pdur`、`--pdelay`、`--p-end-scale`、`--psize`，强制一次 reflow（示例里是 `void el.offsetWidth`），再把 `.is-bursting` 加回来。少了 reflow，浏览器会认为类没有真正离开过，动画不重播。
4. 取消点赞时只移除 `.is-bursting`、把 `data-liked` 切回 false，不写新粒子、不放动画。
5. `.is-bursting` 不会自己消失，按 `--like-particle-dur` 加 `--pdelay` 的总时长手动清掉。reduced-motion 下弹跳与粒子动画都被设为 `none`，颜色与填充的过渡保留。

## 什么时候别用

列表里每一项都能点赞时不适合：每次点击都要写六个内联变量、触发一次 reflow、跑九个动画，滚动中会掉帧，只留填色更稳。粒子飞散半径是 20px 级别，按钮外面有 `overflow: hidden` 的卡片、或者按钮紧贴卡片边缘时，粒子会被裁掉一部分。

## 注意

`transform` 必须落在 `.t-like-icon` 这层 HTML 包装上，写到 svg 上会在 Chromium 里按 1× 栅格化，这是原文注释明确点出的坑。`--px` 与 `--py` 直接进 `translate()`，写入时必须带 `px` 单位，缺单位整条 `transform` 会失效。粒子层 `pointer-events: none` 且 `aria-hidden="true"`，既不挡点击也不进可读文本。重播依赖“移除再加回”，连点两次如果不先移除，第二次不会有动画。reduced-motion 守卫只关 `animation`，`--like-fill` 那 150ms 的颜色过渡仍在，颜色变化不会被完全抹掉。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Like button */

/*
  Usage:
    <button class="t-like" data-liked="false">
      <span class="t-like-icon"><svg class="t-like-heart">…</svg></span>
      <span class="t-like-particles"><i></i>…8 total…<i></i></span>
      Like
    </button>

  Toggle `data-liked` to fill the heart + spring-pop it. Add
  `.is-bursting` (then remove it after the particle duration)
  to fire the burst; set each dot's --px/--py/--pdur/--pdelay/
  --p-end-scale/--psize in JS per like for an organic spray.
*/

:root {
  --like-color: #f40051;
  --like-fill: 150ms;
  --like-pop: 350ms;
  --like-pop-ease: cubic-bezier(0.34, 1.96, 0.64, 1);
  --like-particle-dur: 600ms;
  --like-particle-dist: 20px;
  --like-particle-size: 2.5px;
  --like-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-like-heart { color: currentColor; transition: color var(--like-fill) var(--like-ease); }
.t-like-heart path {
  fill: transparent; stroke: currentColor;
  transition: fill var(--like-fill) var(--like-ease), stroke var(--like-fill) var(--like-ease);
}
.t-like[data-liked="true"] .t-like-heart { color: var(--like-color); }
.t-like[data-liked="true"] .t-like-heart path { fill: currentColor; }
/* Pop scale lives on an HTML wrapper, never the <svg> itself:
   transforming an inline SVG makes Chromium rasterise it at 1×
   (pixelated on hi-DPI). Wrapping keeps the vector crisp. */
.t-like[data-liked="true"] .t-like-icon { animation: t-like-pop var(--like-pop) var(--like-pop-ease); }
@keyframes t-like-pop { 0% { transform: scale(1); } 30% { transform: scale(0.82); } 100% { transform: scale(1); } }

/* Particle burst — 8 dots flung along per-particle vectors. */
.t-like-particles { position: absolute; left: 50%; top: 50%; width: 0; height: 0; pointer-events: none; color: var(--like-color); }
.t-like-particles i {
  position: absolute;
  left: calc(var(--like-particle-size) * var(--psize, 1) / -2);
  top: calc(var(--like-particle-size) * var(--psize, 1) / -2);
  width: calc(var(--like-particle-size) * var(--psize, 1));
  height: calc(var(--like-particle-size) * var(--psize, 1));
  border-radius: 50%; background: currentColor; opacity: 0;
}
@keyframes t-like-burst {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.4); }
  20%  { opacity: 1; transform: translate(calc(var(--px) * 0.25), calc(var(--py) * 0.25)) scale(1); }
  100% { opacity: 0; transform: translate(var(--px), var(--py)) scale(var(--p-end-scale, 0.6)); }
}
.t-like.is-bursting .t-like-particles i {
  animation: t-like-burst var(--pdur, var(--like-particle-dur)) ease-out var(--pdelay, 0ms) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .t-like-icon, .t-like-particles i { animation: none !important; }
}
```

### React

```jsx
// Transitions.dev — Like button (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --like-color: #f40051;
  --like-fill: 150ms;
  --like-pop: 350ms;
  --like-pop-ease: cubic-bezier(0.34, 1.96, 0.64, 1);
  --like-particle-dur: 600ms;
  --like-particle-dist: 20px;
  --like-particle-size: 2.5px;
  --like-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-like-heart { color: currentColor; transition: color var(--like-fill) var(--like-ease); }
.t-like-heart path {
  fill: transparent; stroke: currentColor;
  transition: fill var(--like-fill) var(--like-ease), stroke var(--like-fill) var(--like-ease);
}
.t-like[data-liked="true"] .t-like-heart { color: var(--like-color); }
.t-like[data-liked="true"] .t-like-heart path { fill: currentColor; }
/* Pop scale lives on an HTML wrapper, never the <svg> itself:
   transforming an inline SVG makes Chromium rasterise it at 1×
   (pixelated on hi-DPI). Wrapping keeps the vector crisp. */
.t-like[data-liked="true"] .t-like-icon { animation: t-like-pop var(--like-pop) var(--like-pop-ease); }
@keyframes t-like-pop { 0% { transform: scale(1); } 30% { transform: scale(0.82); } 100% { transform: scale(1); } }

/* Particle burst — 8 dots flung along per-particle vectors. */
.t-like-particles { position: absolute; left: 50%; top: 50%; width: 0; height: 0; pointer-events: none; color: var(--like-color); }
.t-like-particles i {
  position: absolute;
  left: calc(var(--like-particle-size) * var(--psize, 1) / -2);
  top: calc(var(--like-particle-size) * var(--psize, 1) / -2);
  width: calc(var(--like-particle-size) * var(--psize, 1));
  height: calc(var(--like-particle-size) * var(--psize, 1));
  border-radius: 50%; background: currentColor; opacity: 0;
}
@keyframes t-like-burst {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.4); }
  20%  { opacity: 1; transform: translate(calc(var(--px) * 0.25), calc(var(--py) * 0.25)) scale(1); }
  100% { opacity: 0; transform: translate(var(--px), var(--py)) scale(var(--p-end-scale, 0.6)); }
}
.t-like.is-bursting .t-like-particles i {
  animation: t-like-burst var(--pdur, var(--like-particle-dur)) ease-out var(--pdelay, 0ms) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .t-like-icon, .t-like-particles i { animation: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p23")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p23";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Liking fills the heart, springs a
// pop, and fires an 8-dot burst whose per-particle vectors / velocity /
// delay / size are re-randomised each time so the spray never repeats.
const DIST = 20; // px — matches --like-particle-dist

export function LikeButton() {
  const [liked, setLiked] = useState(false);
  const ref = useRef(null);

  function seedParticles() {
    const dots = ref.current.querySelectorAll(".t-like-particles i");
    dots.forEach((dot, i) => {
      const angle = (360 / dots.length) * i + (Math.random() * 2 - 1) * 16;
      const mag = DIST * (0.68 + Math.random() * 0.5);
      const rad = (angle * Math.PI) / 180;
      const s = dot.style;
      s.setProperty("--px", `${(Math.cos(rad) * mag).toFixed(2)}px`);
      s.setProperty("--py", `${(Math.sin(rad) * mag).toFixed(2)}px`);
      s.setProperty("--pdur", `calc(var(--like-particle-dur) * ${(0.78 + Math.random() * 0.44).toFixed(3)})`);
      s.setProperty("--pdelay", `${Math.round(Math.random() * 70)}ms`);
      s.setProperty("--p-end-scale", (0.35 + Math.random() * 0.4).toFixed(2));
      s.setProperty("--psize", (0.6 + Math.random() * 0.8).toFixed(2));
    });
  }

  function toggle() {
    const el = ref.current;
    if (liked) {
      setLiked(false);
      el.classList.remove("is-bursting");
      return;
    }
    setLiked(true);
    el.classList.remove("is-bursting");
    seedParticles();
    void el.offsetWidth; // reflow so the burst replays
    el.classList.add("is-bursting");
  }

  return (
    <button
      ref={ref}
      type="button"
      className="t-like"
      data-liked={liked ? "true" : "false"}
      aria-pressed={liked}
      onClick={toggle}
    >
      <span className="t-like-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.99511 3.42388C6.66221 1.8656 4.4395 1.44643 2.76947 2.87334C1.09944 4.30026 0.86432 6.68598 2.17581 8.3736C3.26622 9.77674 6.56619 12.7361 7.64774 13.6939C7.76874 13.801 7.82925 13.8546 7.89982 13.8757C7.96141 13.8941 8.02881 13.8941 8.0904 13.8757C8.16097 13.8546 8.22147 13.801 8.34248 13.6939C9.42403 12.7361 12.724 9.77674 13.8144 8.3736C15.1259 6.68598 14.9195 4.28525 13.2207 2.87334C11.522 1.46144 9.32801 1.8656 7.99511 3.42388Z"
            className="t-like-heart-path"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="t-like-particles" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => <i key={i} />)}
      </span>
      Like
    </button>
  );
}
```
