---
title: "Ant Design · Checkbox 复选框"
source: https://ant.design/components/checkbox-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-checkbox
publisher: "Ant Design"
---

# Ant Design · Checkbox 复选框

> 来源：[https://ant.design/components/checkbox-cn](https://ant.design/components/checkbox-cn)

---

# Checkbox

多选框

收集用户的多项选择。

使用 import { Checkbox } from 'antd';
反馈

[components/checkbox](https://github.com/ant-design/ant-design/blob/master/components/checkbox)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Checkbox%20OR%20is%3Aissue%20in%3Atitle%20%E5%A4%9A%E9%80%89%E6%A1%86))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/checkbox/index.zh-CN.md)[LLMs.md](https://ant.design/components/checkbox-cn.md)

## 何时使用

*   在一组可选项中进行多项选择时；
*   单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

- [x] Checkbox 

[基本用法](https://ant.design/components/checkbox-cn#checkbox-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/basic.tsx)

简单的 checkbox。

[](https://ant.design/~demos/checkbox-demo-basic?routeId=components%2Fcheckbox%2Findex.en-US)

- [x] Checked-Enabled

Uncheck Disable

[受控的 Checkbox](https://ant.design/components/checkbox-cn#checkbox-demo-controller)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/controller.tsx)

联动 checkbox。

[](https://ant.design/~demos/checkbox-demo-controller?routeId=components%2Fcheckbox%2Findex.en-US)

- [x] Check all 

- [x] Apple - [x] Pear - [x] Orange 

[全选](https://ant.design/components/checkbox-cn#checkbox-demo-check-all)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/check-all.tsx)

在实现全选效果时，你可能会用到 `indeterminate` 属性。

[](https://ant.design/~demos/checkbox-demo-check-all?routeId=components%2Fcheckbox%2Findex.en-US)

- [x] Object styles - [x] Function styles 

[自定义语义结构的样式和类](https://ant.design/components/checkbox-cn#checkbox-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Checkbox 的[语义化结构](https://ant.design/components/checkbox-cn#semantic-dom)样式。

[](https://ant.design/~demos/checkbox-demo-style-class?routeId=components%2Fcheckbox%2Findex.en-US)

6.0.0

- [x]  - [x]  - [x]  

[不可用](https://ant.design/components/checkbox-cn#checkbox-demo-disabled)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/disabled.tsx)

checkbox 不可用。

[](https://ant.design/~demos/checkbox-demo-disabled?routeId=components%2Fcheckbox%2Findex.en-US)

- [x] Apple - [x] Pear - [x] Orange 

  
  

- [x] Apple - [x] Pear - [x] Orange 

  
  

- [x] Apple - [x] Pear - [x] Orange 

[Checkbox 组](https://ant.design/components/checkbox-cn#checkbox-demo-group)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/group.tsx)

方便的从数组生成 Checkbox 组。

[](https://ant.design/~demos/checkbox-demo-group?routeId=components%2Fcheckbox%2Findex.en-US)

- [x] A 

- [x] B 

- [x] C 

- [x] D 

- [x] E 

[布局](https://ant.design/components/checkbox-cn#checkbox-demo-layout)[](https://github.com/ant-design/ant-design/edit/master/components/checkbox/demo/layout.tsx)

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。

[](https://ant.design/~demos/checkbox-demo-layout?routeId=components%2Fcheckbox%2Findex.en-US)

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |  | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-dom), string> | - |  | 6.0.0 |
| defaultChecked | 初始是否选中 | boolean | false |  | × |
| disabled | 失效状态 | boolean | false |  | × |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |  | × |
| onChange | 变化时的回调函数 | (e: CheckboxChangeEvent) => void | - |  | × |
| onBlur | 失去焦点时的回调 | function() | - |  | × |
| onFocus | 获得焦点时的回调 | function() | - |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-dom), CSSProperties> | - |  | 6.0.0 |

#### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-group), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-group), string> | - | 6.7.0 |
| defaultValue | 默认选中的选项 | (string | number)[] | [] |  |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string[] | number[] | Option[] | [] |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-group), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/checkbox-cn#semantic-group), CSSProperties> | - | 6.7.0 |
| value | 指定选中的选项 | (string | number | boolean)[] | [] |  |
| title | 选项的 title | `string` | - |  |
| className | 选项的类名 | `string` | - | 5.25.0 |
| style | 选项的样式 | `React.CSSProperties` | - |  |
| onChange | 变化时的回调函数 | (checkedValue: T[]) => void | - |  |

##### Option

typescript

interface Option {

 label: string;

 value: string;

 disabled?: boolean;

}

### 方法

#### Checkbox

| 名称 | 描述 | 版本 |
| --- | --- | --- |
| blur() | 移除焦点 |  |
| focus() | 获取焦点 |  |
| nativeElement | 返回 Checkbox 的 DOM 节点 | 5.17.3 |

## Semantic DOM

### Checkbox

- [x] Checkbox 

*   ##### root

6.0.0   根元素，包含行内 flex 布局、基线对齐、光标样式、重置样式等复选框容器的基础样式  
*   ##### icon

6.0.0   选中框元素，包含尺寸、方向、背景色、边框、圆角、过渡动画，以及选中状态的勾选标记样式  
*   ##### label

6.0.0   文本元素，包含文本的内边距和与复选框的间距样式  

### Checkbox.Group

- [x] Apple - [x] Pear 

*   ##### root

6.7.0   根元素，复选框组合容器，包含布局、间距和排列等组合样式  
*   ##### item

6.7.0   选项元素，单个 Checkbox 的包裹容器，包含选中、禁用等选项样式  
*   ##### itemIcon

6.7.0   选项勾选框元素，包含尺寸、背景、边框、圆角和选中状态等图标样式  
*   ##### itemLabel

6.7.0   选项文本元素，包含内边距、文字颜色和对齐方式等文本样式  

## 主题变量（Design Token）

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgContainer | 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。 | string | #ffffff |
| colorBgContainerDisabled | 控制容器在禁用状态下的背景色。 | string | rgba(0,0,0,0.04) |
| colorBorder | 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。 | string | #d9d9d9 |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorPrimaryHover | 主色梯度下的悬浮态。 | string | #4096ff |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| colorWhite | 不随主题变化的纯白色 | string | #fff |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| controlInteractiveSize | 控制组件的交互大小。 | number | 16 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeLG | 大号字体大小 | number | 16 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| lineWidthBold | 描边类组件的默认线宽，如 Button、Input、Select 等输入类控件。 | number | 2 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| motionDurationFast | 动效播放速度，快速。用于小型元素动画交互 | string | 0.1s |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInBack | 预设动效曲率 | string | cubic-bezier(0.71, -0.46, 0.88, 0.6)[](https://cubic-bezier.com/#0.71,-0.46,0.88,0.6) |
| motionEaseOutBack | 预设动效曲率 | string | cubic-bezier(0.12, 0.4, 0.29, 1.46)[](https://cubic-bezier.com/#0.12,0.4,0.29,1.46) |
| paddingXS | 控制元素的特小内间距。 | number | 8 |

## FAQ

### 为什么在 Form.Item 下不能绑定数据？

Form.Item 默认绑定值属性到 `value` 上，而 Checkbox 的值属性为 `checked`。你可以通过 `valuePropName` 来修改绑定的值属性。

tsx

<Form.Item name="fieldA" valuePropName="checked">

 <Checkbox />

</Form.Item>
