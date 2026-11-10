---
title: "Ant Design · Drawer 抽屉"
source: https://ant.design/components/drawer-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-drawer
publisher: "Ant Design"
---

# Ant Design · Drawer 抽屉

> 来源：[https://ant.design/components/drawer-cn](https://ant.design/components/drawer-cn)

---

屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

*   当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
*   当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

> 开发者注意事项：
> 
> 
> 自 `5.17.0` 版本，我们提供了 `loading` 属性，内置 Spin 组件作为加载状态，但是自 `5.18.0` 版本开始，我们修复了设计失误，将内置的 Spin 组件替换成了 Skeleton 组件，同时收窄了 `loading` api 的类型范围，只能接收 boolean 类型。

## 代码演示

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

top right bottom left

Current size:

256

px

可调整大小的抽屉，允许通过拖拽边缘来调整抽屉的宽度或高度。

6.0.0

在抽屉中使用表单。

在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

遮罩效果。

通过 `classNames` 和 `styles` 传入对象或者函数可以自定义 Drawer 组件的 [语义化结构](https://ant.design/components/drawer-cn#semantic-dom) 样式。

6.0.0

top right bottom left

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。

设置抽屉加载状态。

5.17.0

Render in this

渲染在当前 dom 里。自定义容器，查看 `getContainer`。

> 注意：在 v5 中 `style` 与 `className` 迁移至 Drawer 面板上与 Modal 保持一致，原 `style` 与 `className` 替换为 `rootStyle` 与 `rootClassName`。

> 当 `getContainer` 返回 DOM 节点时，需要手动设置 `rootStyle` 为 `{ position: 'absolute' }`，参考 [#41951](https://github.com/ant-design/ant-design/issues/41951#issuecomment-1521099152)。

需要快速预览对象概要时使用，点击遮罩区关闭。

Large Size (736px) Default Size (378px) 256 500px 50% 20vw

抽屉的默认宽度为 `378px`，另外还提供一个大号抽屉 `736px`，可以用 `size` 属性来设置。

自定义抽屉的关闭按钮位置，放到右侧，默认为左侧。

5.28.0

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - |  | × |
| ~~bodyStyle~~ | 抽屉内容区域样式，请使用 `styles.body` 替代 | CSSProperties | - | - | × |
| className | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName | string | - |  | 5.7.0 |
| classNames | 用于自定义 Drawer 组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/drawer-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/drawer-cn#semantic-dom), string> | - |  | 5.10.0 |
| closable | 是否显示关闭按钮。可通过 `placement` 配置其位置 | boolean | { closeIcon?: React.ReactNode; disabled?: boolean; placement?: 'start' | 'end' } | true | placement: 5.28.0 | 5.15.0，placement: 6.1.1 |
| ~~contentWrapperStyle~~ | 抽屉包裹层样式，请使用 `styles.wrapper` 替代 | CSSProperties | - | - | × |
| ~~destroyOnClose~~ | 关闭时销毁 Drawer 里的子元素，请使用 `destroyOnHidden` 替代 | boolean | false |  | × |
| destroyOnHidden | 关闭时销毁 Drawer 里的子元素 | boolean | false | 5.25.0 | × |
| ~~drawerStyle~~ | 抽屉面板样式，请使用 `styles.section` 替代 | CSSProperties | - | - | × |
| extra | 抽屉右上角的操作区域 | ReactNode | - | 4.17.0 | × |
| footer | 抽屉的页脚 | ReactNode | - |  | × |
| ~~footerStyle~~ | 抽屉底部样式，请使用 `styles.footer` 替代 | CSSProperties | - | - | × |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  | × |
| focusable | 抽屉内焦点管理的配置 | `{ trap?: boolean, focusTriggerAfterClose?: boolean }` | - | 6.2.0 | 6.4.0 |
| getContainer | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置 | HTMLElement | () => HTMLElement | Selectors | false | body |  | × |
| ~~headerStyle~~ | 抽屉头部的样式，请使用 `styles.header` 替换 | CSSProperties | - |  | × |
| ~~height~~ | 高度，在 `placement` 为 `top` 或 `bottom` 时使用，请使用 `size` 替换 | string | number | 378 |  | × |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  | × |
| loading | 显示骨架屏 | boolean | false | 5.17.0 | × |
| mask | 遮罩效果 | boolean | `{ enabled?: boolean, blur?: boolean, closable?: boolean }` | true | mask.closable: 6.3.0 | 6.0.0，mask.closable: 6.3.0 |
| ~~maskClosable~~ | 点击蒙层是否允许关闭 | boolean | true |  | × |
| ~~maskStyle~~ | 抽屉遮罩样式，请使用 `styles.mask` 替代 | CSSProperties | - | - | × |
| maxSize | 可拖拽的最大尺寸（宽度或高度，取决于 `placement`） | number | - | 6.0.0 | × |
| open | Drawer 是否可见 | boolean | false |  | × |
| placement | 抽屉的方向 | `top` | `right` | `bottom` | `left` | `right` |  | × |
| push | 用于设置多层 Drawer 的推动行为 | boolean | { distance: string | number } | { distance: 180 } | 4.5.0+ | × |
| resizable | 是否启用拖拽改变尺寸 | boolean | [ResizableConfig](https://ant.design/components/drawer-cn#resizableconfig) | - | boolean: 6.1.0 | × |
| rootStyle | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties | - |  | × |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px`，或自定义数字 | 'default' | 'large' | number | string | 'default' | 4.17.0, string: 6.2.0 | × |
| style | Drawer 面板的样式，如需仅配置 body 部分，请使用 `styles.body` | CSSProperties | - |  | 5.7.0 |
| styles | 用于自定义 Drawer 组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/drawer-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/drawer-cn#semantic-dom), CSSProperties> | - |  | 5.10.0 |
| title | 标题 | ReactNode | - |  | × |
| ~~width~~ | 宽度，请使用 `size` 替换 | string | number | 378 |  | × |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  | × |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |  | × |
| drawerRender | 自定义渲染抽屉 | (node: ReactNode) => ReactNode | - | 5.18.0 | × |

### ResizableConfig

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| onResizeStart | 开始拖拽调整大小时的回调 | () => void | - | 6.0.0 |
| onResize | 拖拽调整大小时的回调 | (size: number) => void | - | 6.0.0 |
| onResizeEnd | 结束拖拽调整大小时的回调 | () => void | - | 6.0.0 |

## Semantic DOM

*   ##### root

6.0.0 
根元素，包含固定定位、层级控制、指针事件、颜色等抽屉容器的基础样式和布局控制 
*   ##### mask

5.13.0 
遮罩层元素，包含绝对定位、层级、背景色、指针事件等遮罩层的样式和交互控制 
*   ##### section

6.0.0 
Drawer 容器元素，包含flex布局、宽高、溢出控制、背景色、指针事件等抽屉主体的样式 
*   ##### header

5.13.0 
头部元素，包含flex布局、对齐方式、内边距、字体大小、行高、下边框等头部区域的样式 
*   ##### title

6.0.0 
标题元素，包含flex占比、外边距、字体权重、字体大小、行高等标题文字的样式 
*   ##### extra

6.0.0 
额外元素，包含flex固定布局等额外操作内容的样式控制 
*   ##### body

5.13.0 
内容元素，包含flex占比、最小尺寸、内边距、溢出滚动等内容区域的展示和布局样式 
*   ##### footer

5.13.0 
底部元素，包含flex收缩、内边距、上边框等底部操作区域的样式 
*   ##### dragger

6.0.0 
拖拽元素，用于调整抽屉大小的拖拽手柄，包含绝对定位、背景透明、指针事件控制、hover状态样式、拖拽状态样式等 
*   ##### close

6.1.0 
关闭按钮元素，包含按钮的基础样式 

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| draggerSize | 拖拽手柄大小 | number | 4 |
| footerPaddingBlock | 底部区域纵向内间距 | number | 8 |
| footerPaddingInline | 底部区域横向内间距 | number | 16 |
| zIndexPopup | 弹窗 z-index | number | 1000 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgElevated | 浮层容器背景色，在暗色模式下该 token 的色值会比 `colorBgContainer` 要亮一些。例如：模态框、弹出框、菜单等。 | string | #ffffff |
| colorBgMask | 浮层的背景蒙层颜色，用于遮罩浮层下面的内容，Modal、Drawer、Image 等组件的蒙层使用的是该 token | string | rgba(0,0,0,0.45) |
| colorBgTextActive | 控制文本在激活状态下的背景色。 | string | rgba(0,0,0,0.15) |
| colorBgTextHover | 控制文本在悬停状态下的背景色。 | string | rgba(0,0,0,0.06) |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorIconHover | 控制弱操作图标在悬浮状态下的颜色，例如 allowClear 或 Alert 关闭按钮。 | string | rgba(0,0,0,0.88) |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorSplit | 用于作为分割线的颜色，此颜色和 colorBorderSecondary 的颜色一致，但是用的是透明色。 | string | rgba(5,5,5,0.06) |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| fontSizeLG | 大号字体大小 | number | 16 |
| fontWeightStrong | 控制标题类组件（如 h1、h2、h3）或选中项的字体粗细。 | number | 600 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| padding | 控制元素的内间距。 | number | 16 |
| paddingLG | 控制元素的大内间距。 | number | 24 |
| paddingXS | 控制元素的特小内间距。 | number | 8 |
