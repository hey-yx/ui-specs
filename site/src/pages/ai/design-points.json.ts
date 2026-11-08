import { getCollection } from 'astro:content'
import { buildDesignPoints } from '../../lib/artifacts.mjs'
import starData from '../../data/star-points.json'
import { buildGuideMarkdown } from '../../data/guide.ts'
import { buildProjectPoints } from '../../data/project-points.ts'

export const prerender = true

/** AI 指南包端点：设计点 + 设计场景 + 该读文章 + 指南，一次拉全 */
export async function GET() {
  const specs = await getCollection('specs')
  // 指南文本由站点数据现场生成，不再维护手写文档副本；
  // slim 模式去掉与 points 重复的任务→文章表（独立全文见 /ai/guide.md）
  const star = { ...starData, points: [...starData.points, ...buildProjectPoints()] }
  const guide = buildGuideMarkdown(star.tasks, star.points, { mode: 'slim' })
  const payload = buildDesignPoints(specs, star, guide)
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
