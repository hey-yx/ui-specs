import { getCollection } from 'astro:content'
import { buildDesignPoints } from '../../../lib/artifacts.mjs'
import starData from '../../../data/star-points.json'
import { buildProjectPoints } from '../../../data/project-points.ts'
import { promptOrigin } from '../../../lib/prompt-origin.ts'

export const prerender = true

export async function getStaticPaths() {
  const specs = await getCollection('specs')
  const star = { ...starData, points: [...starData.points, ...buildProjectPoints()] }
  const payload = buildDesignPoints(specs, star, '')
  return payload.points.map((point: { id: string }) => ({
    params: { id: point.id },
    props: { point },
  }))
}

/** 单个设计点详情（1–3 KB）：按需拉取，附每篇文章的 /md/<path> 直链 */
export function GET({
  props,
  site,
}: {
  props: { point: { articles?: Array<{ path: string }>; method?: { path: string }; [key: string]: unknown } }
  site: URL | undefined
}) {
  const origin = promptOrigin(site)
  const { point } = props
  const enriched = {
    ...point,
    ...(point.method
      ? { method: { ...point.method, md_url: `${origin}/md/${point.method.path}` } }
      : {}),
    articles: (point.articles ?? []).map((a) => ({
      ...a,
      md_url: `${origin}/md/${a.path}`,
    })),
  }
  return new Response(JSON.stringify(enriched, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
