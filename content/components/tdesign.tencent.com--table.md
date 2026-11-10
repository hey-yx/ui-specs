---
title: "TDesign · Table 表格"
source: https://tdesign.tencent.com/vue/components/table
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-table
publisher: "腾讯"
---

# TDesign · Table 表格

> 来源：[https://tdesign.tencent.com/vue/components/table](https://tdesign.tencent.com/vue/components/table)

---

| 申请人 | 审批状态 | 签署方式 | 电子邮件 |
| --- | --- | --- | --- |
| 贾明 | 审批通过 | 电子签署 | w.cezkdudy@lhll.au |
| 张三 | 审批失败 | 纸质签署 | r.nmgw@peurezgn.sl |
| 王芳 | 审批过期 | 纸质签署 | p.cumx@rampblpa.ru |
| 贾明 | 审批通过 | 电子签署 | w.cezkdudy@lhll.au |

### 表格分类

随着表格功能越来越多，如果把所有的功能都集中在一个组件里面，代码文件会越来越臃肿。既不利于维护，也不利于按需引入必要功能的业务。

因此，表格组件有三个：`BaseTable`（基础表格）、`PrimaryTable`（主表格）、`EnhancedTable`（增强型表格），三种表格都会导出。默认导出 `PrimaryTable`。

  - `BaseTable`（基础表格）包含一些基础功能：固定表头、固定列、冻结行、加载态、分页、多级表头、合并单元格、自定义单元格、自定义表头、自定义表尾、文本省略、对齐方式、表格事件、尺寸、行类名、边框、斑马线、悬浮态、空数据等
  - `PrimaryTable` 或 `Table`（主表格）包含一些更高级的功能：行选中、行展开/收起、过滤、排序、异步加载、拖拽排序等。`PrimaryTable` 和 `Table` 包含 `BaseTable` 的所有功能。`Table` 和 `PrimaryTable` 完全等价。
  - `EnhancedTable`（增强型表格）包含一些更复杂的功能：树形结构等。`EnhancedTable` 包含 `BaseTable` 和 `PrimaryTable` 的所有功能
一般情况下，直接使用 `PrimaryTable` 即可满足 90% 的需求，即默认导出的表格。涉及到非常复杂的需求后，使用 `EnhancedTable`。

### 基础表格

简单表格，使用分页切换数据。使用边框线、斑马纹等清晰呈现各数据单元格边界线，辅助信息区隔。

  - 表格宽度模式有两种：`fixed` 和 `auto`，[MDN 详细解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)，组件默认为 `fixed`。
| 申请人 | 申请状态 | 签署方式 | 邮箱地址 | 申请时间 |
| --- | --- | --- | --- | --- |
| 贾明 | 审批通过 | 电子签署 | w.cezkdudy@lhll.au | 2022-01-01 |
| 张三 | 审批失败 | 纸质签署 | r.nmgw@peurezgn.sl | 2022-02-01 |
| 王芳 | 审批过期 | 纸质签署 | p.cumx@rampblpa.ru | 2022-03-01 |
| 贾明 | 审批通过 | 电子签署 | w.cezkdudy@lhll.au | 2022-04-01 |
| 张三 | 审批失败 | 纸质签署 | r.nmgw@peurezgn.sl | 2022-01-01 |
           - 1
           - 2
           - 3
           - 4
           - 5
           - 6

### 行高亮表格

支持鼠标点击或者键盘操作高亮表格行，支持仅高亮一行，或者高亮多行。 键盘操作说明：表格聚焦后，上下键操作切换高亮行，ESC 清空所有高亮行，空格键切换当前停留行高亮状态，Shift 连续选中高亮行。

| 申请人 | 签署方式 | 邮箱地址 | 申请时间 |
| --- | --- | --- | --- |
| 贾明 | 电子签署 | w.cezkdudy@lhll.au | 2022-01-01 |
| 张三 | 纸质签署 | r.nmgw@peurezgn.sl | 2022-02-01 |
| 王芳 | 纸质签署 | p.cumx@rampblpa.ru | 2022-03-01 |
| 贾明 | 电子签署 | w.cezkdudy@lhll.au | 2022-04-01 |
| 张三 | 纸质签署 | r.nmgw@peurezgn.sl | 2022-01-01 |

### 可自定义样式的表格

  - 使用表格属性 `rowClassName` 设置行类名。
  - 使用列属性 `className` 设置列类名，或具体的某一个或某一些单元格类名。
  - 使用列属性 `attr: { style: {} }` 设置列内联样式，或具体的某一个或某一些单元格内联样式。
| 申请人 | 审批状态 | 申请耗时(天) | 签署方式 | 邮箱地址 | 申请时间 |
| --- | --- | --- | --- | --- | --- |
| 贾明 | 审批通过 | 2 | 电子签署 | w.cezkdudy@lhll.au | 2022-01-01 |
| 张三 | 审批失败 | 10 | 纸质签署 | r.nmgw@peurezgn.sl | 2022-02-01 |
| 王芳 | 审批过期 | 1 | 纸质签署 | p.cumx@rampblpa.ru | 2022-03-01 |
| 贾明 | 审批通过 | 2 | 电子签署 | w.cezkdudy@lhll.au | 2022-04-01 |
| 张三 | 审批失败 | 10 | 纸质签署 | r.nmgw@peurezgn.sl | 2022-01-01 |
| 汇总：近期数据波动较大 |  |  |  |  |  |

### 单元格超出省略的表格

支持单元格文本超出省略、单独控制标题超出省略，单独控制超出省略的浮层内容和背景色等特性，一般用于需要悬浮显示单元格详情信息的场景。

  - 使用 `ellipsis` 设置列文本超出省略显示，默认会同时控制表头的超出省略显示；只要 `ellipsis` 为真，无论是何种数据类型都会出现超出省略。
  - 使用 `ellipsisTitle` 单独设置表头超出省略显示，优先级高于 `ellipsis`。

### 固定表头/固定行的表格

表格内容高度超出后，滚动时表头会自动固定。可通过 `height` 或 `maxHeight` 设置表格高度，单位同 CSS 属性。建议使用 `maxHeight` 自适应高度。

表格宽度模式有两种：`fixed` 和 `auto`，[MDN 详细解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)，组件默认为 `fixed`。如果希望表格列宽自适应，设置 `table-layout: auto` 即可。

刷新表格 DOM 元素请使用组件实例方法 `refreshTable`。

### 固定列的表格

列的数量过多时，使用固定列方便表格数据内容呈现，支持固定左侧列和固定右侧列。可通过给列属性设置 `fixed: 'left'` 或 `fixed: right` 以达成固定列效果。固定列线条宽度可以通过 CSS 控制粗细。

表格宽度模式有两种：`fixed` 和 `auto`，[MDN 详细解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)，组件默认为 `fixed`。如果希望表格列宽自适应，设置 `table-layout: auto` 即可，这种模式下固定列必须指定表格内容的总宽度 `tableContentWidth`，`tableContentWidth` 的值必须大于表格可见宽度。

多级表头中的固定列，必须指定每一个固定列的 `colKey` 和 `fixed` 属性。

⚠️ Windows 操作系统横向滚动操作：按下 Shift 键的同时，鼠标操作滚轮进行滚动。纵向滚动操作：直接鼠标操作滚轮进行滚动。

| 申请人 | 审批状态 | 邮箱地址 | 申请事项 | 申请日期 | 操作 |
| --- | --- | --- | --- | --- | --- |
| 贾明 | 审批通过 | w.cezkdudy@lhll.au | 宣传物料制作费用 | 2022-01-01 | 查看详情 |
| 张三 | 审批失败 | r.nmgw@peurezgn.sl | algolia 服务报销 | 2022-02-01 | 再次申请 |
| 王芳 | 审批过期 | p.cumx@rampblpa.ru | 相关周边制作费 | 2022-03-01 | 再次申请 |
| 贾明 | 审批通过 | w.cezkdudy@lhll.au | 激励奖品快递费 | 2022-04-01 | 查看详情 |
| 张三 | 审批失败 | r.nmgw@peurezgn.sl | 宣传物料制作费用 | 2022-01-01 | 再次申请 |

### 固定表头和列的表格

支持同时固定表头和固定列。`fixedRows` 用于设置冻结首行和尾行数量，示例：`[2, 2]`。

表格宽度模式有两种：`fixed` 和 `auto`，[MDN 详细解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)，组件默认为 `fixed`。如果希望表格列宽自适应，设置 `table-layout: auto` 即可，这种模式下固定列必须指定表格内容的总宽度 `tableContentWidth`，`tableContentWidth` 的值必须大于表格可见宽度。

多级表头中的固定列，必须指定每一个固定列的 `colKey` 和 `fixed` 属性。

### 自定义单元格的表格

单元格默认使用 `row[colKey]` 渲染数据内容，自定义单元格有以下 3 种方式：

  - 使用 `cell` 作为渲染函数，函数参数为：`{col, colIndex, row, rowIndex}`。
  - 对于有插槽特性的框架，支持插槽，使用 `cell` 的值作为插槽名称；如果 `cell` 值为空，则默认取 `colKey` 作为插槽名称。注意插槽名称保持 kebab-case 或 camelCase 命名。
  - 【不推荐使用】使用 `render` 渲染函数，函数参数为：`{col, colIndex, row, rowIndex, type}`，其中 `type` 的值为 `cell`。

### 自定义表头的表格

标题默认使用 `title` 渲染，自定义标题则有以下 3 种方式：

  - 使用 `title` 作为渲染函数，函数参数为：`title({ col, colIndex })`。
  - 对于有插槽特性的框架，支持插槽，使用 `title` 的值作为插槽名称。注意插槽名称保持 kebab-case 或 camelCase 命名。
  - 【不推荐使用】使用 `render` 作为渲染函数，函数参数为：`render({ col, colIndex, row, rowIndex, type })`，其中 `type` 值为 `title`。使用排序、过滤等功能时不能使用该方法。

### 自定义表尾的表格

表格提供自定义表尾功能，可用于表尾数据统计等场景。使用 `column.foot` 定义每一列的表尾内容。

  - 默认输出 `column.foot` 字符串，如果 `foot` 类型为函数，则作为表尾渲染函数自定义表尾内容。
  - 对于有插槽特性的框架，支持插槽，使用 `foot` 值作为插槽名称。注意插槽名称保持 kebab-case 或 camelCase 命名。
  - 如果想定义通栏表尾，请使用 `footerSummary`
  - 如果想自定义表尾合并单元格信息，请使用 `rowspanAndColspanInFooter`，类似表格内容的合并单元格方法 `rowspanAndColspan`。

### 可表头吸顶/表尾吸顶的表格

  - 表头吸顶，设置 `headerAffixedTop=true` 即可。如果需要调整吸顶位置及更多配置，使用 `headerAffixedTop: { offsetTop: 80 }`。
  - 表尾吸底，设置 `footAffixedBottom=true` 即可。如果需要调整吸底位置及更多配置，使用 `footAffixedBottom: { offsetBottom: 60 }`。
  - 滚动条吸底，设置 `horizontalScrollAffixedBottom=true` 即可。如果需要调整吸底位置及更多配置，使用 `horizontalScrollAffixedBottom: { offsetBottom: 60 }`。
  - 分页器吸底，设置 `paginationAffixedBottom=true` 即可。如果需要调整吸底位置及更多配置，使用 `paginationAffixedBottom: { offsetBottom: 60 }`。

### 可展开和收起的表格

表格提供可收纳功能，展开后可以进一步查看详细内容。

  - `expandedRowKeys` 用于存储展开行的值，支持非受控属性 `defaultExpandedRowKeys`。
  - `expandedRow` 用于定义展开行显示的具体内容，参数有 `{ row, rowIndex }`。
  - `expandIcon` 用于自定义展开图标，值为 true 显示默认图标，值为 false 不显示图标，值为函数则表示完全自定义图标。
  - `expandOnRowClick` 表示是否允许点击表格行时展开。
  - 展开行发生变化时会触发展开行变化事件。

### 可进行列配置的表格

自定义设置需要展示的列，可以通过 `columnController` 字段来设置，更多细节可产看 API 文档中的 `TableColumnController` 描述。

  - `displayColumns` 表示当前显示列，支持非受控属性 `defaultDisplayColumns`。
  - `onDisplayColumnsChange` 会在列配置确认后触发。
  - `onColumnChange` 会在列配置选择时（确认之前）触发。
  - `columnController.placement` 用于调整列配置按钮基于表格的放置位置，共有 4 种位置：左上角、右上角、左下角、右下角。
  - `columnController.fields` 用于设置哪些列被允许控制显示或隐藏，不传表示全部列可以进行显示或隐藏控制。
  - `columnController.displayType` 用来设置列配置弹窗中，列字段排列方式，定宽或自动宽度。可选值： `auto-width` 和 `fixed-width`。
  - 支持透传 `CheckboxGroup` 组件全部属性，`columnController.checkboxGroupProps` 用于控制弹框中的复现框相关功能。
  - 支持透传 `Dialog` 组件全部属性，`columnController.dialogProps` 用于调整列配置弹框相关功能，如：防止滚动穿透。
  - 支持透传 `Button` 组件全部属性，`columnController.buttonProps` 用于控制列配置按钮的全部特性，如：按钮颜色和文本。
  - `columnControllerVisible` 自由控制是否显示列配置框，一般用于希望完全自定义列配置按钮的场景。
  - `onColumnControllerVisibleChange` 列配置框显示或隐藏时触发。

#### 示例一：包含配置按钮的列配置功能示例

#### 示例二：不包含配置按钮的列配置功能示例

使用 `columnControllerVisible` 控制是否显示列配置弹框，`onColumnControllerVisibleChange` 用于监听相关变化。一般应用于需要完全自定义列配置按钮内容和位置的场景。

### 可排序的表格

对先后顺序有要求的场景（如安全策略场景），提供表格排序能力，用户可以调整位置。

#### 单字段排序

  - 将需要排序的列属性 `sorter` 设置为 `true`，示例：`{ colKey: 'date', title: '日期', sorter: true }`。
  - 设置表格排序属性 `sort` 的值为 `{ sortBy: 'date', descending: true }`，其中 `descending` 表示是否为降序排序，值为 `true` 表示降序，值为 `false` 表示升序。
  - 排序发生变化时，监听事件 `onSortChange`，在事件处理程序中添加业务逻辑。
  - 使用 `showSortColumnBgColor` 控制是否显示排序列背景色，用于更加显示地提醒用户具体的排序列。
提供列属性 `sortType`，用于自定义支持排序方式。可选值有 `desc`/`asc`/`all`，分别表示只能降序徘、只能升序徘、降序和升序。

#### 多字段排序

  - 设置表格属性 `multipleSort` 为 true。
  - 将需要排序的列属性 `sorter` 设置为 true，可以设置多个列，示例：`[{ colKey: 'date', title: '日期', sorter: true }, { colKey: 'cost', title: '花费', sorter: true }]`。
  - 设置表格排序属性 `sort` 的值为 `[{ sortBy: 'date', descending: true }, { sortBy: 'cost', descending: false }]`
排序：[ { "sortBy": "status", "descending": true }, { "sortBy": "time", "descending": false } ]

#### 本地数据排序

本地数据排序，表示组件内部会对参数 data 进行数据排序。如果 data 数据为 10 条，就仅对这 10 条数据进行排序。

  - 将需要排序的列属性 `sorter` 设置为排序函数，示例：`{ colKey: 'date', title: '日期', sorter: (a, b) => a.status - b.status }`。
  - 设置表格排序属性 `sort` 的值为 `{ sortBy: 'date', descending: true }`。
  - 排序发生变化时，监听事件 `onSortChange`，在事件处理程序中添加业务逻辑。
  - 排序发生变化时，因为是本地数据排序，因此数据也会发生变化，需要监听 `onDatachange`，事件处理受控数据。

### 可选中行的表格

在涉及到表单选择、或批量操作场景中，可在数据行前直接单选或多选操作对象。

#### 示例一：单选(Radio)

  - `selectedRowKeys` 表示当前选中行的唯一标识数组，支持非受控属性 `defaultSelectedRowKeys`
  - `onSelectChange` 会在选中行发生变化时触发
  - 设置 `columns: [{ colKey: 'row-select', type: 'single' }]` 可以将任意列定义为行选中操作列。

#### 示例二：多选(Checkbox)

  - `selectedRowKeys` 表示当前选中行的唯一标识数组，支持非受控属性 `defaultSelectedRowKeys`
  - `onSelectChange` 会在选中行发生变化时触发
  - 设置 `columns: [{ colKey: 'row-select', type: 'multiple' }]` 可以将任意列定义为行选中操作列。
  - 分页场景下的行选中，默认允许跨分页选中，即翻页时，上一页选中结果依然保存。如果希望每一页单独控制选中，互不影响，可设置 `reserveSelectedRowOnPaginate=false`
  - 注意：如果发现点击某一行便选中了全部，说明 `rowKey` 设置不正确，或者没有设置，请确保 `rowKey` 的值为 `data` 中的字段。

#### 示例三：没有操作列的行选中

不带操作列的行选中表格，一般用于一些简要选择场景，通过点击行直接选中。可以通过 `rowSelectionType: 'single' | 'multiple'` 控制单选或多选。

### 可分页的表格

#### 远程数据分页

远程数据分页，表示组件内部不会对参数 `data` 进行分页。只输出分页信息，以供远程请求进行分页。

#### 本地数据分页

当 `data.length` 长度超过 `pageSize`，单页已无法完整地显示数据，此时会自动开启本地数据分页，组件内部会对 `data` 进行分页。 如果希望禁用组件内部分页，可以设置 `disableDataPage=true`。

### 可筛选的表格

组件默认内置：复选框、单选按钮、输入框等类型的筛选器。同时，也可以自定义任何筛选器，如示例中的日期选择器。

  - 表格属性 `filterValue` 用于设置过滤功能默认值，示例：`{ firstName: '' }`。
  - 表格属性 `filterIcon` 用于设置自定义过滤图标。
  - 筛选器值发生变化时，会触发 `filterChange` 事件。
  - 列配置 `filter.type` 决定使用哪一种筛选器，可选值有：`single/multiple/input`，分别表示：单选按钮筛选器、复选框筛选器、输入框筛选器。也可以使用 `filter.component` 自定义筛选组件。
  - 列配置 `filter.list` 用于配置当前筛选器可选值有哪些，仅当 `filter.type` 等于 single 或 multiple 时有效。
  - 列配置 `filter.props` 用于透传筛选器属性，可以对筛选器进行任何原组件支持的属性配置.
  - 列配置 `filter.component` 用于自定义筛选器，只要保证自定义筛选器包含 `value` 属性 和 `change` 事件，即可像内置筛选器一样正常使用。
  - 列配置 `filter.showConfirmAndReset` 用于控制是否显示“确认”“重置”按钮.
  - 列配置 `filter.resetValue` 用于设置点击“重置”按钮时的重置值，并非每个场景都会重置为 `''` 或 `[]` `null`，默认重置为 `''`。
  - 表格属性 `filterRow` 可完全自定义过滤结果行显示内容，设置 `filterRow=null` 隐藏过滤行。
  - 更多功能属性请查看 API 文档中的 `TableColumnFilter`

### 带合并单元格的表格

根据数据结构，可以将表格中的行列进行合并。

  - 使用表格属性 `rowspanAndColspan` 设置表格内容合并元格。
  - 使用表格属性 `rowspanAndColspanInFooter` 设置表尾合并单元格。
  - 使用列属性 `colspan` 设置表头合并。如果是多行表头，请参考下方「多级表头」示例。

### 多级表头的表格

表头数据标签可采用多级呈现，表述信息层级包含关系。

  - 多级表头的配置只需要在列配置中添加 `children` 子列配置即可。
  - 多级表头中的固定列，必须指定每一个固定列的 `colKey` 和 `fixed` 属性。
  - 多级表表头中的列宽设置，只需指定最后一层表头宽度。

### 加载状态的表格

#### 普通加载

普通加载，会在表格上面显示半透明加载层，表格内容不隐藏。

  - `loading=true` 显示默认加载状态；`loading=false` 不显示加载状态；`loading`值类型为函数，则表示自定义加载状态文本内容，对于支持插槽的框架还支持同名插槽（不包含加载图标）。
  - `loadingProps` 用于透传加载组件全部属性，可以使用该特性定制化更多个性加载状态。
| 类型 | 平台 | 属性 | 默认值 | 是否必传 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 类型 | 平台 | 属性 | 默认值 | 是否必传 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 类型 | 平台 | 属性 | 默认值 | 是否必传 | 说明 |
| --- | --- | --- | --- | --- | --- |

#### 异步加载

使用 `asyncLoading` 定义异步加载状态。

  - `asyncLoading=''` 表示非加载状态或加载完成状态；
  - `asyncLoading='load-more'` 表格底部显示“加载更多”；
  - `asyncLoading='loading'` 表格底部显示“正在加载中，请稍后”；
  - `asyncLoading` 值类型为函数，则表示完全自定义底部异步加载内容。

### 空表格

使用默认空表格样式。

| 类型 | 平台 | 属性 | 默认值 | 是否必传 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 暂无数据 |  |  |  |  |  |
| 类型 | 平台 | 属性 | 默认值 | 是否必传 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 😊 使用插槽自定义的空内容 😊 |  |  |  |  |  |
| 类型 | 平台 | 属性 | 默认值 | 是否必传 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 😊 使用渲染函数自定义的空内容 😊 |  |  |  |  |  |

### 可拖拽排序的表格

通过拖拽表格行调整顺序，拖拽表头表头调整列顺序。

  - `dragSort='row'` 用于设置表格为行拖拽排序。
  - `dragSort='row-handler'` 用于设置表格为行拖拽排序，即通过拖拽手柄调控拖拽排序。这种模式，还需同步设置手柄列，`{ colKey: 'drag', cell: () => <MoveIcon /> }`。
  - `dragSort='col'` 用于设置表格为列拖拽排序。
  - `sortOnRowDraggable` 用于行拖拽排序。已废弃，请更为使用 `dragSort='row'`，兼容支持。

#### 示例一：无手柄列的行拖拽排序

设置参数 `dragSort='row'` 即可。

#### 示例二：有手柄列的行拖拽排序

设置参数 `dragSort='row-handler'` 的同时，还需要添加手柄列：`{ colKey: 'sort', cell: () => <MoveIcon /> }`。

#### 列拖拽排序

【持续完善中】调整列顺序。设置参数 `dragSort='col'` 即可。列拖拽排序场景中，必须指定列唯一标识 `colKey`。

### 懒加载的表格

懒加载一般用于数据量较大的场景，设置 `scroll={ type: 'lazy' }` 即可开启懒加载模式，通过 `scroll.bufferSize` 预设加载过程中提前加载的数据数量。

### 虚拟滚动的表格

虚拟滚动场景下，支持表格的几乎全部功能，如：固定列、固定表头、固定表尾、表头吸顶、表尾吸底等。实验场地请参看「多级表头的表格」示例。

  - 虚拟滚动一般用于超大数据渲染的场景，以提供更优的前端性能表现，设置 `scroll={ type: 'virtual' }` 即可开启虚拟滚动模式。
  - 为保证组件收益最大化，当数据量小于 `threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动，`threshold` 默认为 `100`。

### 可编辑的表格

可编辑的表格分为单元格编辑表格和行编辑表格两种。详细完整的接口请查看 API 文档中的 `TableEditableCellConfig`。

#### 可编辑单元格的表格

  - `column.edit.component` 表示进行编辑的组件，示例：Input、Select、DatePicker。需保证组件包含 `value` 和 `onChange` 两个属性。如果还需要支持校验规则，则组件还需实现 `tips` 和 `status` 两个 API，实现规则可参考 `Input` 组件。
  - `column.edit.props` 表示传给编辑组件 `column.edit.component` 的参数。
  - `column.edit.onEdited` 表示编辑完成后，退出编辑模式时触发。
  - `column.edit.rules` 指校验规则，和表单的校验规则配置一样 `FormRule`。
  - `column.edit.abortEditOnEvent` 表示除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态。如：单选框值变化事件 `onChange`，一般情况无需配置。
  - `column.edit.defaultEditable` 默认状态是否为编辑态。
  - `editableCellState` 表格全局属性，用于控制单元格是否允许编辑。返回值为 `true` 则表示可编辑；返回值为 `false` 则表示不可编辑，只读状态

#### 可编辑行的表格

可对表格进行整行编辑和保存等操作。

  - `editableRowKeys` 用于控制处于编辑状态的行。
  - `onRowEdit` 会在行编辑时触发。
  - 实例方法 `validateRowData` 用于进行表格行数据校验，`onRowValidate` 在行编辑校验完成时触发。
  - 实例方法 `validateTableData` 用于进行表格全部数据校验，`onValidate` 在全部数据校验完成时触发。

### 树形结构的表格

请使用 `EnhancedTable`，`Table/PrimaryTable/BaseTable` 等不支持树形结构。

⚠️ 树形结构的表格，支持添加节点、删除节点、交换同级节点、查询节点、展开/收起节点等丰富特性。为减少每次计算的递归查询，也为以后虚表做准备，故而内部数据为平铺结构，所有数据变化均通过组件实例方法控制，具体实例方法请查看 API 文档 `EnhancedTableInstanceFunctions`。树形结构细节配置请查看 `tree: TableTreeConfig`。

  - `treeExpandAndFoldIcon` 用于设置树形结构折叠/展开图标，支持全局配置。
  - 子节点字段默认为 `children`，可以使用 `tree.childrenKey` 定义字段别名，示例：`tree={ childrenKey: 'list' }`。
  - `tree.indent` 用于设置树结点缩进距离，叶子结点的距离可以通过类名 `t-table__tree-leaf-node` 单独设置。
  - `tree.treeNodeColumnIndex` 用于设置第几列作为树形结构操作列
  - `tree.checkStrictly` 表示树形结构的行选中（多选），父子行选中是否独立，默认独立，值为 true。
  - `tree.defaultExpandAll=true` 表示默认展开全部节点，后续可通过 `expandAll` 和 `foldAll` 控制全部展开或全部收起。使用 `toggleExpandData` 控制单个节点的展开和收起。
  - 刷新表格数据请使用组件实例方法 `resetData`。
  - 获取树形结构数据可使用组件实例方法 `getTreeNode`。

#### 树形结构显示

#### 树形结构行选中

### BaseTable Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| activeRowKeys | Array | [] | 高亮行，支持鼠标键盘操作(Shift)连续高亮行，可用于处理行选中等批量操作，模拟操作系统区域选择行为。支持语法糖 `.sync`。TS 类型：`Array<string \| number>` | N |
| defaultActiveRowKeys | Array | [] | 高亮行，支持鼠标键盘操作(Shift)连续高亮行，可用于处理行选中等批量操作，模拟操作系统区域选择行为。非受控属性。TS 类型：`Array<string \| number>` | N |
| activeRowType | String | - | 默认不会高亮点击行，`activeRowType=single` 表示鼠标点击仅允许同时高亮一行，Shift 键盘操作加鼠标操作依然可以高亮多行，因为这属于明显的区域选择行为。`activeRowType= multiple ` 表示允许鼠标点击同时高亮多行。TS 类型：`'single' \| 'multiple'` | N |
| allowResizeColumnWidth | Boolean | undefined | 已废弃。是否允许调整列宽。请更为使用 `resizable` | N |
| attach | String / Function | - | 超出省略等所有浮层元素统一绑定到 `attach`，可根据实际情况调整挂载元素。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| bordered | Boolean | false | 是否显示表格边框 | N |
| bottomContent | String / Slot / Function | - | 表格底部内容，可以用于自定义列设置等。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| cellEmptyContent | String / Slot / Function | - | 单元格数据为空时呈现的内容。TS 类型：`string \| TNode<BaseTableCellParams<T>>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<BaseTableCol<T>>` | N |
| data | Array | [] | 数据源，泛型 T 指表格数据类型。TS 类型：`Array<T>` | N |
| disableDataPage | Boolean | false | 是否禁用本地数据分页。当 `data` 数据长度超过分页大小时，会自动进行本地数据分页。如果 `disableDataPage` 设置为 true，则无论何时，都不会进行本地数据分页 | N |
| disableSpaceInactiveRow | Boolean | undefined | 默认重复按下 Space 键可取消当前行高亮，是否禁用取消 | N |
| empty | String / Slot / Function | '' | 空表格呈现样式，支持全局配置 `GlobalConfigProvider`。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| firstFullRow | String / Slot / Function | - | 首行内容，横跨所有列。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| fixedRows | Array | - | 固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行。TS 类型：`Array<number>` | N |
| footData | Array | [] | 表尾数据源，泛型 T 指表格数据类型。TS 类型：`Array<T>` | N |
| footerAffixProps | Object | - | 已废弃。请更为使用 `footerAffixedBottom`。表尾吸底基于 Affix 组件开发，透传全部 Affix 组件属性。TS 类型：`Partial<AffixProps>` | N |
| footerAffixedBottom | Boolean / Object | false | 表尾吸底。使用该功能，需要非常注意表格是相对于哪一个父元素进行滚动。值为 `true`，则表示相对于整个窗口吸底。如果表格滚动的父元素不是整个窗口，请通过 `footerAffixedBottom.container` 调整固钉的吸顶范围。基于 Affix 组件开发，透传全部 Affix 组件属性。TS 类型：`boolean \| Partial<AffixProps>` | N |
| footerSummary | String / Slot / Function | - | 表尾总结行。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| headerAffixProps | Object | - | 已废弃。请更为使用 `headerAffixedTop`。表头吸顶基于 Affix 组件开发，透传全部 Affix 组件属性。TS 类型：`Partial<AffixProps>`，[Affix API Documents](https://tdesign.tencent.com/vue/components/affix?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| headerAffixedTop | Boolean / Object | false | 表头吸顶。使用该功能，需要非常注意表格是相对于哪一个父元素进行滚动。值为 `true`，表示相对于整个窗口吸顶。如果表格滚动的父元素不是整个窗口，请通过 `headerAffixedTop.container` 调整吸顶的位置。基于 Affix 组件开发，透传全部 Affix 组件属性。TS 类型：`boolean \| Partial<AffixProps>` | N |
| height | String / Number | - | 表格高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight` | N |
| horizontalScrollAffixedBottom | Boolean / Object | - | 滚动条吸底。基于 Affix 组件开发，透传全部 Affix 组件属性。TS 类型：`boolean \| Partial<AffixProps>` | N |
| hover | Boolean | false | 是否显示鼠标悬浮状态 | N |
| keyboardRowHover | Boolean | true | 键盘操作行显示悬浮效果，一般用于键盘操作行选中、行展开、行高亮等功能 | N |
| lastFullRow | String / Slot / Function | - | 尾行内容，横跨所有列。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| lazyLoad | Boolean | false | 是否启用整个表格元素的懒加载，当页面滚动到可视区域后再渲染表格。注意和表格内部行滚动懒加载的区别，内部行滚动无论表格是否在可视区域都会默认渲染第一屏的行元素 | N |
| loading | Boolean / Slot / Function | undefined | 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| loadingProps | Object | - | 透传加载组件全部属性。TS 类型：`Partial<LoadingProps>`，[Loading API Documents](https://tdesign.tencent.com/vue/components/loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| locale | Object | - | 语言配置。TS 类型：`TableConfig`，[ConfigProvider API Documents](https://tdesign.tencent.com/vue/components/config-provider?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| maxHeight | String / Number | - | 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px | N |
| pagination | Object | - | 分页配置，值为空则不显示。具体 API 参考分页组件。当 `data` 数据长度超过分页大小时，会自动对本地数据 `data` 进行排序，如果不希望对于 `data` 进行排序，可以设置 `disableDataPage = true`。TS 类型：`PaginationProps`，[Pagination API Documents](https://tdesign.tencent.com/vue/components/pagination?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| paginationAffixedBottom | Boolean / Object | - | 分页吸底。基于 Affix 组件开发，透传全部 Affix 组件属性。TS 类型：`boolean \| Partial<AffixProps>` | N |
| resizable | Boolean | false | 是否允许调整列宽，设置 `tableLayout=fixed` 效果更友好，此时不允许通过 CSS 设置 `table`元素宽度，也不允许设置 `tableContentWidth`。一般不建议在列宽调整场景使用 `tableLayout: auto`。如果想要配置宽度可调整的最小值和最大值，请使用 `column.resize`，示例：`columns: [{ resize: { minWidth: 120, maxWidth: 300 } }]`。   默认规则：因列宽超出存在横向滚动条时，列宽调整仅影响当前列宽和总列宽；表格列较少没有横向滚动条时，列宽调整表现为自身宽度和相邻宽度变化 | N |
| rowAttributes | Object / Array / Function | - | HTML 标签 `tr` 的属性。类型为 Function 时，参数说明：`params.row` 表示行数据；`params.rowIndex` 表示行下标；`params.type=body` 表示属性作用于 `tbody` 中的元素；`params.type=foot` 表示属性作用于 `tfoot` 中的元素。  示例一：{ draggable: true }，  示例二：[{ draggable: true }, { title: '超出省略显示' }]。   示例三：() => [{ draggable: true }]。TS 类型：`TableRowAttributes<T>` `type TableRowAttributes<T> = HTMLElementAttributes \| ((params: { row: T; rowIndex: number; type: 'body' \| 'foot' }) => HTMLElementAttributes) \| Array<TableRowAttributes<T>>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| rowClassName | String / Object / Array / Function | - | 行类名，泛型 T 指表格数据类型。`params.row` 表示行数据；`params.rowIndex` 表示行下标；`params.type=body` 表示类名作用于 `tbody` 中的元素；`params.type= tfoot` 表示类名作用于 `tfoot` 中的元素。TS 类型：`ClassName \| ((params: RowClassNameParams<T>) => ClassName)` `interface RowClassNameParams<T> { row: T; rowIndex: number; rowKey?: string; type?: 'body' \| 'foot' }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| rowKey | String | 'id' | 必需。唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法 | Y |
| rowspanAndColspan | Function | - | 用于自定义合并单元格，泛型 T 指表格数据类型。示例：`({ row, col, rowIndex, colIndex }) => { rowspan: 2, colspan: 3 }`。TS 类型：`TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| rowspanAndColspanInFooter | Function | - | 用于自定义表尾的合并单元格，泛型 T 指表格数据类型。示例：`({ row, col, rowIndex, colIndex }) => { rowspan: 2, colspan: 3 }`。TS 类型：`TableRowspanAndColspanFunc<T>` | N |
| scroll | Object | - | 懒加载和虚拟滚动。为保证组件收益最大化，当数据量小于阈值 `scroll.threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动，`scroll.threshold` 默认为 `100`。TS 类型：`TScroll`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| showHeader | Boolean | true | 是否显示表头 | N |
| size | String | - | 表格尺寸，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `medium`。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| stripe | Boolean | false | 是否显示斑马纹 | N |
| tableContentWidth | String | - | 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度 | N |
| tableLayout | String | fixed | 表格布局方式，`<table>` 元素原生属性。[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)。注意，在列宽调整下场景只能使用 `fixed` 模式。可选项：auto/fixed | N |
| topContent | String / Slot / Function | - | 表格顶部内容，可以用于自定义列设置、顶部查询条件等。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| verticalAlign | String | middle | 行内容上下方向对齐。可选项：top/middle/bottom | N |
| onActiveChange | Function |  | TS 类型：`(activeRowKeys: Array<string \| number>, context: ActiveChangeContext<T>) => void`  高亮行发生变化时触发，泛型 T 指表格数据类型。参数 `activeRowList` 表示所有高亮行数据， `currentRowData` 表示当前操作行数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface ActiveChangeContext<T> { activeRowList: Array<{ row: T, rowIndex: number }>; currentRowData?: T; type: 'active' \| 'inactive' }` | N |
| onActiveRowAction | Function |  | TS 类型：`(context: ActiveRowActionContext<T>) => void`  键盘操作事件。开启行高亮功能后，会自动开启键盘操作功能，如：通过键盘(Shift)或鼠标操作连续选中高亮行时触发，一般用于处理行选中等批量操作，模拟操作系统区域选择行为。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface ActiveRowActionContext<T> { action: ActiveRowActionType, activeRowList: Array<{ row: T, rowIndex: number }> }`    `type ActiveRowActionType ='shift-area-selection' \| 'space-one-selection' \| 'clear' \| 'select-all'` | N |
| onCellClick | Function |  | TS 类型：`(context: BaseTableCellEventContext<T>) => void`  单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface BaseTableCellEventContext<T> { row: T; col: BaseTableCol; rowIndex: number; colIndex: number; e: MouseEvent }` | N |
| onColumnResizeChange | Function |  | TS 类型：`(context: { columnsWidth: { [colKey: string]: number }; }) => void`  列调整大小之后触发。`context.columnsWidth` 表示操作后各个列的宽度； | N |
| onPageChange | Function |  | TS 类型：`(pageInfo: PageInfo, newDataSource: Array<T>) => void`  分页发生变化时触发。参数 newDataSource 表示分页后的数据。本地数据进行分页时，newDataSource 和源数据 data 会不一样。泛型 T 指表格数据类型 | N |
| onRowClick | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  行点击时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface RowEventContext<T> { row: T; index: number; e: MouseEvent \| KeyboardEvent }` | N |
| onRowDblclick | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  行双击时触发，泛型 T 指表格数据类型 | N |
| onRowMousedown | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  鼠标在表格行按下时触发，泛型 T 指表格数据类型 | N |
| onRowMouseenter | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  鼠标在表格行进入时触发，泛型 T 指表格数据类型 | N |
| onRowMouseleave | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  鼠标在表格行离开时触发，泛型 T 指表格数据类型 | N |
| onRowMouseover | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  鼠标悬浮到行时触发，泛型 T 指表格数据类型 | N |
| onRowMouseup | Function |  | TS 类型：`(context: RowEventContext<T>) => void`  鼠标在表格行按下又弹起时触发，泛型 T 指表格数据类型 | N |
| onScroll | Function |  | TS 类型：`(params: { e: WheelEvent }) => void`  表格内容滚动时触发 | N |
| onScrollX | Function |  | TS 类型：`(params: { e: WheelEvent }) => void`  已废弃。表格内容横向滚动时触发。请更为使用 `onScroll` 事件 | N |
| onScrollY | Function |  | TS 类型：`(params: { e: WheelEvent }) => void`  已废弃。表格内容纵向滚动时触发。当内容超出高度(height)或最大高度(max-height)时，会出现纵向滚动条。请更为使用 `onScroll` 事件 | N |

### BaseTable Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| active-change | `(activeRowKeys: Array<string \| number>, context: ActiveChangeContext<T>)` | 高亮行发生变化时触发，泛型 T 指表格数据类型。参数 `activeRowList` 表示所有高亮行数据， `currentRowData` 表示当前操作行数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface ActiveChangeContext<T> { activeRowList: Array<{ row: T, rowIndex: number }>; currentRowData?: T; type: 'active' \| 'inactive' }` |
| active-row-action | `(context: ActiveRowActionContext<T>)` | 键盘操作事件。开启行高亮功能后，会自动开启键盘操作功能，如：通过键盘(Shift)或鼠标操作连续选中高亮行时触发，一般用于处理行选中等批量操作，模拟操作系统区域选择行为。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface ActiveRowActionContext<T> { action: ActiveRowActionType, activeRowList: Array<{ row: T, rowIndex: number }> }`    `type ActiveRowActionType ='shift-area-selection' \| 'space-one-selection' \| 'clear' \| 'select-all'` |
| cell-click | `(context: BaseTableCellEventContext<T>)` | 单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface BaseTableCellEventContext<T> { row: T; col: BaseTableCol; rowIndex: number; colIndex: number; e: MouseEvent }` |
| column-resize-change | `(context: { columnsWidth: { [colKey: string]: number }; })` | 列调整大小之后触发。`context.columnsWidth` 表示操作后各个列的宽度； |
| page-change | `(pageInfo: PageInfo, newDataSource: Array<T>)` | 分页发生变化时触发。参数 newDataSource 表示分页后的数据。本地数据进行分页时，newDataSource 和源数据 data 会不一样。泛型 T 指表格数据类型 |
| row-click | `(context: RowEventContext<T>)` | 行点击时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface RowEventContext<T> { row: T; index: number; e: MouseEvent \| KeyboardEvent }` |
| row-dblclick | `(context: RowEventContext<T>)` | 行双击时触发，泛型 T 指表格数据类型 |
| row-mousedown | `(context: RowEventContext<T>)` | 鼠标在表格行按下时触发，泛型 T 指表格数据类型 |
| row-mouseenter | `(context: RowEventContext<T>)` | 鼠标在表格行进入时触发，泛型 T 指表格数据类型 |
| row-mouseleave | `(context: RowEventContext<T>)` | 鼠标在表格行离开时触发，泛型 T 指表格数据类型 |
| row-mouseover | `(context: RowEventContext<T>)` | 鼠标悬浮到行时触发，泛型 T 指表格数据类型 |
| row-mouseup | `(context: RowEventContext<T>)` | 鼠标在表格行按下又弹起时触发，泛型 T 指表格数据类型 |
| scroll | `(params: { e: WheelEvent })` | 表格内容滚动时触发 |
| scroll-x | `(params: { e: WheelEvent })` | 已废弃。表格内容横向滚动时触发。请更为使用 `onScroll` 事件 |
| scroll-y | `(params: { e: WheelEvent })` | 已废弃。表格内容纵向滚动时触发。当内容超出高度(height)或最大高度(max-height)时，会出现纵向滚动条。请更为使用 `onScroll` 事件 |

### BaseTableInstanceFunctions 组件实例方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| refreshTable | - | - | 必需。全部重新渲染表格 |
| scrollColumnIntoView | `(colKey: string)` | - | 必需。横向滚动到指定列，呈现在可视范围内 |
| scrollToElement | `(params: ComponentScrollToElementParams)` | - | 纵向滚动到指定行。示例：`scrollToElement({ index: 100, top: 80, time: 200, behavior: 'smooth' })`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) |

### BaseTableCol

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| align | String | left | 列横向对齐方式。可选项：left/right/center | N |
| attrs | Object / Function | - | 透传 HTML 属性到列元素。TS 类型：`BaseTableColumnAttributes<T>` `type BaseTableColumnAttributes<T> = { [key: string]: any } \| ((context: CellData<T>) => { [key: string]: any })`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| cell | String / Function | - | 自定义单元格渲染。默认使用 `colKey` 的值作为自定义当前列的插槽名称。  如果 `cell` 值类型为 Function 表示以函数形式渲染单元格。值类型为 string 表示使用插槽渲染，插槽名称为 cell 的值。优先级高于 `render`。泛型 T 指表格数据类型。TS 类型：`string \| TNode<BaseTableCellParams<T>>` `interface BaseTableCellParams<T> { row: T; rowIndex: number; col: BaseTableCol<T>; colIndex: number }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| children | Array | - | 用于多级表头，泛型 T 指表格数据类型。TS 类型：`Array<BaseTableCol<T>>` | N |
| className | String / Object / Array / Function | - | 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型。TS 类型：`TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| colKey | String | - | 渲染列所需字段，值为 `serial-number` 表示当前列为「序号」列 | N |
| colspan | Number | - | 单行表头合并列。多行表头请参考「多级表头」文档示例 | N |
| ellipsis | Boolean / Object / Slot / Function | false | 单元格和表头内容超出时，是否显示省略号。如果仅希望单元格超出省略，可设置 `ellipsisTitle = false`。   值为 `true`，则超出省略浮层默认显示单元格内容；  值类型为 `Function` 则自定义超出省略浮中层显示的内容；  值类型为 `Object`，则自动透传属性到 Tooltip 组件，可用于调整浮层背景色和方向等特性。   同时透传 Tooltip 属性和自定义浮层内容，请使用 `{ props: { theme: 'light' }, content: () => 'something' }`。   请注意单元格超出省略的两个基本点：1. 内容元素是内联元素或样式（自定义单元格内容时需特别注意）；2. 内容超出父元素。TS 类型：`boolean \| TNode<BaseTableCellParams<T>> \| TooltipProps \| { props: TooltipProps; content: TNode<BaseTableCellParams<T>> }`，[Tooltip API Documents](https://tdesign.tencent.com/vue/components/tooltip?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| ellipsisTitle | Boolean / Object / Slot / Function | undefined | 表头内容超出时，是否显示省略号。优先级高于 `ellipsis`。  值为 `true`，则超出省略的浮层默认显示表头全部内容；  值类型为 `Function` 用于自定义超出省略浮层显示的表头内容；  值类型为 `Object`，则自动透传属性到 Tooltip 组件，则自动透传属性到 Tooltip 组件，可用于调整浮层背景色和方向等特性。   同时透传 Tooltip 属性和自定义浮层内容，请使用 `{ props: { theme: 'light' }, content: () => 'something' }`。TS 类型：`boolean \| TNode<BaseTableColParams<T>> \| TooltipProps \| { props: TooltipProps; content: TNode<BaseTableColParams<T>> }` `interface BaseTableColParams<T> { col: BaseTableCol<T>; colIndex: number }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| fixed | String | left | 固定列显示位置。可选项：left/right | N |
| foot | String / Function | - | 自定义表尾表尾。值类型为 Function 表示以函数形式渲染表尾内容。值类型为 string 表示使用插槽渲染，插槽名称为 `foot` 值。TS 类型：`string \| TNode<{ col: BaseTableCol; colIndex: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| minWidth | String / Number | - | 透传 CSS 属性 `min-width` 到 `<col>` 元素。⚠️ 仅少部分浏览器支持，如：使用 [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview) 渲染的 Chrome 浏览器支持 `minWidth` | N |
| render | Function | - | 自定义表头或单元格，泛型 T 指表格数据类型。TS 类型：`TNode<BaseTableRenderParams<T>>` `interface BaseTableRenderParams<T> extends BaseTableCellParams<T> { type: RenderType }` `type RenderType = 'cell' \| 'title'`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| resizable | Boolean | true | 是否允许调整当前列列宽，一般用于设置为 `false` 禁止调整某一列列宽。如果是允许列宽调整，需要先设置 `BaseTable.resizable` 为 `true` 打开所有列宽调整 | N |
| resize | Object | - | 限制拖拽调整的最小宽度和最大宽度。`resize.minWidth` 默认为 `80`，`resize.maxWidth` 默认为 `600`。TS 类型：`TableColumnResizeConfig` `interface TableColumnResizeConfig { minWidth: number; maxWidth: number }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| stopPropagation | Boolean | - | 是否阻止当列单元格点击事件冒泡 | N |
| thClassName | String / Object / Array / Function | - | 列表头类名，值类型是函数时使用返回值作为列类名。泛型 T 指表格数据类型。TS 类型：`TableColumnClassName<T> \| TableColumnClassName<T>[]`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| title | String / Function | - | 自定义表头渲染。值类型为 Function 表示以函数形式渲染表头。值类型为 string 表示使用插槽渲染，插槽名称为 title 的值。优先级高于 render。TS 类型：`string \| TNode<{ col: BaseTableCol; colIndex: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| width | String / Number | - | 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果 | N |

### PrimaryTable Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| asyncLoading | String / Slot / Function | - | 异步加载状态。值为 `loading` 显示默认文字 “正在加载中，请稍后”，值为 `load-more` 显示“点击加载更多”，值为其他，表示完全自定义异步加载区域内容。TS 类型：`'loading' \| 'load-more' \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| columnController | Object | - | 自定义显示列控制器，值为空不会显示。具体属性请看下方 `TableColumnController` 文档。TS 类型：`TableColumnController` | N |
| columnControllerVisible | Boolean | undefined | 是否显示列配置弹框控制器，只要该属性值不为 `undefined`，弹框的显示/隐藏完全由该属性控制。支持语法糖 `.sync` | N |
| columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<PrimaryTableCol<T>>` | N |
| displayColumns | Array | - | 列配置功能中，当前显示的列。支持语法糖 `.sync`。TS 类型：`CheckboxGroupValue` | N |
| defaultDisplayColumns | Array | - | 列配置功能中，当前显示的列。非受控属性。TS 类型：`CheckboxGroupValue` | N |
| dragSort | String | - | 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用。可选项：row/row-handler/col/row-handler-col/drag-col | N |
| dragSortOptions | Object | - | 拖拽排序扩展参数，具体参数见 [Sortable](https://github.com/SortableJS/Sortable)。TS 类型：`SortableOptions` | N |
| editableCellState | Function | - | 单元格是否允许编辑。返回值为 `true` 则表示可编辑；返回值为 `false` 则表示不可编辑，只读状态。TS 类型：`EditableCellType<T>` `type EditableCellType<T> = (params: PrimaryTableCellParams<T>) => boolean`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| editableRowKeys | Array | - | 处于编辑状态的行。TS 类型：`Array<string \| number>` | N |
| expandIcon | Boolean / Slot / Function | true | 用于控制是否显示「展开图标列」，值为 `false` 则不会显示。可以精确到某一行是否显示，还可以自定义展开图标内容。`expandedRow` 存在时，该参数有效。支持全局配置 `GlobalConfigProvider`。TS 类型：`boolean \| TNode<ExpandArrowRenderParams<T>>` `interface ExpandArrowRenderParams<T> { row: T; index: number }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| expandOnRowClick | Boolean | - | 是否允许点击行展开 | N |
| expandedRow | String / Slot / Function | - | 展开行内容，泛型 T 指表格数据类型。TS 类型：`TNode<TableExpandedRowParams<T>>` `interface TableExpandedRowParams<T> { row: T; index: number; columns: PrimaryTableCol<T>[] \| BaseTableCol<T>[] }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| expandedRowKeys | Array | [] | 展开行。支持语法糖 `.sync`。TS 类型：`Array<string \| number>` | N |
| defaultExpandedRowKeys | Array | [] | 展开行。非受控属性。TS 类型：`Array<string \| number>` | N |
| filterIcon | Slot / Function | - | 自定义过滤图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode<{ col: PrimaryTableCol<T>; colIndex: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| filterRow | String / Slot / Function | - | 自定义过滤状态行及清空筛选等。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| filterValue | Object | - | 过滤数据的值。支持语法糖 `.sync`。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| defaultFilterValue | Object | - | 过滤数据的值。非受控属性。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| hideSortTips | Boolean | - | 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false` | N |
| indeterminateSelectedRowKeys | Array | - | 半选状态行。选中行请更为使用 `selectedRowKeys` 控制。TS 类型：`Array<string \| number>` | N |
| multipleSort | Boolean | false | 是否支持多列排序 | N |
| reserveSelectedRowOnPaginate | Boolean | true | 行选中功能，是否在分页时保留上一页选中结果不清空。分页场景下，会全选所有页数据，保留跨分页数据。值为 `false` 则表示全部选中操作停留在当前页，不跨分页。 | N |
| rowSelectionAllowUncheck | Boolean | - | 行选中单选场景，是否允许取消选中 | N |
| rowSelectionType | String | - | 行选中类型，单选或多选。效果和 `columns` 中配置的 `{ colKey: 'row-select', type: 'single' }` 一样。可选项：single/multiple | N |
| selectOnRowClick | Boolean | - | 是否在点击整行时选中 | N |
| selectedRowKeys | Array | [] | 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。支持语法糖 `.sync`。TS 类型：`Array<string \| number>` | N |
| defaultSelectedRowKeys | Array | [] | 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。非受控属性。TS 类型：`Array<string \| number>` | N |
| showSortColumnBgColor | Boolean | false | 当前排序列是否显示背景色 | N |
| sort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。支持语法糖 `.sync`。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| defaultSort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。非受控属性。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| sortIcon | Slot / Function | - | 自定义排序图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| sortOnRowDraggable | Boolean | false | 已废弃。允许表格行拖拽时排序。请更为使用 `dragSort=\"row\"` | N |
| `Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` | - | - | 继承 `Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` 中的全部属性 | N |
| onAsyncLoadingClick | Function |  | TS 类型：`(context: { status: 'loading' \| 'load-more' }) => void`  异步加载区域被点击时触发 | N |
| onCellClick | Function |  | TS 类型：`(context: PrimaryTableCellEventContext<T>) => void`  单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }` | N |
| onChange | Function |  | TS 类型：`(data: TableChangeData, context: TableChangeContext<T>) => void`  分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`    `interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`    `type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'` | N |
| onColumnChange | Function |  | TS 类型：`(context: PrimaryTableColumnChange<T>) => void`  确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: Event }` | N |
| onColumnControllerVisibleChange | Function |  | TS 类型：`(visible: boolean, context: { trigger: 'cancel' \| 'confirm' }) => void`  列配置弹窗显示或隐藏变化时触发 | N |
| onDataChange | Function |  | TS 类型：`(data: Array<T>, context: TableDataChangeContext) => void`  本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableDataChangeContext { trigger: 'sort' }` | N |
| onDisplayColumnsChange | Function |  | TS 类型：`(value: CheckboxGroupValue) => void`  确认列配置时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `import { CheckboxGroupValue } from '@Checkbox'` | N |
| onDragSort | Function |  | TS 类型：`(context: DragSortContext<T>) => void`  拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`    `import { SortableEvent, SortableOptions } from 'sortablejs'` | N |
| onExpandChange | Function |  | TS 类型：`(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>) => void`  展开行发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }` | N |
| onFilterChange | Function |  | TS 类型：`(filterValue: FilterValue, context: TableFilterChangeContext<T>) => void`  过滤参数发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableFilterChangeContext<T> { col?: PrimaryTableCol<T>; trigger: 'filter-change' \| 'confirm' \| 'reset' \| 'clear' }` | N |
| onRowEdit | Function |  | TS 类型：`(context: PrimaryTableRowEditContext<T>) => void`  行编辑时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T }` | N |
| onRowValidate | Function |  | TS 类型：`(context: PrimaryTableRowValidateContext<T>) => void`  行编辑校验完成后触发，即组件实例方法 `validateRowData` 执行结束后触发。`result` 表示校验结果，`trigger=self` 表示编辑组件内部触发的校验，`trigger='parent'` 表示表格父组件触发的校验。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger }`    `type TableValidateTrigger = 'self' \| 'parent'`    `export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any }` | N |
| onSelectChange | Function |  | TS 类型：`(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>) => void`  选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }` | N |
| onSortChange | Function |  | TS 类型：`(sort: TableSort, options: SortOptions<T>) => void`  排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }` | N |
| onValidate | Function |  | TS 类型：`(context: PrimaryTableValidateContext) => void`  可编辑行表格，全部数据校验完成后触发。即组件实例方法 `validateTableData` 执行结束后触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface PrimaryTableValidateContext { result: TableErrorListMap }`    `type TableErrorListMap = { [key: string]: AllValidateResult[] }` | N |

