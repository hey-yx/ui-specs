---
title: "TDesign · Date Picker 日期选择器"
source: https://tdesign.tencent.com/vue/components/date-picker
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-date-picker
publisher: "腾讯"
---

# TDesign · Date Picker 日期选择器

> 来源：[https://tdesign.tencent.com/vue/components/date-picker](https://tdesign.tencent.com/vue/components/date-picker)

---

### 年份选择器

用于年份的选择。用户仅需输入年份信息时使用，常用于如年账单等按年记录数据的查询场景。

### 月份选择器

用于月份的选择。用户仅需输入月份信息时使用。

### 季度选择器

用于季度的选择。用户仅需输入季度信息时使用。

### 周选择器

用于周的选择。用户仅需输入年份 + 周信息时使用。

### 日期选择器

用于具体日期的选择。用户仅需要输入非常具体的日期信息时使用。

### 日期多选选择器

用于日期多选的选择。

### 日期时间选择器

用于日期和时间相关联的选择。用户需要输入包含时间在内的日期时使用。

### 日期区间选择器

用于某一段日期的选择。用户需要输入一段日期区间时使用。

### 带快捷标签的日期选择器

具有可提前设置的时间标签。当日期信息具有规律性，需要点击标签快捷输入时。

### 可禁用日期的选择器

可将不支持用户选择的日期禁止点击。

### 自定义日期可选择范围

通过 `range` 属性，定义日期可选范围。在范围外的日期不可被选择。

`range` 决定了可选择的范围， 默认以左区间为展示年月，但如果你有特定的展示需求，可以与 `panelActiveDate` 属性一起使用，决定当前默认展示的年月。

### 指定周起始日的选择器

可以通过 `firstDayOfWeek` 属性指定一周从星期几开始，仅在日期选择时(`mode = date`) 时有效，默认为 1 即从周一开始，如下可以设置为周日开始。

### 自定义图标的选择器

支持通过 `prefixIcon` 和 `suffixIcon` 自定义设置前缀和后缀图标。

### 自定义单元格的选择器

支持通过 `cell` 自定义任意日期单元的渲染内容

### 日期选择面板单独使用

支持 `DatePickerPanel` 和 `DateRangePickerPanel` 单独使用场景，可以自行组装日期选择器。

| 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| --- | --- | --- | --- | --- | --- | --- |
| 26 | 27 | 28 | 29 | 30 | 31 | 1 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| 23 | 24 | 25 | 26 | 27 | 28 | 29 |
| 30 | 1 | 2 | 3 | 4 | 5 | 6 |
| 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| --- | --- | --- | --- | --- | --- | --- |
| 26 | 27 | 28 | 29 | 30 | 31 | 1 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| 23 | 24 | 25 | 26 | 27 | 28 | 29 |
| 30 | 1 | 2 | 3 | 4 | 5 | 6 |
              - 00
              - 01
              - 02
              - 03
              - 04
              - 05
              - 06
              - 07
              - 08
              - 09
              - 10
              - 11
              - 12
              - 13
              - 14
              - 15
              - 16
              - 17
              - 18
              - 19
              - 20
              - 21
              - 22
              - 23
              - 00
              - 01
              - 02
              - 03
              - 04
              - 05
              - 06
              - 07
              - 08
              - 09
              - 10
              - 11
              - 12
              - 13
              - 14
              - 15
              - 16
              - 17
              - 18
              - 19
              - 20
              - 21
              - 22
              - 23
              - 24
              - 25
              - 26
              - 27
              - 28
              - 29
              - 30
              - 31
              - 32
              - 33
              - 34
              - 35
              - 36
              - 37
              - 38
              - 39
              - 40
              - 41
              - 42
              - 43
              - 44
              - 45
              - 46
              - 47
              - 48
              - 49
              - 50
              - 51
              - 52
              - 53
              - 54
              - 55
              - 56
              - 57
              - 58
              - 59
              - 00
              - 01
              - 02
              - 03
              - 04
              - 05
              - 06
              - 07
              - 08
              - 09
              - 10
              - 11
              - 12
              - 13
              - 14
              - 15
              - 16
              - 17
              - 18
              - 19
              - 20
              - 21
              - 22
              - 23
              - 24
              - 25
              - 26
              - 27
              - 28
              - 29
              - 30
              - 31
              - 32
              - 33
              - 34
              - 35
              - 36
              - 37
              - 38
              - 39
              - 40
              - 41
              - 42
              - 43
              - 44
              - 45
              - 46
              - 47
              - 48
              - 49
              - 50
              - 51
              - 52
              - 53
              - 54
              - 55
              - 56
              - 57
              - 58
              - 59
| 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| --- | --- | --- | --- | --- | --- | --- |
| 31 | 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| 21 | 22 | 23 | 24 | 25 | 26 | 27 |
| 28 | 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| --- | --- | --- | --- | --- | --- | --- |
| 28 | 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| 21 | 22 | 23 | 24 | 25 | 26 | 27 |
| 28 | 29 | 30 | 31 | 1 | 2 | 3 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| --- | --- | --- | --- | --- | --- | --- |
| 26 | 27 | 28 | 29 | 30 | 31 | 1 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| 23 | 24 | 25 | 26 | 27 | 28 | 29 |
| 30 | 1 | 2 | 3 | 4 | 5 | 6 |
               - 00
               - 01
               - 02
               - 03
               - 04
               - 05
               - 06
               - 07
               - 08
               - 09
               - 10
               - 11
               - 12
               - 13
               - 14
               - 15
               - 16
               - 17
               - 18
               - 19
               - 20
               - 21
               - 22
               - 23
               - 00
               - 01
               - 02
               - 03
               - 04
               - 05
               - 06
               - 07
               - 08
               - 09
               - 10
               - 11
               - 12
               - 13
               - 14
               - 15
               - 16
               - 17
               - 18
               - 19
               - 20
               - 21
               - 22
               - 23
               - 24
               - 25
               - 26
               - 27
               - 28
               - 29
               - 30
               - 31
               - 32
               - 33
               - 34
               - 35
               - 36
               - 37
               - 38
               - 39
               - 40
               - 41
               - 42
               - 43
               - 44
               - 45
               - 46
               - 47
               - 48
               - 49
               - 50
               - 51
               - 52
               - 53
               - 54
               - 55
               - 56
               - 57
               - 58
               - 59
               - 00
               - 01
               - 02
               - 03
               - 04
               - 05
               - 06
               - 07
               - 08
               - 09
               - 10
               - 11
               - 12
               - 13
               - 14
               - 15
               - 16
               - 17
               - 18
               - 19
               - 20
               - 21
               - 22
               - 23
               - 24
               - 25
               - 26
               - 27
               - 28
               - 29
               - 30
               - 31
               - 32
               - 33
               - 34
               - 35
               - 36
               - 37
               - 38
               - 39
               - 40
               - 41
               - 42
               - 43
               - 44
               - 45
               - 46
               - 47
               - 48
               - 49
               - 50
               - 51
               - 52
               - 53
               - 54
               - 55
               - 56
               - 57
               - 58
               - 59

### 不限制日期区间选择范围的选择器

## FAQ

### 后端数据格式要求比较特殊，如何快捷格式化日期？

`onChange` 回调事件中会返回用 `dayjs` 包装好的当前选中的日期对象，可以自行借助第三方库格式化也可以使用提供的 `dayjs` 对象进行自定义转化。

### DatePicker Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| allowInput | Boolean | false | 是否允许输入日期 | N |
| borderless | Boolean | false | 无边框模式 | N |
| clearable | Boolean | false | 是否显示清除按钮 | N |
| defaultTime | String | '00:00:00' | 时间选择器默认值，当 value/defaultValue 未设置值时有效 | N |
| disableDate | Object / Array / Function | - | 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。`{ from: 'A', to: 'B' }` 表示在 A 到 B 之间的日期会被禁用。`{ before: 'A', after: 'B' }` 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用。TS 类型：`DisableDate` `type DisableDate = Array<DateValue> \| DisableDateObj \| ((date: DateValue) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| disableTime | Function | - | 禁用时间项的配置函数，仅在日期时间选择器中可用。TS 类型：`(time: Date) => Partial<{ hour: Array<number>, minute: Array<number>, second: Array<number>, millisecond: Array<number> }>` | N |
| disabled | Boolean | undefined | 是否禁用组件 | N |
| enableTimePicker | Boolean | false | 是否显示时间选择 | N |
| firstDayOfWeek | Number | 7 | 第一天从星期几开始。可选项：1/2/3/4/5/6/7 | N |
| format | String | 'YYYY-MM-DD' | 仅用于格式化日期显示的格式，不影响日期值。注意和 `valueType` 的区别，`valueType`会直接决定日期值 `value` 的格式。全局配置默认为：'YYYY-MM-DD'，[详细文档](https://day.js.org/docs/en/display/format) | N |
| inputProps | Object | - | 透传给输入框（Input）组件的参数。TS 类型：`InputProps`，[Input API Documents](https://tdesign.tencent.com/vue/components/input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| label | String / Slot / Function | - | 左侧文本。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| mode | String | date | 选择器模式。可选项：year/quarter/month/week/date | N |
| multiple | Boolean | false | 支持多选日期，但不支持在range-picker中，或与enableTimePicker、allowInput 一起使用。TS 类型：`boolean` | N |
| placeholder | String / Array | undefined | 占位符。TS 类型：`string` | N |
| popupProps | Object | - | 透传给 popup 组件的参数。TS 类型：`PopupProps`，[Popup API Documents](https://tdesign.tencent.com/vue/components/popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| prefixIcon | Slot / Function | - | 用于自定义组件前置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| presets | Object | - | 预设快捷日期选择，示例：`{ '元旦': '2021-01-01', '昨天': dayjs().subtract(1, 'day').format('YYYY-MM-DD'), '特定日期': () => ['2021-02-01'] }`。TS 类型：`PresetDate` `interface PresetDate { [name: string]: DateValue \| (() => DateValue) }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| presetsPlacement | String | bottom | 预设面板展示区域（包含确定按钮）。可选项：left/top/right/bottom | N |
| readonly | Boolean | false | 只读状态，值为真会隐藏输入框，且无法打开下拉框 | N |
| size | String | medium | 输入框尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| status | String | default | 输入框状态。可选项：default/success/warning/error | N |
| suffixIcon | Slot / Function | - | 用于自定义组件后置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| timePickerProps | Object | - | 透传 TimePicker 组件属性。TS 类型：`TimePickerProps`，[TimePicker API Documents](https://tdesign.tencent.com/vue/components/time-picker?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| tips | String / Slot / Function | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| value | String / Number / Array / Date | '' | 选中值。支持语法糖 `v-model`。TS 类型：`DateValue \| DateMultipleValue` `type DateValue = string \| number \| Date` `type DateMultipleValue = Array<DateValue>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| defaultValue | String / Number / Array / Date | '' | 选中值。非受控属性。TS 类型：`DateValue \| DateMultipleValue` `type DateValue = string \| number \| Date` `type DateMultipleValue = Array<DateValue>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| valueType | String | - | 用于格式化日期的值，仅支持部分格式，时间戳、日期等。⚠️ `YYYYMMDD` 这种格式不支持，请勿使用，如果希望支持可以给 `dayjs` 提个 PR。注意和 `format` 的区别，`format` 仅用于处理日期在页面中呈现的格式。`ValueTypeEnum` 即将废弃，请更为使用 `DatePickerValueType`。TS 类型：`DatePickerValueType` `type DatePickerValueType = 'time-stamp' \| 'Date' \| 'YYYY' \| 'YYYY-MM' \| 'YYYY-MM-DD' \| 'YYYY-MM-DD HH' \| 'YYYY-MM-DD HH:mm' \| 'YYYY-MM-DD HH:mm:ss' \| 'YYYY-MM-DD HH:mm:ss:SSS'` `type ValueTypeEnum = DatePickerValueType`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| cancelRangeSelectLimit | Boolean | false | 说明：默认的日期选择交互是根据点击前后日期的顺序来决定并且会加以限制。比如：用户先点击开始时间输入框，选择了一个日期例如2020-05-15，紧接着交互会自动将焦点跳到结束日期输入框，等待用户选择结束时间。此时用户只能选择大于2020-05-15的日期（之前的日期会被灰态禁止点击，限制用户的点击）。当该值传递`true`时，则取消该限制。 | N |
| onBlur | Function |  | TS 类型：`(context: { value: DateValue \| DateMultipleValue; e: FocusEvent }) => void`  当输入框失去焦点时触发 | N |
| onChange | Function |  | TS 类型：`(value: DateValue\| DateMultipleValue, context: { dayjsValue?: Dayjs, trigger?: DatePickerTriggerSource }) => void`  选中值发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `import { Dayjs } from 'dayjs'`    `type DatePickerTriggerSource = 'confirm' \| 'pick' \| 'enter' \| 'preset' \| 'clear' \| 'tag-remove'` | N |
| onClear | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  清空按钮点击时触发 | N |
| onConfirm | Function |  | TS 类型：`(context: { date: Date, e: MouseEvent }) => void`  如果存在“确定”按钮，则点击“确定”按钮时触发 | N |
| onFocus | Function |  | TS 类型：`(context: { value: DateValue \| DateMultipleValue; e: FocusEvent }) => void`  输入框获得焦点时触发 | N |
| onPick | Function |  | TS 类型：`(value: DateValue) => void`  面板选中值后触发 | N |
| onPresetClick | Function |  | TS 类型：`(context: { preset: PresetDate, e: MouseEvent }) => void`  点击预设按钮后触发 | N |

### DatePicker Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| blur | `(context: { value: DateValue \| DateMultipleValue; e: FocusEvent })` | 当输入框失去焦点时触发 |
| change | `(value: DateValue\| DateMultipleValue, context: { dayjsValue?: Dayjs, trigger?: DatePickerTriggerSource })` | 选中值发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `import { Dayjs } from 'dayjs'`    `type DatePickerTriggerSource = 'confirm' \| 'pick' \| 'enter' \| 'preset' \| 'clear' \| 'tag-remove'` |
| clear | `(context: { e: MouseEvent })` | 清空按钮点击时触发 |
| confirm | `(context: { date: Date, e: MouseEvent })` | 如果存在“确定”按钮，则点击“确定”按钮时触发 |
| focus | `(context: { value: DateValue \| DateMultipleValue; e: FocusEvent })` | 输入框获得焦点时触发 |
| pick | `(value: DateValue)` | 面板选中值后触发 |
| preset-click | `(context: { preset: PresetDate, e: MouseEvent })` | 点击预设按钮后触发 |

### DateRangePicker Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| allowInput | Boolean | false | 是否允许输入日期 | N |
| borderless | Boolean | false | 无边框模式 | N |
| clearable | Boolean | false | 是否显示清除按钮 | N |
| defaultTime | Array | ["00:00:00", "23:59:59"] | 时间选择器默认值，当 value/defaultValue 未设置值时有效。TS 类型：`string[]` | N |
| disableDate | Object / Array / Function | - | 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用。TS 类型：`DisableRangeDate` `type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' \| 'end'`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| disableTime | Function | - | 禁用时间项的配置函数，仅在日期区间选择器中开启时间展示时可用。TS 类型：`(times: Array<Date \| null>, context: { partial: DateRangePickerPartial }) => Partial<{ hour: Array<number>, minute: Array<number>, second: Array<number> }>` | N |
| disabled | Boolean | undefined | 是否禁用组件 | N |
| enableTimePicker | Boolean | false | 是否显示时间选择 | N |
| firstDayOfWeek | Number | - | 第一天从星期几开始。可选项：1/2/3/4/5/6/7 | N |
| format | String | - | 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) | N |
| label | String / Slot / Function | - | 左侧文本。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| mode | String | date | 选择器模式。可选项：year/quarter/month/week/date | N |
| panelPreselection | Boolean | true | 在开始日期选中之前，面板是否显示预选状态，即是否高亮预选日期 | N |
| placeholder | String / Array | - | 占位符，值为数组表示可分别为开始日期和结束日期设置占位符。TS 类型：`string \| Array<string>` | N |
| popupProps | Object | - | 透传给 popup 组件的参数。TS 类型：`PopupProps`，[Popup API Documents](https://tdesign.tencent.com/vue/components/popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| prefixIcon | Slot / Function | - | 组件前置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| presets | Object | - | 预设快捷日期选择，示例：{ '特定日期范围': ['2021-01-01', '2022-01-01'], '本月': [dayjs().startOf('month'), dayjs().endOf('month')] }。TS 类型：`PresetRange` `interface PresetRange { [range: string]: DateRange \| (() => DateRange)}` `type DateRange = [DateValue, DateValue]`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| presetsPlacement | String | bottom | 预设面板展示区域（包含确定按钮）。可选项：left/top/right/bottom | N |
| rangeInputProps | Object | - | 透传给范围输入框 RangeInput 组件的参数。TS 类型：`RangeInputProps`，[RangeInput API Documents](https://tdesign.tencent.com/vue/components/range-input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| separator | String | - | 日期分隔符，支持全局配置，默认为 '-' | N |
| size | String | medium | 输入框尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| status | String | default | 输入框状态。可选项：default/success/warning/error | N |
| suffixIcon | Slot / Function | - | 组件后置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| timePickerProps | Object | - | 透传 TimePicker 组件属性。TS 类型：`TimePickerProps`，[TimePicker API Documents](https://tdesign.tencent.com/vue/components/time-picker?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| tips | String / Slot / Function | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| value | Array | [] | 选中值。支持语法糖 `v-model`。TS 类型：`DateRangeValue` `type DateRangeValue = Array<DateValue>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| defaultValue | Array | [] | 选中值。非受控属性。TS 类型：`DateRangeValue` `type DateRangeValue = Array<DateValue>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N |
| valueType | String | - | 用于格式化日期的值，仅支持部分格式，时间戳、日期等。⚠️ `YYYYMMDD` 这种格式不支持，请勿使用，如果希望支持可以给 `dayjs` 提个 PR。注意和 `format` 的区别，`format` 仅用于处理日期在页面中呈现的格式。可选项：time-stamp/Date/YYYY/YYYY-MM/YYYY-MM-DD/YYYY-MM-DD HH/YYYY-MM-DD HH:mm/YYYY-MM-DD HH:mm:ss/YYYY-MM-DD HH:mm:ss:SSS | N |
| onBlur | Function |  | TS 类型：`(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void`  当输入框失去焦点时触发 | N |
| onChange | Function |  | TS 类型：`(value: DateRangeValue, context: { dayjsValue?: Dayjs[], trigger?: DatePickerTriggerSource }) => void`  选中值发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `import { Dayjs } from 'dayjs'` | N |
| onConfirm | Function |  | TS 类型：`(context: { date: Date[], e: MouseEvent, partial: DateRangePickerPartial }) => void`  如果存在“确定”按钮，则点击“确定”按钮时触发 | N |
| onFocus | Function |  | TS 类型：`(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void`  输入框获得焦点时触发 | N |
| onInput | Function |  | TS 类型：`(context: { input: string; value: DateRangeValue; partial: DateRangePickerPartial; e: InputEvent }) => void`  输入框数据发生变化时触发，参数 input 表示输入内容，value 表示组件当前有效值 | N |
| onPick | Function |  | TS 类型：`(value: DateValue, context: PickContext) => void`  选中日期时触发，可能是开始日期，也可能是结束日期，第二个参数可以区分是开始日期或是结束日期。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `interface PickContext { e: MouseEvent; partial: DateRangePickerPartial }` | N |
| onPresetClick | Function |  | TS 类型：`(context: { preset: PresetDate, e: MouseEvent }) => void`  点击预设按钮后触发 | N |

### DateRangePicker Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| blur | `(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent })` | 当输入框失去焦点时触发 |
| change | `(value: DateRangeValue, context: { dayjsValue?: Dayjs[], trigger?: DatePickerTriggerSource })` | 选中值发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `import { Dayjs } from 'dayjs'` |
| confirm | `(context: { date: Date[], e: MouseEvent, partial: DateRangePickerPartial })` | 如果存在“确定”按钮，则点击“确定”按钮时触发 |
| focus | `(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent })` | 输入框获得焦点时触发 |
| input | `(context: { input: string; value: DateRangeValue; partial: DateRangePickerPartial; e: InputEvent })` | 输入框数据发生变化时触发，参数 input 表示输入内容，value 表示组件当前有效值 |
| pick | `(value: DateValue, context: PickContext)` | 选中日期时触发，可能是开始日期，也可能是结束日期，第二个参数可以区分是开始日期或是结束日期。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `interface PickContext { e: MouseEvent; partial: DateRangePickerPartial }` |
| preset-click | `(context: { preset: PresetDate, e: MouseEvent })` | 点击预设按钮后触发 |

### DatePickerPanel Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| defaultTime | String | '00:00:00' | 时间选择器默认值，当 value/defaultValue 未设置值时有效 | N |
| `Pick<DatePickerProps, 'value' \| 'defaultValue' \| 'disableDate' \| 'disableTime' \| 'enableTimePicker' \| 'firstDayOfWeek' \| 'format' \| 'mode' \| 'presets' \| 'presetsPlacement' \| 'timePickerProps'>` | - | - | 继承 `Pick<DatePickerProps, 'value' \| 'defaultValue' \| 'disableDate' \| 'disableTime' \| 'enableTimePicker' \| 'firstDayOfWeek' \| 'format' \| 'mode' \| 'presets' \| 'presetsPlacement' \| 'timePickerProps'>` 中的全部属性 | N |
| onCellClick | Function |  | TS 类型：`(context: { date: Date, e: MouseEvent }) => void`  点击日期单元格时触发 | N |
| onChange | Function |  | TS 类型：`(value: DateValue, context: { dayjsValue?: Dayjs, e?: MouseEvent, trigger?: DatePickerTriggerSource }) => void`  选中值发生变化时触发。参数 `context.trigger` 表示触发当前事件的来源，不同的模式触发来源也会不同 | N |
| onConfirm | Function |  | TS 类型：`(context: { date: Date, e: MouseEvent }) => void`  如果存在“确定”按钮，则点击“确定”按钮时触发 | N |
| onMonthChange | Function |  | TS 类型：`(context: { month: number, date: Date, e?: MouseEvent, trigger: DatePickerMonthChangeTrigger }) => void`  月份切换发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `type DatePickerMonthChangeTrigger = 'month-select' \| 'month-arrow-next' \| 'month-arrow-previous' \| 'today'` | N |
| onPanelClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击面板时触发 | N |
| onPresetClick | Function |  | TS 类型：`(context: { preset: PresetDate, e: MouseEvent }) => void`  点击预设按钮后触发 | N |
| onTimeChange | Function |  | TS 类型：`(context: { time: string, date: Date, trigger: DatePickerTimeChangeTrigger, e?: MouseEvent }) => void`  时间切换发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `type DatePickerTimeChangeTrigger = 'time-hour' \| 'time-minute' \| 'time-second'` | N |
| onYearChange | Function |  | TS 类型：`(context: { year: number, date: Date, trigger: DatePickerYearChangeTrigger, e?: MouseEvent }) => void`  年份切换发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `type DatePickerYearChangeTrigger = 'year-select' \| 'year-arrow-next' \| 'year-arrow-previous' \| 'today'` | N |

### DatePickerPanel Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| cell-click | `(context: { date: Date, e: MouseEvent })` | 点击日期单元格时触发 |
| change | `(value: DateValue, context: { dayjsValue?: Dayjs, e?: MouseEvent, trigger?: DatePickerTriggerSource })` | 选中值发生变化时触发。参数 `context.trigger` 表示触发当前事件的来源，不同的模式触发来源也会不同 |
| confirm | `(context: { date: Date, e: MouseEvent })` | 如果存在“确定”按钮，则点击“确定”按钮时触发 |
| month-change | `(context: { month: number, date: Date, e?: MouseEvent, trigger: DatePickerMonthChangeTrigger })` | 月份切换发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `type DatePickerMonthChangeTrigger = 'month-select' \| 'month-arrow-next' \| 'month-arrow-previous' \| 'today'` |
| panel-click | `(context: { e: MouseEvent })` | 点击面板时触发 |
| preset-click | `(context: { preset: PresetDate, e: MouseEvent })` | 点击预设按钮后触发 |
| time-change | `(context: { time: string, date: Date, trigger: DatePickerTimeChangeTrigger, e?: MouseEvent })` | 时间切换发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `type DatePickerTimeChangeTrigger = 'time-hour' \| 'time-minute' \| 'time-second'` |
| year-change | `(context: { year: number, date: Date, trigger: DatePickerYearChangeTrigger, e?: MouseEvent })` | 年份切换发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。  `type DatePickerYearChangeTrigger = 'year-select' \| 'year-arrow-next' \| 'year-arrow-previous' \| 'today'` |

### DateRangePickerPanel Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| defaultTime | Array | ["00:00:00", "23:59:59"] | 时间选择器默认值，当 value/defaultValue 未设置值时有效。TS 类型：`string[]` | N |
| `Pick<DateRangePickerProps, 'value'\| 'defaultValue' \| 'disableDate' \| 'enableTimePicker' \| 'firstDayOfWeek' \| 'format' \| 'mode' \| 'presets' \| 'presetsPlacement' \| 'panelPreselection' \| 'timePickerProps'>` | - | - | 继承 `Pick<DateRangePickerProps, 'value'\| 'defaultValue' \| 'disableDate' \| 'enableTimePicker' \| 'firstDayOfWeek' \| 'format' \| 'mode' \| 'presets' \| 'presetsPlacement' \| 'panelPreselection' \| 'timePickerProps'>` 中的全部属性 | N |
| onCellClick | Function |  | TS 类型：`(context: { date: Date[], partial: DateRangePickerPartial, e: MouseEvent }) => void`  点击日期单元格时触发 | N |
| onChange | Function |  | TS 类型：`(value: DateRangeValue, context: { dayjsValue?: Dayjs[], partial: DateRangePickerPartial, e?: MouseEvent, trigger?: DatePickerTriggerSource }) => void`  选中值发生变化时触发。参数 `context.trigger` 表示触发当前事件的来源，不同的模式触发来源也会不同 | N |
| onConfirm | Function |  | TS 类型：`(context: { date: Date[], e: MouseEvent }) => void`  如果存在“确定”按钮，则点击“确定”按钮时触发 | N |
| onMonthChange | Function |  | TS 类型：`(context: { month: number, date: Date[], partial: DateRangePickerPartial, e?: MouseEvent, trigger: DatePickerMonthChangeTrigger }) => void`  月份切换发生变化时触发 | N |
| onPanelClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击面板时触发 | N |
| onPresetClick | Function |  | TS 类型：`(context: { preset: PresetDate, e: MouseEvent }) => void`  点击预设按钮后触发 | N |
| onTimeChange | Function |  | TS 类型：`(context: { time: string, date: Date[], partial: DateRangePickerPartial, trigger: DatePickerTimeChangeTrigger, e?: MouseEvent }) => void`  时间切换发生变化时触发 | N |
| onYearChange | Function |  | TS 类型：`(context: { year: number, date: Date[], partial: DateRangePickerPartial, trigger: DatePickerYearChangeTrigger, e?: MouseEvent }) => void`  年份切换发生变化时触发 | N |

### DateRangePickerPanel Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| cell-click | `(context: { date: Date[], partial: DateRangePickerPartial, e: MouseEvent })` | 点击日期单元格时触发 |
| change | `(value: DateRangeValue, context: { dayjsValue?: Dayjs[], partial: DateRangePickerPartial, e?: MouseEvent, trigger?: DatePickerTriggerSource })` | 选中值发生变化时触发。参数 `context.trigger` 表示触发当前事件的来源，不同的模式触发来源也会不同 |
| confirm | `(context: { date: Date[], e: MouseEvent })` | 如果存在“确定”按钮，则点击“确定”按钮时触发 |
| month-change | `(context: { month: number, date: Date[], partial: DateRangePickerPartial, e?: MouseEvent, trigger: DatePickerMonthChangeTrigger })` | 月份切换发生变化时触发 |
| panel-click | `(context: { e: MouseEvent })` | 点击面板时触发 |
| preset-click | `(context: { preset: PresetDate, e: MouseEvent })` | 点击预设按钮后触发 |
| time-change | `(context: { time: string, date: Date[], partial: DateRangePickerPartial, trigger: DatePickerTimeChangeTrigger, e?: MouseEvent })` | 时间切换发生变化时触发 |
| year-change | `(context: { year: number, date: Date[], partial: DateRangePickerPartial, trigger: DatePickerYearChangeTrigger, e?: MouseEvent })` | 年份切换发生变化时触发 |

### 何时使用

当需要输入日期时；

当需要输入一个日期区间时；

多用于表单中日期输入，或数据筛选条件中进行日期条件输入时。

### 与页面布局相关

在页面中，日期选择器可放置于页面顶部或内容模块上方，与下方数据结果产生联动。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-1@2x.png)

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-2@2x.png)

### 组件搭配使用

##### 与表格搭配使用，按日期或日期区间对表格数据进行筛选。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-3@2x.png)

---

##### 与按钮单选框搭配使用，将用户高频关注的时间段设为默认选项，进行快捷切换以减少用户操作步骤。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-4@2x.png)

---

##### 与选择器搭配使用，对选择的颗粒度（年、月、日）进行切换，常用于日期选择器类型的选择。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-5@2x.png)

### 常见用法

在筛选实时数据时，如订单量、费用账单等，日期选择器禁止选择未发生的日期，避免筛选结果无数据。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-6@2x.png)

### 推荐/慎用示例

##### 带快捷标签选择器中标签内容尽可能简洁明了；如：使用“近 7 天”而非“最近 7 天数据”。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-7@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-8@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 带快捷标签选择器中标签数量最多不超过 5 个。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-9@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-10@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 录入出生年月日等具有特殊规则或用户熟悉的日期信息时，建议使用输入框而不是日期选择器，以提高操作效率。

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-11@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/date-picker/date-picker-12@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

### 相似组件

| 组件名 | 何时使用 |
| --- | --- |
| [日期选择器](https://tdesign.tencent.com/vue/components/datepicker) | 当用户需要输入日期时；当用户需要输入一个日期区间时；多用于表单中日期输入，或数据筛选条件中进行日期条件输入时。 |
| [时间选择器](https://tdesign.tencent.com/vue/components/timepicker) | 当在表单中需要时间输入，或表格中需要进行时间条件筛选时。 |
| [日 历](https://tdesign.tencent.com/vue/components/Calendar) | 当需要展示或操作与“日期”相关数据时使用，可支持年/月形式的切换。 |
