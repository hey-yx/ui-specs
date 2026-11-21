/**
 * 静态文本资源补 UTF-8 声明。
 *
 * public/ 里的 .md 与 .json 由 Vite 静态中间件直出，Content-Type 只有
 * text/markdown、application/json，不带 charset。浏览器对没有 charset 的
 * 文本按 HTTP 默认的 latin-1 解码，中文整页乱码（text/markdown 实测如此）。
 * 这里在响应头写出前补上 ; charset=utf-8，只改头部，不动文件字节：
 * 原始 Markdown 的行号与内容必须与仓库里逐字一致，取值记录才对得上。
 *
 * 只挂 dev 与 preview；构建产物由部署层决定头部，服务器需自行配 charset。
 */

const TEXTUAL = /^(?:text\/[^;]+|application\/(?:json|xml|xhtml\+xml)|image\/svg\+xml|[^;]+\+(?:json|xml))$/i

function ensureCharset(value) {
  if (typeof value !== 'string' || /charset=/i.test(value)) return value
  const type = value.split(';')[0].trim()
  return TEXTUAL.test(type) ? `${value}; charset=utf-8` : value
}

function patchResponse(res) {
  const setHeader = res.setHeader
  res.setHeader = function (name, value) {
    if (String(name).toLowerCase() === 'content-type') value = ensureCharset(value)
    return setHeader.call(this, name, value)
  }

  const writeHead = res.writeHead
  res.writeHead = function (statusCode, statusMessage, headers) {
    if (typeof statusMessage === 'object' && statusMessage !== null) {
      headers = statusMessage
      statusMessage = undefined
    }
    if (headers && !Array.isArray(headers)) {
      headers = Object.fromEntries(
        Object.entries(headers).map(([key, value]) => [
          key,
          String(key).toLowerCase() === 'content-type' ? ensureCharset(value) : value,
        ]),
      )
    }
    return statusMessage === undefined
      ? writeHead.call(this, statusCode, headers)
      : writeHead.call(this, statusCode, statusMessage, headers)
  }
}

export default function textCharset() {
  const attach = (server) => {
    // configureServer / configurePreviewServer 的中间件排在静态文件中间件之前，
    // 响应头在这里包一层，Vite 直出 public/ 文件时也会带上 charset。
    server.middlewares.use((req, res, next) => {
      patchResponse(res)
      next()
    })
  }
  return {
    name: 'ui-specs-text-charset',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}