### PrimaryTable Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| async-loading-click | `(context: { status: 'loading' \| 'load-more' })` | 异步加载区域被点击时触发 |
| cell-click | `(context: PrimaryTableCellEventContext<T>)` | 单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }` |
| change | `(data: TableChangeData, context: TableChangeContext<T>)` | 分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`    `interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`    `type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'` |
| column-change | `(context: PrimaryTableColumnChange<T>)` | 确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: Event }` |
| column-controller-visible-change | `(visible: boolean, context: { trigger: 'cancel' \| 'confirm' })` | 列配置弹窗显示或隐藏变化时触发 |
| data-change | `(data: Array<T>, context: TableDataChangeContext)` | 本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableDataChangeContext { trigger: 'sort' }` |
| display-columns-change | `(value: CheckboxGroupValue)` | 确认列配置时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `import { CheckboxGroupValue } from '@Checkbox'` |
| drag-sort | `(context: DragSortContext<T>)` | 拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`    `import { SortableEvent, SortableOptions } from 'sortablejs'` |
| expand-change | `(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>)` | 展开行发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }` |
| filter-change | `(filterValue: FilterValue, context: TableFilterChangeContext<T>)` | 过滤参数发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableFilterChangeContext<T> { col?: PrimaryTableCol<T>; trigger: 'filter-change' \| 'confirm' \| 'reset' \| 'clear' }` |
| row-edit | `(context: PrimaryTableRowEditContext<T>)` | 行编辑时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T }` |
| row-validate | `(context: PrimaryTableRowValidateContext<T>)` | 行编辑校验完成后触发，即组件实例方法 `validateRowData` 执行结束后触发。`result` 表示校验结果，`trigger=self` 表示编辑组件内部触发的校验，`trigger='parent'` 表示表格父组件触发的校验。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger }`    `type TableValidateTrigger = 'self' \| 'parent'`    `export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any }` |
| select-change | `(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>)` | 选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }` |
| sort-change | `(sort: TableSort, options: SortOptions<T>)` | 排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }` |
| validate | `(context: PrimaryTableValidateContext)` | 可编辑行表格，全部数据校验完成后触发。即组件实例方法 `validateTableData` 执行结束后触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface PrimaryTableValidateContext { result: TableErrorListMap }`    `type TableErrorListMap = { [key: string]: AllValidateResult[] }` |

