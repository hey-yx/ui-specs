---
title: "组件动效 · 推理流（Reasoning stream）"
source: https://transitions.dev/transitions/reasoning-stream/
section: motion
tag: "组件动效"
fetched: 2026-11-08
status: full
id: motion-transitions-38-reasoning-stream
publisher: "Transitions.dev"
---

# 组件动效 · 推理流（Reasoning stream）

> 来源：[Transitions.dev](https://transitions.dev/transitions/reasoning-stream/)（Transitions.dev License，Copyright (c) 2026 Jakub Antalik / Transitions.dev；可商用、可修改、可随产品发布，不得把 transitions 库本身作为竞品再分发），原文文件 `transitions/reasoning-stream/index.html`。

## 它解决什么

Agent 的推理过程常常很长，整段塞进卡片会把布局撑破，让用户自己拖滚动条又要求他一直盯着。这个动效把卡片变成固定高度的取景框，每 840ms 向上推进两行，上下各留一段淡出。看起来推理在自己往下走，用户不用管滚动条，注意力始终落在最新那两行。

## 动效怎么构成

四层，各管一件事：

- `.t-reason`，外框，`position: relative` 加 `overflow: hidden`。
- `.t-reason-viewport`，绝对定位铺满外框，`overflow: hidden`，边缘淡出靠它身上的 `mask-image`。
- `.t-reason-scroll`，被平移的那层，`position: absolute`、`left: 0`、`right: 0`、`transform: translateY(0)`、`will-change: transform`。
- `.t-reason-text`，装正文，脚本会把它克隆一份。

分成外框和视口两层，是因为两者职责不同：外框决定卡片占多大，视口决定哪一块可见。遮罩挂在视口上而不是卡片上，淡出就不会被卡片的圆角、内边距和背景色干扰。

真正在动的只有 `.t-reason-scroll` 的 `transform`。脚本在元素上内联写 `transition: transform var(--reason-step) var(--reason-ease)`，再把 `transform` 改成 `translateY(-offset px)`，`--reason-step` 是这一步的时长。走完一步后如果偏移已经超过一份拷贝的高度，就把 offset 减去这份高度、用 `transition: none` 直接写回去。循环因此看不到接缝，也不会有一帧空白。

遮罩是 `linear-gradient(transparent 0, black var(--reason-fade), black calc(100% - var(--reason-fade)), transparent 100%)`，上下各 `--reason-fade`，`-webkit-mask-image` 与 `mask-image` 各写一遍。每次推进的行数由 `--reason-lines` 决定，脚本要把它换算成像素偏移，所以行高得在这段正文上可测，别用百分比行高加大范围字号缩放。

`840ms` 的间隔里只有 `500ms` 在动，剩下的时间是停留，用来让人看清刚进来的两行。想加快只能同时压 `--reason-hold`；只压 `--reason-step` 会让每次位移变得生硬，节奏还在那里，动作却更急了。

## 关键参数

| 变量或类 | 值 | 作用 |
| --- | --- | --- |
| `--reason-hold` | 840ms | 两步之间的停留时间 |
| `--reason-step` | 500ms | 一次平移的时长，写在脚本内联的 transition 里 |
| `--reason-lines` | 2 | 每次向上推进的行数 |
| `--reason-fade` | 28px | 上下淡出的高度 |
| `--reason-ease` | cubic-bezier(0.22, 1, 0.36, 1) | 平移的缓动，起步快收尾慢 |
| `mask-image` | linear-gradient(transparent 0, black var(--reason-fade), black calc(100% - var(--reason-fade)), transparent 100%) | 上下两端渐隐，中间完全不透明 |

## 怎么用

1. 四层结构照搬，`.t-reason` 给固定高度并 `overflow: hidden`，视口绝对定位铺满它。
2. 正文写进 `.t-reason-text`，内容要比容器高，否则没有可推进的余量。
3. 脚本克隆一份 `.t-reason-text` 接在后面，作为循环用的第二份拷贝。
4. 每个 `--reason-hold` 触发一步：设 `transition` 为 `transform var(--reason-step) var(--reason-ease)`，把 `transform` 写成 `translateY(-offset px)`，offset 按 `--reason-lines` 行的高度累加。
5. 一步结束且 offset 达到一份拷贝高度时，先 `transition: none`，把 transform 写回落后的偏移，下一帧再恢复过渡，接缝就藏在这一下里。
6. `prefers-reduced-motion: reduce` 下 `.t-reason-scroll` 的过渡和位移都被 `none !important` 取消，内容停在原位。

## 什么时候别用

用户需要回看、复制或逐行核对推理时，自动前进会一直把文字推走，停在半路还会被遮罩糊掉，这种情况给带滚动条的普通容器或可折叠日志。卡片高度只有三四行时也不合适，两行一推等于半屏一跳，视线跟不上。推理内容是给用户做判断依据的时候同样不适合，边读边动会让人不敢确认自己看到的是哪一段。

## 注意

- 淡出走 `mask-image` 而不是盖在文字上的渐变色块：遮罩只改透明度，正文颜色、选中和复制都不受影响，卡片背景是什么颜色都能用。
- `-webkit-mask-image` 与 `mask-image` 必须同时写，只写后者在部分 Safari 上淡出不生效。
- 接缝只能靠「克隆一份加 `transition: none` 改偏移」处理，直接让 transform 归零会看到一次跳。
- 原文这段 CSS 没有给克隆层任何 `aria-hidden`，重复的那份会被读屏念第二遍，落地时自己补上。
- `will-change: transform` 一直挂着，卡片不用时要停掉推进循环，不要只把容器隐藏。

## 源代码

> 以下片段取自原文，可直接用；参数说明见上表。

### CSS

```css
/* Transitions.dev — Reasoning stream */

/*
  Usage:
    <div class="t-reason">
      <div class="t-reason-viewport">
        <div class="t-reason-scroll">
          <div class="t-reason-text">
            <p>…transcript…</p>
          </div>
        </div>
      </div>
    </div>

  The card clips a tall transcript; JS steps the scroll up
  --reason-lines lines every --reason-hold and clones
  .t-reason-text once so the offset can wrap by one copy's
  height mid-hold — the loop never shows a jump. The edge fades
  are a mask on the viewport (not gradients painted over the
  text), so the card background can be anything.
*/

:root {
  --reason-hold: 840ms;
  --reason-step: 500ms;
  --reason-lines: 2;
  --reason-fade: 28px;
  --reason-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-reason { position: relative; overflow: hidden; }
.t-reason-viewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
  /* Edge fades are a mask, not painted gradients, so the card
     background can be anything. */
  -webkit-mask-image: linear-gradient(
    transparent 0,
    black var(--reason-fade),
    black calc(100% - var(--reason-fade)),
    transparent 100%);
  mask-image: linear-gradient(
    transparent 0,
    black var(--reason-fade),
    black calc(100% - var(--reason-fade)),
    transparent 100%);
}
.t-reason-scroll {
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(0);
  will-change: transform;
}
/* JS drives the tween:
     scroll.style.transition = 'transform var(--reason-step) var(--reason-ease)';
     scroll.style.transform  = 'translateY(-' + offset + 'px)';
   and wraps the offset by one copy's height with transition: none. */

@media (prefers-reduced-motion: reduce) {
  .t-reason-scroll { transition: none !important; transform: none !important; }
}
```
