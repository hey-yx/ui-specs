/**
 * 内容流水线集成：构建前校验 content/ 与指南数据（site/src/data/guide.ts）的引用。
 *
 *   - astro:build:start —— 校验 content/（frontmatter、id 唯一、站内链接）
 *     与 site/src/data/guide.ts 里引用的文章，有问题直接抛错，让构建失败，
 *     而不是把坏数据发布出去。
 */
import { cp, mkdir, readFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative, resolve, sep } from 'node:path'

import { listContentFiles, loadDoc } from '../lib/content.js'
import { validateDocs, validateStarPoints } from '../lib/validate.ts'
import { buildProjectPoints } from '../data/project-points.ts'
import { MAIN_SOURCES } from '../data/guide.ts'

const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const REPO_ROOT = join(SITE_ROOT, '..')
const CONTENT_ROOT = join(REPO_ROOT, 'content')
const USAGE_FILE = join(REPO_ROOT, 'site/src/data/guide.ts')
const STAR_FILE = join(SITE_ROOT, 'src', 'data', 'star-points.json')

const EXAMPLES_ROOT = join(REPO_ROOT, 'examples')
const EXAMPLES_OUT = join(SITE_ROOT, 'public', 'examples')
const BRIEFS_ROOT = join(REPO_ROOT, 'briefs')
const BRIEFS_OUT = join(SITE_ROOT, 'public', 'briefs')

// dev 下把源目录的增删改镜像到站点静态目录。构建仍在 astro:config:setup 整目录复制一次；
// 这里只服务 dev，避免每改一版案例都要重跑 30 秒构建。
function mirrorInDev(server, from, to) {
  const targets = new Map()
  const inside = (path) => {
    const abs = resolve(path)
    return abs.startsWith(from + sep) ? abs : null
  }
  const schedule = (key, task) => {
    clearTimeout(targets.get(key))
    targets.set(
      key,
      setTimeout(() => {
        targets.delete(key)
        task().catch((err) => server.config.logger.warn(`[ui-specs] 同步 ${key} 失败：${err.message}`))
      }, 40),
    )
  }
  const copy = (source) => {
    const dest = join(to, relative(from, source))
    schedule(dest, async () => {
      await mkdir(dirname(dest), { recursive: true })
      await cp(source, dest, { force: true })
    })
  }
  const remove = (source, recursive = false) => {
    const dest = join(to, relative(from, source))
    schedule(dest, () => rm(dest, { recursive, force: true }))
  }
  server.watcher.add(from)
  server.watcher.on('add', (path) => {
    const source = inside(path)
    if (source) copy(source)
  })
  server.watcher.on('change', (path) => {
    const source = inside(path)
    if (source) copy(source)
  })
  server.watcher.on('unlink', (path) => {
    const source = inside(path)
    if (source) remove(source)
  })
  server.watcher.on('unlinkDir', (path) => {
    const source = inside(path)
    if (source) remove(source, true)
  })
}

export default function uiSpecsPipeline() {
  return {
    name: 'ui-specs-pipeline',
    hooks: {
      // 案例成品（examples/）与建站需求（briefs/）分别同步进站点静态目录，页面与预览图都不复制第二份
      'astro:config:setup': async () => {
        // cp 只增不清：先删目标目录，删掉的案例才不会残留在发布目录
        await rm(EXAMPLES_OUT, { recursive: true, force: true })
        await cp(EXAMPLES_ROOT, EXAMPLES_OUT, { recursive: true, force: true })
        // 需求单独放 briefs/，/briefs/<站>.md 原文都从这里来
        await rm(BRIEFS_OUT, { recursive: true, force: true })
        await cp(BRIEFS_ROOT, BRIEFS_OUT, { recursive: true, force: true })
      },
      // dev 只在启动时复制一次，改案例后 public 副本会落后；监听源目录实时补齐
      'astro:server:setup': ({ server }) => {
        mirrorInDev(server, EXAMPLES_ROOT, EXAMPLES_OUT)
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
        const archivedArticles = MAIN_SOURCES
          .filter((m) => m.archived)
          .flatMap((m) => m.files.map((f) => f.replace(/^content\//, '')))
        const errors = [
          ...validateDocs(docs, usage),
          ...validateStarPoints(star.points, byFile, sectionKeys, [
            ...buildProjectPoints().flatMap((p) => p.articles),
            ...archivedArticles,
          ], star.tasks),
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
