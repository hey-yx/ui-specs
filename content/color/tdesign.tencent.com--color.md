---
title: "TDesign · 色彩"
source: https://tdesign.tencent.com/design/color
section: color
tag: "规范"
fetched: 2026-10-17
status: full
id: color-8
publisher: "腾讯"
---

# TDesign · 色彩

> 来源：[https://tdesign.tencent.com/design/color](https://tdesign.tencent.com/design/color)

---

概述

TDesign 的色彩体系搭建遵循了 TDesign 包容、多元、进化、连接的价值观，充分考虑色彩的应用需求，符合无障碍标准，提供了一套定义完整、开箱即用的官方色板。

TDesign 官方色板

TDesign 官方色板是一套广泛适用于中后台业务场景的默认配色。包含了主题色、功能色、中性色、扩展色4部分。

主题色

主题色是产品中最核心、最高频使用的颜色，它常用于强调信息、引导操作，并在很大程度上决定了产品整体的基调和风格。TDesign 以腾讯蓝（Tencent Blue）作为默认主题色，蕴含了科技创新、开放共享的品牌特质和生态理念，其稳健、中性的气质，在中后台设计中也具有广泛的普适性。

腾讯蓝（Tencent Blue）

rgba(0, 82, 217, 1)

#0052d9

功能色

功能色是指用于特定场景、表达特殊语义的颜色，例如成功、失败、告警、链接等状态。我们定义了4种功能色，在遵循色彩通用含义选取色相的基础上，从视觉一致性的角度选取了与品牌色更具一致关系的色调，并结合WCAG2.0标准综合考量，使其达到可用性标准。

在 TDesign 色彩系统中，每个功能色扩展10级色阶，足够覆盖界面设计中各需求场景。色阶的制定采用了 HCT 色彩空间，结合不同色相下饱和度及亮度插值拟合出优化曲线，保证色彩变化均匀，多色之间亮度均等。

对比度 6.54:1

Blue7 品牌色
#0052d9

Blue1
#f2f3ff

Blue2
#d9e1ff

Blue3
#b5c7ff

Blue4
#8eabff

Blue5
#618dff

Blue6
#366ef4

Blue7
#0052d9

Blue8
#003cab

Blue9
#002a7c

Blue10
#001a57

对比度 4.32:1

Red6 错误色
#d54941

Red1
#fff0ed

Red2
#ffd8d2

Red3
#ffb9b0

Red4
#ff9285

Red5
#f6685d

Red6
#d54941

Red7
#ad352f

Red8
#881f1c

Red9
#68070a

Red10
#490002

对比度 3.12:1

Orange5 告警色
#e37318

Orange1
#fff1e9

Orange2
#ffd9c2

Orange3
#ffb98c

Orange4
#fa9550

Orange5
#e37318

Orange6
#be5a00

Orange7
#954500

Orange8
#713300

Orange9
#532300

Orange10
#3b1700

对比度 3.16:1

Green5 成功色
#2ba471

Green1
#e3f9e9

Green2
#c6f3d7

Green3
#92dab2

Green4
#56c08d

Green5
#2ba471

Green6
#008858

Green7
#006c45

Green8
#005334

Green9
#003b23

Green10
#002515

中性色

中性色包含一系列灰黑色，同时考虑到在深色模式下需要通过中性色来区界面分层级关系，所以在 CIELab 中根据亮度将中性色扩展至14个。并且常用文字与其色彩对比度均大于4.5，满足 WCAG2.0 标准。

White
#ffffff
Gray1 L96
#f3f3f3
Gray2 L94
#eeeeee
Gray3 L92
#e8e8e8
Gray4 L88
#dddddd
Gray5 L80
#c6c6c6
Gray6 L68
#a6a6a6
Gray7 L58
#8b8b8b
Gray8 L50
#777777
Gray9 L40
#5e5e5e
Gray10 L32
#4b4b4b
Gray11 L24
#393939
Gray12 L18
#2c2c2c
Gray13 L14
#242424
Gray14 L8
#181818

White

Font Gy1

#000000 90%

Text

AAA 17.5

Font Gy2

#000000 60%

Text

AA 5.7

Gray1

Font Gy1

#000000 90%

Text

AAA 15.8

Font Gy2

#000000 60%

Text

AA 5.1

Gray2

Font Gy1

#000000 90%

Text

AAA 15.1

Font Gy2

#000000 60%

Text

AA 4.9

带有品牌色倾向的中性色

此外在页面模版等应用场景中，需要在各层级的灰黑色中加入颜色倾向，以突出品牌氛围。过程中使用了 RGB 混色模型，经过多次的尝试最终确定了品牌色的混合比例为 8%-12%，运用规则同普通中性色一致。

L96
L94
L92
L88
L80
L68
L58
L50
L40
#0052d9
L32
L24
L18
L14
L8

12%

Gray1 L96
#f3f3f3
Gray2 L94
#eeeeee
Gray3 L92
#e8e8e8
Gray4 L88
#dddddd
Gray5 L80
#c6c6c6
Gray6 L68
#a6a6a6
Gray7 L58
#8b8b8b
Gray8 L50
#777777
Gray9 L40
#5e5e5e
Gray10 L32
#4b4b4b
Gray11 L24
#393939
Gray12 L18
#2c2c2c
Gray13 L14
#242424
Gray14 L8
#181818

100%

BlueGray1 L96
#f3f3f4
BlueGray2 L94
#eeeef0
BlueGray3 L92
#e7e8eb
BlueGray4 L88
#dcdde1
BlueGray5 L80
#c4c6cd
BlueGray6 L68
#a2a6b1
BlueGray7 L58
#858a99
BlueGray8 L50
#6f7686
BlueGray9 L40
#535d6d
BlueGray10 L32
#424a57
BlueGray11 L24
#323843
BlueGray12 L18
#272b34
BlueGray13 L14
#20232b
BlueGray14 L8
#15181d

Average(r,g,b) = 0.12*(r1,b1,g1) + 0.88*(r2,b2,g2)

扩展色

扩展色是一系列由功能色扩展而成的颜色。在有更多颜色需求的场景中（如数据可视化场景、插画场景）。同样采用了 HCT 及插值拟合曲线的方法，除了功能色蓝、红、黄、绿之外，TDesign 色彩体系扩展至 8 种主要颜色，另外有紫色，天蓝色、黄色、粉红色扩展色。每个扩展色均为 10 级色阶，保证色彩变化均匀，多色之间亮度均等。

Cyan5
#029cd4

Cyan1
#e8f5ff

Cyan2
#c4e8ff

Cyan3
#85d3ff

Cyan4
#41b8f2

Cyan5
#029cd4

Cyan6
#0080b0

Cyan7
#00668e

Cyan8
#004e6d

Cyan9
#003850

Cyan10
#002536

Purple6
#8e56dd

Purple1
#fbf0ff

Purple2
#eedcff

Purple3
#dcbfff

Purple4
#c69cff

Purple5
#ad75fe

Purple6
#8e56dd

Purple7
#7137bf

Purple8
#5610a4

Purple9
#3b007b

Purple10
#280057

Yellow4
#f5ba18

Yellow1
#fff5e4

Yellow2
#ffe7b5

Yellow3
#ffd36d

Yellow4
#f5ba18

Yellow5
#d8a100

Yellow6
#b38500

Yellow7
#8b6600

Yellow8
#654900

Yellow9
#443000

Yellow10
#2b1d00

Pink5
#e851b3

Pink1
#fff0f6

Pink2
#ffd8eb

Pink3
#ffaedc

Pink4
#ff79cd

Pink5
#e851b3

Pink6
#c43695

Pink7
#a12279

Pink8
#800a5f

Pink9
#610046

Pink10
#43002f

应用指南
UI 应用指南

在 TDesign 中，腾讯蓝是主要的交互颜色，并且因为组件实际情况的复杂性，我们使用 Design Token 规范了颜色运用规则。为了方便进行管理和阅读，我们定义了全局语义 Token 和组件 Token，这样只需要理解了全局语义 Token 的规则后，就可以了解 TDesign 中组件的颜色运用规则（可参考下图）。

色板
颜色 - 色阶
blue-6
blue-7
blue-8
white
gray-1
gray-3
fontgray-1
fontgray-2
全局语义 Token
主题容器文字 - 色彩 - 交互层级: @色板
brand-color-hover:@blue-color-6
brand-color:@blue-color-7
brand-color-active:@blue-color-8
bg-color-container:@white-color
bg-color-container-hover:@gray-color-1
bg-color-container-active:@gray-color-3
text-color-primary:@font-gray-1
text-color-secondary:@font-gray-2
组件 Token
组件 - 背景文字描边 - 交互层级: @全局语义Token
button-bg-hover:@brand-color-hover
button-bg:@brand-color
button-bg-active:@brand-color-active
table-bg:@bg-color-container
table-bg-hover:@bg-color-container-hover
table-bg-active:@bg-color-container-active
menu-tabstext-select:@text-color-primary
menu-tabstext:@text-color-secondary
数据可视化应用指南

在前端通用设计体系中，图表也是常见的应用场景，因此 TDesign 的色彩体系也充分考虑到数据可视化的色彩应用，力图成为一套具有兼容性的色彩体系。前端数据可视化组件库 TVision，作为设计体系的重要组成部分一部分，其配色基于 TDesign 官方色板中的扩展色进行应用，保证了图表与 UI 的统一性和品牌延续性。其中最常用的定性色板、连续色板如下图所示，均经过 CIE ΔE 2000 结合 contrast ratio 的辨识度验证。TVision 未来会对外开放，届时为大家提供更完整的可视化色彩指引。
