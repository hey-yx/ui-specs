import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  GAP_RULES,
  MAIN_SOURCES,
  METHOD_REQUIRED,
  REQUIRED_RULES,
  REQUIRED_SCENARIOS,
  SHOW_PROJECT_SELECTION,
} from '../../data/guide.ts'
import starData from '../../data/star-points.json'
import { promptOrigin } from '../../lib/prompt-origin.ts'

export const prerender = true

function loadRecentMacrostructures(): string[] {
  for (const start of [process.cwd(), dirname(fileURLToPath(import.meta.url))]) {
    let cur = resolve(start)
    for (let i = 0; i < 8; i++) {
      const p = join(cur, '.hallmark', 'log.json')
      if (existsSync(p)) {
        const entries = JSON.parse(readFileSync(p, 'utf8')) as { macrostructure?: string }[]
        return entries.slice(0, 3).map((e) => e.macrostructure).filter((x): x is string => Boolean(x))
      }
      const parent = dirname(cur)
      if (parent === cur) break
      cur = parent
    }
  }
  return []
}

/**
 * 轻量总路由（约 10 KB）：替代一次性拉取完整 design-points.json。
 * 提供端点模板、项目选型摘要、最近避重记录、场景必读点与缺口回源规则；命中哪个点再按需拉 /ai/points/<id>.json 与 /md/<path>。
 */
export function GET({ site }: { site: URL | undefined }) {
  const origin = promptOrigin(site)
  const payload = {
    note: '轻量路由包。按产品语境从 main_sources 定唯一数值底座，参考 reference_screens 与 howto/layouts 自由组合骨架与外壳（顶栏/页脚/页底色避重），再按需拉 /ai/points/<id>.json 与原文 /md/<path>。',
    endpoints: {
      point_detail: `${origin}/ai/points/<id>.json`,
      article_markdown: `${origin}/md/<path>`,
      reference_screens: `${origin}/ai/reference-screens.json`,
      full_design_points: `${origin}/ai/design-points.json`,
      full_guide_markdown: `${origin}/ai/guide.md`,
    },
    recent_macrostructures: loadRecentMacrostructures(),
    priority_rule:
      '可访问性 > 选型行数值 > 组件库行为 > 风格气质。按产品同构从 7 套官方选型择其一作为唯一数值源；外壳（页底色、顶栏、页脚、分隔线）随选型与产品形态自由组合并批内避重，不固定单一灰底或默认外壳；brands/ 仅用于明确复刻某品牌，禁止拿英文品牌皮肤硬套普通中文产品。',
    layers: {
      main_sources: '全场数值底座（色板、字阶、行高、间距、圆角、暗/亮极性）：一个项目只选一行，7 套体系按产品同构分流，不默认强套单一皮肤',
      reference_screens: '首屏件位与数据密度参考（不含配色与圆角），与 howto/layouts 一起定骨架',
      howto_and_layouts: 'howto 管视觉层级与配色比例，layouts 管区块转化顺序；顶栏/页脚/页底色按产品形态与批内避重自由组合',
      brands: '仅在明确复刻某品牌官网或借鉴局部视觉手法时读取，不当中文产品通用皮肤',
      reference_tables: 'a11y / patterns / dataviz / components / standards 按功能命中从下方 required_scenarios 触发点查',
    },
    ...(SHOW_PROJECT_SELECTION
      ? {
          main_sources: MAIN_SOURCES.filter((m) => !m.archived).map((m) => ({
            id: m.id,
            context: m.context,
            source: m.source,
            stacks: m.stacks ?? [],
            scenario: m.scenario,
            files_count: m.files.length,
            point_url: m.id && m.files.length > 0 ? `${origin}/ai/points/${m.id}.json` : undefined,
            note: m.note,
          })),
        }
      : {}),
    required_rules: REQUIRED_RULES,
    method_required: METHOD_REQUIRED.map((m) => ({
      ...m,
      point_url: `${origin}/ai/points/${m.id}.json`,
    })),
    required_scenarios: REQUIRED_SCENARIOS.map((s) => ({
      ...s,
      name: (starData.tasks as Record<string, { name: string }>)[s.id]?.name ?? '',
    })),
    gap_rules: GAP_RULES,
  }

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
