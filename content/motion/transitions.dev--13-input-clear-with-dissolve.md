---
title: "组件动效 · 输入清空（Input clear with dissolve）"
source: https://transitions.dev/transitions/input-clear-with-dissolve/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-13-input-clear-with-dissolve
publisher: "Transitions.dev"
---

# 组件动效 · 输入清空（Input clear with dissolve）

> 来源：[Transitions.dev](https://transitions.dev/transitions/input-clear-with-dissolve/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/input-clear-with-dissolve/index.html`。

## 它解决什么

输入框被一键清空时，文字直接消失会像被吞掉一段内容。这个动效把清空拆成两个同时发生的动作：旧文字逐词向上飘散、边飘边模糊，占位提示从下方浮回原位。它面向搜索框、命令面板这类带清空按钮的单行输入。

## 动效怎么构成

`.t-clear` 是 `position: relative` 加 `overflow: hidden`，把光斑裁进圆角框。内部五层：真实 `<input>`、文本镜像 `.t-clear-mirror`、假占位 `.t-clear-placeholder`、光斑层 `.t-clear-glow`、清空按钮 `.t-clear-btn`。后三层带 `aria-hidden="true"`，按钮用 `aria-label="Clear"`。

镜像与占位都是 `position: absolute; inset: 0`，加 `pointer-events: none`、`white-space: nowrap`、`z-index: 2`，它们才是被看到的排版层，输入框只负责接收焦点和录入。镜像默认 `opacity: 0`，`.t-clear.has-value` 或 `.is-clearing` 时显形；同一时刻输入框字符被 `-webkit-text-fill-color: transparent` 抹掉，避免重影。

光斑层 `z-index: 3`、`mix-blend-mode: multiply`、默认 `opacity: 0`。清空瞬间由 JS 往它的 `background` 写入一组 `radial-gradient(...)`，每个词四层椭圆，横坐标按词的宽度换算成百分比，纵向贴底排在 `100%`。每层椭圆的横向半径按词宽乘 `0.45`（下限 `8`）再乘 `--glow-spread` 得出，纵向半径在 `5px` 到 `8px` 之间错开，位置各自左右偏移，叠起来才像一道有扩散的光斑。宽度用 canvas 的 `measureText` 按 `400 13px Inter, sans-serif` 量，左边距按 `32` 计，容器宽度取不到时用 `280` 兜底。

逐帧改的是镜像的 `translateY()`、`opacity`、`filter: blur()`，占位的反向插值，以及光斑自己的 `opacity`。CSS 里没有关键帧：单个词的光斑要走「上升、到峰值、落下」的包络，静态 `@keyframes` 表达不出来。状态只有 `.has-value` 与 `.is-clearing` 两个类。按钮的尺寸、图标与悬停样式不在样式表里，外观由你决定。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--clear-dur` | 1000ms | 清空动画总时长，也是光斑包络的跨度 |
| `--clear-out-dur` | 400ms | 旧文字飘散与溶解时长 |
| `--clear-in-dur` | 400ms | 占位提示浮回时长 |
| `--clear-out-fly` | 12px | 旧文字上移距离 |
| `--clear-in-fly` | 12px | 占位起始下移量，从 `-12px` 回到 0 |
| `--clear-out-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 离场缓动 |
| `--clear-in-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 入场缓动 |
| `--clear-blur` | 2px | 两段过渡的模糊峰值 |
| `--glow-delay` | 50ms | 光斑起升前的静默时间 |
| `--glow-peak-at` | 0.15 | 峰值在光斑阶段的相对位置 |
| `--glow-opacity` | 0.42 | 光斑峰值不透明度 |
| `--glow-spread` | 1.5 | 每个词光斑宽度的放大系数 |

镜像的插值参数由 JS 从这些变量读出，读不到时用 `0.15`、`0.42`、`1000`、`400`、`12`、`2`、`50` 兜底，所以改表里的值不需要重新打包。

## 怎么用

1. 按引用搭好五层，`.t-clear` 的宽度、内边距、圆角、底色交给你自己的样式；边框用 `inset` 画，才会跟着光斑一起被压暗。
2. 监听 `input`，按 `input.value.length > 0` 切换 `.has-value`，并把值写进镜像；空格要换成 `\u00a0`，否则 `nowrap` 下会塌陷。
3. 点按钮时摘掉 `.has-value`、加上 `.is-clearing`、清空 `input.value`，再用 `requestAnimationFrame` 逐帧写镜像上飘、占位回落、光斑 `opacity` 的包络。
4. 走到 `--clear-dur` 后拆掉 `.is-clearing`、清空内联样式与光斑 `background`，并让输入框重新获得焦点。
5. reduced-motion 下原文只把 `.t-clear-glow` 的 `opacity` 锁成 `0`，位移与模糊仍在 JS 里跑；要彻底静音得在脚本里判断后跳过整段。

## 什么时候别用

内容长、会折行的多行输入不适合，镜像层是 `nowrap` 的，长文本会被裁断。逐字校验的表单也别用，快速飘散让人来不及看清自己删了什么。

## 注意

- 清空按钮要在 `pointerdown` 与 `mousedown` 上 `preventDefault`，否则点击会先把焦点从输入框抢走，动画结束后回不来；原文结尾用 `input.focus({ preventScroll: true })` 还原。
- 亮色下光斑画黑色渐变配 `multiply`，暗色必须同时换成白色渐变和 `screen`，原文按 `data-theme="dark"` 判断；只换混合模式会什么都看不见。
- 占位浮回时不透明度从 `0.9` 起步、到 `1` 收尾，位移和模糊同时收敛，所以读起来是「浮现」而不是「亮起」。
- 按钮上用 `×` 作可见字符、用 `aria-label="Clear"` 提供可读名称，别让读屏把 `×` 念成文案。
- 输入框字符是靠 `-webkit-text-fill-color` 隐藏的，选区与拼写检查的原生表现会随之变化，原文没有额外处理。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Input clear with dissolve */

/*
  Usage:
    <!-- Drop .t-clear on a wrapper that you've sized like an
         input field (positioning, padding, border, radius are
         yours). Inside it stack a real <input>, a mirror that
         visualizes the value, a fake placeholder for the new
         empty state, and a glow layer that gets the per-word
         radial-gradient stack written into it from JS. -->
    <div class="t-clear has-value">
      <input type="text" value="…" />
      <div class="t-clear-mirror" aria-hidden="true">…</div>
      <div class="t-clear-placeholder" aria-hidden="true">Search</div>
      <div class="t-clear-glow" aria-hidden="true"></div>
      <button class="t-clear-btn" aria-label="Clear">…</button>
    </div>

  Pair with a small JS routine (mirrors the gallery code) that
  flips `.is-clearing`, animates the mirror's translateY/opacity
  per frame, mirrors the math on the placeholder, and writes a
  stack of `radial-gradient(...)` layers onto .t-clear-glow's
  background so each word gets its own streak. Per-frame JS is
  unavoidable: the streak's rise/peak/fall envelope cannot be
  expressed as a static @keyframe.
*/

:root {
  --clear-dur: 1000ms;
  --clear-out-dur: 400ms;
  --clear-in-dur: 400ms;
  --clear-out-fly: 12px;
  --clear-in-fly: 12px;
  --clear-out-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --clear-in-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --clear-blur: 2px;
  --glow-delay: 50ms;
  --glow-peak-at: 0.15;
  --glow-opacity: 0.42;
  --glow-spread: 1.5;
}

/* The wrap clips the glow to its rounded box. The hairline
   border is `inset` so it sits inside that clip — when the
   glow's mix-blend-mode darkens its area, the border
   underneath darkens with it. Bring your own width / height /
   border-radius / surface color. */
.t-clear {
  position: relative;
  overflow: hidden;
}
.t-clear-mirror,
.t-clear-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  z-index: 2;
}
.t-clear-mirror { opacity: 0; }
.t-clear.has-value .t-clear-mirror,
.t-clear.is-clearing .t-clear-mirror { opacity: 1; }
/* Hide the input's own glyphs while the mirror owns them so
   the cleared text doesn't double-render with the fly-up. */
.t-clear.has-value > input,
.t-clear.is-clearing > input {
  -webkit-text-fill-color: transparent;
}
.t-clear.has-value .t-clear-placeholder { opacity: 0; }
/* The streak overlay: empty by default; JS writes a stack of
   `radial-gradient(...)` layers into background during a clear,
   then animates opacity. mix-blend-mode: multiply darkens the
   underlying input + hairline; flip to `screen` in dark mode
   so the same alpha values lighten instead of vanish. */
.t-clear-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  z-index: 3;
  mix-blend-mode: multiply;
}

/* The transitions live in JS (per-frame transform/opacity/
   filter writes), so this stylesheet only owns the resting
   state + the variables that JS reads. Read them with
   `parseFloat(getComputedStyle(root).getPropertyValue(...))`
   so live tweaks apply on the next clear without a reload. */

@media (prefers-reduced-motion: reduce) {
  .t-clear-glow { opacity: 0 !important; }
}
```

### React

```jsx
// Transitions.dev — Input clear with dissolve (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --clear-dur: 1000ms;
  --clear-out-dur: 400ms;
  --clear-in-dur: 400ms;
  --clear-out-fly: 12px;
  --clear-in-fly: 12px;
  --clear-out-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --clear-in-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --clear-blur: 2px;
  --glow-delay: 50ms;
  --glow-peak-at: 0.15;
  --glow-opacity: 0.42;
  --glow-spread: 1.5;
}

/* The wrap clips the glow to its rounded box. The hairline
   border is `inset` so it sits inside that clip — when the
   glow's mix-blend-mode darkens its area, the border
   underneath darkens with it. Bring your own width / height /
   border-radius / surface color. */
.t-clear {
  position: relative;
  overflow: hidden;
}
.t-clear-mirror,
.t-clear-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  z-index: 2;
}
.t-clear-mirror { opacity: 0; }
.t-clear.has-value .t-clear-mirror,
.t-clear.is-clearing .t-clear-mirror { opacity: 1; }
/* Hide the input's own glyphs while the mirror owns them so
   the cleared text doesn't double-render with the fly-up. */
.t-clear.has-value > input,
.t-clear.is-clearing > input {
  -webkit-text-fill-color: transparent;
}
.t-clear.has-value .t-clear-placeholder { opacity: 0; }
/* The streak overlay: empty by default; JS writes a stack of
   `radial-gradient(...)` layers into background during a clear,
   then animates opacity. mix-blend-mode: multiply darkens the
   underlying input + hairline; flip to `screen` in dark mode
   so the same alpha values lighten instead of vanish. */
.t-clear-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  z-index: 3;
  mix-blend-mode: multiply;
}

/* The transitions live in JS (per-frame transform/opacity/
   filter writes), so this stylesheet only owns the resting
   state + the variables that JS reads. Read them with
   `parseFloat(getComputedStyle(root).getPropertyValue(...))`
   so live tweaks apply on the next clear without a reload. */

@media (prefers-reduced-motion: reduce) {
  .t-clear-glow { opacity: 0 !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p13")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p13";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// Per-frame JS is unavoidable here: the per-word streak's
// rise → peak → fall envelope can't be expressed as a static
// @keyframe, so we tween transform/opacity/filter ourselves.
//
// Use it as:
//   <ClearInput defaultValue="How do transitions work?"
//               placeholder="Search anything" />
//
// Bring your own search icon, container size, and theming.
export function ClearInput({ defaultValue = "", placeholder = "" }) {
  const wrapRef    = useRef(null);
  const inputRef   = useRef(null);
  const mirrorRef  = useRef(null);
  const fakePhRef  = useRef(null);
  const glowRef    = useRef(null);
  const isClearing = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const input = inputRef.current;
    if (!wrap || !input) return;
    const sync = () => {
      const has = input.value.length > 0;
      wrap.classList.toggle("has-value", has);
      if (has && mirrorRef.current) {
        mirrorRef.current.textContent = input.value.replace(/ /g, "\u00a0");
      }
    };
    input.addEventListener("input", sync);
    sync();
    return () => input.removeEventListener("input", sync);
  }, []);

  const onClear = () => {
    const wrap = wrapRef.current;
    const input = inputRef.current;
    const mirror = mirrorRef.current;
    const fakePh = fakePhRef.current;
    const glow = glowRef.current;
    if (!wrap || !input || !mirror || !fakePh || !glow) return;
    if (isClearing.current || !input.value) return;
    isClearing.current = true;
    const wasFocused = document.activeElement === input;
    mirror.textContent = input.value.replace(/ /g, "\u00a0");
    const bg = buildLayers(wrap, mirror.textContent);
    const peakAt   = readNum("--glow-peak-at", 0.15);
    const opacity  = readNum("--glow-opacity", 0.42);
    const total    = readNum("--clear-dur", 1000);
    const outDur   = readNum("--clear-out-dur", 400);
    const inDur    = readNum("--clear-in-dur", 400);
    const outFly   = readNum("--clear-out-fly", 12);
    const inFly    = readNum("--clear-in-fly", 12);
    const blurPx   = readNum("--clear-blur", 2);
    const glowDly  = readNum("--glow-delay", 50);
    const eOut = makeEase(readEase("--clear-out-ease", "cubic-bezier(0.22, 1, 0.36, 1)"));
    const eIn  = makeEase(readEase("--clear-in-ease",  "cubic-bezier(0.22, 1, 0.36, 1)"));

    input.value = "";
    wrap.classList.remove("has-value");
    wrap.classList.add("is-clearing");
    fakePh.style.transform = `translateY(-${inFly}px)`;
    fakePh.style.opacity = "0.9";
    fakePh.style.filter = `blur(${blurPx}px)`;
    glow.style.background = bg;
    glow.style.opacity = "0";

    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const p  = Math.min(1, elapsed / total);
      const e  = eOut(Math.min(1, elapsed / outDur));
      mirror.style.transform = `translateY(${(e * outFly).toFixed(1)}px)`;
      mirror.style.opacity = (1 - e).toFixed(3);
      mirror.style.filter = `blur(${(e * blurPx).toFixed(1)}px)`;
      const pe = eIn(Math.min(1, elapsed / inDur));
      fakePh.style.transform = `translateY(${(-inFly + pe * inFly).toFixed(1)}px)`;
      fakePh.style.opacity = (0.9 + pe * 0.1).toFixed(3);
      fakePh.style.filter = `blur(${(blurPx - pe * blurPx).toFixed(1)}px)`;
      let g = 0;
      if (elapsed > glowDly) {
        const remaining = Math.max(1, total - glowDly);
        const gp = Math.min(1, (elapsed - glowDly) / remaining);
        g = gp < peakAt ? gp / peakAt : 1 - (gp - peakAt) / (1 - peakAt);
      }
      glow.style.opacity = (g * opacity).toFixed(3);
      if (p < 1) requestAnimationFrame(tick);
      else {
        wrap.classList.remove("is-clearing");
        for (const el of [mirror, fakePh]) el.style.cssText = "";
        mirror.textContent = "";
        glow.style.opacity = "0";
        glow.style.background = "";
        isClearing.current = false;
        if (wasFocused) input.focus({ preventScroll: true });
      }
    };
    requestAnimationFrame(tick);
  };

  return (
    <div ref={wrapRef} className="t-clear">
      <input
        ref={inputRef}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <div ref={mirrorRef} className="t-clear-mirror" aria-hidden="true" />
      <div ref={fakePhRef} className="t-clear-placeholder" aria-hidden="true">
        {placeholder}
      </div>
      <div ref={glowRef} className="t-clear-glow" aria-hidden="true" />
      <button
        type="button"
        className="t-clear-btn"
        aria-label="Clear"
        // Trap focus on the input across pointer + mouse so the button
        // never steals it during the clear animation.
        onPointerDown={(e) => { if (document.activeElement === inputRef.current) e.preventDefault(); }}
        onMouseDown={(e) => { if (document.activeElement === inputRef.current) e.preventDefault(); }}
        onClick={onClear}
      >×</button>
    </div>
  );
}

function buildLayers(wrap, text) {
  const inputW = wrap.clientWidth || 280;
  const padLeft = 32;
  const segments = text.split(/(\s+)/);
  const spread = readNum("--glow-spread", 1.5);
  const ctx = (buildLayers._ctx ||= (() => {
    const c = document.createElement("canvas").getContext("2d");
    c.font = "400 13px Inter, sans-serif";
    return c;
  })());
  // Light mode paints black gradients (multiply blend); dark mode
  // paints white (screen blend). Pair this with the matching
  // `mix-blend-mode` rule on .t-clear-glow in your theme CSS.
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const rgb = isDark ? "255,255,255" : "0,0,0";
  const layers = [];
  let x = 0;
  for (const seg of segments) {
    const w = ctx.measureText(seg).width;
    if (seg.trim()) {
      const cx = padLeft + x + w / 2;
      const hw = Math.max(w * 0.45, 8) * spread;
      const stops = [
        { dx: 0,         rw: hw * 0.8,  rh: 7, a: 0.22 },
        { dx: hw * 0.45, rw: hw * 0.55, rh: 8, a: 0.18 },
        { dx: -hw * 0.4, rw: hw * 0.65, rh: 6, a: 0.16 },
        { dx: hw * 0.15, rw: hw * 0.9,  rh: 5, a: 0.14 },
      ];
      for (const l of stops) {
        const lx = ((cx + l.dx) / inputW * 100).toFixed(2);
        layers.push(
          `radial-gradient(ellipse ${Math.max(l.rw, 2).toFixed(1)}px ${l.rh}px at ${lx}% 100%, rgba(${rgb},${l.a.toFixed(3)}), transparent)`
        );
      }
    }
    x += w;
  }
  return layers.join(", ");
}
function readNum(name, fb) {
  const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(v) ? v : fb;
}
function readEase(name, fb) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fb;
}
function makeEase(ease) {
  const m = ease.match(/cubic-bezier\s*\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)/i);
  if (!m) return (t) => t;
  const [x1, y1, x2, y2] = [m[1], m[2], m[3], m[4]].map(parseFloat);
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sX = (s) => ((ax * s + bx) * s + cx) * s;
  const sY = (s) => ((ay * s + by) * s + cy) * s;
  const dX = (s) => (3 * ax * s + 2 * bx) * s + cx;
  return (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    let s = t;
    for (let i = 0; i < 8; i++) {
      const dx = sX(s) - t;
      if (Math.abs(dx) < 1e-6) break;
      const d = dX(s);
      if (d === 0) break;
      s -= dx / d;
    }
    return sY(s);
  };
}
```
