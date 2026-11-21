# DECISIONS · EpDeck（site key: epdeck）

Hallmark 标记（写在 `index.html` `<style>` 首行）：
`genre: atmospheric · macrostructure: Ecosystem Index · nav: N1b · footer: Ft5 · layout: Video-First Hero · theme: TDesign Orange5`

四轴固定项：**atmospheric 暗色影院 / Ecosystem Index / N1b / Ft5**；版型参考 `content/layouts/layout--video-first-hero.md`；密度为「大字号、大图、疏布局」（display 64px 出处 content/type/tdesign.tencent.com--fonts.md:61；区块间距 96px 为派生密度值 derived；封面大图 4 列）。

- 基准规范：**TDesign**（`site/dist/ai/guide.md:24`「中文产品 UI（中后台 / 工具 / 内容 / 协作）」行）
数值全部取 TDesign 两篇原文，逐条下表标 `文件:行号`。TDesign 两篇覆盖不到的量（间距体系、动效、圆角、容器尺度）不编造，处理方式统一记进 `FINDINGS.md`。

---

## 1 色彩

### 1.1 强调色与功能色

| 值 | 来源 | 用在哪 |
| --- | --- | --- |
| `#e37318` Orange5 | `content/color/tdesign.tencent.com--color.md:70`（同值见 :129-130） | `--accent`：主 CTA 填充、导航当前项下划线、选中 chip 的文字与 2px 下边线、当前集按钮、播放进度条、热榜第 1 名数字、品牌星形 |
| `#fa9550` Orange4 | `content/color/tdesign.tencent.com--color.md:69` | `--accent-hi`：CTA hover、深色底上的焦点环（8.02:1）、选中 chip 文字 |
| `#181818` Gray14 | `content/color/tdesign.tencent.com--color.md:154` | 橙底按钮上的墨色字（5.69:1）；同时是页面底色 |
| `#d54941` Red6 | `content/color/tdesign.tencent.com--color.md:59` | `--danger`：片源失败条的 2px 侧标 |
| `#ff9285` Red4 | `content/color/tdesign.tencent.com--color.md:57` | `--danger-text`：错误文案（暗底 7.17:1，Red6 作正文只有 4.11:1 不达标） |
| `#2ba471` Green5 | `content/color/tdesign.tencent.com--color.md:82` | `--ok`：连载中的状态圆点（状态信号，不参与强调） |

> 语义说明：原文把 Orange5 归在「功能色 · 告警色」（`content/color/tdesign.tencent.com--color.md:114`）。本站把它当品牌强调色，只改语义不改色值，对比度仍按原文要求 ≥4.5:1 校验。

### 1.2 中性色（暗色界面分层）

| 值 | 来源 | 用在哪 |
| --- | --- | --- |
| `#181818` Gray14 L8 | `content/color/tdesign.tencent.com--color.md:154` | 页面底色 |
| `#242424` Gray13 L14 | `content/color/tdesign.tencent.com--color.md:153` | 卡片/搜索框/选集按钮等抬升面 |
| `#2c2c2c` Gray12 L18 | `content/color/tdesign.tencent.com--color.md:152` | hover 面、选中 chip 底 |
| `#393939` Gray11 L24 | `content/color/tdesign.tencent.com--color.md:151` | 1px 发丝线（热榜行、页脚 meta 上边线） |
| `#777777` Gray8 L50 | `content/color/tdesign.tencent.com--color.md:148` | 控件边界（chip / 重试 / 空状态按钮的 1px 内描边，3.97:1） |

### 1.3 字色（暗色字阶）

| 值 | 来源 | 用在哪 |
| --- | --- | --- |
| `#ffffff` 100%（Wh1） | `content/type/tdesign.tencent.com--fonts.md:108` | 标题、片名、正文强调 |
| `#ffffff` 55%（Wh2） | `content/type/tdesign.tencent.com--fonts.md:108` | 正文与次级信息（6.08:1） |
| `#ffffff` 35%（Wh3） | `content/type/tdesign.tencent.com--fonts.md:107-108` | **仅**禁用态与装饰（3.23:1，不承载正文） |
| `#ffffff` 22%（Wh4） | `content/type/tdesign.tencent.com--fonts.md:109-110` | 预留（本次未用于正文） |

