---
title: "组件动效 · 菜单下拉（Menu dropdown）"
source: https://transitions.dev/transitions/menu-dropdown/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-05-menu-dropdown
publisher: "Transitions.dev"
---

# 组件动效 · 菜单下拉（Menu dropdown）

> 来源：[Transitions.dev](https://transitions.dev/transitions/menu-dropdown/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/05-menu-dropdown.md`。

## 它解决什么

从触发器弹出的菜单、下拉、popover，如果只是原地淡入，视觉上跟触发器的关系是断的：面板出现了，但它和按钮之间没有线索。这个动效让面板从触发器那一侧长出来，默认 `transform-origin: top left`，换 `data-origin` 就换生长方向。它解决的是「这个面板是从哪儿冒出来的」这一层定位感知：面板和触发器在同一侧共享一个角，缩放时那一点固定不动，其余部分向它收拢或张开。

## 动效怎么构成

只有一个元素 `.t-dropdown`，动的是 transform 的 scale 和 opacity 两样。

静止态：`transform: scale(var(--dropdown-pre-scale))` 也就是 0.97，`opacity: 0`，`pointer-events: none`，配合 `transform-origin: top left`。

`.is-open`：`transform: scale(1)`、`opacity: 1`、`pointer-events: auto`，过渡走 `--dropdown-open-dur` 的 250ms。

`.is-closing`：`transform: scale(var(--dropdown-closing-scale))` 也就是 0.99，`opacity: 0`、`pointer-events: none`，并且把 transition 整条换成关闭用的 150ms。关闭停在 0.99，和打开前的 0.97 是两个不同的缩放值，各由独立变量控制。

`data-origin` 的六个取值只改 `transform-origin`，不碰其他属性：`top-right`、`top-center`、`bottom-left`、`bottom-center`、`bottom-right` 各有单独一条规则，`top-left` 就是基础规则里的默认值，所以不需要额外声明。原文的 `data-origin` 说明里还列了 `top-left`，写出来也没关系，命中的就是基础规则。

`pointer-events` 三个状态都写了，面板关着的时候留在 DOM 里也不吃点击，这对用显隐控制而不是挂载卸载的实现很关键。

打开与关闭共用同一条缓动，区别在时长与目标缩放值：打开从 0.97 长到 1，关闭从 1 收到 0.99。收缩幅度极小，收的过程主要靠透明度消失，缩放只提供一点方向感。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--dropdown-open-dur` | `250ms` | 打开时缩放与淡入的时长，取自 `--p2-open-dur` |
| `--dropdown-close-dur` | `150ms` | 关闭时缩放与淡出的时长，取自 `--p2-close-dur` |
| `--dropdown-pre-scale` | `0.97` | 静止态缩放，打开从这里长到 1，取自 `--p2-pre-scale` |
| `--dropdown-closing-scale` | `0.99` | 关闭时收缩到的缩放值，取自 `--p2-closing-scale` |
| `--dropdown-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 打开与关闭共用的缓动，取自 `--p2-ease` |
| `.is-open` | 无 | 打开态，scale 到 1、opacity 到 1 |
| `.is-closing` | 无 | 关闭过程态，短时长收缩淡出 |
| `data-origin` | `top-left` 到 `bottom-right` 六值 | 决定 `transform-origin`，即面板从哪个角长出来 |

缓动 `cubic-bezier(0.22, 1, 0.36, 1)` 打开与关闭共用，节奏差异只来自时长：打开 250ms，关闭 150ms。收得比开得快，是这类浮层的常见做法，原文把两个时长做成了独立变量。

## 怎么用

- 把五个变量写进全局样式表的 `:root`。
- 给面板加 `.t-dropdown`，按实际弹出方向写 `data-origin`，值取 `top-left`、`top-center`、`top-right`、`bottom-left`、`bottom-center`、`bottom-right` 之一。右对齐的菜单写 `top-right`，向上弹出的写 `bottom-*`，这是这套动效唯一需要按场景改的属性。
- 打开：先删掉 `.is-closing`，再加 `.is-open`。先删是为了不带着上一次关闭的 transition 进入打开态。
- 关闭：删 `.is-open`，加 `.is-closing`，等 `--dropdown-close-dur` 之后把 `.is-closing` 也删掉。原文脚本用 `getComputedStyle` 读这个变量，兜底 150。
- 保留 reduced-motion 守卫，它把 `.t-dropdown` 的 transition 清零。

关闭之后那次清理不能省。`.is-closing` 是一个过程态，纯 CSS 不会自己把它收回去；不移除，下一次打开会先播一遍关闭，面板会先缩一下再长出来。

## 什么时候别用

`data-origin` 跟实际弹出方向对不上时不要硬用，比如触发器在屏幕底部、菜单往上开却写了 `top-*`，缩放会从远处的一个角长出来，看着错位。面板内容很高、接近视口满高时也不适合，`scale(0.97)` 到 1 的补间会把里面所有文字一起放大一瞬，长文本读起来发虚。面板需要在打开后继续改变尺寸（异步加载内容、展开子菜单）时也不适合，这段动效只负责入场，后续高度变化会自己跳一下。

## 注意

面板在关闭时要靠脚本的定时器清掉 `.is-closing`，这个定时器与 CSS 里的 `--dropdown-close-dur` 必须同源，写死毫秒数会在调参后失配。`pointer-events` 与 opacity 是同步切换的，所以关闭过程中面板已经不可点，但仍在渲染，别在关闭这段时间里做焦点跳转。原文没有给菜单的键盘导航、焦点捕获、`aria-expanded` 之类的标记，`role` 也没有写，这些都需要调用方自己补齐。reduced-motion 守卫只清过渡，`.is-open` 的 `pointer-events: auto` 仍然生效，交互不会被阻断。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --dropdown-open-dur: 250ms;
  --dropdown-close-dur: 150ms;
  --dropdown-pre-scale: 0.97;
  --dropdown-closing-scale: 0.99;
  --dropdown-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
