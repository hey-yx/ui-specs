---
title: "TDesign · Foundation · Icons 图标"
source: https://tdesign.tencent.com/design/icon
section: icons
tag: "规范"
fetched: 2026-11-09
status: full
id: icons-11
publisher: "腾讯"
---

# TDesign · Foundation · Icons 图标

> 来源：[https://tdesign.tencent.com/design/icon](https://tdesign.tencent.com/design/icon)

---

## 概述

Icon 作为 UI 构成中重要的元素，它一定程度上影响整体 UI 界面呈现出的风格，TDesign 提供一套适用于中后台场景的线性 Icon，以普适通用的标准进行设计，契合 TDesign 设计系统的整体风格。

## 原则

### 从简

制作时保证参数的简化，尽量消除小数点以及非整数的角度。处理线条以及轮廓时删除多余的锚点，输出时应避免出现不必要的装饰，保持图标的简洁。

![](https://static.tdesign.tencent.com/assets/simplify-1-DDkQoOKO.png)

### 精确

在设计时避免使用那些含义模糊的图形，当同个事物存在多个图形表述时，应选取最为流通的样式，必要时进行针对性的强化。在图标输出时也应遵守命名规范，精确的文字描述便于他人查找。

![](https://static.tdesign.tencent.com/assets/accurate-1-D9OuhpQA.png)

### 适度

单个图标作为一个独立的视觉个体，在线条的疏密以及图形的搭配上要呈现适度感。在处理一些必要的高密度图标时也要考虑线条的节奏感，让其舒适不压迫。系列图标要遵守适度原则，将变化控制在一定范围内。

![](https://static.tdesign.tencent.com/assets/moderate-1-DGmfKfqc.png)

## 规范

### 栅格规范

栅格作为图表绘制的底层结构，是一切属性设计的基础。线条的长短粗细、图标的大小比例等关键因素均在其基础上制定。图标常见尺寸为16*16；20*20；24*24；32*32这四种输出尺寸。这些尺寸均可以清晰的显示在常规的显示器上。TDesign 最终选择以 24*24px 的尺寸作为图标绘制的统一栅格尺寸，经矢量转曲后等比缩放到 16*16px 交付。此方案旨在兼容 1.0 版本组件的默认调用尺寸，避免了额外调整图标大小的问题。

![](https://static.tdesign.tencent.com/assets/grid-1-BnsJwx29.png)

---

受屏幕像素栅格化特性影响，非整数像素描边会因抗锯齿处理产生半透明灰度，导致图标边缘模糊、表意失真。因此，绘制时应严格对齐像素网格，以最大化保证图标的清晰度。

![](https://static.tdesign.tencent.com/assets/grid-2-DfUtM5yZ.png)

---

在处理一些对称图形时居中处理，不应为了对齐栅格而打破画面平衡。

![](https://static.tdesign.tencent.com/assets/grid-3-left-DtJClrxS.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/grid-3-right-BxMv_TQn.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

### 画布与辅助线

画布作为图标设计的实际操作区域起到了控制画面、限制大小、调整间距等作用。在 TDesign 图标的设计上实际画布应控制在栅格中心20*20px 的区域。在一些特殊情况下如 icon 过长或者有突出的边角等，允许内容适当延展，以确保图标视觉重量上的统一。

![](https://static.tdesign.tencent.com/assets/canvas-1-Bw0T5FBT.png)

---

辅助线有助于约束图标的大小以及一些线条的走向，在制作时应尽量根据辅助线进行绘制以保持各图标间视觉重量的统一。我们对栅格内的圆形、方形、斜线等路径进行了规范并生成了一套辅助线系统。在图标设计的过程中应根据设计对象的特性选取相应的辅助线来控制图形样式。

![](https://static.tdesign.tencent.com/assets/canvas-2-ywoCNF_V.png)

---

根据绘制对象的形象特征去选择辅助线，在必要时，可以将内容扩展到辅助线之外，不应为了对齐辅助线而妥协图形设计。

![](https://static.tdesign.tencent.com/assets/canvas-3-left-C8vjANJy.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/canvas-3-right-CKWbrpmi.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

---

在绘制一些具有指向性的图标时，建议在其指引的反方向延伸微量（0.25px 倍数）的视觉内容，以便平衡画面。

![](https://static.tdesign.tencent.com/assets/canvas-4-GSOjW8Fa.png)

### 线条

考虑通用普适性，本套系统中所有图标均设置为 2px 宽度的描边，并支持在[🔗 TDesign 图标独立站点](https://tdesign.tencent.com/icons)上进行全量化调节。

![](https://static.tdesign.tencent.com/assets/line-1-BnEaXlCi.png)

![](https://static.tdesign.tencent.com/assets/line-2-CTXi8Z2H.png)

---

在处理长线线条的长度时建议使用 2 的倍数，这样更易进行对称处理。

![](https://static.tdesign.tencent.com/assets/line-3-C-z1k-Pe.png)

---

线段末端直角处理，但在表现一些文字类图形或带有三维空间的透视图形时应与栅格相切。

![](https://static.tdesign.tencent.com/assets/line-4-left-BiGXdA2T.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/line-4-right-CI_1HSr4.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

---

### 圆角

在处理拐角时，需结合图形表意，恰当的圆角能强化视觉语言，而不是生硬地全部处理为尖角。

![](https://static.tdesign.tencent.com/assets/round-1-CLKDRm_p.png)

![](https://static.tdesign.tencent.com/assets/round-2-left-DY8YiNBI.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/round-2-right-CAXmXbKf.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

### 角度

线条如需倾斜最好与栅格内 45° 辅助线相平行，或使用 15° 的倍数。以便在低分辨率的情况下仍有较高的线条清晰度。

![](https://static.tdesign.tencent.com/assets/angle-1-BxePWfe8.png)

---

不仅要注意图形部分的夹角，也要特别关注一些负形的夹角度数。

![](https://static.tdesign.tencent.com/assets/angle-2-left-BQ2bFa0v.png)

![](https://static.tdesign.tencent.com/assets/angle-2-right-BB1rO49D.png)

### 断口

断口多存在于复合图标上，其宽度根据具体图标的样式进行具体分析，需起到平衡视觉重量的作用（最大宽度 ≤ 2px 且为 0.5px 的倍数）。

![](https://static.tdesign.tencent.com/assets/fracture-1-left-0DIWZX8w.png)

![](https://static.tdesign.tencent.com/assets/fracture-1-right-f4Y7NJ-o.png)

### 叠加型通用挂件

为在统一规范下适配多样的主图形，提供了中、小两套通用挂件。

![](https://static.tdesign.tencent.com/assets/variety-1-DaixHW_A.png)

---

使用时，需依据主图形的具体形态，选择合适尺寸并确定摆放位置。

![](https://static.tdesign.tencent.com/assets/variety-2-aWT1hpQM.png)

### 繁简度

在确保高识别度的基础上，寻求内部结构以及外部轮廓的最简化。

![](https://static.tdesign.tencent.com/assets/easy-1-left-DP279Mmz.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/easy-1-right-7KCEsWJ1.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

![](https://static.tdesign.tencent.com/assets/easy-1-left-bottom-BQ3oiyrJ.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/easy-1-right-bottom-DMNgvwd8.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

### 弧线

弧线处理优先遵循正圆/正圆局部拼接。

![](https://static.tdesign.tencent.com/assets/arc-1-left-DsQ9rADh.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

![](https://static.tdesign.tencent.com/assets/arc-1-right-D6ik5qtq.png)

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)
