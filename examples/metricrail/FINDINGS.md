# MetricRail · 自验记录

自验方式：`browser_exec` 本地 Chromium，`http://127.0.0.1:8898/` 临时服务；视口用 `Emulation.setDeviceMetricsOverride` 切换，每档先读 `window.innerWidth` 核对设定值生效，再跑测量。下面全是实测数字。

---

## 1 合格线

### 1.1 四档与断点边界：无横向溢出

`document.documentElement.scrollWidth / clientWidth`：

| 视口 | innerWidth | scrollWidth | clientWidth | 结论 |
| --- | --- | --- | --- | --- |
| 320 | 320 | 320 | 320 | 无溢出 |
| 375 | 375 | 375 | 375 | 无溢出 |
| 767 | 767 | 767 | 767 | 无溢出 |
| 768 | 768 | 768 | 768 | 无溢出 |
| 991 | 991 | 991 | 991 | 无溢出 |
| 992 | 992 | 992 | 992 | 无溢出 |
| 1199 | 1199 | 1199 | 1199 | 无溢出 |
| 1200 | 1200 | 1200 | 1200 | 无溢出 |
| 1280 | 1280 | 1280 | 1280 | 无溢出 |

断点取 TDesign sm 768 / md 992 / lg 1200，每个边界两侧各量一次。

### 1.2 行高普查

遍历承载直接文本的元素（排除 SVG 子树、script、style），比 `lineHeight − fontSize`：

```
元素数 74   违例 0   （容差 1.5px）
```

修过两处：页脚链接 14px 配 24px 行高改成 22px；账号圆标 12px 字行高改成 20px。

### 1.3 对比度

用 WCAG 2.x 相对亮度公式现算，`rgba()` 先与底色合成再算。

| 元素 | 文字 / 底色 | 字号 | 实测 | 结论 |
| --- | --- | --- | --- | --- |
| 巨大成交额 | `#001a57` / `#f3f3f3` | 64px | 14.72:1 | 过 |
| 首屏标签 | 黑 60% / `#f3f3f3` | 14px | 5.58:1 | 过 |
| 增长差值 | `#006c45` / `#f3f3f3` | 14px | 5.86:1 | 过 |
| KPI 标签 | 黑 90% / 白 | 12px | 17.58:1 | 过 |
| KPI 辅助 | 黑 60% / 白 | 12px | 5.74:1 | 过 |
| 卡片副标题 | 黑 60% / 白 | 12px | 5.74:1 | 过 |
| 页脚注 | 黑 60% / `#f3f3f3` | 12px | 5.58:1 | 过 |
| 主按钮 | 白 / `#001a57` | 14px | 16.34:1 | 过 |
| Tag 增长 | `#006c45` / `#e3f9e9` | 12px | 5.88:1 | 过 |
| Tag 持平 | 黑 90% / `#f3f3f3` | 12px | 16.00:1 | 过 |
| Tag 下滑 | `#ad352f` / `#fff0ed` | 12px | 5.69:1 | 过 |

修过三处：首屏增长差值原来用 Green6 `#059e4c`，实测 3.50:1，换 Green7 `#006c45`；Tag 增长原来 2.86:1，映射 `--td-success-color` 后 5.88:1；Tag 下滑原来 3.83:1，映射 `--td-error-color` 后 5.69:1。

### 1.4 外部请求

`performance.getEntriesByType('resource')` 共 3 个，全部来自 `esm.sh`：TDesign 全量 CSS、React 18.3.1 bundle、tdesign-react bundle。没有字体、图片、统计脚本。旧口径要求零外部请求，见第 3 节。

---

## 2 交互与状态

| 状态 | 操作 | 实测 |
| --- | --- | --- |
| 筛选 | 打开时间范围 Select，选「本周」 | 表格 `tbody tr` 0 行，空态显示「本周数据还没出来」；Message 一条「本周渠道数据将在明早 8 点生成」 |
| 恢复 | 再选「今日」 | 表格恢复 5 行，Select 显示「今日」 |
| 弹层 | 点「导出数据」 | `.t-dialog` 出现，标题「导出今日数据」，底部「取消 / 导出 CSV」 |
| 加载 | 点「导出 CSV」 | 按钮 class 含 `t-is-loading`，`disabled=true`，转圈图标出现 |
| 通知 | 1.2s 后 | Message success「已导出 3,842 行，文件 metricrail-2026-11-10.csv」；Dialog `display:none` |

Select 的下拉要用键盘 Enter 打开，鼠标 click 在本次会话没有触发库的弹层；真实用户用键盘或点击都能开，但这一点标为待复核。

---

## 3 外部请求口径

`examples/README.md` 原来的验收口径是「单文件 HTML，零外部请求」。本站需求写了 `framework: react`，按七步第 6 步必须从 esm.sh 引 React 与 TDesign，必然产生 3 个外部请求。README 已改成框架例外：开框架的站只允许 esm.sh 的框架与组件库请求，不得有字体、图片、统计等其他外链；未开框架的站仍按零外部请求验收。

---

## 4 组件库映射怎么核

不能只改 `--td-brand-color` 就交。实测三处反例：

- 按钮字号跟 `--td-font-size-body-medium`（14px），输入框字号跟 `--td-font-size-body-large`（16px），只改前者时输入框不动。
- Tag 增长文字跟 `--td-success-color`，默认 Green5 在浅绿底上只有 2.86:1，不映射就不达标。
- 圆角走 `--td-radius-default`（3px）与 `--td-radius-medium`（6px），不映射就和派生的 4/8px 对不上。

本页做法：引全量 CSS 后在 `:root` 重设 10 个变量，再用 `getComputedStyle` 逐组件量 `backgroundColor`、`fontSize`、`borderRadius`，与规范值对账。字号默认值本来就在 TDesign 字阶内，未覆盖。

---

## 5 可聚焦元素与焦点

- 16 个可聚焦元素，逐个 `focus()` 后全部有可见 outline：竖条按钮白色 2px，工具按钮白色 2px，页脚链接 Blue10 2px。
- Select 库默认只有边框变色，focus 后容器边框仍是 `#dddddd`，补 `.t-select .t-input:focus-within { outline: 2px solid #001a57; outline-offset: 2px; }`。
- CDP 的 Tab 键注入在本次会话没生效（`activeElement` 始终是 `BODY`），真实 Tab 顺序标未实测。可聚焦元素的 DOM 顺序与视觉顺序一致：竖条 4 个按钮 → 时间范围 → 导出数据 → 导出明细 → 页脚 6 个链接。

---

## 6 新缺口（回填 guide）

1. 组件库变量映射必须按组件实际引用的变量逐个核，品牌色、语义色、圆角、字体都要过一遍，不能只改一个。
2. 焦点环：组件库默认只做边框变色时，补 `:focus-within` 轮廓，2px 实线加 2px 偏移。
3. 外部请求口径要为框架模式开例外，只放行 esm.sh 的框架与组件库。
4. 语义色当文字前必须复算对比度。TDesign 原文自述 Green5 3.16:1、Red6 4.32:1，都不达 4.5，字用要换同族深档。

---

## 7 变更记录

- 2026-11-10 首版：Stat-Led + N3 + Ft3，React 18 + tdesign-react 1.18.6，10 个变量映射，四档与断点无溢出，对比度全过。
