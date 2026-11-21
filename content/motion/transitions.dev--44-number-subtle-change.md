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

## 它解决什么

计数器、播放量、余额一类数字频繁更新时，整块替换会让人分不清哪一位变了、是涨还是跌。这个动效只让真正变化的数位做原位交叉淡入淡出，没变的字符保持静止，同时用位移方向编码增减：数值上升时新数字从下方上来，下降时从上方落下。眼睛一眼就能定位变化，也不会觉得整块界面在闪。

## 动效怎么构成

结构是混合的：`.t-subtle-number` 里放普通文本（没变的字符）和若干 `.t-subtle-slot`。每个 slot 同时装两个数字，`.t-subtle-old` 是旧值，`.t-subtle-new` 是新值。old 用 `position: absolute; inset: 0; text-align: center; pointer-events: none` 叠在 new 上；new 是 `display: inline-block`，正常参与行内排版，由它撑出 slot 的宽度，所以槽位宽高在切换过程中不变。外层 `display: inline-flex` 配 `align-items: baseline`，让数字与周围文字对齐基线；`font-variant-numeric: tabular-nums` 保证等宽，避免逐位抖动。

动画由容器上的 `.is-animating` 打开：new 跑 `t-subtle-in`，old 跑 `t-subtle-out`，两者都用 `var(--subtle-dur) var(--subtle-ease) both`。`both` 让起始态在等待期就生效、结束态保持住。两个关键帧只写一端：in 只写 `from`，即从「按方向偏移一个距离、透明 `0`、带模糊」回到自然位置；out 只写 `to`，即从自然位置走到反方向的「偏移、透明 `0`、带模糊」。

方向由 `--subtle-dir` 控制，`1` 表示变大，`-1` 表示变小，它被乘进位移：`translateY(calc(var(--subtle-distance) * var(--subtle-dir, 1)))`。old 的位移再乘一个 `-1`，两个数字反向错开，像一上一下换位。

距离与模糊都用 em：`--subtle-distance: 0.14em`、`--subtle-blur: 0.042em`。同一套规则放在小标签和标题级数字上都按比例缩放，换字号不用另调参数。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--subtle-dur` | `455ms` | 交叉淡入淡出时长，两个关键帧共用 |
| `--subtle-distance` | `0.14em` | 数字位移量，随字号缩放 |
| `--subtle-blur` | `0.042em` | 起止态模糊量，随字号缩放 |
| `--subtle-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 两条动画共用的曲线 |
| `--subtle-dir` | `1` / `-1` | 方向：变大走 `1`，变小走 `-1`，默认 `1` |
| `.t-subtle-number` | `display: inline-flex`、`align-items: baseline`、`font-variant-numeric: tabular-nums` | 基线与等宽数字 |
| `.t-subtle-slot` | `position: relative`、`display: inline-block` | 新旧数字的叠放容器 |
| `.t-subtle-old` | `position: absolute`、`inset: 0`、`text-align: center`、`pointer-events: none` | 旧数字覆盖层，不拦点击 |
| `.is-animating` | 容器类 | 同时启动 in 与 out 两条动画 |
| `t-subtle-in` / `t-subtle-out` | `from` / `to` 单端关键帧 | 进出各只定义一变 |

## 怎么用

1. 只给变的位建槽：遍历新字符串，与旧字符相同就输出纯文本，不同的包一层 `.t-subtle-slot`。
2. 槽里放两截：`.t-subtle-old` 装旧字符并标 `aria-hidden="true"`，`.t-subtle-new` 装新字符。
3. 定方向：变大写 `--subtle-dir: 1`，变小写 `-1`，写在容器行内样式上。
4. 开动画：给容器加 `.is-animating`。要重播时按原文三步走，移除类、重新渲染、强制 reflow，再加回类，否则同一个类不会重启关键帧。
5. reduced-motion：原文在 `prefers-reduced-motion: reduce` 下把 new 的 `animation` 关掉，并把 old 设成 `display: none`，直接呈现新值。这两条要成对出现，只关动画不隐藏 old，旧数字会一直压在新数字上。

## 什么时候别用

位数发生变化时不要用。旧串和新串长度不同，逐位对不上，交叉淡入会错位；原文的组件也因此只在长度一致时渲染 old。一秒更新多次的实时数据同样不适合，`455ms` 的动画追不上数据频率，应该降频或干脆不动。位数变化或高频刷新，换成整体淡入或按位滚动的数字滚轮更稳。

## 注意

old 必须带 `aria-hidden="true"`，否则读屏会把新旧两个数字都念一遍。原文的组件做法是给整个容器加 `aria-label` 存放完整新值，让辅助技术读到一个数字而不是逐位片段。`pointer-events: none` 只解决点击穿透，不解决朗读，两者要分别处理。`--subtle-dir` 有默认值 `1`，忘了设置时所有变化都会被当成上升，下降的语义就丢了。位移只有 `0.14em`，外层若有 `overflow: hidden` 且行高很紧，位移和模糊可能被裁掉一角。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

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

### React

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
