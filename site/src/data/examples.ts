/** 设计案例清单：构建时扫 examples/ 目录生成，不再手写。
 *
 * 每站放齐四件套加 meta.json 就自动出现在 /examples/ 与首页统计里：
 *   index.html / DECISIONS.md / FINDINGS.md / preview.png / meta.json
 * meta.json 记案例卡要展示的五项（title、tagline、accent、structure、layout），
 * slug 取目录名。顺序跟 briefs/sites.json 的需求顺序；缺件、字段为空、
 * 目录里有站但需求没写，都在构建时直接失败，避免线上出现半个案例。
 * dev 启动时才读这份清单，新增站点要重启 dev 才出现；构建不受影响。
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

export interface ExampleCase {
  slug: string
  name: string
  tagline: string
  accent: string
  structure: string
  layout: string
}

const REQUIRED_FILES = ['index.html', 'DECISIONS.md', 'FINDINGS.md', 'preview.png', 'meta.json']
const META_FIELDS = ['name', 'tagline', 'accent', 'structure', 'layout'] as const

/** 构建与 dev 的 cwd 是 site/；从仓库根跑也可能，两个位置都试一遍 */
function repoFile(...segments: string[]): string {
  const candidates = [resolve(process.cwd(), '..', ...segments), resolve(process.cwd(), ...segments)]
  const hit = candidates.find((p) => existsSync(p))
  if (!hit) throw new Error(`找不到 ${segments.join('/')}，试过：${candidates.join(' / ')}`)
  return hit
}

const EXAMPLES_ROOT = repoFile('examples')
const SITE_ORDER: string[] = (
  JSON.parse(readFileSync(repoFile('briefs/sites.json'), 'utf8')) as { sites: { slug: string }[] }
).sites.map((b) => b.slug)

const slugs = readdirSync(EXAMPLES_ROOT)
  .filter((name) => statSync(join(EXAMPLES_ROOT, name)).isDirectory())
  .sort()

const problems: string[] = []
for (const slug of slugs) {
  const dir = join(EXAMPLES_ROOT, slug)
  for (const file of REQUIRED_FILES) {
    if (!existsSync(join(dir, file))) problems.push(`examples/${slug} 缺 ${file}`)
  }
}

const bySlug = new Map<string, ExampleCase>()
for (const slug of slugs) {
  const metaPath = join(EXAMPLES_ROOT, slug, 'meta.json')
  if (!existsSync(metaPath)) continue
  const meta = JSON.parse(readFileSync(metaPath, 'utf8')) as Record<string, unknown>
  for (const field of META_FIELDS) {
    if (typeof meta[field] !== 'string' || !(meta[field] as string).trim()) {
      problems.push(`examples/${slug}/meta.json 的 ${field} 为空`)
    }
  }
  bySlug.set(slug, { slug, ...(meta as unknown as Omit<ExampleCase, 'slug'>) })
}
if (problems.length) throw new Error(`案例目录不完整：\n  - ${problems.join('\n  - ')}`)

const unknown = slugs.filter((slug) => !SITE_ORDER.includes(slug))
if (unknown.length) throw new Error(`examples/ 里有需求里没有的站：${unknown.join(', ')}`)

/** 顺序跟 briefs/sites.json，页面排列与需求列表一致；需求里还没成品的不列 */
export const CASES: ExampleCase[] = SITE_ORDER.filter((slug) => bySlug.has(slug)).map(
  (slug) => bySlug.get(slug)!,
)
