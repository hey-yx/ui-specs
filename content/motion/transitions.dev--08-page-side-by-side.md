---
title: "组件动效 · 并排页面切换（Page side-by-side）"
source: https://transitions.dev/transitions/page-side-by-side/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-08-page-side-by-side
publisher: "Transitions.dev"
---

# 组件动效 · 并排页面切换（Page side-by-side）

> 来源：[Transitions.dev](https://transitions.dev/transitions/page-side-by-side/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/08-page-side-by-side.md`。

## 它解决什么

两个并列的全屏页面或步骤之间切换，比如列表到详情、向导的第一步到第二步。硬切会丢掉方向感，用户不知道自己往前走了还是退回。这个动效给两个页面各自一个固定的起始偏移，第 1 页从左边进来、第 2 页从右边进来，退出时回到各自的偏移位置，于是"换页"有了前后关系。位移只有 8px，配 3px 模糊，量级上是"上一页往后让了一点"，不是整屏平移，所以它给的是方向提示，不是空间移动的错觉。

## 动效怎么构成

容器 `.t-page-slide` 是定位上下文（`position: relative`），状态挂在它的 `data-page` 上，取值 `"1"` 或 `"2"`。里面两个 `.t-page` 节各带 `data-page-id="1"` 和 `data-page-id="2"`，全部 `position: absolute; inset: 0` 叠在同一块区域上。

每一页先给自己算一个局部变量 `--t-page-from-x`：第 1 页是 `calc(var(--page-slide-distance) * -1)`，第 2 页是 `var(--page-slide-distance)`。非激活页的位移和模糊都乘上 `--page-exit-enabled`：

`transform: translateX(calc(var(--t-page-from-x, 0px) * var(--page-exit-enabled)))`，`filter: blur(calc(var(--page-blur) * var(--page-exit-enabled)))`，同时 `opacity: 0`、`pointer-events: none`。

激活页由两条选择器选出（`[data-page="1"]` 配 `[data-page-id="1"]`，`[data-page="2"]` 配 `[data-page-id="2"]`），终值是 `translateX(0)`、`blur(0)`、`opacity: 1`、`pointer-events: auto`，并额外加 `transition-delay: var(--page-stagger)`。

退出页不是"滑出去"，而是回到它自己的起始偏移，所以第 1 页向左退、第 2 页向右退，方向由 `--t-page-from-x` 的正负决定，和 DOM 里谁在前没有关系。这个约定在读列表到详情、步骤一到步骤二时才成立，反过来用就变成"记住上一页"的语义。

动的属性分两组：位移和模糊走 `--page-slide-dur` 与 `--page-slide-ease`，透明度单独走 `--page-fade-dur` 与 `--page-fade-ease`。两组默认值相同，但可以拆开调，比如让淡出比滑动更快。

`--page-exit-enabled` 是 0/1 开关，只乘在位移和模糊上，不乘透明度。置 0 时两页原地淡入淡出，这就是"首屏不要滑入"的用法。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--page-slide-dur` | `200ms` | 位移与模糊的时长 |
| `--page-fade-dur` | `200ms` | 透明度单独的时长 |
| `--page-slide-distance` | `8px` | 每页的起始横向偏移量，第 1 页取负值 |
| `--page-blur` | `3px` | 非激活页的模糊半径 |
| `--page-stagger` | `0ms` | 激活页的 `transition-delay`，0 表示两页同时动 |
| `--page-exit-enabled` | `1` | 0/1 开关，为 0 时退出页不位移也不模糊，只剩淡出 |
| `--page-slide-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 位移与模糊的缓动 |
| `--page-fade-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 透明度的缓动 |

## 怎么用

1. 八个变量进 `:root`，和其它动效共用一份。
2. 按结构写 HTML：外层 `.t-page-slide` 带 `data-page`，里面每页 `.t-page` 带 `data-page-id`，两页顺序无关，全靠属性选择器。
3. 切页只改容器属性，`setAttribute("data-page", "2")` 之类，CSS 负责其余部分。
4. 首屏渲染、或不需要滑动只要淡入的场合，在容器上把 `--page-exit-enabled` 设成 `0`。
5. 保留 `prefers-reduced-motion: reduce` 分支。

## 什么时候别用

8px 的位移配 3px 的模糊是"短促提示"的量级，不承担空间导航的任务，需要横向轨道、跟手拖动、左右滑动回弹的场景不要套这一套。长页面之间切换也不适合，两页都是 `position: absolute` 叠放，滚动位置和高度都不会被保留。需要真正的页面转场（浏览器级别的前进后退）更该交给 View Transitions。

## 注意

- 两页同时留在 DOM 里，非激活页只设了 `pointer-events: none`，焦点顺序没有处理，隐藏页里的链接仍可被 Tab 选中。需要自己加 `inert` 或 `hidden`。
- 容器是 `position: relative`、页面是 `absolute`，容器没有内容撑高，高度要自己给，否则会塌成 0。
- 选择器只认 `data-page-id="1"` 和 `"2"` 两条分支，三页以上没有对应的偏移规则，得自己扩。
- `--page-exit-enabled` 只影响位移和模糊，不影响透明度。想彻底关掉转场要动时长，不是动这个开关。
- `--page-stagger` 加在激活页上，调大只让进场延迟，退出页不受影响，两页会出现时间差。
- 位移方向由 `data-page-id` 决定，页面顺序和 DOM 顺序不一致时，进出方向会跟视觉位置对不上。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --page-slide-dur: 200ms;
  --page-fade-dur: 200ms;
  --page-slide-distance: 8px;
  --page-blur: 3px;
  --page-stagger: 0ms;
  --page-exit-enabled: 1;
  --page-slide-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --page-fade-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
