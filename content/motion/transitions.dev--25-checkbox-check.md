---
title: "组件动效 · 复选框勾选（Checkbox check）"
source: https://transitions.dev/transitions/checkbox-check/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-25-checkbox-check
publisher: "Transitions.dev"
---

# 组件动效 · 复选框勾选（Checkbox check）

> 来源：[Transitions.dev](https://transitions.dev/transitions/checkbox-check/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/checkbox-check/index.html`。

## 它解决什么

复选框从「未选」变「已选」时，如果底色和勾同时瞬间出现，用户只看到一个结果，看不到变化的方向。这个动效把两件事拆开：底盒先填色，勾再沿着路径描出来。整个过程的重点不是好看，而是让眼睛跟得上「刚被勾上」这个动作，不必事后去确认状态。

两层时间差是刻意的：`150ms` 的填色结束时，`350ms` 的描边才走到一半。先看到块面亮起来，再看到线条成形，两个信号叠在一起但不互相淹没。反选不等长，只花 `150ms`，因为「取消」不需要仪式感，快一点才跟手。

## 动效怎么构成

一个真正的 `<button class="t-check" role="checkbox" aria-checked="false">`，里面放 `viewBox="0 0 10.1668 10.1668"` 的 `<svg>`，再放一条 `d="M1 5.52L3.92 9.17L9.17 1"` 的 `<path>`。状态只有 `aria-checked` 这一个开关，没有额外的 class 要同步。

动的是两层，各自走自己的时长：

- 底盒：`.t-check` 上的 `background` 与 `box-shadow`，时长 `--check-box`。
- 勾：`.t-check svg path` 的 `stroke-dashoffset`。`stroke-dasharray` 和 `stroke-dashoffset` 都取 `var(--check-len, 15)`，也就是整条路径的长度。未选中时偏移量等于全长，勾完全藏在路径起点之外；选中时偏移归零，勾从起点画到终点。

`--check-len` 不是写死的常量，要在挂载后用 path 的 `getTotalLength()` 量出来（原实现写入 `Math.ceil(len) + 1`）再设到元素上。写死会画过头或者画不到头。

dasharray 与 dashoffset 取同一个值，是因为这一段虚线的长度正好等于整条路径：偏移为全长时，可见的那段虚线整个被推出路径之外，勾就不可见；偏移回到 0，虚线从起点铺回终点，看起来就是一支笔在走。两个属性必须同步，只改一个会出现半截线或者虚线圈。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--check-box` | 150ms | 底盒 background 与 box-shadow 的过渡时长 |
| `--check-draw` | 350ms | 勾描边的时长，比填色长一档 |
| `--check-delay` | 0ms | 描边在填色之后的延迟，默认不留间隔 |
| `--check-uncheck` | 150ms | 反选时偏移回退的时长 |
| `--check-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 四条过渡共用的缓动，起步快收尾慢 |
| `--check-len` | 15 | 路径总长的缺省值，同时充当 dasharray 与 dashoffset，实际值由脚本量出 |
| `[aria-checked="true"]` | 选择器 | 唯一的状态钩子，切到 true 就走描边那条规则 |

## 怎么用

1. 在 `:root` 里放前五个 token，`--check-len` 留给脚本写。
2. 按钮上写 `role="checkbox"`，可访问状态只写 `aria-checked="true"` 或 `"false"`。
3. path 挂载后量长度，用 `setProperty` 把 `--check-len` 写到按钮元素上。
4. 点击只反转 `aria-checked`；描边规则由 `[aria-checked="true"]` 选中，不需要再加 class。
5. `prefers-reduced-motion: reduce` 下过渡被 `none !important` 停掉，状态照样切，只是瞬时到位。

## 什么时候别用

一次点击要连续改一批复选框（全选、批量标记）时，几十条勾同时描边会显得吵，直接切状态更干净。表格里密集的勾选列也不适合，小尺寸图标看不出路径感，350ms 只留下延迟。如果这个勾只是表单里的一行普通选项、用户点完立刻往下走，描边同样是浪费，把 `--check-draw` 压到和 `--check-box` 同级就够。

## 注意

- 状态必须落在 `aria-checked` 上，不要另造一个 `.is-checked` class：选到描边规则的选择器就是它，辅助技术读的也是它。
- 中途取消是安全的，因为 `stroke-dashoffset` 本身在过渡：反选会用 `--check-uncheck` 从当前位置退回去，不会跳回满长再重来。
- 这段 CSS 里没有 `stroke` 颜色，勾的颜色由页面自己给，改 token 不会改颜色。
- `getTotalLength()` 依赖已经渲染的 DOM，服务端渲染阶段量不到，只能在挂载后写 `--check-len`，写之前用缺省值 15 兜着。
- 这段动画只碰 `stroke-dashoffset`，粗细和端点在 SVG 上给（原实现是 `strokeWidth="2"` 配圆头的 `linecap`、`linejoin`）。改 CSS 时不要顺手加 `stroke` 简写，它会把这几项一起覆盖掉。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Checkbox check */

/*
  Usage:
    <button class="t-check" role="checkbox" aria-checked="false">
      <svg viewBox="0 0 10.1668 10.1668">
        <path d="M1 5.52L3.92 9.17L9.17 1"/>
      </svg>
    </button>

  Toggle `aria-checked`. The box fills, then the check stroke
  draws in via stroke-dashoffset. Set --check-len to the path's
  getTotalLength() (rounded up) so it never over/under-draws;
  transitioning offset lets a mid-draw uncheck reverse cleanly.
*/

:root {
  --check-box: 150ms;
  --check-draw: 350ms;
  --check-delay: 0ms;
  --check-uncheck: 150ms;
  --check-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-check {
  transition:
    background var(--check-box) var(--check-ease),
    box-shadow var(--check-box) var(--check-ease);
}
.t-check svg path {
  stroke-dasharray: var(--check-len, 15);
  stroke-dashoffset: var(--check-len, 15);
  transition: stroke-dashoffset var(--check-uncheck) var(--check-ease);
}
.t-check[aria-checked="true"] svg path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset var(--check-draw) var(--check-ease) var(--check-delay);
}

@media (prefers-reduced-motion: reduce) {
  .t-check, .t-check svg path { transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Checkbox check (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --check-box: 150ms;
  --check-draw: 350ms;
  --check-delay: 0ms;
  --check-uncheck: 150ms;
  --check-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-check {
  transition:
    background var(--check-box) var(--check-ease),
    box-shadow var(--check-box) var(--check-ease);
}
.t-check svg path {
  stroke-dasharray: var(--check-len, 15);
  stroke-dashoffset: var(--check-len, 15);
  transition: stroke-dashoffset var(--check-uncheck) var(--check-ease);
}
.t-check[aria-checked="true"] svg path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset var(--check-draw) var(--check-ease) var(--check-delay);
}

@media (prefers-reduced-motion: reduce) {
  .t-check, .t-check svg path { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p25")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p25";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Toggle `aria-checked`; the box fills
// then the check stroke-draws. Measure the path length into --check-len on
// mount so the dasharray/dashoffset pair never over/under-draws.
export function Checkbox({ label }) {
  const [checked, setChecked] = useState(false);
  const boxRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const len = pathRef.current.getTotalLength();
    boxRef.current.style.setProperty("--check-len", String(Math.ceil(len) + 1));
  }, []);

  return (
    <label className="t-field" onClick={() => setChecked((v) => !v)}>
      <button ref={boxRef} type="button" className="t-check" role="checkbox" aria-checked={checked}>
        <svg width="10" height="10" viewBox="0 0 10.1668 10.1668" fill="none">
          <path ref={pathRef} d="M1 5.52L3.92 9.17L9.17 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {label}
    </label>
  );
}
```
