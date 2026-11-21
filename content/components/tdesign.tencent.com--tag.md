---
title: "TDesign · Tag 标签"
source: https://tdesign.tencent.com/vue/components/tag
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-tag
publisher: "腾讯"
---

# TDesign · Tag 标签

> 来源：[https://tdesign.tencent.com/vue/components/tag](https://tdesign.tencent.com/vue/components/tag)

---

### 基础标签

基础标签为默认的标签样式。适用于常规表单。

### 带图标的标签

在标签内嵌入图标。适用于用图标来辅助标签分类，或表达标签的属性。

### 可删除和添加标签

可删除或添加的标签。添加标签可组合输入框组件使用。

### 可选择标签

标签有已选和未选两种状态，可以通过点击标签来切换。类似多选框的效果。可以通过 `checkedProps` 设置任意风格选中态，`uncheckedProps`设置任意风格未选中状态。

### 可选择标签组

![](https://tdesign.gtimg.com/site/avatar.jpg)

![](https://tdesign.gtimg.com/site/avatar.jpg)

![](https://tdesign.gtimg.com/site/avatar.jpg)

![](https://tdesign.gtimg.com/site/avatar.jpg)

![](https://tdesign.gtimg.com/site/avatar.jpg)

![](https://tdesign.gtimg.com/site/avatar.jpg)

### 超长省略文本标签

通过 `maxWidth` 设置最大宽度，超出部分自动省略。

### 不同尺寸的标签

提供大、中（默认）、小三种尺寸。

### 不同形状的标签

提供方形、圆角方形、标记型三种形状。

### 自定义标签颜色

`theme`提供的颜色不满足业务需求的时候，可以通过`color` 属性自定义颜色

调整颜色查看效果rgb(0, 82, 217)

### 自定义颜色

调整颜色查看效果rgb(0, 82, 217)

### Tag Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| closable | Boolean | false | 标签是否可关闭 | N |
| color | String | - | 自定义标签颜色 | N |
| content | String / Slot / Function | - | 组件子元素。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| default | String / Slot / Function | - | 组件子元素，同 `content`。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N |
| icon | Slot / Function | undefined | 标签中的图标，可自定义图标呈现。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| maxWidth | String / Number | - | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 | N |
| shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N |
| size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| theme | String | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success | N |
| title | String | - | 标签标题，在标签hover时展示，默认为标签内容 | N |
| variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N |
| onClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击时触发 | N |
| onClose | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  如果关闭按钮存在，点击关闭按钮时触发 | N |

### Tag Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| click | `(context: { e: MouseEvent })` | 点击时触发 |
| close | `(context: { e: MouseEvent })` | 如果关闭按钮存在，点击关闭按钮时触发 |

### CheckTag Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| checked | Boolean | - | 标签选中的状态，默认风格（theme=default）才有选中态。支持语法糖 `v-model` | N |
| defaultChecked | Boolean | - | 标签选中的状态，默认风格（theme=default）才有选中态。非受控属性 | N |
| checkedProps | Object | - | 透传标签选中态属性。TS 类型：`TdTagProps` | N |
| content | String / Number / Array / Slot / Function | - | 组件子元素；传入数组时：[选中内容，非选中内容]。TS 类型：`string \| number \| string[] \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| default | String / Slot / Function | - | 组件子元素，默认插槽。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N |
| size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| uncheckedProps | Object | - | 透传标签未选态属性。TS 类型：`TdTagProps` | N |
| value | String / Number | - | 标签唯一标识，一般用于标签组场景，单个可选择标签无需设置 | N |
| onChange | Function |  | TS 类型：`(checked: boolean, context: CheckTagChangeContext) => void`  状态切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts)。  `interface CheckTagChangeContext { e: MouseEvent \| KeyboardEvent; value: string \| number }` | N |
| onClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`  点击标签时触发 | N |

### CheckTag Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(checked: boolean, context: CheckTagChangeContext)` | 状态切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts)。  `interface CheckTagChangeContext { e: MouseEvent \| KeyboardEvent; value: string \| number }` |
| click | `(context: { e: MouseEvent })` | 点击标签时触发 |

### CheckTagGroup Props

| 名称 | 类型 | 默认值 | 描述 | 必传 |
| --- | --- | --- | --- | --- |
| checkedProps | Object | - | 透传标签选中态属性。TS 类型：`TdTagProps` | N |
| multiple | Boolean | false | 是否支持选中多个标签 | N |
| options | Array | - | 标签选项列表。TS 类型：`CheckTagGroupOption[]` `interface CheckTagGroupOption extends TdCheckTagProps { label: string \| TNode; value: string \| number }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts) | N |
| uncheckedProps | Object | - | 透传标签未选态属性。TS 类型：`TdTagProps` | N |
| value | Array | [] | 选中标签值。支持语法糖 `v-model`。TS 类型：`CheckTagGroupValue` `type CheckTagGroupValue = Array<string \| number>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts) | N |
| defaultValue | Array | [] | 选中标签值。非受控属性。TS 类型：`CheckTagGroupValue` `type CheckTagGroupValue = Array<string \| number>`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts) | N |
| onChange | Function |  | TS 类型：`(value: CheckTagGroupValue, context: CheckTagGroupChangeContext) => void`  [详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts)。  `interface CheckTagGroupChangeContext { type: 'check' \| 'uncheck'; e: MouseEvent \| KeyboardEvent; value: string \| number }` | N |

### CheckTagGroup Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(value: CheckTagGroupValue, context: CheckTagGroupChangeContext)` | [详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tag/type.ts)。  `interface CheckTagGroupChangeContext { type: 'check' \| 'uncheck'; e: MouseEvent \| KeyboardEvent; value: string \| number }` |

### 何时使用

需要标记信息内容的属性和维度时；

数据量较多，需要通过关键词快速获取相关内容时；

用户需要以自己习惯的方式对数据进行分类时。

### 组件搭配使用

##### 与列表搭配使用，可以通关标签对列表中的内容进行筛选。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-1@2x.png)

---

##### 与搜索框搭配使用，可以减少用户输入步骤，进行关键词快速检索。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-2@2x.png)

---

##### 与按钮搭配使用，可以对标签进行管理。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-3@2x.png)

### 推荐/慎用示例

##### 标签在样式上应与文字信息做区分，避免用户忽略标签的交互作用。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-4@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-5@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 每个标签字数不宜过长，应限制在 2-6 个字，字数太长会造成阅读和检索困难。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-6@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-7@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 标签不宜添加过多，一般控制在 3-5 个，太多关键词堆砌会造成用户不易查找。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-8@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-9@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

##### 标签应保证与文章内容的相关性，避免用户对内容产生误判。

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-10@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tag/tag-11@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

### 相似组件

按钮在使用过程中，需要注意区分与 菜单、文字链 的区别。

| 组件名 | 何时使用 |
| --- | --- |
| [标签](https://tdesign.tencent.com/vue/components/tag) | 需要标记信息内容的属性和维度时；数据量较多，需要通过关键词快速获取相关内容时；用户需要以自己习惯的方式对数据进行分类时。 |
| [按钮](https://tdesign.tencent.com/vue/components/button) | 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。 |
