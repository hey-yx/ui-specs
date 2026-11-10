---
title: "TDesign · Switch 开关"
source: https://tdesign.tencent.com/vue/components/switch
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-switch
publisher: "腾讯"
---

# TDesign · Switch 开关

> 来源：[https://tdesign.tencent.com/vue/components/switch](https://tdesign.tencent.com/vue/components/switch)

---

### 基础开关

不带描述，最基础的开关。

### 带描述的开关

开关内部带有文字或图标等描述，含义对应开关当前状态，切换时文字同步切换。视觉上更加醒目，用于需要描述当前开关对应状态及含义，更直观且方便用户理解。

### 不同状态的开关

提供 normal、loading 和 disabled 3种状态的开关。根据不同场景设置对应状态。

### 不同大小的开关

提供 大、中（默认）、小 3种开关。

### Switch Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| beforeChange | Function | - | Switch 切换状态前的回调方法，常用于需要发起异步请求的场景，回调返回值支持布尔和 Promise 类型，返回`false`或 Promise reject不继续执行change，否则则继续执行。TS 类型：`() => boolean \| Promise<boolean>` | N |
| customValue | Array | - | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：`Array<SwitchValue>` | N |
| disabled | Boolean | - | 是否禁用组件 | N |
| label | Array / Slot / Function | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'。TS 类型：`Array<string \| TNode> \| TNode<{ value: SwitchValue }>`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| loading | Boolean | false | 是否处于加载中状态 | N |
| size | String | medium | 开关尺寸。可选项：small/medium/large | N |
| value | String / Number / Boolean | - | 开关值。支持语法糖 `v-model`。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/switch/type.ts) | N |
| defaultValue | String / Number / Boolean | - | 开关值。非受控属性。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/switch/type.ts) | N |
| onChange | Function |  | TS 类型：`(value: SwitchValue) => void`  数据发生变化时触发 | N |

### Switch Events

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | `(value: SwitchValue)` | 数据发生变化时触发 |

### 何时使用

需要表示开关状态或仅有两种状态之间的切换时；

需要操作后立即生效时。

### 组件常见用法

##### 与对话框搭配使用，当开启或关闭开关会带来操作风险时，可利用对话框进行二次确认。

![](https://tdesign.gtimg.com/site/design/guide/switch/switch-1@2x.png)

### 推荐/慎用示例

##### 开关文案要准确简洁，只需表达所控制的内容，避免加入逻辑词语或与开关作用相反的内容。

![](https://tdesign.gtimg.com/site/design/guide/switch/switch-2@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/switch/switch-3@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

---

### 相似组件

| 组件名 | 何时使用 |
| --- | --- |
| [开关](https://tdesign.tencent.com/vue/components/switch) | 开关操作后，程序立即执行相关操作 |
| [多选框](https://tdesign.tencent.com/vue/components/checkbox) | 多选框一般用在表单里，仅反映当前的选择状态，需要点击额外的提交按钮后生效。 |
