---
title: "组件动效 · 骨架屏与内容显现（Skeleton loader and reveal）"
source: https://transitions.dev/transitions/skeleton-loader-and-reveal/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-14-skeleton-loader-and-reveal
publisher: "Transitions.dev"
---

# 组件动效 · 骨架屏与内容显现（Skeleton loader and reveal）

> 来源：[Transitions.dev](https://transitions.dev/transitions/skeleton-loader-and-reveal/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/skeleton-loader-and-reveal/index.html`。

## 它解决什么

数据还没回来时页面不能空着，骨架屏负责占住版面；但骨架直接换成真实内容那一下，常伴随闪烁和轻微位移。这个动效让骨架先脉冲表示在工作，再用一次双向交叉淡化交接：骨架淡出并加深模糊，内容同时淡入并解除模糊。

## 动效怎么构成

`.t-skel` 是 `position: relative` 的容器，内叠 `.t-skel-skeleton` 与 `.t-skel-content`，两层都是 `position: absolute; inset: 0`，骨架 `z-index: 1`、内容 `z-index: 2`。骨架在标记里带 `aria-hidden="true"`，它只是视觉占位。用法示例里容器还带 `data-state="loading"`，但真正驱动动画的是下面这几个类，属性只当标记。

两层各自只动 `opacity` 与 `filter: blur()`，时长缓动共用 `--reveal-dur` 与 `--reveal-ease`。静止态骨架 `opacity: 1`、`blur(0)`，内容 `opacity: 0`、`blur(var(--reveal-blur))`；给 `.t-skel` 挂 `.is-revealed` 后，骨架变 `opacity: 0` 加 `blur(2px)`，内容变 `opacity: 1` 加 `blur(0)`。

脉冲不放在骨架自己身上，而是压在子元素上：`.t-skel-skeleton.is-pulsing > *` 跑 `animation: t-skel-pulse`，关键帧只在 `0%, 100%` 与 `50%` 改 `opacity`。这样骨架的 `opacity` 与 `filter` 留给上面的交叉淡化，不会被动画占用。

两条过渡的名单里只有 `opacity` 与 `filter`，没有 `transform`，所以交换过程中两层都不移动位置，只是各自变清或变实。

重播靠 `.is-resetting`：把两层 `transition` 设成 `none !important`，此时移除 `.is-revealed`，反向切换就是瞬时的；强制一次 reflow 后摘掉这个类，下一次显现才重新有过渡。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--pulse-dur` | 1000ms | 单次脉冲时长，也是重播计时的基数 |
| `--pulse-count` | 1 | 脉冲次数，实际等待为 `dur * count` |
| `--pulse-min` | 0.5 | 脉冲谷值，关键帧 50% 处的 `opacity` |
| `--reveal-dur` | 400ms | 交叉淡化时长，两层共用 |
| `--reveal-blur` | 2px | 内容起始模糊，也是骨架结束时的模糊 |
| `--reveal-ease` | ease-in-out | 两层共用的缓动 |
| `.is-pulsing` | 类名 | 加在骨架上，驱动子元素脉冲 |
| `.is-revealed` | 类名 | 加在 `.t-skel`，执行交叉淡化 |
| `.is-resetting` | 类名 | 临时关掉过渡，让反向切换瞬时完成 |

## 怎么用

- 骨架挂载时就带 `.is-pulsing`，等待期不用 JS 也一直在脉冲。
- 数据到达时给 `.t-skel` 加 `.is-revealed`，不要删骨架节点，两层都留在原位才能交叉。
- 要再来一轮按顺序走：加 `.is-resetting`，移除 `.is-revealed`，摘掉子元素上的 `.is-pulsing`，读一次 `offsetWidth` 触发 reflow，去掉 `.is-resetting`，再挂回 `.is-pulsing`。
- 骨架节点交接后仍留在 DOM 里，所以别往里放可交互元素，否则键盘会掉进隐藏层。
- 等 `--pulse-dur` 乘 `--pulse-count` 之后再切 `.is-revealed`，这就是原文的自动节奏。
- reduced-motion 下两层的 `transition` 与脉冲动画都被 `none !important` 停掉，状态切换变成直接跳。

## 什么时候别用

数据几乎瞬时就回来时别用，一次脉冲加一次交叉只会让界面显得慢。骨架形状与真实内容差异大（三行长条对上一张图）时也别用，淡化过程会暴露版式跳变，先把两层尺寸做齐或改用纯淡入。

## 注意

- 骨架的 `aria-hidden="true"` 必须保留，否则读屏会念一堆无意义的占位方块；内容层不要跟着设，它是真实信息。
- 脉冲必须落在子元素上。给骨架本身加 `animation` 会让 `opacity` 被动画接管，交叉淡化直接失效。
- `--reveal-blur` 同时被骨架的终点和内容的起点使用，改一个值会同时影响两侧的模糊量。
- 两层都是绝对定位，容器要有明确高度或由你的布局撑开，否则整块塌成零高。
- 骨架内部放几根条或一个头像都行，尺寸自己给，动画落在 `> *` 上，所以骨架结构怎么改都不影响交接。
- 重播计时从 `--pulse-dur` 与 `--pulse-count` 现场读取，改完变量下一次重播就生效，不用重新挂载。
- 原文只给了 `--pulse-count: 1`，闪一下就停，更长的加载会看到静止骨架；要持续就把次数调到与等待时长匹配。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Skeleton loader and reveal */

/*
  Usage:
    <div class="t-skel" data-state="loading">
      <div class="t-skel-skeleton is-pulsing">…</div>
      <div class="t-skel-content">…</div>
    </div>

  State:
    - Mount with `.is-pulsing` on the skeleton so it pulses
      --pulse-count times.
    - When data arrives, add `.is-revealed` to .t-skel — the
      skeleton fades out + blurs and the content fades in +
      un-blurs over --reveal-dur.
    - To replay the loading state without animating the
      reverse: add `.is-resetting` to .t-skel, remove
      `.is-revealed`, force a reflow, then drop `.is-resetting`.

  Bring your own avatar / text / wrapping. The skeleton stays
  in the same flex slot as the content so the swap is
  layout-free.
*/

:root {
  --pulse-dur: 1000ms;
  --pulse-count: 1;
  --pulse-min: 0.5;
  --reveal-dur: 400ms;
  --reveal-blur: 2px;
  --reveal-ease: ease-in-out;
}

/* The wrap stacks two layers on the same coordinates. The
   skeleton owns the cold pulse + the fade-out side of the
   reveal; the content owns the fade-in side. They share the
   same duration / ease so the swap reads as one motion. */
.t-skel { position: relative; }
.t-skel-skeleton,
.t-skel-content {
  position: absolute;
  inset: 0;
}

.t-skel-skeleton {
  z-index: 1;
  opacity: 1;
  filter: blur(0);
  transition:
    opacity var(--reveal-dur) var(--reveal-ease),
    filter  var(--reveal-dur) var(--reveal-ease);
}
.t-skel-content {
  z-index: 2;
  opacity: 0;
  filter: blur(var(--reveal-blur));
  transition:
    opacity var(--reveal-dur) var(--reveal-ease),
    filter  var(--reveal-dur) var(--reveal-ease);
}
.t-skel.is-revealed .t-skel-skeleton {
  opacity: 0;
  filter: blur(var(--reveal-blur));
}
.t-skel.is-revealed .t-skel-content {
  opacity: 1;
  filter: blur(0);
}
/* Snap-back when replaying: kill transitions so the reverse
   (revealed → skeleton) is instant. Drop `.is-resetting`
   after a forced reflow and the next reveal animates again. */
.t-skel.is-resetting .t-skel-skeleton,
.t-skel.is-resetting .t-skel-content {
  transition: none !important;
}

/* Pulse: place the animation on the bar/avatar children, not
   on the skeleton itself, so the skeleton's opacity / filter
   stay free for the cross-fade transition above. */
.t-skel-skeleton.is-pulsing > * {
  animation: t-skel-pulse var(--pulse-dur) ease-in-out var(--pulse-count);
}
@keyframes t-skel-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: var(--pulse-min); }
}

@media (prefers-reduced-motion: reduce) {
  .t-skel-skeleton, .t-skel-content {
    transition: none !important;
  }
  .t-skel-skeleton.is-pulsing > * { animation: none !important; }
}
```

### React

```jsx
// Transitions.dev — Skeleton loader and reveal (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --pulse-dur: 1000ms;
  --pulse-count: 1;
  --pulse-min: 0.5;
  --reveal-dur: 400ms;
  --reveal-blur: 2px;
  --reveal-ease: ease-in-out;
}

/* The wrap stacks two layers on the same coordinates. The
   skeleton owns the cold pulse + the fade-out side of the
   reveal; the content owns the fade-in side. They share the
   same duration / ease so the swap reads as one motion. */
.t-skel { position: relative; }
.t-skel-skeleton,
.t-skel-content {
  position: absolute;
  inset: 0;
}

.t-skel-skeleton {
  z-index: 1;
  opacity: 1;
  filter: blur(0);
  transition:
    opacity var(--reveal-dur) var(--reveal-ease),
    filter  var(--reveal-dur) var(--reveal-ease);
}
.t-skel-content {
  z-index: 2;
  opacity: 0;
  filter: blur(var(--reveal-blur));
  transition:
    opacity var(--reveal-dur) var(--reveal-ease),
    filter  var(--reveal-dur) var(--reveal-ease);
}
.t-skel.is-revealed .t-skel-skeleton {
  opacity: 0;
  filter: blur(var(--reveal-blur));
}
.t-skel.is-revealed .t-skel-content {
  opacity: 1;
  filter: blur(0);
}
/* Snap-back when replaying: kill transitions so the reverse
   (revealed → skeleton) is instant. Drop `.is-resetting`
   after a forced reflow and the next reveal animates again. */
.t-skel.is-resetting .t-skel-skeleton,
.t-skel.is-resetting .t-skel-content {
  transition: none !important;
}

/* Pulse: place the animation on the bar/avatar children, not
   on the skeleton itself, so the skeleton's opacity / filter
   stay free for the cross-fade transition above. */
.t-skel-skeleton.is-pulsing > * {
  animation: t-skel-pulse var(--pulse-dur) ease-in-out var(--pulse-count);
}
@keyframes t-skel-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: var(--pulse-min); }
}

@media (prefers-reduced-motion: reduce) {
  .t-skel-skeleton, .t-skel-content {
    transition: none !important;
  }
  .t-skel-skeleton.is-pulsing > * { animation: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p14")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p14";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// `loading` is yours to drive (data fetch, route change, etc.).
// On every fresh load → ready cycle, call `replay()` to flash the
// skeleton again before revealing the content.
export function SkeletonReveal({ skeleton, children }) {
  const wrapRef = useRef(null);
  const skelRef = useRef(null);
  const timerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  const replay = () => {
    const wrap = wrapRef.current;
    const skel = skelRef.current;
    if (!wrap || !skel) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    // Snap-back: kill transitions for one frame so the reverse
    // (revealed → skeleton) is instant.
    wrap.classList.add("is-resetting");
    setRevealed(false);
    skel.classList.remove("is-pulsing");
    void skel.offsetWidth;
    wrap.classList.remove("is-resetting");
    skel.classList.add("is-pulsing");
    const dur = readMs("--pulse-dur", 1000);
    const count = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--pulse-count")
    ) || 1;
    timerRef.current = window.setTimeout(() => {
      setRevealed(true);
      timerRef.current = null;
    }, dur * count);
  };

  return (
    <>
      <button type="button" onClick={replay}>Animate</button>
      <div
        ref={wrapRef}
        className={"t-skel" + (revealed ? " is-revealed" : "")}
      >
        <div ref={skelRef} className="t-skel-skeleton is-pulsing" aria-hidden="true">
          {skeleton}
        </div>
        <div className="t-skel-content">{children}</div>
      </div>
    </>
  );
}

function readMs(name, fallback) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name).trim();
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}
```
