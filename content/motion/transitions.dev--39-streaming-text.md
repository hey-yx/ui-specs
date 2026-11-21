---
title: "组件动效 · 流式文本（Streaming text）"
source: https://transitions.dev/transitions/streaming-text/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-39-streaming-text
publisher: "Transitions.dev"
---

# 组件动效 · 流式文本（Streaming text）

> 来源：[Transitions.dev](https://transitions.dev/transitions/streaming-text/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/streaming-text/index.html`。

## 它解决什么

流式回答如果整段一起出现，用户读到的是一块已经写完的段落，感觉不到「正在生成」。这个动效把句子拆成词，一个一个从模糊里浮出来：每个词 350ms 内把透明度和 1px 模糊收敛掉。视线自然跟着最新的词走，等待的过程变成了可感知的节奏，而不是一段空白之后的突然填充。

它的成本很低，没有位移、没有布局变化，只有透明度和模糊两条可合成的属性，所以在一句话上叠十几个词也不会把页面顶开。

## 动效怎么构成

容器是 `.t-stream`，里面是普通段落文字。脚本把每个词包进 `<span class="t-stream-w">`，其余不动。span 的常态是可见的，动画只在播放时才接上。

`.t-stream-w` 定义三件事：`opacity: 0`、`filter: blur(var(--stream-blur))`、以及 `opacity` 与 `filter` 两条过渡，时长都用 `--stream-fade`。播放时给词加 `.is-in`，它把 `opacity` 抬到 1、`filter` 归到 `blur(0)`，两条过渡一起走完，一个词就「定影」了。词与词之间按 `--stream-gap` 依次加类，从左到右连成一串。

重放靠顺序而不是新属性。原文的步骤是：先把每个 span 的过渡清掉（`transition: none`）回到初始态，强制一次回流，再把过渡恢复，最后逐个加 `.is-in`。少掉回流这一步，浏览器会把清空和加回合并进一帧，过渡不会触发，词直接跳成可见。

初始态和播放态的写法值得注意：`opacity: 0` 与模糊写在 `.t-stream-w` 上，但按原文的用法，span 静止时是可见的，`.is-in` 只是把已经存在的词「定影」。所以这套类名适合「先铺满整段、再从头演一遍」的场景，而不是靠 CSS 自己一格一格往外吐。逐词吐出的是脚本里那串加类的定时，CSS 只负责单个词的收尾。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--stream-gap` | 60ms | 相邻两个词开始的时间差 |
| `--stream-fade` | 350ms | 单个词从模糊到清晰、从透明到不透明的时长 |
| `--stream-blur` | 1px | 起始模糊半径，收敛到 0 |
| `--stream-ease` | cubic-bezier(0.22, 1, 0.36, 1) | `opacity` 与 `filter` 两条过渡共用的缓动 |
| `.is-in` | 类名 | 单词语句的落定点：`opacity: 1` 加 `blur(0)` |

## 怎么用

1. 段落容器写 `class="t-stream"`，正文按正常文本放进去。
2. 脚本按空白切词，每个词包一层 `span.t-stream-w`；空格留在 span 外面，避免相邻两个词被粘在一起。
3. 首次播放：逐词加 `.is-in`，间隔 `--stream-gap`。
4. 重放：所有 span 先设 `transition: none` 并移除 `.is-in`，强制回流，恢复过渡，再逐个加回。
5. `prefers-reduced-motion: reduce` 下过渡与 `filter` 被关掉，`opacity` 强制为 1，文字一次性全部可见。

## 什么时候别用

长段落不合适，词的个数乘以 `--stream-gap` 就是总时长，一段长文要等到最后才读完，中间还会一直有词在动。需要精确阅读的内容（代码、表格、术语密集的文档）也别用：模糊到清晰的过程中字形短暂不可辨，切词还会打乱对齐。

## 注意

- reduced-motion 里的 `opacity: 1 !important` 是保命的。少了它，初始的 `opacity: 0` 会让整段文字在关掉动效后彻底消失。
- 每个词一个 span，文本被切碎，复制和选中的粒度变细，读屏也会在 span 边界停顿。
- 过渡是逐词的 `filter`，词多时同时跑的渲染任务也多；原文没有给 `.t-stream-w` 加 `will-change`，不要自己在几百个词上加。
- 重放时若只移除 `.is-in` 而不先停掉过渡，文字会带着 350ms 淡出往回跑，看起来像在倒退生成。
- 切词只能在文本节点上做。句子里有链接、加粗或行内代码时，跨元素切词会把标签拆坏，这些词要么整体当一个词，要么跳过不切。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Streaming text */

/*
  Usage:
    <div class="t-stream">Your streamed paragraph…</div>

  JS wraps each word in a .t-stream-w span; spans rest visible.
  To replay the stream: wipe every span with transition: none,
  force one reflow, restore the transition, then add .is-in word
  by word every --stream-gap — each word resolves through
  opacity + a small blur over --stream-fade.
*/

:root {
  --stream-gap: 60ms;
  --stream-fade: 350ms;
  --stream-blur: 1px;
  --stream-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-stream-w {
  opacity: 0;
  filter: blur(var(--stream-blur));
  transition:
    opacity var(--stream-fade) var(--stream-ease),
    filter var(--stream-fade) var(--stream-ease);
}
.t-stream-w.is-in {
  opacity: 1;
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .t-stream-w { transition: none !important; filter: none !important; opacity: 1 !important; }
}
```
