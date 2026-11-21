---
title: "组件动效 · 数字滚轮（Spinning counter）"
source: https://transitions.dev/transitions/spinning-counter/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-26-spinning-counter
publisher: "Transitions.dev"
---

# 组件动效 · 数字滚轮（Spinning counter）

> 来源：[Transitions.dev](https://transitions.dev/transitions/spinning-counter/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/spinning-counter/index.html`。

## 它解决什么

计数器从 100 变成 178 时，整块数字一起替换，读数的人要重新扫一遍才知道哪几位动了。这个动效把每一位当成滚筒上的一格，只有真正变化的那几位滚过去，没变的位原地不动。滚动途中经过的数字给出方向感，落位时冲过 100% 再回弹，读数因此有终点，不是突然换了个数。

## 动效怎么构成

容器是 `.t-reel`，`display: inline-flex`，并且 `font-variant-numeric: tabular-nums`，保证数字等宽。每一位生成一个 `.t-reel-col`，列里有两类子元素：

- `.t-reel-sizer`，内容是隐藏的 `0`，只用 `visibility: hidden` 撑出这一位的宽度。
- 十个 `.t-reel-digit`，内容从 0 到 9，全部 `position: absolute` 加 `inset: 0` 叠在列里，靠 `transform`、`filter`、`opacity`、`z-index` 区分远近与前后。

非数字字符（逗号、小数点）不建列，单独生成一个 `.t-reel-sep`。

每一帧由脚本算每个格子到滚筒中线的距离，换算成角度，相邻两格的夹角是常量 `STEP`。离中线越远，`scale` 越向 `--reel-side-scale` 靠，`blur` 越向 `--reel-side-blur` 靠，`opacity` 越向 `--reel-side-opacity` 靠。纵向位移用鼓半径乘夹角的正弦得出，所以轨迹是弧线而不是直线平移；鼓半径等于 `--reel-side-offset` 除以 `sin(STEP)`。

落位分两段：先是 `--reel-antic-dur` 的蓄力，目标格压到 `--reel-antic-scale` 并朝反方向抬起 `--reel-antic-lift`；再进 `--reel-land-dur` 的阻尼弹簧，峰值到 `--reel-land-peak`，也就是冲过原尺寸之后回落。容器上的 `aria-label` 由脚本写成完整数值。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--reel-step-dur` | 130ms | 每滚过一个数字的时长，固定值，跨度大就滚得久 |
| `--reel-stagger` | 90ms | 相邻两列起滚的错开量 |
| `--reel-ease` | cubic-bezier(0.35, -0.02, 0.43, 1) | 滚动位置的缓动，脚本会解析这条曲线 |
| `--reel-cell` | 1.2em | 每格高度与行高，也决定容器高度 |
| `--reel-side-scale` | 0.7 | 侧格的缩放终点 |
| `--reel-side-offset` | 0.52em | 侧格相对中线的偏移，也用来推鼓半径 |
| `--reel-side-blur` | max(0.067em, 0.171em - 2.1px) | 侧格模糊强度，随字号变化的一条曲线 |
| `--reel-side-opacity` | 0.17 | 侧格透明度的终点 |
| `--reel-center-scale` | 0.9 | 入场时中线格的缩放起点，向 1 插值 |
| `--reel-center-blur` | 0.042em | 中线格的模糊基准 |
| `--reel-antic-dur` | 100ms | 落位前的蓄力时长 |
| `--reel-antic-scale` | 0.94 | 蓄力时目标格压到的缩放 |
| `--reel-antic-lift` | 0.125em | 蓄力时目标格反向抬起的高度 |
| `--reel-land-dur` | 740ms | 弹簧落位的时长 |
| `--reel-land-peak` | 1.03 | 弹簧峰值，即冲过原尺寸的量 |
| `STEP`（脚本常量） | (50 * Math.PI) / 180 | 滚筒上相邻两格的夹角 |
| `ENTER_MS`（脚本常量） | 120 | 从静止进入滚动的过渡时长 |
| `FADE_END`（脚本常量） | 1.8 | 距中线多少格之后完全不可见 |
| `LAND_AT`（脚本常量） | 0.6 | 距中线多少格时目标开始接管落位 |
| `ARRIVE_AT`（脚本常量） | 0.29 | 弹簧走到中线的比例 |
| `CLEAR_MS`（脚本常量） | 200 | 弹簧开始后邻格与模糊清空所需时间 |

## 怎么用

1. 只给容器一个空的 `<div class="t-reel">`，其余节点由脚本建；每次滚动先清空，再按目标数字的字符串重建列。
2. 每列从旧数字的对应位起滚，旧值用 `padStart` 补零对齐到列数；旧值等于新值的列直接标记完成，不参与动画。
3. 列与列之间按索引乘 `--reel-stagger` 错开，越靠右的位起滚越晚。
4. 距离中线 `LAND_AT` 格时触发落位，此时目标格接管位置与层级，其余格在 `CLEAR_MS` 内清掉模糊。
5. `prefers-reduced-motion: reduce` 下脚本直接把每列停到目标格，不启动帧循环；CSS 侧另外把 `.t-reel-digit` 的 `filter` 关掉。

## 什么时候别用

数值高频跳动（秒级时钟、实时速率）时，740ms 的落位还没结束就要接下一轮，弹簧会互相打断，读数反而更糊。这类场景换成无动画替换，或只在整数位变化时给一次提示。位数很多时也不适合，每列十个格子外加 `will-change`，一屏好几个计数器就重了。

## 注意

- 视觉上十层数字同时存在，读屏只能靠 `.t-reel` 上的 `aria-label` 拿到数值；缺省或滞后，念出来的就是一堆数字字符。
- 所有长度 token 都用 `em`，`--reel-side-blur` 还是按字号变化的 `max()` 曲线，脚本用探针元素量成 px 再驱动。换字号或换字体后要重新量。
- 每列都有 `will-change: transform, filter, opacity`，位数多时是一批常驻合成层。动画结束把容器移出文档，只靠 `visibility: hidden` 不会释放。
- 位移只有 `translateY` 与 `scale`，没有真正的 3D 旋转；格子的层叠顺序靠脚本写的 `z-index`，手工补 CSS 改不了前后关系。

最小结构（token 见上表，脚本逐帧写 `transform`、`filter`、`opacity`）：

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Spinning counter */

/*
  Usage:
    <div class="t-reel"></div>  <!-- drums built in JS -->

  One .t-reel-col per digit: a hidden sizer for the width, plus ten
  stacked .t-reel-digit cells. JS places each cell per frame from its
  distance to the middle of the drum. Digits only roll through the
  numbers on the way to their target; a digit that does not change
  stays still. The target lands while still travelling in, with a
  spring past 100%.

  Sizes: lengths are in em and --reel-side-blur is a curve on the font
  size; the script measures them on the drum, so any size works.

  The script that drives the drums is in the React tab and the skill recipe.
*/

:root {
  --reel-step-dur: 130ms;
  --reel-stagger: 90ms;
  --reel-ease: cubic-bezier(0.35, -0.02, 0.43, 1);
  --reel-cell: 1.2em;
  --reel-side-scale: 0.7;
  --reel-side-offset: 0.52em;
  --reel-side-blur: max(0.067em, 0.171em - 2.1px);
  --reel-side-opacity: 0.17;
  --reel-center-scale: 0.9;
  --reel-center-blur: 0.042em;
  --reel-antic-dur: 100ms;
  --reel-antic-scale: 0.94;
  --reel-antic-lift: 0.125em;
  --reel-land-dur: 740ms;
  --reel-land-peak: 1.03;
}

.t-reel {
  display: inline-flex;
  align-items: center;
  height: var(--reel-cell);
  font-variant-numeric: tabular-nums;
}
.t-reel-col {
  position: relative;
  display: inline-block;
  height: var(--reel-cell);
  line-height: var(--reel-cell);
}
.t-reel-sizer { visibility: hidden; }
.t-reel-digit {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, filter, opacity;
}
.t-reel-sep {
  display: inline-block;
  height: var(--reel-cell);
  line-height: var(--reel-cell);
}
/* JS drives every digit per frame from the tokens above. */

@media (prefers-reduced-motion: reduce) {
  .t-reel-digit { filter: none !important; }
}
```

### React

```jsx
// Transitions.dev — Spinning counter (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --reel-step-dur: 130ms;
  --reel-stagger: 90ms;
  --reel-ease: cubic-bezier(0.35, -0.02, 0.43, 1);
  --reel-cell: 1.2em;
  --reel-side-scale: 0.7;
  --reel-side-offset: 0.52em;
  --reel-side-blur: max(0.067em, 0.171em - 2.1px);
  --reel-side-opacity: 0.17;
  --reel-center-scale: 0.9;
  --reel-center-blur: 0.042em;
  --reel-antic-dur: 100ms;
  --reel-antic-scale: 0.94;
  --reel-antic-lift: 0.125em;
  --reel-land-dur: 740ms;
  --reel-land-peak: 1.03;
}

.t-reel {
  display: inline-flex;
  align-items: center;
  height: var(--reel-cell);
  font-variant-numeric: tabular-nums;
}
.t-reel-col {
  position: relative;
  display: inline-block;
  height: var(--reel-cell);
  line-height: var(--reel-cell);
}
.t-reel-sizer { visibility: hidden; }
.t-reel-digit {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, filter, opacity;
}
.t-reel-sep {
  display: inline-block;
  height: var(--reel-cell);
  line-height: var(--reel-cell);
}
/* JS drives every digit per frame from the tokens above. */

@media (prefers-reduced-motion: reduce) {
  .t-reel-digit { filter: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p26")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p26";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Each digit is a drum of 0-9 that rolls
// through the numbers up to its target; a digit that does not change stays
// still. The tokens in :root drive everything.
const STEP = (50 * Math.PI) / 180; // drum angle between two digits
const ENTER_MS = 120;              // rest to rolling
const FADE_END = 1.8;              // steps from the middle where a digit is gone
const LAND_AT = 0.6;               // steps from the middle where the target starts landing
const ARRIVE_AT = 0.29;            // share of the spring where it reaches the middle
const CLEAR_MS = 200;              // blur + neighbours clearing at the start of the spring

function token(name, fallback) {
  const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isNaN(v) ? fallback : v;
}
// Lengths are in em (blur is a max() curve on the font size), so they are
// measured in px on the drum itself and follow whatever size the number uses.
function length(el, name, fallbackEm) {
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;width:var(${name})`;
  el.appendChild(probe);
  const px = probe.getBoundingClientRect().width;
  probe.remove();
  return px || fallbackEm * (parseFloat(getComputedStyle(el).fontSize) || 24);
}
function readTokens(el) {
  const css = getComputedStyle(document.documentElement);
  const m = css.getPropertyValue("--reel-ease").match(/cubic-bezier\(([^)]+)\)/);
  return {
    stepDur: token("--reel-step-dur", 130),
    stagger: token("--reel-stagger", 90),
    ease: bezier(m ? m[1].split(",").map(parseFloat) : [0.35, -0.02, 0.43, 1]),
    offset: length(el, "--reel-side-offset", 0.52),
    sideScale: token("--reel-side-scale", 0.7),
    sideBlur: length(el, "--reel-side-blur", 0.083),
    sideOpacity: token("--reel-side-opacity", 0.17),
    centerScale: token("--reel-center-scale", 0.9),
    centerBlur: length(el, "--reel-center-blur", 0.042),
    anticDur: token("--reel-antic-dur", 100),
    anticScale: token("--reel-antic-scale", 0.94),
    anticLift: length(el, "--reel-antic-lift", 0.125),
    landDur: token("--reel-land-dur", 740),
    landPeak: token("--reel-land-peak", 1.03),
  };
}
function bezier([x1, y1, x2, y2]) {
  const at = (a, b, t) => 3 * a * t * (1 - t) * (1 - t) + 3 * b * t * t * (1 - t) + t * t * t;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0, hi = 1, t = x;
    for (let i = 0; i < 20; i++) {
      if (at(x1, x2, t) < x) lo = t; else hi = t;
      t = (lo + hi) / 2;
    }
    return at(y1, y2, t);
  };
}
function smooth(x) {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
}
// Damped wave: starts at 1, crosses 0, swings negative (the bounce), ends at 0.
function wave(s) {
  return s >= 1 ? 0 : Math.exp(-3 * s) * Math.cos(3 * Math.PI * s) * (1 - s);
}
const WAVE_TROUGH = (() => {
  let low = 0;
  for (let i = 1; i < 400; i++) low = Math.min(low, wave(i / 400));
  return -low;
})();

