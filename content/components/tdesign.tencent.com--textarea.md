---
title: "TDesign · Textarea 多行文本框"
source: https://tdesign.tencent.com/vue/components/textarea
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: components-tdesign-textarea
publisher: "TDesign"
---

# 多行文本框 Textarea

### 基础多行文本框
用于多行文本的输入。

### 限制最大字符数
限制输入的最大字符数并展示字符数。

### 绑定 DOM 事件
可绑定 onKeypressonKeydownonKeyuponFocusonBlur 等 DOM 原生事件。

### 不同类型的多行文本框
支持只读、禁用状态。

## 组件设计指南

### 何时使用

当需要输入的字段数量较多或换行次数较多时，

当用户需要以复制粘贴方式输入大段字符串时。

### 与页面布局相关

##### 在整体页面中，常与输入类和沟通类组件布局在一起，有左对齐、右对齐和顶对齐三种方式，来满足视觉流程或信息分类的需要。

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_1.png)
    图示：从左到右的视觉引导

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_2.png)
    图示：从上到下的视觉引导

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_3.png)
    图示：上下两类为不同信息类型

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_4.png)
    图示：左右两类为不同信息类型

### 组件搭配使用

##### 与文字提示搭配使用，可提示多行文本框的限制内容或过程中出现的错误，引导用户正确完成信息输入。

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_5.png)

##### 与按钮搭配使用，可以为用户提供与输入内容相关联的具体操作，用以提交、发送或保存输入的文本信息。

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_6.png)

### 推荐/慎用示例

##### 当输入的信息有具体的格式限制时（如表单、表格的内容），应使用对应格式的输入类组件，而不是多行文本框。

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_7.png)
    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_8.png)
    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

##### 在筛选数据时，如有多个限制选项，不应使用多行文本进行筛选，应使用下拉框、单选框、多选框等。

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/20211221144002.png)
    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/good.png)

    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/Textarea_10.png)
    ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/doc/bad.png)

### 相似组件

| 组件名 | 何时使用                                                     |
| :----- | :----------------------------------------------------------- |
| 多行文本 | 当需要输入的字段数量较多或换行次数较多时；当用户需要以复制粘贴方式输入大段字符串时。  |
| 输入框 |  需要用户录入信息时；需要对用户录入的进行进行即时的反馈时。 |
