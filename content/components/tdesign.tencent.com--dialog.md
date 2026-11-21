---
title: "TDesign · Dialog 对话框"
source: https://tdesign.tencent.com/vue/components/dialog
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-dialog
publisher: "腾讯"
---

# TDesign · Dialog 对话框

> 来源：[https://tdesign.tencent.com/vue/components/dialog](https://tdesign.tencent.com/vue/components/dialog)

---

### 确认类对话框

指带有取消及主要操作，指导用户进行二次确认的对话框。常用于反馈或容错的场景。

### 反馈类对话框

指显示某操作结果的对话框，标题区域有图标，仅有一个确认按钮。常用于操作后结果的展示，或危险、警告等信息的展示。

### 异步加载类对话框

按钮带加载标识，操作需要异步完成的对话框。适用于当前操作需要异步完成，等待后再自动关闭对话框。

### 自定义类对话框

可自定义对话框内容和底部按钮。

弹窗内容自定义

操作按钮自定义

底部按钮有两个控制属性：confirmBtn 和 cancelBtn。属性类型有多种：string | ButtonProps | TNode。也可以通过 footer 来自定义控制

### 模态与非模态类对话框

模态对话框会中断用户操作，必须处理当前对话框内容后才能进行其他操作。非模态框不中断用户操作。

### 弹出位置

可以通过 `placement` 和 `top` 属性来自定义控制对话框位置。

### 挂载元素

指定对话框元素挂载 DOM。

### 插件函数式调用

#### 插件调用

  - 方式一：`this.$dialog(options)`
  - 方式二：`this.$dialog.confirm(options)`
  - 方式三：`this.$dialog.alert(options)`

#### 函数调用

  - 方式一：`DialogPlugin(options)`
  - 方式二：`DialogPlugin.confirm(options)`
  - 方式三：`DialogPlugin.alert(options)`

#### 组件实例方法

组件实例指的是 `DialogInstance = this.$dialog(options)` 或者 `DialogInstance = DialogPlugin(options)`。

  - 销毁弹框：`DialogInstance.destroy()`
  - 隐藏弹框：`DialogInstance.hide()`
  - 显示弹窗：`DialogInstance.show()`
  - 更新弹框：`DialogInstance.update()`
注意在以下使用示例中，有多处并未销毁 DOM 元素。在实际应用中，需要考虑销毁 DOM 元素，否则当用户重复点击、创建插件或函数调用的实例后，会产生大量 DOM 元素、容易造成内存泄漏。

### Dialog Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| attach | String / Function | - | 对话框挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| body | String / Slot / Function | - | 对话框内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| cancelBtn | String / Object / Slot / Function | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。TS 类型：`string \| ButtonProps \| TNode \| null`，[Button API Documents](https://tdesign.tencent.com/vue/components/button?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts) | N |
| closeBtn | String / Boolean / Slot / Function | true | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：`string \| boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| closeOnEscKeydown | Boolean | true | 按下 ESC 时是否触发对话框关闭事件 | N |
| closeOnOverlayClick | Boolean | true | 点击蒙层时是否触发关闭事件 | N |
| confirmBtn | String / Object / Slot / Function | - | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件。TS 类型：`string \| ButtonProps \| TNode \| null`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| confirmLoading | Boolean | undefined | 确认按钮加载状态 | N |
| confirmOnEnter | Boolean | - | 是否在按下回车键时，触发确认事件 | N |
| default | String / Slot / Function | - | 对话框内容，同 body。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| destroyOnClose | Boolean | false | 是否在关闭弹框的时候销毁子元素 | N |
| dialogClassName | String | - | 弹框元素类名，示例：'t-class-dialog-first t-class-dialog-second' | N |
| dialogStyle | Object | - | 作用于对话框本身的样式。TS 类型：`Styles`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| draggable | Boolean | false | 对话框是否可以拖拽（仅在非模态对话框时有效） | N |
| footer | Boolean / Slot / Function | true | 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 Function 表示自定义底部内容。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| header | String / Boolean / Slot / Function | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 Function 表示自定义头部内容。TS 类型：`string \| boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| mode | String | modal | 对话框类型，有 4 种：模态对话框、非模态对话框、普通对话框、全屏对话框。弹出「模态对话框」时，只能操作对话框里面的内容，不能操作其他内容。弹出「非模态对话框」时，则可以操作页面内所有内容。「普通对话框」是指没有脱离文档流的对话框，可以在这个基础上开发更多的插件。可选项：modal/modeless/normal/full-screen | N |
| placement | String | top | 对话框位置，内置两种：垂直水平居中显示 和 靠近顶部（top:20%）显示。默认情况，为避免贴顶或贴底，顶部和底部距离最小为 `48px`，可通过调整 `top` 覆盖默认大小。可选项：top/center | N |
| preventScrollThrough | Boolean | true | 防止滚动穿透 | N |
| showInAttachedElement | Boolean | false | 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative | N |
| showOverlay | Boolean | true | 是否显示遮罩层 | N |
| theme | String | default | 对话框风格。可选项：default/info/warning/danger/success | N |
| top | String / Number | - | 用于弹框具体窗口顶部的距离，优先级大于 placement | N |
| visible | Boolean | - | 控制对话框是否显示 | N |
| width | String / Number | - | 对话框宽度，示例：320, '500px', '80%' | N |
| zIndex | Number | - | 对话框层级，Web 侧样式默认为 2500，移动端和小程序样式默认为 1500 | N |
| onBeforeClose | Function |  | TS 类型：`() => void`  对话框执行消失动画效果前触发 | N |
| onBeforeOpen | Function |  | TS 类型：`() => void`  对话框执行弹出动画效果前触发 | N |
| onCancel | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件 | N |
| onClose | Function |  | TS 类型：`(context: DialogCloseContext) => void`  关闭事件，点击取消按钮、点击关闭按钮、点击蒙层、按下 ESC 等场景下触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts)。  `type DialogEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`    `interface DialogCloseContext { trigger: DialogEventSource; e: MouseEvent \| KeyboardEvent }` | N |
| onCloseBtnClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击右上角关闭按钮时触发 | N |
| onClosed | Function |  | TS 类型：`() => void`  对话框消失动画效果结束后触发 | N |
| onConfirm | Function |  | TS 类型：`(context: { e: MouseEvent \| KeyboardEvent }) => void`  如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发 | N |
| onEscKeydown | Function |  | TS 类型：`(context: { e: KeyboardEvent }) => void`  按下 ESC 时触发事件 | N |
| onOpened | Function |  | TS 类型：`() => void`  对话框弹出动画效果结束后触发 | N |
| onOverlayClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  如果蒙层存在，点击蒙层时触发 | N |

