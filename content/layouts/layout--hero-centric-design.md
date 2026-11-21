---
title: "版型 · Hero-Centric Design"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv
section: layouts
tag: "规范"
fetched: 2026-11-02
status: full
id: layouts-13
publisher: "ui-ux-pro-max 版型库"
---

# 版型 · Hero-Centric Design

> 来源：[ui-ux-pro-max-skill landing.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/landing.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）。
---

落地页版型：把页面切成哪几个区块、区块按什么顺序排、CTA 放哪。选版型先看任务（卖什么、给谁看、要什么动作），再套区块顺序。

## 版型线框

下面是这一版型的低保真结构图。只表达区块怎么排，不表达视觉风格；配色与质感看 `content/styles/` 对应文章。

<div style="border:1px solid #d5d9df;border-radius:6px;background:#fff;padding:12px;max-width:520px;margin:0 auto"><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:108px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">主视觉</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:70%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:34%"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:56px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">价值主张</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:48px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">信任标识</span><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px"><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i><i style="display:block;height:26px;border-radius:3px;background:#dfe3e8"></i></div></div></div><div style="margin:0 0 8px"><div style="border:1px solid #c2c8d0;border-radius:4px;background:#f6f7f9;padding:8px 10px;min-height:64px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">行动号召</span><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#c9ced6;width:100%"></i><i style="display:block;height:8px;margin:4px 0 0;border-radius:2px;background:#dfe3e8;width:70%"></i></div></div></div>

<details>
<summary>文字版结构（给 AI 直接读）</summary>

```
┌────────────────────────────────────────┐
│ 主视觉                                 │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 价值主张                               │
│ ······································ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 信任标识                               │
│ ▒▒▒▒▒▒▒▒▒ ░░░░░░░░░ ░░░░░░░░░ ░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 行动号召                               │
│ ······································ │
└────────────────────────────────────────┘
```

</details>

## 区块顺序

1. Full-bleed Hero (headline + visual)
2. Single value prop strip
3. Key benefit or proof
4. Primary CTA

## 设计决策

- **CTA 位置**：Hero dominant (center/bottom) + Sticky nav CTA
- **配色策略**：Hero: High-impact visual. Minimal text. Verify CTA label text against the button fill at 4.5:1 minimum; use 7:1 only for an explicit AAA normal-text target.
- **推荐效果与动效**：Hero parallax or video, CTA pulse on scroll, minimal chrome
- **转化优化要点**：One primary CTA. Let the hero dominate the initial viewport without hiding the next content cue. Use a static hero and non-pulsing CTA when reduced motion is requested; provide video controls. Pause hero media offscreen/hidden and keep the final hero message and CTA static under reduced motion.
- **关键词**：hero-centric, hero-centric design, hero-first, hero above fold
- **别名（可搜到的叫法）**：Feature-Rich Showcase + Hero-Centric|Hero-Centric + Feature-Rich|Hero-Centric Design + Feature-Rich
