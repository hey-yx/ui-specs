---
title: "组件动效 · 了解更多悬停（Learn more hover）"
source: https://transitions.dev/transitions/learn-more-hover/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-24-learn-more-hover
publisher: "Transitions.dev"
---

# 组件动效 · 了解更多悬停（Learn more hover）

> 来源：[Transitions.dev](https://transitions.dev/transitions/learn-more-hover/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/learn-more-hover/index.html`。

## 它解决什么

“了解更多”“查看全部”这类按钮后面常跟一个小箭头，静止时它只是装饰。悬停时如果完全不动，用户得不到“这里能进”的暗示。这个动效让箭头整体右移 2px，同时把折线的上下两段绕顶点各转 8deg，开口变大，视觉上像箭头被推开。位移只有几像素，方向感却很清楚；整套是纯 CSS，没有 JS 参与。

## 动效怎么构成

按钮 `.t-learn` 里是 `span.t-learn-chevron` 包一个 svg，svg 里画两条独立 path：`.t-learn-arm-top` 的 `d="M6 4L10 8"` 与 `.t-learn-arm-bot` 的 `d="M10 8L6 12"`，两条都带 `.t-learn-arm` 公共类。箭头的“张开”不是换 path，而是两条臂各自旋转，这一点决定了它不需要任何状态类。

三个层次各自动不同的东西。`.t-learn-chevron` 是 `display: inline-flex`，`transform: translateX(0)`，悬停时换成 `translateX(var(--learn-shift))`。`.t-learn-arm` 设了 `transform-box: view-box` 与 `transform-origin: 10px 8px`，把旋转轴心钉在两条线的交点 (10, 8)，所以旋转发生在折点上，不是元素中心；另外带 `vector-effect: non-scaling-stroke`，描边不随变换变粗。悬停时上臂 `rotate(var(--learn-spread))`，下臂 `rotate(calc(var(--learn-spread) * -1))`，一正一负，开口对称张开。

`transform-box: view-box` 这行是整套能不能成立的关键。缺省时 `transform-origin` 的长度值按元素自身的边界框解释，两条 path 的边界框很小，10px 8px 会落到图形外面，8deg 的旋转就会绕着一个远处的点画弧，两条线直接飞开。改成 `view-box` 之后，10px 8px 指的是 svg 坐标系里的那个点，也就是两条线的交点。

时长分进出两处：基础规则的 `transition` 用 `--learn-out`，悬停规则里用 `transition-duration: var(--learn-in)` 覆盖。两个值现在都是 350ms，所以进出等速；想做出“进快出慢”只改其中一个变量即可，不需要再加规则。缓动只有一个 `--learn-ease`。整段没有关键帧，也没有状态类，触发条件是 `:hover`。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--learn-shift` | `2px` | 箭头整体右移距离 |
| `--learn-spread` | `8deg` | 每条臂的旋转角度，下臂取相反数 |
| `--learn-in` | `350ms` | 悬停进入时长，覆盖在 `:hover` 规则里 |
| `--learn-out` | `350ms` | 悬停离开时长，写在基础规则里 |
| `--learn-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 容器与臂共用的缓动 |
| `.t-learn-chevron` | `translateX(0)` | 未悬停时的基准位移 |
| `.t-learn-chevron` | `display: inline-flex` | 让 svg 跟着文字基线排 |
| `.t-learn-arm` | `transform-origin: 10px 8px` | 旋转轴心，落在两条线的交点 |
| `.t-learn-arm` | `transform-box: view-box` | 让原点按 svg 坐标系解释 |
| `.t-learn-arm` | `vector-effect: non-scaling-stroke` | 旋转时描边宽度不变 |
| `.t-learn-arm-top` | `rotate(var(--learn-spread))` | 上臂顺时针张开 |
| `.t-learn-arm-bot` | `rotate(calc(var(--learn-spread) * -1))` | 下臂反向张开 |
| 两条 path 的 `d` | `M6 4L10 8` / `M10 8L6 12` | 两段折线，交点在 (10, 8) |
| svg `viewBox` | `0 0 16 16` | 坐标系，交点位于其中 |

## 怎么用

1. 画两条独立 path：上段 `M6 4L10 8`、下段 `M10 8L6 12`，交点就是轴心。不要用一条 path 画整只箭头，那样没东西可以分开转。
2. 两条 path 都挂 `.t-learn-arm`，再分别加 `.t-learn-arm-top` 与 `.t-learn-arm-bot`，轴心和描边设置由公共类负责。
3. 容器 `.t-learn-chevron` 默认 `translateX(0)`，`:hover` 时换成 `translateX(var(--learn-shift))`。位移写在容器上，不要写进每条臂。
4. 想改张开幅度只调 `--learn-spread`，下臂的负号在 `calc()` 里，会自动跟着反向。
5. reduced-motion 下容器与臂的 `transition` 都被设为 `none !important`，悬停时位移和旋转变成瞬时跳变，提示作用还在，只是没有过程。

## 什么时候别用

触屏设备没有稳定的悬停状态，这条动效在手指设备上不会发生，不能拿它当唯一的“可点”暗示，至少还要有下划线、颜色或按钮底色。箭头位移只有 2px，在密集的小字号列表里几乎看不出，需要更强指引时应该换成更明显的位移或色变。段落文字中间的行内链接也不适合：2px 的位移和 8deg 的张开在行文里会显得抖，改用下划线或颜色更稳。

## 注意

两条 path 必须在 (10, 8) 精确相接，差一点，张开时顶点就会裂开一道缝。`--learn-spread` 的值带 `deg`，`calc(var(--learn-spread) * -1)` 依赖它自带单位，把变量改成纯数字会让下臂的 `rotate()` 失效。箭头 span 上带 `aria-hidden="true"`，装饰不进可访问名称，按钮的可读文本仍然只有 "Learn more"。reduced-motion 只关过渡，不减角度，悬停时仍然会瞬间移动并张开。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Learn more hover */

/*
  Usage:
    <button class="t-learn">Learn more
      <span class="t-learn-chevron"><svg>
        <path class="t-learn-arm t-learn-arm-top" d="M6 4L10 8"/>
        <path class="t-learn-arm t-learn-arm-bot" d="M10 8L6 12"/>
      </svg></span>
    </button>

  On hover the chevron shifts right and its two arms rotate
  apart about the apex (10, 8) so the angle opens; hover-out
  returns. Pure CSS.
*/

:root {
  --learn-shift: 2px;
  --learn-spread: 8deg;
  --learn-in: 350ms;
  --learn-out: 350ms;
  --learn-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-learn-chevron {
  display: inline-flex;
  transform: translateX(0);
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn-arm {
  transform-box: view-box;
  transform-origin: 10px 8px;
  vector-effect: non-scaling-stroke;
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn:hover .t-learn-chevron { transform: translateX(var(--learn-shift)); transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm { transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm-top { transform: rotate(var(--learn-spread)); }
.t-learn:hover .t-learn-arm-bot { transform: rotate(calc(var(--learn-spread) * -1)); }

@media (prefers-reduced-motion: reduce) {
  .t-learn-chevron, .t-learn-arm { transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Learn more hover (React, self-contained)
// Drop into any React project — no extra CSS file needed.

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --learn-shift: 2px;
  --learn-spread: 8deg;
  --learn-in: 350ms;
  --learn-out: 350ms;
  --learn-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-learn-chevron {
  display: inline-flex;
  transform: translateX(0);
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn-arm {
  transform-box: view-box;
  transform-origin: 10px 8px;
  vector-effect: non-scaling-stroke;
  transition: transform var(--learn-out) var(--learn-ease);
}
.t-learn:hover .t-learn-chevron { transform: translateX(var(--learn-shift)); transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm { transition-duration: var(--learn-in); }
.t-learn:hover .t-learn-arm-top { transform: rotate(var(--learn-spread)); }
.t-learn:hover .t-learn-arm-bot { transform: rotate(calc(var(--learn-spread) * -1)); }

@media (prefers-reduced-motion: reduce) {
  .t-learn-chevron, .t-learn-arm { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p24")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p24";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Pure CSS — the hover shifts the
// chevron right and rotates its two arms apart about the apex; no JS.
export function LearnMore() {
  return (
    <button type="button" className="t-learn">
      Learn more
      <span className="t-learn-chevron" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path className="t-learn-arm t-learn-arm-top" d="M6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path className="t-learn-arm t-learn-arm-bot" d="M10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
```
