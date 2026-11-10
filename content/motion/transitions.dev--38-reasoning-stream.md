---
title: "组件动效 · 推理流（Reasoning stream）"
source: https://transitions.dev/transitions/reasoning-stream/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-38-reasoning-stream
publisher: "Transitions.dev"
---

# 组件动效 · 推理流（Reasoning stream）

> 来源：[Transitions.dev](https://transitions.dev/transitions/reasoning-stream/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/reasoning-stream/index.html`。

## Overview

Agent reasoning scrolls by two lines

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Reasoning stream */

/*
  Usage:
    <div class="t-reason">
      <div class="t-reason-viewport">
        <div class="t-reason-scroll">
          <div class="t-reason-text">
            <p>…transcript…</p>
          </div>
        </div>
      </div>
    </div>

  The card clips a tall transcript; JS steps the scroll up
  --reason-lines lines every --reason-hold and clones
  .t-reason-text once so the offset can wrap by one copy's
  height mid-hold — the loop never shows a jump. The edge fades
  are a mask on the viewport (not gradients painted over the
  text), so the card background can be anything.
*/

:root {
  --reason-hold: 840ms;
  --reason-step: 500ms;
  --reason-lines: 2;
  --reason-fade: 28px;
  --reason-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-reason { position: relative; overflow: hidden; }
.t-reason-viewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
  /* Edge fades are a mask, not painted gradients, so the card
     background can be anything. */
  -webkit-mask-image: linear-gradient(
    transparent 0,
    black var(--reason-fade),
    black calc(100% - var(--reason-fade)),
    transparent 100%);
  mask-image: linear-gradient(
    transparent 0,
    black var(--reason-fade),
    black calc(100% - var(--reason-fade)),
    transparent 100%);
}
.t-reason-scroll {
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(0);
  will-change: transform;
}
/* JS drives the tween:
     scroll.style.transition = 'transform var(--reason-step) var(--reason-ease)';
     scroll.style.transform  = 'translateY(-' + offset + 'px)';
   and wraps the offset by one copy's height with transition: none. */

@media (prefers-reduced-motion: reduce) {
  .t-reason-scroll { transition: none !important; transform: none !important; }
}
```