原文 `content/type/tdesign.tencent.com--fonts.md:89` 声称字色满足 ≥4.5:1；实测 Wh3 在 `#181818` 上只有 3.23:1，故整站正文降到 Wh2，Wh3 只给禁用控件（WCAG 对禁用控件不要求对比度）。落差记在 FINDINGS。

---

## 2 字阶、行高、字重

字阶取值（`content/type/tdesign.tencent.com--fonts.md:50-61`）：10（移动端基档 :52）→12（桌面最小 :53）→14（正文 :54）→16（:55）→20（:56）→24（:57）→28（:58）→36（:59）→48（:60）→64（第二字阶顶档 :61）。

行高公式 `line-height = font-size + 8`（`content/type/tdesign.tencent.com--fonts.md:69`，其中 :71-75 给出 48px 字号配 56px 行高的示例）。

| 角色 | 字号/行高 | 依据 | 实测（浏览器 computed） |
| --- | --- | --- | --- |
| Hero 标题（7 字） | 64/72 → 48/56（≤1023）→ 36/44（≤767） | `content/type/tdesign.tencent.com--fonts.md:61` + `:69` | 1280：64px/72px；375：36px/44px |
| 区块标题 | 36/44 → 28/36（≤1023） | `content/type/tdesign.tencent.com--fonts.md:59` | 1280：36/44；375：28/36 |
| 详情页剧名 | 48/56 → 36/44（≤767） | `content/type/tdesign.tencent.com--fonts.md:60`（行高按公式派生，示例见 :71-75） | 无 |
| 卡片标题 | 16/24 → 14/22（≤767） | `content/type/tdesign.tencent.com--fonts.md:55`、`:54` | 1280：16/24；375：14/22 |
| 正文/简介 | 16/24 | `content/type/tdesign.tencent.com--fonts.md:53` | 16/24 |
| 次级信息 | 14/22 | `content/type/tdesign.tencent.com--fonts.md:52`（正文档） | 14/22 |
| 标注/封面注 | 12/20 | `content/type/tdesign.tencent.com--fonts.md:51` | 12/20 |

字重只用 400 与 600（`content/type/tdesign.tencent.com--fonts.md:79-81`）：正文 400，标题与按钮 600，无 500/700。

字体族直接用原文系统栈（`content/type/tdesign.tencent.com--fonts.md:34`），零网络字体请求。

---

## 3 间距

TDesign 两篇没有独立的间距体系。本站把原文写明的步进值 `+2 / +4 / +8 / +12 / +16`（`content/type/tdesign.tencent.com--fonts.md:44-46`）作为最小粒度，组合成 `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96` 的 `--sp-*` 标尺（24=16+8、32=16+16、48=32+16、64=48+16、96=64+32）。区块间距 96px，卡片行距 32px，元素间距 8-24px。这是「按原文步进组合」，不是原文给出的间距表，已在 FINDINGS 第 1 条注明。

---

## 4 版型映射（layout--video-first-hero.md）

| 原文区块（`content/layouts/layout--video-first-hero.md:51-56`） | 本站落地 |
| --- | --- |
| 1 Hero with video background | 主推大卡：16:9 内联 SVG 静帧 + 底部渐变遮罩 + display 64px 剧名 + 双 CTA（overlay，档出处 content/type/tdesign.tencent.com--fonts.md:61） |
| 2 Key features overlay | 主推卡右侧 3 张小卡（今晚更新），保留「大卡 + 小卡」的推荐层级 |
| 3 Benefits section | Ecosystem Index 的三条发现面：正在热播网格（12 部，可筛选/搜索）、本周热榜 1-10、详情页猜你喜欢 3 部 |
| 4 CTA | 页脚 Ft5 的收束句 + 元信息行 |

