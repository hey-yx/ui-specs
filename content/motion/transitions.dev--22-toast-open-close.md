---
title: "组件动效 · 轻提示开合（Toast open / close）"
source: https://transitions.dev/transitions/toast-open-close/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-22-toast-open-close
publisher: "Transitions.dev"
---

# 组件动效 · 轻提示开合（Toast open / close）

> 来源：[Transitions.dev](https://transitions.dev/transitions/toast-open-close/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/toast-open-close/index.html`。

## Overview

Rises in with fade, blur and scale

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Toast open / close */

/*
  Usage:
    <div class="t-toast" data-open="false"> … </div>

  Toggle `.is-open` on the toast. It rises from below with a
  fade + cross-blur + slight scale; opening uses the slower
  open clock, the resting (closed) transition uses the faster
  close clock, so a single class gives the open/close asymmetry.
*/

:root {
  --toast-open: 350ms;
  --toast-close: 250ms;
  --toast-distance: 16px;
  --toast-blur: 2px;
  --toast-scale: 0.97;
  --toast-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-toast {
  opacity: 0;
  transform: translateY(var(--toast-distance)) scale(var(--toast-scale));
  filter: blur(var(--toast-blur));
  will-change: transform, opacity, filter;
  transition:
    opacity var(--toast-close) var(--toast-ease),
    transform var(--toast-close) var(--toast-ease),
    filter var(--toast-close) var(--toast-ease);
}
.t-toast.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition:
    opacity var(--toast-open) var(--toast-ease),
    transform var(--toast-open) var(--toast-ease),
    filter var(--toast-open) var(--toast-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-toast { transition: none !important; }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Toast open / close (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --toast-open: 350ms;
  --toast-close: 250ms;
  --toast-distance: 16px;
  --toast-blur: 2px;
  --toast-scale: 0.97;
  --toast-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-toast {
  opacity: 0;
  transform: translateY(var(--toast-distance)) scale(var(--toast-scale));
  filter: blur(var(--toast-blur));
  will-change: transform, opacity, filter;
  transition:
    opacity var(--toast-close) var(--toast-ease),
    transform var(--toast-close) var(--toast-ease),
    filter var(--toast-close) var(--toast-ease);
}
.t-toast.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition:
    opacity var(--toast-open) var(--toast-ease),
    transform var(--toast-open) var(--toast-ease),
    filter var(--toast-open) var(--toast-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-toast { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p22")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p22";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Toggle `.is-open` on the toast —
// opening uses the slower clock, the resting (closed) transition uses the
// faster one, so a single class gives the open/close asymmetry.
export function Toast({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen((v) => !v)}>Animate</button>
      <div
        className={"t-toast" + (open ? " is-open" : "")}
        role="status"
        aria-hidden={!open}
      >
        {children}
      </div>
    </>
  );
}
```
