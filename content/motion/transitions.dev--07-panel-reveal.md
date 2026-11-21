---
title: "组件动效 · 面板展开（Panel reveal）"
source: https://transitions.dev/transitions/panel-reveal/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-07-panel-reveal
publisher: "Transitions.dev"
---

# 组件动效 · 面板展开（Panel reveal）

> 来源：[Transitions.dev](https://transitions.dev/transitions/panel-reveal/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/07-panel-reveal.md`。

## 它解决什么

一个已经在页面里的容器要露出内部面板，比如卡片里的详情面板、某些可展开的段落区块。用高度变化去撑开会让下面的内容跟着跳，纯淡入又读不出"从哪儿来"。这个动效把短距离位移、透明度、2px 的交叉模糊绑在同一个时长和同一条缓动上，让只走了面板高度一半的位移仍然读成完整的开合。

## 动效怎么构成

只有一层，`.t-panel-slide` 自己就是那个面板，状态挂在它的 `data-open` 上，取值 `"false"` 和 `"true"`。闭合时这一层同时承担三件事：`transform: translateY(var(--panel-translate-y))` 把它压到下方，`opacity: 0` 让它不可见，`filter: blur(var(--panel-blur))` 让它虚化；再加 `pointer-events: none`，保证看不见的时候也点不到。

打开时三者分别归零：`translateY(0)`、`opacity: 1`、`filter: blur(0)`，`pointer-events` 恢复 `auto`。

动的是 transform、opacity、filter，不碰宽高，所以不会触发重排，`will-change: transform, opacity, filter` 把这三个属性提前交给合成层。

两个方向各自声明了一份完整的 `transition` 列表，而不是只写一次等两处共用：闭合分支读 `--panel-close-dur`，打开分支读 `--panel-open-dur`，缓动都读 `--panel-ease`。所以"开"和"关"可以给不同的时长，这也是原文把两个时长分开暴露的原因。

三个属性同时走，读起来是面板从里往外浮出来：位移给方向，透明度给存在感，模糊给景深。原文把它们绑在同一个时长上是因为分开调就会露馅，位移先到位，看到的是一块清晰的半透明纸片在滑动；透明度先到位，面板会先显形再挪位置。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--panel-open-dur` | `400ms` | 打开方向 transform、opacity、filter 的时长 |
| `--panel-close-dur` | `350ms` | 关闭方向的时长，比打开略短，收起不需要等 |
| `--panel-translate-y` | `100px` | 闭合态向下偏移的距离，按面板自身高度的位移量来设，原文举例是一半高度 |
| `--panel-blur` | `2px` | 闭合态的模糊半径，用来让短位移读成整段开合 |
| `--panel-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 三个属性共用的缓动 |

## 怎么用

1. 把这五个变量写进全局样式表的 `:root`，一次就够，同一份 `:root` 可以给多个动效共用。
2. 面板元素加 `.t-panel-slide`，初始写 `data-open="false"`。
3. 切换状态只改一个属性，`data-open="true"` 就是打开，改回 `"false"` 就是收起。没有 JS 编排，纯 CSS，状态由你现有的逻辑驱动。面板里如果有异步内容，属性切换不会等它，先展开再填内容会看到中途高度变化，先占位再展开更稳。
4. 想让闭合态被完全裁掉，外面自己包一层 `overflow: hidden` 的容器。
5. 保留底部的 `prefers-reduced-motion: reduce` 分支，它把过渡整体清零。

## 什么时候别用

面板需要占据文档流、把下方内容真的推开时不要用这一套，它只有位移和透明度，撑不开容器，该换成动 `grid-template-rows` 或高度的做法。面板外面没有裁剪容器、又贴着视口边缘时也要谨慎，位移会把面板送到相邻区域外面。

## 注意

- `pointer-events: none` 只挡指针，不挡键盘焦点。闭合态里的链接和按钮仍然可能被 Tab 选中，需要自己补 `inert` 或隐藏。
- 位移距离和模糊是一起调的：原文写的是用 2px 的交叉模糊，让半程位移读成全程开合。只缩短 `--panel-translate-y` 而不动 `--panel-blur`，节奏会显得收得不够。
- 两个时长是分开的，改了打开的分支不要指望关闭跟着变。
- reduced-motion 分支在原文里被标为 required，删掉它等于让系统级偏好失效。
- `will-change` 声明了三个属性，常驻不撤等于一直占着合成层。原文没有写动态撤销，长期不显示的面板可以自己处理。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --panel-open-dur: 400ms;
  --panel-close-dur: 350ms;
  --panel-translate-y: 100px;
  --panel-blur: 2px;
  --panel-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```
