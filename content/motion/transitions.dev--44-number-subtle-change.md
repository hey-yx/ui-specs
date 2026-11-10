---
title: "组件动效 · 数字微变（Number subtle change）"
source: https://transitions.dev/transitions/number-subtle-change/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-44-number-subtle-change
publisher: "Transitions.dev"
---

# 组件动效 · 数字微变（Number subtle change）

> 来源：[Transitions.dev](https://transitions.dev/transitions/number-subtle-change/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/number-subtle-change/index.html`。

## Overview

Changed digits cross-fade in place

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Number subtle change */

/*
  Usage:
    <span class="t-subtle-number is-animating" style="--subtle-dir: 1">
      1,2
      <span class="t-subtle-slot">
        <span class="t-subtle-old" aria-hidden="true">8</span>
        <span class="t-subtle-new">9</span>
      </span>
      4
    </span>

  Each changed digit gets a .t-subtle-slot with the old digit and the
  new one; digits that did not change stay plain text. Set --subtle-dir
  to 1 when the number went up and -1 when it went down.

  Replay: remove `.is-animating`, re-render, force a reflow, re-add it.

  Sizes: --subtle-distance and --subtle-blur are in em, so they follow
  the font size of the number.
*/

:root {
  --subtle-dur: 455ms;
  --subtle-distance: 0.14em;
  --subtle-blur: 0.042em;
  --subtle-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-subtle-number {
  display: inline-flex;
  align-items: baseline;
  font-variant-numeric: tabular-nums;
}
.t-subtle-slot { position: relative; display: inline-block; }
.t-subtle-new { display: inline-block; }
.t-subtle-old { position: absolute; inset: 0; text-align: center; pointer-events: none; }
.t-subtle-number.is-animating .t-subtle-new {
  animation: t-subtle-in var(--subtle-dur) var(--subtle-ease) both;
}
.t-subtle-number.is-animating .t-subtle-old {
  animation: t-subtle-out var(--subtle-dur) var(--subtle-ease) both;
}
@keyframes t-subtle-in {
  from {
    transform: translateY(calc(var(--subtle-distance) * var(--subtle-dir, 1)));
    opacity: 0;
    filter: blur(var(--subtle-blur));
  }
}
@keyframes t-subtle-out {
  to {
    transform: translateY(calc(var(--subtle-distance) * var(--subtle-dir, 1) * -1));
    opacity: 0;
    filter: blur(var(--subtle-blur));
  }
}

@media (prefers-reduced-motion: reduce) {
  .t-subtle-number .t-subtle-new { animation: none !important; }
  .t-subtle-number .t-subtle-old { display: none; }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Number subtle change (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --subtle-dur: 455ms;
  --subtle-distance: 0.14em;
  --subtle-blur: 0.042em;
  --subtle-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-subtle-number {
  display: inline-flex;
  align-items: baseline;
  font-variant-numeric: tabular-nums;
}
.t-subtle-slot { position: relative; display: inline-block; }
.t-subtle-new { display: inline-block; }
.t-subtle-old { position: absolute; inset: 0; text-align: center; pointer-events: none; }
.t-subtle-number.is-animating .t-subtle-new {
  animation: t-subtle-in var(--subtle-dur) var(--subtle-ease) both;
}
.t-subtle-number.is-animating .t-subtle-old {
  animation: t-subtle-out var(--subtle-dur) var(--subtle-ease) both;
}
@keyframes t-subtle-in {
  from {
    transform: translateY(calc(var(--subtle-distance) * var(--subtle-dir, 1)));
    opacity: 0;
    filter: blur(var(--subtle-blur));
  }
}
@keyframes t-subtle-out {
  to {
    transform: translateY(calc(var(--subtle-distance) * var(--subtle-dir, 1) * -1));
    opacity: 0;
    filter: blur(var(--subtle-blur));
  }
}

@media (prefers-reduced-motion: reduce) {
  .t-subtle-number .t-subtle-new { animation: none !important; }
  .t-subtle-number .t-subtle-old { display: none; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p35")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p35";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Changed digits cross-fade in place,
// rising when the number goes up and falling when it goes down.
const format = (n) => n.toLocaleString("en-US");

export function NumberSubtleChange({ initial = 1284 }) {
  const [value, setValue] = useState(initial);
  const prev = useRef(value);
  const from = prev.current;
  useEffect(() => { prev.current = value; }, [value]);

  const oldStr = format(from);
  const str = format(value);
  const sameLength = oldStr.length === str.length;

  const next = () => {
    let delta = 0;
    while (delta === 0) delta = Math.floor(Math.random() * 81) - 40;
    setValue((v) => v + delta);
  };

  return (
    <>
      <button type="button" onClick={next}>Animate</button>
      {/* The key restarts the animation on every change. */}
      <span
        key={value}
        className={"t-subtle-number" + (from !== value ? " is-animating" : "")}
        style={{ "--subtle-dir": value >= from ? 1 : -1 }}
        aria-label={str}
      >
        {str.split("").map((ch, i) =>
          sameLength && oldStr[i] === ch ? (
            ch
          ) : (
            <span key={i} className="t-subtle-slot">
              {sameLength && (
                <span className="t-subtle-old" aria-hidden="true">{oldStr[i]}</span>
              )}
              <span className="t-subtle-new">{ch}</span>
            </span>
          )
        )}
      </span>
    </>
  );
}
```
