import { getCollection } from 'astro:content'
import { buildCatalog } from '../lib/artifacts.mjs'

export const prerender = true

export async function GET() {
  const specs = await getCollection('specs')
  const catalog = buildCatalog(specs)
  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
