import { AI_PROMPT, DEV_STEPS, MAIN_SOURCES, USAGE_STEPS, MAINTENANCE_RULES, GAP_RULES, REQUIRED_RULES, REQUIRED_SCENARIOS, SHOW_PROJECT_SELECTION } from '../../data/guide.ts'
import starData from '../../data/star-points.json'
import { promptOrigin } from '../../lib/prompt-origin.ts'

export const prerender = true

/** 指南导出：结构化 JSON（开发者默认模式、审计模式、项目选型方案、维护规则、设计场景），在线可访问 */
export function GET({ site }: { site: URL | undefined }) {
  const origin = promptOrigin(site)
  const fill = (text: string) => text.replaceAll('<站点地址>', origin)
  const devSteps = DEV_STEPS.map((step) => ({
    ...step,
    prompt: fill(step.prompt),
  }))
  const usageSteps = USAGE_STEPS.map((step) => ({
    ...step,
    prompt: fill(step.prompt),
    desc: fill(step.desc),
    gate: fill(step.gate),
  }))
  return new Response(
    JSON.stringify(
      {
        ai_prompt: fill(AI_PROMPT),
        dev_steps: devSteps,
        usage_steps: usageSteps,
        required: REQUIRED_RULES,
        required_scenarios: REQUIRED_SCENARIOS,
        main_sources: MAIN_SOURCES.filter((m) => !m.archived),
        gap_rules: GAP_RULES,
        maintenance: MAINTENANCE_RULES,
        tasks: Object.fromEntries(
          Object.entries(starData.tasks).filter(([id]) => SHOW_PROJECT_SELECTION || id !== 's1'),
        ),
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  )
}
