import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getCollection } from 'astro:content'

export const prerender = true

/** 原始 Markdown 端点：给模型引用原文用，路径与仓库内 content/ 一致。
 * 必须发磁盘上的原文（含 frontmatter、逐行不动），取值记录里的 文件:行号 才与端点行号对得上；
 * 清洗后的正文在页面渲染层使用，不能下发给按行号取值的消费方。 */
export async function getStaticPaths() {
  const specs = await getCollection('specs')
  return specs.map((spec) => ({
    params: { path: spec.data.file.replace(/\.md$/, '') },
    props: {},
  }))
}

export async function GET({ params }: { params: { path: string } }) {
  // 构建（npm run build / dev）的工作目录是 site/，content/ 在其上一级
  const file = join(process.cwd(), '..', 'content', `${params.path}.md`)
  const raw = await readFile(file, 'utf8')
  return new Response(raw, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
