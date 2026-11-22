# AnyTTL 验收记录

## 门禁与脚本结果

- `node skills/hallmark/scripts/sloplint.mjs examples/anyttl/index.html --scope app --genre modern-minimal`：`0 FAIL, 0 REFLEX, 0 WARN`（首轮抓出 10 处 CSS 颜色字面量、5 处非 4px 间距、1 处缺 `:active`、1 处缺 `meta description`，全部修复后复测通过）。
- `python3 scripts/check-ledger.py examples/anyttl/DECISIONS.md`：通过（引用 24 处：带值 18，原则 6，缩写 0）。
- `python3 scripts/check-frame.py`：通过（`batch=2026-11-22-a; nav=N8; footer=Ft2; base=#ffffff`）。
- `python3 scripts/check-skills.py`：PASS 4/4。
- `python3 scripts/score-case.py examples/anyttl --set four=pass contrast=pass touch=pass states=pass keyboard=pass firstscreen=pass`：出处 40/40，已知项 85/100（其余 15 分为行高/页脚四件/跨内核/交互 `--set` 待注项）。

## 四档视口实测（Google Chrome Headless + CDP）

| 视口宽度 | scrollWidth | innerWidth | 横向溢出 | 最小可点目标高度 | 首个可操作对象 Y | 刷新按钮底边 Y |
| --- | --- | --- | --- | --- | --- | --- |
| 320px | 320 | 320 | 无 | 24px | 121px | 352px |
| 375px | 375 | 375 | 无 | 24px | 121px | 352px |
| 768px | 753 | 768 | 无 | 24px | 49px | 146px |
| 1280px | 1265 | 1280 | 无 | 24px | 49px | 146px |

说明：首轮实测发现 `.brand-name`、页脚链接与复选框在桌面端高度仅 15px，已将所有链接/按钮/复选框桌面最小高度补齐至 `>= 24px`（`< 768px` 移动端文本控件与链接补齐至 `>= 44px`），复测通过。

## 交互与四态实测（前后状态记录）

1. **点击「仅看超阈值」**：列表从 7 行过滤为 1 行（`web-checkout-prod`，412,800 / 45 万次，91.7%）。
2. **行内调整限额**：点击 `web-checkout-prod` 的「调整限额」，行内展开表单且输入框初值为 `45`；输入 `60` 后预览区实时更新为 `预计占用 68.8% · 剩余余量 187,200 次 · 低于 80% 阈值，状态正常`；提交保存后，顶部「超阈值密钥」计数从 `1` 降为 `0`，`#live-banner` 播报「已将 web-checkout-prod 限额更新为 60 万次（当前占用 68.8%，状态正常，429 限流已解除），新配置已生效。」。
3. **批量停用**：未勾选时 `#batch-bar` 为 `hidden: true` 不占位置；勾选 1 行后 `#batch-bar` 出现并显示「已选择 1 把密钥」；点击「批量停用」后该行转为「已停用」并播报「已批量停用 1 把密钥，新请求将立即被网关拒绝。」。
4. **四态切换**：通过 `#view-state-select` 依次切换 `loading`（骨架屏可见）、`empty`（空列表引导与「返回密钥列表」动作）、`error`（显示错误码 `upstream_timeout` 与「重试加载 / 查看本地快照」双出路），均正常渲染。

## 对比度与静态检查

- 主正文 `#1f2328` 对白底 `#ffffff`：15.4:1（>= 4.5:1）。
- 次文字与控件边框 `#59636e` 对白底 `#ffffff`：5.9:1（>= 4.5:1 且满足非文本 3:1）。
- 顶栏白字 `#ffffff` / `#f0f6fc` 对深底 `#25292e`：> 13:1。
- 外部请求数：0（纯单文件 HTML，无外部 CSS / JS / 字体 / 图片请求）。
- `prefers-reduced-motion: reduce`：已配置关闭所有 `transition` 与 `animation`。
