---
title: "Ant Design · Tabs 标签页"
source: https://ant.design/components/tabs-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-tabs
publisher: "Ant Design"
---

# Ant Design · Tabs 标签页

> 来源：[https://ant.design/components/tabs-cn](https://ant.design/components/tabs-cn)

---

# Tabs

标签页

选项卡切换组件。

使用 import { Tabs } from 'antd';
反馈

[components/tabs](https://github.com/ant-design/ant-design/blob/master/components/tabs)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Tabs%20OR%20is%3Aissue%20in%3Atitle%20%E6%A0%87%E7%AD%BE%E9%A1%B5))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/tabs/index.zh-CN.md)[LLMs.md](https://ant.design/components/tabs-cn.md)

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

*   卡片式的页签，提供可关闭的样式，常用于容器顶部。
*   既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。
*   [Radio.Button](https://ant.design/components/radio-cn#radio-demo-radiobutton) 可作为更次级的页签来使用。

## 代码演示

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[基本](https://ant.design/components/tabs-cn#tabs-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/basic.tsx)

默认选中第一项。

[](https://ant.design/~demos/tabs-demo-basic?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Tab 1

[禁用](https://ant.design/components/tabs-cn#tabs-demo-disabled)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/disabled.tsx)

禁用某一项。

[](https://ant.design/~demos/tabs-demo-disabled?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[居中](https://ant.design/components/tabs-cn#tabs-demo-centered)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/centered.tsx)

标签居中展示。

[](https://ant.design/~demos/tabs-demo-centered?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Tab 2

[图标](https://ant.design/components/tabs-cn#tabs-demo-icon)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/icon.tsx)

有图标的标签。`icon` 也支持第三方图标库的裸 `<svg>` 元素，会自动与文字居中对齐。

[](https://ant.design/~demos/tabs-demo-icon?routeId=components%2Ftabs%2Findex.en-US)

start

 

center

 

end

 

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[指示条](https://ant.design/components/tabs-cn#tabs-demo-custom-indicator)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/custom-indicator.tsx)

设置 `indicator` 属性，自定义指示条宽度和对齐方式。

[](https://ant.design/~demos/tabs-demo-custom-indicator?routeId=components%2Ftabs%2Findex.en-US)

Horizontal Vertical 

Tab-0

Tab-1

Tab-2

Tab-3

Tab-4

Tab-5

Tab-6

Tab-7

Tab-8

Tab-9

Tab-10

Tab-11

Tab-12

Tab-13

Tab-14

Tab-15

Tab-16

Tab-17

Tab-18

Tab-19

Tab-20

Tab-21

Tab-22

Tab-23

Tab-24

Tab-25

Tab-26

Tab-27

Tab-28

Tab-29

Content of tab 1

[滑动](https://ant.design/components/tabs-cn#tabs-demo-slide)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/slide.tsx)

可以左右、上下滑动，容纳更多标签。

[](https://ant.design/~demos/tabs-demo-slide?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Extra Action

Content of tab 1

  
  
  

You can also specify its direction or both side

- [x] left - [x] right 

  
  

Left Extra Action

Tab 1

Tab 2

Tab 3

Right Extra Action

Content of tab 1

[附加内容](https://ant.design/components/tabs-cn#tabs-demo-extra)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/extra.tsx)

可以在页签两边添加附加操作。

[](https://ant.design/~demos/tabs-demo-extra?routeId=components%2Ftabs%2Findex.en-US)

Small Medium Large 

Tab 1

Tab 2

Tab 3

Content of tab 1

Card Tab 1

Card Tab 2

Card Tab 3

Content of card tab 1

Tab 1

Tab 2

Tab 3

Content of editable tab 1

[大小](https://ant.design/components/tabs-cn#tabs-demo-size)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/size.tsx)

大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

[](https://ant.design/~demos/tabs-demo-size?routeId=components%2Ftabs%2Findex.en-US)

Tab placement:

top bottom start end 

Tab 1

Tab 2

Tab 3

Content of Tab 1

[位置](https://ant.design/components/tabs-cn#tabs-demo-placement)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/placement.tsx)

有四个位置，`tabPlacement="start|end|top|bottom"`。在移动端下，`start|end` 会自动切换成 `top`。

[](https://ant.design/~demos/tabs-demo-placement?routeId=components%2Ftabs%2Findex.en-US)

Tab-0

Tab-1

Tab-2

Tab-3

Tab-4

Tab-5

Tab-6

Tab-7

Tab-8

Tab-9

Tab-10

Tab-11

Tab-12

Tab-13

Tab-14

Tab-15

Tab-16

Tab-17

Tab-18

Tab-19

Tab-20

Tab-21

Tab-22

Tab-23

Tab-24

Tab-25

Tab-26

Tab-27

Tab-28

Tab-29

Content of tab 1

[自定义折叠菜单搜索](https://ant.design/components/tabs-cn#tabs-demo-popuprender-search)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/popupRender-Search.tsx)

通过 `popupRender` 属性自定义 Tabs 更多下拉菜单，支持搜索和键盘导航。

[](https://ant.design/~demos/tabs-demo-popuprender-search?routeId=components%2Ftabs%2Findex.en-US)

6.6.0

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[卡片式页签](https://ant.design/components/tabs-cn#tabs-demo-card)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/card.tsx)

另一种样式的页签，不提供对应的垂直样式。

[](https://ant.design/~demos/tabs-demo-card?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Content of Tab 1

[新增和关闭页签](https://ant.design/components/tabs-cn#tabs-demo-editable-card)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/editable-card.tsx)

只有卡片样式的页签支持新增和关闭选项。使用 `closable={false}` 禁止关闭。

[](https://ant.design/~demos/tabs-demo-editable-card?routeId=components%2Ftabs%2Findex.en-US)

ADD

Tab 1

Tab 2

Content of Tab Pane 1

[自定义新增页签触发器](https://ant.design/components/tabs-cn#tabs-demo-custom-add-trigger)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/custom-add-trigger.tsx)

隐藏默认的页签增加图标，给自定义触发器绑定事件。

[](https://ant.design/~demos/tabs-demo-custom-add-trigger?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[自定义页签头](https://ant.design/components/tabs-cn#tabs-demo-custom-tab-bar)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/custom-tab-bar.tsx)

使用 [react-sticky-box](https://www.npmjs.com/package/react-sticky-box) 和 `renderTabBar` 实现吸顶效果。

[](https://ant.design/~demos/tabs-demo-custom-tab-bar?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[可拖拽标签](https://ant.design/components/tabs-cn#tabs-demo-custom-tab-bar-node)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/custom-tab-bar-node.tsx)

使用 [dnd-kit](https://github.com/clauderic/dnd-kit) 实现标签可拖拽。

[](https://ant.design/~demos/tabs-demo-custom-tab-bar-node?routeId=components%2Ftabs%2Findex.en-US)

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

Tab 1

Tab 2

Tab 3

Content of Tab Pane 1

[自定义语义结构的样式和类](https://ant.design/components/tabs-cn#tabs-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/tabs/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Tabs 的[语义化结构](https://ant.design/components/tabs-cn#semantic-dom)样式。

[](https://ant.design/~demos/tabs-demo-style-class?routeId=components%2Ftabs%2Findex.en-US)

6.0.0

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | - |  | × |
| addIcon | 自定义添加按钮，设置 `type="editable-card"` 时有效 | ReactNode | `<PlusOutlined />` | 4.4.0 | 5.14.0 |
| animated | 是否使用动画切换 Tabs | boolean| { inkBar: boolean, tabPane: boolean } | { inkBar: true, tabPane: false } |  | × |
| centered | 标签居中展示 | boolean | false | 4.4.0 | × |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/tabs-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/tabs-cn#semantic-dom), string> | - |  | 6.0.0 |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | `第一个面板的 key` |  | × |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |  | × |
| indicator | 自定义指示条的长度和对齐方式 | { size?: number | (origin: number) => number; align: `start` | `center` | `end`; } | - | 5.13.0 | 5.13.0 |
| items | 配置选项卡内容 | [TabItemType](https://ant.design/components/tabs-cn#tabitemtype) | [] | 4.23.0 | × |
| more | 自定义折叠菜单属性 | [MoreProps](https://ant.design/components/tabs-cn#moreprops) | { icon: `<EllipsisOutlined />` , trigger: 'hover' } |  | `more.icon`: 5.17.0 |
| removeIcon | 自定义删除按钮，设置 `type="editable-card"` 时有效 | ReactNode | `<CloseOutlined />` | 5.15.0 | 5.15.0 |
| ~~popupClassName~~ | 更多菜单的 `className`, 请使用 `classNames.popup` 替换 | string | - | 4.21.0 | × |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - |  | × |
| size | 大小，提供 `large``medium` 和 `small` 三种大小 | `large` | `medium` | `small` | `medium` |  | × |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/tabs-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/tabs-cn#semantic-dom), CSSProperties> | - |  | 6.0.0 |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | {left?: ReactNode, right?: ReactNode} | - | object: 4.6.0 | × |
| tabBarGutter | tabs 之间的间隙 | number | - |  | × |
| tabBarStyle | tab bar 的样式对象 | CSSProperties | - |  | × |
| tabPlacement | 页签位置，可选值有 `top``end``bottom``start` | `top` | `end` | `bottom` | `start` | `top` |  | × |
| ~~tabPosition~~ | 页签位置，可选值有 `top``right``bottom``left`，请使用 `tabPlacement` 替换 | `top` | `right` | `bottom` | `left` | `top` |  | × |
| ~~destroyInactiveTabPane~~ | 被隐藏时是否销毁 DOM 结构，使用 `destroyOnHidden` 代替 | boolean | false |  | × |
| destroyOnHidden | 被隐藏时是否销毁 DOM 结构 | boolean | false | 5.25.0 | × |
| type | 页签的基本样式，可选 `line`、`card``editable-card` 类型 | `line` | `card` | `editable-card` | `line` |  | × |
| onChange | 切换面板的回调 | (activeKey: string) => void | - |  | × |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (action === 'add' ? event : targetKey, action) => void | - |  | × |
| onTabClick | tab 被点击的回调 | (key: string, event: MouseEvent) => void | - |  | × |
| onTabScroll | tab 滚动时触发 | ({ direction: `left` | `right` | `top` | `bottom` }) => void | - | 4.3.0 | × |

> 更多属性查看 [@rc-component/tabs](https://github.com/react-component/tabs#tabs)

### TabItemType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭图标，在 `type="editable-card"` 时有效。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | - |  |
| ~~destroyInactiveTabPane~~ | 被隐藏时是否销毁 DOM 结构，使用 `destroyOnHidden` 代替 | boolean | false | 5.11.0 |
| destroyOnHidden | 被隐藏时是否销毁 DOM 结构 | boolean | false | 5.25.0 |
| disabled | 禁用某一项 | boolean | false |  |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |  |
| key | 对应 activeKey | string | - |  |
| label | 选项卡头部文字元素 | ReactNode | - |  |
| icon | 选项卡头部图标元素 | ReactNode | - | 5.12.0 |
| children | 选项卡内容元素 | ReactNode | - |  |
| closable | 是否显示选项卡的关闭按钮，在 `type="editable-card"` 时有效 | boolean | true |  |

### MoreProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| icon | 自定义折叠图标 | ReactNode | - |  |
| popupRender | 自定义折叠菜单渲染 | (menu: ReactElement, info: { restTabs: Tab[], onClose: () => void }) => ReactElement | - | 6.6.0 |
| ~~visible~~ | 折叠菜单是否显示，使用 `open` 代替 | boolean | - |  |
| [DropdownProps](https://ant.design/components/dropdown-cn#api) | 支持 Dropdown 的其他属性 |  |  |  |
| ~~onVisibleChange~~ | 折叠菜单显示状态变化时调用，使用 `onOpenChange` 代替 | (open: boolean) => void | - |  |

## Semantic DOM

Tab-0

Tab-1

Tab-2

Tab-3

Tab-4

Tab-5

Tab-6

Tab-7

Tab-8

Tab-9

Tab-10

Tab-11

Tab-12

Tab-13

Tab-14

Tab-15

Tab-16

Tab-17

Tab-18

Tab-19

Tab-20

Tab-21

Tab-22

Tab-23

Tab-24

Tab-25

Tab-26

Tab-27

Tab-28

Tab-29

Content of tab 1

*   ##### root   根元素，包含标签页容器的基础样式、布局和方向控制  
*   ##### header   头部元素，包含标签页头部导航的布局、背景、边框等样式  
*   ##### item   Item 元素，包含相对定位、内边距、颜色、文本省略、圆角、过渡动画等标签项的样式和交互效果  
*   ##### remove

6.4.0   删除按钮元素，包含可编辑标签页关闭按钮的尺寸、颜色、悬浮态和交互反馈等样式  
*   ##### indicator   指示器元素，包含指示条的颜色、位置、尺寸、过渡动画等活跃状态指示样式  
*   ##### body   内容区域元素，包含标签页面板容器的布局、动画和尺寸控制  
*   ##### content   内容元素，包含单个标签页面板的布局、内边距等内容展示样式  
*   ##### popup.root   弹出菜单元素，包含下拉菜单的绝对定位、层级、显示控制、最大高度、滚动等样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cardBg | 卡片标签页背景色 | string | rgba(0,0,0,0.02) |
| cardGutter | 卡片标签间距 | number | 2 |
| cardHeight | 卡片标签页高度 | number | 40 |
| cardHeightLG | 大尺寸卡片标签页高度 | number | 48 |
| cardHeightSM | 小尺寸卡片标签页高度 | number | 32 |
| cardPadding | 卡片标签页内间距 | string | 8px 16px |
| cardPaddingLG | 大号卡片标签页内间距 | string | 11px 16px |
| cardPaddingSM | 小号卡片标签页内间距 | string | 4px 8px |
| horizontalItemGutter | 横向标签页标签间距 | number | 32 |
| horizontalItemMargin | 横向标签页标签外间距 | string |  |
| horizontalItemMarginRTL | 横向标签页标签外间距（RTL） | string |  |
| horizontalItemPadding | 横向标签页标签内间距 | string | 12px 0 |
| horizontalItemPaddingLG | 大号横向标签页标签内间距 | string | 16px 0 |
| horizontalItemPaddingSM | 小号横向标签页标签内间距 | string | 8px 0 |
| horizontalMargin | 横向标签页外间距 | string | 0 0 16px 0 |
| inkBarColor | 指示条颜色 | string | #1677ff |
| itemActiveColor | 标签激活态文本颜色 | string | #0958d9 |
| itemColor | 标签文本颜色 | string | rgba(0,0,0,0.88) |
| itemHoverColor | 标签悬浮态文本颜色 | string | #4096ff |
| itemSelectedColor | 标签选中态文本颜色 | string | #1677ff |
| titleFontSize | 标签页标题文本大小 | number | 14 |
| titleFontSizeLG | 大号标签页标题文本大小 | number | 16 |
| titleFontSizeSM | 小号标签页标题文本大小 | number | 14 |
| verticalItemMargin | 纵向标签页标签外间距 | string | 16px 0 0 0 |
| verticalItemPadding | 纵向标签页标签内间距 | string | 8px 24px |
| zIndexPopup | 下拉菜单 z-index | number | 1050 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgContainer | 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。 | string | #ffffff |
| colorBorder | 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。 | string | #d9d9d9 |
| colorBorderSecondary | 比默认使用的边框色要浅一级，此颜色和 colorSplit 的颜色一致。使用的是实色。 | string | #f0f0f0 |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| colorTextHeading | 控制标题字体颜色。 | string | rgba(0,0,0,0.88) |
| borderRadius | 基础组件的圆角大小，例如按钮、输入框、卡片等 | number | 6 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| boxShadowSecondary | 控制元素二级阴影样式。 | string | 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05) |
| controlHeight | Ant Design 中按钮和输入框等基础控件的高度 | number | 32 |
| controlHeightLG | 较高的组件高度 | number | 40 |
| controlItemBgHover | 控制组件项在鼠标悬浮时的背景颜色。 | string | rgba(0,0,0,0.04) |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeSM | 小号字体大小 | number | 12 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| lineWidthBold | 描边类组件的默认线宽，如 Button、Input、Select 等输入类控件。 | number | 2 |
| lineWidthFocus | 控制线条的宽度，当组件处于聚焦态时。 | number | 3 |
| margin | 控制元素外边距，中等尺寸。 | number | 16 |
| marginSM | 控制元素外边距，中小尺寸。 | number | 12 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| marginXXS | 控制元素外边距，最小尺寸。 | number | 4 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOut | 预设动效曲率 | string | cubic-bezier(0.645, 0.045, 0.355, 1)[](https://cubic-bezier.com/#0.645,0.045,0.355,1) |
| motionEaseInQuint | 预设动效曲率 | string | cubic-bezier(0.755, 0.05, 0.855, 0.06)[](https://cubic-bezier.com/#0.755,0.05,0.855,0.06) |
| motionEaseOutQuint | 预设动效曲率 | string | cubic-bezier(0.23, 1, 0.32, 1)[](https://cubic-bezier.com/#0.23,1,0.32,1) |
| paddingLG | 控制元素的大内间距。 | number | 24 |
| paddingSM | 控制元素的小内间距。 | number | 12 |
| paddingXXS | 控制元素的极小内间距。 | number | 4 |
