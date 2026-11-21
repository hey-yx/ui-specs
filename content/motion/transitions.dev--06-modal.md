---
title: "组件动效 · 弹窗开合（Modal open / close）"
source: https://transitions.dev/transitions/modal/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-06-modal
publisher: "Transitions.dev"
---

# 组件动效 · 弹窗开合（Modal open / close）

> 来源：[Transitions.dev](https://transitions.dev/transitions/modal/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/06-modal.md`。

## 它解决什么

对话框、全屏覆盖层在概念上是盖在页面之上的一层，不挂在某个触发器旁边。如果它硬切出现，用户会失去「它从中间升起来、页面还在下面」这个空间关系。这个动效让面板从中心按 0.96 放大到 1，配合同步的透明度变化，一次短促的升起，不需要任何位移动画。用户看到的是「有一层东西被放上来了」，而不是「某个东西从某处飞过来」。

## 动效怎么构成

一个元素 `.t-modal`，原文的 HTML 上带 `role="dialog"`。`transform-origin: center`，所以缩放从正中心向外长。

静止态：`transform: scale(var(--modal-scale))` 也就是 0.96，`opacity: 0`，`pointer-events: none`，过渡走 `--modal-open-dur` 的 250ms。

`.is-open`：`transform: scale(1)`、`opacity: 1`、`pointer-events: auto`。

`.is-closing`：`transform: scale(var(--modal-scale-close))`，同样是 0.96，`opacity: 0`、`pointer-events: none`，transition 换成关闭用的 150ms。

打开前的 0.96 和关闭时的 0.96 数值相同，但它们是两个变量（`--modal-scale` 与 `--modal-scale-close`），可以分别调，改一个不影响另一个。动到的属性只有 transform 与 opacity，两样都能交给合成器处理，DOM 结构不参与动画，里面有多少内容都不影响这段过渡的开销。

三个状态共用同一条缓动，打开 250ms，关闭 150ms。关闭比打开快，原文把两个时长做成了独立变量。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--modal-open-dur` | `250ms` | 打开时缩放与淡入的时长，取自 `--p7-open-dur` |
| `--modal-close-dur` | `150ms` | 关闭时缩放与淡出的时长，取自 `--p7-close-dur` |
| `--modal-scale` | `0.96` | 打开前的起始缩放，上升到 1，取自 `--p7-scale` |
| `--modal-scale-close` | `0.96` | 关闭时收缩到的缩放值，取自 `--p7-scale-close` |
| `--modal-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 打开与关闭共用的缓动，取自 `--p7-ease` |
| `.is-open` | 无 | 打开态，scale 到 1、opacity 到 1 |
| `.is-closing` | 无 | 关闭过程态，150ms 收缩淡出 |
| `role="dialog"` | 无 | 原文 HTML 上给出的角色标记 |

0.96 是很小的缩放差，长宽各只缩一点。这样做的效果是面板看起来「贴上来」而不是「弹出来」，注意力不会被尺寸变化抢走。配套的透明度从 0 到 1 承担了大部分「出现」的感知，缩放只负责给一点纵深。

## 怎么用

- 把五个变量写进全局样式表的 `:root`，弹窗和下拉可以共用同一个块，变量名互不冲突。
- 给对话框根节点加 `.t-modal`，并按原文写上 `role="dialog"`。
- 打开：先删 `.is-closing`，再加 `.is-open`，顺序与下拉菜单一致，避免带着上一次关闭的过渡进入打开态。
- 关闭：删 `.is-open`，加 `.is-closing`，等 `--modal-close-dur` 之后移除 `.is-closing`。原文脚本同样用 `getComputedStyle` 读变量，兜底 150。
- 保留 reduced-motion 守卫，它只把 `.t-modal` 的 transition 清零。

## 什么时候别用

从某个按钮旁边展开的小面板不要用中心缩放，那类浮层要表达「从触发器长出来」，走 `data-origin` 的方案更合适。整页替换式的跳转、路由切换也不该用这套，页面级过渡需要的是另一套时间与层级处理，中心缩放会让整页看起来在抖。需要在弹窗里再套一层带自己动效的内容时也要小心，两层缩放叠加会让初始尺寸明显偏小。动手之前还要先定清层级与遮罩由谁负责，这段动效只管面板本身。

## 注意

`role="dialog"` 只是原文给出的标记，焦点捕获、Esc 关闭、打开时把焦点移进面板、关闭后把焦点还给触发元素，这些都不在这个动效的范围内，需要自己补。`.is-closing` 依赖脚本的 `setTimeout` 清理，150ms 之后必须移除，否则下一次打开会先播一遍关闭。关闭过程中的 `pointer-events: none` 让面板立刻不可点，遮罩层要另外处理，原文的 CSS 里没有遮罩规则。reduced-motion 守卫清掉过渡之后，`.is-open` 的 `pointer-events: auto` 仍然生效，开合本身照常工作。`transform-origin: center` 是固定的，全宽弹窗在第一帧左右两侧会各留出一条空隙，版式要能接受这个短暂的内缩。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --modal-open-dur: 250ms;
  --modal-close-dur: 150ms;
  --modal-scale: 0.96;
  --modal-scale-close: 0.96;
  --modal-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
