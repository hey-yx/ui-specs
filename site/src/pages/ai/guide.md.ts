import { buildGuideMarkdown } from '../../data/guide.ts'
import { buildProjectPoints } from '../../data/project-points.ts'
import starData from '../../data/star-points.json'

export const prerender = true

/** 指南导出：纯 Markdown。在线可访问，可直接下载或给 AI 当上下文 */
export function GET() {
  return new Response(buildGuideMarkdown(starData.tasks, [...starData.points, ...buildProjectPoints()]), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'inline; filename="guide.md"',
    },
  })
}
