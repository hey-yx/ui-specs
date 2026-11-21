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
 * 支持通过 SITE_URL 注入域名或带子路径的地址（如 https://hey-yx.com/ui-specs），
 * 也可通过 BASE_PATH 单独指定子路径，本地默认 http://localhost:4321（根路径 /）。
 */
const rawSite = process.env.SITE_URL ?? 'http://localhost:4321'
const siteUrl = new URL(rawSite)
const rawBase =
  process.env.BASE_PATH ?? (siteUrl.pathname === '/' ? '/' : siteUrl.pathname.replace(/\/+$/, ''))
const base =
  rawBase === '/' ? '/' : `${rawBase.startsWith('/') ? '' : '/'}${rawBase}`.replace(/\/+$/, '')
const basePrefix = base === '/' ? '' : base
const site = siteUrl.origin

// 建站需求已从 /examples/ 挪到独立的 /briefs/，旧地址留重定向，外链与旧书签不断。
// 站名清单直接扫 briefs/ 目录，加站不用改这里，也没有别的配置文件。
const SITE_ROOT = fileURLToPath(new URL('.', import.meta.url))
const BRIEFS_DIR = join(SITE_ROOT, '..', 'briefs')
const BRIEF_MANUALS = new Set(['layouts.md', 'README.md'])
const briefSlugs = readdirSync(BRIEFS_DIR)
  .filter((name) => name.endsWith('.md') && !BRIEF_MANUALS.has(name))
  .map((name) => name.slice(0, -3))
const briefRedirects = Object.fromEntries([
  ['/examples/briefs', `${basePrefix}/briefs/`],
  ...briefSlugs.map((slug) => [`/examples/${slug}/brief`, `${basePrefix}/briefs/${slug}/`]),
])

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // 设计地图是 /starmap/；/roadmapx、/flow、/guide 是旧地址，重定向兜底避免外链断掉
  redirects: {
    '/roadmapx': `${basePrefix}/starmap/`,
    '/flow': `${basePrefix}/`,
    '/guide': `${basePrefix}/`,
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
