# UISpecs · UI 设计规范全文库

给 AI 用的 UI 设计规范原文库。收官方规范全文，每个数值都能回到原文的 `文件:行号`。

AI 按记忆写界面时，字号随手 16px、间距随手 10px，交付前查不出对错。这个库把取值依据钉在原文行号上。

> [!WARNING]
> 项目还在测试阶段，按本库出稿的效果不稳定，别直接拿去交付。

> [!IMPORTANT]
> 库内规范原文的版权归各官方体系与原作者，引用时连出处一起给。本站自己的版式不外借。

## 能做什么

- 按产品语境选一套基准规范，一个项目只用一套，数值冲突有裁决规则，缺的维度有回源与派生规则。
- 按设计场景或具体问题挑设计点，每个点直接指到该读的几篇文章。
- 七步流程从定语境走到测试回炉，每步带判断依据，做完能自己核对。
- 首页标题右侧有「复制提示词」，整段粘给 AI，它就按这个库出稿。
- 案例成品当验收：每个数值都标了出处，学没学会看得见。

来源官方优先：W3C、Apple HIG、Material 3、Fluent 2、Carbon、Polaris、Primer、GOV.UK、USWDS、NHS、Atlassian、Ant Design、TDesign 等，也收 NN/g、web.dev、Every Layout 这类文章。每篇的原始地址与抓取日期写在文件头，收文细则见 [content/README.md](content/README.md)。

## 页面

首页是入口，给全库统计与分区列表，顶栏三件事：案例、需求、地图。

| 页面 | 上面有什么 |
| ---- | ---- |
| `/s/<分区>/` | 该分区的全部条目，带来源 |
| `/a/<分区>/<文件名>/` | 文章全文，标出来源、字数和采集日期，附原文 Markdown 与 JSON |
| `/starmap/` | 设计地图：场景和设计点连成一张图，可按场景筛选，点开看选点标准和该读的文章 |
| `/examples/` | 案例站，每张卡给主色、结构、版型，点开能看成品、DECISIONS 与 FINDINGS |
| `/briefs/` | 各站的建站需求，可整份下载；已出成品的站，详情页顶部直接跳过去 |

顶部搜索框或 ⌘K 搜全文。另有机器可读的端点：`/catalog.json` 全库目录，`/ai/design-points.json` 指南包，`/ai/guide.md` 与 `/ai/guide.json` 指南文本，`/ai/case-briefs.json` 建站需求，`/md/<路径>.md` 单篇原文。

## 设计案例

案例是验收手段，看 AI 学没学会，就看成品里每个数值能不能给出 `文件:行号`。

成品在 [`examples/`](examples/)，单文件 HTML；未开框架的站不请求外部资源，开框架的站只引 esm.sh 的框架与组件库。基准规范按该站的产品语境选，多数站走 TDesign，payloaddeck 走 Primer。每站的 `DECISIONS.md` 记数值出处，`FINDINGS.md` 记基准规范覆盖不到的量怎么补，做法见 [`examples/README.md`](examples/README.md)。

## 本地运行

```bash
cd site
npm install
npm run dev      # 改 content/ 即热更新
npm run build    # 产出 site/dist/
```

上线用 `SITE_URL=https://你的域名 npm run build`，页面链接、分享卡片和 sitemap 都按它生成。静态服务器要给 `.md` 与 `.json` 补 `charset=utf-8`，否则浏览器按 latin-1 解码，中文全成乱码。加文章按 [content/README.md](content/README.md) 走，构建会校验 frontmatter、id 与全部文章引用。
