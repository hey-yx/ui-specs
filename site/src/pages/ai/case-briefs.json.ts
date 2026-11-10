/** 建站需求导出：给 AI 直接拉取，和 /briefs/ 页面共用仓库根 briefs/*.md */
import { BRIEFS_NOTE, loadBriefs } from '../../data/case-briefs'

export const prerender = true

const usage = [
  '这是测试站点在生成前定下的建站需求，不是成品说明书。',
  '用法：拿一份需求，按指南内容（/ai/guide.md、/ai/design-points.json）七步走：定语境、定基准规范、选设计点、读原文取值、出稿、测试回炉。',
  '需求只写产品是什么、给谁用。配色与版式由 hallmark 定，数值由基准规范定，页面要有哪些区块与文案用什么语气由生成时自己定，不要从需求里推数值。framework 可选 react 或 vue，省略即不开框架、按静态 HTML 手写；开了就用所选基准规范那一行配套的官方组件库。',
  '成品与取值记录在 /examples/，每站另有 DECISIONS.md（每个数值的出处）与 FINDINGS.md（基准规范缺口与派生）。',
].join('\n')

export async function GET() {
  const { briefs, updated } = await loadBriefs()
  return new Response(
    JSON.stringify(
      {
        updated,
        count: briefs.length,
        note: BRIEFS_NOTE,
        usage,
        sites: briefs,
      },
      null,
      2,
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Disposition': 'inline; filename="case-briefs.json"',
      },
    },
  )
}