function buildColumns(el, str) {
  el.replaceChildren();
  const cols = [];
  for (const ch of str) {
    if (ch < "0" || ch > "9") {
      const sep = document.createElement("span");
      sep.className = "t-reel-sep";
      sep.textContent = ch;
      el.appendChild(sep);
      continue;
    }
    const col = document.createElement("span");
    col.className = "t-reel-col";
    const sizer = document.createElement("span");
    sizer.className = "t-reel-sizer";
    sizer.textContent = "0";
    col.appendChild(sizer);
    const cells = [];
    for (let d = 0; d < 10; d++) {
      const cell = document.createElement("span");
      cell.className = "t-reel-digit";
      cell.textContent = String(d);
      col.appendChild(cell);
      cells.push(cell);
    }
    el.appendChild(col);
    cols.push({ cells, digit: +ch });
  }
  return cols;
}
function rest(col, digit) {
  col.cells.forEach((cell, d) => {
    cell.style.transform = "none";
    cell.style.filter = "none";
    cell.style.zIndex = "";
    cell.style.opacity = d === digit ? "1" : "0";
  });
}
function look(dist, middle, o) {
  const angle = Math.min(dist * STEP, Math.PI / 2);
  // 1 in the middle, 0 at one step away, below 0 further back.
  const face = (Math.cos(angle) - Math.cos(STEP)) / (1 - Math.cos(STEP));
  return {
    angle,
    scale: o.sideScale + (middle - o.sideScale) * face,
    back: dist <= 1 ? 1 + (o.sideOpacity - 1) * dist : o.sideOpacity * (1 - (dist - 1) / (FADE_END - 1)),
  };
}
function place(col, pos, spread, middle, o, land) {
  const radius = o.offset / Math.sin(STEP);
  col.cells.forEach((cell, d) => {
    let p = (((d - pos) % 10) + 10) % 10;
    if (p > 5) p -= 10;
    const dist = Math.abs(p);
    if (dist >= FADE_END) { cell.style.opacity = "0"; return; }
    const l = look(dist, middle, o);
    // Upcoming digits sit above the middle, so the drum turns downward.
    let y = (p < 0 ? 1 : -1) * radius * Math.sin(l.angle);
    const blur = (o.centerBlur + (o.sideBlur - o.centerBlur) * Math.min(dist, 1)) * spread;
    const away = Math.max(0, Math.min(1, (dist - 0.3) / 0.5));
    let opacity = l.back * (1 - (1 - spread) * away);
    let scale = l.scale;
    let z = 100 - Math.round(dist * 10);
    if (land && d === col.digit) {
      y = y * land.arrive + land.lift;
      scale = land.scale;
      opacity = land.opacity;
      z = 200;
    }
    cell.style.transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
    cell.style.filter = blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : "none";
    cell.style.opacity = opacity.toFixed(3);
    cell.style.zIndex = String(z);
  });
}
// Rolls `el` from one number to another. Returns a function that cancels it.
function roll(el, from, to) {
  const str = to.toLocaleString("en-US");
  el.setAttribute("aria-label", str);
  const cols = buildColumns(el, str);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cols.forEach((c) => rest(c, c.digit));
    return () => {};
  }
  const o = readTokens(el);
  // Each column starts on its digit of the old number, aligned from the right.
  const fromDigits = String(from).padStart(cols.length, "0").slice(-cols.length);
  cols.forEach((c, i) => {
    c.from = +fromDigits[i];
    rest(c, c.from);
    if (c.from === c.digit) c.done = true; // nothing to do
  });
  const t0 = performance.now();
  let raf = 0;
  const tick = () => {
    const t = performance.now() - t0;
    let running = false;
    cols.forEach((c, i) => {
      if (c.done) return;
      const local = t - i * o.stagger;
      if (local <= 0) { running = true; return; }
      const total = (c.digit - c.from + 10) % 10;
      // Time per number is fixed, so a longer roll takes longer.
      const pos = c.from + total * o.ease(local / (total * o.stepDur));
      const enter = Math.min(1, local / ENTER_MS);
      if (c.landAt === undefined && c.from + total - pos < LAND_AT) c.landAt = t;
      const since = c.landAt === undefined ? -1 : t - c.landAt;
      if (since >= o.anticDur + o.landDur) {
        rest(c, c.digit);
        c.done = true;
        return;
      }
      running = true;
      const middle = 1 + (o.centerScale - 1) * enter;
      let spread = enter;
      let land = null;
      if (since >= 0) {
        // Start from how the target looks right now, so nothing jumps.
        if (!c.landFrom) c.landFrom = look(c.from + total - pos, middle, o);
        const arrive = 1 - smooth(since / (o.anticDur + o.landDur * ARRIVE_AT));
        if (since < o.anticDur) {
          // Anticipation: eases to --reel-antic-scale, pulling back against the roll.
          const a = smooth(since / o.anticDur);
          land = {
            scale: c.landFrom.scale + (o.anticScale - c.landFrom.scale) * a,
            lift: -o.anticLift * a,
            opacity: c.landFrom.back + (1 - c.landFrom.back) * a,
            arrive,
          };
        } else {
          // Spring: snaps into the middle, past 100%, then settles.
          const sp = since - o.anticDur;
          const sn = sp / o.landDur;
          const w = wave(sn);
          land = {
            scale: sn < 1 / 6 ? 1 + (o.anticScale - 1) * w : 1 - ((o.landPeak - 1) * w) / WAVE_TROUGH,
            lift: -o.anticLift * w,
            opacity: 1,
            arrive,
          };
          spread = 1 - Math.min(1, sp / CLEAR_MS);
        }
      }
      place(c, pos, spread, middle, o, land);
    });
    if (running) raf = requestAnimationFrame(tick);
  };
  tick();
  return () => cancelAnimationFrame(raf);
}

export function SpinningCounter({ initial = 100, first = 178 }) {
  const ref = useRef(null);
  const value = useRef(initial);
  const [target, setTarget] = useState(initial);

  useEffect(() => {
    const el = ref.current;
    if (target === value.current) {
      const str = target.toLocaleString("en-US");
      el.setAttribute("aria-label", str);
      buildColumns(el, str).forEach((c) => rest(c, c.digit));
      return undefined;
    }
    const cancel = roll(el, value.current, target);
    value.current = target;
    return cancel;
  }, [target]);

  const next = () => {
    if (value.current === initial) return setTarget(first);
    let n;
    do { n = 100 + Math.floor(Math.random() * 900); } while (n === value.current);
    return setTarget(n);
  };

  return (
    <>
      <div ref={ref} className="t-reel" />
      <button type="button" onClick={next}>Animate</button>
    </>
  );
}
```
