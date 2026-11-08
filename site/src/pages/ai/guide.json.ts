import { MAIN_SOURCES, USAGE_STEPS, MAINTENANCE_RULES, GAP_RULES } from '../../data/guide.ts'
import starData from '../../data/star-points.json'

export const prerender = true

/** 指南导出：结构化 JSON（用法、项目选型方案、维护规则、设计场景），在线可访问 */
export function GET() {
  return new Response(
    JSON.stringify(
      {
        usage_steps: USAGE_STEPS,
        main_sources: MAIN_SOURCES,
        gap_rules: GAP_RULES,
        maintenance: MAINTENANCE_RULES,
        tasks: starData.tasks,
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  )
}
