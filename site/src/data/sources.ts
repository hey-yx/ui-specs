/**
 * 首页「规范来源」区块的配置。
 *
 * 篇数由构建期按 publisher/source 匹配，不需要人工维护数字；新增来源时只在这个表里加一条规则。
 * 匹配顺序从上到下，先命中先算（同一条内容只归第一组，不重复计数）。
 * publishers 匹配 frontmatter 的 publisher 字段，domains 匹配 source 域名。
 */
export interface SourceGroup {
  /** 显示名 */
  name: string
  /** publisher 字段取值（子串匹配） */
  publishers?: string[]
  /** source 域名或路径片段（子串匹配） */
  domains?: string[]
  /** 说明文字（可选，替代篇数） */
  note?: string
}

export const SOURCE_GROUPS: SourceGroup[] = [
  { name: 'W3C 标准', publishers: ['W3C'] },
  { name: 'Apple HIG', publishers: ['Apple'] },
  { name: 'Shopify Polaris', publishers: ['Polaris', 'Shopify'] },
  { name: 'GitHub Primer / Octicons', publishers: ['Primer'] },
  { name: 'GitLab Pajamas', publishers: ['GitLab'], domains: ['design.gitlab.com'] },
  { name: 'Material 3', domains: ['material-components', 'm3.material.io'] },
  { name: 'Fluent 2', domains: ['microsoft/fluentui', 'fluentui', 'fluent2.microsoft.design'] },
  { name: 'IBM Carbon', publishers: ['IBM Carbon'] },
  { name: 'Adobe Spectrum', publishers: ['Spectrum'] },
  { name: 'USWDS / GOV.UK / NHS', publishers: ['USWDS', 'GOV.UK', 'NHS'] },
  { name: 'Atlassian Design', publishers: ['Atlassian'] },
  { name: 'Ant Design / TDesign', publishers: ['Ant Design', '蚂蚁集团'], domains: ['tdesign.tencent.com'] },
  { name: '腾讯 ISUX', publishers: ['腾讯 ISUX'] },
  { name: 'NASA 政府站案例', publishers: ['NASA'] },
  { name: '品牌设计语言', publishers: ['Awesome Design MD'] },
  { name: '版型库', publishers: ['ui-ux-pro-max'] },
  { name: 'Bento Grid 版式', publishers: ['Banani', 'Setproduct', 'iamsteve', 'freeCodeCamp'] },
  { name: '工程与排版', publishers: ['Google web.dev', 'web.dev', 'MDN', 'Every Layout', 'Flutter', 'developer.chrome.com', 'Meta Engineering', 'Practical Typography', 'Matthew Butterick'] },
  { name: '写作与排版', publishers: ['Microsoft', '阮一峰', 'Google'], domains: ['google.github.io'] },
  { name: '实战研究与其他', publishers: ['Nielsen Norman Group', 'NN/g', 'Heydon Pickering', '优设网', 'Learn UI Design', 'Smashing Magazine', 'Adobe Design', 'Awwwards', 'Adham Dannaway', 'sparanoid'] },
]
