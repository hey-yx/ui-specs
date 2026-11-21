import { buildGuideMarkdown } from '../../data/guide.ts'
import { buildProjectPoints } from '../../data/project-points.ts'
import { promptOrigin } from '../../lib/prompt-origin.ts'
import starData from '../../data/star-points.json'

export const prerender = true

/** 指南导出：纯 Markdown。在线可访问，可直接下载或给 AI 当上下文 */
export function GET({ site }: { site: URL | undefined }) {
  const guide = buildGuideMarkdown(starData.tasks, [...starData.points, ...buildProjectPoints()]).replaceAll(
    '<站点地址>',
    promptOrigin(site),
  )
  return new Response(guide, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'inline; filename="guide.md"',
    },
  })
}
