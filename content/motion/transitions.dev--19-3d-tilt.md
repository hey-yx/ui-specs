---
title: "组件动效 · 3D 倾斜（3D tilt）"
source: https://transitions.dev/transitions/3d-tilt/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-19-3d-tilt
publisher: "Transitions.dev"
---

# 组件动效 · 3D 倾斜（3D tilt）

> 来源：[Transitions.dev](https://transitions.dev/transitions/3d-tilt/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/3d-tilt/index.html`。

## 它解决什么

平面卡片只靠阴影和颜色回应指针，鼠标移到卡片哪一侧看上去都一样，用户感觉不到“这张卡在跟着我”。3D 倾斜把指针位置映射成卡片的朝向，再叠一层跟随指针的高光假装有光源，让封面、作品卡、价格卡在悬停时有一次立体的回应。离开时卡片慢慢摊平，避免松手瞬间的突变。

## 动效怎么构成

结构是两层容器加一层高光。最外层 `.t-tilt` 是命中区，本身永远不变换，只声明 `touch-action: none`。内层 `.t-tilt-card` 承担全部变换：`transform: perspective(var(--tilt-perspective)) rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg))`，配 `transform-style: preserve-3d`、`will-change: transform`，另有 `border-radius: 12px` 与 `overflow: hidden`。

角度不由 CSS 计算，由 JS 写进两个自定义属性：`--tilt-rx` 喂给 rotateX，`--tilt-ry` 喂给 rotateY，未写入时回落到 0deg。指针坐标在外层测量，因为外层不变换，卡片的边缘不会被自己的旋转从光标下面抽走。坐标归一化到 0 到 1 之后按 `max`（默认 32）取角：`--tilt-ry` 是 `(px - 0.5) * max`，`--tilt-rx` 是 `(0.5 - py) * max`，指针在左半边卡片就向左倾，在上半边就向上抬。

高光层 `.t-tilt-glare` 是绝对定位 `inset: 0` 的一层，`pointer-events: none`、`mix-blend-mode: screen`、初始 `opacity: 0`，背景由三个同心 `radial-gradient` 叠加，圆心都读 `--tilt-gx` 与 `--tilt-gy`（默认 50%），圆半径分别是 95px、200px、360px，越往外越淡。混合模式是 screen，因此它是加光，不是盖一层灰。

状态分成两个类。外层加 `.is-hover` 时高光淡到 `--tilt-glare-opacity`，用 `--tilt-glare-fade` 淡入；卡片加 `.is-tilting` 时把过渡换成更短的 `--tilt-follow`，让移动中的倾角跟手，不加这个类时移动会走 1000ms 的回正时钟，明显拖尾。离开时两个类都移除，角度写回 0deg，卡片用 1000ms 摊平。

分层的原因是命中区与变换区分开：如果在外层也做变换，指针坐标所在的坐标系会跟着转，`getBoundingClientRect()` 的矩形和浏览器派发的 `clientX` / `clientY` 就对不上，倾角会越转越偏。外层保持静止，坐标始终落在一个稳定的矩形里，卡片怎么转都不影响输入。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--tilt-perspective` | `1000px` | 透视距离，写进 `perspective()` |
| `--tilt-return` | `1000ms` | 离开后回正到平面的时长 |
| `--tilt-return-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 回正缓动 |
| `--tilt-follow` | `400ms` | 指针移动中的跟随时长 |
| `--tilt-follow-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 跟随缓动 |
| `--tilt-glare-opacity` | `0.32` | `.is-hover` 时高光层的目标不透明度 |
| `--tilt-glare-fade` | `300ms` | 高光淡入淡出时长 |
| `--tilt-glare-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 高光缓动 |
| `--tilt-rx` | `0deg` | rotateX 角度，JS 写入，缺省回落值 |
| `--tilt-ry` | `0deg` | rotateY 角度，JS 写入，缺省回落值 |
| `--tilt-gx`、`--tilt-gy` | `50%` | 高光圆心，JS 写入百分比 |
| `.t-tilt` | `touch-action: none` | 手指拖拽倾卡而不是滚页 |
| `.t-tilt-card` | `border-radius: 12px` | 卡片圆角，配合 `overflow: hidden` 裁高光 |
| `.t-tilt-glare` | `mix-blend-mode: screen` | 高光按加光混合 |
| `.t-tilt-glare` 背景 | `95px` / `200px` / `360px` | 三层 radial-gradient 的圆半径 |
| `max`（JS 入参） | `32` | 最大倾角，单位度 |

## 怎么用

1. 按 `.t-tilt` > `.t-tilt-card` 嵌套，高光层放在卡片内部最后一个子节点，并加 `aria-hidden="true"`。
2. 指针监听挂在最外层，用 `getBoundingClientRect()` 把 `clientX` 与 `clientY` 换算成 0 到 1 的比例，并用 `Math.min` / `Math.max` 夹住边界。
3. `pointermove` 里给外层加 `.is-hover`、给卡片加 `.is-tilting`，再写四个属性：`--tilt-ry`、`--tilt-rx` 带 deg，`--tilt-gx`、`--tilt-gy` 带百分号。
4. 写入时角度按 `toFixed(2)` 保留两位小数、位置按 `toFixed(1)` 保留一位，避免每个像素都拼出新的属性字符串，减少无效的样式重算。
5. `pointerleave` 里移除这两个类，把 `--tilt-rx` 与 `--tilt-ry` 设回 0deg。高光圆心不用复位，它靠 opacity 隐藏。
6. reduced-motion 下卡片的 `transform` 与 `transition` 被 `!important` 清空，倾斜不再发生，高光的淡入淡出仍然保留。

## 什么时候别用

卡片本身要承载滚动或横向拖动时不要用，`touch-action: none` 会把手势从页面手里抢走，用户在卡片上滑动翻不动页。触屏为主的界面可以只在支持 hover 的环境里启用，让触屏退化成静态卡片。一屏卡片全部倾斜还会带来过多合成层，长列表里尤其明显。

## 注意

`mix-blend-mode: screen` 依赖下层有足够暗的内容，浅色背景上高光几乎看不见，这是加光混合的结果，不是写错了值。`will-change: transform` 是常驻声明，卡片数量多时每个都占一个合成层。指针坐标必须在外层测量，改到卡片上测，旋转会把边缘从光标下抽走，倾角会追着自己跑。reduced-motion 分支只清 `transform` 与 `transition`，高光的 `opacity` 过渡与之无关，装饰层已经 `aria-hidden`，不进可访问名称。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Card hover tilt */

/*
  Usage:
    <div class="t-tilt">                <!-- flat hit area -->
      <div class="t-tilt-card">       <!-- the element that tilts -->
        … card content …
        <div class="t-tilt-glare"></div>
      </div>
    </div>

  Track the pointer on the OUTER `.t-tilt` (it never
  transforms) and write four custom properties from JS:
    el.style.setProperty('--tilt-rx', rxDeg + 'deg');
    el.style.setProperty('--tilt-ry', ryDeg + 'deg');
    el.style.setProperty('--tilt-gx', gxPct + '%');
    el.style.setProperty('--tilt-gy', gyPct + '%');
  Add `.is-tilting` while moving (fast follow) and
  `.is-hover` to fade the glare in; remove both on leave.
*/

:root {
  --tilt-perspective: 1000px;
  --tilt-return: 1000ms;
  --tilt-return-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tilt-follow: 400ms;
  --tilt-follow-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tilt-glare-opacity: 0.32;
  --tilt-glare-fade: 300ms;
  --tilt-glare-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* The outer wrapper is the flat hit area; touch-action:none
   lets a finger drag tilt the card instead of scrolling the
   page, so tap-hold-drag works on mobile. */
.t-tilt { touch-action: none; }
/* The card tilts toward the pointer via rotateX/rotateY fed
   from JS; on leave it eases back to flat. A separate
   .is-tilting class swaps in a short linear follow while the
   pointer moves so the tilt tracks the cursor 1:1. */
.t-tilt-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform:
    perspective(var(--tilt-perspective))
    rotateX(var(--tilt-rx, 0deg))
    rotateY(var(--tilt-ry, 0deg));
  transform-style: preserve-3d;
  transition: transform var(--tilt-return) var(--tilt-return-ease);
  will-change: transform;
}
.t-tilt-card.is-tilting {
  transition: transform var(--tilt-follow) var(--tilt-follow-ease);
}
/* Cursor-tracked glare: layered soft circles that add like
   light (screen blend) at the pointer position. */
.t-tilt-glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  background:
    radial-gradient(circle 95px at var(--tilt-gx, 50%) var(--tilt-gy, 50%),
      rgba(255,255,255,0.48), rgba(255,255,255,0.06) 52%, rgba(255,255,255,0) 84%),
    radial-gradient(circle 200px at var(--tilt-gx, 50%) var(--tilt-gy, 50%),
      rgba(255,255,255,0.22), rgba(255,255,255,0.04) 58%, rgba(255,255,255,0) 78%),
    radial-gradient(circle 360px at var(--tilt-gx, 50%) var(--tilt-gy, 50%),
      rgba(255,255,255,0.10), rgba(255,255,255,0) 88%);
  transition: opacity var(--tilt-glare-fade) var(--tilt-glare-ease);
}
.t-tilt.is-hover .t-tilt-glare { opacity: var(--tilt-glare-opacity); }

