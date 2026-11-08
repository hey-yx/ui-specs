#!/usr/bin/env node
// 把站点渲染出来的提示词同步进 README。唯一来源是 site/src/data/guide.ts 的 USAGE_STEPS，
// 提示词由它拼，页面由它渲染，README 这段由构建产物回写，三处不会各说各话。
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const distHtml = resolve(here, '../dist/starmap/index.html')
const readmePath = resolve(here, '../../README.md')

const START = '<!-- AI-PROMPT:START 由 site/scripts/sync-readme-prompt.mjs 生成，勿手改 -->'
const END = '<!-- AI-PROMPT:END -->'

const html = readFileSync(distHtml, 'utf8')
const hit = html.match(/<pre class="ai-prompt"><code>([\s\S]*?)<\/code><\/pre>/)
if (!hit) {
  console.error('starmap 页里没找到提示词块，先跑 astro build')
  process.exit(1)
}

const decode = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')

const prompt = decode(hit[1]).trim()
const readme = readFileSync(readmePath, 'utf8')
const start = readme.indexOf(START)
const end = readme.indexOf(END)
if (start < 0 || end < 0) {
  console.error('README 缺 AI-PROMPT:START / END 标记')
  process.exit(1)
}

const next = readme.slice(0, start) + START + '\n' + prompt + '\n' + END + readme.slice(end + END.length)
if (next === readme) {
  console.log(`README 提示词已是最新（${prompt.length} 字）`)
} else {
  writeFileSync(readmePath, next)
  console.log(`README 提示词已同步（${prompt.length} 字）`)
}
