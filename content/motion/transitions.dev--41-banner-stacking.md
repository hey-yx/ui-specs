---
title: "组件动效 · 横幅堆叠（Banner stacking）"
source: https://transitions.dev/transitions/banner-stacking/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-41-banner-stacking
publisher: "Transitions.dev"
---

# 组件动效 · 横幅堆叠（Banner stacking）

> 来源：[Transitions.dev](https://transitions.dev/transitions/banner-stacking/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/banner-stacking/index.html`。

## 它解决什么

多条横幅或 toast 接连到达时，平铺会把页面往下推、遮住内容，也让人分不清哪条是新的。这个动效把横幅叠成三层纸堆：最新的在最上面且完全清晰，更早的往下退、缩小、变淡，超过三层才真正移除。三条以内的信息同时可见，页面高度不变。

## 动效怎么构成

`.t-stack` 只提供定位上下文，`position: relative`。每条 `.t-stack-banner` 都是 `position: absolute; left: 0; bottom: 0`，全部压在同一位置，靠 `data-depth` 的 `0`、`1`、`2` 区分层级和形变，`z-index` 显式写成 `3`、`2`、`1`，不依赖 DOM 顺序。

基础规则里的 `transform-origin: 50% 50%` 是为了让新横幅从中心缩放进来，像 toast 弹入。退后的层改用 `50% 100%` 底边为原点，缩小后底边不动、上沿往下压，看上去才是被后面压住。原文注释说明这个切换是安全的，因为切换发生时变换正好是单位变换。

三档形变：depth `0` 是 `translateY(0) scale(1)` 配 `opacity: 1`；depth `1` 是 `translateY(calc(var(--stack-peek) * -1))` 配 `scale(calc(1 - var(--stack-depth-scale)))`，透明度 `calc(1 - var(--stack-depth-fade))`；depth `2` 把 peek 乘 `2`、缩放再减一份 `0.06`、透明度乘 `1.6`。

进场靠 `.is-enter`：`transition: none`，横幅被直接摆到下方 `translateY(var(--stack-rise))`、缩到 `scale(var(--stack-scale))`、透明 `0`、加 `blur(var(--stack-blur))`。JS 追加新横幅后，立刻把每条老横幅的 depth 各退一格，强制一次 reflow，再在同一个任务里移除 `.is-enter`，过渡才会真的跑起来。原文特意说明这里跳过 rAF，因为帧时钟被节流时 rAF 回调会推迟，进场就漏掉了。

退场是 `.is-leaving`：`z-index: 0`，原点切到底边，位移 `calc(var(--stack-peek) * -3)`、缩放再少一份、透明度 `0`、加模糊，时长换成 `--stack-close`。第四条进来时，最旧的那条才拿到这个类，节点在 `--stack-close` 之后删除。

悬停展开不写在 `:hover` 上，而是一个 `.is-spread` 类。原因在注释里：展开后横幅之间出现空隙，空隙不属于任何元素，`:hover` 会在指针穿过缝隙时断掉。JS 用几何判断代替，指针落在折叠堆叠框内就加类，一直保持到指针离开展开后更高的那一列，范围是 `(stack height + gap) * 2` 以上。展开时 depth `1` 与 depth `2` 的透明度回到 `1`，位移变成 `calc((100% + var(--stack-spread-gap)) * -1)` 与 `* -2`，缩放回到 `1`。这里的 `100%` 指横幅自身高度，所以每条正好上移一个身位再加间隙。

两个容易被忽略的细节：`filter: blur(0)` 显式写 `0` 而不是留空，因为 blur 到 none 的插值不可靠，跨状态时会跳一下；`will-change: transform, opacity, filter` 提前把这三层提到合成层。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--stack-open` | `350ms` | 进场与深度切换的过渡时长 |
| `--stack-close` | `250ms` | 退场过渡时长，也是删除节点的等待时间 |
| `--stack-rise` | `80px` | 新横幅进场时的起始下移量 |
| `--stack-blur` | `2px` | 进场与退场时的模糊量 |
| `--stack-scale` | `0.97` | 新横幅进场时的起始缩放 |
| `--stack-peek` | `12px` | 每退一层上移的距离 |
| `--stack-spread-gap` | `8px` | 展开时相邻横幅的空隙 |
| `--stack-depth-scale` | `0.06` | 每退一层缩小的比例 |
| `--stack-depth-fade` | `0.4` | 退一层的透明度衰减基数 |
| `--stack-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | 全部过渡共用的曲线 |
| `data-depth="0|1|2"` | `z-index: 3|2|1` | 层级与形变档位 |
| `.is-enter` | `transition: none` | 进场起始态，与 reflow 配合 |
| `.is-leaving` | `z-index: 0` | 退场态，使用 `--stack-close` |
| `.is-spread`（在 `.t-stack` 上） | 透明度回 `1`、缩放回 `1` | 悬停展开整堆 |

## 怎么用

1. 搭容器：`.t-stack` 做定位上下文，横幅都写 `data-depth`，全部绝对定位在同一角。
2. 进场三步走：新横幅带 `.is-enter` 且 `data-depth="0"`，把已有横幅的 depth 各加一，强制一次 reflow 后移除 `.is-enter`。
3. 处理溢出：新横幅使层数超过三时，给最旧的一条加 `.is-leaving`，等 `--stack-close` 结束再删节点，别提前移除。
4. 悬停展开：在容器上按指针位置切 `.is-spread`，用几何范围判断，不要监听单条横幅的 hover。
5. reduced-motion：原文的守卫把 `transition`、`transform`、`filter` 全部清成 none，三层退回同一位置，这条路径需要自己配一个静态布局，例如改成纵向列表。

## 什么时候别用

只有一条横幅的场景不需要这套机制，淡入淡出就够，多出来的层级和 JS 编排只会增加出错面。消息需要逐条阅读、逐条确认或长时间停留时，堆叠会把两条藏在下面，应该换成常驻列表或收件箱式的侧栏。

## 注意

原文的说明和 CSS 里没有出现 `role`、`aria-live` 或焦点处理。新横幅进入 DOM 不会自动播报，需要自己在容器上补 `aria-live`；退到 depth `1`、`2` 的横幅仍在文档流里可聚焦，如果里面有按钮，要自己把它们移出 tab 序列。三层的透明度是算出来的，不是常量，改 `--stack-depth-fade` 时要留意 depth `2` 乘的是 `1.6`，过大会让最底层几乎不可见。`filter: blur()` 与 `will-change` 都会占用合成资源，同屏大量横幅时不要照搬。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Banner stacking */

/*
  Usage:
    <div class="t-stack">
      <div class="t-stack-banner" data-depth="0">…</div>
    </div>

  Sonner-style. Append a new banner with .is-enter + data-depth
  0, step every older banner's data-depth one back, force one
  reflow, then remove .is-enter in the same task (a rAF hop is
  skipped when the frame clock is throttled). A fourth banner
  gets .is-leaving; remove it after --stack-close. Hover spread
  is geometry in JS: pointer inside the collapsed stack box adds
  .is-spread, and it holds until the pointer leaves the taller
  spread column ((stack height + gap) * 2 above).
*/

:root {
  --stack-open: 350ms;
  --stack-close: 250ms;
  --stack-rise: 80px;
  --stack-blur: 2px;
  --stack-scale: 0.97;
  --stack-peek: 12px;
  --stack-spread-gap: 8px;
  --stack-depth-scale: 0.06;
  --stack-depth-fade: 0.4;
  --stack-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-stack { position: relative; }
.t-stack-banner {
  position: absolute;
  left: 0;
  bottom: 0;
  /* Centre origin so an arriving banner scales like a toast; the
     push-back depths switch to the bottom edge, which they can do
     freely because the swap happens at identity. */
  transform-origin: 50% 50%;
  /* Explicit blur(0) rather than an unset filter — blur → none is
     not reliably interpolated, and the cross-blur would snap. */
  filter: blur(0);
  will-change: transform, opacity, filter;
  transition:
    transform var(--stack-open) var(--stack-ease),
    opacity var(--stack-open) var(--stack-ease),
    filter var(--stack-open) var(--stack-ease);
}
.t-stack-banner[data-depth="0"] {
  z-index: 3;
  transform: translateY(0) scale(1);
  opacity: 1;
}
.t-stack-banner[data-depth="1"] {
  z-index: 2;
  transform-origin: 50% 100%;
  transform: translateY(calc(var(--stack-peek) * -1))
             scale(calc(1 - var(--stack-depth-scale)));
  opacity: calc(1 - var(--stack-depth-fade));
}
.t-stack-banner[data-depth="2"] {
  z-index: 1;
  transform-origin: 50% 100%;
  transform: translateY(calc(var(--stack-peek) * -2))
             scale(calc(1 - var(--stack-depth-scale) * 2));
  opacity: calc(1 - var(--stack-depth-fade) * 1.6);
}
/* Spread: newest stays put, older ones climb one banner height
   each (100% = the banner's own height). Driven by a class, not
   :hover — the gaps between spread banners belong to no element. */
.t-stack.is-spread .t-stack-banner[data-depth="1"],
.t-stack.is-spread .t-stack-banner[data-depth="2"] { opacity: 1; }
.t-stack.is-spread .t-stack-banner[data-depth="1"] {
  transform: translateY(calc((100% + var(--stack-spread-gap)) * -1)) scale(1);
}
.t-stack.is-spread .t-stack-banner[data-depth="2"] {
  transform: translateY(calc((100% + var(--stack-spread-gap)) * -2)) scale(1);
}
.t-stack-banner.is-enter {
  transition: none;
  transform: translateY(var(--stack-rise)) scale(var(--stack-scale));
  opacity: 0;
  filter: blur(var(--stack-blur));
}
.t-stack-banner.is-leaving {
  z-index: 0;
  transform-origin: 50% 100%;
  transform: translateY(calc(var(--stack-peek) * -3))
             scale(calc(1 - var(--stack-depth-scale) * 3));
  opacity: 0;
  filter: blur(var(--stack-blur));
  transition:
    transform var(--stack-close) var(--stack-ease),
    opacity var(--stack-close) var(--stack-ease),
    filter var(--stack-close) var(--stack-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-stack-banner { transition: none !important; transform: none !important; filter: none !important; }
}
```