@media (prefers-reduced-motion: reduce) {
  .t-tilt-card { transform: none !important; transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Card hover tilt (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useRef } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --tilt-perspective: 1000px;
  --tilt-return: 1000ms;
  --tilt-return-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tilt-follow: 400ms;
  --tilt-follow-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tilt-glare-opacity: 0.32;
  --tilt-glare-fade: 300ms;
  --tilt-glare-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* The outer wrapper is the flat hit area; touch-action:none
   lets a finger drag tilt the card instead of scrolling the
   page, so tap-hold-drag works on mobile. */
.t-tilt { touch-action: none; }
/* The card tilts toward the pointer via rotateX/rotateY fed
   from JS; on leave it eases back to flat. A separate
   .is-tilting class swaps in a short linear follow while the
   pointer moves so the tilt tracks the cursor 1:1. */
.t-tilt-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform:
    perspective(var(--tilt-perspective))
    rotateX(var(--tilt-rx, 0deg))
    rotateY(var(--tilt-ry, 0deg));
  transform-style: preserve-3d;
  transition: transform var(--tilt-return) var(--tilt-return-ease);
  will-change: transform;
}
.t-tilt-card.is-tilting {
  transition: transform var(--tilt-follow) var(--tilt-follow-ease);
}
/* Cursor-tracked glare: layered soft circles that add like
   light (screen blend) at the pointer position. */
.t-tilt-glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  background:
    radial-gradient(circle 95px at var(--tilt-gx, 50%) var(--tilt-gy, 50%),
      rgba(255,255,255,0.48), rgba(255,255,255,0.06) 52%, rgba(255,255,255,0) 84%),
    radial-gradient(circle 200px at var(--tilt-gx, 50%) var(--tilt-gy, 50%),
      rgba(255,255,255,0.22), rgba(255,255,255,0.04) 58%, rgba(255,255,255,0) 78%),
    radial-gradient(circle 360px at var(--tilt-gx, 50%) var(--tilt-gy, 50%),
      rgba(255,255,255,0.10), rgba(255,255,255,0) 88%);
  transition: opacity var(--tilt-glare-fade) var(--tilt-glare-ease);
}
.t-tilt.is-hover .t-tilt-glare { opacity: var(--tilt-glare-opacity); }