### PrimaryTableInstanceFunctions 组件实例方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| clearValidateData | - | - | 必需。清空所有校验结果 |
| validateRowData | `(rowValue: any)` | `Promise<{ trigger: TableValidateTrigger, result: ErrorListObjectType<T>[] }>` | 必需。校验行信息，校验完成后，会触发事件 `onRowValidate`。参数 `rowValue` 表示行唯一标识的值。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `type ErrorListObjectType<T> = PrimaryTableRowEditContext<T> & { errorList: AllValidateResult[] }` |
| validateTableData | - | `Promise<{ result: TableErrorListMap }>` | 必需。校验表格全部数据，校验完成后，会触发事件 `onValidate` |

### PrimaryTableCol

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| cell | String / Function | - | 自定义单元格渲染。值类型为 Function 表示以函数形式渲染单元格。值类型为 string 表示使用插槽渲染，插槽名称为 cell 的值。默认使用 colKey 作为插槽名称。优先级高于 render。泛型 T 指表格数据类型。TS 类型：`string \| TNode<PrimaryTableCellParams<T>>` `interface PrimaryTableCellParams<T> { row: T; rowIndex: number; col: PrimaryTableCol<T>; colIndex: number }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| checkProps | Object / Function | - | 透传参数，`colKey` 值为 `row-select` 时，配置有效。具体定义参考 Checkbox 组件 和 Radio 组件。泛型 T 指表格数据类型。TS 类型：`CheckProps<T>` `type CheckProps<T> = CheckboxProps \| RadioProps \| ((options: { row: T; rowIndex: number }) => CheckboxProps \| RadioProps)` `import { CheckboxProps } from '@Checkbox'`，[Radio API Documents](https://tdesign.tencent.com/vue/components/radio?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| children | Array | - | 用于多级表头，泛型 T 指表格数据类型。TS 类型：`Array<PrimaryTableCol<T>>` | N |
| colKey | String | - | 渲染列所需字段，必须唯一。值为 `row-select` 表示当前列为行选中操作列。值为 `drag` 表示当前列为拖拽排序操作列。值为 `serial-number` 表示当前列为「序号」列 | N |
| disabled | Function | - | 是否禁用行选中，`colKey` 值为 `row-select` 时，配置有效。TS 类型：`(options: {row: T; rowIndex: number }) => boolean` | N |
| edit | Object | - | 可编辑单元格配置项，具体属性参考文档 `TableEditableCellConfig` 描述。TS 类型：`TableEditableCellConfig<T>` | N |
| filter | Object | - | 过滤规则，支持多选(multiple)、单选(single)、输入框(input) 等三种形式。想要自定义过滤组件，可通过 `filter.component` 实现，自定义过滤组件需要包含参数 value 和事件 change。更多信息请查看当前页面中 `TableColumnFilter` 的详细文档。TS 类型：`TableColumnFilter` | N |
| render | Function | - | 自定义表头或单元格，泛型 T 指表格数据类型。TS 类型：`TNode<PrimaryTableRenderParams<T>>` `interface PrimaryTableRenderParams<T> extends PrimaryTableCellParams<T> { type: RenderType }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| sortType | String | all | 当前列支持排序的方式，desc 表示当前列只能进行降序排列；asc 表示当前列只能进行升序排列；all 表示当前列既可升序排列，又可以降序排列。可选项：desc/asc/all。TS 类型：`SortType` `type SortType = 'desc' \| 'asc' \| 'all'`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| sorter | Boolean / Function | false | 该列是否支持排序。值为 true 表示该列支持排序；值类型为函数，表示对本地数据 `data` 进行排序，返回值参考 [MDN Array.sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)。泛型 T 指表格数据类型。TS 类型：`boolean \| SorterFun<T>` `type SorterFun<T> = (a: T, b: T) => number`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| title | String / Function | - | 自定义表头渲染。值类型为 Function 表示以函数形式渲染表头。值类型为 string 表示使用插槽渲染，插槽名称为 title 的值。优先级高于 render。TS 类型：`string \| TNode<{ col: PrimaryTableCol; colIndex: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| type | String | single | `colKey` 值为 `row-select` 时表示行选中列，有两种模式：单选和多选。 `type=single` 表示单选，`type=multiple` 表示多选。可选项：single/multiple | N |
| `Omit<BaseTableCol, 'cell' \| 'title' \| 'render' \| 'children'>` | - | - | 继承 `Omit<BaseTableCol, 'cell' \| 'title' \| 'render' \| 'children'>` 中的全部属性 | N |

### EnhancedTable Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| beforeDragSort | Function | - | 树形结构中，拖拽排序前控制，返回值为 `true` 则继续排序；返回值为 `false` 则中止排序还原数据。TS 类型：`(context: DragSortContext<T>) => boolean` | N |
| expandedTreeNodes | Array | [] | 展开的树形节点。非必须。在需要自由控制展开的树形节点时使用。其他场景无需设置，表格组件有内置展开逻辑。支持语法糖 `.sync`。TS 类型：`Array<string \| number>` | N |
| defaultExpandedTreeNodes | Array | [] | 展开的树形节点。非必须。在需要自由控制展开的树形节点时使用。其他场景无需设置，表格组件有内置展开逻辑。非受控属性。TS 类型：`Array<string \| number>` | N |
| tree | Object | - | 树形结构相关配置。具体属性文档查看 `TableTreeConfig` 相关描述。TS 类型：`TableTreeConfig` | N |
| treeExpandAndFoldIcon | Function | - | 自定义树形结构展开图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode<{ type: 'expand' \| 'fold', row: T }>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| `PrimaryTableProps<T>` | - | - | 继承 `PrimaryTableProps<T>` 中的全部属性 | N |
| onAbnormalDragSort | Function |  | TS 类型：`(context: TableAbnormalDragSortContext<T>) => void`  异常拖拽排序时触发，如：树形结构中，非同层级之间的交换。`context.code` 指交换异常错误码，固定值；`context.reason` 指交换异常的原因。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableAbnormalDragSortContext<T> { code: number; reason: string }` | N |
| onExpandedTreeNodesChange | Function |  | TS 类型：`(expandedTreeNodes: Array<string \| number>, options: TableTreeNodeExpandOptions <T>) => void`  树形结构，展开的树节点发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableTreeNodeExpandOptions<T> { row: T; rowIndex: number; rowState: TableRowState<T>; type: 'fold' \| 'expand'; trigger?: 'expand-fold-icon' \| 'row-click' \| 'default-expand-all' \| 'expand-all' \| 'fold-all' }` | N |
| onTreeExpandChange | Function |  | TS 类型：`(context: TableTreeExpandChangeContext<T>) => void`  已废弃。树形结构，用户操作引起节点展开或收起时触发。请更为使用 `onExpandedTreeNodesChange`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableTreeExpandChangeContext<T> { row: T; rowIndex: number; rowState: TableRowState<T>; trigger?: 'expand-fold-icon' \| 'row-click' }` | N |

