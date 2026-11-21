---
title: "组件动效 · 提示浮层开合（Tooltip open / close）"
source: https://transitions.dev/transitions/tooltip-open-close/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-18-tooltip-open-close
publisher: "Transitions.dev"
---

# 组件动效 · 提示浮层开合（Tooltip open / close）

> 来源：[Transitions.dev](https://transitions.dev/transitions/tooltip-open-close/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/tooltip-open-close/index.html`。

## 它解决什么

图标按钮上的提示如果跟着指针立刻出现又立刻消失，扫过一排按钮会连闪几下，手和眼睛都跟不上。这个动效把出现做成带延迟的轻浮出、把消失压到极短，并在同一组触发器之间移动时让气泡滑过去，而不是先消失再重画。

## 动效怎么构成

一个 `.t-tt-group`（`position: relative`、`inline-flex`）里放多个 `.t-tt-trigger` 按钮和一个共享的 `.t-tt` 气泡。气泡带 `role="tooltip"`、`id`、`aria-hidden` 与 `data-show`，每个触发器用 `aria-describedby` 指向同一个 `id`，文字由 JS 写进内层 `.t-tt-text`。

气泡 `position: absolute`、`bottom: calc(100% + 8px)`、`left: 0`、`width: 0`（测量值由 JS 写入）、`overflow: hidden`、`pointer-events: none`，默认 `opacity: 0`。初始 `width: 0` 让它在隐藏时不占宽度，也不会挡住下面的内容。

它没用 `transform`，而是独立的 `translate` 与 `scale`：`translate: var(--tt-x, 0px) 0` 负责在触发器之间水平移动，`scale: var(--tt-scale)` 负责浮出时的轻微放大，`transform-origin: 50% 100%` 让缩放以底边中点为锚。

两条时间线分开。默认规则管离开：`opacity` 与 `scale` 用 `--tt-out-dur`、`--tt-out-ease` 且不带延迟，隐藏立刻发生；`translate` 与 `width` 用 `--tt-move-dur`、`--tt-move-ease`，一直可用。

气泡的内边距、圆角与三层阴影都在样式表里，触发器外观由你决定。

`[data-show="true"]` 只换前两条：时长变 `--tt-in-dur`、缓动变 `--tt-in-ease`，并追加 `--tt-delay` 作为延迟；位移与宽度那条原样保留。于是延迟只存在于显示规则里，离开时没有延迟要等；气泡已在显示、指针移到另一个触发器时，变的是 `translate` 与 `width`，走无延迟的移动线，不会重新等一次。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--tt-in-dur` | 150ms | 出现时 `opacity` 与 `scale` 的时长 |
| `--tt-out-dur` | 50ms | 消失时长，比出现短得多 |
| `--tt-scale` | 0.98 | 隐藏时的缩放值，显示时回到 1 |
| `--tt-delay` | 80ms | 出现延迟，只挂在显示规则上 |
| `--tt-in-ease` | ease-out | 出现的缓动 |
| `--tt-out-ease` | ease-out | 消失的缓动 |
| `--tt-move-dur` | 160ms | 位移与宽度变化的时长 |
| `--tt-move-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 位移与宽度变化的缓动 |
| `--tt-bg` | #ffffff | 气泡底色 |
| `--tt-fg` | #2f2f2f | 气泡文字色 |
| `--tt-x` | 0px | 水平位移，兜底 `0px`，由 JS 写入 |
| `calc(100% + 8px)` | 8px | 气泡底边与触发器之间的间距 |
| `box-shadow` | 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 4px 42px 0 rgba(0, 0, 0, 0.06) | 一圈描边加两级投影 |
| `padding` | 8px 12px | 气泡内边距，量宽度时要加进去 |

## 怎么用

1. 容器挂 `.t-tt-group`，一组触发器共用一个气泡，每个按钮写 `aria-describedby` 指向气泡 `id`。
2. 指针进入或聚焦触发器时，量文字宽度（`scrollWidth` 加左右内边距）与触发器中心，算出偏移，写进 `--tt-x` 与 `width`。
3. 气泡当前隐藏时，先关掉过渡写一次几何值、读一次 `offsetWidth` 强制 reflow、再恢复过渡，这样只跑出现动画，不会从上一个按钮滑过来。
4. 显示时同时设 `data-show="true"` 与 `aria-hidden="false"`；离开组或失焦时两个一起改回 `false` 与 `true`。
5. reduced-motion 下 `.t-tt` 的 `transition` 被整体 `none !important` 停掉，气泡瞬间出现、瞬间移动，几何计算照常。

## 什么时候别用

提示需要多行、里面有链接按钮、或者要点击展开时，不该用 tooltip，换成可聚焦的浮层。触屏没有 hover，延迟加极短的消失几乎感知不到，这种场景直接常显或改成长按菜单更清楚。

## 注意

- 气泡宽度靠 `overflow: hidden` 裁切，`width` 从 0 过渡到测量值，文字一换行就被裁掉，所以原文全篇 `white-space: nowrap`，提示要短。
- `aria-hidden` 必须跟着 `data-show` 一起改。只切 CSS 状态会让读屏拿到与实际可见性相反的信息。
- 用 `translate` 与 `scale` 而非 `transform`，是为了让移动与缩放各有各的时长；合并回 `transform` 会把两条时间线绑死，移动也会带上入场的 150ms。
- 组容器是 `inline-flex`，气泡相对它定位，所以一组触发器必须包在同一个容器里，跨容器共用一个气泡会算错偏移。
- 位移走的是 `translate` 而不是 `left`，移动过程不触发重排，只有 `width` 那条会。
- `--tt-x` 是相对组容器左边缘的偏移，组内按钮位置变化（换行、字体加载）后要重新写入。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Tooltip open/close */

/*
  Usage:
    <span class="t-tt-group">
      <button class="t-tt-trigger" data-tooltip="Copy link" aria-describedby="tt-1">…</button>
      <button class="t-tt-trigger" data-tooltip="Share" aria-describedby="tt-1">…</button>
      <span class="t-tt" id="tt-1" role="tooltip" aria-hidden="true" data-show="false">
        <span class="t-tt-text"></span>
      </span>
    </span>

  One tooltip per group, shared by every trigger. The JS snippet
  writes the bubble's x + width for the hovered trigger: when it is
  already showing, the move tweens on --tt-move-dur so the bubble
  travels between triggers; when hidden, the geometry snaps and only
  the appear plays. The appear delay belongs to the show rule alone,
  so leaving the group hides it immediately. Trigger styling is
  yours; only the tooltip and its motion live here.
*/

:root {
  --tt-in-dur: 150ms;
  --tt-out-dur: 50ms;
  --tt-scale: 0.98;
  --tt-delay: 80ms;
  --tt-in-ease: ease-out;
  --tt-out-ease: ease-out;
  --tt-move-dur: 160ms;
  --tt-move-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tt-bg: #ffffff;
  --tt-fg: #2f2f2f;
}

.t-tt-group {
  position: relative;
  display: inline-flex;
}
.t-tt {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0;                 /* the JS writes the measured width */
  overflow: hidden;
  /* Individual transform properties: the travel (translate) and the
     appear (scale) run on their own clocks. */
  translate: var(--tt-x, 0px) 0;
  scale: var(--tt-scale);
  transform-origin: 50% 100%;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--tt-bg);
  color: var(--tt-fg);
  white-space: nowrap;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.05),
    0 4px 42px 0 rgba(0, 0, 0, 0.06);
  opacity: 0;
  pointer-events: none;
  /* Default rule controls the LEAVE state: no delay, so hiding plays
     immediately. The move lanes are always live. */
  transition:
    opacity   var(--tt-out-dur) var(--tt-out-ease),
    scale     var(--tt-out-dur) var(--tt-out-ease),
    translate var(--tt-move-dur) var(--tt-move-ease),
    width     var(--tt-move-dur) var(--tt-move-ease);
}
/* The appear delay belongs ONLY to the show rule, so hiding snaps it
   back to 0. A retarget while showing carries no delay at all. */