@media (prefers-reduced-motion: reduce) {
  .t-tilt-card { transform: none !important; transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p19")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p19";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// The pointer is tracked on the OUTER wrapper (which never transforms)
// so the tilting card can't pull its own edges out from under the
// cursor. rotateX/Y + glare position are written into CSS vars.
export function TiltCard({ children, max = 32 }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const onMove = (e) => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    const r = wrap.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    wrap.classList.add("is-hover");
    card.classList.add("is-tilting");
    card.style.setProperty("--tilt-ry", ((px - 0.5) * max).toFixed(2) + "deg");
    card.style.setProperty("--tilt-rx", ((0.5 - py) * max).toFixed(2) + "deg");
    card.style.setProperty("--tilt-gx", (px * 100).toFixed(1) + "%");
    card.style.setProperty("--tilt-gy", (py * 100).toFixed(1) + "%");
  };

  const onLeave = () => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (wrap) wrap.classList.remove("is-hover");
    if (card) {
      card.classList.remove("is-tilting");
      card.style.setProperty("--tilt-rx", "0deg");
      card.style.setProperty("--tilt-ry", "0deg");
    }
  };

  return (
    <div ref={wrapRef} className="t-tilt" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div ref={cardRef} className="t-tilt-card">
        {children}
        <div className="t-tilt-glare" aria-hidden="true" />
      </div>
    </div>
  );
}
```
