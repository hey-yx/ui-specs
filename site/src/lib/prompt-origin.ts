import { BASE_PREFIX } from './url'

/**
 * 导出提示词里的 <站点地址>：构建时设了 SITE_URL 就填绝对地址（含子路径），
 * 没设就留子路径前缀或相对路径（/ai/...），不把 localhost 写进发布产物。
 */
export function promptOrigin(site: URL | undefined): string {
  return process.env.SITE_URL ? `${site?.origin ?? ''}${BASE_PREFIX}` : BASE_PREFIX
}
