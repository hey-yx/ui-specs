<p align="center">
  <img src="assets/cover.png" alt="UISpecs 封面：7 套官方设计体系实测案例首屏总览" width="100%" />
</p>

# UISpecs · UI 设计规范全文库

给 AI 用的 UI 设计规范原文库。收官方规范全文，每个页面数值都能定位到文章具体行号。

AI 凭记忆写界面时，字号随手 16px、间距随手 10px，交付前查不出对错。这个库把每个取值的依据钉在原文行号上，按产品类型自动匹配官方设计体系出稿。

## 怎么用

把本仓库克隆到本地（或在支持读取本仓库的 AI 编程工具中打开），**直接复制下面这段提示词**，在末尾附上你的产品或页面需求发给 AI 即可。

```text
按 UISpecs 生成生产级界面。默认范围：未指定多页时只做网站首页；优先适配当前项目技术栈（React / Vue / Next.js / Tailwind 等），无现有工程时产出零外部请求的单文件 HTML。

视觉与防固化硬律（六条）：1. 按产品同构在 7 套选型（TDesign / Carbon / Primer / Polaris / Spectrum / Fluent 2 / Apple HIG）间择其一并沿用其原生表面语言，禁止把「白纸压 `#f3f3f3` 灰卡 + 通用单行页脚」当全站唯一皮肤；2. 顶栏、页脚、页底色随产品动作与选型分化，多站/多页保持外观轮换不撞壳；3. 核心工件首屏直出与零框套框（控制台、看板、比价表在 1280×800 首屏必须直接露出主图或主表行；多指标用 1px 齐平分割带，超过 5 项的筛选收进下拉/Tab，禁止用框套框和三排胶囊墙把主内容挤出首屏，桌面保持 32-36px 原生控件密度，移动端扩至 ≥ 44px）；4. 标题与首屏重心服务产品形态（官网可用大字主张，工具/对话/挂号直接让操作区顶格进首屏，禁用中文标题上挂 `01 / SECTION` 英文装饰眉题）；5. 真实业务主语（给足真数据、真实交互或定制产品部件，禁用黑底 JSON 终端、三列大图标卡或抽象占位色块）；6. 真实产品口吻（去掉 logo 与主色后仍认得出产品，不在正文到处挂「演示口径」自检词）。

1. 定选型底座与自由骨架：直接读 UISpecs 仓库的 `site/src/data/guide.ts`（`MAIN_SOURCES`、`GAP_RULES`、`REQUIRED_SCENARIOS`）、`site/src/data/reference-screens.ts`、`briefs/layouts.md` 与 `.hallmark/log.json`。按产品同构从 `MAIN_SOURCES` 确定唯一项目选型行（TDesign / Carbon / Primer / Polaris / Spectrum / Fluent 2 / Apple HIG 平权分流，不默认强落 TDesign；`content/brands/` 仅在明确要复刻某品牌时当皮肤），再按选中行的 `files` 读 `content/` 原文取值。结构与外壳（`macro`、`nav`、`footer`、页底色）按产品动作与近期记录避重自由组合，参考 `reference-screens` 密度骨架和 `content/howto/`、`content/layouts/`，不套任何预制固定外壳。

2. 造真数据与分化表面语法：先在内部明确产品是什么、谁在用、首屏要完成的一件事；价格、时效、资质等未给出的硬事实以常规行内文字标 `[待确认]`（不套彩色徽标），不瞎编。按选型行与产品品类分化表面语法、明暗极性与顶栏/页脚形态，禁止千站一面：SaaS/官网可用短句大字配真实产品切片与悬浮/宣言壳；打开即用的工具直接让真实操作区占领首屏（如半透明分栏、极简两极、终端面包屑或可关闭公告深栏）；报刊/情报可用 `0px` 直角、`1px` 印刷线与 `⌘K` 检索条；工程/媒体可用暗色模式或品牌浅底带。从选型色板挑主色，字重与行高按选型原文走。

3. 克制层次落稿与四态底线：按选中选型行的边界语言分层（Carbon 用 48px 全局头 + 0px 直角齐平指标带，Primer 用 PageHeader + UnderlineNav + 单层 Box，Polaris 用 #F7F7F7 托举 IndexTable 单卡，避免框套框与满屏筛选胶囊墙）；颜色、字阶、间距、圆角全部进命名 token，不写裸值。控制台/看板/比价表在 1280×800 首屏必须直接露出主图或主表行。主流程真实可点（筛选、搜索、切换、提交等），同时内置空态、加载态、错误态与超长文本折行；正文保持真实产品口吻，不在主操作区贴满「演示口径」自检词。可访问性高于风格：正文对比度 ≥ 4.5:1、大字与控件边界 ≥ 3:1、键盘路径完整且焦点环高对比可见、桌面控件贴合原生 32-36px 密度（任意可点目标 ≥ 24px，移动端 `< 768px` 扩至 ≥ 44px）、`:hover` 包进 `@media (hover: hover)`、`prefers-reduced-motion` 关闭动画；图表用内联 SVG。

4. 静默自检并交付：在 320 / 375 / 768 / 1280 四档确认无横向溢出、无控制台报错，且去掉 logo 和主色后仍能认出产品、没有撞壳模板感。默认直接交付可运行代码 + 5 行以内简短说明（所用选型行、外壳 `nav/footer/base` 选择、主色与字体降级、待确认项），不输出灰模过程稿、行号台账和五件套文档；仅当需求明确要求「审计模式」时，才按 `site/src/data/guide.ts` 的 `USAGE_STEPS` 走完整 6 步。
```

> [!TIP]
> 如果你打开了已部署的阅读站，也可以直接点击首页标题旁的「复制提示词」按钮。

## 收录范围

- **7 套官方设计体系**：TDesign（腾讯）、Carbon（IBM）、Polaris（Shopify）、Primer（GitHub）、Spectrum（Adobe）、Fluent 2（Microsoft）、Apple HIG，按产品形态自动分流，每个项目只认一套作唯一数值源。
- **标准与实战方法**：W3C / WCAG、NN/g、web.dev、Every Layout 等规范与方法全文，缺失维度按统一规则回源补齐。

## 设计案例

以下是 AI 按本库流程生成的实测首屏效果，完整案例与取值出处见 [`examples/`](examples/)：

<p align="center"><img src="examples/promptshelf/preview.png" alt="PromptShelf 案例首屏（GitHub Primer）" width="32.5%" /><img src="examples/allparse/preview.png" alt="ALLParse 案例首屏（Adobe Spectrum）" width="32.5%" /><img src="examples/chatcafe/preview.png" alt="ChatCafe 案例首屏（Apple HIG）" width="32.5%" /></p>

## 仓库目录

- [`content/`](content/)：官方设计规范与方法原文（收文规则见 [content/README.md](content/README.md)）
- [`examples/`](examples/) 与 [`briefs/`](briefs/)：实测案例成品（含取值溯源）与对应建站需求
- [`skills/`](skills/)：配套设计与评审 skill（分工见 [skills/README.md](skills/README.md)）
- [`site/`](site/)：配套阅读站源码

## License

本项目基于 [Apache-2.0](LICENSE) 协议开源，`content/` 中收录的第三方设计规范原文版权归原发布方所有。

基于本项目二次开发或分发时，请保留 [LICENSE](LICENSE) 与 [NOTICE](NOTICE)，也可直接复制以下归属声明到你的项目文档或 `NOTICE` 中：

```text
Based on UISpecs (https://github.com/hey-yx/ui-specs)
Copyright 2026 Yongxin Zhang, licensed under the Apache License, Version 2.0.
```
