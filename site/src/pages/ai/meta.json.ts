import { buildMetaJson } from '../../lib/artifacts.mjs'

export const prerender = true

export async function GET() {
  return new Response(JSON.stringify(buildMetaJson(), null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
