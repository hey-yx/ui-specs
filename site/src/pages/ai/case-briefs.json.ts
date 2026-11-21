/** 建站需求导出：给 AI 直接拉取，和 /briefs/ 页面共用仓库根 briefs/*.md */
import { BRIEFS_NOTE, loadBriefs } from '../../data/case-briefs'
import { USAGE_STEPS } from '../../data/guide.ts'

export const prerender = true

const usage = [
  '这是测试站点在生成前定下的建站需求，不是成品说明书。',
  `用法：拿一份需求，按指南内容（/ai/guide.md、/ai/design-points.json）${USAGE_STEPS.length} 步走：${USAGE_STEPS.map((s) => s.title).join('、')}。`,
  '需求写产品是什么、给谁用、主任务与关键内容，缺的事实标 [待确认] 或演示口径。版式由 hallmark 定，强调色与数值按设计点的原文取，页面要有哪些区块与文案用什么语气由生成时自己定，不要从需求里推数值。framework 可选 react 或 vue，省略即不开框架、按静态 HTML 手写；开了就用与该站数值文章同体系的官方组件库。',
  '成品与取值记录在 /examples/，每站另有 DECISIONS.md（每个数值的出处）与 FINDINGS.md（数值文章缺口与派生）。',
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
