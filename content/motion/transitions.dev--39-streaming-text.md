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

## Overview

Words resolve through a soft cross-blur

## CSS

Namespaced classes and motion tokens you can retune. The reduced-motion guard ships with the snippet.

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
