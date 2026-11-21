---
title: "组件动效 · 开关切换（Toggle）"
source: https://transitions.dev/transitions/toggle/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-27-toggle
publisher: "Transitions.dev"
---

# 组件动效 · 开关切换（Toggle）

> 来源：[Transitions.dev](https://transitions.dev/transitions/toggle/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/toggle/index.html`。

## 它解决什么

开关最省事的做法是圆点线性滑到另一头、颜色同时变。动作没错，但它和滑块、进度条长得一样，用户只看到位置变了。这个动效在滑块行程上加了两次回摆：先冲过终点，再荡回来一点，最后停住。两段方向变化让点下去的那一下有短促的力度，状态切换因此像是被「扳」过去的，而不是被「推」过去的。

回摆不需要长，`1px` 的越点就够被眼睛捕捉到。重点在方向变化本身：位移先往前、再往后、再停，大脑读到的是一次撞击加一次余震。

## 动效怎么构成

结构是一个 `<button class="t-toggle" role="switch" data-on="false">`，里面一个 `<span class="t-toggle-thumb">`。滑块不带文字，实现里给它 `aria-hidden="true"`。

状态有两个，分工明确：

- `data-on` 取 `true` 或 `false`，决定滑块的静态位置。`[data-on="true"] .t-toggle-thumb` 直接把 `translate` 设成 `var(--toggle-travel) 0`。
- `.is-init`，第一次交互之后才加上的门闩，用来挡住加载时就播放动画。

动的是滑块位移，用的不是 `transform` 而是独立的 `translate` 属性，所以配套写 `will-change: translate`。轨迹由两条 keyframes 描述：`t-toggle-on` 与 `t-toggle-off`。两条都在 55% 处越过终点（`calc(var(--toggle-travel) + var(--toggle-ov1))`），在 80% 处退到 `calc(var(--toggle-travel) - var(--toggle-ov2))`，100% 落在 `var(--toggle-travel)`。关闭方向是镜像的：55% 走在 `calc(0px - var(--toggle-ov1))`，80% 在 `var(--toggle-ov2)`，100% 回到 0。

轨道颜色不在这条时间线上，它走 `.t-toggle` 的 `background` 过渡，时长 `--toggle-track`，默认 `0ms`，也就是换色不发过渡。

之所以用 keyframes 而不是单条 `transition`，是因为过渡只能从 A 走到 B，中途没有「越过 B 再退回来」的表达。把 55% 放在终点之外、80% 放在终点之内、100% 回到终点，就是把这个越点写成了位置序列。三条关键帧之间的插值仍由 `--toggle-ease` 决定，那条曲线的控制点里第二个值 `1.35` 大于 1，本身也带轻微过冲，两处叠加才有弹的感觉。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--toggle-dur` | 350ms | 一条 keyframes 的总时长，开与关共用 |
| `--toggle-travel` | 14.66px | 滑块从一端到另一端的位移 |
| `--toggle-ov1` | 1px | 55% 处越过终点的量，第一次回摆的幅度 |
| `--toggle-ov2` | 0px | 80% 处往回退的量，默认 0 等于不做第二次回摆 |
| `--toggle-track` | 0ms | 轨道 background 的过渡时长，默认瞬时 |
| `--toggle-ease` | cubic-bezier(0.34, 1.35, 0.64, 1) | keyframes 与轨道过渡共用的缓动 |
| `.is-init` | 类名 | 门闩，没有它加载时就会播一次关闭动画 |
| 55% / 80% / 100% | 关键帧位置 | 越点、回退、落定三个时间点 |

## 怎么用

1. 按钮写 `role="switch"`，可访问状态写 `aria-checked`，视觉状态写 `data-on`，两者在点击时一起翻。
2. 点击回调里第一次补上 `is-init`，再加 `data-on` 的切换。
3. 不要用脚本改位移：位置来自 `[data-on="true"]` 那条规则的 `translate`，动画来自 `.is-init[data-on=...]` 的 `animation`，翻 `data-on` 就是换动画名，`both` 让它贴住 0% 之前和 100% 之后的状态。
4. 想让轨道颜色跟着变，把 `--toggle-track` 设成与 `--toggle-dur` 同量级；留 0ms 就是瞬变。
5. `prefers-reduced-motion: reduce` 下 `animation: none !important`，滑块靠静态 `translate` 直接跳到位，位置依然正确。

## 什么时候别用

需要表达三段以上状态（关 / 自动 / 开）的控件，两次回摆会让人以为只有两个值，这种情况用分段选择器。开关成排出现在设置列表里、一次要切很多项时也不适合，逐个 350ms 的弹跳会拖慢节奏，直接切换更利落。

## 注意

- 滑块是纯装饰，`aria-hidden="true"`；状态只放在 `aria-checked` 上，不要让滑块承载语义。
- `.is-init` 漏掉的话，加载时 `[data-on="false"]` 会命中 `t-toggle-off`，开关一出现就自己弹一次。
- `--toggle-ov2` 默认是 `0px`，第二次回摆其实没有幅度，看到的是「越点一次再停住」。想要对称的双弹得自己给值。
- 位移用 `translate` 属性，不要和 `transform: translateX()` 混写，两者会互相覆盖。
- 关闭动画 55% 的负位移用 `calc(0px - var(--toggle-ov1))` 表达，直接写 `-var(...)` 在这条 CSS 里不成立。
- 在动画没走完时再点一次，`animation-name` 一换，新动画从自己 0% 的固定值开始，滑块会先跳到那一端再动。350ms 内连点的用户会看到这个跳，需要更稳就把点击在 `--toggle-dur` 内忽略掉。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Toggle */

/*
  Usage:
    <button class="t-toggle" role="switch" data-on="false">
      <span class="t-toggle-thumb"></span>
    </button>

  Toggle `data-on`. Add `.is-init` on first interaction so the
  "off" keyframes don't play on load. The thumb travels with a
  double bounce (overshoot past the end, swing back, settle);
  the track colour cross-fades on its own clock.
*/

:root {
  --toggle-dur: 350ms;
  --toggle-travel: 14.66px;
  --toggle-ov1: 1px;
  --toggle-ov2: 0px;
  --toggle-track: 0ms;
  --toggle-ease: cubic-bezier(0.34, 1.35, 0.64, 1);
}

.t-toggle { transition: background var(--toggle-track) var(--toggle-ease); }
.t-toggle-thumb { translate: 0 0; will-change: translate; }
.t-toggle[data-on="true"] .t-toggle-thumb { translate: var(--toggle-travel) 0; }
.t-toggle.is-init[data-on="true"] .t-toggle-thumb { animation: t-toggle-on var(--toggle-dur) var(--toggle-ease) both; }
.t-toggle.is-init[data-on="false"] .t-toggle-thumb { animation: t-toggle-off var(--toggle-dur) var(--toggle-ease) both; }
@keyframes t-toggle-on {
  0% { translate: 0 0; }
  55% { translate: calc(var(--toggle-travel) + var(--toggle-ov1)) 0; }
  80% { translate: calc(var(--toggle-travel) - var(--toggle-ov2)) 0; }
  100% { translate: var(--toggle-travel) 0; }
}
@keyframes t-toggle-off {
  0% { translate: var(--toggle-travel) 0; }
  55% { translate: calc(0px - var(--toggle-ov1)) 0; }
  80% { translate: var(--toggle-ov2) 0; }
  100% { translate: 0 0; }
}

@media (prefers-reduced-motion: reduce) {
  .t-toggle-thumb { animation: none !important; }
}
```

### React

```jsx
// Transitions.dev — Toggle (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --toggle-dur: 350ms;
  --toggle-travel: 14.66px;
  --toggle-ov1: 1px;
  --toggle-ov2: 0px;
  --toggle-track: 0ms;
  --toggle-ease: cubic-bezier(0.34, 1.35, 0.64, 1);
}

.t-toggle { transition: background var(--toggle-track) var(--toggle-ease); }
.t-toggle-thumb { translate: 0 0; will-change: translate; }
.t-toggle[data-on="true"] .t-toggle-thumb { translate: var(--toggle-travel) 0; }
.t-toggle.is-init[data-on="true"] .t-toggle-thumb { animation: t-toggle-on var(--toggle-dur) var(--toggle-ease) both; }
.t-toggle.is-init[data-on="false"] .t-toggle-thumb { animation: t-toggle-off var(--toggle-dur) var(--toggle-ease) both; }
@keyframes t-toggle-on {
  0% { translate: 0 0; }
  55% { translate: calc(var(--toggle-travel) + var(--toggle-ov1)) 0; }
  80% { translate: calc(var(--toggle-travel) - var(--toggle-ov2)) 0; }
  100% { translate: var(--toggle-travel) 0; }
}
@keyframes t-toggle-off {
  0% { translate: var(--toggle-travel) 0; }
  55% { translate: calc(0px - var(--toggle-ov1)) 0; }
  80% { translate: var(--toggle-ov2) 0; }
  100% { translate: 0 0; }
}

@media (prefers-reduced-motion: reduce) {
  .t-toggle-thumb { animation: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p27")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p27";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. `.is-init` gates the keyframes so the
// "off" animation doesn't play on mount; flipping `data-on` swaps the
// animation, which restarts the double-bounce thumb travel.
export function Toggle() {
  const [on, setOn] = useState(false);
  const [init, setInit] = useState(false);

  return (
    <button
      type="button"
      className={"t-toggle" + (init ? " is-init" : "")}
      role="switch"
      aria-checked={on}
      data-on={on ? "true" : "false"}
      onClick={() => { setInit(true); setOn((v) => !v); }}
    >
      <span className="t-toggle-thumb" aria-hidden="true" />
    </button>
  );
}
```
