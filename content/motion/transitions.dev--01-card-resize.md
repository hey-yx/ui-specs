---
title: "组件动效 · 卡片尺寸变化（Card resize）"
source: https://transitions.dev/transitions/card-resize/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-01-card-resize
publisher: "Transitions.dev"
---

# 组件动效 · 卡片尺寸变化（Card resize）

> 来源：[Transitions.dev](https://transitions.dev/transitions/card-resize/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/01-card-resize.md`。

## 它解决什么

卡片的布局状态在紧凑与展开之间切换时，容器宽度或高度如果直接跳到新值，边界会硬切一下，眼睛先注意到的是「框动了一下」，而不是里面的内容变了。`.t-resize` 把这次尺寸变化补间成一段连续的生长过程，让人看清是哪一块变大了。适合紧凑与展开卡片、可折叠面板、列表行展开额外详情这类场景：这类尺寸变化通常由一次点击触发，中间没有任何过渡帧，跳变会让上下文断成两截。

## 动效怎么构成

动的是元素自己的 width 和 height，盒模型尺寸本身在变，这一层没有 transform 也没有 opacity。

`.t-resize` 只声明两件事：一条 transition，前半段跟踪 width，后半段跟踪 height，两段共用同一个时长变量和同一个缓动变量；以及 `will-change: width, height;`，把这两个属性提前标出来。

缓动 `cubic-bezier(0.22, 1, 0.36, 1)` 的特性是起步快、收尾慢，尺寸在前段迅速接近目标，尾段慢慢贴住，读起来像被拉开而不是被弹开。

尺寸由谁改不影响效果。原文给了两条路：直接在元素上改 width 与 height，或者挂一个状态类（示例是 `.is-small`），过渡都会在两个尺寸之间补间。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--resize-dur` | `300ms` | width 与 height 补间的时长，取自 `--p4-dur` |
| `--resize-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 两段过渡共用的缓动，取自 `--p4-ease` |
| `.t-resize` | 无 | 承载 transition 的类，挂在尺寸会变的容器上 |
| `.is-small` | 无 | 原文举例的状态类，用来切出另一种尺寸 |

`--resize-dur` 和 `--resize-ease` 不是写死的字面量，它们分别指向语义化变量 `--p4-dur` 与 `--p4-ease`。原文的 `:root` 默认值来自 transitions.dev 上的实际调参，放进全局样式表一次就够，同一份 `:root` 块可以被多套动效共用。

## 怎么用

- 把 `--resize-dur: 300ms;` 和 `--resize-ease: cubic-bezier(0.22, 1, 0.36, 1);` 写进全局样式表的 `:root`。
- 给尺寸会变的那个容器加 `.t-resize`。这个类不负责初始尺寸，它只加过渡和 `will-change`，尺寸本身仍由你的布局或状态决定。
- 用应用里已有的状态切换改尺寸：改 width 与 height 的内联值，或者加一个 `.is-small` 之类的类。
- 保留末尾的 `@media (prefers-reduced-motion: reduce)` 守卫，它把 transition 清零，照顾在系统设置里选了减少动效的用户。

整个动效没有 JavaScript 参与。状态从哪来、由哪个事件触发，原文没有规定，交给已经驱动尺寸变化的那段逻辑。这也是它比用脚本量尺寸再补间的方案更省事的地方：不需要测量，不需要在切换前记录旧的边界，类一加上过渡自己跑。

## 什么时候别用

一次让几十个列表行同时改高度，或者尺寸变化会带动大片兄弟元素重排时，逐帧补间 width 和 height 会持续触发布局计算，低配设备上容易掉帧。这种场合换成只动 transform 与 opacity 的做法，或者干脆不做补间，直接给最终尺寸。只展开一两行文字时也不必上补间，尺寸差太小，过渡几乎看不出来。

## 注意

reduced-motion 守卫是这段 CSS 的一部分，原文明确要求保留，删掉之后系统级关闭动效的用户仍然会看到尺寸补间。`will-change: width, height;` 是逐元素生效的提示，不要给一大片元素无差别挂上 `.t-resize`。这里没有 aria 或焦点相关的处理，因为动的是容器盒子，不涉及内容替换，原文也未给出额外属性。

还有一条实现前提：width 与 height 必须是可插值的长度值。从 `auto` 到 `auto` 之间没有过渡，两端的尺寸都得是明确的数值或由状态类给出的确定值，否则补间会退化成瞬间跳变。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --resize-dur: 300ms;
  --resize-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
