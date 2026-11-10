/**
 * 分区配置（站点唯一真源）
 *
 * - order：分区在页面与各派生文件里的顺序，沿用维护规则（guide.ts 的 MAINTENANCE_RULES）里的分区排序
 * - title：分区显示名
 * - note：一句话说明怎么读（写给人看，不是字段罗列）
 * - purpose / use_when：给 AI 的分区说明，进 /ai/meta.json 端点
 * - step：学习路径分区（条目按 tag 顺序读，前台渲染真实序号）
 */
export interface SectionDef {
  key: string
  title: string
  note: string
  purpose: string
  use_when: string
  step?: boolean
}

export const SECTIONS: SectionDef[] = [
  {
    key: 'howto',
    title: '页面设计实操',
    note: '从零上手按标签顺序读；有基础直接跳配色实操。',
    purpose: '从零上手页面设计的实操文章：视觉层级、配色框架、逐条技巧',
    use_when: '做通用网页/落地页没有明确规范源时；新手补基本功时按 tag 顺序读',
    step: true,
  },
  {
    key: 'bento',
    title: 'Bento Grid 系列',
    note: '做磁贴布局前过一遍：概念、网格数学、CSS 实现。',
    purpose: 'Bento Grid 版式的完整链路：概念、网格数学、CSS Grid 实现',
    use_when: '要做 bento/磁贴式分区布局时',
    step: true,
  },
  {
    key: 'markdown',
    title: '写作与文章排版',
    note: '写文档、定写作规范时查中英文排版。',
    purpose: '中英文技术写作规范：中文文案排版、技术文档写作、Google/Microsoft 写作实践、文字排版',
    use_when: '写文档、定写作规范、审界面文案时；Markdown 语法细则属通用知识，本库不收',
  },
  {
    key: 'tokens',
    title: '设计 Token',
    note: '搭设计系统前先定 token 结构；要对具体取值时看官方快照。',
    purpose:
      'W3C Design Tokens 社区组（DTCG）格式规范，以及 Material 3、Fluent 2、Ant Design 的官方 token 取值快照',
    use_when: '定 token 结构 / 命名 / 别名，或核对 Material 3、Fluent 2、Ant Design 的官方取值时',
  },
  {
    key: 'standards',
    title: 'Web 标准',
    note: '规范级细节按单篇查，体量大，别整包读。',
    purpose:
      'W3C 规范原文：CSS 过渡、动画、缓动、Grid、盒对齐、中文排版需求（clreq）',
    use_when:
      '需要规范级细节、核对浏览器行为、实现动画/网格/对齐/中文排版时；体量大，按单篇读，不整包投喂',
  },
  {
    key: 'brands',
    title: '品牌设计语言',
    note: '复刻某品牌观感前，先读对应 DESIGN.md。',
    purpose: '各品牌官网的 DESIGN.md 全文（Linear/Claude/Vercel/Notion/Figma/Stripe/Apple/Airbnb 等）',
    use_when: '复刻某品牌的观感与语气；做品牌营销页时找对应品牌读',
  },
  {
    key: 'icons',
    title: '图标',
    note: '定图标尺寸网格与风格时对表，别凭感觉画。',
    purpose: '图标规范与研究：尺寸网格、风格分类、可用性测试（Apple/Polaris/Octicons/Ant/NN/g）',
    use_when: '设计图标集、评审图标、定图标 token 时',
  },
  {
    key: 'color',
    title: '色彩',
    note: '定色板与语义色时只选一个基准规范。',
    purpose:
      '色彩系统规范：色板结构、语义色、深浅模式（Apple HIG/Material 3/Fluent 2/Polaris/Primer/Carbon/GOV.UK/Spectrum/USWDS/Atlassian/Ant/TDesign）',
    use_when: '定色板、语义 token、暗色模式时；只选一个基准规范，冲突按 source-rules',
  },
  {
    key: 'type',
    title: '字体排版',
    note: '定字号阶梯、行高与中文字体栈时对表。',
    purpose:
      '字体排印规范：字阶、行高、字重、行长、Dynamic Type（Apple HIG/Material 3/Fluent 2/Polaris/Primer/Carbon/Spectrum/USWDS/GOV.UK/NHS/Atlassian/web.dev/Ant/TDesign）',
    use_when: '定字号阶梯、排版层级、行高与行长、中文字体栈时',
  },
  {
    key: 'layout',
    title: '布局与间距',
    note: '间距、栅格、密度拿不准时来核对数值。',
    purpose:
      '布局与间距：栅格、间距 token、密度、对齐、响应式骨架（Apple HIG/Material 3/Fluent 2/Polaris/Primer/Carbon/Spectrum/USWDS/GOV.UK/NHS/Atlassian/Ant + Every Layout 模式）',
    use_when: '定间距 token、栅格断点、页面骨架、信息密度时',
  },
  {
    key: 'motion',
    title: '动效',
    note: '动效时长与缓动取官方值，别随手写。',
    purpose:
      '动效规范：时长阶梯、缓动、转场语义（Apple HIG/Material 3/Fluent 2/Polaris/Carbon/Atlassian/Spectrum/web.dev/Ant；另收 NN/g 动效研究与 MDN/W3C 实现规范）',
    use_when: '定动效时长、缓动、转场语义时；验收动效别用「感觉差不多」',
  },
  {
    key: 'a11y',
    title: '无障碍',
    note: '对比度、键盘、表单的硬要求，验收前逐条过。',
    purpose:
      '无障碍与可访问性：WCAG 2.2 成功准则、ARIA 模式、无障碍测试方法（WCAG/APG/NN/g/政府规范）',
    use_when: '做无障碍检查与验收：对比度、键盘、焦点、表单、读屏语义',
  },
  {
    key: 'components',
    title: '组件设计',
    note: '做组件前看官方规范怎么定状态与行为。',
    purpose:
      '组件规范：按钮/表单/表格/弹窗/标签页等组件的状态、行为与可访问性要求（Apple HIG/Material 3/Fluent 2/Polaris/Primer/Carbon/Spectrum/GOV.UK/Ant/TDesign）',
    use_when: '设计或评审具体组件：按钮、表单、表格、弹窗、标签页',
  },
  {
    key: 'patterns',
    title: '场景模式',
    note: '做表单页或具体服务流程时，按场景查。',
    purpose:
      '场景级模式：任务场景怎么收地址/日期/错误文案原文、流程模式与界面状态（GOV.UK/Primer/Carbon 等官方场景文档）',
    use_when: '做具体服务流程、表单页或界面状态时，按任务场景查该读哪篇',
  },
  {
    key: 'layouts',
    title: '版型原型',
    note: '做落地页、官网时读：区块顺序与线框图。',
    purpose:
      '版型原型：落地页、官网、活动页等纵向版型，每个版型给区块顺序、低保真线框图与转化要点',
    use_when: '定页面版型：这类页面该切哪几块、怎么排、CTA 放哪',
  },
  {
    key: 'dataviz',
    title: '数据可视化',
    note: '做图表与仪表盘时对表 Carbon 规范。',
    purpose: '数据可视化规范：图表选型、图例、坐标轴、配色与仪表盘版式（Carbon/AntV 等）',
    use_when: '做图表、报表、仪表盘、数据大屏时',
  },
  {
    key: 'principles',
    title: '文案与设计价值观',
    note: '写文案、定投影层级、评审状态时找依据。',
    purpose: '交互状态、阴影层级、设计价值观与中文界面文案规范',
    use_when: '评审界面的状态处理、定投影层级、写设计原则或界面文案时找依据',
  },
  {
    key: 'cases',
    title: '案例与拆解',
    note: '想看别人怎么做时翻这里的整站拆解。',
    purpose: '完整案例与整站拆解：设计系统案例、页面拆解与复盘',
    use_when: '想看别人怎么做、要完整案例佐证时',
  },
]

export const SECTION_KEYS = SECTIONS.map((s) => s.key)
