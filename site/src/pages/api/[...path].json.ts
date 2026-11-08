import { getCollection } from 'astro:content'

export const prerender = true

/** 单篇 JSON 端点：结构化元数据，给程序消费 */
export async function getStaticPaths() {
  const specs = await getCollection('specs')
  return specs.map((spec) => ({
    params: { path: spec.data.file.replace(/\.md$/, '') },
    props: { spec },
  }))
}

export async function GET({ props }) {
  const spec = props.spec
  const stem = spec.data.file.replace(/^[^/]+\//, '').replace(/\.md$/, '')
  const payload = {
    id: spec.data.id,
    title: spec.data.title,
    publisher: spec.data.publisher,
    section: spec.data.section,
    tag: spec.data.tag,
    source: spec.data.source,
    fetched: spec.data.fetched,
    status: spec.data.status,
    known: spec.data.known ?? null,
    chars: spec.data.chars,
    imgs: spec.data.imgs,
    path: `/a/${spec.data.section}/${stem}/`,
    raw: `/md/${spec.data.file}`,
  }
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
