---
title: "TDesign · Tabs 选项卡"
source: https://tdesign.tencent.com/vue/components/tabs
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-tabs
publisher: "腾讯"
---

# TDesign · Tabs 选项卡

> 来源：[https://tdesign.tencent.com/vue/components/tabs](https://tdesign.tencent.com/vue/components/tabs)

---

选项卡1内容区

### 基础选项卡

使用选项卡切换内容模块，操作后不会进行页面跳转。

选项卡1的内容，使用 t-tab-panel 渲染

选项卡2的内容，使用 t-tab-panel 渲染

这是选项卡一的内容，使用 t-tabs 渲染

### 带图标的选项卡

在基础选项卡基础上，在每个标签前添加图标，方便用户快速理解。

首页的内容

### 增删选项卡

用户可添加、删除选项卡，满足自定义场景。

原有选项卡内容

### 不同尺寸的选项卡

提供 大、中（默认）两种尺寸。

选项卡1

选项卡1

### 不同风格的选项卡

提供 默认 和 卡片 两种风格。

选项卡1

选项卡1

### 不同位置的选项卡

提供 上、右、下、左 不同位置的选项卡。

选项卡1

### 可滑动的选项卡

当选项卡数量超出最大宽度，可通过滑动展示选项卡。

选项卡22

### 带禁用状态的选项卡

提供了选项卡的禁用状态。

选项卡1的内容

### 可拖拽的选项卡

提供了可拖拽的选项卡。

选项卡1内容

### 懒加载

通过设置 lazy，可以实现懒加载，只在选中tab时才进行渲染。

### Tabs Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| action | String / Slot / Function | - | 【开发中】选项卡右侧的操作区域。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| addable | Boolean | false | 选项卡是否可增加 | N |
| disabled | Boolean | false | 是否禁用选项卡 | N |
| dragSort | Boolean | false | 是否开启拖拽调整顺序 | N |
| list | Array | - | 选项卡列表。TS 类型：`Array<TdTabPanelProps>` | N |
| placement | String | top | 选项卡位置。可选项：left/top/bottom/right | N |
| scrollPosition | String | auto | Tab较多的时候，选中滑块滚动最终停留的位置。可选项：auto/start/center/end | N |
| size | String | medium | 组件尺寸。可选项：medium/large | N |
| theme | String | normal | 选项卡风格，包含 默认风格 和 卡片风格两种。可选项：normal/card | N |
| value | String / Number | - | 激活的选项卡值。支持语法糖 `v-model`。TS 类型：`TabValue` `type TabValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tabs/type.ts) | N |
| defaultValue | String / Number | - | 激活的选项卡值。非受控属性。TS 类型：`TabValue` `type TabValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tabs/type.ts) | N |
| onAdd | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  添加选项卡时触发 | N |
| onChange | Function |  | TS 类型：`(value: TabValue) => void`  激活的选项卡发生变化时触发 | N |
| onDragSort | Function |  | TS 类型：`(context: TabsDragSortContext) => void`  拖拽排序时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tabs/type.ts)。  `interface TabsDragSortContext { currentIndex: number; current: TabValue; targetIndex: number; target: TabValue }` | N |
| onRemove | Function |  | TS 类型：`(options: { value: TabValue; index: number; e: MouseEvent }) => void`  删除选项卡时触发 | N |

### Tabs Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| add | `(context: { e: MouseEvent })` | 添加选项卡时触发 |
| change | `(value: TabValue)` | 激活的选项卡发生变化时触发 |
| drag-sort | `(context: TabsDragSortContext)` | 拖拽排序时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tabs/type.ts)。  `interface TabsDragSortContext { currentIndex: number; current: TabValue; targetIndex: number; target: TabValue }` |
| remove | `(options: { value: TabValue; index: number; e: MouseEvent })` | 删除选项卡时触发 |

### TabPanel Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| default | Slot / Function | - | 用于自定义选项卡导航，同 panel。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| destroyOnHide | Boolean | true | 选项卡内容隐藏时是否销毁 | N |
| disabled | Boolean | false | 是否禁用当前选项卡 | N |
| draggable | Boolean | true | 选项卡组件开启允许拖动排序时，当前选项卡是否允许拖动 | N |
| label | String / Slot / Function | - | 选项卡名称，可自定义选项卡导航内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| panel | String / Slot / Function | - | 用于自定义选项卡面板内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| removable | Boolean | false | 当前选项卡是否允许移除 | N |
| value | String / Number | - | 选项卡的值，唯一标识。TS 类型：`TabValue` | N |
| onRemove | Function |  | TS 类型：`(options: { value: TabValue; e: MouseEvent }) => void`  点击删除按钮时触发 | N |

### TabPanel Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| remove | `(options: { value: TabValue; e: MouseEvent })` | 点击删除按钮时触发 |

### 何时使用

当内容过多时需要将不同类型内容进行扁平化收纳。

### 与页面布局相关

##### 可根据实际使用情况（空间有限，或有特殊诉求的场景等），在内容模块的上下左右不同位置放置选项卡。

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-1@2x.png)

图示：居于上方

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-2@2x.png)

图示：居于下方

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-3@2x.png)

图示：居于左侧

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-4@2x.png)

图示：居于右侧

### 组件搭配使用

##### 不同层级选项卡搭配使用，可以更好区分不同主次内容的层级。

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-5@2x.png)

### 推荐/慎用示例

##### 当标签过多无法在一行展示完整时，不要让选项卡换行，可以考虑使用滑动展示。

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-6@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-7@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 选项卡内的图标需要结合文字展示，不能只使用图标。

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-8@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-9@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 切换选项卡时在同一页面内进行，建议不要跳转新启页面。

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-10@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tabs/tabs-11@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)
