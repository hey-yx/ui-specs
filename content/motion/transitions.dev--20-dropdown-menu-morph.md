---
title: "组件动效 · 下拉菜单形变（Dropdown menu morph）"
source: https://transitions.dev/transitions/dropdown-menu-morph/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-20-dropdown-menu-morph
publisher: "Transitions.dev"
---

# 组件动效 · 下拉菜单形变（Dropdown menu morph）

> 来源：[Transitions.dev](https://transitions.dev/transitions/dropdown-menu-morph/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/dropdown-menu-morph/index.html`。

## 它解决什么

一个圆形的加号按钮点开之后要展示一组菜单项。如果菜单另起一个浮层从按钮边上弹出来，用户看到的是两个不相干的东西，视线要重新找。这里让按钮所在的容器自己长大成面板，圆角从 40px 收到 20px，加号边淡出边转成叉，菜单从右侧滑入，同一个表面在不同状态之间变形，位置关系不会断。

## 动效怎么构成

容器 `.t-morph` 是 `position: relative` 加 `overflow: hidden` 的盒子，横纵各 40px，圆角 `--morph-r-closed`，基础规则里只声明关闭时钟（`--morph-close-dur` 配 `--morph-close-ease`）。`data-open="true"` 时宽高换成 183px 与 172px、圆角换成 `--morph-r-open`，过渡同时换成打开时钟（`--morph-open-dur` 配 `--morph-ease`）。动的是 `width`、`height`、`border-radius` 三个布局属性，不是 `transform`，所以面板边缘始终是真实的盒子边缘，里面的文字不会被拉宽压扁。

容器里叠着两层。`.t-morph-plus` 是那个按钮，绝对定位 `inset: auto 0 0 auto`，尺寸固定，`display: grid` 配 `place-items: center` 居中图标，`border: 0`、`background: transparent`、`cursor: pointer`。打开时它 `opacity: 0`、`transform: translateX(calc(-1 * var(--morph-slide)))`、`filter: blur(var(--morph-blur))`、`pointer-events: none`，内部的 svg 另外做 `scale(var(--morph-scale)) rotate(var(--morph-rotate))`，45deg 的旋转把加号转成叉。

`.t-morph-menu` 绝对定位 `inset: 0`，关闭态是 `opacity: 0`、`translateX(var(--morph-slide)) scale(var(--morph-scale))`、模糊 2px、`pointer-events: none`；打开时回到 `translateX(0) scale(1)`、`blur(0)` 并接回指针事件。两个子层的位移方向相反，一进一出，交叉的瞬间有连续的错觉。

想让面板从一个固定的角长出来，就把整个形变包进一个相对定位的锚点里，锚点尺寸按打开后的占地给足，容器贴角对齐；否则容器以自身左上角为基准长大，视觉上的生长方向会跟按钮位置脱节。

两套时长故意不对称：打开 350ms 配带过冲的 `cubic-bezier(0.34, 1.25, 0.64, 1)`，关闭 250ms 配更收敛的 `cubic-bezier(0.22, 1, 0.36, 1)`，所以弹开有劲、收回利落。透明度与模糊用 `--morph-fade-dur`，比尺寸变化更快结束。状态标记分布在三处：容器的 `data-open`、按钮的 `aria-expanded`、菜单的 `role="menu"`。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--morph-open-dur` | `350ms` | 打开时宽高与圆角的时长 |
| `--morph-close-dur` | `250ms` | 关闭时宽高与圆角的时长 |
| `--morph-ease` | `cubic-bezier(0.34, 1.25, 0.64, 1)` | 打开缓动，带过冲 |
| `--morph-close-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 关闭缓动 |
| `--morph-r-closed` | `40px` | 关闭态圆角，等于按钮边长，得到圆形 |
| `--morph-r-open` | `20px` | 打开态圆角 |
| `--morph-fade-dur` | `200ms` | 透明度与模糊的时长 |
| `--morph-slide` | `40px` | 菜单滑入距离，加号反向滑出同值 |
| `--morph-rotate` | `45deg` | 加号 svg 旋转角度，转成叉 |
| `--morph-scale` | `0.97` | 两个子层起止缩放 |
| `--morph-blur` | `2px` | 两个子层起止模糊半径 |
| `.t-morph` | `40px` × `40px` | 关闭态容器尺寸 |
| `.t-morph[data-open="true"]` | `183px` × `172px` | 打开态容器尺寸，同时是菜单的可视区域 |
| `.t-morph-plus` | `inset: auto 0 0 auto` | 按钮贴在容器右下角 |
| `.t-morph-plus` | `pointer-events: none`（打开态） | 打开后按钮不再接收点击 |

## 怎么用

1. 先摆结构：容器 `.t-morph` 带 `data-open="false"`，里面先放 `.t-morph-menu`（带 `role="menu"`），再放 `button.t-morph-plus`，按钮上写 `aria-expanded="false"`。
2. 点击按钮时同时切两处状态：容器的 `data-open` 与按钮的 `aria-expanded`，两个值永远同进同出。
3. 尺寸、圆角、淡入淡出全在 CSS 里，JS 不测量任何高度。容器本身就是打开后的占地尺寸，最终位置由父级定位决定。
4. 关闭逻辑挂在文档层：点击容器外部或按 Escape 关。打开态按钮被设了 `pointer-events: none`，关闭动作不会从按钮上触发。
5. reduced-motion 下容器、按钮、菜单三者的 `transition` 全部清空，尺寸与透明度瞬时切换，开关功能不受影响。

## 什么时候别用

打开尺寸写死为 183px 与 172px，菜单项数量一变就会露出空白或裁掉内容，动态菜单、多语言文案不适合直接套。菜单需要滚动、需要二级子菜单，或者要贴视口边缘翻转换向时也不适用，那些场景用带定位计算的浮层更稳。

## 注意

`width` 与 `height` 的过渡每帧都触发布局，容器里内容多时会掉帧，这是换成 `transform: scale()` 能省掉但会拉糊文字的部分。`overflow: hidden` 保证形变过程不漏内容，也意味着超出打开尺寸的部分会被切掉。片段给了 `role="menu"`，但没有方向键导航、没有把焦点移进菜单、关闭后也没有归还焦点，这三件要自己补，否则键盘用户只能在按钮上做开合。`filter: blur()` 作用于整层文字，模糊峰值是 `--morph-blur`，小字号在中间帧会看不清。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Plus to menu morph */

/*
  Usage:
    <div class="t-morph" data-open="false">
      <div class="t-morph-menu"> … menu items … </div>
      <button class="t-morph-plus" aria-expanded="false">+</button>
    </div>

  Toggle `data-open` on the container (and `aria-expanded`
  on the button). CSS animates the surface size + corner
  radius and cross-fades the plus ↔ menu. Wrap the morph in
  a relatively-positioned anchor sized to the OPEN footprint
  if you want it to grow out of a fixed corner.
*/

:root {
  --morph-open-dur: 350ms;
  --morph-close-dur: 250ms;
  --morph-ease: cubic-bezier(0.34, 1.25, 0.64, 1);
  --morph-close-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --morph-r-closed: 40px;
  --morph-r-open: 20px;
  --morph-fade-dur: 200ms;
  --morph-slide: 40px;
  --morph-rotate: 45deg;
  --morph-scale: 0.97;
  --morph-blur: 2px;
}

/* Closed: a small circular button. Open: a rounded panel.
   Width/height/border-radius animate; the open state uses a
   bouncier ease than the close. */
.t-morph {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--morph-r-closed);
  overflow: hidden;
  transition:
    width var(--morph-close-dur) var(--morph-close-ease),
    height var(--morph-close-dur) var(--morph-close-ease),
    border-radius var(--morph-close-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] {
  width: 183px;
  height: 172px;
  border-radius: var(--morph-r-open);
  transition:
    width var(--morph-open-dur) var(--morph-ease),
    height var(--morph-open-dur) var(--morph-ease),
    border-radius var(--morph-open-dur) var(--morph-ease);
}
/* Plus fades + slides out and the icon rotates into an ×. */
.t-morph-plus {
  position: absolute;
  inset: auto 0 0 auto;
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border: 0; background: transparent; cursor: pointer;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph-plus svg {
  transition: transform var(--morph-open-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-plus {
  opacity: 0;
  transform: translateX(calc(-1 * var(--morph-slide)));
  filter: blur(var(--morph-blur));
  pointer-events: none;
}
.t-morph[data-open="true"] .t-morph-plus svg {
  transform: scale(var(--morph-scale)) rotate(var(--morph-rotate));
}
/* Menu starts slid in + scaled + blurred; reveals on open. */
.t-morph-menu {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(var(--morph-slide)) scale(var(--morph-scale));
  filter: blur(var(--morph-blur));
  pointer-events: none;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-menu {
  opacity: 1;
  transform: translateX(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .t-morph, .t-morph-plus, .t-morph-menu { transition: none !important; }
}
```

### React

```jsx
// Transitions.dev — Plus to menu morph (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useEffect, useRef, useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --morph-open-dur: 350ms;
  --morph-close-dur: 250ms;
  --morph-ease: cubic-bezier(0.34, 1.25, 0.64, 1);
  --morph-close-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --morph-r-closed: 40px;
  --morph-r-open: 20px;
  --morph-fade-dur: 200ms;
  --morph-slide: 40px;
  --morph-rotate: 45deg;
  --morph-scale: 0.97;
  --morph-blur: 2px;
}

/* Closed: a small circular button. Open: a rounded panel.
   Width/height/border-radius animate; the open state uses a
   bouncier ease than the close. */
.t-morph {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--morph-r-closed);
  overflow: hidden;
  transition:
    width var(--morph-close-dur) var(--morph-close-ease),
    height var(--morph-close-dur) var(--morph-close-ease),
    border-radius var(--morph-close-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] {
  width: 183px;
  height: 172px;
  border-radius: var(--morph-r-open);
  transition:
    width var(--morph-open-dur) var(--morph-ease),
    height var(--morph-open-dur) var(--morph-ease),
    border-radius var(--morph-open-dur) var(--morph-ease);
}
/* Plus fades + slides out and the icon rotates into an ×. */
.t-morph-plus {
  position: absolute;
  inset: auto 0 0 auto;
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border: 0; background: transparent; cursor: pointer;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph-plus svg {
  transition: transform var(--morph-open-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-plus {
  opacity: 0;
  transform: translateX(calc(-1 * var(--morph-slide)));
  filter: blur(var(--morph-blur));
  pointer-events: none;
}
.t-morph[data-open="true"] .t-morph-plus svg {
  transform: scale(var(--morph-scale)) rotate(var(--morph-rotate));
}
/* Menu starts slid in + scaled + blurred; reveals on open. */
.t-morph-menu {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(var(--morph-slide)) scale(var(--morph-scale));
  filter: blur(var(--morph-blur));
  pointer-events: none;
  transition:
    opacity var(--morph-fade-dur) var(--morph-close-ease),
    transform var(--morph-open-dur) var(--morph-close-ease),
    filter var(--morph-fade-dur) var(--morph-close-ease);
}
.t-morph[data-open="true"] .t-morph-menu {
  opacity: 1;
  transform: translateX(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .t-morph, .t-morph-plus, .t-morph-menu { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p20")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p20";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// `data-open` drives the whole morph; CSS handles the size + radius
// animation and the plus ↔ menu cross-fade. Outside click / Escape
// close the menu.
export function PlusMenu({ children }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("click", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="t-morph" data-open={open ? "true" : "false"}>
      <div className="t-morph-menu" role="menu">{children}</div>
      <button
        type="button"
        className="t-morph-plus"
        aria-expanded={open ? "true" : "false"}
        aria-label="Open menu"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
```
