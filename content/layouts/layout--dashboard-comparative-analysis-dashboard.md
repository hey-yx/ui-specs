---
title: "版型 · Comparative Analysis Dashboard 对比分析"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/styles.csv
section: layouts
tag: "规范"
fetched: 2026-11-02
status: full
id: layouts-34
publisher: "ui-ux-pro-max 版型库"
---

# 版型 · Comparative Analysis Dashboard 对比分析

> 来源：[ui-ux-pro-max-skill styles.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/styles.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）。
---

仪表盘版型：后台与数据面板怎么切区块。和落地页版型不同，这里先定「要看什么、多快刷新、谁能操作」，再排区块。

两个对象或两个时间段并排比：差异要能直接读出来，别让读者自己算。同比环比要标明基准期。

## 区块顺序

1. 对比维度选择
2. 双组指标对照
3. 侧栏 + 对比图表

## 设计决策

- **配色策略**：主色 #334155，强调色 #64748b（取自同款风格 Comparative Analysis Dashboard）
- **质感与圆角**：8px 圆角，0 2px 8px rgba(0,0,0,.08)
- **适合**：Period-over-period reporting, A/B test dashboards, market comparison, competitive analysis, regional performance
- **不适合**：Single metric dashboards, future projections (use forecasting), real-time only (no historical)
- **可访问性代价**：risk:low|requires:contrast-text-4.5,keyboard,visible-focus,reduced-motion
- **性能代价**：cost:low|drivers:none
- **关键词**：Side-by-side comparisons, period-over-period metrics, A/B test results, regional comparisons, performance benchmarks

## 版型线框

下面是这一版型的低保真结构图。只表达区块怎么排，不表达视觉风格。

<div style="border:1px solid #d5d9df;border-radius:6px;background:#fff;padding:12px;max-width:520px;margin:0 auto"><div style="border:1px solid rgba(0,0,0,.07);border-radius:8px;background:#f7f8fa;padding:8px 10px;min-height:44px;margin-bottom:6px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">对比维度选择</span><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:6px"><div style="height:16px;border-radius:3px;background:#e2e6ec"></div><div style="height:16px;border-radius:3px;background:#e2e6ec"></div><div style="height:16px;border-radius:3px;background:#e2e6ec"></div><div style="height:16px;border-radius:3px;background:#e2e6ec"></div></div></div><div style="border:1px solid rgba(0,0,0,.07);border-radius:8px;background:#f7f8fa;padding:8px 10px;min-height:44px;margin-bottom:6px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">双组指标对照</span><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px"><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #64748b"></div><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #64748b"></div><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #64748b"></div><div style="height:30px;border-radius:4px;background:#e6eaef;border-left:3px solid #64748b"></div></div></div><div style="border:1px solid rgba(0,0,0,.07);border-radius:8px;background:#f7f8fa;padding:8px 10px;min-height:44px;margin-bottom:6px"><span style="font:600 10px/1.2 ui-monospace,monospace;color:#5b6472;letter-spacing:.04em">侧栏 + 对比图表</span><div style="display:grid;grid-template-columns:64px 1fr;gap:6px;margin-top:6px;align-items:stretch"><div style="display:flex;flex-direction:column;gap:4px"><div style="height:12px;border-radius:2px;background:#dde2e8"></div><div style="height:12px;border-radius:2px;background:#dde2e8"></div><div style="height:12px;border-radius:2px;background:#dde2e8"></div><div style="height:12px;border-radius:2px;background:#dde2e8"></div></div><div style="display:flex;flex-direction:column;gap:6px"><div style="height:30px;border-radius:3px;background:#e9edf2;position:relative"><div style="position:absolute;left:6%;right:6%;bottom:4px;height:14px;border-bottom:2px solid #64748b"></div></div><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:3px"><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div><div style="height:7px;border-radius:2px;background:#e2e6ec"></div></div></div></div></div></div>

<details>
<summary>文字版结构（给 AI 直接读）</summary>

```
┌────────────────────────────────────────┐
│ 对比维度选择                           │
│ ▒▒▒▒▒▒▒▒▒ ░░░░░░░░░ ░░░░░░░░░ ░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 双组指标对照                           │
│ ▒▒▒▒▒▒▒▒▒ ░░░░░░░░░ ░░░░░░░░░ ░░░░░░░░░ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ 侧栏 + 对比图表                        │
│ ▒▒▒▒  │░░░░░░░░░░░░░░░░░░░ │
│ ▒▒▒▒  │░░░░░░░░░░░░░░░░░░░ │
│ ▒▒▒▒  │░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────┘
```

</details>

