---
title: "TDesign · 字体"
source: https://tdesign.tencent.com/design/fonts
section: type
tag: "规范"
fetched: 2026-10-17
status: full
id: type-8
publisher: "腾讯"
---

# TDesign · 字体

> 来源：[https://tdesign.tencent.com/design/fonts](https://tdesign.tencent.com/design/fonts)

---

概述

网页文字将与网页中的界面系统相结合，从而形成一个可供用户操作的产品系统，用户除了阅读，还需要完成一系列与界面系统产生的交互行为。因此，在网页设计中，文字系统是影响产品可用性的重要因素。

TDesign 秉承包容、多元、进化和连接的价值观，这将指引文字系统制定「好用」、「好记」和「美观」的字体设计原则，希望字体是有规律和韵律、实现像素对齐、可以拉开清晰明确的层次关系、具有和谐美观的大小对比效果。

字体样式

字体定义每个系统中所使用的字体，给到统一的字体规范，在 TDesign 当中，需要通过字体、字阶、行高、字重、字色几个维度去制定文字系统。

字体

font-family 是用于某个元素的字体族名称或/及类族名称的一个优先表。如果浏览器不支持第一个字体，则会尝试优先表中的下一个。不同主流的操作系统及浏览器的默认字体不尽相同。从西文到中文，分别对各个平台做一个基础的降级，这是针对系统字体规范 font-family 的基本思路。

这里需要注意的是，不声明字体时，浏览器渲染的是「默认字体」，不一定是「系统字体」。例如：Windows 7 浏览器默认渲染的是中易宋体（Simsun），而非系统字体微软雅黑（Microsoft YaHei）。

-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Source Han Sans CN,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol
数字字体

在展示表格数据时，应该使用等距的表格数字。表格数字相比普通字体的数字能实现更好的对齐，在获取数据时用户能更快速便捷的扫描和对比。表格数字可以说是特殊字体，使用腾讯云数字字体，可以满足在缩放中保持稳定可见的粗细。 TCloud Number

%*+,-./0123456789:
字阶

字阶定义一级字阶和二级字阶，一级字阶常用于基础组件的设计中，二级字阶用于标题及特殊场景的应用。

第一字阶，每个字号的增长步数差距为 2px。桌面端中，Body 字号设置为 14px，Base 取 12px，桌面端的最小字号是 12px，而 10px 则作为移动端的 Base 字号，将桌面端与移动端字阶统一处理，让两端文字与设计系统更一致，更标准地调控。

第二字阶，为了减少字阶区间里的步数，在这个范围中的文字，多为模块超大标题、展示型文案，以数字数据展示为主。通过 +4、+8、+12、+16 的步数增长规律，满足这个范围的字阶中，文字层级跨度大的展示诉求，也减少没有必要的小步数字号。

字阶字号
基础10px 移动端最小
第一字阶
+212px 桌面端最小
+214px 正文
+216px TDesign
+420px TDesign
第二字阶
+424px TDesign
+428px TDesign
+836px TDesign
+1248px TDesign
+1664px TDesign
行高

关于文字的行高，CSS 属性中的 line-height，在国际无障碍网页使用标准中给出了明确指引：line-height = font size × 1.5。

在验证过程中发现，固定 1.5 倍的行高比例，在字号越大时行高也会越大，在大号文字的展示上信息的连贯明显出现割裂，尤其在多种字号及元素混排的场景中。

行高是为了让上一行和下一行文字之间有呼吸空间。基于呼吸空间一致，让不同字号之间的间距保持相同，通过逻辑得到公式「行高 = 字号 + n」。8 作为变量正好同时满足与 1.5 倍的「14px & 16px」常用字号行高保持一致，总体文字间隙稳定，得出计算公式「line-height = font size + 8」。

欢迎使用 TDesign

line-height: 56px

line-height = font size + n
n = 8
字重

字重是重要排版的变量，可以增强层次结构和重要内容区分。

面对复杂的中后台场景，在 Windows 系统下 font-weight 如果使用小于 600 默认显示为常规体，而在 macOS 系统中可以使用 400、500、600 区分。综合考虑复杂场景显示效果，TDesign 共提供两种字重配置效果。

font-weight: 400 和 font-weight: 600。字重 400 等于 Windows 和 macOS 系统下的 Regular 显示效果，字重 600 等于 Windows 系统下的 Bold 显示效果和 macOS 系统下的 Semibold 显示效果。

欢迎使用 TDesign (600)
欢迎使用 TDesign (400)
字体颜色

TDesign 文字和图标色彩系统采用透明度方向，期望更好地适配亮暗模式，让整个文字和图标色彩都更加具备包容性。

根据字体样式的设计原则，制定了简易好记的透明度数值区间，并且将该字色与界面系统的色彩系统结合，文字显示色彩对比满足至少 1:4.5（AA 级别）。且验证了其中的实用性，共分为亮暗两种模式、4 个色阶。

注意：因为黑底白字的 Web AIM 值曲线和白底黑字不同，加了透明度之后辨识度比白底黑字高。为保证一致的通用文字阅读舒适性，暗色模式平衡了 AIM 值，略微降低透明度，确保 AIM 差值曲线均衡。

不同的字体色彩有不同功能用法，具体可以参考 Design Token 示意查看。

Font Gy1
#000000 90%
Font Gy2
#000000 60%
Font Gy3
#000000 40%
Font Gy4
#000000 26%
Font Wh1
#ffffff 100%
Font Wh2
#ffffff 55%
Font Wh3
#ffffff 35%
Font Wh4
#ffffff 22%