### Dialog Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| before-close | - | 对话框执行消失动画效果前触发 |
| before-open | - | 对话框执行弹出动画效果前触发 |
| cancel | `(context: { e: MouseEvent })` | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件 |
| close | `(context: DialogCloseContext)` | 关闭事件，点击取消按钮、点击关闭按钮、点击蒙层、按下 ESC 等场景下触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts)。  `type DialogEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`    `interface DialogCloseContext { trigger: DialogEventSource; e: MouseEvent \| KeyboardEvent }` |
| close-btn-click | `(context: { e: MouseEvent })` | 点击右上角关闭按钮时触发 |
| closed | - | 对话框消失动画效果结束后触发 |
| confirm | `(context: { e: MouseEvent \| KeyboardEvent })` | 如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发 |
| esc-keydown | `(context: { e: KeyboardEvent })` | 按下 ESC 时触发事件 |
| opened | - | 对话框弹出动画效果结束后触发 |
| overlay-click | `(context: { e: MouseEvent })` | 如果蒙层存在，点击蒙层时触发 |

### DialogOptions

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| attach | String / Function | 'body' | 对话框挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| className | String | - | 弹框类名，示例：'t-class-dialog-first t-class-dialog-second' | N |
| style | String / Object | - | 弹框 style 属性，输入 [CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText)。TS 类型：`string \| Styles`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| `Omit<DialogProps, 'attach'>` | - | - | 继承 `Omit<DialogProps, 'attach'>` 中的全部属性 | N |

### DialogInstance

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| destroy | - | - | 必需。销毁弹框 |
| hide | - | - | 必需。隐藏弹框 |
| setConfirmLoading | `(loading: boolean)` | - | 必需。设置确认按钮加载状态 |
| show | - | - | 必需。显示弹框 |
| update | `(props: DialogOptions)` | - | 必需。更新弹框内容 |

### DialogPlugin

同时也支持 `this.$dialog`。

| 参数名称 | 参数类型 | 参数默认值 | 参数描述 |
| --- | --- | --- | --- |
| options | - | - | TS 类型：`DialogOptions` |
插件返回值：`DialogInstance`

### DialogPlugin.confirm

同时也支持 `this.$dialog.confirm`。

| 参数名称 | 参数类型 | 参数默认值 | 参数描述 |
| --- | --- | --- | --- |
| options | - | - | TS 类型：`DialogOptions` |
插件返回值：`DialogInstance`

### DialogPlugin.alert

同时也支持 `this.$dialog.alert`。

| 参数名称 | 参数类型 | 参数默认值 | 参数描述 |
| --- | --- | --- | --- |
| options | Object | - | TS 类型：`Omit<DialogOptions, 'cancelBtn'>` |
插件返回值：`DialogInstance`

### 何时使用

需要展示操作反馈或提示信息；

需要填写或展示相关信息，需中断用户操作，但不中断当前流程时；

### 推荐/慎用示例

##### 对话框的主要说明文字需明确表达其目的及操作的后果。

![](https://tdesign.gtimg.com/site/design/guide/dialog/dialog-1@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/dialog/dialog-2@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 对话的按钮需使用可指引后果的操作词汇，而不是模棱两可的词汇。

![](https://tdesign.gtimg.com/site/design/guide/dialog/dialog-3@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/dialog/dialog-4@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

### 相似组件

| 相似组件 | 何时使用 |
| --- | --- |
| [对话框](https://tdesign.tencent.com/vue/components/dialog) | 对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时，在页面中打开一个对话框承载相应的信息及操作。 |
| [气泡确认框](https://tdesign.tencent.com/vue/components/Popconfirm) | 气泡确认框通常用于需要用户进行二次确认、需要给用户展示反馈信息的情况下，与对话框中的提示类对话框的区别是比较快速轻量，适用于不会造成严重后果的二次确认场景，或反馈信息不需要强烈引起用户注意的情况。 |
