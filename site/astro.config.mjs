import { defineConfig } from 'astro/config'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import sitemap from '@astrojs/sitemap'
import { satteri } from '@astrojs/markdown-satteri'

import pipeline from './src/integrations/pipeline.mjs'

/**
 * 站点配置。
 *
 * site 决定 canonical、Open Graph 与 sitemap 的绝对地址。
 * 生产域名尚未确定，这里用环境变量 SITE_URL 注入，本地默认 localhost:4321。
 */
const site = process.env.SITE_URL ?? 'http://localhost:4321'

// 建站需求已从 /examples/ 挪到独立的 /briefs/，旧地址留重定向，外链与旧书签不断。
// 站清单从 briefs/sites.json 读，加站不用改这里。
const SITE_ROOT = fileURLToPath(new URL('.', import.meta.url))
const briefs = JSON.parse(readFileSync(join(SITE_ROOT, '..', 'briefs', 'sites.json'), 'utf8')).sites
const briefRedirects = Object.fromEntries([
  ['/examples/briefs', '/briefs/'],
  ...briefs.map((b) => [`/examples/${b.slug}/brief`, `/briefs/${b.slug}/`]),
])

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // 指南现行页是 /starmap/；/guide 与 /roadmapx 是旧地址，重定向兜底避免外链断掉
  redirects: {
    '/guide': '/starmap/',
    '/roadmapx': '/starmap/',
    '/flow': '/starmap/',
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
})
