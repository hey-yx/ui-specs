import { defineConfig } from 'astro/config'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import sitemap from '@astrojs/sitemap'
import { satteri } from '@astrojs/markdown-satteri'

import pipeline from './src/integrations/pipeline.mjs'
import textCharset from './src/integrations/text-charset.mjs'

/**
 * 站点配置。
 *
 * site 决定 canonical、Open Graph 与 sitemap 的绝对地址。
 * 生产域名尚未确定，这里用环境变量 SITE_URL 注入，本地默认 localhost:4321。
 */
const site = process.env.SITE_URL ?? 'http://localhost:4321'

// 建站需求已从 /examples/ 挪到独立的 /briefs/，旧地址留重定向，外链与旧书签不断。
// 站名清单直接扫 briefs/ 目录，加站不用改这里，也没有别的配置文件。
const SITE_ROOT = fileURLToPath(new URL('.', import.meta.url))
const BRIEFS_DIR = join(SITE_ROOT, '..', 'briefs')
const BRIEF_MANUALS = new Set(['layouts.md', 'README.md'])
const briefSlugs = readdirSync(BRIEFS_DIR)
  .filter((name) => name.endsWith('.md') && !BRIEF_MANUALS.has(name))
  .map((name) => name.slice(0, -3))
const briefRedirects = Object.fromEntries([
  ['/examples/briefs', '/briefs/'],
  ...briefSlugs.map((slug) => [`/examples/${slug}/brief`, `/briefs/${slug}/`]),
])

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // 设计地图是 /starmap/；/roadmapx、/flow、/guide 是旧地址，重定向兜底避免外链断掉
  redirects: {
    '/roadmapx': '/starmap/',
    '/flow': '/',
    '/guide': '/',
    ...briefRedirects,
  },
  build: {
    format: 'directory',
  },
  markdown: {
    // 库里大量使用表格与原始 HTML，必须按 GFM 渲染；smartPunctuation 关掉，
    // 否则正文里的引号会被替换成弯引号，破坏代码示例与规范原文。
    processor: satteri({
      features: { gfm: true, smartPunctuation: false },
    }),
  },
  integrations: [sitemap(), pipeline()],
  // Vite 直出 public/ 里的 .md、.json 时不带 charset，浏览器按 latin-1 解码成乱码；
  // 插件只在 dev 与 preview 的响应头上补 charset=utf-8，不改文件字节。
  vite: {
    plugins: [textCharset()],
  },
})
