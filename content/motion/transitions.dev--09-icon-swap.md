---
title: "组件动效 · 图标切换（Icon swap）"
source: https://transitions.dev/transitions/icon-swap/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-09-icon-swap
publisher: "Transitions.dev"
---

# 组件动效 · 图标切换（Icon swap）

> 来源：[Transitions.dev](https://transitions.dev/transitions/icon-swap/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/09-icon-swap.md`。

## 它解决什么

同一个位置要在两个图标之间切换：汉堡对关闭、太阳对月亮、播放对暂停、展开对折叠。直接替换元素会闪一帧，而且两个图标的宽高差一点，切换时布局会抖。把两个图标叠在同一格里做交叉淡化，尺寸在整个过程中保持不变，切换就读成一个图标变成了另一个。

## 动效怎么构成

容器 `.t-icon-swap` 是 `position: relative` 加 `display: inline-grid`，两个 `.t-icon` 都用 `grid-area: 1 / 1` 压在同一个网格单元上，因此容器宽度取两个图标中较宽的那个，切换前后不变。

状态在容器上，`data-state="a"` 或 `"b"`；图标各自带 `data-icon="a"` 和 `data-icon="b"`。两条选择器按"当前状态配对应图标"处理：

- 匹配的那个：`opacity: 1`、`filter: blur(0)`、`transform: scale(1)`。
- 不匹配的那个：`opacity: 0`、`filter: blur(var(--icon-swap-blur))`、`transform: scale(var(--icon-swap-start-scale))`。

两个图标始终在 DOM 里，切换只改变它们三组值的组合，没有元素的增删，所以不会重排，也不会出现新元素插入时的那一帧闪烁。

动的属性是 opacity、filter、transform，三个共用一个时长 `--icon-swap-dur` 和一条缓动 `--icon-swap-ease`。`.t-icon` 上的 `transition` 和 `will-change` 都写在基础规则里，所以两个方向对称：进入的图标从 0.25 放大回 1 并去掉模糊，退出的图标缩到 0.25 并加上模糊，同时完成淡出。两边同时进行，中间没有空档。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--icon-swap-dur` | `200ms` | opacity、filter、transform 三者共用的时长 |
| `--icon-swap-blur` | `2px` | 隐藏图标的模糊半径，让淡出不像直接消失 |
| `--icon-swap-start-scale` | `0.25` | 隐藏图标的缩放起点，也是进入时的起点 |
| `--icon-swap-ease` | `ease-in-out` | 三个属性共用的缓动 |

## 怎么用

1. 四个变量写进 `:root`。
2. 容器加 `.t-icon-swap`，两个图标都加 `.t-icon`，分别写 `data-icon="a"` 和 `data-icon="b"`，都要渲染出来，不能按状态条件渲染，否则没有淡出对象。
3. 切换时只改容器的 `data-state`，从 `"a"` 到 `"b"` 或反向，CSS 两条规则自动交换两个图标的状态。
4. 图标的尺寸、颜色、描边粗细由你自己给，这套样式只管透明度、模糊和缩放。两个图标的 viewBox 和描边宽度最好保持一致，否则 0.25 到 1 的缩放会让偏小的那个看起来移动更多。
5. 保留 `prefers-reduced-motion: reduce` 分支，它清掉过渡，状态切换仍然是瞬间完成。

## 什么时候别用

两个图标的视觉重量差得远时不要用，比如细线图标换实心图标，交叉淡化会看到两套轮廓叠在一起，中间那一帧是脏的，该改成遮罩滑动或直接替换再短暂淡入。需要图标本身形变的（三条横线收成一个叉）也该走路径动画，不是两个图形的叠加。图标里含文字或徽标数字时同样不适合叠放。

## 注意

- 两个图标始终在 DOM 里，屏幕阅读器可能把两套图形内容都读出来。装饰性的图形要对辅助技术隐藏，当前是开还是关由外层按钮的可访问名称和按下状态表达。原文的示例只给了结构，没有涉及无障碍，这部分要自己补。
- reduced-motion 分支只清过渡，不改变终值，所以不会出现两个图标同时可见的中间态。
- 缩放只作用在图标自己身上，容器尺寸不变，但 `scale(0.25)` 的图标在视觉上会明显偏离中心，需要确保两个图标的 viewBox 和内容对齐。
- 图标是行内元素时，`inline-grid` 会把基线对齐带进来，图标看起来比旁边的文字低一点。需要自己调 `vertical-align`，这套样式没有处理。
- 缓动是 `ease-in-out`，两端都留了缓冲。200ms 的保守时长下这很关键，换成单向的曲线后退出会显得断，改之前先在同样的时长里对比。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --icon-swap-dur: 200ms;
  --icon-swap-blur: 2px;
  --icon-swap-start-scale: 0.25;
  --icon-swap-ease: ease-in-out;
}
```
