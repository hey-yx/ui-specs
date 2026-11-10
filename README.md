# UISpecs · UI 设计规范全文库

给 AI 用的 UI 设计规范原文库。收官方规范全文，每个数值都能回到原文的 `文件:行号`。

AI 凭记忆写界面时，字号随手 16px、间距随手 10px，交付前查不出对错。这个库把每个取值的依据钉在原文行号上。

> [!WARNING]
> 项目还在测试阶段，按本库出稿的效果不稳定，别直接拿去交付。

> [!IMPORTANT]
> 库内规范原文的版权归各官方体系与原作者，引用时连出处一起给。本站自己的版式不外借。

## 能做什么

- 每个项目只认一套官方规范当基准，数值冲突有裁决规则，缺的维度说明怎么补。
- 按场景或具体问题挑要用的规范条目，每条直接指到该读的原文。
- 从定项目类型到出稿自测的七步流程，每步都写了怎么算做完。
- 首页标题右侧有「复制提示词」，整段粘给 AI，它就按这个库出稿。
- 案例成品当验收：每个数值都标了原文出处。

来源以官方规范优先：W3C、Apple HIG、Material 3、Fluent 2、Carbon、Polaris、Primer、GOV.UK、USWDS、NHS、Atlassian、Ant Design、TDesign 等，也收 NN/g、web.dev、Every Layout 这类文章。每篇的原始地址与抓取日期写在文件开头，收文规则见 [content/README.md](content/README.md)。

## 页面

首页是入口，给全库统计与分区列表，顶栏三个入口：案例、需求、地图。

| 页面 | 上面有什么 |
| ---- | ---- |
| `/s/<分区>/` | 该分区的全部条目，带来源 |
| `/a/<分区>/<文件名>/` | 文章全文，标出来源、字数和采集日期，可下载原文 Markdown 与 JSON |
| `/starmap/` | 设计地图：按场景筛设计点（一套场景里该用的规范条目），点开看什么时候该用它、该读哪几篇原文 |
| `/examples/` | 案例成品，每站标出用的规范、主色和页面结构，点开能看成品与取值记录 |
| `/briefs/` | 各站的建站需求，可整份下载；已有成品的站，详情页顶部直接跳过去 |

顶部搜索框或 ⌘K 搜全文。给 AI 读的还有几个地址：`/catalog.json` 是全库目录，`/ai/design-points.json` 是全部设计点，`/ai/guide.md` 与 `/ai/guide.json` 是用法说明，`/ai/case-briefs.json` 是建站需求，`/md/<路径>.md` 是单篇原文。

## 设计案例

案例是验收手段：看 AI 学没学会，就看成品里每个数值能不能给出 `文件:行号`。

成品在 [`examples/`](examples/)，都是单文件 HTML。没开框架的站不请求任何外部资源，开了框架的站只从公共 CDN 引 React 或 Vue 的组件库。每站按自己的产品类型选一套官方规范，多数用 TDesign，一个用 GitHub 的 Primer。站里的取值记录写了每个数值的原文出处，规范覆盖不到的维度怎么补也记在站里，做法见 [`examples/README.md`](examples/README.md)。

## 本地运行

```bash
cd site
npm install
npm run dev      # 改 content/ 即热更新
npm run build    # 产出 site/dist/
```

上线时用 `SITE_URL=https://你的域名 npm run build`，页面链接、分享卡片和 sitemap 都按它生成。服务器要让 `.md` 与 `.json` 按 UTF-8 返回，否则中文会显示成乱码。加文章按 [content/README.md](content/README.md) 走，格式或引用不对，构建会直接报错。
