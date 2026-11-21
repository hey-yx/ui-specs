# FINDINGS · EpDeck 重跑摩擦与缺口记录

记录本轮按 `project-tdesign`（含 `tdesign.tencent.com--dark.md`、`layout.md`、`motion.md`）重跑 `EpDeck` 时遇到的真实规范缺口与处理方式。

---

## 一、TDesign 暗色规范与库内规则的落地摩擦

1. **暗色中性底色未在 `dark.md` 列出，需回看 `color.md` 的 `BlueGray` 暗阶**：`content/color/tdesign.tencent.com--dark.md` 给出了文字透明度（90%/60%/40%/26%）和 8 套彩色深色板，但没有直接给暗色背景层级的 hex；最终在同体系主色表 `content/color/tdesign.tencent.com--color.md:165-171` 取 `BlueGray14`（`#15181d`）、`BlueGray13`（`#20232b`）、`BlueGray12`（`#272b34`）和 `BlueGray11`（`#323843`），既符合 TDesign「在灰黑色中加入 8%-12% 品牌倾向」的原文规则，也避开了纯中性灰 `#181818` 与纯白字色触发模板化门禁的问题。
2. **`check-frame.py` 对 `base` 灰底的判定逻辑**：`check-frame.py` 只要 `R === G === B`（非 `#ffffff`）即算灰底，单站批用 `#181818` 会触发「灰底超过半数」误报；改用 TDesign 原文 `BlueGray14 #15181d` 后既解决色偏质感，也自然通过 `check-frame.py`。
3. **非文本边框与正文透明度校验**：`dark.md:50` 的 `#ffffff 40%` 在 `#15181d` 上仅 `3.82:1`，只能给输入占位符；次级信息全部落在 `#ffffff 60%`（`7.01:1`），控件边界使用 `BlueGray8 #6f7686`（在 `#15181d` 为 `3.91:1`，在 `#20232b` 为 `3.45:1`），确保深色控件边界达标 `>= 3:1`。
4. **缺失维度按 `GAP_RULES` 统一派生**：TDesign 仍无圆角规范与桌面/移动触控目标高度表，统一按 `GAP_RULES` 派生 `4px / 8px / 999px`（按钮/容器/筛选胶囊分层同形）、桌面控件 `32-36px` 与移动断点 `< 768px` 扩至 `44px`；数字字体 TCloud Number 降级为 `tabular-nums`。
5. **无外部视频流时的降级与断流交互**：按 `layout--video-first-hero.md:62-63` 的静态海报降级原则，主推与播放器采用 12 套定制内联 SVG 暗色静帧；同时保留「主线路 / 备用线路 / 模拟断流」切换与重试机制，覆盖 `briefs/epdeck.md` 中的片源失败重试需求。
