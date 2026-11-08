export const prerender = true

export async function GET({ site }) {
  const base = (site ?? new URL('http://localhost:4321')).href.replace(/\/$/, '')
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
