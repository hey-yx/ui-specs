---
title: "组件动效 · 轻提示开合（Toast open / close）"
source: https://transitions.dev/transitions/toast-open-close/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-22-toast-open-close
publisher: "Transitions.dev"
---

# 组件动效 · 轻提示开合（Toast open / close）

> 来源：[Transitions.dev](https://transitions.dev/transitions/toast-open-close/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/toast-open-close/index.html`。

## 它解决什么

轻提示要在不打断操作的前提下被看见。直接出现太硬，纯淡入又容易被忽略。这个动效给它一个来处：从下方 16px 处升起，同时淡入、从 0.97 放大到 1、从 2px 模糊变清晰。进场比退场慢，出现时从容，消失时干脆，提示不会在屏幕上磨蹭。

## 动效怎么构成

只有一个元素 `.t-toast`，没有子层。基础规则描述的就是关闭态：`opacity: 0`、`transform: translateY(var(--toast-distance)) scale(var(--toast-scale))`、`filter: blur(var(--toast-blur))`，三条过渡都走 `--toast-close`，另外用 `will-change: transform, opacity, filter` 提示合成。加上 `.is-open` 之后改成 `opacity: 1`、`translateY(0) scale(1)`、`blur(0)`，三条过渡换成 `--toast-open`。

时长不对称靠规则位置实现：基础规则是“任何回到静止状态”的时钟，`.is-open` 规则是“进入打开状态”的时钟。所以只要加一个类，两个方向就各自拿到自己的速度，不需要 `:not()` 选择器，也不需要等动画结束再换值。缓动两边共用 `--toast-ease`，进出曲线一致，只有快慢不同。

动的是 `transform`、`opacity`、`filter`，三项都不触发布局。三个属性同时变化还会互相遮盖：位移负责方向，透明度负责强弱，模糊负责“从远处对焦”的观感，缺一项就只剩普通的淡入。状态在 DOM 上体现为 className 后面拼上的 `is-open`，以及 `aria-hidden` 的布尔值，两者同一个来源。

参数组合的配比值得注意：位移取了 16px，缩放只取 0.97，模糊只取 2px。位移负责“从下面来”的方向感，缩放和模糊只做一点点虚化收尾。把 `--toast-scale` 改成明显小于 0.97 的值，观感会变成弹跳；把 `--toast-blur` 改成远大于 2px 的值，文字会先糊再清，读起来像故障。三个值都小，合起来才是“轻轻升起”。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--toast-open` | `350ms` | 进场时长 |
| `--toast-close` | `250ms` | 退场时长 |
| `--toast-distance` | `16px` | 起始下移距离，`translateY` 的起点 |
| `--toast-blur` | `2px` | 起始模糊半径 |
| `--toast-scale` | `0.97` | 起始缩放 |
| `--toast-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 进出共用的缓动 |
| `.t-toast` | `translateY(var(--toast-distance)) scale(var(--toast-scale))` | 关闭态位移与缩放组合 |
| `.t-toast` | `will-change: transform, opacity, filter` | 三项都提示合成 |
| `.t-toast.is-open` | `translateY(0) scale(1)` | 打开态归位 |
| `.t-toast.is-open` | `filter: blur(0)` | 打开态去模糊 |
| `role="status"` | 常驻 | 内容变化时由读屏播报 |
| `aria-hidden` | `true` / `false` | 关闭时对辅助技术隐藏 |

## 怎么用

1. 元素先写 `class="t-toast"`，不带 `is-open`，此时它就是隐藏态。不要用 `display: none` 或条件渲染来藏，元素必须一直在 DOM 里，过渡才有起点。
2. 显示时加 `is-open`，同时把 `aria-hidden` 置 false；消失时移除类，`aria-hidden` 置 true。
3. 自动消失的计时从加类那一刻起算时，至少留出 350ms 的进场时间，别让提示刚站稳就被撤掉。
4. 挂载位置要自己定：这组规则只管透明度、位移和模糊，`position: fixed` 的容器、右下角堆叠、安全区都需要另外写。
5. reduced-motion 下 `.t-toast` 的 `transition` 被 `!important` 关掉，`is-open` 的切换变成瞬时显示与消失，状态逻辑不用改。

## 什么时候别用

带确认按钮、需要用户回应的提示不要套这条以“来过就走”为前提的动效，也不该自动消失，改成停留的卡片或对话框。一次操作连弹多条时，350ms 的进场会互相重叠、层层推开，改成更短的淡入或者合并成一条。它是单元素动效，内容变长变短没有高度过渡，提示里塞进多行文案时要么固定高度，要么另做一套高度动画。

## 注意

隐藏态用的是 `opacity: 0` 加模糊，元素仍占布局位置。如果它不在绝对定位或 fixed 的容器里，页面上会留一块空白。`role="status"` 配合 `aria-hidden={!open}`，隐藏期间内容对辅助技术不可见，显示瞬间才进入可访问树，播报是否真的触发要在自己的读屏环境里验证一遍。`will-change` 一次列了三项，长期挂着的元素会一直占一个合成层。`filter` 动画的开销高于 `opacity`，同屏有多个提示时优先减少模糊。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Toast open / close */

/*
  Usage:
    <div class="t-toast" data-open="false"> … </div>

  Toggle `.is-open` on the toast. It rises from below with a
  fade + cross-blur + slight scale; opening uses the slower
  open clock, the resting (closed) transition uses the faster
  close clock, so a single class gives the open/close asymmetry.
*/

:root {
  --toast-open: 350ms;
  --toast-close: 250ms;
  --toast-distance: 16px;
  --toast-blur: 2px;
  --toast-scale: 0.97;
  --toast-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-toast {
  opacity: 0;
  transform: translateY(var(--toast-distance)) scale(var(--toast-scale));
  filter: blur(var(--toast-blur));
  will-change: transform, opacity, filter;
  transition:
    opacity var(--toast-close) var(--toast-ease),
    transform var(--toast-close) var(--toast-ease),
    filter var(--toast-close) var(--toast-ease);
}
.t-toast.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition:
    opacity var(--toast-open) var(--toast-ease),
    transform var(--toast-open) var(--toast-ease),
    filter var(--toast-open) var(--toast-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-toast { transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Toast open / close (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --toast-open: 350ms;
  --toast-close: 250ms;
  --toast-distance: 16px;
  --toast-blur: 2px;
  --toast-scale: 0.97;
  --toast-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-toast {
  opacity: 0;
  transform: translateY(var(--toast-distance)) scale(var(--toast-scale));
  filter: blur(var(--toast-blur));
  will-change: transform, opacity, filter;
  transition:
    opacity var(--toast-close) var(--toast-ease),
    transform var(--toast-close) var(--toast-ease),
    filter var(--toast-close) var(--toast-ease);
}
.t-toast.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition:
    opacity var(--toast-open) var(--toast-ease),
    transform var(--toast-open) var(--toast-ease),
    filter var(--toast-open) var(--toast-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-toast { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p22")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p22";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Toggle `.is-open` on the toast —
// opening uses the slower clock, the resting (closed) transition uses the
// faster one, so a single class gives the open/close asymmetry.
export function Toast({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen((v) => !v)}>Animate</button>
      <div
        className={"t-toast" + (open ? " is-open" : "")}
        role="status"
        aria-hidden={!open}
      >
        {children}
      </div>
    </>
  );
}
```
