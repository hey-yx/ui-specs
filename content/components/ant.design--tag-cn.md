---
title: "Ant Design · Tag 标签"
source: https://ant.design/components/tag-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-tag
publisher: "Ant Design"
---

# Ant Design · Tag 标签

> 来源：[https://ant.design/components/tag-cn](https://ant.design/components/tag-cn)

---

*   用于标记事物的属性和维度。
*   进行分类。

## 代码演示

Tag 1[Link](https://github.com/ant-design/ant-design/issues/1862)Prevent Default Tag 2 Tag 3

设置 `closable` 可显示默认关闭按钮，也可通过对象配置 `closeIcon` 和 `aria-label` 等无障碍属性。顶层 `closeIcon` 是简便配置方式，可设置自定义关闭图标或设为 `true` 显示默认关闭按钮。可关闭标签具有 `onClose` 事件，可通过 `e.preventDefault()` 阻止关闭。

Unremovable Tag 2 Tag 3 New Tag

用数组生成一组标签，可以动态添加和删除。

Tag 1 Tag 2 Tag 3

 New Tag

Status (filled)

success processing warning error default

Status (solid)

success processing warning error default

Status (outlined)

success processing warning error default

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

Object Function

React Vue Angular

meet-student thinkasany

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Tag 的[语义化结构](https://ant.design/components/tag-cn#semantic-dom)样式。

6.0.0

Presets (filled)

magenta red volcano orange gold lime green cyan blue geekblue purple

Presets (solid)

magenta red volcano orange gold lime green cyan blue geekblue purple

Presets (outlined)

magenta red volcano orange gold lime green cyan blue geekblue purple

Custom (filled)

#f50#2db7f5#87d068#108ee9

Custom (solid)

#f50#2db7f5#87d068#108ee9

Custom (outlined)

#f50#2db7f5#87d068#108ee9

我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

Checkable

Yes

Single

Movies Books Music Sports

Multiple

Movies Books Music Sports

可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。而 `CheckableTagGroup` 则提供了类似 `CheckboxGroup` 或 `RadioGroup` 的功能。

> `CheckableTag` 为完全受控组件，不支持非受控用法。

Tag with icon

Twitter Youtube Facebook LinkedIn

CheckableTag with icon

Twitter Youtube Facebook LinkedIn

Tag with third-party icon

Star (em)Heart (px)Closable

你可以通过 `icon` 属性为标签添加自定义图标。注意，CheckableTag 的 `icon` 属性在 `>=5.27.0` 版本支持。

若需要控制图标的位置，请在 `children` 中直接使用 `<XXXIcon />` 组件，而非通过 `icon` 属性实现。

`icon` 也支持第三方图标库的裸 `<svg>` 元素，无论其尺寸以 `em` 还是 `px` 设置，都会自动与文字居中对齐。

Tag 1 Tag 2 Tag 3

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-dom), string> | - |  | 6.0.0 |
| closable | 是否显示关闭按钮，也可通过对象配置关闭图标和 `aria-*` 属性 | boolean | ({ closeIcon?: ReactNode } & React.AriaAttributes) | false | - | ✔ |
| closeIcon | 自定义关闭图标，是 `closable` 的简便配置方式。未设置 `closable` 时，设置为 `true` 显示默认关闭按钮，设置为 `null` 或 `false` 隐藏关闭按钮（5.7.0 起支持） | ReactNode | false | 4.4.0 | 5.14.0 |
| color | 标签色 | string | `variant="solid"` 时为 `default` | `solid` 默认颜色: 6.4.0 | × |
| disabled | 是否禁用标签 | boolean | false | 6.0.0 | × |
| href | 点击跳转的地址，指定此属性`tag`组件会渲染成 `<a>` 标签 | string | - | 6.0.0 | × |
| icon | 设置图标 | ReactNode | - |  | × |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-dom), CSSProperties> | - |  | 6.0.0 |
| target | 相当于 a 标签的 target 属性，href 存在时生效 | string | - | 6.0.0 | × |
| variant | 标签变体 | `'filled' | 'solid' | 'outlined'` | `'filled'` | 6.0.0 | 6.0.0 |
| ~~bordered~~ | 是否带边框，请使用 `variant="filled"` 替代 | boolean | true | - | × |

### Tag.CheckableTag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checked | 设置标签的选中状态 | boolean | false |  |
| icon | 设置图标 | ReactNode | - | 5.27.0 |
| onChange | 点击标签时触发的回调 | (checked) => void | - |  |

### Tag.CheckableTagGroup

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-group), string> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-group), string> | - |  |
| defaultValue | 初始选中值 | `string | number | Array<string | number> | null` | - |  |
| disabled | 禁用选中 | `boolean` | - |  |
| multiple | 多选模式 | `boolean` | - |  |
| options | 选项列表。对象类型的选项支持为每一项单独设置 `className` 和 `style` | `Array<{ className?: string; label: ReactNode; style?: CSSProperties; value: string | number } | string | number>` | - | `className` 和 `style`: 6.4.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-group), CSSProperties> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/tag-cn#semantic-group), CSSProperties> | - |  |
| value | 选中值 | `string | number | Array<string | number> | null` | - |  |
| onChange | 点击标签时触发的回调 | `(value: string | number | Array<string | number> | null) => void` | - |  |

