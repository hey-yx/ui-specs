---
title: "版型 · Video-First Hero"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv
section: layouts
tag: "规范"
fetched: 2026-11-02
status: full
id: layouts-31
publisher: "ui-ux-pro-max 版型库"
---

# 版型 · Video-First Hero

> 来源：[ui-ux-pro-max-skill landing.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）。
---

落地页版型：把页面切成哪几个区块、区块按什么顺序排、CTA 放哪。选版型先看任务（卖什么、给谁看、要什么动作），再套区块顺序。

## 版型线框

下面是这一版型的低保真结构图。只表达区块怎么排，不表达视觉风格；配色与质感看 `content/styles/` 对应文章。

<div style="border:1px solid #d5d9df;border-radius:6px;background:#fff;padding:12px;max-width:520px;margin:0 auto"><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:112px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">产品演示</span><i style="display:block;height:34px;border-radius:3px;background:#e4e7eb;margin-top:6px"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:76px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">功能卡片组</span><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:6px"><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i></div></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:76px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">功能卡片组</span><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:6px"><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i></div></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:64px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">行动号召</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:70%"></i></div></div></div>

<details>
<summary>文字版结构（给 AI 直接读）</summary>

```
┌────────────────────────────────────────┐
│ 产品演示                               │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 功能卡片组                             │
│ ▒▒▒▒▒▒▒▒▒▒▒▒ ░░░░░░░░░░░░ ░░░░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 功能卡片组                             │
│ ▒▒▒▒▒▒▒▒▒▒▒▒ ░░░░░░░░░░░░ ░░░░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 行动号召                               │
│ ······································ │
└────────────────────────────────────────┘
```

</details>

## 区块顺序

1. Hero with video background
2. Key features overlay
3. Benefits section
4. CTA

## 设计决策

- **CTA 位置**：Overlay on video (center/bottom) + Bottom section
- **配色策略**：Use an overlay strong enough for text contrast. Brand accent for CTA. Light text only when the measured contrast passes.
- **推荐效果与动效**：Video autoplay muted, parallax scroll, text fade-in on scroll
- **转化优化要点**：Use video only when it demonstrates value better than static media. Add captions for accessibility. Compress video for performance. Provide captions and a visible pause control; use a static poster when reduced motion is requested. Pause video when offscreen or hidden; the reduced-motion poster must preserve the final message and CTA.
- **关键词**：video, hero, media, visual, engaging
