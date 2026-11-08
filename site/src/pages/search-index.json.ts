import { getCollection } from 'astro:content'
import { buildModel, specPath } from '../lib/model'
import { buildIndex } from '../lib/search'

export const prerender = true

const specs = await getCollection('specs')
const model = buildModel(specs)

const docs = model.all.map((spec) => {
  const section = model.bySection.get(spec.data.section)
  return {
    meta: {
      id: spec.data.id,
      title: spec.data.title,
      publisher: spec.data.publisher,
      section: spec.data.section,
      sectionTitle: section.title,
      tag: spec.data.tag,
      path: specPath(spec),
    },
    body: spec.body ?? '',
  }
})

const index = buildIndex(docs)

export async function GET() {
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
