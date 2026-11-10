---
title: "TDesign · Radio 单选框"
source: https://tdesign.tencent.com/vue/components/radio
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-radio
publisher: "腾讯"
---

# TDesign · Radio 单选框

> 来源：[https://tdesign.tencent.com/vue/components/radio](https://tdesign.tencent.com/vue/components/radio)

---

### 基础单选框

最简单的单选框形式，常用于表单中数据选项的选择。

### 按钮单选框

按钮形式的单选框，选项更明显突出，适合强调选项的场景。

##### 边框型单选按钮

##### 填充型单选按钮

### 不同尺寸的按钮单选框

提供大、中（默认）、小三种单选框。

### 成组的单选框

将单选框按一定属性组合使用的单选框组。

### Radio Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| allowUncheck | Boolean | false | 是否允许取消选中 | N |
| checked | Boolean | false | 是否选中。支持语法糖 `v-model` | N |
| defaultChecked | Boolean | false | 是否选中。非受控属性 | N |
| default | String / Slot / Function | - | 单选按钮内容，同 label。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| disabled | Boolean | undefined | 是否为禁用态。如果存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。优先级：Radio.disabled > RadioGroup.disabled > Form.disabled | N |
| label | String / Slot / Function | - | 主文案。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| name | String | - | HTML 元素原生属性 | N |
| readonly | Boolean | undefined | 只读状态 | N |
| value | String / Number / Boolean | undefined | 单选按钮的值。TS 类型：`T` | N |
| onChange | Function |  | TS 类型：`(checked: boolean, context: { e: Event }) => void`  选中状态变化时触发 | N |
| onClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击时触发，一般用于外层阻止冒泡场景 | N |

### Radio Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(checked: boolean, context: { e: Event })` | 选中状态变化时触发 |
| click | `(context: { e: MouseEvent })` | 点击时触发，一般用于外层阻止冒泡场景 |

### RadioGroup Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| allowUncheck | Boolean | false | 是否允许取消选中 | N |
| disabled | Boolean | undefined | 是否禁用全部子单选框。优先级：Radio.disabled > RadioGroup.disabled > Form.disabled | N |
| name | String | - | HTML 元素原生属性 | N |
| options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string \| TNode; value?: string \| number \| boolean; disabled?: boolean }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/radio/type.ts) | N |
| readonly | Boolean | undefined | 只读状态 | N |
| size | String | medium | 组件尺寸【讨论中】。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| theme | String | radio | 组件风格。可选项：radio/button | N |
| value | String / Number / Boolean | - | 选中的值。支持语法糖 `v-model`。TS 类型：`T` `type RadioValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/radio/type.ts) | N |
| defaultValue | String / Number / Boolean | - | 选中的值。非受控属性。TS 类型：`T` `type RadioValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/radio/type.ts) | N |
| variant | String | outline | 单选组件按钮形式。可选项：outline/primary-filled/default-filled | N |
| onChange | Function |  | TS 类型：`(value: T, context: { e: Event; name?:string }) => void`  选中值发生变化时触发, `context.name` 指 RadioGroup 的 name 属性 | N |

### RadioGroup Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(value: T, context: { e: Event; name?:string })` | 选中值发生变化时触发, `context.name` 指 RadioGroup 的 name 属性 |

### 何时使用

用于在多个互斥的备选项中选中一个选项时。

### 组件搭配使用

##### 与文字提示搭配使用，当单选框需要对某种状态进行说明时，利用文字提示进行解释说明。

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-1@2x.png)

### 推荐/慎用示例

##### 带有详情信息的单选框，建议就近展开相关内容，不要用单选框触发一个弹窗。

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-2@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-3@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 在表单中不要用单选框开启一个功能，建议使用多选框或开关来开启或关闭一个功能。

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-4@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-5@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 单选框选项为外显组件，选项数量不宜过多，当界面空间承载有限时，可考虑使用下拉选择。

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-6@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/radio/radio-7@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

### 相似组件

| 组件名 | 何时使用 |
| --- | --- |
| [单选框](https://tdesign.tencent.com/vue/components/radio) | 需要从一组互斥的选项中仅选择一个选项时 |
| [下拉菜单](https://tdesign.tencent.com/vue/components/dropdown) | 需要在有限的空间内，需要承载多种操作，并且不影响页面结构时；需要将不常用的操作进行收纳，减少对空间的占用时。 |
