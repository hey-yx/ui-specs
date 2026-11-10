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

## Overview

Thumb slides with a double bounce

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

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

## React

Self-contained component; the styles inject themselves on first import.

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