.t-tt[data-show="true"] {
  opacity: 1;
  scale: 1;
  transition:
    opacity   var(--tt-in-dur) var(--tt-in-ease) var(--tt-delay),
    scale     var(--tt-in-dur) var(--tt-in-ease) var(--tt-delay),
    translate var(--tt-move-dur) var(--tt-move-ease),
    width     var(--tt-move-dur) var(--tt-move-ease);
}
.t-tt-text { white-space: nowrap; }

@media (prefers-reduced-motion: reduce) {
  .t-tt { transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Tooltip open/close (React, self-contained)
// Drop into any React project — no extra CSS file needed.

// ── Styles ───────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --tt-in-dur: 150ms;
  --tt-out-dur: 50ms;
  --tt-scale: 0.98;
  --tt-delay: 80ms;
  --tt-in-ease: ease-out;
  --tt-out-ease: ease-out;
  --tt-move-dur: 160ms;
  --tt-move-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tt-bg: #ffffff;
  --tt-fg: #2f2f2f;
}

.t-tt-group {
  position: relative;
  display: inline-flex;
}
.t-tt {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0;                 /* the JS writes the measured width */
  overflow: hidden;
  /* Individual transform properties: the travel (translate) and the
     appear (scale) run on their own clocks. */
  translate: var(--tt-x, 0px) 0;
  scale: var(--tt-scale);
  transform-origin: 50% 100%;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--tt-bg);
  color: var(--tt-fg);
  white-space: nowrap;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.05),
    0 4px 42px 0 rgba(0, 0, 0, 0.06);
  opacity: 0;
  pointer-events: none;
  /* Default rule controls the LEAVE state: no delay, so hiding plays
     immediately. The move lanes are always live. */
  transition:
    opacity   var(--tt-out-dur) var(--tt-out-ease),
    scale     var(--tt-out-dur) var(--tt-out-ease),
    translate var(--tt-move-dur) var(--tt-move-ease),
    width     var(--tt-move-dur) var(--tt-move-ease);
}
/* The appear delay belongs ONLY to the show rule, so hiding snaps it
   back to 0. A retarget while showing carries no delay at all. */
