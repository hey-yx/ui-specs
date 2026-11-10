---
title: "Ant Design · Input 输入框"
source: https://ant.design/components/input-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-input
publisher: "Ant Design"
---

# Ant Design · Input 输入框

> 来源：[https://ant.design/components/input-cn](https://ant.design/components/input-cn)

---

*   需要用户输入表单域内容时。
*   提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

基本使用。

Input 形态变体，可选 `outlined``filled``borderless``underlined` 四种形态。

5.13.0

https://

带有搜索按钮的输入框。

用于多行输入。

##### With formatter (Upcase)

##### With Disabled

##### With Length (8)

##### With variant

##### With custom display character

##### With custom ReactNode separator

/////

##### With custom function separator

—————

一次性密码输入框。

5.16.0

￥RMB

￥RMB

在输入框上添加前缀或后缀图标。注意：Input.Password 的 `suffix` 属性在 `>=5.27.0` 版本支持。

带移除图标的输入框，点击图标删除所有内容。

Input 和 TextArea 均支持通过 `allowClear` 配置清除按钮。`tabIndex` 为 `-1` 时，清除按钮不参与 Tab 键导航。

##### Exceed Max

12 / 10

##### Emoji count as length 1

3

##### Not exceed max

6 / 6

在某些场景下，需要定制计数能力（例如 emoji 长度以 1 计算），可以通过 `count` 属性来实现。在该模式下，通过 `count.max` 属性来超出原生 `maxLength` 的限制。

>= 5.10.0

聚焦额外配置属性。

我们为 `<Input />` 输入框定义了三种尺寸（大、中、小），高度分别为 `40px`、`32px` 和 `24px`。

https://

Zhejiang

用于 `onSearch` 的时候展示 `loading`。

`autoSize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autoSize` 可以设定为一个对象，指定最小行数和最大行数。

结合 [Tooltip](https://ant.design/components/tooltip-cn) 组件，实现一个数值输入框，方便内容超长时的全量展现。

密码框。

0 / 20 0 / 100 0 / 100

展示字数提示。

使用 `status` 为 Input 添加状态，可选 `error` 或者 `warning`。

8

*****

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Input 的[语义化结构](https://ant.design/components/input-cn#semantic-input)样式。

6.0.0

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

### Input

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| ~~addonAfter~~ | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | ReactNode | - |  | × |
| ~~addonBefore~~ | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | ReactNode | - |  | × |
| allowClear | 是否显示清除按钮 | boolean | [AllowClearConfig](https://ant.design/components/input-cn#allowclearconfig) | - | - | ✔ |
| ~~bordered~~ | 是否有边框, 请使用 `variant` 替换 | boolean | true | 4.5.0 | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-input), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-input), string> | - | 5.4.0 | 5.7.0 |
| count | 字符计数配置 | [CountConfig](https://ant.design/components/input-cn#countconfig) | - | 5.10.0 | × |
| defaultValue | 输入框默认内容 | string | - |  | × |
| disabled | 是否禁用状态，默认为 false | boolean | false | - | × |
| id | 输入框的 id | string | - |  | × |
| maxLength | 最大长度 | number | - |  | × |
| prefix | 带有前缀图标的 input | ReactNode | - |  | × |
| showCount | 是否展示字数 | boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode } | false | 4.18.0 info.value: 4.23.0 | × |
| status | 设置校验状态 | 'error' | 'warning' | - | 4.19.0 | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-input), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-input), CSSProperties> | - | 5.4.0 | 5.7.0 |
| size | 控件大小。注：标准表单内的输入框大小限制为 `medium` | `large` | `medium` | `small` | - |  | × |
| suffix | 带有后缀图标的 input | ReactNode | - |  | × |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string | `text` |  | × |
| value | 输入框内容 | string | - |  | × |
| variant | 形态变体 | `outlined` | `borderless` | `filled` | `underlined` | `outlined` | 5.13.0 | `underlined`: 5.24.0 | 5.19.0 |
| onChange | 输入框内容变化时的回调 | function(e) | - |  | × |
| onPressEnter | 按下回车的回调 | function(e) | - |  | × |
| onClear | 按下清除按钮的回调 | () => void | - | 5.20.0 | × |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 属性，则 `value``defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://zh-hans.react.dev/reference/react-dom/components/input) 一致。

#### AllowClearConfig

支持全局配置的字段按组件配置、全局配置、默认值的顺序取值。`allowClear={true}` 继承全局配置；`disabled: false` 和 `tabIndex: 0` 可覆盖全局值。

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| clearIcon | 自定义清除图标 | ReactNode | - | - | ✔ |
| disabled | `true` 时等同于 `allowClear={false}` | boolean | false | 6.4.0 | 6.4.0 |
| label | 清除按钮的无障碍名称 | string | 组件的本地化文案 | 6.7.0 | 6.7.0 |
| tabIndex | 清除按钮的 Tab 键顺序。`-1` 表示不参与 Tab 键导航 | number | 0 | 6.7.0 | 6.7.0 |

#### CountConfig

tsx

interface CountConfig {

max?: number;

strategy?: (value: string) => number;

show?: boolean | ((args: { value: string; count: number; maxLength?: number }) => ReactNode);

exceedFormatter?: (value: string, config: { max: number }) => string;

}

### Input.TextArea

同 Input 属性，外加：

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| autoSize | 自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 } | boolean | object | false |  | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-textarea), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-textarea), string> | - | 5.4.0 | 5.15.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-textarea) , CSSProperties> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-textarea) , CSSProperties> | - | 5.4.0 | 5.15.0 |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

### Input.Search

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-search), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-search), string> | - | 6.0.0 | 6.0.0 |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 `addonAfter` 冲突。 | ReactNode | false |  | × |
| loading | 搜索 loading | boolean | false |  | × |
| onSearch | 点击搜索图标、清除图标，或按下回车键时的回调 | function(value, event, { source: "input" | "clear" }) | - |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-search) , CSSProperties> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-search) , CSSProperties> | - | 6.0.0 | 6.0.0 |
| searchIcon | 自定义搜索图标 | ReactNode | - | 6.4.0 | 6.4.0 |
| variant | 形态变体 | `outlined` | `borderless` | `filled` | `underlined` | `outlined` | 5.13.0 | `underlined`: 5.24.0 | 6.6.0 |

其余属性和 Input 一致。

### Input.Password

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| classNames | 语义化结构 class | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-password), string> | - | 5.4.0 | 6.4.0 |
| iconRender | 自定义切换按钮 | (visible) => ReactNode | (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />) | 4.3.0 | 6.4.0 |
| styles | 语义化结构 style | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-password), CSSProperties> | - | 5.4.0 | 6.4.0 |
| variant | 形态变体 | `outlined` | `borderless` | `filled` | `underlined` | `outlined` | 5.13.0 | `underlined`: 5.24.0 | 6.6.0 |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | boolean | [VisibilityToggle](https://ant.design/components/input-cn#visibilitytoggle) | true |  | × |

### Input.OTP

`5.16.0` 新增。

> 开发者注意事项：
> 
> 
> 当 `mask` 属性的类型为 string 时，我们强烈推荐接收单个字符或单个 emoji，如果传入多个字符或多个 emoji，则会在控制台抛出警告。

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| autoComplete | 输入元素的 autocomplete 属性，例如 `one-time-code` 可用于 OTP 自动填充 | string | - | 6.3.0 | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-otp), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-otp), string> | - | 6.0.0 | 6.0.0 |
| defaultValue | 默认值 | string | - |  | × |
| disabled | 是否禁用 | boolean | false |  | × |
| formatter | 格式化展示，留空字段会被 `` 填充 | (value: string) => string | - |  | × |
| separator | 分隔符，在指定索引的输入框后渲染分隔符 | ReactNode |((i: number) => ReactNode) | - | 5.24.0 | × |
| mask | 自定义展示，和 `formatter` 的区别是不会修改原始值 | boolean | string | `false` | `5.17.0` | × |
| length | 输入元素数量 | number | 6 |  | × |
| status | 设置校验状态 | 'error' | 'warning' | - |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-otp) , CSSProperties> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/input-cn#semantic-otp) , CSSProperties> | - | 6.0.0 | 6.0.0 |
| size | 输入框大小 | `small` | `medium` | `large` | `medium` |  | × |
| variant | 形态变体 | `outlined` | `borderless` | `filled` | `underlined` | `outlined` | `underlined`: 5.24.0 | 6.6.0 |
| value | 输入框内容 | string | - |  | × |
| onChange | 当输入框内容全部填充时触发回调 | (value: string) => void | - |  | × |
| onInput | 输入值变化时触发的回调 | (value: string[]) => void | - | `5.22.0` | × |

#### VisibilityToggle

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| tabIndex | 设置切换按钮的 `tabIndex` | number | 0 | 6.5.0 |
| visible | 用于手动控制密码显隐 | boolean | false | 4.24.0 |
| onVisibleChange | 显隐密码的回调 | (visible) => void | - | 4.24.0 |

#### Input Methods

| 名称 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| blur | 取消焦点 | - |  |
| focus | 获取焦点 | (option?: { preventScroll?: boolean, cursor?: 'start' | 'end' | 'all' }) | option - 4.10.0 |

## Semantic DOM

### Input

17

*   ##### root 
根元素，包含相对定位、行内块布局、宽度、最小宽度、内边距、颜色、字体、行高、圆角、过渡动画等输入框容器的基础样式 
*   ##### prefix 
前缀的包裹元素，包含前缀内容的布局和样式 
*   ##### input 
输入框元素，包含输入框的核心交互样式和文本输入相关的样式 
*   ##### suffix 
后缀的包裹元素，包含后缀内容的布局和样式 
*   ##### clear

6.4.0 
清除按钮元素，包含清除内容按钮的布局、显隐和交互样式 
*   ##### count 
文字计数元素，包含字符计数显示的字体和颜色样式 

### Input.TextArea

17 / 100

*   ##### root 
根元素，设置文本域包装器的样式、边框、圆角、过渡动画和状态控制 
*   ##### textarea 
文本域元素，设置字体、行高、内边距、颜色、背景、边框、文本输入和多行文本展示样式 
*   ##### clear

6.4.0 
清除按钮元素，包含清除内容按钮的布局、显隐和交互样式 
*   ##### count 
文字计数元素，设置字符计数显示的位置、字体、颜色和数值统计样式 

### Input.Search

17

*   ##### root 
根元素 
*   ##### prefix 
前缀的包裹元素 
*   ##### input 
输入框元素 
*   ##### suffix 
后缀的包裹元素 
*   ##### clear

6.4.0 
清除按钮元素 
*   ##### count 
文字计数元素 
*   ##### button.root 
按钮根元素 
*   ##### button.icon 
按钮图标元素 
*   ##### button.content 
按钮内容元素 

### Input.Password

17

*   ##### root 
根元素 
*   ##### prefix 
前缀的包裹元素 
*   ##### input 
输入框元素 
*   ##### suffix 
后缀的包裹元素 
*   ##### clear

6.4.0 
清除按钮元素 
*   ##### count 
文字计数元素 

### Input.OTP

-----

*   ##### root 
根元素，设置行内flex布局、对齐方式、列间距和包装样式 
*   ##### input 
输入框元素，设置文本居中、内边距和数字输入样式 
*   ##### separator 
分隔符元素，设置OTP输入框之间的分隔符显示样式 

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeBg | 输入框激活状态时背景颜色 | string | #ffffff |
| activeBorderColor | 激活态边框色 | string | #1677ff |
| activeShadow | 激活态阴影 | string | 0 0 0 2px rgba(5,145,255,0.1) |
| addonBg | 前/后置标签背景色 | string | rgba(0,0,0,0.02) |
| errorActiveShadow | 错误状态时激活态阴影 | string | 0 0 0 2px rgba(255,38,5,0.06) |
| hoverBg | 输入框hover状态时背景颜色 | string | #ffffff |
| hoverBorderColor | 悬浮态边框色 | string | #4096ff |
| inputFontSize | 字体大小 | number | 14 |
| inputFontSizeLG | 大号字体大小 | number | 16 |
| inputFontSizeSM | 小号字体大小 | number | 14 |
| paddingBlock | 输入框纵向内边距 | number | 4 |
| paddingBlockLG | 大号输入框纵向内边距 | number | 7 |
| paddingBlockSM | 小号输入框纵向内边距 | number | 0 |
| paddingInline | 输入框横向内边距 | number | 11 |
| paddingInlineLG | 大号输入框横向内边距 | number | 11 |
| paddingInlineSM | 小号输入框横向内边距 | number | 7 |
| warningActiveShadow | 警告状态时激活态阴影 | string | 0 0 0 2px rgba(255,215,5,0.1) |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgContainerDisabled | 控制容器在禁用状态下的背景色。 | string | rgba(0,0,0,0.04) |
| colorBorder | 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。 | string | #d9d9d9 |
| colorBorderDisabled | 控制元素在禁用状态下的边框颜色。 | string | #d9d9d9 |
| colorError | 用于表示操作失败的 Token 序列，如失败按钮、错误状态提示（Result）组件等。 | string | #ff4d4f |
| colorErrorBg | 错误色的浅色背景颜色 | string | #fff2f0 |
| colorErrorText | 错误色的文本默认态 | string | #ff4d4f |
| colorFillTertiary | 三级填充色用于勾勒出元素形体的场景，如 Slider、Segmented 等。如无强调需求的情况下，建议使用三级填色作为默认填色。 | string | rgba(0,0,0,0.04) |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| colorWarning | 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。 | string | #faad14 |
| colorWarningBg | 警戒色的浅色背景颜色 | string | #fffbe6 |
| colorWarningText | 警戒色的文本默认态 | string | #faad14 |
| borderRadius | 基础组件的圆角大小，例如按钮、输入框、卡片等 | number | 6 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| controlHeightLG | 较高的组件高度 | number | 40 |
| controlHeightSM | 较小的组件高度 | number | 24 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| paddingXS | 控制元素的特小内间距。 | number | 8 |
| paddingXXS | 控制元素的极小内间距。 | number | 4 |

## FAQ

### 为什么我动态改变 `prefix/suffix/showCount` 时，Input 会失去焦点？

当 Input 动态添加或者删除 `prefix/suffix/showCount` 时，React 会重新创建 DOM 结构而新的 input 是没有焦点的。你可以预设一个空的 `<span />` 来保持 DOM 结构不变：

jsx

const suffix = condition ? <Icon type="smile" /> : <span />;

<Input suffix={suffix} />;

### 为何 TextArea 受控时，`value` 可以超过 `maxLength`？

受控时，组件应该按照受控内容展示，这是为了防止在表单组件内使用时显示值和提交值不一致的问题。
