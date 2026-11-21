---
title: "版型 · Marketplace / Directory"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv
section: layouts
tag: "规范"
fetched: 2026-11-02
status: full
id: layouts-20
publisher: "ui-ux-pro-max 版型库"
---

# 版型 · Marketplace / Directory

> 来源：[ui-ux-pro-max-skill landing.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）。
---

落地页版型：把页面切成哪几个区块、区块按什么顺序排、CTA 放哪。选版型先看任务（卖什么、给谁看、要什么动作），再套区块顺序。

## 版型线框

下面是这一版型的低保真结构图。只表达区块怎么排，不表达视觉风格；配色与质感看 `content/styles/` 对应文章。

<div style="border:1px solid #d5d9df;border-radius:6px;background:#fff;padding:12px;max-width:520px;margin:0 auto"><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:108px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">主视觉</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:70%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:34%"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:44px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">段落</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:76px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">功能卡片组</span><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:6px"><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i></div></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:44px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">段落</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:64px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">行动号召</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:70%"></i></div></div></div>

<details>
<summary>文字版结构（给 AI 直接读）</summary>

```
┌────────────────────────────────────────┐
│ 主视觉                                 │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 段落                                   │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 功能卡片组                             │
│ ▒▒▒▒▒▒▒▒▒▒▒▒ ░░░░░░░░░░░░ ░░░░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 段落                                   │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 行动号召                               │
│ ······································ │
└────────────────────────────────────────┘
```

</details>

## 区块顺序

1. Hero (Search focused)
2. Categories
3. Featured Listings
4. Trust/Safety
5. CTA (Become a host/seller)

## 设计决策

- **CTA 位置**：Hero Search Bar + Navbar 'List your item'
- **配色策略**：Search: High contrast. Categories: Visual icons. Trust: Blue/Green.
- **推荐效果与动效**：Search autocomplete animation, map hover pins, card carousel
- **转化优化要点**：Search is the primary CTA. Reduce friction with useful suggestions. For featured-listing carousels, provide previous/next and play/pause buttons, full keyboard access, and a single-pointer alternative to swiping; stop rotation on focus, hover, offscreen/hidden, or reduced motion and render the selected listing as the static final state.
- **关键词**：marketplace, directory, search, listing, carousel accessibility, keyboard accessible carousel, pause auto rotation, reduced motion final state, marketplace carousel, keyboard carousel controls
