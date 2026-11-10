---
title: "Ant Design · Switch 开关"
source: https://ant.design/components/switch-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-switch
publisher: "Ant Design"
---

# Ant Design · Switch 开关

> 来源：[https://ant.design/components/switch-cn](https://ant.design/components/switch-cn)

---

# Switch

开关

使用开关切换两种状态之间。

使用 import { Switch } from 'antd';
反馈

[components/switch](https://github.com/ant-design/ant-design/blob/master/components/switch)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Switch%20OR%20is%3Aissue%20in%3Atitle%20%E5%BC%80%E5%85%B3))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/switch/index.zh-CN.md)[LLMs.md](https://ant.design/components/switch-cn.md)

## 何时使用

*   需要表示开关状态/两种状态之间的切换时；
*   和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

[基本](https://ant.design/components/switch-cn#switch-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/switch/demo/basic.tsx)

最简单的用法。

[](https://ant.design/~demos/switch-demo-basic?routeId=components%2Fswitch%2Findex.en-US)

On Off 1 0

Happy

Sad

[文字和图标](https://ant.design/components/switch-cn#switch-demo-text)[](https://github.com/ant-design/ant-design/edit/master/components/switch/demo/text.tsx)

带有文字和图标。

[](https://ant.design/~demos/switch-demo-text?routeId=components%2Fswitch%2Findex.en-US)

  

[加载中](https://ant.design/components/switch-cn#switch-demo-loading)[](https://github.com/ant-design/ant-design/edit/master/components/switch/demo/loading.tsx)

标识开关操作仍在执行中。

[](https://ant.design/~demos/switch-demo-loading?routeId=components%2Fswitch%2Findex.en-US)

Toggle disabled

[不可用](https://ant.design/components/switch-cn#switch-demo-disabled)[](https://github.com/ant-design/ant-design/edit/master/components/switch/demo/disabled.tsx)

Switch 失效状态。

[](https://ant.design/~demos/switch-demo-disabled?routeId=components%2Fswitch%2Findex.en-US)

  

[两种大小](https://ant.design/components/switch-cn#switch-demo-size)[](https://github.com/ant-design/ant-design/edit/master/components/switch/demo/size.tsx)

`size="small"` 表示小号开关。

[](https://ant.design/~demos/switch-demo-size?routeId=components%2Fswitch%2Findex.en-US)

on off on off

[自定义语义结构的样式和类](https://ant.design/components/switch-cn#switch-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/switch/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Switch 的[语义化结构](https://ant.design/components/switch-cn#semantic-dom)样式。

[](https://ant.design/~demos/switch-demo-style-class?routeId=components%2Fswitch%2Findex.en-US)

6.0.0

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |  | × |
| checkedChildren | 选中时的内容 | ReactNode | - |  | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/switch-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/switch-cn#semantic-dom), string> | - |  | 6.0.0 |
| defaultChecked | 初始是否选中 | boolean | false |  | × |
| defaultValue | `defaultChecked` 的别名 | boolean | - | 5.12.0 | × |
| disabled | 是否禁用 | boolean | false |  | × |
| loading | 加载中的开关 | boolean | false |  | × |
| size | 开关大小，可选值：`medium``small` | `'medium'` | `'small'` | `medium` |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/switch-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/switch-cn#semantic-dom), CSSProperties> | - |  | 6.0.0 |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |  | × |
| value | `checked` 的别名 | boolean | - | 5.12.0 | × |
| onChange | 变化时的回调函数 | function(checked: boolean, event: Event) | - |  | × |
| onClick | 点击时的回调函数 | function(checked: boolean, event: Event) | - |  | × |

## 方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

## Semantic DOM

ON OFF

*   ##### root

6.0.0   根元素，包含最小宽度、高度、行高、垂直对齐、背景色、边框、圆角、光标样式、过渡动画、用户选择等开关容器的基础样式  
*   ##### content

6.0.0   内容元素，包含块级显示、溢出隐藏、圆角、高度、内边距、过渡动画等开关内容区域的布局和样式  
*   ##### indicator

6.3.0   指示器元素,包含绝对定位、宽度、高度、背景色、圆角、阴影、过渡动画等开关把手的样式和交互效果  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| handleBg | 开关把手背景色 | string | #fff |
| handleShadow | 开关把手阴影 | string | 0 2px 4px 0 rgba(0,35,11,0.2) |
| handleSize | 开关把手大小 | number | 18 |
| handleSizeSM | 小号开关把手大小 | number | 12 |
| innerMaxMargin | 内容区域最大边距 | number | 24 |
| innerMaxMarginSM | 小号开关内容区域最大边距 | number | 18 |
| innerMinMargin | 内容区域最小边距 | number | 9 |
| innerMinMarginSM | 小号开关内容区域最小边距 | number | 6 |
| trackHeight | 开关高度 | string | number | 22 |
| trackHeightSM | 小号开关高度 | string | number | 16 |
| trackMinWidth | 开关最小宽度 | string | number | 44 |
| trackMinWidthSM | 小号开关最小宽度 | string | number | 28 |
| trackPadding | 开关内边距 | number | 2 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorPrimaryHover | 主色梯度下的悬浮态。 | string | #4096ff |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextLightSolid | 控制带背景色的文本，例如 Primary Button 组件中的文本高亮颜色。 | string | #fff |
| colorTextQuaternary | 第四级文本色是最浅的文本色，例如表单的输入提示文本、禁用色文本等。 | string | rgba(0,0,0,0.25) |
| colorTextTertiary | 第三级文本色一般用于描述性文本，例如表单的中的补充说明文本、列表的描述性文本等场景。 | string | rgba(0,0,0,0.45) |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeIcon | 控制选择器、级联选择器等中的操作图标字体大小。正常情况下与 fontSizeSM 相同。 | number | 12 |
| fontSizeSM | 小号字体大小 | number | 12 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| marginXXS | 控制元素外边距，最小尺寸。 | number | 4 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| opacityLoading | 控制加载状态的透明度。 | number | 0.65 |

## FAQ

### 为什么在 Form.Item 下不能绑定数据？

Form.Item 默认绑定值属性到 `value` 上，而 Switch 的值属性为 `checked`。你可以通过 `valuePropName` 来修改绑定的值属性。

tsx

<Form.Item name="fieldA" valuePropName="checked">

 <Switch />

</Form.Item>
