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

## 它解决什么

折叠面板在展开前，内容高度是未知的。写死 `max-height` 得猜上限，用 JS 量 `scrollHeight` 得等一次布局，收起来时还要再量。这个动效把高度交给 `grid-template-rows` 从 `0fr` 到 `1fr`，让浏览器自己插值内容高度，展开和收起都没有测量延迟。箭头翻转补上方向提示，告诉用户这块能收回去。

## 动效怎么构成

三条规则各管一件事。`.t-acc-panel` 是 `display: grid`，`grid-template-rows: 0fr` 表示那一行高度为 0，`data-open="true"` 时切成 `1fr`，过渡只写在 `grid-template-rows` 上。内层 `.t-acc-panel-inner` 负责 `overflow: hidden` 裁切，同时把 `opacity` 从 0 抬到 1、`filter` 从 `blur(2px)` 收到 `blur(0)`，所以内容不只是被拉开，还带一次淡入与去模糊。

第二层必须存在：`grid-template-rows` 的行高插值不会裁掉溢出的内容，如果面板里直接放正文，收起时文字会从 0 高度的行里溢出来压在下面的模块上。`overflow: hidden` 落在 `.t-acc-panel-inner` 上，正好包住被插入的行高。

箭头是第三条：`.t-acc-chevron` 是 `display: inline-flex`，`transform: scaleY(1)` 配 `transform-origin: center`，打开时翻成 `scaleY(-1)`。折线 `M4 6.5L8 10.5L12 6.5` 在翻转途中会经过一条水平线的状态，视觉上等同于形状变形。原文注释给了理由：CSS 的 `d:` 路径形变只有 Chromium 支持，`scaleY` 在所有浏览器都能动；这条 path 关于 16×16 viewBox 的中心对称，翻过去正好落在向上的 "^"；path 上的 `vector-effect: non-scaling-stroke` 让描边宽度在整个翻转中保持恒定。

三个时长都取 250ms，是因为高度、透明度、模糊三条过渡同时起跑时，只要差值超过几十毫秒，眼睛就会先看到模糊散开再看到面板拉开，节奏会散。真要区分，改一个变量就够，别三条各写一个值。

状态全挂在容器上：`.t-acc` 的 `data-open`，头部按钮 `.t-acc-head` 的 `aria-expanded`，箭头 span 上的 `aria-hidden="true"`。展开走 `--acc-expand`，收起走 `--acc-collapse`，箭头走 `--acc-chevron`，三处共用同一个 `--acc-ease`。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--acc-expand` | `250ms` | 展开时面板与内层的时长 |
| `--acc-collapse` | `250ms` | 收起时面板与内层的时长 |
| `--acc-chevron` | `250ms` | 箭头翻转时长 |
| `--acc-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 三处共用的缓动 |
| `grid-template-rows` | `0fr` / `1fr` | 收起态与展开态的行高 |
| `.t-acc-panel` | `display: grid` | 让行高可以被插值 |
| `.t-acc-panel-inner` | `overflow: hidden` | 裁掉超出部分，高度过渡才干净 |
| `.t-acc-panel-inner` | `opacity: 0` / `1` | 内容的透明度过渡 |
| `.t-acc-panel-inner` | `blur(2px)` / `blur(0)` | 内容的模糊过渡 |
| `.t-acc-chevron` | `transform-origin: center` | 翻转轴心 |
| `.t-acc-chevron` | `scaleY(1)` / `scaleY(-1)` | 未展开与展开时的垂直翻转 |
| `.t-acc-chevron path` | `vector-effect: non-scaling-stroke` | 翻转时描边不被缩放 |
| svg `viewBox` | `0 0 16 16` | 箭头坐标系，path 关于中心对称 |
| `.t-acc-head` | `aria-expanded` | 展开状态暴露给辅助技术 |

## 怎么用

1. 结构三层：`.t-acc` 容器、`button.t-acc-head` 头部（里面放标题和 `.t-acc-chevron`）、`.t-acc-panel` 里再套一层 `.t-acc-panel-inner` 装正文。内层不能省。
2. 点击头部按钮切换 `.t-acc` 的 `data-open` 与按钮的 `aria-expanded`，两个值来自同一个布尔状态。
3. CSS 不写任何固定高度，也不要在 JS 里读 `scrollHeight`，`0fr` 到 `1fr` 已经覆盖内容变高的情况。
4. 想让展开比收起慢，只改 `--acc-expand`，现在两个值都是 250ms，收展等速。
5. reduced-motion 下三个选择器的 `transition` 都被 `!important` 关掉，面板直接跳到开或合，`data-open` 逻辑不变。

## 什么时候别用

面板里再嵌手风琴、或者展开后要加载图片和异步列表时，`1fr` 的目标高度会在过渡中反复变化，看起来一顿一顿；这类内容先展开再填数据更稳。整屏级别的长内容也不适合用行高过渡，抽屉或独立页面比折叠更合适。还有一种常见误用是把它当“高度为零时的占位”：面板收起后仍然占一条 0fr 的行，但如果正文里没有内层包裹，收起状态会把文字挤成一条线露在边缘。

## 注意

`aria-expanded` 只在按钮上，片段没有给面板加 `aria-controls`，也没有在收起时把内容设为 `hidden` 或 `inert`，收起后的文字仍在可访问树里，补不补取决于你的用法。`scaleY(-1)` 能成立的前提是图标关于翻转轴心对称，换成不对称图形就会翻成别的形状。`blur(2px)` 在收起瞬间会让文字发虚，面板里全是小字号说明时可以只留高度与透明度两条过渡。`overflow: hidden` 如果写到 `.t-acc-panel` 上，滚动的裁切会和行高插值打架。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

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

### React

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
