---
title: "组件动效 · 成功勾选（Success check）"
source: https://transitions.dev/transitions/success-check/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-10-success-check
publisher: "Transitions.dev"
---

# 组件动效 · 成功勾选（Success check）

> 来源：[Transitions.dev](https://transitions.dev/transitions/success-check/)（MIT License，Copyright (c) 2026 Jakub Antalík），原文文件 `skills/transitions-dev/10-success-check.md`。

## 它解决什么

一个动作刚刚落定的那一刻：支付完成、文件上传完、消息发出去、表单保存。状态从"待定"变成"成功"，如果图标是瞬间出现的，用户会觉得什么都没发生，或者怀疑是不是漏了一帧。这个动效把出现拆成淡入、回正的旋转、一次 Y 方向的回弹和（SVG 时）路径描边，四条一起跑，让这一刻有一个落地感。

它只覆盖"出现"这一个方向。收起要自己写：卸载、`opacity: 0` 或者自定义退出。原文的说法是成功状态通常是持续的，为它再挂一套淡出，不值那些额外的 DOM 和 JS。

## 动效怎么构成

外层 `.t-success-check` 是个包装器，自己不管尺寸和颜色，所以里面放 SVG、图片、字体图标都行。状态挂在包装器的 `data-state` 上，冷加载是 `"out"`（`opacity: 0`，没有动画），显示时置 `"in"`。

包装器基础规则里是 `display: inline-block`、`transform-origin: center`、`opacity: 0`，再加 `will-change: transform, opacity, filter`。`[data-state="in"]` 上挂四条 `animation`，全部 `forwards`，并行：

- `t-check-fade`：透明度 0 到 1。
- `t-check-rotate`：从 `rotate(var(--check-rotate-from))` 回到 `rotate(0deg)`。
- `t-check-blur`：从 `blur(var(--check-blur-from))` 到 `blur(0)`。
- `t-check-bob`：用独立属性 `translate` 从 `0 var(--check-y-amount)` 到 `0 0`。

回弹走的是 `translate` 属性而不是 `transform`，所以它和旋转用的 `transform` 不打架，两个能同时进行。这条是这套动效能四条并行的关键。

描边是另一条规则：`[data-state="in"] svg path` 上挂 `t-check-draw`，从 `stroke-dashoffset: 20` 跑到 `0`，带 `var(--check-path-delay, 0ms)` 的延迟，也就是路径比图形晚 80ms 才开始画。`svg` 上是 `display: block`（去掉行内元素底下的空隙）和 `overflow: visible`（描边画到路径外时不被裁）。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--check-opacity-dur` | `550ms` | 淡入时长 |
| `--check-rotate-dur` | `550ms` | 旋转回正时长 |
| `--check-rotate-from` | `80deg` | 旋转起始角度，转到 0deg |
| `--check-bob-dur` | `450ms` | 位移回弹时长 |
| `--check-y-amount` | `40px` | 回弹的起始 Y 偏移 |
| `--check-blur-dur` | `500ms` | 去模糊时长 |
| `--check-blur-from` | `10px` | 起始模糊半径 |
| `--check-path-dur` | `550ms` | 描边绘制时长 |
| `--check-path-delay` | `80ms` | 描边相对其余四条动画的延迟 |
| `--check-ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | 去模糊用的缓动 |
| `--check-ease-opacity` | `cubic-bezier(0.22, 1, 0.36, 1)` | 透明度用的缓动 |
| `--check-ease-rotate` | `cubic-bezier(0.22, 1, 0.36, 1)` | 旋转用的缓动 |
| `--check-ease-bob` | `cubic-bezier(0.34, 1.35, 0.64, 1)` | 回弹用的缓动，控制点超过 1，所以会过冲 |
| `--check-ease-path` | `cubic-bezier(0.22, 1, 0.36, 1)` | 描边用的缓动 |
| `.t-success-check svg path` 的 `stroke-dasharray` / `stroke-dashoffset` | `20` | 描边占位的初始值，要按实际路径长度替换 |

## 怎么用

1. 十四个变量进 `:root`，其中五条缓动里只有 bob 那条是 `cubic-bezier(0.34, 1.35, 0.64, 1)`，其余四条相同。
2. 图标外面包一层 `.t-success-check`，初始 `data-state="out"`。原文示例同时给了 `aria-hidden="true"`。
3. 显示时改 `data-state="in"`，四条动画加描边自动并行。图标如果一直挂在 DOM 上、只在某个事件后显示，这一步就够了。
4. 需要在已经可见的状态上重播，得先回 `"out"`，读一次 `void check.offsetWidth` 强制回流，再置 `"in"`，否则关键帧不会从 0 重跑。
5. 校准描边：用 `path.getTotalLength()` 量一次真实长度，向上取整填进 `stroke-dasharray` 和 `stroke-dashoffset`。原文的例子是 19.42 量出来取 20。
6. 保留 `prefers-reduced-motion: reduce` 分支，它同时把包装器的 `opacity` 设成 1、把描边的 `stroke-dashoffset` 设成 0，禁用动画也仍然是完成态。

## 什么时候别用

一屏里同时冒出多个成功图标时不要用，550ms 的旋转加 450ms 的回弹互相争注意力，只保留一个主动作就够。需要反复进出、随时可逆的场景也不适合，这套只写了出现方向，退出得自己补一套，补得不小心会和 `forwards` 的终值打架。

## 注意

- `aria-hidden="true"` 说明图标本身是装饰，成功这件事要靠文案或 `role="status"` 之类的区域告诉屏幕阅读器，别让图形成为唯一信息源。
- 五条动画都带 `forwards`，结束后停在终态。反过来讲，重播必须走"先回 out、再回流、再 in"三步，少一步就不动。
- `stroke-dasharray` 太短，动画开始前线就露出来了；太长，路径会先画过终点再淡入。原文建议向上取整 1px 吸收亚像素抖动。
- 回弹用的是 `translate` 属性，如果别处也在同一个元素上用 `transform` 做位移动画，两者会叠加，位移量要对一下。
- reduced-motion 的写法不是简单清动画，还补了终值。照抄时别把 `opacity: 1` 和 `stroke-dashoffset: 0` 丢掉。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
:root {
  --check-opacity-dur: 550ms;
  --check-rotate-dur: 550ms;
  --check-rotate-from: 80deg;
  --check-bob-dur: 450ms;
  --check-y-amount: 40px;
  --check-blur-dur: 500ms;
  --check-blur-from: 10px;
  --check-path-dur: 550ms;
  --check-path-delay: 80ms;
  --check-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --check-ease-opacity: cubic-bezier(0.22, 1, 0.36, 1);
  --check-ease-rotate: cubic-bezier(0.22, 1, 0.36, 1);
  --check-ease-bob: cubic-bezier(0.34, 1.35, 0.64, 1);
  --check-ease-path: cubic-bezier(0.22, 1, 0.36, 1);
}
```
