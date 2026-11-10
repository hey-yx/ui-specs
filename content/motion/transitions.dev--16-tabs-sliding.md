---
title: "组件动效 · 标签页滑块（Tabs sliding）"
source: https://transitions.dev/transitions/tabs-sliding/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-16-tabs-sliding
publisher: "Transitions.dev"
---

# 组件动效 · 标签页滑块（Tabs sliding）

> 来源：[Transitions.dev](https://transitions.dev/transitions/tabs-sliding/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/tabs-sliding/index.html`。

## Overview

Pill indicator follows the active tab

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Tabs sliding */

/*
  Usage:
    <div class="t-tabs" role="tablist">
      <span class="t-tabs-pill" aria-hidden="true"></span>
      <button class="t-tab" role="tab" aria-selected="true">Plan</button>
      <button class="t-tab" role="tab" aria-selected="false">Debug</button>
      <button class="t-tab" role="tab" aria-selected="false">Ask</button>
    </div>

  Wire-up:
    On click, flip aria-selected on each tab and write the
    active tab's offsetLeft / offsetWidth onto the pill:
      pill.style.transform = `translateX(${tab.offsetLeft}px)`;
      pill.style.width     = `${tab.offsetWidth}px`;
    On first paint and resize, write the same values WITHOUT
    a transition (suspend with `transition: none`, force a
    reflow, restore) so the pill snaps to position before any
    animation can run.
*/

:root {
  --tabs-dur: 250ms;
  --tabs-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tabs-text-muted: rgba(15, 15, 15, 0.8);
  --tabs-text-active: #0f0f0f;
  --tabs-bar-bg: #f1f1f1;
  --tabs-pill-bg: #ffffff;
}

/* The bar is just a flex container with padding for the pill
   to sit inside. Tabs sit on z-index: 1, the pill on z-index: 0,
   so labels read above the pill background. */
.t-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border-radius: 48px;
  background: var(--tabs-bar-bg);
}
.t-tab {
  position: relative;
  appearance: none;
  border: 0;
  background: transparent;
  height: 30px;
  padding: 4px 12px;
  color: var(--tabs-text-muted);
  cursor: pointer;
  border-radius: 48px;
  z-index: 1;
  transition: color var(--tabs-dur) var(--tabs-ease);
}
.t-tab:not([aria-selected="true"]):hover,
.t-tab[aria-selected="true"] {
  color: var(--tabs-text-active);
}

/* The pill: width + transform are written inline by JS so
   the transition tweens between the previous and next
   measured positions. */
.t-tabs-pill {
  position: absolute;
  top: 3px;
  left: 0;
  height: 30px;
  width: 0;
  background: var(--tabs-pill-bg);
  border-radius: 48px;
  transform: translateX(0);
  transition:
    transform var(--tabs-dur) var(--tabs-ease),
    width     var(--tabs-dur) var(--tabs-ease);
  will-change: transform, width;
  z-index: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .t-tabs-pill, .t-tab { transition: none !important; }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Tabs sliding (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --tabs-dur: 250ms;
  --tabs-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tabs-text-muted: rgba(15, 15, 15, 0.8);
  --tabs-text-active: #0f0f0f;
  --tabs-bar-bg: #f1f1f1;
  --tabs-pill-bg: #ffffff;
}

/* The bar is just a flex container with padding for the pill
   to sit inside. Tabs sit on z-index: 1, the pill on z-index: 0,
   so labels read above the pill background. */
.t-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border-radius: 48px;
  background: var(--tabs-bar-bg);
}
.t-tab {
  position: relative;
  appearance: none;
  border: 0;
  background: transparent;
  height: 30px;
  padding: 4px 12px;
  color: var(--tabs-text-muted);
  cursor: pointer;
  border-radius: 48px;
  z-index: 1;
  transition: color var(--tabs-dur) var(--tabs-ease);
}
.t-tab:not([aria-selected="true"]):hover,
.t-tab[aria-selected="true"] {
  color: var(--tabs-text-active);
}

/* The pill: width + transform are written inline by JS so
   the transition tweens between the previous and next
   measured positions. */
.t-tabs-pill {
  position: absolute;
  top: 3px;
  left: 0;
  height: 30px;
  width: 0;
  background: var(--tabs-pill-bg);
  border-radius: 48px;
  transform: translateX(0);
  transition:
    transform var(--tabs-dur) var(--tabs-ease),
    width     var(--tabs-dur) var(--tabs-ease);
  will-change: transform, width;
  z-index: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .t-tabs-pill, .t-tab { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p16")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p16";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// The pill's transform + width are written inline by JS so the
// CSS transition tweens between the previous and next measured
// positions. We re-snap (no animation) on resize so a viewport
// change doesn't desync the pill from its tab.
export function SlidingTabs({ tabs }) {
  const rootRef = useRef(null);
  const pillRef = useRef(null);
  const tabRefs = useRef([]);
  const [active, setActive] = useState(0);

  const moveTo = (idx, animate) => {
    const tab = tabRefs.current[idx];
    const pill = pillRef.current;
    if (!tab || !pill) return;
    const left = tab.offsetLeft;
    const width = tab.offsetWidth;
    if (!animate) {
      const prev = pill.style.transition;
      pill.style.transition = "none";
      pill.style.transform = `translateX(${left}px)`;
      pill.style.width = `${width}px`;
      void pill.offsetWidth;
      pill.style.transition = prev;
    } else {
      pill.style.transform = `translateX(${left}px)`;
      pill.style.width = `${width}px`;
    }
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(() => moveTo(active, false));
    const onResize = () => moveTo(active, false);
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  return (
    <div ref={rootRef} className="t-tabs" role="tablist">
      <span ref={pillRef} className="t-tabs-pill" aria-hidden="true" />
      {tabs.map((label, i) => (
        <button
          key={label}
          ref={(el) => { tabRefs.current[i] = el; }}
          type="button"
          className="t-tab"
          role="tab"
          aria-selected={i === active}
          onClick={() => { setActive(i); moveTo(i, true); }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
```
