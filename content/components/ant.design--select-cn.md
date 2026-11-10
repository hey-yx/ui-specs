---
title: "Ant Design · Select 选择器"
source: https://ant.design/components/select-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-select
publisher: "Ant Design"
---

# Ant Design · Select 选择器

> 来源：[https://ant.design/components/select-cn](https://ant.design/components/select-cn)

---

# Select

选择器

下拉选择器。

使用 import { Select } from 'antd';
反馈

[components/select](https://github.com/ant-design/ant-design/blob/master/components/select)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20Select%20OR%20is%3Aissue%20in%3Atitle%20%E9%80%89%E6%8B%A9%E5%99%A8))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/select/index.zh-CN.md)[LLMs.md](https://ant.design/components/select-cn.md)

## 何时使用

*   弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
*   当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](https://ant.design/components/radio-cn) 是更好的选择。
*   如果你在寻找一个可输可选的输入框，那你可能需要 [AutoComplete](https://ant.design/components/auto-complete-cn)。

## 代码演示

Lucy

Lucy

Lucy

Lucy

[基本使用](https://ant.design/components/select-cn#select-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/basic.tsx)

基本使用。

[](https://ant.design/~demos/select-demo-basic?routeId=components%2Fselect%2Findex.en-US)

Select a person

[自定义搜索](https://ant.design/components/select-cn#select-demo-search-filter-option)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/search-filter-option.tsx)

使用 `filterOption` 自定义搜索。

[](https://ant.design/~demos/select-demo-search-filter-option?routeId=components%2Fselect%2Findex.en-US)

a10

c12

a10

c12

[多选](https://ant.design/components/select-cn#select-demo-multiple)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/multiple.tsx)

多选，从已有条目中选择。

[](https://ant.design/~demos/select-demo-multiple?routeId=components%2Fselect%2Findex.en-US)

Happy

[自定义下拉选项](https://ant.design/components/select-cn#select-demo-option-render)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/option-render.tsx)

使用 `optionRender` 自定义渲染下拉选项。

[](https://ant.design/~demos/select-demo-option-render?routeId=components%2Fselect%2Findex.en-US)

Tags Mode

[标签](https://ant.design/components/select-cn#select-demo-tags)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/tags.tsx)

标签形式的多选框，用户亦可自由输入。

[](https://ant.design/~demos/select-demo-tags?routeId=components%2Fselect%2Findex.en-US)

Zhejiang

Hangzhou

[联动](https://ant.design/components/select-cn#select-demo-coordinate)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/coordinate.tsx)

省市联动是典型的例子，联动场景我们更推荐使用 [Cascader](https://ant.design/components/cascader-cn/) 组件。

[](https://ant.design/~demos/select-demo-coordinate?routeId=components%2Fselect%2Findex.en-US)

[自动分词](https://ant.design/components/select-cn#select-demo-automatic-tokenization)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/automatic-tokenization.tsx)

试下复制 `露西,杰克` 并粘贴到输入框里。只在 tags 和 multiple 模式下可用。

[](https://ant.design/~demos/select-demo-automatic-tokenization?routeId=components%2Fselect%2Findex.en-US)

Select users

[搜索用户](https://ant.design/components/select-cn#select-demo-select-users)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/select-users.tsx)

一个带有远程搜索，防抖控制，请求时序控制，加载状态的多选示例。

[](https://ant.design/~demos/select-demo-select-users?routeId=components%2Fselect%2Findex.en-US)

custom dropdown render

[扩展菜单](https://ant.design/components/select-cn#select-demo-custom-dropdown-menu)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/custom-dropdown-menu.tsx)

使用 `popupRender` 对下拉菜单进行自由扩展。如果希望点击自定义内容后关闭浮层，你需要使用受控模式自行控制（[codesandbox](https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js)）。

[](https://ant.design/~demos/select-demo-custom-dropdown-menu?routeId=components%2Fselect%2Findex.en-US)

Outlined

Lucy

Filled

Lucy

Borderless

Lucy

Underlined

Lucy

[形态变体](https://ant.design/components/select-cn#select-demo-variant)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/variant.tsx)

Select 形态变体，可选 `outlined``filled``borderless``underlined` 四种形态。

[](https://ant.design/~demos/select-demo-variant?routeId=components%2Fselect%2Findex.en-US)

5.13.0

No option match

[自定义选中 label](https://ant.design/components/select-cn#select-demo-custom-label-render)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/custom-label-render.tsx)

允许自定义渲染当前选中的 label, 可用于 value 回填但对应选项缺失而不想直接渲染 value 的场景。

[](https://ant.design/~demos/select-demo-custom-label-render?routeId=components%2Fselect%2Findex.en-US)

#### 100000 Items

a10

c12

[大数据](https://ant.design/components/select-cn#select-demo-big-data)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/big-data.tsx)

Select 默认针对大数据开启了[虚拟滚动](https://github.com/react-component/virtual-list)，因而获得了更好的性能，可以通过 `virtual={false}` 关闭。

[](https://ant.design/~demos/select-demo-big-data?routeId=components%2Fselect%2Findex.en-US)

topLeft topRight bottomLeft bottomRight 

  
  

HangZhou #310000

[弹出位置](https://ant.design/components/select-cn#select-demo-placement)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/placement.tsx)

可以通过 `placement` 手动指定弹出的位置。

[](https://ant.design/~demos/select-demo-placement?routeId=components%2Fselect%2Findex.en-US)

Object

Function

[自定义语义结构的样式和类](https://ant.design/components/select-cn#select-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Select 的[语义化结构](https://ant.design/components/select-cn#semantic-dom)样式。

[](https://ant.design/~demos/select-demo-style-class?routeId=components%2Fselect%2Findex.en-US)

6.0.0

Select a person

[带搜索框](https://ant.design/components/select-cn#select-demo-search)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/search.tsx)

展开后可对选项进行搜索。

[](https://ant.design/~demos/select-demo-search?routeId=components%2Fselect%2Findex.en-US)

Select an option

[多字段搜索](https://ant.design/components/select-cn#select-demo-search-multi-field)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/search-multi-field.tsx)

使用 `optionFilterProp` 多字段搜索。

[](https://ant.design/~demos/select-demo-search-multi-field?routeId=components%2Fselect%2Findex.en-US)

Large Medium Small 

  
  

a1

a10

c12

a10

c12

[三种大小](https://ant.design/components/select-cn#select-demo-size)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/size.tsx)

三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

[](https://ant.design/~demos/select-demo-size?routeId=components%2Fselect%2Findex.en-US)

Search to Select

[带排序的搜索](https://ant.design/components/select-cn#select-demo-search-sort)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/search-sort.tsx)

在搜索模式下对过滤结果项进行排序。

[](https://ant.design/~demos/select-demo-search-sort?routeId=components%2Fselect%2Findex.en-US)

lucy

[分组](https://ant.design/components/select-cn#select-demo-optgroup)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/optgroup.tsx)

用 `OptGroup` 进行选项分组。

[](https://ant.design/~demos/select-demo-optgroup?routeId=components%2Fselect%2Findex.en-US)

Lucy (101)

[获得选项的文本](https://ant.design/components/select-cn#select-demo-label-in-value)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/label-in-value.tsx)

默认情况下 `onChange` 里只能拿到 `value`，如果需要拿到选中的节点文本 `label`，可以使用 `labelInValue` 属性。

选中项的 `label` 会被包装到 `value` 中传递给 `onChange` 等函数，此时 `value` 是一个对象。

[](https://ant.design/~demos/select-demo-label-in-value?routeId=components%2Fselect%2Findex.en-US)

Try paste: "San Francisco, CA", New York

[自定义分词](https://ant.design/components/select-cn#select-demo-custom-tokenization)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/custom-tokenization.tsx)

自定义分词函数，按业务规则拆分输入内容。

[](https://ant.design/~demos/select-demo-custom-tokenization?routeId=components%2Fselect%2Findex.en-US)

6.5.0

User

Lucy

Lucy

Lucy

  

User

Lucy

Lucy

Lucy

[前后缀](https://ant.design/components/select-cn#select-demo-suffix)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/suffix.tsx)

自定义前缀 `prefix` 和后缀 `suffix`。

[](https://ant.design/~demos/select-demo-suffix?routeId=components%2Fselect%2Findex.en-US)

6.7.0

Inserted are removed

[隐藏已选择选项](https://ant.design/components/select-cn#select-demo-hide-selected)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/hide-selected.tsx)

隐藏下拉列表中已选择的选项。

[](https://ant.design/~demos/select-demo-hide-selected?routeId=components%2Fselect%2Findex.en-US)

gold

cyan

[自定义选择标签](https://ant.design/components/select-cn#select-demo-custom-tag-render)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/custom-tag-render.tsx)

允许自定义选择标签的样式。

[](https://ant.design/~demos/select-demo-custom-tag-render?routeId=components%2Fselect%2Findex.en-US)

+ 4 ...

Select Item...

Hover Me

[响应式 maxTagCount](https://ant.design/components/select-cn#select-demo-responsive)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/responsive.tsx)

多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。

[](https://ant.design/~demos/select-demo-responsive?routeId=components%2Fselect%2Findex.en-US)

[自定义状态](https://ant.design/components/select-cn#select-demo-status)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/status.tsx)

使用 `status` 为 Select 添加状态，可选 `error` 或者 `warning`。

[](https://ant.design/~demos/select-demo-status?routeId=components%2Fselect%2Findex.en-US)

Ava Swift

1 / 3

[最大选中数量](https://ant.design/components/select-cn#select-demo-maxcount)[](https://github.com/ant-design/ant-design/edit/master/components/select/demo/maxCount.tsx)

你可以通过设置 `maxCount` 约束最多可选中的数量，当超出限制时会变成禁止选中状态。

[](https://ant.design/~demos/select-demo-maxcount?routeId=components%2Fselect%2Findex.en-US)

5.13.0

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

### Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | [AllowClearConfig](https://ant.design/components/select-cn#allowclearconfig) | false | - | 6.4.0 |
| ~~autoClearSearchValue~~ | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true |  | × |
| autoComplete | 输入框的 HTML `autocomplete` 属性 | string | `new-password` | - | 6.7.0 |
| ~~bordered~~ | 是否带边框，请使用 `variant` 替代 | boolean | true | - | × |
| classNames | 用于自定义 Select 组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/select-cn#semantic-dom), string> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/select-cn#semantic-dom), string> | - |  | 5.25.0 |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |  | × |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |  | × |
| defaultValue | 指定默认选中的条目 | string | string[] | number | number[] | LabeledValue | LabeledValue[] | - |  | × |
| disabled | 是否禁用 | boolean | false |  | × |
| ~~dropdownClassName~~ | 下拉菜单的 className 属性，请使用 `classNames.popup.root` 替代 | string | - | - | × |
| ~~dropdownMatchSelectWidth~~ | 下拉菜单和选择器是否同宽，请使用 `popupMatchSelectWidth` 替代 | boolean | number | true | - | × |
| ~~popupClassName~~ | 下拉菜单的 className 属性，使用 `classNames.popup.root` 替换 | string | - | 4.23.0 | × |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean | number | true | 5.5.0 | × |
| ~~dropdownRender~~ | 自定义下拉框内容，使用 `popupRender` 替换 | (originNode: ReactElement) => ReactNode | - |  | × |
| popupRender | 自定义下拉框内容 | (originNode: ReactElement) => ReactNode | - | 5.25.0 | × |
| ~~dropdownStyle~~ | 下拉菜单的 style 属性，使用 `styles.popup.root` 替换 | CSSProperties | - |  | × |
| fieldNames | 自定义节点 label、value、options、groupLabel 的字段 | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | 4.17.0（`groupLabel` 在 5.6.0 新增） | × |
| ~~filterOption~~ | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue``option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false。[示例](https://ant.design/components/select-cn#select-demo-search) | boolean | function(inputValue, option) | true |  | × |
| ~~filterSort~~ | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)里的 compareFunction | (optionA: Option, optionB: Option, info: { searchValue: string }) => number | - | `searchValue`: 5.19.0 | × |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  | × |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 { value: string, label: ReactNode } 的格式 | boolean | false |  | × |
| listHeight | 设置弹窗滚动高度 | number | 256 |  | × |
| loading | 加载中状态 | boolean | false |  | × |
| loadingIcon | 自定义的加载图标 | ReactNode | `<LoadingOutlined spin />` | 6.4.0 | 6.4.0 |
| maxCount | 指定可选中的最多 items 数量，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | number | - | 5.13.0 | × |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number | `responsive` | - | responsive: 4.10 | × |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode | function(omittedValues) | - |  | × |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |  | × |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | ReactNode | `<CheckOutlined />` |  | 6.4.0 |
| mode | 设置 Select 的模式为多选或标签 | `multiple` | `tags` | - |  | × |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `暂无数据` |  | × |
| open | 是否展开下拉菜单 | boolean | - |  | × |
| ~~optionFilterProp~~ | 已废弃，见 `showSearch.optionFilterProp` |  |  |  | × |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `children` |  | × |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }[] | - |  | × |
| optionRender | 自定义渲染下拉选项 | (option: FlattenOptionData<BaseOptionType> , info: { index: number }) => React.ReactNode | - | 5.11.0 | × |
| placeholder | 选择框默认文本 | ReactNode | - |  | × |
| placement | 选择框弹出的位置 | `bottomLeft``bottomRight``topLeft``topRight` | bottomLeft |  | × |
| prefix | 自定义前缀 | ReactNode | - | 5.22.0 | × |
| removeIcon | 自定义的多选框清除图标 | ReactNode | `<CloseOutlined />` |  | 6.4.0 |
| ~~searchValue~~ | 控制搜索文本 | string | - |  | × |
| ~~showArrow~~ | 是否显示箭头图标，请使用 `suffix={null}` 替代 | boolean | true | - | × |
| showSearch | 配置是否可搜索 | boolean | [Object](https://ant.design/components/select-cn#showsearch) | 单选为 false，多选为 true | Object: 6.0.0 | 6.4.0 |
| size | 选择框大小 | `large` | `medium` | `small` | `medium` |  | × |
| status | 设置校验状态 | 'error' | 'warning' | - | 4.19.0 | × |
| styles | 用于自定义 Select 组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/select-cn#semantic-dom), CSSProperties> | (info: { props }) => Record<[SemanticDOM](https://ant.design/components/select-cn#semantic-dom), CSSProperties> | - |  | 5.25.0 |
| suffix | 自定义的选择框后缀。以防止后缀被用于其他交互，替换的后缀默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传。 | ReactNode | (props) => ReactNode | `<DownOutlined />` | 6.7.0 | 6.7.0 |
| ~~suffixIcon~~ | 自定义的选择框后缀图标，请使用 `suffix` 替代 | ReactNode | `<DownOutlined />` |  | 6.4.0 |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) => ReactNode | - |  | × |
| labelRender | 自定义当前选中的 label 内容 render （LabelInValueType的定义见 [LabelInValueType](https://github.com/react-component/select/blob/b39c28aa2a94e7754ebc570f200ab5fd33bd31e7/src/Select.tsx#L70)） | (props: LabelInValueType) => ReactNode | - | 5.15.0 | × |
| tokenSeparators | 自动分词的分隔符或自定义分词函数，仅在 `mode="tags"` 或 `mode="multiple"` 时生效 | string[] | ((input: string) => string[]) | - | function: 6.5.0 | × |
| value | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string | string[] | number | number[] | LabeledValue | LabeledValue[] | - |  | × |
| variant | 形态变体 | `outlined` | `borderless` | `filled` | `underlined` | `outlined` | 5.13.0 | `underlined`: 5.24.0 | 5.19.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 | × |
| onActive | 键盘和鼠标交互时触发 | function(value: string | number | LabeledValue) | - |  | × |
| onBlur | 失去焦点时回调 | function | - |  | × |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value, option:Option | Array<Option>) | - |  | × |
| onClear | 清除内容时回调 | function | - | 4.6.0 | × |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | function(value: string | number | LabeledValue) | - |  | × |
| ~~onDropdownVisibleChange~~ | 展开下拉菜单的回调，使用 `onOpenChange` 替换 | (open: boolean) => void | - |  | × |
| onOpenChange | 展开下拉菜单的回调 | (open: boolean) => void | - |  | × |
| onFocus | 获得焦点时回调 | (event: FocusEvent) => void | - |  | × |
| onInputKeyDown | 按键按下时回调 | (event: KeyboardEvent) => void | - |  | × |
| onPopupScroll | 下拉列表滚动时的回调 | (event: UIEvent) => void | - |  | × |
| ~~onSearch~~ | 文本框值变化时回调 | function(value: string) | - |  | × |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value: string | number | LabeledValue, option: Option) | - |  | × |

> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 `getPopupContainer={triggerNode => triggerNode.parentElement}` 将下拉弹层渲染节点固定在触发器的父元素中。

### AllowClearConfig

支持全局配置的字段按组件配置、全局配置、默认值的顺序取值。`allowClear={true}` 继承全局配置；`disabled: false` 和 `tabIndex: 0` 可覆盖全局值。

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| clearIcon | 自定义清除图标 | ReactNode | - | - | 6.4.0 |
| disabled | `true` 时等同于 `allowClear={false}` | boolean | false | 6.7.0 | 6.7.0 |
| label | 清除按钮的无障碍名称 | string | 组件的本地化文案 | 6.6.0 | 6.6.0 |
| tabIndex | 清除按钮的 Tab 键顺序。`-1` 表示不参与 Tab 键导航 | number | 0 | 6.7.0 | 6.7.0 |

### showSearch

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true |  |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue``option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false。[示例](https://ant.design/components/select-cn#select-demo-search) | boolean | function(inputValue, option) | true |  |
| filterSort | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)里的 compareFunction | (optionA: Option, optionB: Option, info: { searchValue: string }) => number | - | `searchValue`: 5.19.0 |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内嵌内容进行搜索。 若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。 当传入 `string[]` 时多个字段进行 OR 匹配搜索 | string | string[] | `value` | `string[]`: 6.1.0 |
| searchValue | 控制搜索文本 | string | - |  |
| onSearch | 文本框值变化时回调 | function(value: string) | - |  |
| searchIcon | 自定义的搜索图标 | ReactNode | `<SearchOutlined />` | 6.4.0 |

### Select Methods

| 名称 | 说明 | 版本 |
| --- | --- | --- |
| blur() | 取消焦点 |  |
| focus() | 获取焦点 |  |

### Option props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | Option 器类名 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| title | 选项上的原生 title 提示 | string | - |  |
| value | 默认根据此属性值进行筛选 | string | number | - |  |

### OptGroup props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | Key | string | - |  |
| label | 组名 | React.ReactNode | - |  |
| className | Option 器类名 | string | - |  |
| title | 选项上的原生 title 提示 | string | - |  |

## Semantic DOM

Single

 

Multiple

 

prefix

aojunhao123

*   ##### root   根元素，包含相对定位、行内 flex 布局、光标样式、过渡动画、边框等选择器容器的基础样式  
*   ##### prefix   前缀元素，包含前缀内容的布局和样式  
*   ##### content   多选容器，包含已选项的布局、间距、换行相关样式  
*   ##### placeholder   占位符元素，包含占位符文本的字体样式和颜色  
*   ##### clear   清除按钮元素，包含清除按钮的布局、样式和交互效果  
*   ##### input   输入框元素，包含搜索输入框的样式、光标控制、字体继承等搜索相关样式，去除了边框样式  
*   ##### suffix   后缀元素，包含后缀内容的布局和样式，如清除按钮、箭头图标等  
*   ##### popup.root   弹出菜单元素，包含弹出层的定位、层级、背景、边框、阴影等弹出容器样式  
*   ##### popup.list   弹出菜单列表元素，包含选项列表的布局、滚动、最大高度等列表容器样式  
*   ##### popup.listItem   弹出菜单条目元素，包含选项项的内边距、悬浮效果、选中状态、禁用状态等选项交互样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeBorderColor | 激活态边框色 | string | #1677ff |
| activeOutlineColor | 激活态 outline 颜色 | string | rgba(5,145,255,0.1) |
| clearBg | 清空按钮背景色 | string | #ffffff |
| hoverBorderColor | 悬浮态边框色 | string | #4096ff |
| multipleItemBg | 多选标签背景色 | string | rgba(0,0,0,0.06) |
| multipleItemBorderColor | 多选标签边框色 | string | transparent |
| multipleItemBorderColorDisabled | 多选标签禁用边框色 | string | transparent |
| multipleItemColorDisabled | 多选标签禁用文本颜色 | string | rgba(0,0,0,0.25) |
| multipleItemHeight | 多选标签高度 | number | 24 |
| multipleItemHeightLG | 大号多选标签高度 | number | 32 |
| multipleItemHeightSM | 小号多选标签高度 | number | 16 |
| multipleSelectorBgDisabled | 多选框禁用背景 | string | rgba(0,0,0,0.04) |
| optionActiveBg | 选项激活态时背景色 | string | rgba(0,0,0,0.04) |
| optionFontSize | 选项字体大小 | number | 14 |
| optionHeight | 选项高度 | number | 32 |
| optionLineHeight | 选项行高 | LineHeight<string | number> | undefined | 1.5714285714285714 |
| optionPadding | 选项内间距 | Padding<string | number> | undefined | 5px 12px |
| optionSelectedBg | 选项选中时背景色 | string | #e6f4ff |
| optionSelectedColor | 选项选中时文本颜色 | string | rgba(0,0,0,0.88) |
| optionSelectedFontWeight | 选项选中时文本字重 | FontWeight | undefined | 600 |
| selectorBg | 选框背景色 | string | #ffffff |
| showArrowPaddingInlineEnd | 箭头的行末内边距 | number | 18 |
| singleItemHeightLG | 单选大号回填项高度 | number | 40 |
| zIndexPopup | 下拉菜单 z-index | number | 1050 |

全局 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorBgContainer | 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。 | string | #ffffff |
| colorBgContainerDisabled | 控制容器在禁用状态下的背景色。 | string | rgba(0,0,0,0.04) |
| colorBgElevated | 浮层容器背景色，在暗色模式下该 token 的色值会比 `colorBgContainer` 要亮一些。例如：模态框、弹出框、菜单等。 | string | #ffffff |
| colorBorder | 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。 | string | #d9d9d9 |
| colorBorderDisabled | 控制元素在禁用状态下的边框颜色。 | string | #d9d9d9 |
| colorError | 用于表示操作失败的 Token 序列，如失败按钮、错误状态提示（Result）组件等。 | string | #ff4d4f |
| colorErrorAffix | 控制表单控件前后缀在错误状态下的颜色。 | string | #ff4d4f |
| colorErrorBg | 错误色的浅色背景颜色 | string | #fff2f0 |
| colorErrorBgHover | 错误色的浅色背景色悬浮态 | string | #fff1f0 |
| colorErrorBorderHover | 错误色的描边色悬浮态 | string | #ffa39e |
| colorErrorOutline | 控制输入组件错误状态下的外轮廓线颜色。 | string | rgba(255,38,5,0.06) |
| colorErrorText | 错误色的文本默认态 | string | #ff4d4f |
| colorFillQuaternary | 最弱一级的填充色，适用于不易引起注意的色块，例如斑马纹、区分边界的色块等。 | string | rgba(0,0,0,0.02) |
| colorFillSecondary | 二级填充色可以较为明显地勾勒出元素形体，如 Rate、Skeleton 等。也可以作为三级填充色的 Hover 状态，如 Table 等。 | string | rgba(0,0,0,0.06) |
| colorFillTertiary | 三级填充色用于勾勒出元素形体的场景，如 Slider、Segmented 等。如无强调需求的情况下，建议使用三级填色作为默认填色。 | string | rgba(0,0,0,0.04) |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorIconHover | 控制弱操作图标在悬浮状态下的颜色，例如 allowClear 或 Alert 关闭按钮。 | string | rgba(0,0,0,0.88) |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorSplit | 用于作为分割线的颜色，此颜色和 colorBorderSecondary 的颜色一致，但是用的是透明色。 | string | rgba(5,5,5,0.06) |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDescription | 控制文本描述字体颜色。 | string | rgba(0,0,0,0.45) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| colorTextPlaceholder | 控制占位文本的颜色。 | string | rgba(0,0,0,0.25) |
| colorTextQuaternary | 第四级文本色是最浅的文本色，例如表单的输入提示文本、禁用色文本等。 | string | rgba(0,0,0,0.25) |
| colorWarning | 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。 | string | #faad14 |
| colorWarningAffix | 控制表单控件前后缀在警告状态下的颜色。 | string | #faad14 |
| colorWarningBg | 警戒色的浅色背景颜色 | string | #fffbe6 |
| colorWarningBgHover | 警戒色的浅色背景色悬浮态 | string | #fff1b8 |
| colorWarningHover | 警戒色的深色悬浮态 | string | #ffd666 |
| colorWarningOutline | 控制输入组件警告状态下的外轮廓线颜色。 | string | rgba(255,215,5,0.1) |
| borderRadius | 基础组件的圆角大小，例如按钮、输入框、卡片等 | number | 6 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| borderRadiusXS | XS号圆角，用于组件中的一些小圆角，如 Segmented 、Arrow 等一些内部圆角的组件样式中。 | number | 2 |
| boxShadowSecondary | 控制元素二级阴影样式。 | string | 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05) |
| controlHeight | Ant Design 中按钮和输入框等基础控件的高度 | number | 32 |
| controlHeightLG | 较高的组件高度 | number | 40 |
| controlHeightSM | 较小的组件高度 | number | 24 |
| controlItemBgActiveHover | 控制组件项在鼠标悬浮且激活状态下的背景颜色。 | string | #bae0ff |
| controlOutlineWidth | 控制输入组件的外轮廓线宽度。 | number | 2 |
| controlPaddingHorizontal | 控制元素水平内间距。 | number | 12 |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeIcon | 控制选择器、级联选择器等中的操作图标字体大小。正常情况下与 fontSizeSM 相同。 | number | 12 |
| fontSizeLG | 大号字体大小 | number | 16 |
| fontSizeSM | 小号字体大小 | number | 12 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOut | 预设动效曲率 | string | cubic-bezier(0.645, 0.045, 0.355, 1)[](https://cubic-bezier.com/#0.645,0.045,0.355,1) |
| motionEaseInOutCirc | 预设动效曲率 | string | cubic-bezier(0.78, 0.14, 0.15, 0.86)[](https://cubic-bezier.com/#0.78,0.14,0.15,0.86) |
| motionEaseInQuint | 预设动效曲率 | string | cubic-bezier(0.755, 0.05, 0.855, 0.06)[](https://cubic-bezier.com/#0.755,0.05,0.855,0.06) |
| motionEaseOutCirc | 预设动效曲率 | string | cubic-bezier(0.08, 0.82, 0.17, 1)[](https://cubic-bezier.com/#0.08,0.82,0.17,1) |
| motionEaseOutQuint | 预设动效曲率 | string | cubic-bezier(0.23, 1, 0.32, 1)[](https://cubic-bezier.com/#0.23,1,0.32,1) |
| paddingSM | 控制元素的小内间距。 | number | 12 |
| paddingXS | 控制元素的特小内间距。 | number | 8 |
| paddingXXS | 控制元素的极小内间距。 | number | 4 |

## FAQ

### `mode="tags"` 模式下为何搜索有时会出现两个相同选项？

这一般是 `options` 中的 `label` 和 `value` 不同导致的，你可以通过 `optionFilterProp="label"` 将过滤设置为展示值以避免这种情况。

### 点击 `popupRender` 里的元素，下拉菜单不会自动消失？

你可以使用受控模式，手动设置 `open` 属性：[codesandbox](https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js)。

### 反过来希望点击 `popupRender` 里元素不消失该怎么办？

Select 当失去焦点时会关闭下拉框，你可以通过阻止默认行为来避免丢失焦点导致的关闭：

tsx

<Select

 popupRender={() => (

 <div

 onMouseDown={(e) => {

 e.preventDefault();

 e.stopPropagation();

 }}

 >

 Some Content

 </div>

 )}

/>

### 自定义 Option 样式导致滚动异常怎么办？

这是由于虚拟滚动默认选项高度为 `24px`，如果你的选项高度小于该值则需要通过 `listItemHeight` 属性调整，而 `listHeight` 用于设置滚动容器高度：

tsx

<Select listItemHeight={10} listHeight={250} />

注意：`listItemHeight` 和 `listHeight` 为内部属性，如无必要，请勿修改该值。

### 为何无障碍测试会报缺失 `aria-` 属性？

Select 无障碍辅助元素仅在弹窗展开时创建，因而当你在进行无障碍检测时请先打开下拉后再进行测试。对于 `aria-label` 与 `aria-labelledby` 属性缺失警告，请自行为 Select 组件添加相应无障碍属性。

Select 虚拟滚动会模拟无障碍绑定元素。如果需要读屏器完整获取全部列表，你可以设置 `virtual={false}` 关闭虚拟滚动，无障碍选项将会绑定到真实元素上。

### 使用 `tagRender` 生成的自定义标签，点击关闭时会呼出下拉框

如果你不希望点击某个元素后下拉框自动出现（例如关闭按钮），可以在其上阻止 `MouseDown` 事件的传播。

tsx

<Select

 tagRender={(props) => {

 const { closable, label, onClose } = props;

 return (

 <span className="border">

 {label}

 {closable ? (

 <span

 onMouseDown={(e) => e.stopPropagation()}

 onClick={onClose}

 className="cursor-pointer"

 >

 ❎

 </span>

 ) : null}

 </span>

 );

 }}

/>
