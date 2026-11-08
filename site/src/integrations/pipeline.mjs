/**
 * 内容流水线集成：构建前校验 content/ 与指南数据（site/src/data/guide.ts）的引用。
 *
 *   - astro:build:start —— 校验 content/（frontmatter、id 唯一、站内链接）
 *     与 site/src/data/guide.ts 里引用的文章，有问题直接抛错，让构建失败，
 *     而不是把坏数据发布出去。
 */
import { cp, readFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { listContentFiles, loadDoc } from '../lib/content.js'
import { validateDocs, validateStarPoints } from '../lib/validate.ts'
import { buildProjectPoints } from '../data/project-points.ts'

const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const REPO_ROOT = join(SITE_ROOT, '..')
const CONTENT_ROOT = join(REPO_ROOT, 'content')
const USAGE_FILE = join(REPO_ROOT, 'site/src/data/guide.ts')
const STAR_FILE = join(SITE_ROOT, 'src', 'data', 'star-points.json')

const EXAMPLES_ROOT = join(REPO_ROOT, 'examples')
const EXAMPLES_OUT = join(SITE_ROOT, 'public', 'examples')
const BRIEFS_ROOT = join(REPO_ROOT, 'briefs')
const BRIEFS_OUT = join(SITE_ROOT, 'public', 'briefs')

export default function uiSpecsPipeline() {
  return {
    name: 'ui-specs-pipeline',
    hooks: {
      // 案例成品（examples/）与建站需求（briefs/）分别同步进站点静态目录，页面与预览图都不复制第二份
      'astro:config:setup': async () => {
        // cp 只增不清：先删目标目录，删掉的案例才不会残留在发布目录
        await rm(EXAMPLES_OUT, { recursive: true, force: true })
        await cp(EXAMPLES_ROOT, EXAMPLES_OUT, { recursive: true, force: true })
        // 需求单独放 briefs/，/briefs/sites.json 与 briefs/<站>.md 原文都从这里来
        await rm(BRIEFS_OUT, { recursive: true, force: true })
        await cp(BRIEFS_ROOT, BRIEFS_OUT, { recursive: true, force: true })
      },
      'astro:build:start': async () => {
        const files = await listContentFiles(CONTENT_ROOT)
        const docs = []
        for (const file of files) {
          const doc = await loadDoc(CONTENT_ROOT, file)
          if (doc) docs.push(doc)
        }
        const usage = await readFile(USAGE_FILE, 'utf8')
        const byFile = new Map(docs.map((d) => [d.file, d]))
        const sectionKeys = new Set(docs.map((d) => d.section))
        const star = JSON.parse(await readFile(STAR_FILE, 'utf8'))
        const errors = [
          ...validateDocs(docs, usage),
          ...validateStarPoints(star.points, byFile, sectionKeys, buildProjectPoints().flatMap((p) => p.articles)),
        ]
        if (errors.length) {
          throw new Error(
            `内容校验未通过（${errors.length} 项）：\n` + errors.map((e) => `  - ${e}`).join('\n'),
          )
        }
      },
    },
  }
}