原文要求视频自动播放、字幕、暂停控件（`:62-63`）。单文件零外部请求拿不到视频源，改用内联 SVG 静帧：`prefers-reduced-motion` 下同样无动效，文案与 CTA 完整保留（原文 :63 的降级要求）。这条替换记 FINDINGS 第 9 条。

---

## 5 对比度实测

计算方式：WCAG 2.1 相对亮度公式；半透明字色先按 alpha 与底色合成再算比值（脚本实算，非估算）。

| 组合 | 实测 | 门槛 | 结论 |
| --- | --- | --- | --- |
| Wh1 `#fff` / `#181818` | 17.76:1 | ≥4.5 | 过 |
| Wh2 55% / `#181818` | 6.08:1 | ≥4.5 | 过（全站正文） |
| Wh2 55% / `#242424` | 5.65:1 | ≥4.5 | 过 |
| Wh2 55% / `#2c2c2c` | 5.34:1 | ≥4.5 | 过 |
| Orange5 `#e37318` / `#181818` | 5.69:1 | ≥4.5 | 过（链接/选中文字） |
| 墨 `#181818` / Orange5 填充 | 5.69:1 | ≥4.5 | 过（主按钮文字） |
| Orange4 `#fa9550` / `#181818` | 8.02:1 | ≥4.5 | 过（hover / 焦点环） |
| 白 / Orange5（按钮上的焦点环） | 3.12:1 | ≥3（非文本） | 过 |
| Gray8 `#777` / `#181818`（控件边界） | 3.97:1 | ≥3 | 过 |
| Red4 `#ff9285` / `#242424`（错误文案） | 7.17:1 | ≥4.5 | 过 |
| Green5 `#2ba471` / `#181818`（状态点） | 5.62:1 | ≥3 | 过 |
| Wh3 35% / `#181818` | 3.23:1 | 无 | 仅禁用/装饰，不承载正文 |

---

## 6 响应式实测

`html`、`body` 均 `overflow-x: clip`；栅格轨道一律 `minmax(0,1fr)`。浏览器实测（CDP 设备度量，含 15px 纵向滚动条，故 clientWidth = 视口 − 15）：

| 视口 | 首页 scrollWidth / clientWidth | 详情页 scrollWidth / clientWidth |
| --- | --- | --- |
| 320 | 305 / 305 | 305 / 305 |
| 375 | 360 / 360 | 360 / 360 |
| 768 | 753 / 753 | 753 / 753 |
| 1280 | 1265 / 1265 | 1265 / 1265 |

四档均无横向溢出。布局切换：>1023 主推 1.55fr + 3 小卡纵列；≤1023 主推通栏、3 小卡横排 3 列；≤767 网格 2 列、3 小卡改单列横条；≤520 隐藏「登录」，搜索框吃满剩余宽度。

---

## 7 交互实测（点了什么 → 变了什么）

| # | 操作 | 实测结果 |
| --- | --- | --- |
| 1 | 搜索框输入「悬疑」 | 卡片 12 → 3；计数文案「共 12 部 · 每周五更新」→「搜索「悬疑」 · 3 部」 |
| 2 | 输入「不存在」 | 卡片 12 → 0，出现空状态（`role=status`，含原因 + 建议 + 清空按钮）；点清空 → 12 |
| 3 | 点 chip「悬疑」/「古装」 | 12 → 3 / 12 → 2；chip `aria-pressed` 互斥，计数同步「悬疑 · 3 部」「古装 · 2 部」 |
| 4 | 点卡片《雾港》 | `#home.hidden` false→true、`#detail.hidden` true→false；标题「雾港」、24 个选集按钮（19-24 为 disabled）、猜你喜欢 3 张 |
| 5 | 选集点第 5 集 | `aria-current` 1→5；简介换成第 5 集文案；进度条 4%→21%；live 区播报「已切换到第 5 集…」 |
| 6 | 点 disabled 第 20 集 | 无变化（仍停在第 12 集），控件不可聚焦点击 |
| 7 | 播放键 | 点击瞬间 `aria-busy=true`、透明度 .6 → 240ms 后 `aria-pressed=true`、label「暂停播放」、图标换暂停；再点回 false |
| 8 | 《深空回声》第 7 集 | 出现 `role=alert` 错误条「第 7 集片源加载失败，已自动重试一次。」，播放键 disabled；点重试 →「正在重新连接片源…」→ 320ms 后恢复，live 播报「片源已恢复」 |
| 9 | 主推 CTA「继续观看 · 第 13 集」 | 直接打开《雾港》详情并选中第 13 集 |
| 10 | 「加入追剧单」 | 按钮变「已在追剧单」且 disabled（成功态），hero 状态行提示，live 播报 |
| 11 | 导航「电影 / 综艺 / 剧集」 | 真实过滤片库并滚动到「正在热播」，计数分别为 1 部 / 2 部 / 10 部 |
| 12 | Esc | 详情页内按 Esc 返回片库（搜索框内 Esc 清空关键词） |

