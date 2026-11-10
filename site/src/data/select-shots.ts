/**
 * 项目选型方案的主题系统截图：设计地图弹窗顶部展示，先看到基准规范长什么样，再看选点与文章。
 *
 * 图存 site/public/img/select/<项目点 id>.png（1280×800 视口、2 倍像素截，缩到 1600 宽）。
 * 只收官方站截图；caption 写截的是哪一页，source 给原页地址，换图只换文件。
 * 没收录的点不显示图，弹窗照旧。GOV.UK / USWDS 两个 .gov 站点本机连不上（SSL 直接断），该行暂无图。
 */
export interface SelectShot {
  src: string
  caption: string
  source: string
}

export const SELECT_SHOTS: Record<string, SelectShot> = {
  'project-tdesign': {
    src: '/img/select/project-tdesign.png',
    caption: 'TDesign 官方色板（主题色与色阶）',
    source: 'https://tdesign.tencent.com/design/color',
  },
  'project-ant-design': {
    src: '/img/select/project-ant-design.png',
    caption: 'Ant Design 基础色板（12 主色的色阶）',
    source: 'https://ant.design/docs/spec/colors-cn',
  },
  'project-carbon': {
    src: '/img/select/project-carbon.png',
    caption: 'Carbon 色彩页概览',
    source: 'https://carbondesignsystem.com/elements/color/overview/',
  },
  'project-carbon-dataviz': {
    src: '/img/select/project-carbon-dataviz.png',
    caption: 'Carbon 数据可视化图表类型',
    source: 'https://carbondesignsystem.com/data-visualization/getting-started/',
  },
  'project-atlassian': {
    src: '/img/select/project-atlassian.png',
    caption: 'Atlassian 色彩页',
    source: 'https://atlassian.design/foundations/color/',
  },
  'project-polaris': {
    src: '/img/select/project-polaris.png',
    caption: 'Shopify Polaris 色彩页',
    source: 'https://polaris.shopify.com/design/colors',
  },
  'project-primer': {
    src: '/img/select/project-primer.png',
    caption: 'GitHub Primer 色彩原语',
    source: 'https://primer.style/product/primitives/color/',
  },
  'project-gitlab-pajamas': {
    src: '/img/select/project-gitlab-pajamas.png',
    caption: 'GitLab Pajamas 色彩页',
    source: 'https://design.gitlab.com/product-foundations/color/',
  },
  'project-nhs-uk': {
    src: '/img/select/project-nhs-uk.png',
    caption: 'NHS.UK 色彩页（Colour palette）',
    source: 'https://service-manual.nhs.uk/design-system/styles/colour',
  },
  'project-spectrum': {
    src: '/img/select/project-spectrum.png',
    caption: 'Adobe Spectrum 色彩页（关键色板）',
    source: 'https://spectrum.adobe.com/page/color/',
  },
  'project-w3c-dtcg-token': {
    src: '/img/select/project-w3c-dtcg-token.png',
    caption: 'Design Tokens 社区组首页',
    source: 'https://www.designtokens.org/',
  },
  'project-w3c-wcag-2-2': {
    src: '/img/select/project-w3c-wcag-2-2.png',
    caption: 'WCAG 2.2 快速参考',
    source: 'https://www.w3.org/WAI/WCAG22/quickref/',
  },
  'project-material-3': {
    src: '/img/select/project-material-3.png',
    caption: 'Material 3 Color system 首屏',
    source: 'https://m3.material.io/styles/color/system/overview',
  },
  'project-fluent-2': {
    src: '/img/select/project-fluent-2.png',
    caption: 'Fluent 2 色彩页（palettes）',
    source: 'https://fluent2.microsoft.design/color',
  },
  'project-apple-hig': {
    src: '/img/select/project-apple-hig.png',
    caption: 'Apple HIG 色彩页',
    source: 'https://developer.apple.com/design/human-interface-guidelines/color',
  },
}
