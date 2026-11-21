---
title: "组件动效 · 思考状态（Thinking states）"
source: https://transitions.dev/transitions/thinking-states/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-37-thinking-states
publisher: "Transitions.dev"
---

# 组件动效 · 思考状态（Thinking states）

> 来源：[Transitions.dev](https://transitions.dev/transitions/thinking-states/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/thinking-states/index.html`。

## 它解决什么

AI 界面上那行状态文字（Thinking… / Searching…）如果一动不动，用户分不清是在跑还是卡住了。这个动效给了两层信号：静止时一道高光缓慢扫过字形，说明进程还活着；换状态时旧行向上模糊淡出、新行从下方进来，说明这一步结束、下一步开始。两层都克制，不抢正文的位置。

## 动效怎么构成

结构是 `<span class="t-think" role="status">`，里面两个子元素：

- `.t-think-sizer`，`aria-hidden="true"`，内容是所有状态里最长的那条。它 `visibility: hidden` 但保留占位，整个盒子的宽度由它决定。
- `.t-think-text`，同时写 `data-text` 和 `textContent`，是当前可见的那一行。

`.t-think-text` 用 `position: absolute` 铺满 sizer 撑出的宽度，所以换状态时盒子既不收缩也不跳动。

微光不在文字本身，而在 `.t-think-text::before` 上：`content: attr(data-text)` 复制同一段文字，背景是一条 `linear-gradient(90deg, transparent 0%, transparent 40%, var(--think-highlight) 50%, transparent 60%, transparent 100%)`，`background-size: 400% 100%`，再用 `background-clip: text` 把背景裁进字形，`animation: t-think-shimmer var(--think-shimmer) linear infinite` 把 `background-position` 从 `100% 0` 推到 `0% 0`。文字常态是 `--think-base`，只有高光经过的笔画才亮成 `--think-highlight`。

换状态走过渡，不走动画。旧行加 `.is-exit`，得到 `translateY(calc(var(--think-distance) * -1))`、`blur(var(--think-blur))`、`opacity: 0`。新行先带 `.is-enter-start`，它把过渡设为 `none`、位置放在 `translateY(var(--think-distance))`、同样模糊与透明；强制一次回流后去掉这个类，过渡恢复，三条属性一起走到位。两条过渡都按 `--think-swap` 走，中间由 `--think-gap` 兜住最小间隔。

要留意 `--think-hold` 在 CSS 里没有对应的动画：它是脚本的节拍器，CSS 只提供两端状态。所以这套样式离开脚本不会自己换词，只会在原地一直扫微光。这也意味着换词时机完全可控，可以在真实进度变化时才切，而不是被定时器牵着走。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--think-hold` | 2000ms | 每条状态停留多久后换下一条 |
| `--think-swap` | 150ms | 进出过渡的时长 |
| `--think-gap` | 50ms | 两条过渡之间的最小间隔 |
| `--think-distance` | 8px | 进出时的垂直位移，出去向上、进来向下 |
| `--think-blur` | 2px | 进出时的模糊半径 |
| `--think-shimmer` | 2000ms | 微光扫过一趟的周期 |
| `--think-base` | #7c7c7c | 状态文字的常态颜色 |
| `--think-highlight` | #0d0d0d | 微光经过时的字形颜色 |
| `--think-ease` | ease-in-out | 三条过渡共用的缓动 |
| `400% 100%` | background-size | 渐变宽度是盒子的四倍，扫过时有长拖尾 |
| `100% 0` → `0% 0` | background-position | 微光从右往左的一趟 |
| `40%` / `50%` / `60%` | 渐变断点 | 高光带的位置与宽度 |
| `.is-exit` / `.is-enter-start` | 类名 | 旧行出场、新行入场前的起始态 |

## 怎么用

1. 字体设在 `.t-think` 上，sizer 与可见行必须同字体同字号，否则量出来的宽度不对。
2. sizer 里写最长的那条状态文案，并加 `aria-hidden="true"`，否则会被读两遍。
3. 换状态时同时更新 `.t-think-text` 的 `textContent` 和 `data-text`：微光是 `attr(data-text)` 复制的，两者不一致会出现错的字在发光。
4. 顺序固定：旧副本加 `.is-exit`，新副本加 `.is-enter-start`，强制回流，再移除 `.is-enter-start`。每隔 `--think-hold` 重复一次。
5. `prefers-reduced-motion: reduce` 下过渡被 `none !important` 关掉，`::before` 直接 `display: none`，文字仍在，只是不再发光和位移。

## 什么时候别用

状态文案长短差很大时（从 "Thinking…" 换到一整句工具调用描述），sizer 按最长那条把盒子撑得很宽，短状态周围全是空白。这种情况去掉 sizer 让盒子贴着当前文案，或在 `.t-think` 上改成 `text-align: left` 让它们齐左。状态几秒内连续变化也不适合，150ms 的进出加上 50ms 间隔会把文字糊成一片。

## 注意

- `role="status"` 是礼貌级实时区域，每次换文案都会被读一遍；如果状态每秒都变，读屏会被刷屏。
- 微光是 `::before` 上的字形副本，靠 `pointer-events: none` 不挡点击，但它是叠在正文上的，字体或字重不一致就会重影。
- `background-clip: text` 依赖 `-webkit-text-fill-color: transparent` 与 `color: transparent`，原文两条都写了；漏掉会看到一整块渐变而不是字形高光。
- 想齐左把 `text-align: left` 设在 `.t-think` 上，别改 `.t-think-text`，它的宽度来自 sizer。
- 关掉动效后 `::before` 是 `display: none`，高光副本彻底消失，可见行仍然依赖 `textContent`，别只更新 `data-text`。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Thinking states */

/*
  Usage:
    <span class="t-think" role="status">
      <span class="t-think-sizer" aria-hidden="true">Longest state here</span>
      <span class="t-think-text" data-text="Thinking…">Thinking…</span>
    </span>

  The shimmer runs on ::before (content: attr(data-text),
  background-clip: text) while a state holds. JS swaps the line
  every --think-hold: exit the outgoing copy (.is-exit) while
  the incoming copy enters from below (.is-enter-start →
  reflow → release), held back by --think-gap. Keep textContent
  and data-text in sync so the shimmer copy always matches the
  visible line.

  The hidden sizer holds your longest state and is what gives
  the box its width: lines are absolutely positioned across
  that width, so every state centres in a box that never
  resizes mid-swap. Drop the sizer if the line should hug
  whatever state is showing, and set text-align: left on
  .t-think if the states should share a left edge instead.
*/

:root {
  --think-hold: 2000ms;
  --think-swap: 150ms;
  --think-gap: 50ms;
  --think-distance: 8px;
  --think-blur: 2px;
  --think-shimmer: 2000ms;
  --think-base: #7c7c7c;
  --think-highlight: #0d0d0d;
  --think-ease: ease-in-out;
}

/* Set your type on .t-think: the sizer only reports the right
   width if it is set in the same font as the line. */
.t-think { position: relative; display: inline-block; text-align: center; }
.t-think-sizer { display: block; visibility: hidden; white-space: nowrap; }
.t-think-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  color: var(--think-base);
  white-space: nowrap;
  transform: translateY(0);
  filter: blur(0);
  opacity: 1;
  transition:
    transform var(--think-swap) var(--think-ease),
    filter var(--think-swap) var(--think-ease),
    opacity var(--think-swap) var(--think-ease);
  will-change: transform, filter, opacity;
}
/* Shimmer sweeps the glyphs only (background-clip: text). */
.t-think-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(90deg,
    transparent 0%, transparent 40%,
    var(--think-highlight) 50%,
    transparent 60%, transparent 100%);
  background-size: 400% 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: t-think-shimmer var(--think-shimmer) linear infinite;
}
@keyframes t-think-shimmer {
  0%   { background-position: 100% 0; }
  100% { background-position: 0% 0; }
}
/* The outgoing line floats over the box so both halves animate. */
.t-think-text.is-exit {
  transform: translateY(calc(var(--think-distance) * -1));
  filter: blur(var(--think-blur));
  opacity: 0;
}
.t-think-text.is-enter-start {
  transition: none;
  transform: translateY(var(--think-distance));
  filter: blur(var(--think-blur));
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .t-think-text { transition: none !important; transform: none !important; filter: none !important; }
  .t-think-text::before { display: none !important; }
}
```
