---
title: "Ant Design · Radio 单选框"
source: https://ant.design/components/radio-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-radio
publisher: "Ant Design"
---

# Ant Design · Radio 单选框

> 来源：[https://ant.design/components/radio-cn](https://ant.design/components/radio-cn)

---

# Radio

单选框

用于在多个备选项中选中单个状态。

使用 import { Radio } from 'antd';
反馈

[components/radio](https://github.com/ant-design/ant-design/blob/master/components/radio)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Radio%20OR%20is%3Aissue%20in%3Atitle%20%E5%8D%95%E9%80%89%E6%A1%86))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/radio/index.zh-CN.md)[LLMs.md](https://ant.design/components/radio-cn.md)

## 何时使用

*   用于在多个备选项中选中单个状态。
*   和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

tsx

// 使用 Radio.Group 组件时，推荐的写法 ✅

return (

 <Radio.Group

 value={value}

 options={[

 { value: 1, label: 'A' },

 { value: 2, label: 'B' },

 { value: 3, label: 'C' },

 ]}

 />

);

// 不推荐的写法 🙅🏻‍♀️

return (

 <Radio.Group value={value}>

 <Radio value={1}>A</Radio>

 <Radio value={2}>B</Radio>

 <Radio value={3}>C</Radio>

 </Radio.Group>

);

## 代码演示

Radio 

[基本](https://ant.design/components/radio-cn#radio-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/basic.tsx)

最简单的用法。

[](https://ant.design/~demos/radio-demo-basic?routeId=components%2Fradio%2Findex.en-US)

LineChart

 

DotChart

 

BarChart

 

PieChart

 

[单选组合](https://ant.design/components/radio-cn#radio-demo-radiogroup)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiogroup.tsx)

一组互斥的 Radio 配合使用。

[](https://ant.design/~demos/radio-demo-radiogroup?routeId=components%2Fradio%2Findex.en-US)

Apple Pear Orange 

Apple Pear Orange 

Apple Pear Orange 

[Block 单选组合](https://ant.design/components/radio-cn#radio-demo-radiogroup-block)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiogroup-block.tsx)

`block` 属性将使 Radio.Group 撑满父容器。

[](https://ant.design/~demos/radio-demo-radiogroup-block?routeId=components%2Fradio%2Findex.en-US)

5.21.0

Hangzhou Shanghai Beijing Chengdu 

Hangzhou Shanghai Beijing Chengdu 

Hangzhou Shanghai Beijing Chengdu 

[按钮样式](https://ant.design/components/radio-cn#radio-demo-radiobutton)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiobutton.tsx)

按钮样式的单选组合。

[](https://ant.design/~demos/radio-demo-radiobutton?routeId=components%2Fradio%2Findex.en-US)

Hangzhou Shanghai Beijing Chengdu 

Hangzhou Shanghai Beijing Chengdu 

Hangzhou Shanghai Beijing Chengdu 

[大小](https://ant.design/components/radio-cn#radio-demo-size)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/size.tsx)

大中小三种组合，可以和表单输入框进行对应配合。

[](https://ant.design/~demos/radio-demo-size?routeId=components%2Fradio%2Findex.en-US)

Object styles Function classNames 

[自定义语义结构的样式和类](https://ant.design/components/radio-cn#radio-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象/函数可以自定义单选框的[语义化结构](https://ant.design/components/radio-cn#semantic-dom)样式。

[](https://ant.design/~demos/radio-demo-style-class?routeId=components%2Fradio%2Findex.en-US)

6.0.0

Disabled Disabled   
Toggle disabled

[不可用](https://ant.design/components/radio-cn#radio-demo-disabled)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/disabled.tsx)

Radio 不可用。

[](https://ant.design/~demos/radio-demo-disabled?routeId=components%2Fradio%2Findex.en-US)

Option A Option B Option C More... 

Apple Pear Orange 

[Radio.Group 垂直](https://ant.design/components/radio-cn#radio-demo-radiogroup-more)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiogroup-more.tsx)

垂直的 Radio.Group，配合更多输入框选项。

[](https://ant.design/~demos/radio-demo-radiogroup-more?routeId=components%2Fradio%2Findex.en-US)

Apple Pear Orange 

  

Apple Pear Orange 

  
  

Apple Pear Orange 

  
  

Apple Pear Orange 

[Radio.Group 组合 - 配置方式](https://ant.design/components/radio-cn#radio-demo-radiogroup-options)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiogroup-options.tsx)

通过配置 `options` 参数来渲染单选框。也可通过 `optionType` 参数来设置 Radio 类型。

[](https://ant.design/~demos/radio-demo-radiogroup-options?routeId=components%2Fradio%2Findex.en-US)

A B C D 

[单选组合 - 配合 name 使用](https://ant.design/components/radio-cn#radio-demo-radiogroup-with-name)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiogroup-with-name.tsx)

可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

[](https://ant.design/~demos/radio-demo-radiogroup-with-name?routeId=components%2Fradio%2Findex.en-US)

Hangzhou Shanghai Beijing Chengdu 

Hangzhou Shanghai Beijing Chengdu 

[填底的按钮样式](https://ant.design/components/radio-cn#radio-demo-radiobutton-solid)[](https://github.com/ant-design/ant-design/edit/master/components/radio/demo/radiobutton-solid.tsx)

实色填底的单选按钮样式。

[](https://ant.design/~demos/radio-demo-radiobutton-solid?routeId=components%2Fradio%2Findex.en-US)

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

### Radio/Radio.Button

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |  | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-dom), string> | - | 6.0.0 | 6.0.0 |
| defaultChecked | 初始是否选中 | boolean | false |  | × |
| disabled | 禁用 Radio | boolean | false |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-dom), CSSProperties> | - | 6.0.0 | 6.0.0 |
| value | 根据 value 进行比较，判断是否选中 | any | - |  | × |

### Radio.Group

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将 RadioGroup 宽度调整为其父宽度的选项 | boolean | false | 5.21.0 |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` | `solid` | `outline` |  |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-group), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-group), string> | - | 6.7.0 |
| defaultValue | 默认选中的值 | any | - |  |
| disabled | 禁选所有子单选器 | boolean | false |  |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性。若未设置，则将回退到随机生成的名称 | string | - |  |
| options | 以配置形式设置子元素 | string[] | number[] | Array<[CheckboxOptionType](https://ant.design/components/radio-cn#checkboxoptiontype)> | - |  |
| optionType | 用于设置 Radio `options` 类型 | `default` | `button` | `default` | 4.4.0 |
| orientation | 排列方向 | `horizontal` | `vertical` | `horizontal` |  |
| size | 大小，只对按钮样式生效 | `large` | `medium` | `small` | - |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-group), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/radio-cn#semantic-group), CSSProperties> | - | 6.7.0 |
| value | 用于设置当前选中的值 | any | - |  |
| vertical | 值为 true，Radio Group 为垂直方向。与 `orientation` 同时存在，以 `orientation` 优先 | boolean | false |  |
| onChange | 选项变化时的回调函数 | function(e:Event) | - |  |

### CheckboxOptionType

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| label | 用于作为 Radio 选项展示的文本 | `string` | - | 4.4.0 |
| value | 关联 Radio 选项的值 | `string` | `number` | `boolean` | - | 4.4.0 |
| style | 应用到 Radio 选项的 style | `React.CSSProperties` | - | 4.4.0 |
| className | Radio 选项的类名 | `string` | - | 5.25.0 |
| disabled | 指定 Radio 选项是否要禁用 | `boolean` | `false` | 4.4.0 |
| title | 添加 Title 属性值 | `string` | - | 4.4.0 |
| id | 添加 Radio Id 属性值 | `string` | - | 4.4.0 |
| onChange | 当 Radio Group 的值发送改变时触发 | `(e: CheckboxChangeEvent) => void;` | - | 4.4.0 |
| required | 指定 Radio 选项是否必填 | `boolean` | `false` | 4.4.0 |

## 方法

### Radio

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

## Semantic DOM

### Radio

Radio 

*   ##### root

6.0.0   根元素，包含布局样式、鼠标样式、禁用状态文字颜色等基础容器样式  
*   ##### icon

6.0.0   选中框元素，包含圆角样式、过渡动画、边框样式、悬停状态、焦点状态等交互样式  
*   ##### label

6.0.0   文本元素，包含内边距、文字颜色、禁用状态、对齐方式等文本样式  

### Radio.Group

Apple Pear 

*   ##### root

6.7.0   根元素，单选组合容器，包含排列方向、间距、按钮风格等组合布局样式  
*   ##### item

6.7.0   选项元素，单个 Radio 的包裹容器，包含选中、禁用、块级排列等选项样式  
*   ##### itemIcon

6.7.0   选项选中框元素，包含圆角、边框、过渡动画、悬停与焦点等交互样式  
*   ##### itemLabel

6.7.0   选项文本元素，包含内边距、文字颜色、禁用状态、对齐方式等文本样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| buttonBg | 单选框按钮背景色 | string | #ffffff |
| buttonCheckedBg | 单选框按钮选中背景色 | string | #ffffff |
| buttonCheckedBgDisabled | 单选框按钮选中并禁用时的背景色 | string | rgba(0,0,0,0.15) |
| buttonCheckedColorDisabled | 单选框按钮选中并禁用时的文本颜色 | string | rgba(0,0,0,0.25) |
| buttonColor | 单选框按钮文本颜色 | string | rgba(0,0,0,0.88) |
| buttonPaddingInline | 单选框按钮横向内间距 | number | 15 |
| buttonSolidCheckedActiveBg | 单选框实色按钮选中时的激活态背景色 | string | #0958d9 |
| buttonSolidCheckedBg | 单选框实色按钮选中时的背景色 | string | #1677ff |
| buttonSolidCheckedColor | 单选框实色按钮选中时的文本颜色 | string | #fff |
| buttonSolidCheckedHoverBg | 单选框实色按钮选中时的悬浮态背景色 | string | #4096ff |
| dotColorDisabled | 单选框圆点禁用颜色 | string | rgba(0,0,0,0.25) |
| dotSize | 单选框圆点大小 | number | 8 |
| radioSize | 单选框大小 | number | 16 |
| wrapperMarginInlineEnd | 单选框右间距 | number | 8 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgContainer | 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。 | string | #ffffff |
| colorBgContainerDisabled | 控制容器在禁用状态下的背景色。 | string | rgba(0,0,0,0.04) |
| colorBorder | 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。 | string | #d9d9d9 |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryActive | 主色梯度下的深色激活态。 | string | #0958d9 |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorPrimaryHover | 主色梯度下的悬浮态。 | string | #4096ff |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| borderRadius | 基础组件的圆角大小，例如按钮、输入框、卡片等 | number | 6 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| controlHeight | Ant Design 中按钮和输入框等基础控件的高度 | number | 32 |
| controlHeightLG | 较高的组件高度 | number | 40 |
| controlHeightSM | 较小的组件高度 | number | 24 |
| controlOutline | 控制输入组件的外轮廓线颜色。 | string | rgba(5,145,255,0.1) |
| controlOutlineWidth | 控制输入组件的外轮廓线宽度。 | number | 2 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeLG | 大号字体大小 | number | 16 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOutCirc | 预设动效曲率 | string | cubic-bezier(0.78, 0.14, 0.15, 0.86)[](https://cubic-bezier.com/#0.78,0.14,0.15,0.86) |
| paddingXS | 控制元素的特小内间距。 | number | 8 |
