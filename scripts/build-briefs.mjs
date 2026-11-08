#!/usr/bin/env node
/**
 * 把 briefs/sites.json 渲染成每站一份的 briefs/<slug>.md。
 *
 *   node scripts/build-briefs.mjs          写盘
 *   node scripts/build-briefs.mjs --check  只比对，不一致退出码 1（接 CI 用）
 *
 * 需求真源只有 sites.json，Markdown 是给人和子代理读的派生件：
 * 二者不一致时以 JSON 为准，重跑本脚本即可。行号会被 DECISIONS 引用，
 * 所以模板结构（字段顺序、必备内容一段一行）改动要同步核对引用。
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BRIEFS_DIR = join(REPO_ROOT, 'briefs')
const JSON_FILE = join(BRIEFS_DIR, 'sites.json')

const data = JSON.parse(readFileSync(JSON_FILE, 'utf8'))

export function renderBrief(site) {
  const lines = [
    `# 建站需求 · ${site.name}（${site.slug}）`,
    '',
    `- 语言：${site.lang}`,
    `- 产品：${site.product}`,
    `- 受众：${site.audience}`,
    `- 核心任务：${site.coreTask}`,
    `- 语气：${site.tone}`,
    `- 差异化约束：${site.direction}`,
    '- 页面必备内容：',
    ...site.mustHave.map((item) => `  - ${item}`),
    `- 边界：${site.outOfScope}`,
    `- 名字：${site.name}`,
    `- 分类：${site.category}`,
    '',
    '> 本文件由 `briefs/sites.json` 生成，改需求改 JSON；站点页面与 `/ai/case-briefs.json` 读同一份。',
    '',
  ]
  return lines.join('\n')
}

const check = process.argv.includes('--check')
const stale = []
const expected = new Set()

for (const site of data.sites) {
  const file = join(BRIEFS_DIR, `${site.slug}.md`)
  expected.add(`${site.slug}.md`)
  const next = renderBrief(site)
  const prev = existsSync(file) ? readFileSync(file, 'utf8') : null
  if (prev === next) continue
  if (check) stale.push(site.slug)
  else writeFileSync(file, next)
}

const orphans = readdirSync(BRIEFS_DIR).filter((f) => f.endsWith('.md') && !expected.has(f))
if (orphans.length) {
  console.error(`briefs/ 里有多余的 Markdown（sites.json 没有对应站点）：${orphans.join(', ')}`)
  process.exit(1)
}
if (stale.length) {
  console.error(`briefs/*.md 与 sites.json 不一致：${stale.join(', ')}（跑 node scripts/build-briefs.mjs 重新生成）`)
  process.exit(1)
}
console.log(check ? `briefs: ok（${expected.size} 份）` : `briefs: 已生成 ${expected.size} 份`)