### EnhancedTable Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| abnormal-drag-sort | `(context: TableAbnormalDragSortContext<T>)` | 异常拖拽排序时触发，如：树形结构中，非同层级之间的交换。`context.code` 指交换异常错误码，固定值；`context.reason` 指交换异常的原因。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableAbnormalDragSortContext<T> { code: number; reason: string }` |
| expanded-tree-nodes-change | `(expandedTreeNodes: Array<string \| number>, options: TableTreeNodeExpandOptions <T>)` | 树形结构，展开的树节点发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableTreeNodeExpandOptions<T> { row: T; rowIndex: number; rowState: TableRowState<T>; type: 'fold' \| 'expand'; trigger?: 'expand-fold-icon' \| 'row-click' \| 'default-expand-all' \| 'expand-all' \| 'fold-all' }` |
| tree-expand-change | `(context: TableTreeExpandChangeContext<T>)` | 已废弃。树形结构，用户操作引起节点展开或收起时触发。请更为使用 `onExpandedTreeNodesChange`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface TableTreeExpandChangeContext<T> { row: T; rowIndex: number; rowState: TableRowState<T>; trigger?: 'expand-fold-icon' \| 'row-click' }` |

### EnhancedTableInstanceFunctions 组件实例方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| appendTo | `(key: TableRowValue, newData: T)` | - | 必需。树形结构中，为当前节点添加子节点。如果 `key` 为空，则表示为根节点添加子节点 |
| expandAll | - | - | 必需。展开全部行 |
| foldAll | - | - | 必需。折叠全部行 |
| getData | `(key: TableRowValue)` | `TableRowState<T>` | 必需。树形结构中，用于获取行数据所有信息。泛型 `T` 表示行数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `type TableRowValue = string \| number` |
| getTreeExpandedRow | `(type: 'unique' \| 'data' \| 'all')` | - | 必需。获取展开的树形节点。`type=unique` 标识获取展开节点的行唯一标识值，`type=data` 表示获取展开节点的数据，`type=all` 表示获取行节点包含展开状态的全部数据 |
| getTreeNode | - | `T[]` | 必需。树形结构中，获取完整的树形结构 |
| insertAfter | `(key: TableRowValue, newData: T)` | - | 必需。树形结构中，在当前节点之后添加子节点 |
| insertBefore | `(key: TableRowValue, newData: T)` | - | 必需。树形结构中，在当前节点之前添加子节点 |
| remove | `(key: TableRowValue)` | - | 必需。树形结构中，移除指定节点 |
| removeChildren | `(key: TableRowValue)` | - | 必需。树形结构中，移除指定节点的所有子节点 |
| resetData | `(newData: T[])` | - | 必需。重置或更新整个表格数据 |
| setData | `(key: TableRowValue, newRowData: T)` | - | 必需。树形结构中，用于更新行数据。泛型 `T` 表示行数据类型 |
| swapData | `(params: SwapParams<T>)` | - | 必需。树形结构中，交换两个节点的顺序。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。  `interface SwapParams<T> { current: T; target: T; currentIndex: number; targetIndex: number }` |
| toggleExpandData | `(p: { row: T, rowIndex: number})` | - | 必需。展开或收起树形行 |

