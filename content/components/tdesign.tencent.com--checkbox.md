---
title: "TDesign · Checkbox 多选框"
source: https://tdesign.tencent.com/vue/components/checkbox
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-checkbox
publisher: "腾讯"
---

# TDesign · Checkbox 多选框

> 来源：[https://tdesign.tencent.com/vue/components/checkbox](https://tdesign.tencent.com/vue/components/checkbox)

---

### 基础多选框

最简单的多选框形式，常用于表单中数据多选的场景。

### 联动多选框

联动多选框指多选框与其他组件配合使用。

### 成组的多选框组

将多选框按一定属性组合使用的多选框组。

### 受控类多选框

多选框支持受控和非受控使用方式。

### Checkbox Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| checkAll | Boolean | false | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 | N |
| checked | Boolean | false | 是否选中。支持语法糖 `v-model` | N |
| defaultChecked | Boolean | false | 是否选中。非受控属性 | N |
| default | String / Slot / Function | - | 多选框内容，同 label。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| disabled | Boolean | undefined | 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled | N |
| indeterminate | Boolean | false | 是否为半选 | N |
| label | String / Slot / Function | - | 主文案。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| lazyLoad | Boolean | false | 是否启用懒加载。数据量加大时建议开启；加载复杂内容或大量图片时建议开启 | N |
| name | String | - | HTML 元素原生属性 | N |
| readonly | Boolean | false | 只读状态 | N |
| value | String / Number / Boolean | - | 多选框的值。TS 类型：`string \| number \| boolean` | N |
| onChange | Function |  | TS 类型：`(checked: boolean, context: { e: Event }) => void`  值变化时触发 | N |

### Checkbox Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(checked: boolean, context: { e: Event })` | 值变化时触发 |

### CheckboxGroup Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| disabled | Boolean | undefined | 是否禁用组件，默认为 false。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled | N |
| lazyLoad | Boolean | false | 是否启用懒加载。数据量加大时建议开启；加载复杂内容或大量图片时建议开启 | N |
| max | Number | undefined | 支持最多选中的数量 | N |
| name | String | - | 统一设置内部复选框 HTML 属性 | N |
| options | Array | - | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj extends TdCheckboxProps { text?: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts) | N |
| value | Array | [] | 选中值。支持语法糖 `v-model`。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts) | N |
| defaultValue | Array | [] | 选中值。非受控属性。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts) | N |
| onChange | Function |  | TS 类型：`(value: T, context: CheckboxGroupChangeContext) => void`  值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中，`context.option` 表示当前变化的数据项。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts)。  `interface CheckboxGroupChangeContext { e: Event; current: string \| number \| boolean; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }` | N |

### CheckboxGroup Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(value: T, context: CheckboxGroupChangeContext)` | 值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中，`context.option` 表示当前变化的数据项。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts)。  `interface CheckboxGroupChangeContext { e: Event; current: string \| number \| boolean; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }` |

### 何时使用

需要从一个数据集中选择多个选项时；

需要对两种状态进行切换时（选中或未选中，打开或关闭），可单独使用多选框；

需要一个标记控件，通过触发操作按钮后才生效时；

### 组件搭配使用

##### 与气泡提示搭配使用。多选框所在选项为必选项时，用户漏选则弹出气泡提示。

![](https://tdesign.gtimg.com/site/design/guide/checkbox/checkbox-1@2x.png)

---

##### 与对话框搭配使用。多选框所在选项勾选时需警示或二次确认时，点击后可弹出模态对话框提示。

![](https://tdesign.gtimg.com/site/design/guide/checkbox/checkbox-2@2x.png)

### 常见用法

##### 多选框可在表单中单独使用。

![](https://tdesign.gtimg.com/site/design/guide/checkbox/checkbox-3@2x.png)

---

##### 若需要通过操作多选框隐藏部分内容，可以使用就地隐藏/展开的方式。

![](https://tdesign.gtimg.com/site/design/guide/checkbox/checkbox-4@2x.png)

---

### 推荐/慎用示例

##### 当选项较多且字段长度不一时，建议将多选框对齐。

![](https://tdesign.gtimg.com/site/design/guide/checkbox/checkbox-5@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/checkbox/checkbox-6@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

### 相似组件

| 组件名 | 何时使用 |
| --- | --- |
| [多选框](https://tdesign.tencent.com/vue/components/checkbox) | 标记控件，需要与“提交”等操作结合使用。 |
| [开关](https://tdesign.tencent.com/vue/components/switch) | 即时生效的控件，可单独使用。 |
