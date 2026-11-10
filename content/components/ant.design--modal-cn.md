---
title: "Ant Design · Modal 对话框"
source: https://ant.design/components/modal-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-modal
publisher: "Ant Design"
---

# Ant Design · Modal 对话框

> 来源：[https://ant.design/components/modal-cn](https://ant.design/components/modal-cn)

---

# Modal

对话框

展示一个对话框，提供标题、内容区、操作区。

使用 import { Modal } from 'antd';
反馈

[components/modal](https://github.com/ant-design/ant-design/blob/master/components/modal)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Modal%20OR%20is%3Aissue%20in%3Atitle%20%E5%AF%B9%E8%AF%9D%E6%A1%86))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/modal/index.zh-CN.md)[LLMs.md](https://ant.design/components/modal-cn.md)

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 [`App.useApp`](https://ant.design/components/app-cn) 封装的语法糖方法。

## 代码演示

Open Modal

[基本](https://ant.design/components/modal-cn#modal-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/basic.tsx)

基础弹框。

[](https://ant.design/~demos/modal-demo-basic?routeId=components%2Fmodal%2Findex.en-US)

Open Modal with customized footer

[自定义页脚](https://ant.design/components/modal-cn#modal-demo-footer)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/footer.tsx)

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

[](https://ant.design/~demos/modal-demo-footer?routeId=components%2Fmodal%2Findex.en-US)

Open Modal

[加载中](https://ant.design/components/modal-cn#modal-demo-loading)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/loading.tsx)

设置对话框加载状态。

[](https://ant.design/~demos/modal-demo-loading?routeId=components%2Fmodal%2Findex.en-US)

5.18.0

Confirm

Warning

Info

Error

[使用 hooks 获得上下文](https://ant.design/components/modal-cn#modal-demo-hooks)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/hooks.tsx)

通过 `Modal.useModal` 创建支持读取 context 的 `contextHolder`。其中仅有 hooks 方法支持 Promise `await` 操作。

[](https://ant.design/~demos/modal-demo-hooks?routeId=components%2Fmodal%2Findex.en-US)

Open modal to close in 5s

[手动更新和移除](https://ant.design/components/modal-cn#modal-demo-manual)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/manual.tsx)

通过返回的 instance 手动更新和关闭对话框。

[](https://ant.design/~demos/modal-demo-manual?routeId=components%2Fmodal%2Findex.en-US)

Open Modal with customized button props

[自定义页脚按钮属性](https://ant.design/components/modal-cn#modal-demo-button-props)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/button-props.tsx)

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。

[](https://ant.design/~demos/modal-demo-button-props?routeId=components%2Fmodal%2Findex.en-US)

Open Modal of 1000px width Open Modal of responsive width

[自定义模态的宽度](https://ant.design/components/modal-cn#modal-demo-width)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/width.tsx)

使用 `width` 来设置模态对话框的宽度。

[](https://ant.design/~demos/modal-demo-width?routeId=components%2Fmodal%2Findex.en-US)

Confirm

With promise

Delete

With extra props

[静态确认对话框](https://ant.design/components/modal-cn#modal-demo-confirm)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/confirm.tsx)

使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。

[](https://ant.design/~demos/modal-demo-confirm?routeId=components%2Fmodal%2Findex.en-US)

Open Style Modal Open Function Modal

[自定义语义结构的样式和类](https://ant.design/components/modal-cn#modal-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象或者函数可以自定义 Modal 组件的 [语义化结构](https://ant.design/components/modal-cn#semantic-dom) 样式。

[](https://ant.design/~demos/modal-demo-style-class?routeId=components%2Fmodal%2Findex.en-US)

6.0.0

Open Modal with async logic

[异步关闭](https://ant.design/components/modal-cn#modal-demo-async)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/async.tsx)

点击确定后异步关闭对话框，例如提交表单。

[](https://ant.design/~demos/modal-demo-async?routeId=components%2Fmodal%2Findex.en-US)

blur

Dimmed mask

No mask

[遮罩](https://ant.design/components/modal-cn#modal-demo-mask)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/mask.tsx)

遮罩效果。

[](https://ant.design/~demos/modal-demo-mask?routeId=components%2Fmodal%2Findex.en-US)

Open Modal

Open Modal Confirm

[自定义页脚渲染函数](https://ant.design/components/modal-cn#modal-demo-footer-render)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/footer-render.tsx)

自定义页脚渲染函数，支持在原有基础上进行扩展。

[](https://ant.design/~demos/modal-demo-footer-render?routeId=components%2Fmodal%2Findex.en-US)

5.9.0

Modal

Confirm

[国际化](https://ant.design/components/modal-cn#modal-demo-locale)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/locale.tsx)

设置 `okText` 与 `cancelText` 以自定义按钮文字。

[](https://ant.design/~demos/modal-demo-locale?routeId=components%2Fmodal%2Findex.en-US)

Display a modal dialog at 20px to Top  
  
Vertically centered modal dialog

[自定义位置](https://ant.design/components/modal-cn#modal-demo-position)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/position.tsx)

使用 `centered` 或类似 `style.top` 的样式来设置对话框位置。

[](https://ant.design/~demos/modal-demo-position?routeId=components%2Fmodal%2Findex.en-US)

Open Draggable Modal

[自定义渲染对话框](https://ant.design/components/modal-cn#modal-demo-modal-render)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/modal-render.tsx)

自定义渲染对话框, 可通过 `react-draggable` 来实现拖拽。

[](https://ant.design/~demos/modal-demo-modal-render?routeId=components%2Fmodal%2Findex.en-US)

Info

Success

Error

Warning

[静态方法](https://ant.design/components/modal-cn#modal-demo-static-info)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/static-info.tsx)

静态方法无法消费 Context，不能动态响应 ConfigProvider 提供的各项配置，启用 `layer` 时还可能导致样式异常。请优先使用 hooks 版本或者 App 组件提供的 `modal` 实例。

[](https://ant.design/~demos/modal-demo-static-info?routeId=components%2Fmodal%2Findex.en-US)

Confirm

[销毁确认对话框](https://ant.design/components/modal-cn#modal-demo-confirm-router)[](https://github.com/ant-design/ant-design/edit/master/components/modal/demo/confirm-router.tsx)

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。

[](https://ant.design/~demos/modal-demo-confirm-router?routeId=components%2Fmodal%2Findex.en-US)

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |  | × |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](https://ant.design/components/button-cn#api) | - |  | 6.0.0 |
| cancelText | 取消按钮文字 | ReactNode | `取消` |  | × |
| centered | 垂直居中展示 Modal | boolean | false |  | 5.24.0 |
| classNames | 用于自定义 Modal 组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/modal-cn#semantic-dom), string> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/modal-cn#semantic-dom), string> | - |  | 5.10.0 |
| closable | 是否显示右上角的关闭按钮 | boolean | [ClosableType](https://ant.design/components/modal-cn#closabletype) | true | - | 5.16.0 |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | <CloseOutlined /> |  | 5.14.0 |
| confirmLoading | 确定按钮 loading | boolean | false |  | × |
| ~~destroyOnClose~~ | 关闭时销毁 Modal 里的子元素 | boolean | false |  | × |
| destroyOnHidden | 关闭时销毁 Modal 里的子元素 | boolean | false | 5.25.0 | × |
| ~~focusTriggerAfterClose~~ | 对话框关闭后是否需要聚焦触发元素。请使用 `focusable.focusTriggerAfterClose` 替代 | boolean | true | 4.9.0 | × |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode | (originNode: ReactNode, extra: { OkBtn: React.FC, CancelBtn: React.FC }) => ReactNode | (确定取消按钮) | renderFunction: 5.9.0 | × |
| forceRender | 强制渲染 Modal | boolean | false |  | × |
| focusable | 对话框内焦点管理的配置 | `{ trap?: boolean, focusTriggerAfterClose?: boolean }` | - | 6.2.0 | 6.4.0 |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，`false` 为挂载在当前位置 | HTMLElement | () => HTMLElement | Selectors | false | document.body |  | × |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  | × |
| mask | 遮罩效果 | boolean | `{enabled?: boolean, blur?: boolean, closable?: boolean}` | true | mask.closable: 6.3.0 | 6.0.0，mask.closable: 6.3.0 |
| ~~maskClosable~~ | 点击蒙层是否允许关闭。请使用 `mask.closable` 替代。 | boolean | true | - | × |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - | 4.7.0 | × |
| okButtonProps | ok 按钮 props | [ButtonProps](https://ant.design/components/button-cn#api) | - |  | 6.0.0 |
| okText | 确认按钮文字 | ReactNode | `确定` |  | × |
| okType | 确认按钮类型 | string | `primary` |  | × |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  | 5.7.0 |
| styles | 用于自定义 Modal 组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/modal-cn#semantic-dom), CSSProperties> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/modal-cn#semantic-dom), CSSProperties> | - |  | 5.10.0 |
| loading | 显示骨架屏 | boolean |  | 5.18.0 | × |
| scrollLock | 弹窗打开时是否锁定body滚动 | boolean | true | 6.5.0 | × |
| title | 标题 | ReactNode | - |  | × |
| open | 对话框是否可见 | boolean | false |  | × |
| width | 宽度 | string | number | [Breakpoint](https://ant.design/components/grid-cn#col) | 520 | Breakpoint: 5.23.0 | × |
| wrapClassName | 对话框外层容器的类名 | string | - |  | × |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  | × |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  | × |
| onOk | 点击确定回调 | function(e) | - |  | × |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | (open: boolean) => void | - | 5.4.0 | × |

#### 注意

*   `<Modal />` 默认关闭后状态不会自动清空，如果希望每次打开都是新内容，请设置 `destroyOnHidden`。
*   `<Modal />` 和 Form 一起配合使用时，设置 `destroyOnHidden` 也不会在 Modal 关闭时销毁表单字段数据，需要设置 `<Form preserve={false} />`。
*   `Modal.method()` RTL 模式仅支持 hooks 用法。

### Modal.method()

包括：

*   `Modal.info`
*   `Modal.success`
*   `Modal.error`
*   `Modal.warning`
*   `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - | 4.9.0 |
| ~~autoFocusButton~~ | 指定自动获得焦点的按钮。请使用 `focusable.autoFocusButton` 替代 | null | `ok` | `cancel` | `ok` |  |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](https://ant.design/components/button-cn#api) | - |  |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| className | 容器类名 | string | - |  |
| closable | 是否显示右上角的关闭按钮 | boolean | [ClosableType](https://ant.design/components/modal-cn#closabletype) | false | - |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | 4.9.0 |
| content | 内容 | ReactNode | - |  |
| focusable.autoFocusButton | 指定自动获得焦点的按钮 | null | `ok` | `cancel` | `ok` | 6.2.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer: null` | ReactNode | (originNode: ReactNode, extra: { OkBtn: React.FC, CancelBtn: React.FC }) => ReactNode | - | renderFunction: 5.9.0 |
| getContainer | 指定 Modal 挂载的 HTML 节点，false 为挂载在当前 dom | HTMLElement | () => HTMLElement | Selectors | false | document.body |  |
| icon | 自定义图标 | ReactNode | <ExclamationCircleFilled /> |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 遮罩效果 | boolean | `{enabled?: boolean, blur?: boolean, closable?: boolean}` | true |  |
| ~~maskClosable~~ | 点击蒙层是否允许关闭。请使用 `mask.closable` 替代。 | boolean | false | - |
| scrollLock | 弹窗打开时是否锁定body滚动 | boolean | true | 6.5.0 |
| okButtonProps | ok 按钮 props | [ButtonProps](https://ant.design/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | string | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| width | 宽度 | string | number | 416 |  |
| wrapClassName | 对话框外层容器的类名 | string | - | 4.18.0 |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |
| onCancel | 点击取消回调，参数为关闭函数，若返回 promise 时 resolve 为正常关闭, reject 为不关闭 | function(close) | - |  |
| onOk | 点击确定回调，参数为关闭函数，若返回 promise 时 resolve 为正常关闭, reject 为不关闭 | function(close) | - |  |

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

### ClosableType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - | - |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | - |
| disabled | 关闭图标是否禁用 | boolean | false | - |
| onClose | 弹窗关闭即时调用 | Function | undefined | - |

jsx

const modal = Modal.info();

modal.update({

 title: '修改的标题',

 content: '修改的内容',

});

// 在 4.8.0 或更高版本中，可以通过传入函数的方式更新弹窗

modal.update((prevConfig) => ({

 ...prevConfig,

 title: `${prevConfig.title}（新）`,

}));

modal.destroy();

*   `Modal.destroyAll`

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗（即上述的 `Modal.info`、`Modal.success`、`Modal.error`、`Modal.warning`、`Modal.confirm`）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（`modal.destroy()` 适用于主动关闭，而不是路由这样被动关闭）

jsx

import { browserHistory } from 'react-router';

// router change

browserHistory.listen(() => {

 Modal.destroyAll();

});

### Modal.useModal()

当你需要使用 Context 时，可以通过 `Modal.useModal` 创建一个 `contextHolder` 插入子节点中。通过 hooks 创建的临时 Modal 将会得到 `contextHolder` 所在位置的所有上下文。创建的 `modal` 对象拥有与 [`Modal.method`](https://ant.design/components/modal-cn#modalmethod) 相同的创建通知方法。

jsx

const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {

 modal.confirm({

 // ...

 });

}, []);

return <div>{contextHolder}</div>;

`modal.confirm` 返回方法：

*   `destroy`：销毁当前窗口
*   `update`：更新当前窗口
*   `then`：Promise 链式调用，支持 `await` 操作。该方法为 Hooks 仅有

tsx

//点击 `onOk` 时返回 `true`，点击 `onCancel` 时返回 `false`

const confirmed = await modal.confirm({ ... });

## Semantic DOM

*   ##### root

6.0.0   根元素，包含相对定位、顶部位置、宽度、最大宽度、外边距、底部内边距等模态框容器的基础布局样式  
*   ##### mask

5.13.0   遮罩层元素，包含固定定位、层级、背景色、动画过渡等遮罩层的样式  
*   ##### container

6.0.0   Modal 容器元素，包含相对定位、背景色、背景裁剪、边框、圆角、阴影、指针事件、内边距等模态框主体样式  
*   ##### wrapper

5.13.0   包裹层元素，一般用于动画容器，包含动画和过渡效果的样式  
*   ##### header

5.13.0   头部元素，包含头部内边距、下边框等头部区域样式  
*   ##### title

6.0.0   标题元素，包含外边距、颜色、字体权重、字体大小、行高、文字换行等标题文字样式  
*   ##### body

5.13.0   内容元素，包含内容区域的背景色、内边距等内容展示样式  
*   ##### footer

5.13.0   底部元素，包含底部的背景色、内边距、上边框、圆角等底部区域样式  
*   ##### close

6.4.0   预览关闭按钮元素，设置按钮的基础样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentBg | 内容区域背景色 | string | #ffffff |
| footerBg | 底部区域背景色 | string | transparent |
| headerBg | 顶部背景色 | string | transparent |
| titleColor | 标题字体颜色 | string | rgba(0,0,0,0.88) |
| titleFontSize | 标题字体大小 | string | number | 16 |
| titleLineHeight | 标题行高 | string | number | 1.5 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgMask | 浮层的背景蒙层颜色，用于遮罩浮层下面的内容，Modal、Drawer、Image 等组件的蒙层使用的是该 token | string | rgba(0,0,0,0.45) |
| colorBgTextActive | 控制文本在激活状态下的背景色。 | string | rgba(0,0,0,0.15) |
| colorBgTextHover | 控制文本在悬停状态下的背景色。 | string | rgba(0,0,0,0.06) |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorIconHover | 控制弱操作图标在悬浮状态下的颜色，例如 allowClear 或 Alert 关闭按钮。 | string | rgba(0,0,0,0.88) |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorSplit | 用于作为分割线的颜色，此颜色和 colorBorderSecondary 的颜色一致，但是用的是透明色。 | string | rgba(5,5,5,0.06) |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| boxShadow | 控制元素阴影样式。 | string | 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05) |
| controlHeight | Ant Design 中按钮和输入框等基础控件的高度 | number | 32 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeHeading5 | h5 标签使用的字号 | string | number | 16 |
| fontSizeLG | 大号字体大小 | number | 16 |
| fontWeightStrong | 控制标题类组件（如 h1、h2、h3）或选中项的字体粗细。 | number | 600 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightHeading5 | h5 标签所使用的行高 | number | 1.5 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| margin | 控制元素外边距，中等尺寸。 | number | 16 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOutCirc | 预设动效曲率 | string | cubic-bezier(0.78, 0.14, 0.15, 0.86)[](https://cubic-bezier.com/#0.78,0.14,0.15,0.86) |
| motionEaseOutCirc | 预设动效曲率 | string | cubic-bezier(0.08, 0.82, 0.17, 1)[](https://cubic-bezier.com/#0.08,0.82,0.17,1) |
| padding | 控制元素的内间距。 | number | 16 |
| screenLGMin | 控制大屏幕的最小宽度。 | number | 992 |
| screenMDMin | 控制中等屏幕的最小宽度。 | number | 768 |
| screenSMMax | 控制小屏幕的最大宽度。 | number | 767 |
| screenSMMin | 控制小屏幕的最小宽度。 | number | 576 |
| screenXLMin | 控制超大屏幕的最小宽度。 | number | 1200 |
| screenXSMin | 控制超小屏幕的最小宽度。 | number | 480 |
| screenXXLMin | 控制超超大屏幕的最小宽度。 | number | 1600 |
| screenXXXLMin | 控制超超超大屏幕的最小宽度。 | number | 1920 |
| zIndexPopupBase | 浮层类组件的基础 Z 轴值，用于一些悬浮类的组件的可以基于该值 Z 轴控制层级，例如 FloatButton、 Affix、Modal 等 | number | 1000 |

## FAQ

### 为什么 Modal 关闭时，内容不会更新？

Modal 在关闭时会将内容进行 memo 从而避免关闭过程中的内容跳跃。也因此如果你在配合使用 Form 有关闭时重置 `initialValues` 的操作，请通过在 effect 中调用 `resetFields` 来重置。

### 为什么 Modal 方法不能获取 context、redux 的内容和 ConfigProvider `locale/prefixCls/theme` 等配置？

直接调用 Modal 方法，antd 会通过 `ReactDOM.render` 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

当你需要 context 信息（例如 ConfigProvider 配置的内容）时，可以通过 `Modal.useModal` 方法会返回 `modal` 实体以及 `contextHolder` 节点。将其插入到你需要获取 context 位置即可：

tsx

const [modal, contextHolder] = Modal.useModal();

return (

 <Context1.Provider value="Ant">

 {/* contextHolder 在 Context1 内，它可以获得 Context1 的 context */}

 {contextHolder}

 <Context2.Provider value="Design">

 {/* contextHolder 在 Context2 外，因而不会获得 Context2 的 context */}

 </Context2.Provider>

 </Context1.Provider>

);

**异同**：通过 hooks 创建的 `contextHolder` 必须插入到子元素节点中才会生效，当你不需要上下文信息时请直接调用。

> 可通过 [App 包裹组件](https://ant.design/components/app-cn) 简化 `useModal` 等方法需要手动植入 contextHolder 的问题。

### 静态方法如何设置 prefixCls ？

你可以通过 [`ConfigProvider.config`](https://ant.design/components/config-provider-cn#config) 进行设置。
