---
title: "组件动效 · 了解更多悬停（Learn more hover）"
source: https://transitions.dev/transitions/learn-more-hover/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-24-learn-more-hover
publisher: "Transitions.dev"
---

# 组件动效 · 了解更多悬停（Learn more hover）

> 来源：[Transitions.dev](https://transitions.dev/transitions/learn-more-hover/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/learn-more-hover/index.html`。

## Overview

Chevron shifts and opens on hover

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Learn more hover */

/*
  Usage:
    <button class="t-learn">Learn more
      <span class="t-learn-chevron"><svg>
        <path class="t-learn-arm t-learn-arm-top" d="M6 4L10 8"/>
        <path class="t-learn-arm t-learn-arm-bot" d="M10 8L6 12"/>
      </svg></span>
    </button>

  On hover the chevron shifts right and its two arms rotate
  apart about the apex (10, 8) so the angle opens; hover-out
  returns. Pure CSS.
*/

:root {
  --learn-shift: 2px;
  --learn-spread: 8deg;
  --learn-in: 350ms;
  --learn-out: 350ms;
  --learn-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-learn-chevron {
  display: inline-flex;
  transform: translateX(0);
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn-arm {
  transform-box: view-box;
  transform-origin: 10px 8px;
  vector-effect: non-scaling-stroke;
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn:hover .t-learn-chevron { transform: translateX(var(--learn-shift)); transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm { transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm-top { transform: rotate(var(--learn-spread)); }
.t-learn:hover .t-learn-arm-bot { transform: rotate(calc(var(--learn-spread) * -1)); }

@media (prefers-reduced-motion: reduce) {
  .t-learn-chevron, .t-learn-arm { transition: none !important; }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Learn more hover (React, self-contained)
// Drop into any React project — no extra CSS file needed.

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --learn-shift: 2px;
  --learn-spread: 8deg;
  --learn-in: 350ms;
  --learn-out: 350ms;
  --learn-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-learn-chevron {
  display: inline-flex;
  transform: translateX(0);
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn-arm {
  transform-box: view-box;
  transform-origin: 10px 8px;
  vector-effect: non-scaling-stroke;
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn:hover .t-learn-chevron { transform: translateX(var(--learn-shift)); transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm { transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm-top { transform: rotate(var(--learn-spread)); }
.t-learn:hover .t-learn-arm-bot { transform: rotate(calc(var(--learn-spread) * -1)); }

@media (prefers-reduced-motion: reduce) {
  .t-learn-chevron, .t-learn-arm { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p24")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p24";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Pure CSS — the hover shifts the
// chevron right and rotates its two arms apart about the apex; no JS.
export function LearnMore() {
  return (
    <button type="button" className="t-learn">
      Learn more
      <span className="t-learn-chevron" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path className="t-learn-arm t-learn-arm-top" d="M6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path className="t-learn-arm t-learn-arm-bot" d="M10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
```
