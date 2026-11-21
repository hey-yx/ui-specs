/** 规范化子路径前缀：根路径返回 ''，子路径返回 '/ui-specs'（无尾斜杠） */
export const BASE_PREFIX = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')

/** 给站内绝对路径加上 BASE_PREFIX（支持幂等）；非 / 开头原样返回 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path
  if (!BASE_PREFIX) return path
  if (path === BASE_PREFIX || path.startsWith(`${BASE_PREFIX}/`)) return path
  return `${BASE_PREFIX}${path}`
}

/** 剥掉 pathname 前置的 BASE_PREFIX，便于按固定站点相对路由匹配 */
export function stripBase(pathname: string): string {
  if (!BASE_PREFIX) return pathname
  if (pathname === BASE_PREFIX || pathname === `${BASE_PREFIX}/`) return '/'
  if (pathname.startsWith(`${BASE_PREFIX}/`)) return pathname.slice(BASE_PREFIX.length)
  return pathname
}

/** 站点公开根 URL（含子路径、无尾斜杠），例如 https://hey-yx.com/ui-specs 或 http://localhost:4321 */
export function siteRoot(site: URL | undefined): string {
  const origin = (site ?? new URL('http://localhost:4321')).origin
  return `${origin}${BASE_PREFIX}`
}

/** 根据相对站点根的路径拼出完整 canonical URL */
export function canonicalUrl(path: string, site: URL | undefined): string {
  return new URL(withBase(path), site ?? 'http://localhost:4321').href
}
