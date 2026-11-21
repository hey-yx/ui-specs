---
title: "组件动效 · 通知徽标（Notification badge）"
source: https://transitions.dev/transitions/notification-badge/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-03-notification-badge
publisher: "Transitions.dev"
---

# 组件动效 · 通知徽标（Notification badge）

> 来源：[Transitions.dev](https://transitions.dev/transitions/notification-badge/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/03-notification-badge.md`。

## 它解决什么

铃铛、收件箱、按钮上出现一个未读小圆点时，如果它凭空贴在角上，用户只看到「多了个点」，感知不到这是一条刚从外面进来的提示。这个动效让徽标从右上角外侧斜着滑进落位，里面的圆点再独立地弹开，触发器本身一动不动。适合任何挂在触发器角上的未读数、状态点、新内容标记。它要的是「这个东西刚刚长出来」这一层意思，不负责提示内容详情。

## 动效怎么构成

两层结构，各管一段，互不牵连。

外层 `.t-badge` 是绝对定位的包裹层，`top: -6px;`、`right: -8px;`、`pointer-events: none;`，只负责位移。它在 `data-open="true"` 时播放 `@keyframes t-badge-slide-in`，从 `translate(var(--badge-offset-x), var(--badge-offset-y))` 走到 `translate(0, 0)`，起点在水平 -8.2px、垂直 12.4px 处，也就是触发器左下偏外一点的位置，斜着滑上来落位。

内层 `.t-badge-dot` 负责缩放、透明度与模糊三件事。静止态是 `scale(1)`、`opacity: 1`、`filter: blur(0)`；`.t-badge[data-open="false"] .t-badge-dot` 变成 `scale(0)`、`opacity: 0`、`filter: blur(var(--badge-blur))`，同时把三条 transition 换成关闭专用的短时长和另一套缓动。

打开走 animation，关闭走 transition，这是原文的机制分工。两个方向不能共用一条 transition，因为入场起点要由关键帧的 `from` 给出，而关闭只需要回到静止值。触发器必须 `position: relative`，`.t-badge` 才能相对它定位，原文的 HTML 注释里写明了这一点。

`pointer-events: none` 挂在外层，所以徽标不会截走触发器的点击。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--badge-slide-dur` | `260ms` | 外层滑入时长，取自 `--p1-pos-open-dur` |
| `--badge-pop-dur` | `500ms` | 圆点打开时的缩放与模糊时长，取自 `--p1-scale-open-dur` |
| `--badge-pop-close-dur` | `180ms` | 圆点关闭时的缩放与模糊时长，取自 `--p1-scale-close-dur` |
| `--badge-fade-dur` | `400ms` | 圆点打开时的淡入时长，取自 `--p1-opacity-open-dur` |
| `--badge-fade-close-dur` | `180ms` | 圆点关闭时的淡出时长，取自 `--p1-opacity-close-dur` |
| `--badge-blur` | `2px` | 关闭态圆点的模糊半径，取自 `--p1-blur` |
| `--badge-offset-x` | `-8.2px` | 滑入起点的水平偏移，取自 `--p1-distance-x` |
| `--badge-offset-y` | `12.4px` | 滑入起点的垂直偏移，取自 `--p1-distance-y` |
| `--badge-slide-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 滑入缓动，取自 `--p1-ease-pos-open` |
| `--badge-pop-ease` | `cubic-bezier(0.34, 1.36, 0.64, 1)` | 打开时缩放与淡入的缓动，取自 `--p1-ease-scale-open` |
| `--badge-close-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | 关闭三条 transition 共用的缓动，取自 `--p1-ease-close` |
| `.t-badge` | 无 | 绝对定位的外层，承载滑入动画 |
| `.t-badge-dot` | 无 | 圆点本体，承载缩放、透明度、模糊 |
| `data-open="true"` | 无 | 打开态，外层播放入场动画 |
| `data-open="false"` | 无 | 关闭态，圆点收缩并模糊消失 |

注意打开与关闭的节奏不对称：打开是 260ms 滑入加 500ms 弹开，关闭全部压到 180ms。原文的缓动也分了三套，回弹只出现在打开的缩放上。

## 怎么用

- 把十一个变量写进全局样式表的 `:root`。
- 把 `.t-badge` 放进触发器内部，触发器设 `position: relative`，圆点放进 `.t-badge-dot`。
- 状态只切一个属性：`.t-badge` 上的 `data-open="true"` 或 `data-open="false"`，不要用类。第一次渲染就带 `data-open="true"` 会立刻播放滑入，想让徽标一开始就在位，先渲染成关闭态再切。
- 按需调 `top` 与 `right`，把徽标对到你的图标角上，原文说明这里可以改成 `left` 与 `bottom`。
- 保留末尾守卫，它用一条规则同时覆盖 `.t-badge, .t-badge-dot`，把 animation 和 transition 都清零。

## 什么时候别用

触发器没有定位上下文、或者徽标要跟着页面滚动重新贴位时，这个绝对定位方案会错位，得先自己套一层定位容器。数字高频刷新的场景（每秒变的计数）也不适合每次都重播滑入，只更新圆点里的数字更稳。

## 注意

守卫必须同时命中两个类，只写 `.t-badge` 会漏掉内层的缩放与模糊。`pointer-events: none` 让徽标永远不吃点击，要把徽标做成可点入口就得自己改这一条。圆点里的数字是文本内容，原文没有给 aria 或 `aria-live`，未读数需要被读屏播报时得自己补在触发器上。关闭态的 `scale(0)` 配 `filter: blur()` 在同一帧里变，低配设备上比纯位移更吃合成，别在同一屏里挂几十个。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --badge-slide-dur: 260ms;
  --badge-pop-dur: 500ms;
  --badge-pop-close-dur: 180ms;
  --badge-fade-dur: 400ms;
  --badge-fade-close-dur: 180ms;
  --badge-blur: 2px;
  --badge-offset-x: -8.2px;
  --badge-offset-y: 12.4px;
  --badge-slide-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --badge-pop-ease: cubic-bezier(0.34, 1.36, 0.64, 1);
  --badge-close-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```
