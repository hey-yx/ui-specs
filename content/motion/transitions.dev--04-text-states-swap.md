---
title: "组件动效 · 文本切换（Text states swap）"
source: https://transitions.dev/transitions/text-states-swap/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-04-text-states-swap
publisher: "Transitions.dev"
---

# 组件动效 · 文本切换（Text states swap）

> 来源：[Transitions.dev](https://transitions.dev/transitions/text-states-swap/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/04-text-states-swap.md`。

## 它解决什么

状态指示器上的文字要原地换值："Processing…" 变成 "Done"，"Save" 变成 "Saved"。如果只替换 textContent，字还在原来的位置，内容却换了，读者会怀疑自己看漏了什么。这个动效让旧文字向上带模糊退出，新文字从下方进入，两段共用一个时长，读起来是一次明确的替换。

## 动效怎么构成

只有一个元素 `.t-text-swap`，`display: inline-block`，静止态是 `transform: translateY(0)`、`filter: blur(0)`、`opacity: 1`，三条 transition 都读同一组时长与缓动变量。动的属性是 transform、filter、opacity，DOM 不变，文本原地换。

两个状态类加一次移除，接力完成一次切换：

- `.is-exit`：`translateY(calc(var(--text-swap-translate-y) * -1))`、`blur(var(--text-swap-blur))`、`opacity: 0`，旧文字向上 8px 并虚掉。
- `.is-enter-start`：`translateY(var(--text-swap-translate-y))`、`blur(var(--text-swap-blur))`、`opacity: 0`，并且写了 `transition: none`，让新文字瞬移到下方起点，不产生过渡。
- 移除 `.is-enter-start` 之后，默认那条 transition 接手，新文字从下方走回 0。

所以这是三阶段序列，同一个元素反复切类，位移与模糊的方向相反，视觉上像一次上下换页。中间那一帧必须没有过渡，否则新文字会从退出位平滑飘到入场位，方向就乱了。

位移量与模糊量都很小，读者看到的是「字往上走了、虚了一下」，而不是一段夸张的过场。新旧文字共用同一个元素，中间没有重叠帧，不会出现两行字同时在场的情况。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--text-swap-dur` | `200ms` | 每段过渡的时长，也是替换文本的等待时间，取自 `--p6-dur` |
| `--text-swap-translate-y` | `8px` | 退出与入场的垂直位移，取自 `--p6-translate-y` |
| `--text-swap-blur` | `2px` | 退出与入场的模糊半径，取自 `--p6-blur` |
| `--text-swap-ease` | `ease-out` | 三条 transition 共用的缓动，取自 `--p6-ease` |
| `.is-exit` | 无 | 旧文字向上退出 |
| `.is-enter-start` | 无 | 新文字瞬移到下方起点，自带 `transition: none` |
| `.t-text-swap` | 无 | 承载 transition 的元素本身 |

`--text-swap-ease` 是全篇唯一没有用 cubic-bezier 的缓动，原文就是关键字 `ease-out`，前快后慢，适合 200ms 这种短时长。

位移只用 8px，模糊只用 2px，量都不大，目的是让替换被察觉，而不是把注意力拽到动效上。

## 怎么用

- 把四个变量写进全局样式表的 `:root`，一次定义，页面里所有做文本替换的元素共用。
- 给要换文字的元素加 `.t-text-swap`，落在 inline 级元素上，`display: inline-block` 由这个类给出，位移不会撑开父级的行盒。
- 加 `.is-exit`，等一个 `--text-swap-dur`，也就是 200ms。
- 到点后改 textContent，去掉 `.is-exit`，加上 `.is-enter-start`，强制回流一次，再删掉 `.is-enter-start`；读时长用 `getComputedStyle` 取 `--text-swap-dur`，原文脚本的兜底值是 200。
- 保留 reduced-motion 守卫，它把 `.t-text-swap` 的 transition 清零。

强制回流那一步不能省。原文脚本用 `void el.offsetHeight;`，注释写明是为了让下一次改动真正产生过渡；跳过它，`.is-enter-start` 的瞬时跳转和随后的回归会挤在同一帧，看不出入场。

## 什么时候别用

多行文本、段落、会改变块高度的内容不适合，位移与模糊在换行处会显得碎，元素高度也会跟着跳。文字需要在几毫秒内被读屏播报的场合（订单状态、支付结果），视觉替换之外还得配 `aria-live`，光靠这个动效传达不了变化。宽度会随文案变化很大的场景也要留意，位移期间元素宽度已经在切换，两段视觉效果容易对不齐。

## 注意

时长变量在两处被读：CSS 里的 transition 和脚本里的 `setTimeout`。两处必须同源，改成写死的毫秒数就会出现旧文字还没退完、新文字已被换上的情况。`.is-enter-start` 自带 `transition: none`，漏掉它新文字会被过渡拖成一段缓慢的位移。reduced-motion 守卫只清 transition，三个阶段仍然会执行，替换逻辑不受影响，所以不要用「动画是否结束」来判断文本是否已更新。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --text-swap-dur: 200ms;
  --text-swap-translate-y: 8px;
  --text-swap-blur: 2px;
  --text-swap-ease: ease-out;
}
```
