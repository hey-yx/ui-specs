import { REFERENCE_SCREENS } from '../../data/reference-screens.ts'

export const prerender = true

/** 参考首屏（按需拉取）：未命中已验收构图且无 Hallmark 时，用来确定件位与密度，配色数值仍取主源 */
export function GET() {
  return new Response(
    JSON.stringify(
      {
        note: '只示范结构、件位与数据密度，不提供配色与视觉数值；配色、字阶、间距按所选主源原文取。',
        screens: REFERENCE_SCREENS,
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  )
}
