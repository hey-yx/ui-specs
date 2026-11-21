---
title: "组件动效 · 头像组悬停（Avatar group hover）"
source: https://transitions.dev/transitions/avatar-group-hover/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-11-avatar-group-hover
publisher: "Transitions.dev"
---

# 组件动效 · 头像组悬停（Avatar group hover）

> 来源：[Transitions.dev](https://transitions.dev/transitions/avatar-group-hover/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/11-avatar-group-hover.md`。

## 它解决什么

一行横向排列的元素，头像行、chip 组、徽章簇、分段按钮，鼠标停在某一项上时，被指的那项抬起并轻微放大，相邻项按距离递减地跟着抬起，整行像一个被拨动的梳子。移出时全部带一点过冲回到原位。它解决的是"这是一组东西，但我现在指的是其中一个"这个感知问题，靠一次局部的连带位移交代组内关系。

## 动效怎么构成

结构只有两层：`.t-avatar-group` 是容器，不负责布局；每一项是 `.t-avatar`，尺寸、形状、堆叠、背景都由你自己给，这套样式只拥有 hover 的位移和过渡。

`.t-avatar` 上是一条 `transform`，两个函数按顺序串起来：

`transform: translateY(var(--shift, 0px)) scale(var(--scale-active, 1))`

顺序是 `translateY` 在前、`scale` 在后，原文的注释说明了原因：反过来的话，缩放会把位移量一起放大。`transform-origin` 是 `center`。基础规则里只声明 `transition: transform var(--avatar-dur) var(--avatar-ease-in)`，一个属性，一条过渡。

真正的数值由脚本写成内联变量：`--shift` 按 `lift * falloff^distance` 算，距离是被指项和当前项的下标差，结果用 `toFixed(3)` 拼上 `px`；`--scale-active` 只有被指的那项取 `--avatar-scale`，其余给 `1`。位移按距离衰减，形成的是一条以指针为中心的斜线：被指项抬满一倍，相邻项按 0.45 递减，再往两侧几乎不动。这条斜线就是整组"被拨了一下"的来源。

鼠标离开整组时，`--shift` 回到 `0px`，`--scale-active` 回到 `1`，全部归位。

方向感知的缓动是这个动效的核心技巧：每次改变量之前，先把 `el.style.transitionTimingFunction` 写成一个内联值，hover 进入时用 `--avatar-ease-in`，mouseleave 时用 `--avatar-ease-out`。浏览器在属性变化的那一刻读取当前生效的 timing function，于是同一条 `transition` 声明在上去时走出干净的曲线，回来时带过冲，不需要再加一个 `.is-leaving` 类。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--avatar-lift` | `-4px` | 被指项的 Y 位移，负值是向上 |
| `--avatar-dur` | `320ms` | `transform` 过渡时长 |
| `--avatar-scale` | `1.05` | 被指项的缩放，相邻项保持 1 |
| `--avatar-falloff` | `0.45` | 每远一格，位移按这个系数衰减 |
| `--avatar-ease-in` | `cubic-bezier(0.22, 1, 0.36, 1)` | hover 进入时的缓动 |
| `--avatar-ease-out` | `cubic-bezier(0.34, 3.85, 0.64, 1)` | 归位时的缓动，控制点远超 1，所以弹得厉害 |

## 怎么用

1. 六个变量进 `:root`。脚本会从 `getComputedStyle(document.documentElement)` 读回它们，所以写在 `:root` 上才被读到。
2. 容器加 `.t-avatar-group`，组内每一项包一层 `.t-avatar`。
3. 给每一项绑 `mouseenter`，处理函数里遍历所有兄弟项，先写 `transitionTimingFunction`（`--avatar-ease-in`），再写 `--shift` 和 `--scale-active`。
4. 在容器上绑 `mouseleave`，同样先写 `transitionTimingFunction`（`--avatar-ease-out`），再把 `--shift` 设成 `0px`、`--scale-active` 设成 `1`。
5. 保留 `prefers-reduced-motion: reduce` 分支，它不但清过渡，还把 `transform` 强制归零，等于关掉整个位移反馈。

## 什么时候别用

竖向列表、表格行不要用，横向的连带位移在纵向排列上读不出"一行"的语义。触摸设备没有 hover 进入的时机，这套绑的是 `mouseenter` 和 `mouseleave`，移动端要么退化成一个静态的放大态，要么不用。项数很多时也要谨慎，`--avatar-falloff` 的衰减会让尾部几乎不动，连带感消失，不如只抬起被指项。

## 注意

- 事件只绑了鼠标。键盘用户用 Tab 焦点移动时没有任何反馈，需要自己补 `focus-visible` 的处理，而且这次位移只写在 `transform` 上，加 `:focus` 不会自动生效。
- 内联 timing function 必须在变量写入之前设置，顺序反了，新过渡就会用上一次的曲线，上去和回来会变成同一条。
- reduced-motion 里除了清过渡还写了 `transform: none !important`，位移完全消失，此时要保证 hover 还有别的可见反馈，比如你自己的背景或边框样式。
- `--shift` 是脚本算出来的 px 数值，CSS 里只给了 `0px` 的兜底。没跑脚本时元素停在原位，不会错位。
- 相邻项的抬起量来自下标差，组内插入、删除元素后要重新取一次项列表，缓存了旧的 `NodeList` 会让位移落到错误的项上。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --avatar-lift: -4px;
  --avatar-dur: 320ms;
  --avatar-scale: 1.05;
  --avatar-falloff: 0.45;
  --avatar-ease-in: cubic-bezier(0.22, 1, 0.36, 1);
  --avatar-ease-out: cubic-bezier(0.34, 3.85, 0.64, 1);
}
```

### React

```jsx
import { useRef } from "react";

// `items` is any list of React nodes (avatars, chips, badges, …)
// — this hook only owns the hover-spring transition. Each item is
// wrapped in a .t-avatar so it picks up the transform/transition
// rules from CSS.
export function AvatarGroup({ items }) {
  const rootRef = useRef(null);

  const setShifts = (activeIdx, phase) => {
    if (!rootRef.current) return;
    const cs = getComputedStyle(document.documentElement);
    const num = (name, fb) => {
      const v = parseFloat(cs.getPropertyValue(name));
      return Number.isFinite(v) ? v : fb;
    };
    const ease = (name, fb) =>
      cs.getPropertyValue(name).trim() || fb;

    const lift    = num("--avatar-lift", -4);
    const falloff = num("--avatar-falloff", 0.45);
    const scale   = num("--avatar-scale", 1.05);
    const tf      = phase === "out"
      ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
      : ease("--avatar-ease-in",  "cubic-bezier(0.22, 1, 0.36, 1)");

    rootRef.current.querySelectorAll(".t-avatar").forEach((el, i) => {
      el.style.transitionTimingFunction = tf;
      if (activeIdx == null) {
        el.style.setProperty("--shift", "0px");
        el.style.setProperty("--scale-active", "1");
        return;
      }
      const d = Math.abs(i - activeIdx);
      el.style.setProperty(
        "--shift",
        (lift * Math.pow(falloff, d)).toFixed(3) + "px"
      );
      el.style.setProperty(
        "--scale-active",
        i === activeIdx ? String(scale) : "1"
      );
    });
  };

  return (
    <div ref={rootRef} onMouseLeave={() => setShifts(null, "out")}>
      {items.map((node, i) => (
        <div
          key={i}
          className="t-avatar"
          onMouseEnter={() => setShifts(i, "in")}
        >
          {node}
        </div>
      ))}
    </div>
  );
}
```
