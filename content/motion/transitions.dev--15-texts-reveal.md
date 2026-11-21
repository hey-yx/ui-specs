---
title: "组件动效 · 文本上浮显现（Texts reveal）"
source: https://transitions.dev/transitions/texts-reveal/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-15-texts-reveal
publisher: "Transitions.dev"
---

# 组件动效 · 文本上浮显现（Texts reveal）

> 来源：[Transitions.dev](https://transitions.dev/transitions/texts-reveal/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/texts-reveal/index.html`。

## 它解决什么

标题和副标题同时出现，眼睛没有先后，整块会显得平。这个动效让第一行先落位、第二行晚一步跟上，两行都从下往上浮 12px、解除模糊、淡入。它适合首屏主副标题、空状态文案、卡片标题配说明这类两行结构。

## 动效怎么构成

父层 `.t-stagger` 只当开关；动画全在行元素 `.t-stagger-line` 上，第一行是 `<strong>` 加 `--1`，第二行是 `<span>` 加 `--2`，两行都是 `display: block`，行内元素因此各占一行，同时保留原有语义层级。

静止态是 `opacity: 0`、`transform: translateY(var(--stagger-distance))`、`filter: blur(var(--stagger-blur))`，三条 `transition` 共用 `--stagger-dur` 与 `--stagger-ease`，并声明 `will-change: transform, opacity, filter`。第一行没有延迟，第二行的 `.t-stagger-line--2` 把 `transition-delay` 设成 `var(--stagger-stagger)`，也就是 40ms，让视线先落到标题。

`will-change` 一次声明三个属性，浏览器会提前把每行提升为独立合成层，`--stagger-dur` 期间的位移与模糊因此不必每帧重排。

父层挂上 `.is-shown` 后，所有行一起被推到 `opacity: 1`、`translateY(0)`、`blur(0)`，延迟差造成错峰落位。

退出走另一套规则：`.t-stagger.is-hiding` 把行压回 `opacity: 0`，`transform` 与 `filter` 保持归零，`transition` 换成 `opacity 200ms ease`、`transform 0s linear`、`filter 0s linear`，`transition-delay: 0s`。位置和模糊瞬时归零，只剩不透明度在淡，所以退出是一次安静的消失，不会把入场反着放一遍。

增加行只要补 `.t-stagger-line--N`，延迟写成 `calc(var(--stagger-stagger) * (N - 1))`。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--stagger-dur` | 500ms | 单行过渡时长，`opacity`、`transform`、`filter` 共用 |
| `--stagger-distance` | 12px | 起始下移量，`translateY` 的初值 |
| `--stagger-stagger` | 40ms | 行间错峰步长，也是第 N 行延迟的基数 |
| `--stagger-blur` | 3px | 起始模糊半径 |
| `--stagger-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 入场缓动 |
| `.is-shown` | 类名 | 加在父层，播放入场 |
| `.is-hiding` | 类名 | 加在父层，播放原地淡出 |
| 200ms | 固定值 | 退出淡出时长，写死在不透明度那条上 |
| ease | 固定值 | 退出淡出的缓动 |
| `0s` / `0s` | 固定值 | 退出时 `transform` 与 `filter` 的过渡时长 |

## 怎么用

1. 文案按行拆开，每行一个 `.t-stagger-line` 加序号类，不要在外面多包一层；行数固定时直接给每行一个 `transition-delay`，动态增删行才用 `calc` 公式。
2. 初始不加类，行保持不可见；要播入场时给父层加 `.is-shown`。
3. 要退出时加 `.is-hiding` 并同时移除 `.is-shown`，等 200ms 的淡出走完再把 `.is-hiding` 摘掉，回到干净的待入场态。
4. 别让 `.is-shown` 与 `.is-hiding` 同时挂着，两套规则会抢同一个 `opacity`。
5. 加 `.is-shown` 放到下一帧（原文用 `requestAnimationFrame`），否则浏览器可能把初始态到终态合批成一次渲染，过渡不触发。
6. reduced-motion 下行元素的 `transition` 被 `none !important` 停掉，位置与模糊瞬时到位，只剩最终状态。

## 什么时候别用

超过三四行的段落、或本身需要保留位移的滚动列表不适合，逐行错峰会让整块显得拖沓，直接一次淡入更干净。用户可能在动画没走完就滚走的位置也别用，半截的字比不出现更糟。

## 注意

- 两行是真实文本，原文没有加 `aria-hidden`，读屏会正常读到标题与副文案，别为了动效把主文案拆成装饰性空节点。
- 需要逐字起落的动画不属于这个动效，它按行错峰，字始终是整行一起动。
- `.is-shown` 挂在父层而不是行上，一次切换带动整组行，行数增加不必逐行加类。
- `will-change` 是常驻的，实例多或列表长时会长期占用合成层，动画结束可以考虑撤掉。
- reduced-motion 只关过渡，不改变初始状态：父层没有 `.is-shown` 时文字仍是 `opacity: 0`。要在减弱动效下直接可读，得另加规则把行设为可见。
- 加到三行时，最后一行的延迟是 `40ms` 的两倍（`calc` 里的 `N - 1`），再多的行沿同一公式递增，不会互相追尾。
- 退出规则里的 `transform 0s linear` 与 `filter 0s linear` 是有意的，删掉会让退出变成入场倒放，错峰也会重现。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Texts reveal */

/*
  Usage:
    <div class="t-stagger">
      <strong class="t-stagger-line t-stagger-line--1">…</strong>
      <span class="t-stagger-line t-stagger-line--2">…</span>
    </div>

  State:
    - Add `.is-shown` to play the staggered entrance.
    - Add `.is-hiding` (and remove `.is-shown`) to fade
      out in place over a short 200ms — independent of the
      entrance timing so the exit doesn't replay the stagger.

  Add more lines by adding `.t-stagger-line--N` with
  `transition-delay: calc(var(--stagger-stagger) * (N - 1))`.
*/

:root {
  --stagger-dur: 500ms;
  --stagger-distance: 12px;
  --stagger-stagger: 40ms;
  --stagger-blur: 3px;
  --stagger-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* Lines start translated down + blurred + invisible; .is-shown
   on the parent flips them to their resting state. The second
   line's transition-delay holds it back by --stagger-stagger
   so the eye lands on the headline first. */
.t-stagger-line {
  display: block;
  opacity: 0;
  transform: translateY(var(--stagger-distance));
  filter: blur(var(--stagger-blur));
  transition:
    opacity   var(--stagger-dur) var(--stagger-ease),
    transform var(--stagger-dur) var(--stagger-ease),
    filter    var(--stagger-dur) var(--stagger-ease);
  will-change: transform, opacity, filter;
}
.t-stagger-line--2 { transition-delay: var(--stagger-stagger); }

.t-stagger.is-shown .t-stagger-line {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
/* Exit decouples from the stagger: same fade for every line,
   no Y return, no blur — so the disappearance reads as a
   single quiet fade instead of a reverse reveal. */
.t-stagger.is-hiding .t-stagger-line {
  opacity: 0;
  transform: translateY(0);
  filter: blur(0);
  transition:
    opacity 200ms ease,
    transform 0s linear,
    filter 0s linear;
  transition-delay: 0s;
}

@media (prefers-reduced-motion: reduce) {
  .t-stagger-line { transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Texts reveal (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --stagger-dur: 500ms;
  --stagger-distance: 12px;
  --stagger-stagger: 40ms;
  --stagger-blur: 3px;
  --stagger-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* Lines start translated down + blurred + invisible; .is-shown
   on the parent flips them to their resting state. The second
   line's transition-delay holds it back by --stagger-stagger
   so the eye lands on the headline first. */
.t-stagger-line {
  display: block;
  opacity: 0;
  transform: translateY(var(--stagger-distance));
  filter: blur(var(--stagger-blur));
  transition:
    opacity   var(--stagger-dur) var(--stagger-ease),
    transform var(--stagger-dur) var(--stagger-ease),
    filter    var(--stagger-dur) var(--stagger-ease);
  will-change: transform, opacity, filter;
}
.t-stagger-line--2 { transition-delay: var(--stagger-stagger); }

.t-stagger.is-shown .t-stagger-line {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
/* Exit decouples from the stagger: same fade for every line,
   no Y return, no blur — so the disappearance reads as a
   single quiet fade instead of a reverse reveal. */
.t-stagger.is-hiding .t-stagger-line {
  opacity: 0;
  transform: translateY(0);
  filter: blur(0);
  transition:
    opacity 200ms ease,
    transform 0s linear,
    filter 0s linear;
  transition-delay: 0s;
}

@media (prefers-reduced-motion: reduce) {
  .t-stagger-line { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p18")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p18";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// Two states: idle → shown (staggered entrance) and shown → hiding
// (quick fade-out, no Y return). The hiding class is held only long
// enough for the 200ms fade to play, then dropped so the next show
// can replay the staggered entrance from a clean state.
export function StaggerReveal({ primary, secondary }) {
  const [shown, setShown]   = useState(false);
  const [hiding, setHiding] = useState(false);
  const timerRef = useRef(null);

  const onAnimate = () => {
    if (shown) {
      // shown → hiding (fade out in place)
      setShown(false);
      setHiding(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setHiding(false), 200);
    } else {
      // idle → shown (replay the staggered entrance)
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setHiding(false);
      // setState is async — flip to shown on the next tick so React
      // doesn't batch idle→shown into a single render and skip the
      // entrance transition.
      window.requestAnimationFrame(() => setShown(true));
    }
  };

  const cls = "t-stagger" +
    (shown  ? " is-shown"  : "") +
    (hiding ? " is-hiding" : "");

  return (
    <>
      <button type="button" onClick={onAnimate}>Animate</button>
      <div className={cls}>
        <strong className="t-stagger-line t-stagger-line--1">{primary}</strong>
        <span    className="t-stagger-line t-stagger-line--2">{secondary}</span>
      </div>
    </>
  );
}
```
