---
title: "Ant Design · Message 全局提示"
source: https://ant.design/components/message-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-message
publisher: "Ant Design"
---

# Ant Design · Message 全局提示

> 来源：[https://ant.design/components/message-cn](https://ant.design/components/message-cn)

---

# Message

全局提示

全局展示操作反馈信息。

使用 import { message } from 'antd';
反馈

[components/message](https://github.com/ant-design/ant-design/blob/master/components/message)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Message%20OR%20is%3Aissue%20in%3Atitle%20%E5%85%A8%E5%B1%80%E6%8F%90%E7%A4%BA))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/message/index.zh-CN.md)[LLMs.md](https://ant.design/components/message-cn.md)

## 何时使用

*   可提供成功、警告和错误等反馈信息。
*   顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

Display normal message

[Hooks 调用（推荐）](https://ant.design/components/message-cn#message-demo-hooks)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/hooks.tsx)

通过 `message.useMessage` 创建支持读取 context 的 `contextHolder`。请注意，我们推荐通过顶层注册的方式代替 `message` 静态方法，因为静态方法无法消费上下文，因而 ConfigProvider 的数据也不会生效。

[](https://ant.design/~demos/message-demo-hooks?routeId=components%2Fmessage%2Findex.en-US)

Customized display duration

[修改延时](https://ant.design/components/message-cn#message-demo-duration)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/duration.tsx)

自定义时长 `10s`，默认时长为 `3s`。

[](https://ant.design/~demos/message-demo-duration?routeId=components%2Fmessage%2Findex.en-US)

Display a loading indicator

[加载中](https://ant.design/components/message-cn#message-demo-loading)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/loading.tsx)

进行全局 loading，异步自行移除。

[](https://ant.design/~demos/message-demo-loading?routeId=components%2Fmessage%2Findex.en-US)

Object style

Function style

[自定义语义结构样式](https://ant.design/components/message-cn#message-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/style-class.tsx)

通过 `classNames` 和 `styles` 可以自定义消息的[语义化结构](https://ant.design/components/message-cn#semantic-dom)样式。

[](https://ant.design/~demos/message-demo-style-class?routeId=components%2Fmessage%2Findex.en-US)

6.0.0

Static Method

[静态方法（不推荐）](https://ant.design/components/message-cn#message-demo-info)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/info.tsx)

静态方法无法消费 Context，不能动态响应 ConfigProvider 提供的各项配置，启用 `layer` 时还可能导致样式异常。请优先使用 hooks 版本或者 App 组件提供的 `message` 实例。

[](https://ant.design/~demos/message-demo-info?routeId=components%2Fmessage%2Findex.en-US)

Success

Error

Warning

[其他提示类型](https://ant.design/components/message-cn#message-demo-other)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/other.tsx)

包括成功、失败、警告。

[](https://ant.design/~demos/message-demo-other?routeId=components%2Fmessage%2Findex.en-US)

Enabled: 

Threshold: 

Open the message box

Destroy all

[堆叠](https://ant.design/components/message-cn#message-demo-stack)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/stack.tsx)

堆叠配置，默认关闭。超过阈值后的消息会被自动收起，可以通过 `threshold` 设置触发堆叠的数量。折叠状态下仅展示最新的消息。

[](https://ant.design/~demos/message-demo-stack?routeId=components%2Fmessage%2Findex.en-US)

6.4.0

Display sequential messages

[Promise 接口](https://ant.design/components/message-cn#message-demo-thenable)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/thenable.tsx)

可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

[](https://ant.design/~demos/message-demo-thenable?routeId=components%2Fmessage%2Findex.en-US)

Open the message box

[更新消息内容](https://ant.design/components/message-cn#message-demo-update)[](https://github.com/ant-design/ant-design/edit/master/components/message/demo/update.tsx)

可以通过唯一的 `key` 来更新内容。

[](https://ant.design/~demos/message-demo-update?routeId=components%2Fmessage%2Findex.en-US)

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

组件提供了一些静态方法，使用方式和参数如下：

*   `message.success(content, [duration], onClose)`
*   `message.error(content, [duration], onClose)`
*   `message.info(content, [duration], onClose)`
*   `message.warning(content, [duration], onClose)`
*   `message.loading(content, [duration], onClose)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode | config | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | function | - |

组件同时提供 promise 接口。

*   `message[level](content, [duration]).then(afterClose)`
*   `message[level](content, [duration], onClose).then(afterClose)`

其中 `message[level]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise。

也可以对象的形式传递参数：

*   `message.open(config)`
*   `message.success(config)`
*   `message.error(config)`
*   `message.info(config)`
*   `message.warning(config)`
*   `message.loading(config)`

`config` 对象属性如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| className | 自定义 CSS class | string | - | - | 5.7.0 |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/message-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/message-cn#semantic-dom), string> | - | 6.0.0 | 6.0.0 |
| content | 提示内容 | ReactNode | - | - | × |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 | - | × |
| icon | 自定义图标 | ReactNode | - | - | × |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | - | × |
| key | 当前提示的唯一标志 | string | number | - | - | × |
| style | 自定义内联样式 | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - | - | 5.7.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/message-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/message-cn#semantic-dom), CSSProperties> | - | 6.0.0 | 6.0.0 |
| onClick | 点击 message 时触发的回调函数 | function | - | - | × |
| onClose | 关闭时触发的回调函数 | function | - | - | × |

### 全局方法

还提供了全局配置和全局销毁方法：

*   `message.config(options)`
*   `message.destroy()`

> 也可通过 `message.destroy(key)` 来关闭一条消息。

#### message.config

> 当你使用 `ConfigProvider` 进行全局化配置时，系统会默认自动开启 RTL 模式。(4.3.0+)
> 
> 
> 当你想单独使用，可通过如下设置开启 RTL 模式。

js

message.config({

 top: 100,

 duration: 2,

 maxCount: 3,

 rtl: true,

 prefixCls: 'my-message',

});

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |  | × |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLElement | () => document.body |  | × |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |  | × |
| prefixCls | 消息节点的 className 前缀 | string | `ant-message` | 4.5.0 | × |
| rtl | 是否开启 RTL 模式 | boolean | false |  | × |
| stack | 堆叠模式，超过阈值时会将所有消息收起。折叠状态下仅展示最新的消息 | boolean | `{ threshold: number }` | false | 6.4.0 | × |
| top | 消息距离顶部的位置 | string | number | 8 |  | × |

## Semantic DOM

Hello, Ant Design!

Welcome back!

*   ##### root

6.0.0   消息项根元素，设置背景色、圆角、阴影、内边距和动画样式  
*   ##### wrapper

6.4.0   图标与标题的包裹元素，设置内容布局、间距和对齐样式  
*   ##### icon

6.0.0   图标元素，设置字体大小、行高和状态颜色样式  
*   ##### title

6.4.0   标题元素，设置文本颜色、字号、行高和内容展示样式  
*   ##### list

6.4.0   消息列表根元素，设置定位、层级、宽度、滚动区域和位置样式  
*   ##### listContent

6.4.0   消息列表内容元素，设置消息项排列、间距和高度动画样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentBg | 提示框背景色 | string | #ffffff |
| contentPadding | 提示框内边距 | Padding<string | number> | undefined | 9px 12px |
| zIndexPopup | 提示框 z-index | number | 2010 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgElevated | 浮层容器背景色，在暗色模式下该 token 的色值会比 `colorBgContainer` 要亮一些。例如：模态框、弹出框、菜单等。 | string | #ffffff |
| colorError | 用于表示操作失败的 Token 序列，如失败按钮、错误状态提示（Result）组件等。 | string | #ff4d4f |
| colorInfo | 用于表示操作信息的 Token 序列，如 Alert 、Tag、 Progress 等组件都有用到该组梯度变量。 | string | #1677ff |
| colorSuccess | 用于表示操作成功的 Token 序列，如 Result、Progress 等组件会使用该组梯度变量。 | string | #52c41a |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextHeading | 控制标题字体颜色。 | string | rgba(0,0,0,0.88) |
| colorWarning | 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。 | string | #faad14 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| boxShadow | 控制元素阴影样式。 | string | 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05) |
| boxShadowTertiary | 控制元素三级盒子阴影样式。 | string | 0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 6px -1px rgba(0,0,0,0.03), 0 2px 4px 0 rgba(0,0,0,0.03) |
| controlHeightLG | 较高的组件高度 | number | 40 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeLG | 大号字体大小 | number | 16 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| margin | 控制元素外边距，中等尺寸。 | number | 16 |
| marginLG | 控制元素外边距，大尺寸。 | number | 24 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| marginXXL | 控制元素外边距，最大尺寸。 | number | 48 |
| motionDurationFast | 动效播放速度，快速。用于小型元素动画交互 | string | 0.1s |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOut | 预设动效曲率 | string | cubic-bezier(0.645, 0.045, 0.355, 1)[](https://cubic-bezier.com/#0.645,0.045,0.355,1) |
| paddingContentHorizontalLG | 控制内容元素水平内间距，适用于大屏幕设备。 | number | 24 |
| paddingLG | 控制元素的大内间距。 | number | 24 |
| paddingMD | 控制元素的中等内间距。 | number | 20 |
| paddingSM | 控制元素的小内间距。 | number | 12 |

## FAQ

### 为什么 message 不能获取 context、redux 的内容和 ConfigProvider 的 `locale/prefixCls/theme` 等配置？

直接调用 message 方法，antd 会通过 `ReactDOM.render` 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

当你需要 context 信息（例如 ConfigProvider 配置的内容）时，可以通过 `message.useMessage` 方法会返回 `api` 实体以及 `contextHolder` 节点。将其插入到你需要获取 context 位置即可：

tsx

const [api, contextHolder] = message.useMessage();

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

> 可通过 [App 包裹组件](https://ant.design/components/app-cn) 简化 `useMessage` 等方法需要手动植入 contextHolder 的问题。

### 静态方法如何设置 prefixCls ？

你可以通过 [`ConfigProvider.config`](https://ant.design/components/config-provider-cn#config) 进行设置。
