---
title: "TDesign · 中后台整体框架"
source: https://tdesign.tencent.com/design/offices
section: layout
tag: "规范"
fetched: 2026-11-09
status: full
id: layout-32
publisher: "腾讯"
---

# TDesign · 中后台整体框架

> 来源：[https://tdesign.tencent.com/design/offices](https://tdesign.tencent.com/design/offices)

---

# 如何搭建整体框架

## 什么是中后台系统

中台系统主要指：响应前后台业务，实现双端的集中管理和价值提取，支持业务创新和精细化运营的数据处理系统。

后台系统主要指：对前端网站信息和数据进行管理的系统，主要面向企业内部的运营和管理人员。

在 Web 前端设计当中，中台与后台具有同质性，可看作同一类型来思考设计方法。通过 TDesign 提供的组件能力快速搭建好用的中后台系统，通常可以分三步：选择合适的页面框架-设计页面间的任务流程-合理使用组件。

## 中后台页面框架的选择

页面框架由「页面导航」与「页面布局」两部分组成。同时，TDesign 提供常见的页面模版，可根据需要直接选择合适的模版。

### 页面导航

导航是指：在页面中引导用户找到功能和理解信息层级，可分为整站导航与区域导航两大类。

| 导航分类 | 定义 | 相关组件 |
| --- | --- | --- |
| 整站导航 | 对整个网站系统的最大颗粒度模块的引导，也称为全局导航或总导航。 | [导航菜单](https://tdesign.tencent.com/vue/components/menu) |
| 区域导航 | 对某一模块下的页面，进行引导和分类的导航，也称为情景导航。 | [固钉](https://tdesign.tencent.com/vue/components/affix) 、[锚点](https://tdesign.tencent.com/vue/components/anchor)、[面包屑](https://tdesign.tencent.com/vue/components/breadcrumb)、[下拉菜单](https://tdesign.tencent.com/vue/components/dropdown)、[分页](https://tdesign.tencent.com/vue/components/pagination)、[步骤条](https://tdesign.tencent.com/vue/components/steps)、[选项卡](https://tdesign.tencent.com/vue/components/tabs) |
![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/20211215163954.png)

### 页面布局

页面布局是指：将导航和信息内容在页面中进行合理安排和分布，由「[栅格](https://tdesign.tencent.com/vue/components/grid)」和「[布局](https://tdesign.tencent.com/vue/components/layout)」组成。

不同布局的选择依据，通常为：1 功能模块的数量。2 功能与功能之间的相关性。

TDesign主要提供3种布局方式：上下布局、左右布局、混合布局。

#### 上下结构的布局

主要特征：导航在上信息内容在下的布局。横向导航空间有限，左右点击效率低。

何时使用：1 功能模块数量较少时（一般小于 9 个）。2 各模块间关联较弱、需要做明确区分或无需频繁切换时。

#### 左右结构的布局

主要特征：导航在左信息内容在右的布局。纵向空间具有较好延展性，上下点击效率高。

何时使用：1 功能模块数量较多时。2 各模块间有一定相关性、或需要在模块间频繁切换时。

#### 混合结构的布局

主要特征：将上下、左右相结合的综合布局。横纵空间优势互补，在展示和操作上都具有较好的延展性和包容性。

何时使用：1 功能模块数量较多时。2 各模块间有父子或交叉关系、 需要按层级展示时。

![](https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/20211215164005.png)

## 常见的中后台页面

TDesign提供了中后台系统常见的页面模板，涵盖多种高频任务在页面中的典型布局方式。

| 典型页面模板 | 相关高频任务 |
| --- | --- |
| [仪表盘](https://tdesign.tencent.com/starter/vue/#/dashboard/base) | [数据筛选与查询](https://tdesign.tencent.com/design/offices-task#%E6%95%B0%E6%8D%AE%E7%AD%9B%E9%80%89%E4%B8%8E%E6%9F%A5%E8%AF%A2)、[效果预览](https://tdesign.tencent.com/design/offices-task#%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88)、[新手指引](https://tdesign.tencent.com/design/offices-task#%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95) |
| [列表页](https://tdesign.tencent.com/starter/vue/#/list/base) | [数据筛选与查询](https://tdesign.tencent.com/design/offices-task#%E6%95%B0%E6%8D%AE%E7%AD%9B%E9%80%89%E4%B8%8E%E6%9F%A5%E8%AF%A2)、[表格批量操作](https://tdesign.tencent.com/design/offices-task#%E8%A1%A8%E6%A0%BC%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C)、[数据导入](https://tdesign.tencent.com/design/offices-task#%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5)、[效果预览](https://tdesign.tencent.com/design/offices-task#%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88)、[状态流转](https://tdesign.tencent.com/design/offices-task#%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC)、[任务引导](https://tdesign.tencent.com/design/offices-task#%E4%BB%BB%E5%8A%A1%E5%BC%95%E5%AF%BC) 、[新手指引](https://tdesign.tencent.com/design/offices-task#%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95) |
| [表单页](https://tdesign.tencent.com/starter/vue/#/form/base) | [数据筛选与查询](https://tdesign.tencent.com/design/offices-task#%E6%95%B0%E6%8D%AE%E7%AD%9B%E9%80%89%E4%B8%8E%E6%9F%A5%E8%AF%A2)、[任务引导](https://tdesign.tencent.com/design/offices-task#%E4%BB%BB%E5%8A%A1%E5%BC%95%E5%AF%BC)、[效果预览](https://tdesign.tencent.com/design/offices-task#%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88)、[新手指引](https://tdesign.tencent.com/design/offices-task#%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95) |
| [详情页](https://tdesign.tencent.com/starter/vue/#/detail/base) | [数据筛选与查询](https://tdesign.tencent.com/design/offices-task#%E6%95%B0%E6%8D%AE%E7%AD%9B%E9%80%89%E4%B8%8E%E6%9F%A5%E8%AF%A2)、[状态流转](https://tdesign.tencent.com/design/offices-task#%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC)、[数据导入](https://tdesign.tencent.com/design/offices-task#%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5)、[效果预览](https://tdesign.tencent.com/design/offices-task#%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88) |
| [结果页](https://tdesign.tencent.com/starter/vue/#/result/success) | [状态流转](https://tdesign.tencent.com/design/offices-task#%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC)、[新手指引](https://tdesign.tencent.com/design/offices-task#%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95)、[任务引导](https://tdesign.tencent.com/design/offices-task#%E4%BB%BB%E5%8A%A1%E5%BC%95%E5%AF%BC) |
| [个人页](https://tdesign.tencent.com/starter/vue/#/user/index) | [新手指引](https://tdesign.tencent.com/design/offices-task#%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95)、[效果预览](https://tdesign.tencent.com/design/offices-task#%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88) |
| [登录页](https://tdesign.tencent.com/starter/vue/#/login) | [新手指引](https://tdesign.tencent.com/design/offices-task#%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95)、[任务引导](https://tdesign.tencent.com/design/offices-task#%E4%BB%BB%E5%8A%A1%E5%BC%95%E5%AF%BC) |
