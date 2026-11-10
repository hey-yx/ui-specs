---
title: "组件动效 · 手风琴展开（Accordion）"
source: https://transitions.dev/transitions/accordion/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-21-accordion
publisher: "Transitions.dev"
---

# 组件动效 · 手风琴展开（Accordion）

> 来源：[Transitions.dev](https://transitions.dev/transitions/accordion/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/accordion/index.html`。

## Overview

Grid-rows height with chevron morph

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Accordion expand */

/*
  Usage:
    <div class="t-acc" data-open="false">
      <button class="t-acc-head" aria-expanded="false">
        Title
        <span class="t-acc-chevron">
          <svg viewBox="0 0 16 16"><path d="M4 6.5L8 10.5L12 6.5"/></svg>
        </span>
      </button>
      <div class="t-acc-panel"><div class="t-acc-panel-inner"> … </div></div>
    </div>

  Toggle `data-open` on the item. The panel animates via
  grid-template-rows 0fr ↔ 1fr (no JS height measuring) and
  the chevron flips vertically (scaleY) from a "v" to a "^".
*/

:root {
  --acc-expand: 250ms;
  --acc-collapse: 250ms;
  --acc-chevron: 250ms;
  --acc-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* grid-template-rows 0fr → 1fr gives a clean height animation
   with no JS measurement; the inner element clips overflow. */
.t-acc-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--acc-collapse) var(--acc-ease);
}
.t-acc[data-open="true"] .t-acc-panel {
  grid-template-rows: 1fr;
  transition: grid-template-rows var(--acc-expand) var(--acc-ease);
}
.t-acc-panel-inner {
  overflow: hidden;
  opacity: 0;
  filter: blur(2px);
  transition:
    opacity var(--acc-collapse) var(--acc-ease),
    filter var(--acc-collapse) var(--acc-ease);
}
.t-acc[data-open="true"] .t-acc-panel-inner {
  opacity: 1;
  filter: blur(0);
  transition:
    opacity var(--acc-expand) var(--acc-ease),
    filter var(--acc-expand) var(--acc-ease);
}
/* Flip the chevron vertically to turn the "v" into a "^".
   scaleY(-1) about the centre passes through a flat line at
   the midpoint (same look as a `d:` path morph) but animates
   in every browser, unlike CSS `d:` morphing (Chromium only).
   The chevron path is symmetric about the 16x16 viewBox
   centre, so the flip lands exactly on the "^"; non-scaling
   -stroke keeps the stroke width constant through the flip. */
.t-acc-chevron {
  display: inline-flex;
  transform: scaleY(1);
  transform-origin: center;
  transition: transform var(--acc-chevron) var(--acc-ease);
}
.t-acc-chevron path { vector-effect: non-scaling-stroke; }
.t-acc[data-open="true"] .t-acc-chevron {
  transform: scaleY(-1);
}

@media (prefers-reduced-motion: reduce) {
  .t-acc-panel, .t-acc-panel-inner, .t-acc-chevron {
    transition: none !important;
  }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Accordion expand (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --acc-expand: 250ms;
  --acc-collapse: 250ms;
  --acc-chevron: 250ms;
  --acc-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* grid-template-rows 0fr → 1fr gives a clean height animation
   with no JS measurement; the inner element clips overflow. */
.t-acc-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--acc-collapse) var(--acc-ease);
}
.t-acc[data-open="true"] .t-acc-panel {
  grid-template-rows: 1fr;
  transition: grid-template-rows var(--acc-expand) var(--acc-ease);
}
.t-acc-panel-inner {
  overflow: hidden;
  opacity: 0;
  filter: blur(2px);
  transition:
    opacity var(--acc-collapse) var(--acc-ease),
    filter var(--acc-collapse) var(--acc-ease);
}
.t-acc[data-open="true"] .t-acc-panel-inner {
  opacity: 1;
  filter: blur(0);
  transition:
    opacity var(--acc-expand) var(--acc-ease),
    filter var(--acc-expand) var(--acc-ease);
}
/* Flip the chevron vertically to turn the "v" into a "^".
   scaleY(-1) about the centre passes through a flat line at
   the midpoint (same look as a `d:` path morph) but animates
   in every browser, unlike CSS `d:` morphing (Chromium only).
   The chevron path is symmetric about the 16x16 viewBox
   centre, so the flip lands exactly on the "^"; non-scaling
   -stroke keeps the stroke width constant through the flip. */
.t-acc-chevron {
  display: inline-flex;
  transform: scaleY(1);
  transform-origin: center;
  transition: transform var(--acc-chevron) var(--acc-ease);
}
.t-acc-chevron path { vector-effect: non-scaling-stroke; }
.t-acc[data-open="true"] .t-acc-chevron {
  transform: scaleY(-1);
}

@media (prefers-reduced-motion: reduce) {
  .t-acc-panel, .t-acc-panel-inner, .t-acc-chevron {
    transition: none !important;
  }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p21")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p21";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// `data-open` toggles the grid-rows height animation and the chevron
// path morph — no height measuring needed.
export function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="t-acc" data-open={open ? "true" : "false"}>
      <button
        type="button"
        className="t-acc-head"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <span className="t-acc-chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6.5L8 10.5L12 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="t-acc-panel">
        <div className="t-acc-panel-inner">{children}</div>
      </div>
    </div>
  );
}
```