.t-tt[data-show="true"] {
  opacity: 1;
  scale: 1;
  transition:
    opacity   var(--tt-in-dur) var(--tt-in-ease) var(--tt-delay),
    scale     var(--tt-in-dur) var(--tt-in-ease) var(--tt-delay),
    translate var(--tt-move-dur) var(--tt-move-ease),
    width     var(--tt-move-dur) var(--tt-move-ease);
}
.t-tt-text { white-space: nowrap; }

@media (prefers-reduced-motion: reduce) {
  .t-tt { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p17")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p17";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// One tooltip per group, shared by every trigger. Hovering a trigger
// writes the bubble's x + width: when it is already showing the move
// tweens (it travels); when hidden the geometry snaps and only the
// appear plays. Bring your own trigger styling.
import { useRef } from "react";

export function TooltipGroup({ id, items }) {
  // items: [{ label: "Copy", tooltip: "Copy link", onClick }]
  const group = useRef(null);
  const tip = useRef(null);
  const text = useRef(null);

  const hide = () => {
    tip.current.setAttribute("data-show", "false");
    tip.current.setAttribute("aria-hidden", "true");
  };

  const place = (trigger, label) => {
    const t = tip.current;
    const showing = t.getAttribute("data-show") === "true";
    text.current.textContent = label;
    const cs = getComputedStyle(t);
    const width = Math.ceil(
      text.current.scrollWidth +
        parseFloat(cs.paddingLeft) +
        parseFloat(cs.paddingRight)
    );
    const g = group.current.getBoundingClientRect();
    const r = trigger.getBoundingClientRect();
    const x = r.left - g.left + r.width / 2 - width / 2;
    if (!showing) {
      // Snap the geometry while hidden so only the appear plays.
      t.style.transition = "none";
      t.style.width = `${width}px`;
      t.style.setProperty("--tt-x", `${x}px`);
      void t.offsetWidth;
      t.style.transition = "";
    } else {
      t.style.width = `${width}px`;
      t.style.setProperty("--tt-x", `${x}px`);
    }
    t.setAttribute("data-show", "true");
    t.setAttribute("aria-hidden", "false");
  };

  return (
    <span ref={group} className="t-tt-group" onPointerLeave={hide}>
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="t-tt-trigger"
          aria-describedby={id}
          onPointerEnter={(e) => place(e.currentTarget, item.tooltip)}
          onFocus={(e) => place(e.currentTarget, item.tooltip)}
          onBlur={hide}
          onClick={item.onClick}
        >
          {item.label}
        </button>
      ))}
      <span
        ref={tip}
        id={id}
        className="t-tt"
        role="tooltip"
        aria-hidden="true"
        data-show="false"
      >
        <span ref={text} className="t-tt-text" />
      </span>
    </span>
  );
}
```
