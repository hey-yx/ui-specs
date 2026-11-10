---
title: "组件动效 · 下拉菜单形变（Dropdown menu morph）"
source: https://transitions.dev/transitions/dropdown-menu-morph/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-20-dropdown-menu-morph
publisher: "Transitions.dev"
---

# 组件动效 · 下拉菜单形变（Dropdown menu morph）

> 来源：[Transitions.dev](https://transitions.dev/transitions/dropdown-menu-morph/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/dropdown-menu-morph/index.html`。

## Overview

Button morphs into a menu surface

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

```css
/* Transitions.dev — Plus to menu morph */

/*
  Usage:
    <div class="t-morph" data-open="false">
      <div class="t-morph-menu"> … menu items … </div>
      <button class="t-morph-plus" aria-expanded="false">+</button>
    </div>

  Toggle `data-open` on the container (and `aria-expanded`
  on the button). CSS animates the surface size + corner
  radius and cross-fades the plus ↔ menu. Wrap the morph in
  a relatively-positioned anchor sized to the OPEN footprint
  if you want it to grow out of a fixed corner.
*/

:root {
  --morph-open-dur: 350ms;
  --morph-close-dur: 250ms;
  --morph-ease: cubic-bezier(0.34, 1.25, 0.64, 1);
  --morph-close-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --morph-r-closed: 40px;
  --morph-r-open: 20px;
  --morph-fade-dur: 200ms;
  --morph-slide: 40px;
  --morph-rotate: 45deg;
  --morph-scale: 0.97;
  --morph-blur: 2px;
}

/* Closed: a small circular button. Open: a rounded panel.
   Width/height/border-radius animate; the open state uses a
   bouncier ease than the close. */
.t-morph {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--morph-r-closed);
  overflow: hidden;
  transition:
    width var(--morph-close-dur) var(--morph-close-ease),
    height var(--morph-close-dur) var(--morph-close-ease),
    border-radius var(--morph-close-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] {
  width: 183px;
  height: 172px;
  border-radius: var(--morph-r-open);
  transition:
    width var(--morph-open-dur) var(--morph-ease),
    height var(--morph-open-dur) var(--morph-ease),
    border-radius var(--morph-open-dur) var(--morph-ease);
}
/* Plus fades + slides out and the icon rotates into an ×. */
.t-morph-plus {
  position: absolute;
  inset: auto 0 0 auto;
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border: 0; background: transparent; cursor: pointer;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph-plus svg {
  transition: transform var(--morph-open-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-plus {
  opacity: 0;
  transform: translateX(calc(-1 * var(--morph-slide)));
  filter: blur(var(--morph-blur));
  pointer-events: none;
}
.t-morph[data-open="true"] .t-morph-plus svg {
  transform: scale(var(--morph-scale)) rotate(var(--morph-rotate));
}
/* Menu starts slid in + scaled + blurred; reveals on open. */
.t-morph-menu {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(var(--morph-slide)) scale(var(--morph-scale));
  filter: blur(var(--morph-blur));
  pointer-events: none;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-menu {
  opacity: 1;
  transform: translateX(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .t-morph, .t-morph-plus, .t-morph-menu { transition: none !important; }
}
```

## React

Self-contained component; the styles inject themselves on first import.

```jsx
// Transitions.dev — Plus to menu morph (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --morph-open-dur: 350ms;
  --morph-close-dur: 250ms;
  --morph-ease: cubic-bezier(0.34, 1.25, 0.64, 1);
  --morph-close-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --morph-r-closed: 40px;
  --morph-r-open: 20px;
  --morph-fade-dur: 200ms;
  --morph-slide: 40px;
  --morph-rotate: 45deg;
  --morph-scale: 0.97;
  --morph-blur: 2px;
}

/* Closed: a small circular button. Open: a rounded panel.
   Width/height/border-radius animate; the open state uses a
   bouncier ease than the close. */
.t-morph {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--morph-r-closed);
  overflow: hidden;
  transition:
    width var(--morph-close-dur) var(--morph-close-ease),
    height var(--morph-close-dur) var(--morph-close-ease),
    border-radius var(--morph-close-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] {
  width: 183px;
  height: 172px;
  border-radius: var(--morph-r-open);
  transition:
    width var(--morph-open-dur) var(--morph-ease),
    height var(--morph-open-dur) var(--morph-ease),
    border-radius var(--morph-open-dur) var(--morph-ease);
}
/* Plus fades + slides out and the icon rotates into an ×. */
.t-morph-plus {
  position: absolute;
  inset: auto 0 0 auto;
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border: 0; background: transparent; cursor: pointer;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph-plus svg {
  transition: transform var(--morph-open-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-plus {
  opacity: 0;
  transform: translateX(calc(-1 * var(--morph-slide)));
  filter: blur(var(--morph-blur));
  pointer-events: none;
}
.t-morph[data-open="true"] .t-morph-plus svg {
  transform: scale(var(--morph-scale)) rotate(var(--morph-rotate));
}
/* Menu starts slid in + scaled + blurred; reveals on open. */
.t-morph-menu {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(var(--morph-slide)) scale(var(--morph-scale));
  filter: blur(var(--morph-blur));
  pointer-events: none;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-menu {
  opacity: 1;
  transform: translateX(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .t-morph, .t-morph-plus, .t-morph-menu { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p20")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p20";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// `data-open` drives the whole morph; CSS handles the size + radius
// animation and the plus ↔ menu cross-fade. Outside click / Escape
// close the menu.
export function PlusMenu({ children }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("click", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="t-morph" data-open={open ? "true" : "false"}>
      <div className="t-morph-menu" role="menu">{children}</div>
      <button
        type="button"
        className="t-morph-plus"
        aria-expanded={open ? "true" : "false"}
        aria-label="Open menu"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
```