---

## 8 质量升级 6 条 · 逐条证据

1. **hero 文案与字号**：标题「把世界关在门外」7 字（≤20 字）；浏览器实测 1280 档 64px/72px（`content/type/tdesign.tencent.com--fonts.md:61` 顶档），768 档 48/56，375 档 36/44；不是全站一个 28px。
2. **层次不用框**：页面 `#181818` → 抬升面 `#242424` → hover `#2c2c2c` 三级底色差，字重 600/400 两级；全站只有两处 1px 发丝线（热榜行、页脚 meta 上边线，`#393939` = Gray11 `content/color/tdesign.tencent.com--color.md:151`（三级底色 Gray 行分别是 :151、:153、:152）），无卡片描边、无卡片投影（仅导航滚动后一条柔和投影）。
3. **色彩纪律**：DOM 实测可见视口内强调色面积 1280 = 0.86%、375 = 2.18%（<5%）；只出现在主 CTA、选中 chip、当前集、进度条、热榜第 1 名、焦点环。功能色只做信号：Green5 连载圆点、Red4 错误文案、Red6 错误侧标。
4. **图形质感**：13 个内联 SVG（12 张封面 + 1 张 16:9 主推静帧），每个都有 2 段渐变 + 12-34 个图元 + 不同构图（见 §9），无纯色块占位；`performance.getEntriesByType('resource')` 外部资源数 = 0，`<img>` 数 = 0。
5. **状态与微交互**：hover（卡片抬升/按钮变色/chip 变底）、`:focus-visible`（2px 环，橙 8.02:1，橙底按钮用白 3.12:1）、`:active`（下压 1px）、disabled（选集 19-24、已在追剧单、片源失败时的播放键）、loading（筛选骨架屏 8 格 + 播放键 `aria-busy`）、error（片源失败 + 重试）、success（播放开始、加入追剧单）；过渡 200ms / 240ms 一档；`prefers-reduced-motion: reduce` 下全部压到 0.01ms 并取消位移。
6. **中文排版**：行高=字号+8 实测 5 组（64/72、36/44、16/24、14/22、12/20）；简介与正文 `max-width: 40em`，中文约 40 字/行（35-45 区间）；正文字距 0，标点不挤；仅 display 用 -0.01em 收字（原文无字距规范，记 FINDINGS）。

---

## 9 12 张封面（+1 主推静帧）构图与配色

封面配色全部取自 TDesign 色板（含透明度变化），构图逐张不同，同一列表内不同构。

