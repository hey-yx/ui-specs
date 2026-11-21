# UISpecs · Agent 入口

1. 单站生成先读 `briefs/<slug>.md`；项目级方向看 `design.md`，生成规则看 `skills/README.md` 与 `briefs/layouts.md`。
2. 生成或改版前读 `skills/README.md`，确定唯一选型行（7 套官方体系按产品同构分流，不固定单一皮肤）并检查 `.hallmark/log.json` 避重。
3. 数值、原则、反例只从 `content/` 原文取；`skills/` 只给流程与门禁，选型行管全部数值与表面语言，Hallmark 与 `briefs/layouts.md` 管版式与外壳轮换。
4. Hallmark 管新形状与防模板化，UI/UX Design 管状态、ARIA 与四态；两者都不替代品牌文章。评审层用 `interfaces`（七域评审、改动评审）与 `impeccable` 的 craft-floor 量规，评审默认只读；交付前过 `scripts/check-ledger.py` 与 `scripts/check-frame.py`。
5. 公开提示词改动走 `site/src/data/guide.ts`，改前读 `ui-specs-maintenance` skill。
