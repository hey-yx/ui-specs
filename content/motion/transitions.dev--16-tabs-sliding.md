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

## 它解决什么

标签切换时如果选中态是瞬间跳过去的，用户会怀疑自己点错了位置，标签越多越明显。这个动效让一个白色圆角胶囊在标签之间滑过去，宽度跟着目标标签变化，把「当前在哪一项」从静态高亮变成一段能被眼睛追踪的位移。

## 动效怎么构成

`.t-tabs` 是 `inline-flex` 容器，`gap: 3px`、`padding: 3px`、`border-radius: 48px`、底色 `var(--tabs-bar-bg)`，挂 `role="tablist"`。子元素顺序关键：第一个是 `.t-tabs-pill`，一个 `aria-hidden="true"` 的纯装饰层；后面才是若干 `.t-tab` 按钮，每个带 `role="tab"` 与 `aria-selected`。

层序固定：标签 `z-index: 1`，胶囊 `z-index: 0`，文字压在胶囊底色上。胶囊 `position: absolute`、`top: 3px`、`left: 0`、`width: 0`、`transform: translateX(0)`、`pointer-events: none`、`will-change: transform, width`。

`translateX()` 取的是目标标签的 `offsetLeft`，与胶囊的 `left: 0` 同属一个坐标系，不用再补 `padding`。标签的 `padding: 4px 12px` 会算进 `offsetWidth`，胶囊宽度自然跟着文字宽度走。

胶囊与标签同高（`30px`），宽度由测量写入，所以选中态始终与目标标签等宽等高，不会露出半截底色。

动的是 `transform` 与 `width` 两条，共用 `--tabs-dur` 与 `--tabs-ease`；标签自己只动 `color`，用的是同一组变量，所以文字变深和胶囊滑动同一个节奏。

位置的来源是 JS：点击时把目标标签的 `offsetLeft` 写进 `translateX()`、`offsetWidth` 写进 `width`，CSS 的 `transition` 在前后两次测量值之间补间，于是胶囊是滑过去而不是重画。

首次绘制与窗口 resize 时，同样的值要在关掉过渡的情况下写一遍：临时把 `transition` 设成 `none`，写入几何值，读一次 `offsetWidth` 强制 reflow，再还原 `transition`。少了这步，胶囊会从 `translateX(0)` 飞过来。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--tabs-dur` | 250ms | 胶囊位移、宽度与标签颜色的过渡时长 |
| `--tabs-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 上述过渡共用的缓动 |
| `--tabs-text-muted` | rgba(15, 15, 15, 0.8) | 未选中标签的文字色 |
| `--tabs-text-active` | #0f0f0f | 选中与 hover 态的文字色 |
| `--tabs-bar-bg` | #f1f1f1 | 标签条底色 |
| `--tabs-pill-bg` | #ffffff | 胶囊底色 |
| `gap` | 3px | 标签之间的间距 |
| `padding` | 3px | 标签条内边距，胶囊的 `top` 也取这个值 |
| `height` | 30px | 标签与胶囊同高 |
| `border-radius` | 48px | 条的圆角，胶囊与标签沿用同值 |
| `padding`（标签） | 4px 12px | 标签自身内边距，影响 `offsetWidth` |
| `aria-selected` | 属性 | 唯一选中态来源，也是文字变色的选择器 |

## 怎么用

1. 按引用搭结构：容器 `role="tablist"`，胶囊写在所有标签之前，标签依次渲染。
2. 点击时先更新当前索引与每个标签的 `aria-selected`，再把目标标签的 `offsetLeft`、`offsetWidth` 写到胶囊的 `transform` 与 `width`，交给过渡补间。
3. 首帧用 `requestAnimationFrame` 走一次无动画定位，避免从 `translateX(0)` 起步。
4. 监听 `resize`，同样走无动画路径重写，防止视口变化后胶囊与标签错位。
5. reduced-motion 下胶囊与标签的 `transition` 都被 `none !important` 停掉，切换变成直接跳位，选中态与文字色仍然正确。

## 什么时候别用

标签宽度差异极大时，`width` 的补间会让胶囊中途明显变形，改用固定宽度、只动 `translateX` 的指示条更稳。标签需要换行或横向滚动时也别用，`offsetLeft` 只在同一行内可靠。

## 注意

- `aria-selected` 是唯一状态源，CSS 里 hover 与选中都用 `[aria-selected="true"]`。再额外加一个 `.is-active` 类，两套状态迟早不同步。
- `will-change: transform, width` 会让胶囊常驻一个合成层，标签多时记得在空闲期撤掉。
- 胶囊 `pointer-events: none`，点击永远落在标签上，不会出现点不到的缝。
- 胶囊必须 `aria-hidden="true"`，它是纯视觉指示，不该被读屏念到。
- 原文只处理了点击，`role="tablist"` 惯用的方向键切换与 roving tabindex 没有实现，键盘用户要靠你补。
- 标签的顺序或文案变了（排序、筛选、改标签名）要重新定位一次，胶囊不会自己跟上。
- 初始的 `width: 0` 与 `translateX(0)` 都是写死的，所以定位前胶囊不可见，首帧不会在左上角闪一下。
- 过渡的是 `width`，每帧都会触发布局计算；标签多、切换频繁时建议改成固定宽度加纯 `translateX`，`will-change` 里也只留 `transform`。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

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

### React

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
