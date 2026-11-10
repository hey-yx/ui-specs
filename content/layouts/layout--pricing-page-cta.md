---
title: "版型 · Pricing Page + CTA"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv
section: layouts
tag: "规范"
fetched: 2026-11-02
status: full
id: layouts-25
publisher: "ui-ux-pro-max 版型库"
---

# 版型 · Pricing Page + CTA

> 来源：[ui-ux-pro-max-skill landing.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）。
---

落地页版型：把页面切成哪几个区块、区块按什么顺序排、CTA 放哪。选版型先看任务（卖什么、给谁看、要什么动作），再套区块顺序。

## 版型线框

下面是这一版型的低保真结构图。只表达区块怎么排，不表达视觉风格；配色与质感看 `content/styles/` 对应文章。

<div style="border:1px solid #d5d9df;border-radius:6px;background:#fff;padding:12px;max-width:520px;margin:0 auto"><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:92px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">价格卡</span><i style="display:block;height:34px;border-radius:3px;background:#e4e7eb;margin-top:6px"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:92px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">价格卡</span><i style="display:block;height:34px;border-radius:3px;background:#e4e7eb;margin-top:6px"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:92px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">对比表</span><i style="display:block;height:34px;border-radius:3px;background:#e4e7eb;margin-top:6px"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:76px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">常见问题</span><i style="display:block;height:34px;border-radius:3px;background:#e4e7eb;margin-top:6px"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:64px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">行动号召</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:70%"></i></div></div></div>

<details>
<summary>文字版结构（给 AI 直接读）</summary>

```
┌────────────────────────────────────────┐
│ 价格卡                                 │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 价格卡                                 │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 对比表                                 │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 常见问题                               │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 行动号召                               │
│ ······································ │
└────────────────────────────────────────┘
```

</details>

## 区块顺序

1. Hero (pricing headline)
2. Price comparison cards
3. Feature comparison table
4. FAQ section
5. Final CTA

## 设计决策

- **CTA 位置**：Each card: CTA button. Sticky CTA in nav
- **配色策略**：Free: Grey, Starter: Blue, Pro: Green/Gold, Enterprise: Dark. Cards: 1px border, shadow
- **推荐效果与动效**：Price toggle animation (monthly/yearly), card comparison highlight, FAQ accordion open/close
- **转化优化要点**：Highlight the plan that matches the intended audience and show actual annual savings transparently. Use FAQs to address concerns.
- **关键词**：pricing, plans, tiers, comparison, cta
