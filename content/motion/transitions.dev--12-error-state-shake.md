---
title: "组件动效 · 错误抖动（Error state shake）"
source: https://transitions.dev/transitions/error-state-shake/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-12-error-state-shake
publisher: "Transitions.dev"
---

# 组件动效 · 错误抖动（Error state shake）

> 来源：[Transitions.dev](https://transitions.dev/transitions/error-state-shake/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/12-error-state-shake.md`。

## 它解决什么

表单校验失败的那一刻：邮箱格式不对、密码错误、必填项空着、两次输入不一致。用户点了提交，页面什么都没变，或者只在角落里多了一行小字，他不知道自己被拒了。这个动效让输入框左右抖一下带过冲，边框切到错误色，下方浮出说明；读完之后边框和文字自动回到中性，不需要用户另外关掉。

## 动效怎么构成

三层，三个类各管一件事：

- `.t-input-wrap` 是包裹层，`.is-error` 加在它上面时控制 `.t-error-msg` 的显隐。消息属于包裹层，不属于输入框。
- `.t-input` 是拥有可见边框的那一层，`.is-error` 加在它上面时切换 `border-color`；抖动用的 `.is-shaking` 也加在它上面。
- `.t-error-msg` 是说明文字，用 `opacity` 加 `visibility` 的组合做显隐。

`.is-error` 和 `.is-shaking` 分开是刻意的：抖动要能重播（移除、强制回流、再加），如果和错误态共用一个类，重播时错误态会跟着闪一遍。分开之后抖动也能单独用，比如只想做个"提示性"的晃动。

抖动是一条 `@keyframes`，五个停点：`0%`、`28.57%`、`57.14%`、`78.57%`、`100%`，位移依次是 `0`、`+distance`、`-distance`、`+overshoot`、`0`。每个停点上单独写了 `animation-timing-function: var(--shake-ease)`，所以每一段各走各的曲线，而不是整条动画共用一个缓动。总时长不写死，用 `calc(var(--shake-dur-a) * 2 + var(--shake-dur-b) * 2)`，默认两档是 80 和 60，合计 280ms。

边框是普通的 `transition`：常态 `border-color 150ms ease-out`，进入 `.is-error` 后换成 `var(--revert-dur, 280ms) ease-out`，因为回退要和文字一起慢慢淡回去。

文字的显隐用的是 `opacity` 加 `visibility` 双属性：隐藏时 `visibility` 的过渡延迟 `var(--revert-dur, 280ms)` 才切，保证淡出的整个过程文字还画在屏幕上；进入错误态时这个延迟归 0，立刻可见。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--shake-distance` | `6px` | 左右摆动的幅度 |
| `--shake-overshoot` | `4px` | 回程时越过原点的量，制造过冲 |
| `--shake-dur-a` | `80ms` | 两段大摆动的时长，各一段 |
| `--shake-dur-b` | `60ms` | 两段收尾的时长，各一段 |
| `--shake-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 每个停点各自读取的分段缓动 |
| `--revert-hold` | `3000ms` | 抖动结束后维持错误态的时长，够读完说明 |
| `--revert-dur` | `280ms` | 边框与说明文字淡回中性的时长 |
| `.t-input` 的 `border-color` 过渡 | `150ms ease-out` | 常态下边框变化的基础时长 |
| `.t-input.is-shaking` 的 `animation-duration` | `calc(var(--shake-dur-a) * 2 + var(--shake-dur-b) * 2)` | 由两档时长算出总长，默认 280ms |

## 怎么用

1. 七个变量进 `:root`，脚本用 `getComputedStyle` 读回它们来排定时器。
2. 按三层结构写 HTML，边框颜色、内边距、字号都由你自己的样式给，这套只管补间。
3. 出错时给 `.t-input-wrap` 和 `.t-input` 同时加 `.is-error`，再对 `.t-input` 重播抖动：先移除 `.is-shaking`，读一次 `offsetWidth` 强制回流，再加回来。
4. 抖动结束后（脚本按两档时长算出总长，再加一点余量）移除 `.is-shaking`；再过 `--revert-hold` 才移除两个 `.is-error`，边框和文字按 `--revert-dur` 淡回中性。
5. 用户开始输入就清掉定时器并移除 `.is-error`，不要在用户已经改的地方继续抖。原文把这一步标为可选但建议加。
6. 保留 `prefers-reduced-motion: reduce` 分支。

## 什么时候别用

整体性的失败不要用，比如网络断开、服务不可用，那种该给 toast 或页面级提示，抖动一个输入框会把责任指错地方。6px 的位移在小控件上刚好，放在整块表单容器上几乎看不出来，别把 `.t-input` 加在大面积容器上。纯键盘操作、屏幕阅读器为主的场景也不能只靠抖动，那不构成信息。

## 注意

- 边框宽度要在常态、聚焦、错误三态保持一致，原文明确写了这一点。宽度变了，补间时内容会被推着跳一下。
- reduced-motion 分支只清了 `.t-input` 的 `animation` 和 `transform`。边框颜色与文字淡入淡出仍然生效，所以错误态在减弱动效下依然可见，只是不抖。这个取舍是对的，别顺手把边框过渡也关掉。
- `visibility` 的延迟是必需的：不加延迟，文字会在淡出刚开始的瞬间消失，看起来像突然没了。
- 百分比停点是写死的字面量，只有总时长跟着变量走。改了 `--shake-dur-a` 和 `--shake-dur-b` 的比例，必须手算重写 28.57%、57.14%、78.57%，否则每一段会和声明时长对不上。
- 抖动是纯视觉，屏幕阅读器听不到。原文没有涉及无障碍，输入框需要被标记为无效、说明文字需要与输入框建立关联、状态变化最好能被播报，这三点都要自己补。
- 回退定时器要存句柄（原文存在包裹层上），连续触发校验时先清旧的，不然第二次错误会被第一次的定时器提前抹掉。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --shake-distance: 6px;
  --shake-overshoot: 4px;
  --shake-dur-a: 80ms;
  --shake-dur-b: 60ms;
  --shake-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --revert-hold: 3000ms;
  --revert-dur: 280ms;
}
```
