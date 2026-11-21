---
title: "TDesign · Pagination 分页"
source: https://tdesign.tencent.com/vue/components/pagination
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-pagination
publisher: "腾讯"
---

# TDesign · Pagination 分页

> 来源：[https://tdesign.tencent.com/vue/components/pagination](https://tdesign.tencent.com/vue/components/pagination)

---

     - 1
     - 2
     - 3

### 基础分页

#### 少量页面

最基础的分页控件，仅展示页码。建议使用在内容少于10页的轻量化分页场景。

       - 1
       - 2
       - 3
       - 4
       - 5
       - 6
       - 7
       - 8
       - 1
       - 2
       - 3
       - 4

#### 页数较多

拥有大量数据需要展示，通过分页能够让用户快速定位当前页码。建议使用在内容超过10页以上的分页场景。

         - 1
         - 10
         - 11
         - 12
         - 13
         - 14
         - 20
         - 10
         - 11
         - 12
         - 13
         - 14

### 带数据总量显示的分页

关联模块内数据进行展示，以方便用户无需全部浏览即可快速了解数据量级。常用于表格内的数据统计。

       - 1
       - 10
       - 11
       - 12
       - 13
       - 14
       - 69

### 带页面展示数量选择的分页

可根据用户需求对每页展示条目数进行调整。

       - 1
       - 2
       - 3
       - 4
       - 5
       - 22

### 带快速跳转的分页

当数据有快速定位的需求时，通过选择显示快速跳转的分页。

       - 1
       - 2
       - 3
       - 4
       - 5
       - 6

### 极简版分页

极度简单的翻页控件，只展示当前页、总页数及上下翻页。模块内的横向空间较少，并且无需精准定位具体页面的场景。

### 迷你版分页

去掉线框的翻页控件，并保留翻页的主要功能。模块内的空间较少，需要轻量化的翻页的场景，以增加页面利用率。

       - 1
       - 2
       - 3
       - 4
       - 5
       - 20

### 极简迷你版分页

更小尺寸的迷你风格分页控件，适合内嵌在其他组件中分页导航使用。

### PaginationMini 子组件

最小单元分页控件，适合内嵌在其他空间较小的组件中使用。

### Pagination Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| current | Number | 1 | 当前页。支持语法糖 `v-model` | N |
| defaultCurrent | Number | 1 | 当前页。非受控属性 | N |
| disabled | Boolean | - | 是否禁用分页组件 | N |
| foldedMaxPageBtn | Number | 5 | 折叠时最多显示页码按钮数 | N |
| maxPageBtn | Number | 10 | 最多显示页码按钮数 | N |
| pageEllipsisMode | String | mid | 页码数量超出时，前后省略模式, `mid`表示中间省略, `both-ends` 表示两端省略。可选项：mid/both-ends | N |
| pageSize | Number | 10 | 每一页的数据量。支持语法糖 `.sync` | N |
| defaultPageSize | Number | 10 | 每一页的数据量。非受控属性 | N |
| pageSizeOptions | Array | [5, 10, 20, 50] | 分页大小控制器，值为 [] 则不显示。TS 类型：`Array<number \| { label: string; value: number }>` | N |
| selectProps | Object | - | 透传全部属性到 Select 组件，也可使用 `selectProps.popupProps` 透传全部 Popup 组件。TS 类型：`SelectProps`，[Select API Documents](https://tdesign.tencent.com/vue/components/select?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts) | N |
| showFirstAndLastPageBtn | Boolean | false | 是否显示跳转首页尾页页码控制器 | N |
| showJumper | Boolean | false | 是否显示跳转页码控制器 | N |
| showPageNumber | Boolean | true | 是否显示页码控制器 | N |
| showPageSize | Boolean | true | 是否显示分页数量控制器 | N |
| showPreviousAndNextBtn | Boolean | true | 是否显示跳转前后页页码控制器 | N |
| size | String | medium | 分页组件尺寸。可选项：small/medium | N |
| theme | String | default | 分页组件风格。可选项：default/simple | N |
| total | Number | 0 | 数据总条数 | N |
| totalContent | Boolean / Slot / Function | true | 用于自定义总条数呈现内容。默认显示总条数，值为 false 则不显示。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| onChange | Function |  | TS 类型：`(pageInfo: PageInfo) => void`  当前页或分页大小发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts)。  `interface PageInfo { current: number; previous: number; pageSize: number }` | N |
| onCurrentChange | Function |  | TS 类型：`(current: number, pageInfo: PageInfo) => void`  当前页发生变化时触发 | N |
| onPageSizeChange | Function |  | TS 类型：`(pageSize: number, pageInfo: PageInfo) => void`  分页大小发生变化时触发 | N |

### Pagination Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(pageInfo: PageInfo)` | 当前页或分页大小发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts)。  `interface PageInfo { current: number; previous: number; pageSize: number }` |
| current-change | `(current: number, pageInfo: PageInfo)` | 当前页发生变化时触发 |
| page-size-change | `(pageSize: number, pageInfo: PageInfo)` | 分页大小发生变化时触发 |

### PaginationMini Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| disabled | Boolean / Object | - | 按钮禁用配置。TS 类型：`boolean \| JumperDisabledConfig` `type JumperDisabledConfig = { prev?: boolean; current?: boolean; next?: boolean; }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts) | N |
| layout | String | horizontal | 按钮方向。可选项：horizontal/vertical | N |
| showCurrent | Boolean | true | 是否展示当前按钮。TS 类型：`boolean` | N |
| size | String | medium | 按钮尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| tips | Object | - | 提示文案配置，值为 `true` 显示默认文案；值为 `false` 不显示提示文案；值类型为对象则单独配置文案内容。TS 类型：`boolean \| JumperTipsConfig` `type JumperTipsConfig = { prev?: string; current?: string; next?: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts) | N |
| variant | String | text | 按钮形式。可选项：text/outline | N |
| onChange | Function |  | TS 类型：`(context: {e: MouseEvent, trigger: JumperTrigger}) => void`  按钮点击事件回调。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts)。  `type JumperTrigger = 'prev' \| 'current' \| 'next'` | N |

### PaginationMini Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(context: {e: MouseEvent, trigger: JumperTrigger})` | 按钮点击事件回调。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/pagination/type.ts)。  `type JumperTrigger = 'prev' \| 'current' \| 'next'` |

### 何时使用

当数据内容较多，需要分页展示时；

当数据内容较多，需要分批加载时；

当表格、列表需要在不同页面切换内容时。

### 与页面布局相关

##### 当整页布局时，分页控件一般出现在模块下方，通常居于底部位置。

![](https://tdesign.gtimg.com/site/design/guide/pagination/pagination-2@2x.png)

##### 当空间有限时，可使用极简版或迷你版，布局在局部模块内。

![](https://tdesign.gtimg.com/site/design/guide/pagination/pagination-1@2x.png)

### 组件搭配使用

##### 可与数据统计提示搭配使用，更好辅助用户了解条目数量。

![](https://tdesign.gtimg.com/site/design/guide/pagination/pagination-3@2x.png)
