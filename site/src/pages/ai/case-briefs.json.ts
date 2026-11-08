/** 建站需求导出：给 AI 直接拉取，和 /briefs/ 页面共用 briefs/sites.json */
import { BRIEFS_NOTE, BRIEFS_UPDATED, SITE_BRIEFS } from '../../data/case-briefs'

export const prerender = true

const usage = [
  '这是测试站点在生成前定下的建站需求，不是成品说明书。',
  '用法：拿一份需求，按指南内容（/ai/guide.md、/ai/design-points.json）七步走：定语境、定基准规范、选设计点、读原文取值、出稿、测试回炉。',
  '需求约束产品要做什么、给谁用、必须有哪些内容、不做什么，外加语气与一个差异化约束（色相方向或结构倾向）。具体色值、尺寸与完整版式由生成时按指南决定，不要从需求里推数值。',
  '成品与取值记录在 /examples/，每站另有 DECISIONS.md（每个数值的出处）与 FINDINGS.md（基准规范缺口与派生）。',
].join('\n')

export function GET() {
  return new Response(
    JSON.stringify(
      {
        updated: BRIEFS_UPDATED,
        count: SITE_BRIEFS.length,
        note: BRIEFS_NOTE,
        usage,
        sites: SITE_BRIEFS,
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
