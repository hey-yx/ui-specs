---
title: "TDesign · Tooltip 文字提示"
source: https://tdesign.tencent.com/vue/components/tooltip
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-tdesign-tooltip
publisher: "腾讯"
---

# TDesign · Tooltip 文字提示

> 来源：[https://tdesign.tencent.com/vue/components/tooltip](https://tdesign.tencent.com/vue/components/tooltip)

---

### 基础用法

### 带箭头的文字提示

带箭头的文字提示有较明确的指向性。常用于有多个需要提示的信息并列放置时，对某个具体信息进行提示。

### 不带箭头的文字提示

不带箭头的文字提示没有明确指向性。常用于不需要针对性提示的场景中。

### 带主题色的文字提示

提供浅灰色、蓝色、绿色、红色、黄色主题的文字提示。

### 不同触发方式的文字提示

支持常见元素事件触发文字提示。

### 轻量文字提示

悬浮元素出现文字提示，不依赖 Popup，具体 API 请参考 `TooltipLite Props`

### 模拟超出省略原生属性

### 定时消失

### Tooltip Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| delay | Number | - | 【议案讨论中】延迟出现提示，用于异步加载提示信息需要延迟显示的业务场景下 | N |
| destroyOnClose | Boolean | true | 是否在关闭浮层时销毁浮层 | N |
| duration | Number | - | 用于设置提示默认显示多长时间之后消失，初始第一次有效，单位：毫秒 | N |
| placement | String | top | 浮层出现位置。TS 类型：`'mouse' \| PopupPlacement`，[Popup API Documents](https://tdesign.tencent.com/vue/components/popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts) | N |
| showArrow | Boolean | true | 是否显示浮层箭头 | N |
| theme | String | default | 文字提示风格。可选项：default/primary/success/danger/warning/light | N |
| `Omit<PopupProps, 'placement'>` | - | - | 继承 `Omit<PopupProps, 'placement'>` 中的全部 API | N |

### TooltipLite Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| content | String / Slot / Function | - | 文字提示内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |
| placement | String | top | 提示浮层出现的位置。可选项：top/bottom | N |
| showArrow | Boolean | true | 是否显示箭头 | N |
| showShadow | Boolean | true | 文字提示浮层是否需要阴影 | N |
| theme | String | default | 组件风格，有亮色模式和暗色模式两种。可选项：light/default | N |
| triggerElement | String / Slot / Function | - | 触发元素。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N |

### 何时使用

无需常驻展示，需要鼠标移入来展示文字解释说明时。

### 组件搭配使用

##### 与超链接搭配，可点击超链接从文字提示跳转到对应链接的页面。

![](https://tdesign.gtimg.com/site/design/guide/tooltip/tooltip-1@2x.png)

### 组件常见用法

##### 在表单中使用时，通常位于填写项标题后方。

![](https://tdesign.gtimg.com/site/design/guide/tooltip/tooltip-2@2x.png)

---

##### 当有字段需要解释说明时，通常位于字段后方。

![](https://tdesign.gtimg.com/site/design/guide/tooltip/tooltip-3@2x.png)

---

##### 当文案过长无法完整显示时，通常用于补充显示完整文案。

![](https://tdesign.gtimg.com/site/design/guide/tooltip/tooltip-4@2x.png)

### 推荐/慎用示例

##### 文字提示信息不宜过多，一般不超过三行。

![](https://tdesign.gtimg.com/site/design/guide/tooltip/tooltip-5@2x.png)

![](https://tdesign.gtimg.com/site/doc/good.png)

![](https://tdesign.gtimg.com/site/design/guide/tooltip/tooltip-6@2x.png)

![](https://tdesign.gtimg.com/site/doc/bad.png)

### 相似组件

| 组件名 | 何时使用 |
| --- | --- |
| [文字提示](https://tdesign.tencent.com/vue/components/tooltip) | 鼠标移入需要展示文字解释说明时。 |
| [气泡确认框](https://tdesign.tencent.com/vue/components/popconfirm) | 需要用户进行二次确认、需要给用户展示反馈信息时；不会造成严重后果的二次确认场景时。 |
