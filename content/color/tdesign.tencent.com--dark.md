---
title: "TDesign · Foundation · Dark Mode 深色模式"
source: https://tdesign.tencent.com/design/dark
section: color
tag: "规范"
fetched: 2026-11-09
status: full
id: color-11
publisher: "腾讯"
---

# TDesign · Foundation · Dark Mode 深色模式

> 来源：[https://tdesign.tencent.com/design/dark](https://tdesign.tencent.com/design/dark)

---

## 概述

深色模式是一种夜间友好的颜色主题，主要侧重于 UI 界面中每个元素可读性所需的最小色彩对比度，以保证出色的阅读体验。

![深色模式起始示例](https://static.tdesign.tencent.com/assets/starter-UABtSUhJ.png)

## 原则

### 内容优先

深色模式下应优先保证内容识别度。需要确保文本内容易于阅读，而不是无缘无故的花哨。

### 阅读舒适度

尽量避免使用高饱和度的颜色，因为在较暗的表面上观看时，高饱和度颜色具有视觉“抖动”效果。相反，使用低饱和度或稍微柔和的颜色会减少人眼的视觉疲劳，保证阅读舒适性。

### 信息层级一致性

浅色模式和深色模式下转换时应该保持信息层级一致性。

### 符合 WCAG2.0 标准

依据 WCAG2.0 设计标准，文本的视觉呈现以及文本图像至少要有 1:4.5 的对比度，以确保所有文字内容清晰易读、对比度足够。

## 文字

浅色文本出现在深色背景上时，正文文字和背景的对比度至少要有 1:4.5（AA 标准）。在 TDesign 中，除了保证文字识别度之外，希望不同梯度的文字在深浅模式切换后的视觉感知也能趋于一致，所以针对转换后的透明度进行了微调。

| token | 名称 | 色值 |
| --- | --- | --- |
| @text-color-primary | 标题 | #ffffff 90% |
| @text-color-secondary | 次要文字 | #ffffff 60% |
| @text-color-placeholder | 占位符文字 | #ffffff 40% |
| @text-color-disabled | 禁用状态文字 | #ffffff 26% |

## 色彩

在 TDesign 色彩系统中，在亮色的色彩算法基础上，经过运算得到深色模式的色板。色阶的制定同样采用了 CIElab、HSL 色彩空间结合插值的方法，保证色彩变化均匀，多色之间亮度均等。

色彩中提供了 8 套常用的基础色板，每个扩展色均为 10 级色阶。

### 基础色板

| rgb(33, 116, 255) | Blue | Blue6 | #2174FF |
| --- | --- | --- | --- |
| rgb(30, 44, 96) | Blue1 | #1E2C60 |  |
| rgb(6, 46, 154) | Blue2 | #062E9A |  |
| rgb(7, 58, 181) | Blue3 | #073AB5 |  |
| rgb(8, 77, 205) | Blue4 | #084DCD |  |
| rgb(9, 87, 217) | Blue5 | #0957D9 |  |
| rgb(33, 116, 255) | Blue6 | #2174FF |  |
| rgb(71, 141, 255) | Blue7 | #478DFF |  |
| rgb(105, 161, 255) | Blue8 | #69A1FF |  |
| rgb(140, 184, 255) | Blue9 | #8CB8FF |  |
| rgb(171, 202, 255) | Blue10 | #ABCAFF |  |
| rgb(60, 177, 251) | Cyan | Cyan6 | #3CB1FB |
| --- | --- | --- | --- |
| rgb(5, 67, 125) | Cyan1 | #05437D |  |
| rgb(6, 87, 158) | Cyan2 | #06579E |  |
| rgb(8, 108, 192) | Cyan3 | #086CC0 |  |
| rgb(11, 131, 223) | Cyan4 | #0B83DF |  |
| rgb(15, 152, 250) | Cyan5 | #0F98FA |  |
| rgb(60, 177, 251) | Cyan6 | #3CB1FB |  |
| rgb(103, 201, 252) | Cyan7 | #67C9FC |  |
| rgb(143, 221, 255) | Cyan8 | #8FDDFF |  |
| rgb(189, 239, 255) | Cyan9 | #BDEFFF |  |
| rgb(224, 249, 255) | Cyan10 | #E0F9FF |  |
| rgb(179, 130, 240) | Purple | Purple6 | #B382F0 |
| --- | --- | --- | --- |
| rgb(69, 25, 129) | Purple1 | #451981 |  |
| rgb(90, 45, 150) | Purple2 | #5A2D96 |  |
| rgb(113, 65, 172) | Purple3 | #7141AC |  |
| rgb(135, 85, 194) | Purple4 | #8755C2 |  |
| rgb(158, 108, 216) | Purple5 | #9E6CD8 |  |
| rgb(179, 130, 240) | Purple6 | #B382F0 |  |
| rgb(203, 150, 255) | Purple7 | #CB96FF |  |
| rgb(221, 181, 255) | Purple8 | #DDB5FF |  |
| rgb(234, 207, 255) | Purple9 | #EACFFF |  |
| rgb(247, 235, 255) | Purple10 | #F7EBFF |  |
| rgb(255, 112, 207) | Pink | Pink6 | #FF70CF |
| --- | --- | --- | --- |
| rgb(123, 5, 84) | Pink1 | #7B0554 |  |
| rgb(155, 6, 109) | Pink2 | #9B066D |  |
| rgb(188, 8, 138) | Pink3 | #BC088A |  |
| rgb(212, 53, 160) | Pink4 | #D435A0 |  |
| rgb(237, 83, 183) | Pink5 | #ED53B7 |  |
| rgb(255, 112, 207) | Pink6 | #FF70CF |  |
| rgb(255, 153, 228) | Pink7 | #FF99E4 |  |
| rgb(255, 189, 244) | Pink8 | #FFBDF4 |  |
| rgb(255, 219, 253) | Pink9 | #FFDBFD |  |
| rgb(255, 242, 255) | Pink10 | #FFF2FF |  |
| rgb(251, 110, 119) | Red | Red6 | #FB6E77 |
| --- | --- | --- | --- |
| rgb(115, 5, 36) | Red1 | #730524 |  |
| rgb(150, 6, 39) | Red2 | #960627 |  |
| rgb(176, 28, 55) | Red3 | #B01C37 |  |
| rgb(201, 56, 74) | Red4 | #C9384A |  |
| rgb(227, 86, 97) | Red5 | #E35661 |  |
| rgb(251, 110, 119) | Red6 | #FB6E77 |  |
| rgb(255, 145, 149) | Red7 | #FF9195 |  |
| rgb(255, 181, 184) | Red8 | #FFB5B8 |  |
| rgb(255, 214, 216) | Red9 | #FFD6D8 |  |
| rgb(255, 242, 242) | Red10 | #FFF2F2 |  |
| rgb(237, 129, 57) | Orange | Orange6 | #ED8139 |
| --- | --- | --- | --- |
| rgb(105, 34, 4) | Orange1 | #692204 |  |
| rgb(135, 49, 5) | Orange2 | #873105 |  |
| rgb(162, 64, 6) | Orange3 | #A24006 |  |
| rgb(194, 81, 16) | Orange4 | #C25110 |  |
| rgb(214, 103, 36) | Orange5 | #D66724 |  |
| rgb(237, 129, 57) | Orange6 | #ED8139 |  |
| rgb(255, 152, 82) | Orange7 | #FF9852 |  |
| rgb(255, 185, 125) | Orange8 | #FFB97D |  |
| rgb(255, 216, 173) | Orange9 | #FFD8AD |  |
| rgb(255, 244, 229) | Orange10 | #FFF4E5 |  |
| rgb(210, 158, 8) | Yellow | Yellow6 | #D29E08 |
| --- | --- | --- | --- |
| rgb(94, 59, 4) | Yellow1 | #5E3B04 |  |
| rgb(117, 78, 5) | Yellow2 | #754E05 |  |
| rgb(140, 97, 6) | Yellow3 | #8C6106 |  |
| rgb(163, 116, 7) | Yellow4 | #A37407 |  |
| rgb(186, 137, 7) | Yellow5 | #BA8907 |  |
| rgb(210, 158, 8) | Yellow6 | #D29E08 |  |
| rgb(235, 179, 14) | Yellow7 | #EBB30E |  |
| rgb(251, 204, 48) | Yellow8 | #FBCC30 |  |
| rgb(255, 230, 130) | Yellow9 | #FFE682 |  |
| rgb(255, 249, 194) | Yellow10 | #FFF9C2 |  |
| rgb(7, 168, 114) | Green | Green6 | #07A872 |
| --- | --- | --- | --- |
| rgb(3, 65, 22) | Green1 | #034116 |  |
| rgb(3, 84, 40) | Green2 | #035428 |  |
| rgb(4, 105, 57) | Green3 | #046939 |  |
| rgb(5, 126, 76) | Green4 | #057E4C |  |
| rgb(6, 147, 95) | Green5 | #06935F |  |
| rgb(7, 168, 114) | Green6 | #07A872 |  |
| rgb(55, 191, 142) | Green7 | #37BF8E |  |
| rgb(113, 213, 174) | Green8 | #71D5AE |  |
| rgb(179, 232, 209) | Green9 | #B3E8D1 |  |
| rgb(232, 247, 241) | Green10 | #E8F7F1 |  |
