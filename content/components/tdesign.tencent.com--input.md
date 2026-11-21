---
title: "TDesign · Input 输入框"
source: https://tdesign.tencent.com/vue/components/input
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-input
publisher: "腾讯"
---

# TDesign · Input 输入框

> 来源：[https://tdesign.tencent.com/vue/components/input](https://tdesign.tencent.com/vue/components/input)

---

### 基础输入框

最基础的单行输入框，按状态可分为正常、禁用、错误、带额外提示。通常在需要输入少量内容（20 个字以内）的场景下使用。

### 前后置标签输入框

在输入框前后加入一些特定的纯展示标签，通常在需要提高辨识效率时使用。

### 组合输入框

多个输入框相组合，或与其他控件（如下拉）相组合，以方便识别。用于一些固定组合或者固定格式输入的场景，如输入电话号码。

### 可清空内容输入框

带清空操作的输入框，可快捷清空输入过的内容。

### 密码输入框

由符号代替输入内容的输入框，并可通过操作展示原文信息。用于强安全信息输入的场景。

### 不同状态的输入框

输入框状态可分为：正常、禁用、异常（带提示）、带额外内容提示、带状态图标提示。

### 不同尺寸的输入框

有大中小三种不同高度、宽度的输入框，以适应不同尺寸布局。设置 `size = large | medium | small` 实现不同的尺寸。

### 不同对齐方式的输入框

输入框共有三种对齐方式：左对齐、局中对齐和右对齐。设置 `align = left | center | right` 实现不同的对齐方式。

### 自适应宽度的输入框

输入框支持宽度随输入内容变化而变化，设置属性 `autoWidth` 即可。

### 带长度限制的输入框

  - 使用 `maxlength` 设置输入框的长度限度，一个中文等于一个计数长度。
  - 使用 `maxcharacter` 设置输入框的长度限度，一个中文汉字表示两个字符长度。
  - 使用 `allowInputOverMax` 设置是否允许在输入内容已经超出限制时继续输入。
  - 使用 `showLimitNumber` 设置是否显示输入框右侧的字数统计。

### 可格式化数据的输入框

可以使用 `format` 设置输入框在失焦和聚焦时的不同内容呈现。

### 无边框模式的输入框

可以使用 `borderless` 来开启无边框模式。

### Input Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| align | String | left | 文本内容位置，居左/居中/居右。可选项：left/center/right | N |
| allowInputOverMax | Boolean | false | 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入 | N |
| autoWidth | Boolean | false | 宽度随内容自适应 | N |
| autocomplete | String | undefined | 是否开启自动填充功能，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | N |
| autofocus | Boolean | false | 自动聚焦 | N |
| borderless | Boolean | false | 是否开启无边框模式 | N |
| clearable | Boolean | false | 是否可清空 | N |
| disabled | Boolean | undefined | 是否禁用输入框 | N |
| format | Function | - | 指定输入框展示值的格式。注意 `type=number` 时请勿使用，此功能建议更为使用 `InputNumber` 组件。TS 类型：`InputFormatType` `type InputFormatType = (value: string) => string`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/input/type.ts) | N |
| inputClass | String / Object / Array | - | t-input 同级类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`。TS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| label | String / Slot / Function | - | 左侧文本。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | N |
| maxlength | String / Number | - | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为空，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | N |
| name | String | - | 名称 | N |
| placeholder | String | undefined | 占位符 | N |
| prefixIcon | Slot / Function | - | 组件前置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| readonly | Boolean | undefined | 只读状态 | N |
| showClearIconOnEmpty | Boolean | false | 输入框内容为空时，悬浮状态是否显示清空按钮，默认不显示 | N |
| showLimitNumber | Boolean | false | 是否在输入框右侧显示字数统计 | N |
| size | String | medium | 输入框尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| spellCheck | Boolean | false | 是否开启拼写检查，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/spellcheck) | N |
| status | String | default | 输入框状态。可选项：default/success/warning/error | N |
| suffix | String / Slot / Function | - | 后置图标前的后置内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| suffixIcon | Slot / Function | - | 组件后置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| tips | String / Slot / Function | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| type | String | text | 输入框类型。`type=number` 仅支持最基础的数字输入功能，更多功能建议使用 `InputNumber` 组件。可选项：text/number/url/tel/password/search/submit/hidden | N |
| value | String / Number | - | 输入框的值。支持语法糖 `v-model`。TS 类型：`T` `type InputValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/input/type.ts) | N |
| defaultValue | String / Number | - | 输入框的值。非受控属性。TS 类型：`T` `type InputValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/input/type.ts) | N |
| onBlur | Function |  | TS 类型：`(value: T, context: { e: FocusEvent }) => void`  失去焦点时触发 | N |
| onChange | Function |  | TS 类型：`(value: T, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' }) => void`  输入框值发生变化时触发。参数 `trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制 | N |
| onClear | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  清空按钮点击时触发 | N |
| onClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击组件时触发 | N |
| onCompositionend | Function |  | TS 类型：`(value: string, context: { e: CompositionEvent }) => void`  中文输入结束时触发 | N |
| onCompositionstart | Function |  | TS 类型：`(value: string, context: { e: CompositionEvent }) => void`  中文输入开始时触发 | N |
| onEnter | Function |  | TS 类型：`(value: T, context: { e: KeyboardEvent }) => void`  回车键按下时触发 | N |
| onFocus | Function |  | TS 类型：`(value: T, context: { e: FocusEvent }) => void`  获得焦点时触发 | N |
| onKeydown | Function |  | TS 类型：`(value: T, context: { e: KeyboardEvent }) => void`  键盘按下时触发 | N |
| onKeypress | Function |  | TS 类型：`(value: T, context: { e: KeyboardEvent }) => void`  按下字符键时触发（keydown -> keypress -> keyup） | N |
| onKeyup | Function |  | TS 类型：`(value: T, context: { e: KeyboardEvent }) => void`  释放键盘时触发 | N |
| onMouseenter | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  进入输入框时触发 | N |
| onMouseleave | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  离开输入框时触发 | N |
| onPaste | Function |  | TS 类型：`(context: { e: ClipboardEvent; pasteValue: string }) => void`  粘贴事件，`pasteValue` 表示粘贴板的内容 | N |
| onValidate | Function |  | TS 类型：`(context: { error?: 'exceed-maximum' \| 'below-minimum' }) => void`  字数超出限制时触发 | N |
| onWheel | Function |  | TS 类型：`(context: { e: WheelEvent }) => void`  输入框中滚动鼠标时触发 | N |

### Input Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| blur | `(value: T, context: { e: FocusEvent })` | 失去焦点时触发 |
| change | `(value: T, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' })` | 输入框值发生变化时触发。参数 `trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制 |
| clear | `(context: { e: MouseEvent })` | 清空按钮点击时触发 |
| click | `(context: { e: MouseEvent })` | 点击组件时触发 |
| compositionend | `(value: string, context: { e: CompositionEvent })` | 中文输入结束时触发 |
| compositionstart | `(value: string, context: { e: CompositionEvent })` | 中文输入开始时触发 |
| enter | `(value: T, context: { e: KeyboardEvent })` | 回车键按下时触发 |
| focus | `(value: T, context: { e: FocusEvent })` | 获得焦点时触发 |
| keydown | `(value: T, context: { e: KeyboardEvent })` | 键盘按下时触发 |
| keypress | `(value: T, context: { e: KeyboardEvent })` | 按下字符键时触发（keydown -> keypress -> keyup） |
| keyup | `(value: T, context: { e: KeyboardEvent })` | 释放键盘时触发 |
| mouseenter | `(context: { e: MouseEvent })` | 进入输入框时触发 |
| mouseleave | `(context: { e: MouseEvent })` | 离开输入框时触发 |
| paste | `(context: { e: ClipboardEvent; pasteValue: string })` | 粘贴事件，`pasteValue` 表示粘贴板的内容 |
| validate | `(context: { error?: 'exceed-maximum' \| 'below-minimum' })` | 字数超出限制时触发 |
| wheel | `(context: { e: WheelEvent })` | 输入框中滚动鼠标时触发 |

### InputGroup Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| separate | Boolean | - | 多个输入框之间是否需要间隔 | N |

### 何时使用

需要用户录入信息时；

需要对用户录入的内容进行即时反馈时。

### 组件搭配使用

##### 与气泡搭配使用，在需要对输入框中内容进行提示或反馈时，可通过气泡内容展示。

![](https://tdesign.gtimg.com/site/design/guide/input/input-1@2x.png)

---

![](https://tdesign.gtimg.com/site/design/guide/input/input-2@2x.png)

---

![](https://tdesign.gtimg.com/site/design/guide/input/input-3@2x.png)