### TableRowState

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| disabled | Boolean | false | 表格行是否禁用选中 | N |
| expandChildrenLength | Number | - | 当前节点展开的子节点数量 | N |
| expanded | Boolean | false | 必需。表格行是否展开 | Y |
| id | String / Number | - | 必需。唯一标识 | Y |
| level | Number | - | 当前节点层级。TS 类型：`number` | N |
| parent | - | - | 父节点。TS 类型：`TableRowState<T>` | N |
| path | Array | - | 当前节点路径。TS 类型：`TableRowState<T>[]` | N |
| row | - | - | 必需。原始表格行数据。TS 类型：`T` | Y |
| rowIndex | Number | - | 必需。表格行下标，值为 `-1` 标识当前行未展开显示 | Y |

### TableColumnFilter

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| attrs | Object | - | 用于透传筛选器属性到自定义组件 `component`，HTML 原生属性。TS 类型：`HTMLElementAttributes`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| classNames | String | - | 透传类名到自定义组件 `component`。TS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| component | Slot / Function | - | 用于自定义筛选器，只要保证自定义筛选器包含 value 属性 和 change 事件，即可像内置筛选器一样正常使用。示例：`component: DatePicker`。TS 类型：`ComponentType`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| confirmEvents | Array | - | 哪些事件触发后会进行过滤搜索（确认按钮无需配置，会默认触发搜索）。输入框组件示例：`confirmEvents: ['onEnter']`。TS 类型：`string[]` | N |
| label | String / Function | - | 过滤项标题文本，显示在“过滤结果行”中的列标题描述。一般用于表头标题和过滤文本行中的列标题不一样的场景。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| list | Array | - | 用于配置当前筛选器可选值有哪些，仅当 `filter.type` 等于 `single` 或 `multiple` 时有效。TS 类型：`Array<OptionData>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| listFilterConfig | Object | false | 选项过滤功能配置，`listFilterConfig=true` 表示使用默认过滤功能和组件风格，`listFilterConfig.filterMethod` 用于自定义过滤方法，其中 `props/className/style` 分别表示透传属性、类名、样式到输入框组件。TS 类型：`boolean \| ListFilterConfig` `interface ListFilterConfig { filterMethod?: (item: OptionData, keyword: string) => boolean; props?: InputProps; className?: string; style?: Styles; slots?: { [key: string]: () => JSX.Element }}`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| popupProps | Object | - | 透传 Popup 组件全部属性到筛选器浮层。TS 类型：`PopupProps`，[Popup API Documents](https://tdesign.tencent.com/vue/components/popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| props | Object | - | 用于透传筛选器属性到自定义组件 `component`，可以对筛选器进行任何原组件支持的属性配置。TS 类型：`FilterProps` `type FilterProps = RadioProps \| CheckboxProps \| InputProps \| { [key: string]: any }`，[Input API Documents](https://tdesign.tencent.com/vue/components/input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| resetValue | - | - | 重置时设置的值，示例：'' 或 []。TS 类型：`any` | N |
| showConfirmAndReset | Boolean | false | 是否显示重置和确认。值为真，过滤事件（filter-change）会在确定时触发；值为假，则数据变化时会立即触发过滤事件 | N |
| style | Object | - | 透传内联样式到自定义组件 `component`。TS 类型：`Styles`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| type | String | - | 用于设置筛选器类型：单选按钮筛选器、复选框筛选器、输入框筛选器。更多复杂组件，请更为使用 `component` 自定义任意组件。TS 类型：`FilterType` `type FilterType = 'input' \| 'single' \| 'multiple'`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |

### TableColumnController

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| buttonProps | Object | - | 自定义列配置按钮，包括 Button 组件的全部属性。比如：按钮颜色和文本。TS 类型：`ButtonProps`，[Button API Documents](https://tdesign.tencent.com/vue/components/button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| checkboxProps | Object | - | 透传复选框组件全部特性。TS 类型：`CheckboxGroupProps`，[Checkbox API Documents](https://tdesign.tencent.com/vue/components/checkbox?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| columnControllerBottomContent | Slot / Function | - | 列配置控制器底部内容。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| columnControllerTopContent | Slot / Function | - | 列配置控制器顶部内容。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| dialogProps | Object | - | 透传弹框组件全部特性，如：防止滚动穿透。TS 类型：`DialogProps`，[Dialog API Documents](https://tdesign.tencent.com/vue/components/dialog?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| displayType | String | auto-width | 指列配置弹框中，各列的字段平铺方式：`fixed-width` 表示固定宽度，每行固定数量，横向和纵向均对齐，`auto-width` 表示宽度随列标题数量自由显示，横向铺满，纵向不要求对齐。可选项：fixed-width/auto-width | N |
| fields | Array | - | 用于设置允许用户对哪些列进行显示或隐藏的控制，默认为全部字段。TS 类型：`string[]` | N |
| groupColumns | Array | - | 列分组功能配置，当列数量过多的时候，为了方便阅读，一般需要进行列分组设置。TS 类型：`TableColumnGroup[]` `interface TableColumnGroup { label: string; value?: string \| number; columns: string[] }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| hideTriggerButton | Boolean | false | 是否隐藏表格组件内置的“列配置”按钮 | N |
| placement | String | top-right | 列配置按钮基于表格的放置位置：左上角、右上角、左下角、右下角等。可选项：top-left/top-right/bottom-left/bottom-right | N |

