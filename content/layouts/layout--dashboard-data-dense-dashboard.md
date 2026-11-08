---
title: "版型 · Data-Dense Dashboard 数据密集型仪表盘"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/styles.csv
section: layouts
tag: "规范"
fetched: 2026-11-02
status: full
id: layouts-35
publisher: "ui-ux-pro-max 版型库"
---

# 版型 · Data-Dense Dashboard 数据密集型仪表盘

> 来源：[ui-ux-pro-max-skill styles.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/styles.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）。
---

仪表盘版型：后台与数据面板怎么切区块。和落地页版型不同，这里先定「要看什么、多快刷新、谁能操作」，再排区块。

一屏塞进最多指标：筛选条常驻顶部，KPI 卡横排，主图与明细表并排或上下叠。适合运营、客服、财务这类需要一眼看完当天数据的人。

## 区块顺序

1. 全局筛选栏
2. KPI 指标行
3. 侧栏 + 主内容区

## 设计决策

- **配色策略**：主色 #F5F5F5，强调色 #22C55E（配色方向，具体色值按项目基准规范取）
- **质感与圆角**：8px 圆角，0 2px 8px rgba(0,0,0,.08)
- **适合**：Business intelligence dashboards, financial analytics, enterprise reporting, operational dashboards, data warehousing
- **不适合**：Marketing dashboards, consumer-facing analytics, simple reporting
- **可访问性代价**：risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **性能代价**：cost:low|drivers:none
- **关键词**：Multiple charts/widgets, data tables, KPI cards, minimal padding, grid layout, space-efficient, maximum data visibility

## 版型线框

下面是这一版型的低保真结构图。只表达区块怎么排，不表达视觉风格。

<div style="border:1px solid #d5d9df;border-radius:6px;background:#fff;padding:12px;max-width:520px;margin:0 auto"><div style="border:1px solid rgba(0,0,0,.07);border-radius:8px;background:#f7f8fa;padding:8px 10px;min-height:44px;margin-bottom:6px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">全局筛选栏</span><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:6px"><div style="height:16px;border-radius:3px;background:#e2e6ec"></div><div style="height:16px;border-radius:3px;background:#e2e6ec"></div><div style="height:16px;border-radius:3px;background:#e2e6ec"></div><div style="height:16px;border-radius:3px;background:#e2e6ec"></div></div></div><div style="border:1px solid rgba(0,0,0,.07);border-radius:8px;background:#f7f8fa;padding:8px 10px;min-height:44px;margin-bottom:6px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">KPI 指标行</span><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px"><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #22C55E"></div><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #22C55E"></div><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #22C55E"></div><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #22C55E"></div></div></div><div style="border:1px solid rgba(0,0,0,.07);border-radius:8px;background:#f7f8fa;padding:8px 10px;min-height:44px;margin-bottom:6px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">侧栏 + 主内容区</span><div style="display:grid;grid-template-columns:64px 1fr;gap:6px;margin-top:6px;align-items:stretch"><div style="display:flex;flex-direction:column;gap:4px"><div style="height:12px;border-radius:2px;background:#dde2e8"></div><div style="height:12px;border-radius:2px;background:#dde2e8"></div><div style="height:12px;border-radius:2px;background:#dde2e8"></div><div style="height:12px;border-radius:2px;background:#dde2e8"></div></div><div style="display:flex;flex-direction:column;gap:6px"><div style="height:30px;border-radius:3px;background:#e9edf2;position:relative"><div style="position:absolute;left:6%;right:6%;bottom:4px;height:14px;border-bottom:2px solid #22C55E"></div></div><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:3px"><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div></div></div></div></div></div>

<details>
<summary>文字版结构（给 AI 直接读）</summary>

```
┌────────────────────────────────────────┐
│ 全局筛选栏                             │
│ ▒▒▒▒▒▒▒▒▒ ░░░░░░░░░ ░░░░░░░░░ ░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ KPI 指标行                             │
│ ▒▒▒▒▒▒▒▒▒ ░░░░░░░░░ ░░░░░░░░░ ░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 侧栏 + 主内容区                        │
│ ▒▒▒▒  │░░░░░░░░░░░░░░░░░░░ │
│ ▒▒▒▒  │░░░░░░░░░░░░░░░░░░░ │
│ ▒▒▒▒  │░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────┘
```

</details>

