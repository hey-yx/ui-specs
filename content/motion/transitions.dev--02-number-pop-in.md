---
title: "组件动效 · 数字滚动（Number pop-in）"
source: https://transitions.dev/transitions/number-pop-in/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-02-number-pop-in
publisher: "Transitions.dev"
---

# 组件动效 · 数字滚动（Number pop-in）

> 来源：[Transitions.dev](https://transitions.dev/transitions/number-pop-in/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/02-number-pop-in.md`。

## 它解决什么

计数器、价格、余额这类数字更新时，如果字符原地替换，读者很难判断这是新值还是旧值，也看不出变化的量级。这个动效让每个字符从指定方向带着模糊重新进入，最后两位数字再错开一拍，小数部分有生气但不至于乱。适合任何需要表达「刚刚变过」的数字。它管的是变化那一瞬间要不要被看见，排版本身不在范围内。

## 动效怎么构成

DOM 是一个 `.t-digit-group` 容器，里面每个字符一个 `.t-digit` 的 span，小数点也单独占一个 span。容器是 `display: inline-flex; align-items: baseline;`，字符是 `display: inline-block`，所以整串数字的基线保持对齐。

每个字符是一个独立的动画单元，互相之间不共享时间轴，只有 `data-stagger` 会把某个字符整体往后推。

在动的是每个字符自己，三样属性一起变：`@keyframes t-digit-pop-in` 的起点是 `translate(calc(var(--digit-distance) * var(--digit-dir-x)), calc(var(--digit-distance) * var(--digit-dir-y)))` 加 `opacity: 0` 加 `filter: blur(var(--digit-blur))`，终点是 `translate(0, 0)`、`opacity: 1`、`filter: blur(0)`。

方向由两个无单位乘数决定，`--digit-dir-x` 默认 `0`，`--digit-dir-y` 默认 `1`，也就是从下方 8px 处升起。乘数可以写 `1`、`-1`、`0`，分别对应正向、反向、不动。

错拍靠 `data-stagger` 属性，不用额外的类：`[data-stagger="1"]` 把 `animation-delay` 设成 `var(--digit-stagger)`，`[data-stagger="2"]` 设成 `calc(var(--digit-stagger) * 2)`。原文的脚本给倒数第二个字符打 `"1"`，最后一个打 `"2"`，于是末两位各慢一拍入场。

播放由 `.t-digit-group.is-animating` 一次性触发，选择器写的是 `.t-digit-group.is-animating .t-digit`，所以状态类挂在容器上，字符不需要各自加类。`animation` 带 `both` 填充，起点帧在延迟期间就生效，播完停在 100% 的状态，不会闪回默认样式。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--digit-dur` | `500ms` | 单字符入场时长，取自 `--p9-dur` |
| `--digit-distance` | `8px` | 起始位移长度，取自 `--p9-distance` |
| `--digit-stagger` | `70ms` | 每级错拍间隔，取自 `--p9-stagger` |
| `--digit-blur` | `2px` | 起始模糊半径，取自 `--p9-blur` |
| `--digit-ease` | `cubic-bezier(0.34, 1.45, 0.64, 1)` | 入场缓动，取自 `--p9-ease` |
| `--digit-dir-x` | `0` | 水平方向乘数，取自 `--p9-dir-x` |
| `--digit-dir-y` | `1` | 垂直方向乘数，取自 `--p9-dir-y` |
| `.is-animating` | 无 | 加在 `.t-digit-group` 上，触发整串重播 |
| `data-stagger="1"` | 无 | 延迟 1 倍 `--digit-stagger` |
| `data-stagger="2"` | 无 | 延迟 2 倍 `--digit-stagger` |

缓动是带回弹的，`cubic-bezier(0.34, 1.45, 0.64, 1)` 的第二个控制点超过 1，字符会在落位前轻微冲过一点再回来。

## 怎么用

- 把七个变量写进全局样式表的 `:root`，一次够用。
- 按结构铺 HTML：外层 `.t-digit-group`，每个字符一个 `.t-digit`，小数点也算一个字符。
- 重播分三步：去掉 `.is-animating`，重渲染字符或替换文本，强制回流，再加回 `.is-animating`。原文用 `void group.offsetHeight;` 触发回流，这一步省不掉。
- 给末尾两个字符打 `data-stagger="1"` 与 `data-stagger="2"`，前面的字符不加，它们按零延迟入场。
- 想换入场方向就改 `--digit-dir-x` 与 `--digit-dir-y` 的乘数，不用碰关键帧；同时保留 reduced-motion 守卫，它把 `.t-digit` 的 animation 清零。

## 什么时候别用

十二位订单号、时间戳、坐标这类长数字不适合每位都带模糊位移，字符一多就显得吵，读者也不需要感知每一位的变化。只让整串淡入，或者只给首尾几位做入场更稳。纯展示、不会再变的数字也不必上动画；价格这类语义重要的数字，模糊与位移会短暂降低可读性，更新频繁时读者反而抓不住当前值。

## 注意

字符被拆成一串独立 span 之后，读屏软件读到的是一段碎片化的内容，原文没有给 aria 处理。数字需要被正常读出时，得自己在容器上补一层完整的可访问名称。另外 `animation` 用了 `both` 填充，若在动画中途重复触发而忘了先移除 `.is-animating`，新动画不会从头开始。reduced-motion 守卫只清 `.t-digit` 的 animation，`.is-animating` 这个状态类本身仍然存在，判断逻辑不要依赖动画是否在跑。每个字符都声明了 `will-change: transform, opacity, filter`，一屏里同时放多组会明显加重合成负担，只在真正会变的那组上用。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --digit-dur: 500ms;
  --digit-distance: 8px;
  --digit-stagger: 70ms;
  --digit-blur: 2px;
  --digit-ease: cubic-bezier(0.34, 1.45, 0.64, 1);
  --digit-dir-x: 0;
  --digit-dir-y: 1;
}
```