| # | 剧名 | 构图 | 基色（原文行号） | 图元数 |
| --- | --- | --- | --- | --- |
| c1 | 雾港 | 灯塔 + 光锥 + 雾带 + 小船（右重） | Cyan10 `#002536` :389-390 / Cyan8 `#004e6d` :383-384 | 16 |
| c2 | 第七夜 | 窗格 + 血月 + 人影（对称） | Red10 `#490002` :109-110 / Red5 `#f6685d` :94-95 | 16 |
| c3 | 长安十二时 | 日轮 + 层叠宫檐 + 山影（三段横切） | Orange10 `#3b1700` :144-145 / Orange8 `#713300` :138-139 | 12 |
| c4 | 山河旧梦 | 浅纸 + 三层墨山 + 朱印（留白） | Yellow1 `#fff5e4` :428-429 / Red7 `#ad352f` :101-102 | 14 |
| c5 | 夜班便利店 | 店面霓虹 + 雨丝 + 模糊光晕（下重） | Blue10 `#001a57` :74-75 / Pink4 `#ff79cd` :470-471 | 17 |
| c6 | 合租时代 | 楼体窗格 + 猫剪影 + 吊灯（满幅网格） | Orange10 `#3b1700` :144-145 / Yellow4 `#f5ba18` :437-438 | 21 |
| c7 | 星轨 | 行星 + 斜向光环 + 星点（大圆主导） | Blue10 `#001a57` :74-75 / Blue8 `#003cab` :68-69 | 23 |
| c8 | 深空回声 | 射电同心弧 + 频谱柱（放射） | Cyan10 `#002536` :389-390 / Cyan4 `#41b8f2` :371-372 | 16 |
| c9 | 周末开麦 | 麦克风 + 聚光弧 + 纸屑（亮底高饱和） | Yellow3 `#ffd36d` :434-435 / Yellow4 `#f5ba18` :437-438 | 34 |
| c10 | 今晚吃什么 | 盘 + 蒸汽曲线 + 筷（圆形居中） | Green10 `#002515` :179-180 / Green8 `#005334` :172-173 | 13 |
| c11 | 回声电台 | 声波柱阵 + 天线 + 月（垂直节奏） | Purple10 `#280057` :422-423 / Purple4 `#c69cff` :404-405 | 27 |
| c12 | 雪落无声 | 雪点 + 松林剪影 + 木屋暖窗（斜向） | Blue10 `#001a57` :74-75 / Orange3 `#ffb98c` :123-124 | 33 |
| still1 | 雾港（主推宽幅） | 16:9 灯塔 + 雾带 + 停泊船（横构图） | 同 c1 | 27 |

---

## 10 状态清单（谁承载哪个状态）

- **hover**：卡片（-4px）、小卡（-3px + 封面微放大）、按钮（橙→Orange4）、chip（#242424 底）、热榜行（#242424 底）、选集（#2c2c2c 底）。
- **:focus-visible**：全站 2px 环 + 2px offset；橙底按钮改用白环，避免环融进橙面。
- **:active**：按钮/选集下压 1px，播放键 scale(.96)。
- **disabled**：未更新集（19-24，透明度 .4 + `aria-label` 说明「预告」）、已在追剧单、片源失败的播放键。
- **loading**：筛选切换 240ms 骨架屏（`aria-busy`）、播放键 `aria-busy` + 半透明。
- **error**：`role=alert` 片源失败条 + 重试按钮。
- **success**：播放开始（aria-pressed + 文案）、加入追剧单（按钮态 + live 播报）。
- **reduced-motion**：`@media (prefers-reduced-motion: reduce)` 关闭过渡与位移。

---

## 11 与其他四站的差异（四轴）

| 轴 | 本站 epdeck | 说明 |
| --- | --- | --- |
| genre | atmospheric 暗色影院 | 唯一暗底站；其余为亮色工具/后台/官网/协作应用 |
| 主色 | 橙 `#e37318` | 与绿/蓝/紫/青四站色相拉开 |
| macrostructure | Ecosystem Index | 多发现面（主推 / 热播 / 热榜 / 猜你喜欢），非叙事流、非统计头图 |
| nav | N1b（品牌 · 居中四链 · 搜索+登录） | 与 N9/N3/N5/N13 不同 |
| footer | Ft5 Statement（一句收束 + 元信息行） | 与 Ft2/Ft4/Ft1/Ft6 不同 |
| 密度 | 大字号大图疏布局 | 64px 顶档、96px 区块间距、2:3 大封面 4 列 |