## Semantic DOM

### Tag

Ant Design

*   ##### root

6.0.0 
根元素，包含行内块布局、自动高度、内边距、字体大小、行高、禁止换行、背景色、边框、圆角、透明度、过渡动画、文本对齐、相对定位等标签的基础样式 
*   ##### icon

6.0.0 
图标元素，包含字体大小、颜色、光标样式、过渡动画等图标的显示样式 
*   ##### content

6.0.0 
内容元素，包含文本内容的颜色、字体样式等内容区域的样式 
*   ##### close

6.4.0 
关闭元素，包含关闭按钮的布局、光标样式、过渡动画等交互样式 

### Tag.CheckableTagGroup

Movies Books Music Sports

*   ##### root 
根元素，设置标签组的容器样式和布局 
*   ##### item 
标签项元素，设置行内块显示、高度、内边距、字体大小、行高、背景色、边框、圆角、透明度、过渡动画、可选中状态等样式 

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultBg | 默认背景色 | string | #f5f5f5 |
| defaultColor | 默认文字颜色 | string | rgba(0,0,0,0.88) |
| solidTextColor | 默认实心标签的文本色 | string | #fff |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgContainerDisabled | 控制容器在禁用状态下的背景色。 | string | rgba(0,0,0,0.04) |
| colorBgSolid | 实心的背景颜色，目前只用在默认实心按钮背景色上。 | string | rgb(0,0,0) |
| colorBorder | 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。 | string | #d9d9d9 |
| colorBorderDisabled | 控制元素在禁用状态下的边框颜色。 | string | #d9d9d9 |
| colorFillSecondary | 二级填充色可以较为明显地勾勒出元素形体，如 Rate、Skeleton 等。也可以作为三级填充色的 Hover 状态，如 Table 等。 | string | rgba(0,0,0,0.06) |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryActive | 主色梯度下的深色激活态。 | string | #0958d9 |
| colorPrimaryHover | 主色梯度下的悬浮态。 | string | #4096ff |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| colorTextHeading | 控制标题字体颜色。 | string | rgba(0,0,0,0.88) |
| colorTextLightSolid | 控制带背景色的文本，例如 Primary Button 组件中的文本高亮颜色。 | string | #fff |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeIcon | 控制选择器、级联选择器等中的操作图标字体大小。正常情况下与 fontSizeSM 相同。 | number | 12 |
| fontSizeSM | 小号字体大小 | number | 12 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightSM | 小型文本行高 | number | 1.6666666666666667 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| paddingXS | 控制元素的特小内间距。 | number | 8 |
| paddingXXS | 控制元素的极小内间距。 | number | 4 |