### TableEditableCellConfig

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| abortEditOnEvent | Array | - | 除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态。示例：`abortEditOnEvent: ['onChange']`。TS 类型：`string[]` | N |
| component | - | - | 组件定义，如：`Input` `Select`。对于完全自定义的组件（非组件库内的组件），组件需要支持 `value` 和 `onChange` ；如果还需要支持校验规则，则组件还需实现 `tips` 和 `status` 两个 API，实现规则可参考 `Input` 组件。TS 类型：`ComponentType`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| defaultEditable | Boolean | false | 单元格默认状态是否为编辑态 | N |
| keepEditMode | Boolean | false | 设置当前列的单元格始终保持为编辑态 | N |
| on | Function | - | 透传给编辑组件的事件，参数有({ row, rowIndex, col, colIndex, editedRow, updateEditedCellValue })。可以使用参数 `updateEditedCellValue` 更新当前单元格（或当前行任意编辑状态单元格）的值。  更新当前单元格数据示例：`updateEditedCellValue(value)`；  更新当前行编辑态数据示例：`updateEditedCellValue({ isUpdateCurrentRow: true, column_key: 'test' })`；  更新其他行编辑态数据示例：`updateEditedCellValue({ rowValue: '124', column_key: 'test' })`。TS 类型：`(context: TableEditableCellPropsParams<T>) => { [eventName: string]: Function }` | N |
| onEdited | Function | - | 编辑完成后，退出编辑模式时触发。TS 类型：`(context: PrimaryTableOnEditedContext<T>) => void` `type PrimaryTableOnEditedContext<T> = PrimaryTableCellParams<T> & { trigger: string; newRowData: T; }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| props | Object / Function | - | 透传给组件 `edit.component` 的属性，可以使用 `updateEditedCellValue` 更新当前行任意编辑状态单元格的值。TS 类型：`TableEditableCellProps<T>` `type TableEditableCellProps<T> = TablePlainObject \| ((params: TableEditableCellPropsParams<T>) => TablePlainObject)` `interface TableEditableCellPropsParams<T> extends PrimaryTableCellParams<T> { editedRow: T; updateEditedCellValue: (val: any \| { rowValue?: string \| number; isUpdateCurrentRow?: boolean; [key: string]: any }) => void }` `interface TablePlainObject{ [key: string]: any }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| rules | Array | - | 校验规则。TS 类型：`TableEditableCellRules<T>` `type TableEditableCellRules<T> = FormRule[] \| ((params: PrimaryTableCellParams<T>) => FormRule[])`，[Form API Documents](https://tdesign.tencent.com/vue/components/form?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N |
| showEditIcon | Boolean | true | 是否显示编辑图标 | N |
| validateTrigger | String | 'exit' | 触发校验的时机，有 2 种：退出编辑时和数据变化时。TS 类型：`'exit' \| 'change'` | N |

### TableTreeConfig

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| checkStrictly | Boolean | false | 表示树形结构的行选中（多选），父子行选中是否独立 | N |
| childrenKey | String | children | 树形结构子节点字段，示例：`childrenKey='list'`。一般应用在数据 `data` 的子节点字段不是 `children` 的场景 | N |
| defaultExpandAll | Boolean | false | 是否默认展开全部，仅默认情况有效。如果希望自由控制树形结构的展开或收起，可使用实例方法 `expandAll` 和 `foldAll` | N |
| expandTreeNodeOnClick | Boolean | false | 是否在点击行时展开树形结构节点 | N |
| indent | Number | 24 | 树结点缩进距离，单位：px | N |
| treeNodeColumnIndex | Number | 0 | 树结点在第几列渲染，默认为第一列 | N |

### TScroll

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| bufferSize | Number | 20 | 表示除可视区域外，额外渲染的行数，避免快速滚动过程中，新出现的内容来不及渲染从而出现空白 | N |
| isFixedRowHeight | Boolean | false | 表示每行内容是否同一个固定高度，仅在 `scroll.type` 为 `virtual` 时有效，该属性设置为 `true` 时，可用于简化虚拟滚动内部计算逻辑，提升性能，此时则需要明确指定 `scroll.rowHeight` 属性的值 | N |
| rowHeight | Number | - | 行高，不会给`<tr>`元素添加样式高度，仅作为滚动时的行高参考。一般情况不需要设置该属性。如果设置，可尽量将该属性设置为每行平均高度，从而使得滚动过程更加平滑 | N |
| threshold | Number | 100 | 启动虚拟滚动的阈值。为保证组件收益最大化，当数据量小于阈值 `scroll.threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动 | N |
| type | String | - | 必需。滚动加载类型，有两种：懒加载和虚拟滚动。  值为 `lazy` ，表示滚动时会进行懒加载，非可视区域内的内容将不会默认渲染，直到该内容可见时，才会进行渲染，并且已渲染的内容滚动到不可见时，不会被销毁；  值为`virtual`时，表示会进行虚拟滚动，无论滚动条滚动到哪个位置，同一时刻，仅渲染该可视区域内的内容，当需要展示的数据量较大时，建议开启该特性。可选项：lazy/virtual | Y |

### 何时使用

需展示的信息内容较多，为方便用户浏览和获取批量数据时；

需要对数据进行排序、搜索、筛选、分页等操作时；

需要对数据进行归纳、分类，便于用户快速了解其中的差异与变化、关联和区别时。

### 组件搭配使用

##### 与筛选搭配使用，按一定的数据维度进行筛选。

![](https://tdesign.gtimg.com/site/design/guide/table/table-1@2x.png)

---

##### 与文字提示搭配使用，鼠标 hover 时呈现说明内容。

![](https://tdesign.gtimg.com/site/design/guide/table/table-2@2x.png)

### 组件常见用法

##### 当单元格显示数据较多时，可最多显示 3 行，无法显示的内容隐藏，当鼠标 hover 时显示隐藏内容。

![](https://tdesign.gtimg.com/site/design/guide/table/table-3@2x.png)

![](https://tdesign.gtimg.com/site/design/guide/table/table-4@2x.png)

---

##### 操作列中，空间不足情况下可展示 2 个高频操作，其余做隐藏处理。也可以选用图标按钮样式，节省一定空间。

![](https://tdesign.gtimg.com/site/design/guide/table/table-5@2x.png)

![](https://tdesign.gtimg.com/site/design/guide/table/table-6@2x.png)
