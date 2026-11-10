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

## Overview

16-dot matrix pulses in four patterns

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

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
