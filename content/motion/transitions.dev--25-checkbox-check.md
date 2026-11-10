---
title: "组件动效 · 复选框勾选（Checkbox check）"
source: https://transitions.dev/transitions/checkbox-check/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-25-checkbox-check
publisher: "Transitions.dev"
---

# 组件动效 · 复选框勾选（Checkbox check）

> 来源：[Transitions.dev](https://transitions.dev/transitions/checkbox-check/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/checkbox-check/index.html`。

## Overview

Check draws on with a stroke path

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Checkbox check */

/*
  Usage:
    <button class="t-check" role="checkbox" aria-checked="false">
      <svg viewBox="0 0 10.1668 10.1668">
        <path d="M1 5.52L3.92 9.17L9.17 1"/>
      </svg>
    </button>

  Toggle `aria-checked`. The box fills, then the check stroke
  draws in via stroke-dashoffset. Set --check-len to the path's
  getTotalLength() (rounded up) so it never over/under-draws;
  transitioning offset lets a mid-draw uncheck reverse cleanly.
*/

:root {
  --check-box: 150ms;
  --check-draw: 350ms;
  --check-delay: 0ms;
  --check-uncheck: 150ms;
  --check-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-check {
  transition:
    background var(--check-box) var(--check-ease),
    box-shadow var(--check-box) var(--check-ease);
}
.t-check svg path {
  stroke-dasharray: var(--check-len, 15);
  stroke-dashoffset: var(--check-len, 15);
  transition: stroke-dashoffset var(--check-uncheck) var(--check-ease);
}
.t-check[aria-checked="true"] svg path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset var(--check-draw) var(--check-ease) var(--check-delay);
}

@media (prefers-reduced-motion: reduce) {
  .t-check, .t-check svg path { transition: none !important; }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Checkbox check (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --check-box: 150ms;
  --check-draw: 350ms;
  --check-delay: 0ms;
  --check-uncheck: 150ms;
  --check-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-check {
  transition:
    background var(--check-box) var(--check-ease),
    box-shadow var(--check-box) var(--check-ease);
}
.t-check svg path {
  stroke-dasharray: var(--check-len, 15);
  stroke-dashoffset: var(--check-len, 15);
  transition: stroke-dashoffset var(--check-uncheck) var(--check-ease);
}
.t-check[aria-checked="true"] svg path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset var(--check-draw) var(--check-ease) var(--check-delay);
}

@media (prefers-reduced-motion: reduce) {
  .t-check, .t-check svg path { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p25")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p25";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Toggle `aria-checked`; the box fills
// then the check stroke-draws. Measure the path length into --check-len on
// mount so the dasharray/dashoffset pair never over/under-draws.
export function Checkbox({ label }) {
  const [checked, setChecked] = useState(false);
  const boxRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const len = pathRef.current.getTotalLength();
    boxRef.current.style.setProperty("--check-len", String(Math.ceil(len) + 1));
  }, []);

  return (
    <label className="t-field" onClick={() => setChecked((v) => !v)}>
      <button ref={boxRef} type="button" className="t-check" role="checkbox" aria-checked={checked}>
        <svg width="10" height="10" viewBox="0 0 10.1668 10.1668" fill="none">
          <path ref={pathRef} d="M1 5.52L3.92 9.17L9.17 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {label}
    </label>
  );
}
```
