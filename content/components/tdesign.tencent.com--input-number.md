---
title: "TDesign · InputNumber 数字选择器"
source: https://tdesign.tencent.com/vue/components/input-number
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: components-tdesign-input-number
publisher: "TDesign"
---

# InputNumber 数字输入框

数字输入框由增加\&减少按钮、数值输入组成。每次点击增加按钮（或减少按钮），数字增长（或减少）的量是恒定的。

### 双侧调整的数字输入框

已输入的值居中展示，用户可直接在输入框内修改数值，还可以使用输入框左右的箭头按钮增大或减小数值。

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/image2020-8-19_15-28-23.png)

### 右侧调整数值的数字输入框

已输入的值居左展示，用户可直接在输入框内修改数值，还可以使用输入框右侧的箭头按钮增大或减小数值。

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/image2020-8-19_15-31-6.png)

### 小数输入框

可以通过 decimal-places 来设置小数保留精度，通过 step 来设置步进。

### 不同尺寸的输入框

有大中小三种不同高度、宽度的输入框，以适应不同尺寸布局。

## 组件设计指南

### 何时使用

需要对等差数列（如等差为10的数列：0，10，20，30，40，50，60，70...）的小范围精确调整时。

### 组件搭配使用

##### 搭配滑块搭配使用。便于用户可以通过可视化的操作输入数字内容。

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/input%20number-1.png)

##### 与气泡提示搭配使用。数字输入框需考虑数值的范围，超出限定范围则气泡提示，并自动纠正为最近的合理数值。

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/%E6%95%B0%E5%AD%97%E8%BE%93%E5%85%A5%E6%A1%86-----2.png)

### 常用用法

##### 在数值范围内，可设定默认值（不一定要从最小值开始），帮助用户减少点击次数。

   ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/input%20number-3.png)

##### 在输入数值达到最大或最小限制时，按钮置灰显示，不可点。

   ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/input%20number-4.png)
    图示：到达最小范围时，减少按钮不可点

   ![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/input%20number-5.png)
    图示：到达最大范围时，增加按钮不可点
