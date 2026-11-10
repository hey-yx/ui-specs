#!/usr/bin/env node
/**
 * 校验批次调度表。
 *
 *   node scripts/check-rotation.mjs                  校验全部批次
 *   node scripts/check-rotation.mjs --batch <批次名>  只校验某一批
 *   node scripts/check-rotation.mjs --brief <slug>   打印某站的调度段（塞进子代理简报用）
 *   node scripts/check-rotation.mjs --json           只输出 JSON 结果（接工具用）
 *   node scripts/check-rotation.mjs --require-all    没进任何批次的站也算错（正式开批前跑一次）
 *
 * 调度表按批分文件：`briefs/rotation/<批次>.json` 一批一份；`briefs/rotation.json`
 * 是 2026-11-08-b 那批的原址，脚本照旧认，新批次不要再往那里加。
 * 批内不重复的规则只在本批内算：换一批重排是常规操作，不同批次用同一件版式不算冲突。
 *
 * 检查项（来自表里的 rules）：
 *   1. 表里的站都能在 briefs/ 里找到对应需求（一份 <slug>.md）；同一站不能同时进两个批次
 *   2. macrostructure 批内不重复，且能在 briefs/layouts.md 的件表里找到
 *   3. nav 批内不重复
 *   4. footer 每种最多两次
 *   5. accent 是六位 hex；非 derived 时，该 hex 必须出现在 accentSource 指向的原文行 ±1
 *   6. 色系不少于六种；同色系最多两站且明度差 ≥ 20
 *
 * 需求可以先写、批次后开，所以「站没进任何批次」默认只提醒，加 --require-all 才报错。
 *
 * 退出码：全过 0，有错 1。
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BRIEFS_DIR = join(REPO_ROOT, 'briefs')
const BRIEF_MANUALS = new Set(['layouts.md', 'README.md'])
const ROTATION_LEGACY = join(REPO_ROOT, 'briefs/rotation.json')
const ROTATION_DIR = join(REPO_ROOT, 'briefs/rotation')
// 项目内的版式速查是真源；hallmark 原文件只作补充核对
const LAYOUTS = join(REPO_ROOT, 'briefs/layouts.md')

const onlyJson = process.argv.includes('--json')
const requireAll = process.argv.includes('--require-all')
const briefIdx = process.argv.indexOf('--brief')
const briefSlug = briefIdx > -1 ? process.argv[briefIdx + 1] : null
const batchIdx = process.argv.indexOf('--batch')
const batchFilter = batchIdx > -1 ? process.argv[batchIdx + 1] : null
const errors = []
const warn = []

const siteSlugs = new Set(
  readdirSync(BRIEFS_DIR)
    .filter((name) => name.endsWith('.md') && !BRIEF_MANUALS.has(name))
    .map((name) => name.slice(0, -3)),
)
const layoutsMd = existsSync(LAYOUTS) ? readFileSync(LAYOUTS, 'utf8') : ''

function rotationFiles() {
  const files = []
  if (existsSync(ROTATION_LEGACY)) files.push(ROTATION_LEGACY)
  if (existsSync(ROTATION_DIR)) {
    for (const f of readdirSync(ROTATION_DIR).filter((f) => f.endsWith('.json')).sort()) {
      files.push(join(ROTATION_DIR, f))
    }
  }
  return files
}

export function hsl(hex) {
  const h = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn
  let hue = 0, sat = 0
  if (d !== 0) {
    sat = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn)
    if (mx === r) hue = ((g - b) / d + 6) % 6
    else if (mx === g) hue = (b - r) / d + 2
    else hue = (r - g) / d + 4
    hue *= 60
  }
  return { hue: Math.round(hue), sat: Math.round(sat * 100), light: Math.round(l * 100) }
}

const batches = rotationFiles().map((file) => {
  const data = JSON.parse(readFileSync(file, 'utf8'))
  return { file, name: data.batch || basename(file, '.json'), sites: data.sites || [] }
})

const selected = batchFilter ? batches.filter((b) => b.name === batchFilter) : batches
if (batchFilter && !selected.length) {
  console.error(`没有这个批次：${batchFilter}（现有 ${batches.map((b) => b.name).join(', ') || '无'}）`)
  process.exit(1)
}

// 同一站不能进两个批次
const memberOf = new Map()
for (const b of batches) {
  for (const s of b.sites) {
    if (!memberOf.has(s.slug)) memberOf.set(s.slug, [])
    memberOf.get(s.slug).push(b.name)
  }
}
for (const [slug, names] of memberOf) {
  if (names.length > 1) errors.push(`${slug}：同时出现在 ${names.join(' 与 ')}，一站只能进一批`)
}

function checkBatch(batch) {
  const errs = []
  const warns = []
  const rot = batch.sites
  const tag = (m) => `[${batch.name}] ${m}`

  // 1. 站存在
  for (const s of rot) if (!siteSlugs.has(s.slug)) errs.push(tag(`多出调度：${s.slug}（briefs/ 里没有这份需求）`))

  // 2. macrostructure 批内唯一 + 在版式速查里
  const macroCount = new Map()
  for (const s of rot) {
    macroCount.set(s.macrostructure, (macroCount.get(s.macrostructure) || 0) + 1)
    const code = String(s.macrostructure || '').split('-')[0]
    if (layoutsMd && !new RegExp(`^\\| ${code} \\|`, 'm').test(layoutsMd)) {
      errs.push(tag(`${s.slug}：版式件 ${s.macrostructure} 不在 briefs/layouts.md 的件表里`))
    }
  }
  for (const [k, v] of macroCount) if (v > 1) errs.push(tag(`macrostructure 重复 ${k}（${v} 次）`))

  // 3. nav 批内唯一
  const navCount = new Map()
  for (const s of rot) navCount.set(s.nav, (navCount.get(s.nav) || 0) + 1)
  for (const [k, v] of navCount) if (v > 1) errs.push(tag(`nav 重复 ${k}（${v} 次）`))

  // 4. footer 每种最多两次
  const ftCount = new Map()
  for (const s of rot) ftCount.set(s.footer, (ftCount.get(s.footer) || 0) + 1)
  for (const [k, v] of ftCount) if (v > 2) errs.push(tag(`footer ${k} 用了 ${v} 次（上限 2）`))

  // 5. accent 六位 hex + 出处行内容
  const hexRe = /^#[0-9A-Fa-f]{6}$/
  for (const s of rot) {
    if (!hexRe.test(s.accent || '')) {
      errs.push(tag(`${s.slug}：accent ${s.accent} 不是六位 hex`))
      continue
    }
    if (s.accentDerived) {
      warns.push(tag(`${s.slug}：accent 标 derived，出处 ${s.accentSource} 只作次源`))
      continue
    }
    const m = /^(.*):(\d+)$/.exec(s.accentSource || '')
    if (!m) {
      errs.push(tag(`${s.slug}：accentSource 要写成 content/<路径>:<行号>`))
      continue
    }
    const file = join(REPO_ROOT, m[1])
    if (!existsSync(file)) {
      errs.push(tag(`${s.slug}：出处文件不存在 ${m[1]}`))
      continue
    }
    const lines = readFileSync(file, 'utf8').split('\n')
    const n = Number(m[2])
    const window = [lines[n - 1], lines[n], lines[n + 1]].filter(Boolean).join(' ')
    if (!window.toLowerCase().includes(s.accent.toLowerCase())) {
      errs.push(tag(`${s.slug}：${s.accent} 不在 ${s.accentSource} 的 ±1 行里`))
    }
  }

  // 6. 色系分散
  const families = new Map()
  for (const s of rot) {
    const fam = s.colorFamily
    if (!fam) {
      errs.push(tag(`${s.slug}：缺 colorFamily（色板族名）`))
      continue
    }
    if (!families.has(fam)) families.set(fam, [])
    families.get(fam).push({ slug: s.slug, light: hsl(s.accent).light })
  }
  if (families.size < 6) errs.push(tag(`色系只有 ${families.size} 种（要求 ≥ 6）`))
  for (const [fam, list] of families) {
    if (list.length > 2) errs.push(tag(`色系 ${fam} 用了 ${list.length} 次（上限 2）`))
    if (list.length === 2) {
      const diff = Math.abs(list[0].light - list[1].light)
      if (diff < 20) errs.push(tag(`色系 ${fam} 的 ${list.map((x) => x.slug).join('/')} 明度差 ${diff}，两个色太像（要求 ≥ 20）`))
    }
  }

  const table = rot.map((s) => ({
    slug: s.slug,
    macrostructure: s.macrostructureName || s.macrostructure,
    nav: s.nav,
    footer: s.footer,
    accent: s.accent,
    hue: hsl(s.accent).hue,
  }))

  return { name: batch.name, file: batch.file.replace(REPO_ROOT + '/', ''), count: rot.length, families: families.size, errs, warns, table, rot }
}

const results = selected.map(checkBatch)
for (const r of results) {
  errors.push(...r.errs)
  warn.push(...r.warns)
}

// 未进任何批次的站：默认提醒，--require-all 时算错
const unassigned = [...siteSlugs].filter((slug) => !memberOf.has(slug)).sort()
if (unassigned.length) {
  const msg = `未进任何批次（${unassigned.length} 站）：${unassigned.join(', ')}`
  if (requireAll) errors.push(msg + '（--require-all）')
  else warn.push(msg + '；开批前给它们建 briefs/rotation/<批次>.json')
}

if (briefSlug) {
  const hit = results.flatMap((r) => r.rot.map((s) => ({ ...s, batch: r.name }))).find((x) => x.slug === briefSlug)
  if (!hit) {
    console.error(`调度表里没有 ${briefSlug}`)
    process.exit(1)
  }
  const src = hit.accentSource ? `，\`${hit.accentSource}\`` : ''
  const derived = hit.accentDerived ? '（标 derived）' : ''
  console.log(
    [
      `## 你这一站的调度（照做，不要另选）· 批次 ${hit.batch}`,
      '',
      `- 版式：${hit.macrostructureName || hit.macrostructure}（速查 \`briefs/layouts.md\` 第 ${hit.macrostructure.split('-')[0]} 行；原件 \`hallmark/references/macrostructures/${hit.macrostructure}.md\`）`,
      `- 导航：${hit.nav}（\`hallmark/references/components/\` 里对应件）`,
      `- 页脚：${hit.footer}（同上）`,
      `- 强调色：\`${hit.accent}\`（${hit.colorFamily}${derived}${src}）`,
      `- 为什么是这组：${hit.why}`,
      '',
      '版式三件写进取值记录的结构决策，强调色写进色彩表并核对比度；不许换件、不许换色，除非写清理由并记进 FINDINGS。',
    ].join('\n'),
  )
  process.exit(errors.length ? 1 : 0)
}

if (onlyJson) {
  console.log(
    JSON.stringify(
      { ok: errors.length === 0, errors, warn, batches: results.map(({ rot, ...r }) => r), unassigned },
      null,
      2,
    ),
  )
} else {
  for (const r of results) {
    console.log(`批次 ${r.name} · ${r.count} 站 · 色系 ${r.families} 种（${r.file}）`)
    for (const row of r.table) {
      console.log(`  ${row.slug.padEnd(12)} ${String(row.macrostructure).padEnd(22)} ${String(row.nav).padEnd(4)} ${String(row.footer).padEnd(4)} ${row.accent} (${row.hue}°)`)
    }
  }
  for (const w of warn) console.log(`提醒 ${w}`)
  if (errors.length) {
    console.log(`\n${errors.length} 个问题：`)
    for (const e of errors) console.log(`  ✗ ${e}`)
  } else {
    console.log('\nrotation: ok')
  }
}
process.exit(errors.length ? 1 : 0)
