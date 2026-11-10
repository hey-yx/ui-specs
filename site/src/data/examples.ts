/** 设计案例清单：扫 examples/ 目录生成，不再手写。
 *
 * 每站放齐四件套加 meta.json 就自动出现在 /examples/ 与首页统计里：
 *   index.html / DECISIONS.md / FINDINGS.md / preview.png / meta.json
 * meta.json 记案例卡要展示的五项（title、tagline、accent、structure、layout），
 * slug 取目录名，顺序按目录名。缺件、字段为空都在构建时直接失败，避免线上出现半个案例；
 * 「案例有没有对应需求」在 case-briefs.ts 里校验（需求是 briefs/*.md，不在这里读）。
 *
 * 构建走 allCases()（严格校验）；页面渲染走 loadCases({ strict: false })，跳过还没放齐
 * 五件的站，dev 每次请求重扫：删站或补站后刷新就变，不占着空位等重启。
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

/** 扫盘生成案例清单。strict（构建用）有问题直接抛错；宽松模式跳过不完整的站 */
export function loadCases({ strict = true }: { strict?: boolean } = {}): ExampleCase[] {
  const root = repoFile('examples')
  const slugs = readdirSync(root)
    .filter((name) => statSync(join(root, name)).isDirectory())
    .sort()

  const problems: string[] = []
  const cases: ExampleCase[] = []
  for (const slug of slugs) {
    const dir = join(root, slug)
    const missing = REQUIRED_FILES.filter((file) => !existsSync(join(dir, file)))
    if (missing.length) {
      problems.push(...missing.map((file) => `examples/${slug} 缺 ${file}`))
      continue
    }
    const meta = JSON.parse(readFileSync(join(dir, 'meta.json'), 'utf8')) as Record<string, unknown>
    const blank = META_FIELDS.filter(
      (field) => typeof meta[field] !== 'string' || !(meta[field] as string).trim(),
    )
    if (blank.length) {
      problems.push(...blank.map((field) => `examples/${slug}/meta.json 的 ${field} 为空`))
      continue
    }
    cases.push({ slug, ...(meta as unknown as Omit<ExampleCase, 'slug'>) })
  }

  if (strict && problems.length) throw new Error(`案例目录不完整：\n  - ${problems.join('\n  - ')}`)
  return cases
}

let snapshot: ExampleCase[] | undefined

/** 构建期快照：第一次取用时严格校验，缺件直接失败。页面渲染不要用它，走 loadCases({ strict: false }) */
export function allCases(): ExampleCase[] {
  snapshot ??= loadCases()
  return snapshot
}
