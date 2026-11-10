---
title: "Ant Design · Token · Seed Tokens 基础取值"
source: https://github.com/ant-design/ant-design/blob/master/components/theme/themes/seed.ts
section: tokens
tag: "取值快照"
fetched: 2026-11-08
status: partial
id: token-ant-design
publisher: "Ant Design"
known: partial
---

# Ant Design · Token · Seed Tokens 基础取值

> 从官方 Ant Design seed token 源摘出的取值，不是官方规范全文；用于核对具体数值，不构成选型方案。抓取 2026-11-08。

## 品牌与语义色

| Token | Value |
| --- | --- |
| colorPrimary | `#1677ff` |
| colorSuccess | `#52c41a` |
| colorWarning | `#faad14` |
| colorError | `#ff4d4f` |
| colorInfo | `#1677ff` |

预设色：blue `#1677FF`、purple `#722ED1`、cyan `#13C2C2`、green `#52C41A`、magenta `#EB2F96`、red `#F5222D`、orange `#FA8C16`、yellow `#FADB14`、volcano `#FA541C`、geekblue `#2F54EB`、gold `#FAAD14`、lime `#A0D911`。来源：[`seed.ts`](https://github.com/ant-design/ant-design/blob/master/components/theme/themes/seed.ts)。

## 字体、尺寸与圆角

| Token | Value |
| --- | --- |
| fontSize | `14` |
| lineWidth | `1` |
| borderRadius | `6` |
| sizeUnit | `4` |
| sizeStep | `4` |
| controlHeight | `32` |
| sizePopupArrow | `16` |
| motionUnit | `0.1` |

`colorLink` 和 `colorTextBase` 在 seed 中为空字符串，由主题派生。来源同上。

## 动效曲线

| Token | Value |
| --- | --- |
| motionEaseOut | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| motionEaseInOut | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| motionEaseOutCirc | `cubic-bezier(0.08, 0.82, 0.17, 1)` |
| motionEaseInOutCirc | `cubic-bezier(0.78, 0.14, 0.15, 0.86)` |
| motionEaseOutBack | `cubic-bezier(0.12, 0.4, 0.29, 1.46)` |
| motionEaseInBack | `cubic-bezier(0.71, -0.46, 0.88, 0.6)` |

来源同上。`motionUnit` 原文为 `0.1`，结合 Ant Design 的时长 token 使用时按秒解释；不要在未核对具体组件的情况下把它当毫秒。
