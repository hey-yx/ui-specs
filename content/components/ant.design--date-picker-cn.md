---
title: "Ant Design · Date Picker 日期选择器"
source: https://ant.design/components/date-picker-cn
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-ant-date-picker
publisher: "Ant Design"
---

# Ant Design · Date Picker 日期选择器

> 来源：[https://ant.design/components/date-picker-cn](https://ant.design/components/date-picker-cn)

---

# DatePicker

日期选择框

输入或选择日期的控件。

使用 import { DatePicker } from 'antd';
反馈

[components/date-picker](https://github.com/ant-design/ant-design/blob/master/components/date-picker)[提交问题](https://github.com/ant-design/ant-design/issues/new/choose)[待解决](https://github.com/ant-design/ant-design/issues?q=is%3Aopen%20(is%3Aissue%20in%3Atitle%20DatePicker%20OR%20is%3Aissue%20in%3Atitle%20%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E6%A1%86))
文档

[编辑此页](https://github.com/ant-design/ant-design/edit/master/components/date-picker/index.zh-CN.md)[LLMs.md](https://ant.design/components/date-picker-cn.md)

开发

设计

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示

[基本](https://ant.design/components/date-picker-cn#date-picker-demo-basic)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/basic.tsx)

最简单的用法，在浮层中可以选择或者输入日期。

[](https://ant.design/~demos/date-picker-demo-basic?routeId=components%2Fdate-picker%2Findex.en-US)

+ 2 ...

+ 2 ...

+ 2 ...

[多选](https://ant.design/components/date-picker-cn#date-picker-demo-multiple)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/multiple.tsx)

多选，不支持 `showTime` 以及 `picker="time"`。

[](https://ant.design/~demos/date-picker-demo-multiple?routeId=components%2Fdate-picker%2Findex.en-US)

5.14.0

Time

[切换不同的选择器](https://ant.design/components/date-picker-cn#date-picker-demo-switchable)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/switchable.tsx)

提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

[](https://ant.design/~demos/date-picker-demo-switchable?routeId=components%2Fdate-picker%2Findex.en-US)

[日期时间选择](https://ant.design/components/date-picker-cn#date-picker-demo-time)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/time.tsx)

增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

[](https://ant.design/~demos/date-picker-demo-time?routeId=components%2Fdate-picker%2Findex.en-US)

[日期限定范围](https://ant.design/components/date-picker-cn#date-picker-demo-date-range)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/date-range.tsx)

通过 `minDate` 和 `maxDate` 限定日期范围。

[](https://ant.design/~demos/date-picker-demo-date-range?routeId=components%2Fdate-picker%2Findex.en-US)

5.14.0

[不可选择日期和时间](https://ant.design/components/date-picker-cn#date-picker-demo-disabled-date)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/disabled-date.tsx)

可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 `disabledTime` 需要和 `showTime` 一起使用。

[](https://ant.design/~demos/date-picker-demo-disabled-date?routeId=components%2Fdate-picker%2Findex.en-US)

##### 7 days range

##### 6 months range

[选择不超过一定的范围](https://ant.design/components/date-picker-cn#date-picker-demo-select-in-range)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/select-in-range.tsx)

使用 `disabledDate` 的 `info.from` 来限制动态的日期区间选择。

[](https://ant.design/~demos/date-picker-demo-select-in-range?routeId=components%2Fdate-picker%2Findex.en-US)

[额外的页脚](https://ant.design/components/date-picker-cn#date-picker-demo-extra-footer)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/extra-footer.tsx)

在浮层中加入额外的页脚，以满足某些定制信息的需求。

[](https://ant.design/~demos/date-picker-demo-extra-footer?routeId=components%2Fdate-picker%2Findex.en-US)

[定制单元格](https://ant.design/components/date-picker-cn#date-picker-demo-cell-render)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/cell-render.tsx)

使用 `cellRender` 可以自定义单元格的内容和样式。

[](https://ant.design/~demos/date-picker-demo-cell-render?routeId=components%2Fdate-picker%2Findex.en-US)

DatePicker

2026-11-04

RangePicker

2026-11-04 ~ 2026-11-05

[外部使用面板](https://ant.design/components/date-picker-cn#date-picker-demo-external-panel)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/external-panel.tsx)

自定义菜单，外置选择面板。

[](https://ant.design/~demos/date-picker-demo-external-panel?routeId=components%2Fdate-picker%2Findex.en-US)

[自定义状态](https://ant.design/components/date-picker-cn#date-picker-demo-status)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/status.tsx)

使用 `status` 为 DatePicker 添加状态，可选 `error` 或者 `warning`。

[](https://ant.design/~demos/date-picker-demo-status?routeId=components%2Fdate-picker%2Findex.en-US)

[自定义语义结构的样式和类](https://ant.design/components/date-picker-cn#date-picker-demo-style-class)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/style-class.tsx)

通过 `classNames` 和 `styles` 传入对象/函数可以自定义 DatePicker 的[语义化结构](https://ant.design/components/date-picker-cn#semantic-dom)样式。

[](https://ant.design/~demos/date-picker-demo-style-class?routeId=components%2Fdate-picker%2Findex.en-US)

6.0.0

ab

ab

ab

ab

Event Period

Event Period

[前后缀](https://ant.design/components/date-picker-cn#date-picker-demo-suffix)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/suffix.tsx)

自定义前缀 `prefix` 和后缀 `suffix`。

[](https://ant.design/~demos/date-picker-demo-suffix?routeId=components%2Fdate-picker%2Findex.en-US)

6.7.0

[范围选择器](https://ant.design/components/date-picker-cn#date-picker-demo-range-picker)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/range-picker.tsx)

通过设置 `picker` 属性，指定范围选择器类型。

[](https://ant.design/~demos/date-picker-demo-range-picker?routeId=components%2Fdate-picker%2Findex.en-US)

[选择确认](https://ant.design/components/date-picker-cn#date-picker-demo-needconfirm)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/needConfirm.tsx)

DatePicker 默认会根据 `picker` 的交互行为，自动选择是否需要确认按钮。你也可以通过 `needConfirm` 属性来手动设置是否需要确认按钮。当有 `needConfirm` 时，用户始终需要点击确认按钮才能完成选择。反之，则会在选择或者失去焦点时提交。

[](https://ant.design/~demos/date-picker-demo-needconfirm?routeId=components%2Fdate-picker%2Findex.en-US)

5.14.0

[日期格式](https://ant.design/components/date-picker-cn#date-picker-demo-format)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/format.tsx)

使用 `format` 属性，可以自定义日期显示格式。当 `format` 为数组时，选择器输入框可以输入数组中任意一个有效格式。

[](https://ant.design/~demos/date-picker-demo-format?routeId=components%2Fdate-picker%2Findex.en-US)

[格式对齐](https://ant.design/components/date-picker-cn#date-picker-demo-mask)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/mask.tsx)

输入格式对齐，通过键盘左右切换焦点。失去焦点时会尝试对齐到最后合法的日期。

[](https://ant.design/~demos/date-picker-demo-mask?routeId=components%2Fdate-picker%2Findex.en-US)

5.14.0

[禁用](https://ant.design/components/date-picker-cn#date-picker-demo-disabled)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/disabled.tsx)

选择框的不可用状态。你也可以通过数组单独禁用 RangePicker 的其中一项。

[](https://ant.design/~demos/date-picker-demo-disabled?routeId=components%2Fdate-picker%2Findex.en-US)

[允许留空](https://ant.design/components/date-picker-cn#date-picker-demo-allow-empty)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/allow-empty.tsx)

在范围选择时，可以允许留空。这对于需要保留“至今”日期项颇为有用。

[](https://ant.design/~demos/date-picker-demo-allow-empty?routeId=components%2Fdate-picker%2Findex.en-US)

[预设范围](https://ant.design/components/date-picker-cn#date-picker-demo-preset-ranges)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/preset-ranges.tsx)

可以预设常用的日期范围以提高用户体验。自 `5.8.0` 开始，preset value 支持回调函数返回值方式。

[](https://ant.design/~demos/date-picker-demo-preset-ranges?routeId=components%2Fdate-picker%2Findex.en-US)

Large Medium Small 

[三种大小](https://ant.design/components/date-picker-cn#date-picker-demo-size)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/size.tsx)

三种大小的输入框，若不设置，则为 `medium`。

[](https://ant.design/~demos/date-picker-demo-size?routeId=components%2Fdate-picker%2Findex.en-US)

[定制面板](https://ant.design/components/date-picker-cn#date-picker-demo-components)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/components.tsx)

通过 `components` 替换对应面板。

[](https://ant.design/~demos/date-picker-demo-components?routeId=components%2Fdate-picker%2Findex.en-US)

5.14.0

#### By locale props

#### By ConfigProvider

[佛历格式](https://ant.design/components/date-picker-cn#date-picker-demo-buddhist-era)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/buddhist-era.tsx)

通过 `locale` 配置支持特殊的年历格式。

[](https://ant.design/~demos/date-picker-demo-buddhist-era?routeId=components%2Fdate-picker%2Findex.en-US)

5.14.0

[形态变体](https://ant.design/components/date-picker-cn#date-picker-demo-variant)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/variant.tsx)

DatePicker 形态变体，可选 `outlined``filled``borderless``underlined` 四种形态。

[](https://ant.design/~demos/date-picker-demo-variant?routeId=components%2Fdate-picker%2Findex.en-US)

5.13.0

topLeft topRight bottomLeft bottomRight 

  
  
  
  

[弹出位置](https://ant.design/components/date-picker-cn#date-picker-demo-placement)[](https://github.com/ant-design/ant-design/edit/master/components/date-picker/demo/placement.tsx)

可以通过 `placement` 手动指定弹出的位置。

[](https://ant.design/~demos/date-picker-demo-placement?routeId=components%2Fdate-picker%2Findex.en-US)

## API

通用属性参考：[通用属性](https://ant.design/docs/react/common-props-cn)

日期类组件包括以下五种形式。

*   DatePicker
*   DatePicker[picker="month"]
*   DatePicker[picker="week"]
*   DatePicker[picker="year"]
*   DatePicker[picker="quarter"] (4.1.0 新增)
*   RangePicker

### 国际化配置

默认配置为 en-US，如果你需要设置其他语言，推荐在入口处使用我们提供的国际化组件，详见：[ConfigProvider 国际化](https://ant.design/components/config-provider-cn/)。

如有特殊需求（仅修改单一组件的语言），请使用 locale 参数，参考：[默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)。

jsx

// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale

// 确保还导入相关的 dayjs 文件，否则所有文本的区域设置都不会更改（例如范围选择器月份）

import locale from 'antd/locale/zh_CN';

import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

<ConfigProvider locale={locale}>

 <DatePicker defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} />

</ConfigProvider>;

WARNING

在搭配 Next.js 的 App Router 使用时，注意在引入 dayjs 的 locale 文件时加上 `'use client'`。这是由于 Ant Design 的组件都是客户端组件，在 RSC 中引入 dayjs 的 locale 文件将不会在客户端生效。

### 共同的 API

以下 API 为 DatePicker、 RangePicker 共享的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | [AllowClearConfig](https://ant.design/components/date-picker-cn#allowclearconfig) | true | - | 6.4.0 |
| ~~bordered~~ | 是否带边框，请使用 `variant` 替代 | boolean | true | - | × |
| className | 选择器 className | string | - |  | DatePicker: 5.7.0，RangePicker: 5.11.0 |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/date-picker-cn#semantic-dom), string> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/date-picker-cn#semantic-dom), string> | - |  | DatePicker: 5.25.0，RangePicker: 5.25.0 |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | function(currentDate: dayjs, today: dayjs) => React.ReactNode | - | < 5.4.0 | × |
| cellRender | 自定义单元格的内容 | (current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode | - | 5.4.0 | × |
| components | 自定义面板、输入框和底部按钮 | [Components](https://ant.design/components/date-picker-cn#components) | - | 5.14.0 | × |
| defaultOpen | 是否默认展开控制弹层 | boolean | - |  | × |
| disabled | 禁用 | boolean | false |  | × |
| disabledDate | 不可选择的日期 | (currentDate: dayjs, info: { from?: dayjs, type: Picker }) => boolean | - | `info`: 5.14.0 | × |
| ~~dropdownClassName~~ | 弹出日历的 className，请使用 `classNames.popup.root` 替代 | string | - | - | × |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。示例：[自定义格式](https://ant.design/components/date-picker-cn#date-picker-demo-format) | [formatType](https://ant.design/components/date-picker-cn#formattype) | [@rc-component/picker](https://github.com/react-component/picker/blob/f512f18ed59d6791280d1c3d7d37abbb9867eb0b/src/utils/uiUtil.ts#L155-L177) |  | × |
| order | 多选、范围时是否自动排序 | boolean | true | 5.14.0 | × |
| preserveInvalidOnBlur | 失去焦点是否要清空输入框内无效内容 | boolean | false | 5.14.0 | × |
| ~~popupClassName~~ | 额外的弹出日历 className，使用 `classNames.popup.root` 替代 | string | - | 4.23.0 | × |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |  | × |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |  | × |
| locale | 国际化配置 | object | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  | × |
| minDate | 最小日期，同样会限制面板的切换范围 | dayjs | - | 5.14.0 | × |
| maxDate | 最大日期，同样会限制面板的切换范围 | dayjs | - | 5.14.0 | × |
| mode | 日期面板的状态（[设置后无法选择年份/月份？](https://ant.design/docs/react/faq-cn#mode-cannot-select-year-month)） | `time` | `date` | `month` | `year` | `decade` | - |  | × |
| needConfirm | 是否需要确认按钮，为 `false` 时失去焦点即代表选择。当设置 `multiple` 时默认为 `false` | boolean | - | 5.14.0 | × |
| nextIcon | 自定义下一个图标 | ReactNode | - | 4.17.0 | × |
| open | 控制弹层是否展开 | boolean | - |  | × |
| panelRender | 自定义渲染面板 | (panelNode) => ReactNode | - | 4.5.0 | × |
| picker | 设置选择器类型 | `date` | `week` | `month` | `quarter` | `year` | `date` | `quarter`: 4.1.0 | × |
| placeholder | 输入框提示文字 | string | [string, string] | - |  | × |
| placement | 选择框弹出的位置 | `bottomLeft``bottomRight``topLeft``topRight` | bottomLeft |  | × |
| ~~popupStyle~~ | 额外的弹出日历样式，使用 `styles.popup.root` 替代 | CSSProperties | {} |  | × |
| prefix | 自定义前缀 | ReactNode | - | 5.22.0 | × |
| prevIcon | 自定义上一个图标 | ReactNode | - | 4.17.0 | × |
| previewValue | 当用户选择日期悬停选项时，输入字段的值会发生临时更改 | false | hover | hover | 6.0.0 | × |
| presets | 预设时间范围快捷选择, 自 `5.8.0` 起 value 支持函数返回值 | { label: React.ReactNode, value: Dayjs | (() => Dayjs) }[] | - |  | × |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` | `medium` | `small` | - |  | × |
| status | 设置校验状态 | 'error' | 'warning' | - | 4.19.0 | × |
| style | 自定义输入框样式 | CSSProperties | {} |  | DatePicker: 5.7.0，RangePicker: 5.11.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](https://ant.design/components/date-picker-cn#semantic-dom), CSSProperties> | (info: { props })=> Record<[SemanticDOM](https://ant.design/components/date-picker-cn#semantic-dom), CSSProperties> | - |  | DatePicker: 5.25.0，RangePicker: 5.25.0 |
| suffix | 自定义后缀 | ReactNode | - | 6.7.0 | 6.7.0 |
| ~~suffixIcon~~ | 自定义的选择框后缀图标，请使用 `suffix` 替代 | ReactNode | - |  | DatePicker: 6.3.0，RangePicker: 6.4.0 |
| superNextIcon | 自定义 `>>` 切换图标 | ReactNode | - | 4.17.0 | × |
| superPrevIcon | 自定义 `<<` 切换图标 | ReactNode | - | 4.17.0 | × |
| clearIcon | （仅支持全局配置）自定义清除图标 | ReactNode | - | × | 6.4.0 |
| variant | 形态变体 | `outlined` | `borderless` | `filled` | `underlined` | `outlined` | 5.13.0 | `underlined`: 5.24.0 | DatePicker: 5.19.0，RangePicker: 5.19.0 |
| onClear | 点击清除按钮时的回调 | () => void | - | 6.5.0 | × |
| onOpenChange | 弹出日历和关闭日历的回调 | function(open) | - |  | × |
| onPanelChange | 日历面板切换的回调 | function(value, mode) | - |  | × |
| ~~onSelect~~ | 选中日期时的回调，请使用 `onCalendarChange` 替代 | function(value) | - | - | × |

### Components

`components` 支持按面板类型自定义面板组件，以及通过 `input` 自定义输入框组件，还支持以下底部按钮。这些配置同样适用于 RangePicker、TimePicker 和 TimePicker.RangePicker。

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| nowButton | 自定义“今天／此刻”按钮 | React.ComponentType | string | `button` | 6.7.0 | × |
| okButton | 自定义确认按钮 | React.ComponentType | string | 小号主按钮 | 6.7.0 | × |

自定义按钮组件应将 `className`、`disabled`、`onClick` 和 `children` 传给实际渲染的按钮，并使用 `type="button"` 避免提交表单。

`components.button` 已废弃，仍作为 `components.okButton` 的兼容回退；同时配置时，`components.okButton` 优先。`components.button` 不会自定义“今天／此刻”按钮。

### AllowClearConfig

支持全局配置的字段按组件配置、全局配置、默认值的顺序取值。`allowClear={true}` 继承全局配置；`disabled: false` 和 `tabIndex: 0` 可覆盖全局值。

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| clearIcon | 自定义清除图标 | ReactNode | - | - | 6.4.0 |
| disabled | `true` 时等同于 `allowClear={false}` | boolean | false | 6.7.0 | 6.7.0 |
| label | 清除按钮的无障碍名称 | string | 组件的本地化文案 | 6.7.0 | 6.7.0 |
| tabIndex | 清除按钮的 Tab 键顺序。`-1` 表示不参与 Tab 键导航 | number | 0 | 6.7.0 | 6.7.0 |

### 共同的方法

| 名称 | 描述 | 版本 |
| --- | --- | --- |
| blur() | 移除焦点 |  |
| focus() | 获取焦点 |  |

### DatePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultPickerValue | 默认面板日期，每次面板打开时会被重置到该日期 | [dayjs](https://day.js.org/) | - | 5.14.0 |
| defaultValue | 默认日期，如果开始时间或结束时间为 `null` 或者 `undefined`，日期范围将是一个开区间 | [dayjs](https://day.js.org/) | - |  |
| disabledTime | 不可选择的时间 | function(date) | - |  |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](https://ant.design/components/date-picker-cn#formattype) | `YYYY-MM-DD` |  |
| multiple | 是否为多选，不支持 `showTime` | boolean | false | 5.14.0 |
| pickerValue | 面板日期，可以用于受控切换面板所在日期。配合 `onPanelChange` 使用。 | [dayjs](https://day.js.org/) | - | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |  |
| showNow | 显示当前日期时间的快捷选择 | boolean | - | 4.4.0 |
| showTime | 增加时间选择功能 | Object | boolean | [TimePicker Options](https://ant.design/components/time-picker-cn#api) |  |
| ~~showTime.defaultValue~~ | 请使用 `showTime.defaultOpenValue` | [dayjs](https://day.js.org/) | dayjs() | 5.27.3 |
| showTime.defaultOpenValue | 设置用户选择日期时默认的时分秒，[例子](https://ant.design/components/date-picker-cn#date-picker-demo-disabled-date) | [dayjs](https://day.js.org/) | dayjs() |  |
| showWeek | DatePicker 下展示当前周 | boolean | false | 5.14.0 |
| value | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调 | function(date: dayjs | null, dateString: string | null) | - |  |
| onOk | 点击确定按钮的回调 | function() | - |  |
| onPanelChange | 日期面板变化时的回调 | function(value, mode) | - |  |

### DatePicker[picker=year]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](https://day.js.org/) | - |  |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](https://ant.design/components/date-picker-cn#formattype) | `YYYY` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| tagRender | 自定义 tag 内容 render，仅在 `multiple` 模式下生效 | (props) => ReactNode | - | 6.4.0 |
| value | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs | null, dateString: string | null) | - |  |

### DatePicker[picker=quarter]

`4.1.0` 新增。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](https://day.js.org/) | - |  |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](https://ant.design/components/date-picker-cn#formattype) | `YYYY-\QQ` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| tagRender | 自定义 tag 内容 render，仅在 `multiple` 模式下生效 | (props) => ReactNode | - | 6.4.0 |
| value | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs | null, dateString: string | null) | - |  |

### DatePicker[picker=month]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](https://day.js.org/) | - |  |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](https://ant.design/components/date-picker-cn#formattype) | `YYYY-MM` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| tagRender | 自定义 tag 内容 render，仅在 `multiple` 模式下生效 | (props) => ReactNode | - | 6.4.0 |
| value | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs | null, dateString: string | null) | - |  |

### DatePicker[picker=week]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](https://day.js.org/) | - |  |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](https://ant.design/components/date-picker-cn#formattype) | `YYYY-wo` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |  |
| tagRender | 自定义 tag 内容 render，仅在 `multiple` 模式下生效 | (props) => ReactNode | - | 6.4.0 |
| value | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs | null, dateString: string | null) | - |  |
| showWeek | DatePicker 下展示当前周 | boolean | true | 5.14.0 |

### RangePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](https://ant.design/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| allowEmpty | 允许起始项部分为空 | [boolean, boolean] | [false, false] |  | × |
| cellRender | 自定义单元格的内容。 | (current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode | - | 5.4.0 | × |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | function(currentDate: dayjs, today: dayjs) => React.ReactNode | - | < 5.4.0 | × |
| defaultPickerValue | 默认面板日期，每次面板打开时会被重置到该日期 | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - | 5.14.0 | × |
| defaultValue | 默认日期 | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  | × |
| disabled | 禁用起始项 | [boolean, boolean] | - |  | × |
| disabledTime | 不可选择的时间 | function(date: dayjs, partial: `start` | `end`, info: { from?: dayjs }) | - | `info.from`: 5.17.0 | × |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](https://ant.design/components/date-picker-cn#formattype) | `YYYY-MM-DD HH:mm:ss` |  | × |
| id | 设置输入框 `id` 属性。 | { start?: string, end?: string } | - | 5.14.0 | × |
| pickerValue | 面板日期，可以用于受控切换面板所在日期。配合 `onPanelChange` 使用。 | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - | 5.14.0 | × |
| presets | 预设时间范围快捷选择，自 `5.8.0` 起 value 支持函数返回值 | { label: React.ReactNode, value: [(Dayjs | (() => Dayjs)), (Dayjs | (() => Dayjs))] }[] | - |  | × |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  | × |
| separator | 设置分隔符 | React.ReactNode | `<SwapRightOutlined />` |  | 6.3.0 |
| showTime | 增加时间选择功能 | Object|boolean | [TimePicker Options](https://ant.design/components/time-picker-cn#api) |  | × |
| ~~showTime.defaultValue~~ | 请使用 `showTime.defaultOpenValue` | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | [dayjs(), dayjs()] | 5.27.3 | × |
| showTime.defaultOpenValue | 设置用户选择日期时默认的时分秒，[例子](https://ant.design/components/date-picker-cn#date-picker-demo-disabled-date) | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | [dayjs(), dayjs()] |  | × |
| value | 日期 | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  | × |
| onCalendarChange | 待选日期发生变化的回调。`info` 参数自 4.4.0 添加 | function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:`start`|`end` }) | - |  | × |
| onChange | 日期范围发生变化的回调 | function(dates: [dayjs, dayjs] | null, dateStrings: [string, string] | null) | - |  | × |
| onFocus | 聚焦时回调 | function(event, { range: 'start' | 'end' }) | - | `range`: 5.14.0 | × |
| onBlur | 失焦时回调 | function(event, { range: 'start' | 'end' }) | - | `range`: 5.14.0 | × |

#### formatType

typescript

import type { Dayjs } from 'dayjs';

type Generic = string;

type GenericFn = (value: Dayjs) => string;

export type FormatType =

 | Generic

 | GenericFn

 | Array<Generic | GenericFn>

 | {

 format: string;

 type?: 'mask';

 };

注意：`type` 定义为 `5.14.0` 新增。

## Semantic DOM

Single

 

Multiple

 

*   ##### root   根元素，包含相对定位、行内flex布局、内边距、边框圆角、过渡动画等日期选择器容器的基础样式  
*   ##### prefix   前缀元素，包含flex布局、右外边距等前缀内容的布局样式  
*   ##### input   输入框元素，包含相对定位、宽度、颜色、字体、行高、过渡动画等输入框的核心交互样式  
*   ##### suffix   后缀元素，包含flex布局、颜色、行高、指针事件、过渡动画等后缀内容的样式  
*   ##### popup.root   弹出框元素  
*   ##### popup.container   容器元素，设置背景色、内边距、圆角、阴影、边框和内容展示样式  
*   ##### popup.header   弹出框头部元素，包含导航按钮、月份年份选择器等头部控制区域的布局和样式  
*   ##### popup.body   弹出框主体元素，包含日期面板表格的容器布局和样式  
*   ##### popup.content   弹出框内容元素，包含日期表格的宽度、边框、单元格等内容展示样式  
*   ##### popup.item   弹出框单项元素，包含日期单元格的尺寸、背景色、边框圆角、悬停态、选中态等交互样式  
*   ##### popup.footer   弹出框底部元素，包含确认取消按钮、快捷选择等底部操作区域的布局样式  

## 主题变量（Design Token）

组件 Token 如何定制？

| Token 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeBg | 输入框激活状态时背景颜色 | string | #ffffff |
| activeBorderColor | 激活态边框色 | string | #1677ff |
| activeShadow | 激活态阴影 | string | 0 0 0 2px rgba(5,145,255,0.1) |
| addonBg | 前/后置标签背景色 | string | rgba(0,0,0,0.02) |
| cellActiveWithRangeBg | 选取范围内的单元格背景色 | string | #e6f4ff |
| cellBgDisabled | 单元格禁用态背景色 | string | rgba(0,0,0,0.04) |
| cellHeight | 单元格高度 | number | 24 |
| cellHoverBg | 单元格悬浮态背景色 | string | rgba(0,0,0,0.04) |
| cellHoverWithRangeBg | 选取范围内的单元格悬浮态背景色 | string | #cbe0fd |
| cellRangeBorderColor | 选取范围时单元格边框色 | string | #82b4f9 |
| cellWidth | 单元格宽度 | number | 36 |
| errorActiveShadow | 错误状态时激活态阴影 | string | 0 0 0 2px rgba(255,38,5,0.06) |
| hoverBg | 输入框hover状态时背景颜色 | string | #ffffff |
| hoverBorderColor | 悬浮态边框色 | string | #4096ff |
| inputFontSize | 字体大小 | number | 14 |
| inputFontSizeLG | 大号字体大小 | number | 16 |
| inputFontSizeSM | 小号字体大小 | number | 14 |
| multipleItemBg | 多选标签背景色 | string | rgba(0,0,0,0.06) |
| multipleItemBorderColor | 多选标签边框色 | string | transparent |
| multipleItemBorderColorDisabled | 多选标签禁用边框色 | string | transparent |
| multipleItemColorDisabled | 多选标签禁用文本颜色 | string | rgba(0,0,0,0.25) |
| multipleItemHeight | 多选标签高度 | number | 24 |
| multipleItemHeightLG | 大号多选标签高度 | number | 32 |
| multipleItemHeightSM | 小号多选标签高度 | number | 16 |
| multipleSelectorBgDisabled | 多选框禁用背景 | string | rgba(0,0,0,0.04) |
| paddingBlock | 输入框纵向内边距 | number | 4 |
| paddingBlockLG | 大号输入框纵向内边距 | number | 7 |
| paddingBlockSM | 小号输入框纵向内边距 | number | 0 |
| paddingInline | 输入框横向内边距 | number | 11 |
| paddingInlineLG | 大号输入框横向内边距 | number | 11 |
| paddingInlineSM | 小号输入框横向内边距 | number | 7 |
| presetsMaxWidth | 预设区域最大宽度 | number | 200 |
| presetsWidth | 预设区域宽度 | number | 120 |
| textHeight | 单元格文本高度 | number | 40 |
| timeCellHeight | 时间单元格高度 | number | 28 |
| timeColumnHeight | 时间列高度 | number | 224 |
| timeColumnWidth | 时间列宽度 | number | 56 |
| warningActiveShadow | 警告状态时激活态阴影 | string | 0 0 0 2px rgba(255,215,5,0.1) |
| withoutTimeCellHeight | 十年/年/季/月/周单元格高度 | number | 66 |
| zIndexPopup | 弹窗 z-index | number | 1050 |

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
| colorErrorText | 错误色的文本默认态 | string | #ff4d4f |
| colorFillSecondary | 二级填充色可以较为明显地勾勒出元素形体，如 Rate、Skeleton 等。也可以作为三级填充色的 Hover 状态，如 Table 等。 | string | rgba(0,0,0,0.06) |
| colorFillTertiary | 三级填充色用于勾勒出元素形体的场景，如 Slider、Segmented 等。如无强调需求的情况下，建议使用三级填色作为默认填色。 | string | rgba(0,0,0,0.04) |
| colorIcon | 控制弱操作图标的颜色，例如 allowClear 或 Alert 关闭按钮。 * | string | rgba(0,0,0,0.45) |
| colorIconHover | 控制弱操作图标在悬浮状态下的颜色，例如 allowClear 或 Alert 关闭按钮。 | string | rgba(0,0,0,0.88) |
| colorLink | 控制超链接的颜色。 | string | #1677ff |
| colorLinkActive | 控制超链接被点击时的颜色。 | string | #0958d9 |
| colorLinkHover | 控制超链接悬浮时的颜色。 | string | #69b1ff |
| colorPrimary | 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义 | string | #1677ff |
| colorPrimaryBorder | 主色梯度下的描边用色，用在 Slider 等组件的描边上。 | string | #91caff |
| colorSplit | 用于作为分割线的颜色，此颜色和 colorBorderSecondary 的颜色一致，但是用的是透明色。 | string | rgba(5,5,5,0.06) |
| colorText | 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。 | string | rgba(0,0,0,0.88) |
| colorTextDisabled | 控制禁用状态下的字体颜色。 | string | rgba(0,0,0,0.25) |
| colorTextHeading | 控制标题字体颜色。 | string | rgba(0,0,0,0.88) |
| colorTextLightSolid | 控制带背景色的文本，例如 Primary Button 组件中的文本高亮颜色。 | string | #fff |
| colorTextPlaceholder | 控制占位文本的颜色。 | string | rgba(0,0,0,0.25) |
| colorTextQuaternary | 第四级文本色是最浅的文本色，例如表单的输入提示文本、禁用色文本等。 | string | rgba(0,0,0,0.25) |
| colorTextTertiary | 第三级文本色一般用于描述性文本，例如表单的中的补充说明文本、列表的描述性文本等场景。 | string | rgba(0,0,0,0.45) |
| colorWarning | 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。 | string | #faad14 |
| colorWarningAffix | 控制表单控件前后缀在警告状态下的颜色。 | string | #faad14 |
| colorWarningBg | 警戒色的浅色背景颜色 | string | #fffbe6 |
| colorWarningBgHover | 警戒色的浅色背景色悬浮态 | string | #fff1b8 |
| colorWarningBorderHover | 警戒色的描边色悬浮态 | string | #ffd666 |
| colorWarningText | 警戒色的文本默认态 | string | #faad14 |
| borderRadius | 基础组件的圆角大小，例如按钮、输入框、卡片等 | number | 6 |
| borderRadiusLG | LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 | number | 8 |
| borderRadiusSM | SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 | number | 4 |
| borderRadiusXS | XS号圆角，用于组件中的一些小圆角，如 Segmented 、Arrow 等一些内部圆角的组件样式中。 | number | 2 |
| boxShadowSecondary | 控制元素二级阴影样式。 | string | 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05) |
| controlHeight | Ant Design 中按钮和输入框等基础控件的高度 | number | 32 |
| controlHeightLG | 较高的组件高度 | number | 40 |
| controlHeightSM | 较小的组件高度 | number | 24 |
| controlItemBgActive | 控制组件项在激活状态下的背景颜色。 | string | #e6f4ff |
| fontFamily | Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。 | string | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontSize | 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。 | number | 14 |
| fontSizeLG | 大号字体大小 | number | 16 |
| fontSizeSM | 小号字体大小 | number | 12 |
| fontWeightStrong | 控制标题类组件（如 h1、h2、h3）或选中项的字体粗细。 | number | 600 |
| lineHeight | 文本行高 | number | 1.5714285714285714 |
| lineHeightLG | 大型文本行高 | number | 1.5 |
| lineType | 用于控制组件边框、分割线等的样式，默认是实线 | string | solid |
| lineWidth | 用于控制组件边框、分割线等的宽度 | number | 1 |
| lineWidthBold | 描边类组件的默认线宽，如 Button、Input、Select 等输入类控件。 | number | 2 |
| linkDecoration | 控制链接文本的装饰样式。 | TextDecoration<string | number> | undefined | none |
| linkFocusDecoration | 控制链接聚焦时文本的装饰样式。 | TextDecoration<string | number> | undefined | none |
| linkHoverDecoration | 控制链接鼠标悬浮时文本的装饰样式。 | TextDecoration<string | number> | undefined | none |
| marginXS | 控制元素外边距，小尺寸。 | number | 8 |
| marginXXS | 控制元素外边距，最小尺寸。 | number | 4 |
| motionDurationMid | 动效播放速度，中速。用于中型元素动画交互 | string | 0.2s |
| motionDurationSlow | 动效播放速度，慢速。用于大型元素如面板动画交互 | string | 0.3s |
| motionEaseInOutCirc | 预设动效曲率 | string | cubic-bezier(0.78, 0.14, 0.15, 0.86)[](https://cubic-bezier.com/#0.78,0.14,0.15,0.86) |
| motionEaseInQuint | 预设动效曲率 | string | cubic-bezier(0.755, 0.05, 0.855, 0.06)[](https://cubic-bezier.com/#0.755,0.05,0.855,0.06) |
| motionEaseOutCirc | 预设动效曲率 | string | cubic-bezier(0.08, 0.82, 0.17, 1)[](https://cubic-bezier.com/#0.08,0.82,0.17,1) |
| motionEaseOutQuint | 预设动效曲率 | string | cubic-bezier(0.23, 1, 0.32, 1)[](https://cubic-bezier.com/#0.23,1,0.32,1) |
| padding | 控制元素的内间距。 | number | 16 |
| paddingSM | 控制元素的小内间距。 | number | 12 |
| paddingXS | 控制元素的特小内间距。 | number | 8 |
| paddingXXS | 控制元素的极小内间距。 | number | 4 |
| sizePopupArrow | 组件箭头的尺寸 | number | 16 |

## FAQ

### 当我指定了 DatePicker/RangePicker 的 mode 属性后，点击后无法选择年份/月份？

请参考[常见问答](https://ant.design/docs/react/faq-cn#mode-cannot-select-year-month)

### 为何日期选择年份后返回的是日期面板而不是月份面板？

当用户选择完年份后，系统会直接切换至日期面板，而非显式提供月份选择。这样做的设计在于用户只需进行一次点击即可完成年份修改，无需再次点击进入月份选择界面，从而减少了用户的操作负担，同时也避免需要额外感知月份的记忆负担。

### 如何在 DatePicker 中使用自定义日期库（如 Moment.js ）？

请参考[《使用自定义日期库》](https://ant.design/docs/react/use-custom-date-library-cn#datepicker)

### 为什么时间类组件的国际化 locale 设置不生效？

参考 FAQ [为什么时间类组件的国际化 locale 设置不生效？](https://ant.design/docs/react/faq-cn#date-locale-not-working)。

### 如何修改周的起始日？

请使用正确的[语言包](https://ant.design/docs/react/i18n-cn)（[#5605](https://github.com/ant-design/ant-design/issues/5605)），或者修改 dayjs 的 `locale` 配置：[https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx](https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx)

js

import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('zh-cn', {

 weekStart: 0,

});

### 为何使用 `panelRender` 时，原来面板无法切换？

当你通过 `panelRender` 动态改变层级结构时，会使得原本的 Panel 被当做新的节点删除并创建。这使得其原本的状态会被重置，保持结构稳定即可。详情请参考 [#27263](https://github.com/ant-design/ant-design/issues/27263)。

### 如何理解禁用时间日期？

欢迎阅读博客[《为什么禁用日期这么难？》](https://ant.design/docs/blog/picker-cn)了解如何使用。
