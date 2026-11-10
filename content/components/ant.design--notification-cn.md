---
title: "Ant Design · Notification 通知提醒"
source: https://ant.design/components/notification-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-notification
publisher: "Ant Design"
---

# Ant Design · Notification 通知提醒

> 来源：[https://ant.design/components/notification-cn](https://ant.design/components/notification-cn)

---

# Notification

通知提醒框

全局展示通知提醒信息。

使用 import { notification } from 'antd';
反馈

[components/notification](https://github.com/ant-design/ant-design/blob/master/components/notification)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Notification%20OR%20is%3Aissue%20in%3Atitle%20%E9%80%9A%E7%9F%A5%E6%8F%90%E9%86%92%E6%A1%86))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/notification/index.zh-CN.md)[LLMs.md](https://ant.design/components/notification-cn.md)

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

*   较为复杂的通知内容。
*   带有交互的通知，给出用户下一步的行动点。
*   系统主动推送。

## 代码演示

topLeft

topRight

bottomLeft

bottomRight

[Hooks 调用（推荐）](https://ant.design/components/notification-cn#notification-demo-hooks)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/hooks.tsx)

通过 `notification.useNotification` 创建支持读取 context 的 `contextHolder`。请注意，我们推荐通过顶层注册的方式代替 `notification` 静态方法，因为静态方法无法消费上下文，因而 ConfigProvider 的数据也不会生效。

[](https://ant.design/~demos/notification-demo-hooks?routeId=components%2Fnotification%2Findex.en-US)

Success Info Warning Error

[带有图标的通知提醒框](https://ant.design/components/notification-cn#notification-demo-with-icon)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/with-icon.tsx)

通知提醒框左侧有图标。

[](https://ant.design/~demos/notification-demo-with-icon?routeId=components%2Fnotification%2Findex.en-US)

Open the notification box

[自定义图标](https://ant.design/components/notification-cn#notification-demo-custom-icon)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/custom-icon.tsx)

图标可以被自定义。

[](https://ant.design/~demos/notification-demo-custom-icon?routeId=components%2Fnotification%2Findex.en-US)

Open the notification box

[更新消息内容](https://ant.design/components/notification-cn#notification-demo-update)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/update.tsx)

可以通过唯一的 key 来更新内容。

[](https://ant.design/~demos/notification-demo-update?routeId=components%2Fnotification%2Findex.en-US)

Pause on hover

Don't pause on hover

[显示进度条](https://ant.design/components/notification-cn#notification-demo-show-with-progress)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/show-with-progress.tsx)

显示自动关闭通知框的进度条。

[](https://ant.design/~demos/notification-demo-show-with-progress?routeId=components%2Fnotification%2Findex.en-US)

5.18.0

Show custom progress color

[自定义进度条颜色](https://ant.design/components/notification-cn#notification-demo-progress-color)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/progress-color.tsx)

通过配置组件 token 来自定义进度条颜色。

[](https://ant.design/~demos/notification-demo-progress-color?routeId=components%2Fnotification%2Findex.en-US)

Open the notification box

[自动关闭的延时](https://ant.design/components/notification-cn#notification-demo-duration)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/duration.tsx)

自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。

[](https://ant.design/~demos/notification-demo-duration?routeId=components%2Fnotification%2Findex.en-US)

Open the notification box

[自定义按钮](https://ant.design/components/notification-cn#notification-demo-with-btn)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/with-btn.tsx)

自定义关闭按钮的样式和文字。

[](https://ant.design/~demos/notification-demo-with-btn?routeId=components%2Fnotification%2Findex.en-US)

top

bottom

topLeft

topRight

bottomLeft

bottomRight

[位置](https://ant.design/components/notification-cn#notification-demo-placement)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/placement.tsx)

使用 `placement` 可以配置通知从上面、下面、左上角、右上角、左下角、右下角弹出。

[](https://ant.design/~demos/notification-demo-placement?routeId=components%2Fnotification%2Findex.en-US)

Enabled: 

Threshold: 

Open the notification box

[堆叠](https://ant.design/components/notification-cn#notification-demo-stack)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/stack.tsx)

堆叠配置，默认开启。超过阈值后的消息会被自动收起，可以通过 `threshold` 设置触发堆叠的数量。折叠状态下最多展示 3 个消息。

[](https://ant.design/~demos/notification-demo-stack?routeId=components%2Fnotification%2Findex.en-US)

5.10.0

Open the notification box

[静态方法（不推荐）](https://ant.design/components/notification-cn#notification-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/basic.tsx)

静态方法无法消费 Context，不能动态响应 ConfigProvider 提供的各项配置，启用 `layer` 时还可能导致样式异常。请优先使用 hooks 版本或者 App 组件提供的 `notification` 实例。

[](https://ant.design/~demos/notification-demo-basic?routeId=components%2Fnotification%2Findex.en-US)

Default Notification

Error Notification

[自定义语义结构样式](https://ant.design/components/notification-cn#notification-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/notification/demo/style-class.tsx)

通过 `classNames` 和 `styles` 可以自定义 Notification 的[语义化结构](https://ant.design/components/notification-cn#semantic-dom)样式。

[](https://ant.design/~demos/notification-demo-style-class?routeId=components%2Fnotification%2Findex.en-US)

6.0.0

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

*   `notification.success(config)`
*   `notification.error(config)`
*   `notification.info(config)`
*   `notification.warning(config)`
*   `notification.open(config)`
*   `notification.destroy(key?: String)`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| actions | 自定义按钮组 | ReactNode | - | 5.24.0 | × |
| ~~btn~~ | 自定义按钮组，请使用 `actions` 替换 | ReactNode | - | - | × |
| className | 自定义 CSS class | string | - | - | 5.7.0 |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/notification-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/notification-cn#semantic-dom), string> | - |  | 6.0.0 |
| closable | 是否显示右上角的关闭按钮 | boolean | [ClosableType](https://ant.design/components/notification-cn#closabletype) | true | - | × |
| closeIcon | 自定义关闭图标 | ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 | 5.14.0 |
| description | 通知提醒内容，必选 | ReactNode | - | - | × |
| duration | 默认 4.5 秒后自动关闭，配置为 `0 | false` 则不会自动关闭 | number | false | 4.5 | - | × |
| showProgress | 显示自动关闭通知框的进度条 | boolean |  | 5.18.0 | × |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 | × |
| icon | 自定义图标 | ReactNode | - | - | × |
| key | 当前通知唯一标志 | string | - | - | × |
| title | 通知提醒标题 | ReactNode | - | 6.0.0 | × |
| ~~message~~ | 通知提醒标题，请使用 `title` 替换 | ReactNode | - | - | × |
| placement | 弹出位置，可选 `top` | `topLeft` | `topRight` | `bottom` | `bottomLeft` | `bottomRight` | string | `topRight` | - | × |
| role | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容 | `alert | status` | `alert` | 5.6.0 | × |
| style | 自定义内联样式 | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - | - | 5.7.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/notification-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/notification-cn#semantic-dom), CSSProperties> | - |  | 6.0.0 |
| onClick | 点击通知时触发的回调函数 | function | - | - | × |
| onClose | 当通知关闭时触发 | function | - | - | × |
| props | 透传至通知 `div` 上的 props 对象，支持传入 `data-*``aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 详见 [https://github.com/microsoft/TypeScript/issues/28960](https://github.com/microsoft/TypeScript/issues/28960) | Object | - | - | × |

*   `notification.useNotification(config)`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |  | × |
| closeIcon | 自定义关闭图标 | ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 | 5.14.0 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |  | × |
| placement | 弹出位置，可选 `top` | `topLeft` | `topRight` | `bottom` | `bottomLeft` | `bottomRight` | string | `topRight` |  | × |
| showProgress | 显示自动关闭通知框的进度条 | boolean |  | 5.18.0 | × |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 | × |
| rtl | 是否开启 RTL 模式 | boolean | false |  | × |
| stack | 堆叠模式，超过阈值时会将所有消息收起 | boolean | `{ threshold: number }` | `{ threshold: 3 }` | 5.10.0 | × |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |  | × |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 | × |

### ClosableType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | - |
| onClose | 当通知关闭时触发 | function | - | - |

### 全局配置

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

`notification.config(options)`

> 当你使用 `ConfigProvider` 进行全局化配置时，系统会默认自动开启 RTL 模式。(4.3.0+)
> 
> 
> 当你想单独使用，可通过如下设置开启 RTL 模式。

js

notification.config({

 placement: 'bottomRight',

 bottom: 50,

 duration: 3,

 rtl: true,

});

#### notification.config

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |  |
| closeIcon | 自定义关闭图标 | ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| duration | 默认自动关闭延时，单位秒 | number | 4.5 |  |
| showProgress | 显示自动关闭通知框的进度条 | boolean |  | 5.18.0 |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLNode | () => document.body |  |
| placement | 弹出位置，可选 `top``topLeft``topRight``bottom``bottomLeft``bottomRight` | string | `topRight` |  |
| rtl | 是否开启 RTL 模式 | boolean | false |  |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |  |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

## Semantic DOM

Hello World!

Hello World?

My Button

Welcome back!

This is another notification.

*   ##### root

6.0.0   通知项根元素，设置背景色、圆角、阴影、内边距和动画样式  
*   ##### wrapper

6.4.0   图标与内容的包裹元素，设置内容布局样式  
*   ##### icon

6.0.0   图标元素，设置绝对定位、字体大小、行高和状态颜色样式  
*   ##### section

6.4.0   内容区域元素，包含标题和描述内容  
*   ##### title

6.0.0   标题元素，设置颜色、字体大小、行高和外边距样式  
*   ##### description

6.0.0   描述元素，设置字体大小、颜色和外边距样式  
*   ##### close

6.4.0   关闭按钮元素，设置位置、尺寸和交互样式  
*   ##### actions

6.0.0   操作组元素，设置右浮动、上边距和操作按钮布局样式  
*   ##### progress

6.4.0   进度条元素，设置自动关闭通知的进度样式  
*   ##### list

6.4.0   通知列表根元素，设置定位、层级、宽度、滚动区域和位置样式  
*   ##### listContent

6.4.0   通知列表内容元素，设置通知项排列、间距和高度动画样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorErrorBg | 错误提醒框容器背景色 | string |  |
| colorInfoBg | 信息提醒框容器背景色 | string |  |
| colorSuccessBg | 成功提醒框容器背景色 | string |  |
| colorWarningBg | 警告提醒框容器背景色 | string |  |
| progressBg | 提醒框进度条背景色 | string | linear-gradient(90deg, #69b1ff, #1677ff) |
| width | 提醒框宽度 | string | number | 384 |
| zIndexPopup | 提醒框 z-index | number | 2050 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgElevated | 浮层容器背景色，在暗色模式下该 token 的色值会比 `colorBgContainer` 要亮一些。例如：模态框、弹出框、菜单等。 | string | #ffffff |
| colorBgTextActive | 控制文本在激活状态下的背景色。 | string | rgba(0,0,0,0.15) |
| colorBgTextHover | 控制文本在悬停状态下的背景色。 | string | rgba(0,0,0,0.06) |
| colorError | 用于表示操作失败的 Token 序列，如失败按钮、错误状态提示（Result）组件等。 | string | #ff4d4f |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorIconHover | 控制弱操作图标在悬浮状态下的颜色，例如 allowClear 或 Alert 关闭按钮。 | string | rgba(0,0,0,0.88) |
| colorInfo | 用于表示操作信息的 Token 序列，如 Alert 、Tag、 Progress 等组件都有用到该组梯度变量。 | string | #1677ff |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorSuccess | 用于表示操作成功的 Token 序列，如 Result、Progress 等组件会使用该组梯度变量。 | string | #52c41a |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextHeading | 控制标题字体颜色。 | string | rgba(0,0,0,0.88) |
| colorWarning | 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。 | string | #faad14 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| boxShadow | 控制元素阴影样式。 | string | 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05) |
| controlHeightLG | 较高的组件高度 | number | 40 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeLG | 大号字体大小 | number | 16 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| margin | 控制元素外边距，中等尺寸。 | number | 16 |
| marginLG | 控制元素外边距，大尺寸。 | number | 24 |
| marginSM | 控制元素外边距，中小尺寸。 | number | 12 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| marginXXL | 控制元素外边距，最大尺寸。 | number | 48 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOut | 预设动效曲率 | string | cubic-bezier(0.645, 0.045, 0.355, 1)[](https://cubic-bezier.com/#0.645,0.045,0.355,1) |
| paddingContentHorizontalLG | 控制内容元素水平内间距，适用于大屏幕设备。 | number | 24 |
| paddingLG | 控制元素的大内间距。 | number | 24 |
| paddingMD | 控制元素的中等内间距。 | number | 20 |

## FAQ

### 为什么 notification 不能获取 context、redux 的内容和 ConfigProvider 的 `locale/prefixCls/theme` 等配置？

直接调用 notification 方法，antd 会通过 `ReactDOM.render` 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

当你需要 context 信息（例如 ConfigProvider 配置的内容）时，可以通过 `notification.useNotification` 方法会返回 `api` 实体以及 `contextHolder` 节点。将其插入到你需要获取 context 位置即可：

tsx

const [api, contextHolder] = notification.useNotification();

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

> 可通过 [App 包裹组件](https://ant.design/components/app-cn) 简化 `useNotification` 等方法需要手动植入 contextHolder 的问题。

### 静态方法如何设置 prefixCls ？

你可以通过 [`ConfigProvider.config`](https://ant.design/components/config-provider-cn#config) 进行设置。

### 为什么 `style={{ width: 'max-content' }}` 在 Notification 上不生效？

Notification 使用固定宽度布局，以保证堆叠卡片样式的一致性。因此不支持在通知外层节点上使用 `max-content`、`min-content`、`fit-content(...)` 这类 intrinsic width。

如果你需要调整 Notification 的整体宽度，建议通过组件 token `width` 来配置：

tsx

<ConfigProvider

 theme={{

 components: {

 Notification: {

 width: 480,

 },

 },

 }}

>

 <App />

</ConfigProvider>

如果你只是希望通知内容本身按内容宽度排布，可以在 `title` 或 `description` 里自行渲染 ReactNode，并把 `max-content` 放在内部节点上，而不是放在 Notification 根节点上。
