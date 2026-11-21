/**
 * 项目选型方案的主题系统截图：设计地图弹窗顶部展示，先看到基准规范长什么样，再看选点与文章。
 *
 * 图存 site/public/img/select/<项目点 id>.png（1280×800 视口、2 倍像素截，缩到 1600 宽）。
 * 只收官方站截图；caption 写截的是哪一页，source 给原页地址，换图只换文件。
 * 没收录的点不显示图，弹窗照旧。
 */
import { withBase } from '../lib/url'

export interface SelectShot {
  src: string
  caption: string
  source: string
}

export const SELECT_SHOTS: Record<string, SelectShot> = {
  'project-tdesign': {
    src: withBase('/img/select/project-tdesign.png'),
    caption: 'TDesign 官方色板（主题色与色阶）',
    source: 'https://tdesign.tencent.com/design/color',
  },
  'project-carbon': {
    src: withBase('/img/select/project-carbon.png'),
    caption: 'Carbon 色彩页概览',
    source: 'https://carbondesignsystem.com/elements/color/overview/',
  },
  'project-polaris': {
    src: withBase('/img/select/project-polaris.png'),
    caption: 'Shopify Polaris 色彩页',
    source: 'https://polaris.shopify.com/design/colors',
  },
  'project-primer': {
    src: withBase('/img/select/project-primer.png'),
    caption: 'GitHub Primer 色彩原语',
    source: 'https://primer.style/product/primitives/color/',
  },
  'project-spectrum': {
    src: withBase('/img/select/project-spectrum.png'),
    caption: 'Adobe Spectrum 色彩页（关键色板）',
    source: 'https://spectrum.adobe.com/page/color/',
  },
  'project-fluent-2': {
    src: withBase('/img/select/project-fluent-2.png'),
    caption: 'Fluent 2 色彩页（palettes）',
    source: 'https://fluent2.microsoft.design/color',
  },
  'project-apple-hig': {
    src: withBase('/img/select/project-apple-hig.png'),
    caption: 'Apple HIG 色彩页',
    source: 'https://developer.apple.com/design/human-interface-guidelines/color',
  },
}
