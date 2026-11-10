/**
 * 指南数据（站点内唯一真源）。
 *
 * 历史：先前的 AI-USAGE.md 与 AGENTS.md 已删，改用结构化数据。
 * 七步与提示词只在这里维护：/ai/design-points.json 的 guide 字段由
 * buildGuideMarkdown() 以 slim 模式生成（去掉与 points 重复的任务→文章表），
 * /ai/guide.md|json 用 full 模式（独立可读）；构建前校验直接读本文件的 content/ 路径。
 * 四者共享这一份。
 */

/** 官方组件库：只收 React 与 Vue 两栈，其余框架的库（Web Components、原生）不进这里 */
export type MainSourceStack = {
  framework: 'react' | 'vue'
  /** npm 包名，CDN 走 esm.sh */
  pkg: string
}

export type MainSource = {
  /** 产品语境：决定这个项目该选哪个基准规范 */
  context: string
  /** 设计地图点 id：项目选型派生点用它，避免同一基准规范多语境撞 id */
  id?: string
  /** 设计地图点短名（项目选型方案用） */
  short?: string
  /** 基准规范名称 */
  source: string
  /** 官方组件库：需求开了框架时按这套引，组件不手写；服务端模板、原生与纯规范类没有 */
  stacks?: MainSourceStack[]
  /** 官方库但不分 React / Vue：服务端模板、Web Components 这类，弹窗里单列 */
  libs?: { name: string; kind: string }[]
  /** 基准规范文章：一个项目只从这些文件里取数值 */
  files: string[]
  /** 补充说明：细页、分区入口或数值可取性 */
  note?: string
}

/** 按常用程度排序：中文产品 UI 置顶，原生应用在末位。顺序同时决定设计地图「项目选型方案」组、/ai/guide.md 对照表与 /ai/guide.json 的 main_sources。 */
export const MAIN_SOURCES: MainSource[] = [
  {
    context: "中文产品 UI（中后台 / 工具 / 内容 / 协作）",
    id: "project-tdesign",
    short: "中文产品 UI（TDesign）",
    source: "TDesign（腾讯）",
    stacks: [{ framework: 'react', pkg: 'tdesign-react' }, { framework: 'vue', pkg: 'tdesign-vue-next' }],
    files: ["content/color/tdesign.tencent.com--color.md", "content/type/tdesign.tencent.com--fonts.md", "content/layout/tdesign.tencent.com--layout.md", "content/icons/tdesign.tencent.com--icon.md", "content/motion/tdesign.tencent.com--motion.md", "content/color/tdesign.tencent.com--dark.md", "content/layout/tdesign.tencent.com--page-framework.md", "content/patterns/tdesign.tencent.com--backoffice-tasks.md", "content/principles/tdesign.tencent.com--values.md", "content/components/tdesign.tencent.com--input.md", "content/components/tdesign.tencent.com--select.md", "content/components/tdesign.tencent.com--checkbox.md", "content/components/tdesign.tencent.com--radio.md", "content/components/tdesign.tencent.com--switch.md", "content/components/tdesign.tencent.com--table.md", "content/components/tdesign.tencent.com--dialog.md", "content/components/tdesign.tencent.com--message.md", "content/components/tdesign.tencent.com--tabs.md", "content/components/tdesign.tencent.com--pagination.md", "content/components/tdesign.tencent.com--date-picker.md", "content/components/tdesign.tencent.com--form.md", "content/components/tdesign.tencent.com--upload.md", "content/components/tdesign.tencent.com--tag.md", "content/components/tdesign.tencent.com--tooltip.md"],
    note: "token 级，数值全在正文。中文产品 UI 不分页型都落这一行，中文案例站因此同源，差异靠结构与风格；价值观篇 principles/tdesign.tencent.com--values.md 只作气质参照，不取数值",
  },
  {
    context: "中文中后台（React / Ant Design 既有项目）",
    id: "project-ant-design",
    short: "Ant Design",
    source: "Ant Design（蚂蚁集团）",
    stacks: [{ framework: 'react', pkg: 'antd' }],
    files: ["content/tokens/ant-design--tokens.md", "content/color/ant.design--colors.md", "content/type/ant.design--font.md", "content/layout/ant.design--layout.md", "content/motion/ant.design--motion.md", "content/principles/ant.design--shadow-cn.md", "content/icons/ant.design--icon-cn.md", "content/components/ant.design--button-cn.md", "content/components/ant.design--table.md", "content/cases/ant.design--css-var-plan.md", "content/cases/ant.design--semantic-beauty.md", "content/layout/ant.design--alignment-cn.md", "content/components/ant.design--input-cn.md", "content/components/ant.design--select-cn.md", "content/components/ant.design--checkbox-cn.md", "content/components/ant.design--radio-cn.md", "content/components/ant.design--switch-cn.md", "content/components/ant.design--date-picker-cn.md", "content/components/ant.design--modal-cn.md", "content/components/ant.design--message-cn.md", "content/components/ant.design--notification-cn.md", "content/components/ant.design--tabs-cn.md", "content/components/ant.design--form-cn.md", "content/components/ant.design--pagination-cn.md", "content/components/ant.design--tag-cn.md", "content/components/ant.design--tooltip-cn.md", "content/components/ant.design--drawer-cn.md", "content/principles/ant.design--copywriting-cn.md", "content/principles/ant.design--values-cn.md"],
    note: "官方 Markdown：色彩、字体、布局、动效基础篇加阴影、图标、按钮、表格；token 快照给 seed 级 exact 值。TDesign 仍是通用中文产品 UI 默认，本行只给 React / Ant Design 既有项目，不拿来补 TDesign 的值",
  },
  {
    context: "企业产品 / 数据密集界面",
    id: "project-carbon",
    short: "企业数据密集（IBM Carbon）",
    source: "Carbon（IBM）",
    stacks: [{ framework: 'react', pkg: '@carbon/react' }],
    files: ["content/color/carbondesignsystem.com--color.md", "content/type/carbondesignsystem.com--typography.md", "content/layout/carbondesignsystem.com--spacing.md", "content/motion/carbondesignsystem.com--motion.md", "content/layout/carbondesignsystem.com--2x-grid.md", "content/layout/carbondesignsystem.com--2x-grid-usage.md", "content/motion/carbondesignsystem.com--motion-choreography.md", "content/color/carbondesignsystem.com--themes.md", "content/icons/carbondesignsystem.com--iconography.md", "content/components/carbondesignsystem.com--select-usage.md", "content/components/carbondesignsystem.com--text-input-usage.md", "content/components/carbondesignsystem.com--checkbox-usage.md", "content/components/carbondesignsystem.com--radio-button-usage.md", "content/components/carbondesignsystem.com--toggle-usage.md", "content/components/carbondesignsystem.com--dropdown-usage.md", "content/components/carbondesignsystem.com--notification-usage.md", "content/components/carbondesignsystem.com--tooltip-usage.md", "content/components/carbondesignsystem.com--progress-bar-usage.md", "content/components/carbondesignsystem.com--pagination-usage.md", "content/components/carbondesignsystem.com--breadcrumb-usage.md", "content/components/carbondesignsystem.com--tag-usage.md", "content/components/carbondesignsystem.com--search-usage.md", "content/components/carbondesignsystem.com--menu-usage.md", "content/components/carbondesignsystem.com--list-usage.md", "content/components/carbondesignsystem.com--link-usage.md", "content/components/carbondesignsystem.com--accordion-usage.md", "content/components/carbondesignsystem.com--date-picker-usage.md", "content/components/carbondesignsystem.com--slider-usage.md", "content/components/carbondesignsystem.com--tile-usage.md", "content/components/carbondesignsystem.com--loading-usage.md", "content/a11y/carbondesignsystem.com--a11y-color.md", "content/a11y/carbondesignsystem.com--a11y-keyboard.md", "content/a11y/carbondesignsystem.com--a11y-overview.md", "content/components/carbondesignsystem.com--button-usage.md", "content/components/carbondesignsystem.com--data-table-usage.md", "content/components/carbondesignsystem.com--modal-usage.md", "content/components/carbondesignsystem.com--tabs-usage.md", "content/patterns/carbon--common-actions.md", "content/patterns/carbon--dialog-pattern.md", "content/patterns/carbon--disabled-states.md", "content/patterns/carbon--disclosures-pattern.md", "content/patterns/carbon--empty-states-pattern.md", "content/patterns/carbon--filtering.md", "content/patterns/carbon--fluid-styles.md", "content/patterns/carbon--forms-pattern.md", "content/patterns/carbon--global-header.md", "content/patterns/carbon--loading-pattern.md", "content/patterns/carbon--login-pattern.md", "content/patterns/carbon--notification-pattern.md", "content/patterns/carbon--overflow-content.md", "content/patterns/carbon--read-only-states-pattern.md", "content/patterns/carbon--search-pattern.md", "content/patterns/carbon--status-indicator-pattern.md", "content/patterns/carbon--text-toolbar-pattern.md"],
    note: "细页：2x-grid 与 2x-grid-usage；图表与表格另见 dataviz、components 分区",
  },
  {
    context: "数据看板 / 图表产品",
    id: "project-carbon-dataviz",
    short: "数据看板（Carbon 数据可视化）",
    source: "Carbon（IBM 数据可视化）",
    stacks: [{ framework: 'react', pkg: '@carbon/charts' }],
    files: ["content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md", "content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md", "content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md", "content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md", "content/dataviz/carbondesignsystem.com--data-visualization-flow-charts.md", "content/dataviz/carbondesignsystem.com--data-visualization-gantt-charts.md", "content/dataviz/carbondesignsystem.com--data-visualization-legends.md", "content/dataviz/carbondesignsystem.com--data-visualization-spatial-charts.md"],
    note: "图表为主的分析产品；表格、表单与后台布局仍走企业数据密集行，Polaris 数据可视化篇作对照",
  },
  {
    context: "协作与项目管理工具",
    id: "project-atlassian",
    short: "协作工具（Atlassian）",
    source: "Atlassian Design System",
    stacks: [{ framework: 'react', pkg: '@atlaskit/button' }],
    files: ["content/color/atlassian.design--color-new.md", "content/type/atlassian.design--typography.md", "content/layout/atlassian.design--spacing.md", "content/motion/atlassian.design--motion.md", "content/layout/atlassian.design--elevation.md", "content/icons/atlassian.design--iconography.md"],
  },
  {
    context: "商家后台 / 商家工具",
    id: "project-polaris",
    short: "商家后台（Shopify Polaris）",
    source: "Polaris（Shopify）",
    stacks: [{ framework: 'react', pkg: '@shopify/polaris' }],
    files: ["content/color/polaris.shopify.com--color.md", "content/type/polaris.shopify.com--typography.md", "content/layout/polaris.shopify.com--layout.md", "content/icons/polaris.shopify.com--iconography.md", "content/motion/polaris.shopify.com--motion.md", "content/layout/polaris.shopify.com--depth.md", "content/dataviz/polaris.shopify.com--data-visualizations.md", "content/components/polaris.shopify.com--button.md", "content/components/polaris.shopify.com--form-layout.md", "content/components/polaris.shopify.com--index-table.md", "content/layout/polaris.shopify.com--density.md", "content/layout/polaris.shopify.com--layout-tokens.md", "content/motion/polaris.shopify.com--creating-motion.md", "content/principles/polaris.shopify.com--interaction-states.md", "content/type/polaris.shopify.com--font-and-typescale.md", "content/type/polaris.shopify.com--using-type.md", "content/components/polaris--button.md", "content/components/polaris--button-group.md", "content/components/polaris--link.md", "content/components/polaris--badge.md", "content/components/polaris--banner.md", "content/components/polaris--empty-state.md", "content/components/polaris--progress.md", "content/components/polaris--checkbox.md", "content/components/polaris--choice-list.md", "content/components/polaris--date-picker.md", "content/components/polaris--form.md", "content/components/polaris--select.md", "content/components/polaris--switch.md", "content/components/polaris--text-field.md", "content/components/polaris--text-area.md", "content/components/polaris--table.md", "content/components/polaris--page.md", "content/components/polaris--section.md", "content/components/polaris--modal.md", "content/components/polaris--popover.md", "content/components/polaris--avatar.md", "content/components/polaris--chip.md", "content/components/polaris--tooltip.md"],
  },
  {
    context: "开发者工具 / 代码协作",
    id: "project-primer",
    short: "开发者工具（GitHub Primer）",
    source: "Primer（GitHub）",
    stacks: [{ framework: 'react', pkg: '@primer/react' }],
    files: ["content/color/primer.style--color.md", "content/type/primer.style--typography.md", "content/icons/primer.style--octicons-guidelines.md", "content/layout/primer.style--layout.md", "content/patterns/primer--notification-messaging.md", "content/layout/primer.style--responsive.md", "content/patterns/primer--data-visualization.md", "content/patterns/primer--degraded-experiences.md", "content/patterns/primer--empty-states.md", "content/patterns/primer--feature-onboarding.md", "content/patterns/primer--forms-overview.md", "content/patterns/primer--loading.md", "content/patterns/primer--navigation.md", "content/patterns/primer--progressive-disclosure.md", "content/patterns/primer--saving.md", "content/tokens/primer.style--primitives-token-names.md"],
    note: "交互模式篇在 patterns/ 分区（primer--*）；notification-messaging 带 12/14px 字号锚点，布局读 primer.style--layout.md",
  },
  {
    context: "研发协作平台（代码托管 / CI/CD / 代码评审）",
    id: "project-gitlab-pajamas",
    short: "GitLab Pajamas",
    source: "Pajamas（GitLab）",
    stacks: [{ framework: 'vue', pkg: '@gitlab/ui' }],
    files: ["content/color/gitlab.com--brand-color.md", "content/type/gitlab.com--type-fundamentals.md", "content/type/gitlab.com--type-headings.md", "content/layout/gitlab.com--spacing.md", "content/layout/gitlab.com--layout.md", "content/motion/gitlab.com--animation-fundamentals.md", "content/motion/gitlab.com--animation-feedback.md", "content/layout/gitlab.com--elevation.md", "content/layout/gitlab.com--border.md", "content/icons/gitlab.com--iconography.md"],
    note: "GitLab 自家产品规范，原文是 Markdown；品牌色卡给 hex，产品语义色与 token 见原文。组件、模式与数据可视化按需从 components / patterns / data-visualization 分区补，不并进本行 files",
  },
  {
    context: "新品牌官网（非复刻既有品牌）",
    id: "project-new-brand",
    short: "新品牌官网（TDesign / Carbon）",
    source: "中文走 TDesign / 英文走 Carbon",
    files: [],
    note: "新品牌没有 DESIGN.md 可复刻：数值照对应产品语境行取，气质手法只参照 brands/ 学构成、不取它的值；只有复刻既有品牌才用 brands 行",
  },
  {
    context: "政务 / 公共服务网站（表单与流程密集）",
    id: "project-gov-uk-uswds",
    short: "政务服务（GOV.UK / USWDS）",
    source: "GOV.UK（英国）或 USWDS（美国）（按所在体系二选一）",
    libs: [{ name: 'govuk-frontend', kind: 'HTML + CSS + JS' }, { name: '@uswds/uswds', kind: 'HTML + CSS + JS' }],
    files: ["content/color/govuk--colour.md", "content/type/govuk--type-scale.md", "content/layout/govuk--spacing.md", "content/type/designsystem.digital.gov--typography.md", "content/type/designsystem.digital.gov--typesetting-overview.md", "content/layout/designsystem.digital.gov--layout-grid.md", "content/layout/designsystem.digital.gov--spacing-units.md", "content/color/designsystem.digital.gov--color-overview.md", "content/components/govuk--accordion.md", "content/components/govuk--back-link.md", "content/components/govuk--breadcrumbs.md", "content/components/govuk--button.md", "content/components/govuk--character-count.md", "content/components/govuk--checkboxes.md", "content/components/govuk--cookie-banner.md", "content/components/govuk--date-input.md", "content/components/govuk--details.md", "content/components/govuk--error-message.md", "content/components/govuk--error-summary.md", "content/components/govuk--exit-this-page.md", "content/components/govuk--feedback.md", "content/components/govuk--fieldset.md", "content/components/govuk--file-upload.md", "content/components/govuk--footer.md", "content/components/govuk--generic-header.md", "content/components/govuk--header.md", "content/components/govuk--inset-text.md", "content/components/govuk--language-navigation.md", "content/components/govuk--notification-banner.md", "content/components/govuk--pagination.md", "content/components/govuk--panel.md", "content/components/govuk--password-input.md", "content/components/govuk--phase-banner.md", "content/components/govuk--radios.md", "content/components/govuk--select.md", "content/components/govuk--service-navigation.md", "content/components/govuk--skip-link.md", "content/components/govuk--summary-list.md", "content/components/govuk--table.md", "content/components/govuk--tabs.md", "content/components/govuk--tag.md", "content/components/govuk--task-list.md", "content/components/govuk--text-input.md", "content/components/govuk--textarea.md", "content/components/govuk--warning-text.md", "content/patterns/govuk--addresses.md", "content/patterns/govuk--bank-details.md", "content/patterns/govuk--check-a-service-is-suitable.md", "content/patterns/govuk--check-answers.md", "content/patterns/govuk--complete-multiple-tasks.md", "content/patterns/govuk--confirm-a-phone-number.md", "content/patterns/govuk--confirm-an-email-address.md", "content/patterns/govuk--confirmation-pages.md", "content/patterns/govuk--contact-a-department-or-service-team.md", "content/patterns/govuk--cookies-page.md", "content/patterns/govuk--create-a-username.md", "content/patterns/govuk--create-accounts.md", "content/patterns/govuk--dates.md", "content/patterns/govuk--email-addresses.md", "content/patterns/govuk--equality-information.md", "content/patterns/govuk--exit-a-page-quickly.md", "content/patterns/govuk--interruption-pages.md", "content/patterns/govuk--names.md", "content/patterns/govuk--national-insurance-numbers.md", "content/patterns/govuk--navigate-a-service.md", "content/patterns/govuk--page-not-found-pages.md", "content/patterns/govuk--passwords.md", "content/patterns/govuk--payment-card-details.md", "content/patterns/govuk--phone-numbers.md", "content/patterns/govuk--problem-with-the-service-pages.md", "content/patterns/govuk--question-pages.md", "content/patterns/govuk--service-unavailable-pages.md", "content/patterns/govuk--start-using-a-service.md", "content/patterns/govuk--step-by-step-navigation.md", "content/patterns/govuk--validation.md", "content/type/designsystem.digital.gov--line-height.md", "content/type/designsystem.digital.gov--measure.md", "content/layout/govuk--layout.md"],
    note: "表单、校验、错误文案与分步流程按 patterns 分区的 govuk--* 篇；英国体系用 GOV.UK，美国体系用 USWDS，两套都把无障碍与文字优先当硬约束",
  },
  {
    context: "医疗健康服务（NHS 体系）",
    id: "project-nhs-uk",
    short: "医疗健康（NHS.UK）",
    source: "NHS.UK（英国医疗）",
    libs: [{ name: 'nhsuk-frontend', kind: 'HTML + CSS + JS' }],
    files: ["content/type/nhs.uk--typography.md", "content/layout/nhs.uk--layout.md", "content/layout/nhs.uk--spacing.md", "content/color/nhs.uk--colour.md"],
  },
  {
    context: "创意与内容工具",
    id: "project-spectrum",
    short: "创意工具（Adobe Spectrum）",
    source: "Spectrum（Adobe）",
    stacks: [{ framework: 'react', pkg: '@adobe/react-spectrum' }],
    files: ["content/color/spectrum.adobe.com--color.md", "content/type/spectrum.adobe.com--typography.md", "content/type/spectrum.adobe.com--typography-system.md", "content/layout/spectrum.adobe.com--spacing.md", "content/motion/spectrum.adobe.com--motion.md", "content/icons/spectrum.adobe.com--iconography.md", "content/layout/spectrum.adobe.com--component-spacing.md", "content/layout/spectrum.adobe.com--layout-spacing.md"],
  },
  {
    context: "多产品线自建设计系统",
    id: "project-w3c-dtcg-token",
    short: "自建设计系统（W3C DTCG）",
    source: "W3C DTCG（Token 规范）",
    files: ["content/tokens/dtcg--design-token.md", "content/tokens/dtcg--aliases.md", "content/tokens/dtcg--file-format.md", "content/tokens/dtcg--groups.md", "content/tokens/dtcg--terminology.md", "content/tokens/dtcg--types.md", "content/tokens/primer.style--primitives-token-names.md"],
    note: "Token 结构按 DTCG 规范定，命名参考 Primer 的 primitives 篇；组件与交互做法按产品形态走对应行，不自造 token 语义",
  },
  {
    context: "无障碍整改 / 合规审查",
    id: "project-w3c-wcag-2-2",
    short: "无障碍整改（WCAG 2.2）",
    source: "W3C（WCAG 2.2）",
    files: ["content/a11y/w3c--wcag-2.2.md", "content/a11y/w3c--easy-checks.md"],
    note: "存量产品改造与合规审查：选用标准按 WCAG 2.2 与快速检查清单，组件级键盘与 ARIA 模式读 a11y 分区的 APG 篇，GOV.UK、NHS 的无障碍做法见对应行",
  },
  {
    context: "复刻既有站点（Hallmark 识别）",
    id: "project-hallmark-clone",
    short: "复刻站点（Hallmark 识别）",
    source: "该站抽取的 DESIGN.md",
    files: [],
    note: "先用 Hallmark 识别目标站，按 PROJECT-SELECTION.md 的流程落 content/brands/designmd--<域名>.md，再把这个文件填进本行 files；只服务这一复刻项目，不并进其他项目",
  },
  {
    context: "品牌官网 / 营销页",
    id: "project-brand",
    short: "（对照行）",
    source: "对应品牌 DESIGN.md",
    files: [],
    note: "见 brands 分区里对应品牌的 DESIGN.md",
  },
  {
    context: "Android / 跨端应用（Material 生态）",
    id: "project-material-3",
    short: "Material 3",
    source: "Material 3（Google）",
    libs: [{ name: '@material/web', kind: 'Web Components' }],
    files: ["content/tokens/material-3--tokens.md", "content/color/material-3--color.md", "content/type/material-3--typography.md", "content/layout/material-3--shape.md", "content/layout/material-3--elevation.md", "content/components/material-3--button.md", "content/components/material-3--text-field.md", "content/components/material-3--dialog.md", "content/components/material-3--tabs.md"],
    note: "Material Web 官方文档与 token：色彩、字体、形状、层级基础篇加按钮、文本框、对话框、标签页；Android 与跨端 Material 项目走这一行，iOS 仍走 Apple HIG",
  },
  {
    context: "Windows / Microsoft 365 应用（Fluent 生态）",
    id: "project-fluent-2",
    short: "Fluent 2",
    source: "Fluent 2（Microsoft）",
    stacks: [{ framework: 'react', pkg: '@fluentui/react-components' }],
    files: ["content/tokens/fluent-2--tokens.md", "content/principles/fluent-2--introduction.md", "content/principles/fluent-2--styling.md", "content/color/fluent-2--color.md", "content/type/fluent-2--typography.md", "content/layout/fluent-2--layout.md", "content/motion/fluent-2--motion.md", "content/layout/fluent-2--elevation.md", "content/tokens/fluent-2--design-tokens.md", "content/a11y/fluent-2--focus.md", "content/components/fluent-2--button.md", "content/components/fluent-2--dialog.md", "content/components/fluent-2--menu.md", "content/markdown/learn.microsoft.com--brand-voice-above-all-simple-human.md", "content/markdown/learn.microsoft.com--top-10-tips-style-voice.md"],
    note: "Fluent UI 官方文档、官方站基础页与 token：色彩、字体、布局、动效、层级、Token、介绍、样式、焦点，加按钮、对话框、菜单；Windows / M365 生态走这一行，Web 通用后台不拿它当默认",
  },
  {
    context: "原生应用（iOS / macOS / visionOS）",
    id: "project-apple-hig",
    short: "Apple HIG",
    source: "Apple HIG（人机界面规范）",
    files: [
      "content/color/developer.apple.com--color.md",
      "content/color/developer.apple.com--dark-mode.md",
      "content/color/developer.apple.com--materials.md",
      "content/type/developer.apple.com--typography.md",
      "content/type/developer.apple.com--writing.md",
      "content/layout/developer.apple.com--layout.md",
      "content/layout/developer.apple.com--right-to-left.md",
      "content/layout/developer.apple.com--spatial-layout.md",
      "content/icons/developer.apple.com--icons.md",
      "content/icons/developer.apple.com--app-icons.md",
      "content/icons/developer.apple.com--images.md",
      "content/icons/developer.apple.com--sf-symbols.md",
      "content/a11y/developer.apple.com--accessibility.md",
      "content/a11y/developer.apple.com--inclusion.md",
      "content/principles/developer.apple.com--branding.md",
      "content/principles/developer.apple.com--immersive-experiences.md",
      "content/principles/developer.apple.com--privacy.md",
      "content/motion/developer.apple.com--motion.md",
      "content/patterns/developer.apple.com--charting-data.md",
      "content/patterns/developer.apple.com--collaboration-and-sharing.md",
      "content/patterns/developer.apple.com--drag-and-drop.md",
      "content/patterns/developer.apple.com--entering-data.md",
      "content/patterns/developer.apple.com--feedback.md",
      "content/patterns/developer.apple.com--file-management.md",
      "content/patterns/developer.apple.com--going-full-screen.md",
      "content/patterns/developer.apple.com--launching.md",
      "content/patterns/developer.apple.com--live-viewing-apps.md",
      "content/patterns/developer.apple.com--loading.md",
      "content/patterns/developer.apple.com--managing-accounts.md",
      "content/patterns/developer.apple.com--managing-notifications.md",
      "content/patterns/developer.apple.com--modality.md",
      "content/patterns/developer.apple.com--multitasking.md",
      "content/patterns/developer.apple.com--offering-help.md",
      "content/patterns/developer.apple.com--onboarding.md",
      "content/patterns/developer.apple.com--playing-audio.md",
      "content/patterns/developer.apple.com--playing-haptics.md",
      "content/patterns/developer.apple.com--playing-video.md",
      "content/patterns/developer.apple.com--printing.md",
      "content/patterns/developer.apple.com--ratings-and-reviews.md",
      "content/patterns/developer.apple.com--searching.md",
      "content/patterns/developer.apple.com--settings.md",
      "content/patterns/developer.apple.com--undo-and-redo.md",
      "content/patterns/developer.apple.com--workouts.md",
      "content/components/developer.apple.com--charts.md",
      "content/components/developer.apple.com--image-views.md",
      "content/components/developer.apple.com--text-views.md",
      "content/components/developer.apple.com--web-views.md",
      "content/components/developer.apple.com--boxes.md",
      "content/components/developer.apple.com--collections.md",
      "content/components/developer.apple.com--column-views.md",
      "content/components/developer.apple.com--disclosure-controls.md",
      "content/components/developer.apple.com--labels.md",
      "content/components/developer.apple.com--lists-and-tables.md",
      "content/components/developer.apple.com--lockups.md",
      "content/components/developer.apple.com--outline-views.md",
      "content/components/developer.apple.com--split-views.md",
      "content/components/developer.apple.com--tab-views.md",
      "content/components/developer.apple.com--activity-views.md",
      "content/components/developer.apple.com--buttons.md",
      "content/components/developer.apple.com--context-menus.md",
      "content/components/developer.apple.com--dock-menus.md",
      "content/components/developer.apple.com--edit-menus.md",
      "content/components/developer.apple.com--home-screen-quick-actions.md",
      "content/components/developer.apple.com--menus.md",
      "content/components/developer.apple.com--ornaments.md",
      "content/components/developer.apple.com--pop-up-buttons.md",
      "content/components/developer.apple.com--pull-down-buttons.md",
      "content/components/developer.apple.com--the-menu-bar.md",
      "content/components/developer.apple.com--toolbars.md",
      "content/components/developer.apple.com--path-controls.md",
      "content/components/developer.apple.com--search-fields.md",
      "content/components/developer.apple.com--sidebars.md",
      "content/components/developer.apple.com--tab-bars.md",
      "content/components/developer.apple.com--token-fields.md",
      "content/components/developer.apple.com--action-sheets.md",
      "content/components/developer.apple.com--alerts.md",
      "content/components/developer.apple.com--page-controls.md",
      "content/components/developer.apple.com--panels.md",
      "content/components/developer.apple.com--popovers.md",
      "content/components/developer.apple.com--scroll-views.md",
      "content/components/developer.apple.com--sheets.md",
      "content/components/developer.apple.com--windows.md",
      "content/components/developer.apple.com--color-wells.md",
      "content/components/developer.apple.com--combo-boxes.md",
      "content/components/developer.apple.com--digit-entry-views.md",
      "content/components/developer.apple.com--image-wells.md",
      "content/components/developer.apple.com--pickers.md",
      "content/components/developer.apple.com--segmented-controls.md",
      "content/components/developer.apple.com--sliders.md",
      "content/components/developer.apple.com--steppers.md",
      "content/components/developer.apple.com--text-fields.md",
      "content/components/developer.apple.com--toggles.md",
      "content/components/developer.apple.com--virtual-keyboards.md",
      "content/components/developer.apple.com--activity-rings.md",
      "content/components/developer.apple.com--gauges.md",
      "content/components/developer.apple.com--progress-indicators.md",
      "content/components/developer.apple.com--rating-indicators.md",
      "content/components/developer.apple.com--app-shortcuts.md",
      "content/components/developer.apple.com--complications.md",
      "content/components/developer.apple.com--controls.md",
      "content/components/developer.apple.com--live-activities.md",
      "content/components/developer.apple.com--notifications.md",
      "content/components/developer.apple.com--snippets.md",
      "content/components/developer.apple.com--status-bars.md",
      "content/components/developer.apple.com--top-shelf.md",
      "content/components/developer.apple.com--watch-faces.md",
      "content/components/developer.apple.com--widgets.md",
    ],
    note: "Apple HIG 即 Apple Human Interface Guidelines（人机界面规范/指南）；布局篇只作原则，间距按缺口规则回源；图标在 icons 分区",
  }
]

/** 基准规范缺口与派生：examples/ 各站（含测试批次）的 FINDINGS.md 反复踩到的缺口收敛成回源规则。
 * 基准规范没覆盖的维度禁止现场各自派生（五站曾组合出五套互不对齐的间距）：先按下表回源取次源，
 * 回不到才走兜底档；例外与派生值连同理由记进 DECISIONS，缺口记进 FINDINGS。 */
export type GapRule = {
  /** 缺口维度 */
  dim: string
  /** 回源文章：基准规范缺这维度时改从这些原文取值，仍记 文件:行号 */
  files: string[]
  /** 处理与兜底 */
  rule: string
}

export const GAP_RULES: GapRule[] = [
  {
    dim: '间距',
    files: ['content/layout/atlassian.design--spacing.md', 'content/layout/uisdc.com--code-for-design-of-spacing.md', 'content/layout/polaris.shopify.com--layout-tokens.md'],
    rule: '基准规范没有 spacing scale 时从回源文章整套取一种尺度（Atlassian 8px 基数、优设 8/16/24/32/48/64、Polaris 4px 基数），全站只用这一套；批次默认取 Atlassian 8px 基数，换用别套回源必须在 DECISIONS 记理由；禁止拿字阶步进自己组合。',
  },
  {
    dim: '动效时长与缓动',
    files: ['content/motion/nngroup.com--animation-duration.md', 'content/motion/atlassian.design--motion.md', 'content/motion/carbondesignsystem.com--motion.md', 'content/standards/w3c--css-easing-1.md'],
    rule: '基准规范没有动效篇时按场景档位从回源文章取时长与缓动，进场比退出稍长；prefers-reduced-motion 兜底照做。风格层已下线，时长一律按 UX 回源取（交互微动效 200-300ms 档），裁决记取值记录；批次默认取 NN/g 100/200/300 三档，缓动优先引 w3c--css-easing-1 或 atlassian motion 的定值曲线，回源确无曲线才用 CSS 关键字，禁止自造 cubic-bezier。',
  },
  {
    dim: '圆角',
    files: [],
    rule: '库内没有通用 radius 规范（brands 篇的圆角只属该品牌）：整站统一派生档（4px / 8px 两档起步）标 derived，成套自洽，不逐处随手取。',
  },
  {
    dim: '数字字体',
    files: ['content/type/tdesign.tencent.com--fonts.md'],
    rule: '规范点名的数字字体（如 TCloud Number）零外部请求拿不到时，用 font-variant-numeric: tabular-nums 近似等距效果，标「降级」，不冒充原文值。',
  },
  {
    dim: '发丝线宽',
    files: [],
    rule: '基准规范只给分隔线颜色没给线宽时，1px 记 derived；装饰分隔色不承担控件边界，边界按非文本 3:1 另取。',
  },
  {
    dim: '色阶当文字',
    files: ['content/color/tdesign.tencent.com--color.md', 'content/type/tdesign.tencent.com--fonts.md'],
    rule: '色阶值不等于能当文字，原文自述的对比度也会错（fonts.md 自述文字对比满足 4.5，其白色 35% 档压 #181818 实测 3.23:1）；任何色值当文字前对实际底色复算，不达 4.5 的档只给禁用与装饰，文字换同族深档（只在本基准规范色板内加深；基准规范无色板按派生色 token 深化，不跨源借色）；基准规范语义 token 映射出的 hover / active 同样按实际底色复算，不达 AA 就同族换档并记取值记录。',
  },
  {
    dim: '图表几何参数',
    files: [],
    rule: '基准规范不给轴档数、柱宽、环半径这类几何参数：标 derived 全站统一自定，不冒充原文值；构图原则回源 Carbon 图表解剖系列（content/dataviz/）。',
  },
  {
    dim: '组件尺寸',
    files: [],
    rule: '基准规范不给输入框、表格行高等组件尺寸：标 derived 全站统一（行高与控件高度成套自定），不逐处随手取。',
  },
  {
    dim: '色值',
    files: ['content/color/tdesign.tencent.com--color.md', 'content/color/govuk--colour.md'],
    rule: '基准规范只有语义规则没给色板数值时，要么回源取色板原文值（TDesign 色阶或 GOV.UK 调色板）做整套 token，要么成套派生逐条标 derived 记 FINDINGS；两半混用是缺陷。',
  },
  {
    dim: '字阶',
    files: ['content/type/tdesign.tencent.com--fonts.md', 'content/type/govuk--type-scale.md'],
    rule: '基准规范没给字号时，回源取一套字阶原文值（TDesign 字阶或 GOV.UK type scale）或派生 3-4 档标 derived；全站只用这一套，行高同源定。',
  },
  {
    dim: '正文行长',
    files: [],
    rule: '基准规范没给行长时用 max-width 封顶（英文每行 60-75 字符；中文 35-45 字，窄栏可到 20-35，同页只用一种），值标 derived；长行是可读性问题不是风格问题。',
  },
  {
    dim: '首屏占比',
    files: [],
    rule: 'hero 高度控制在一屏 85% 上下，让下一节露头；超长首屏会让人以为页面到头。标 derived。',
  },
  {
    dim: '弹层遮罩',
    files: [],
    rule: '遮罩全站一档（rgba(0,0,0,0.45) 上下），弹层内不再叠第二层遮罩；标 derived 成套自定。',
  },
  {
    dim: '触控目标与焦点环',
    files: ['content/a11y/w3c--wcag-2.2.md'],
    rule: '基准规范没给触控目标与焦点环规格时：触控目标照 WCAG 2.2 目标尺寸下限（稳妥取 44px），焦点环用 2px 实线加 2px 偏移的高对比样式；标 derived。',
  },
  {
    dim: '金额排版',
    files: [],
    rule: '基准规范没给金额排版时：两位小数、千分位分隔、负号在币种符号前、金额用 tabular-nums（数字字体缺字时按「数字字体」条降级），全站一套；标 derived。',
  },
]

/** 方法层必读：出稿前必读的方法点，配色、层级与布局的搭配规则在这些原文里，不许只凭数值层出稿 */
export const METHOD_REQUIRED = [
  { id: 'howto-ui-color-framework', name: '界面配色框架', why: '定主辅与面积：主色深浅变体怎么推、要不要加第二色相' },
  { id: 'howto-visual-hierarchy', name: '视觉层级', why: '定三档层级：字号最多 3 档，最大的元素不超过 2 个' },
  {
    id: 'layout-intrinsic-patterns',
    name: '布局模式',
    why: '拆骨架：纵向间距只由一层给，多栏先定栏距与正文列余量，取值合规也不会叠出双份留白',
  },
]

/** 必选场景：第 4 步要求每类至少选一个点；动效点跨场景，按 id 前缀识别。
 *  端点 /ai/design-points.json 的 required 与点弹窗的「必选／验收」提示由它派生；
 *  设计地图的筛选按钮与任务轨不再挂徽标。 */
export type RequiredRule = {
  key: string
  /** 短名：/ai/design-points.json 的 required 按场景下发 */
  label: string
  /** 全名：七步流程与点弹窗用 */
  title: string
  /** 该规则覆盖的设计场景 */
  tasks: string[]
  /** 选点说明，接在场景后写进第 4 步 */
  desc: string
  /** 在哪一步必选：出稿（第 4 步）或验收（第 7 步） */
  stage: 'build' | 'review'
  /** 点 id 前缀：跨场景的类别（动效）用，只有命中前缀的点才算必选 */
  pointPrefix?: string
}

export const REQUIRED_RULES: RequiredRule[] = [
  { key: 'copy', label: '文案', title: '文案写作', tasks: ['s13'], desc: '定语气与微文案', stage: 'build' },
  { key: 'state', label: '状态', title: '状态反馈', tasks: ['s19'], desc: '覆盖空态、加载、错误、通知', stage: 'build' },
  { key: 'a11y', label: '无障碍', title: '无障碍', tasks: ['s9'], desc: '覆盖焦点、键盘、对比度', stage: 'build' },
  {
    key: 'motion',
    label: '动效',
    title: '动效',
    tasks: ['s5', 's6', 's19'],
    desc: '覆盖有状态变化的组件',
    stage: 'build',
    pointPrefix: 'motion-',
  },
  {
    key: 'review',
    label: '评审',
    title: '评审底线',
    tasks: ['s16'],
    desc: '按评审清单与逐页走查验收',
    stage: 'review',
  },
]

/** 出稿必选：第 4 步选点时要覆盖的横切面 */
const BUILD_RULES = REQUIRED_RULES.filter((r) => r.stage === 'build')
/** 验收必选：第 7 步回炉时要按它逐条过的场景 */
const REVIEW_RULES = REQUIRED_RULES.filter((r) => r.stage === 'review')

/** 点命中的必选规则：场景规则按 tasks 命中，动效规则按 id 前缀命中 */
export function requiredRulesFor(point: { id: string; tasks: string[] }): RequiredRule[] {
  return REQUIRED_RULES.filter((r) =>
    r.pointPrefix ? point.id.startsWith(r.pointPrefix) : point.tasks.some((t) => r.tasks.includes(t)),
  )
}

/** 七步用法：/ai/guide.md|json 与 /ai/design-points.json 带上，首页提示词面板也由它拼 */
export type UsageStep = {
  n: number
  title: string
  desc: string
  /** 每步的判断依据：没有这条产物就算没走完，用来防「声称完成」 */
  gate: string
  branch?: { title: string; desc: string }[]
}

export const USAGE_STEPS: UsageStep[] = [
  {
    n: 1,
    title: '定语境',
    desc: '先说清产品是什么、给谁用（中文后台、公共服务、开发者工具、品牌官网都算一类），第 3 步据此选基准规范。改版、重构、给本库自己改站同样是项目，一样要选基准规范。',
    gate: '一句「产品类型 + 给谁用」写进取值记录。',
  },
  {
    n: 2,
    title: '拉指南包',
    desc: '拉 <站点地址>/ai/design-points.json，一次拿到用法、指南、方法层必读、设计场景与设计点，不用整库翻目录。在本仓库干活读 site/dist/ai/design-points.json，没构建读 site/src/data/star-points.json。版式三件不在包里，从 Hallmark 版式库选。',
    gate: '五样都在手上：用法、指南、方法层必读、设计场景、场景到设计点的索引。',
  },
  {
    n: 3,
    title: '项目选型',
    desc: '按项目选型方案选出基准规范，一个项目只认一个。它拥有数值决定权，其他来源只借原则。需求里开了框架的，要选同一行有该框架官方组件库的基准规范，选不到就换行，不硬配。图表库不参与这一约束：TDesign 等行没有官方图表库，图表默认 ECharts。它没覆盖的维度按「基准规范缺口与派生」回源，回不到才走兜底档，例外与派生写进取值记录。可访问性底线压过风格。',
    gate: '基准规范名写进取值记录；缺的维度写明回源、派生还是兜底；开了框架时，所选那行的组件库与需求的框架一致。',
  },
  {
    n: 4,
    title: '选设计点',
    desc: `先读方法层必读三篇原文（界面配色框架、视觉层级、布局模式），再选点；数值一律回 articles 指的原文取，这里不存摘要。结构要先定：Hallmark 介入定宏观版式（Marquee Hero、Stat-Led 这类），库内给「版型原型」的区块顺序，两层各写件名。结构不定下来，选点就会偏。件名写进取值记录的结构节，版式三件一行一件（件名加一句理由），版型原型写同一节。出稿必选 ${BUILD_RULES.length} 类，每类至少一个点：${BUILD_RULES.map((r) => `${r.title}（${r.tasks.join(' / ')}）${r.desc}`).join('，')}。`,
    gate: `方法层三篇读过；结构节有版式三件的件名与理由，也有版型原型的件名；${BUILD_RULES.length} 类出稿必选各至少一个点，选点清单带 id 与 articles。`,
    branch: [
      { title: '按设计场景', desc: 'tasks 里选场景（如「落地页」，键 s2），用 points_by_task 反查该场景的全部设计点。' },
      { title: '按设计问题', desc: '拿具体问题对 select 匹配设计点，再去它 articles 指的原文取。' },
    ],
  },
  {
    n: 5,
    title: '读原文取值',
    desc: '按选中的点读它 articles 里的 2 到 5 篇全文（端点 /md/<path>，不够 2 篇就全读），把要用的值连 文件:行号 记进取值记录。引用一律写 content/ 完整路径，缩写不算出处。',
    gate: '每个值有行号，跨源数值为零。组合再查一遍：同一段间距只有一层来源，相邻元素按刻度，多栏先定栏距与正文列余量。单值合规不等于组合合规。',
  },
  {
    n: 6,
    title: '出稿与自查',
    desc: '按第 4 步定下的版式件名与版型落结构，不临时换件，也不用「侧栏 + 表格」这类默认骨架顶替。数值与本库原文对齐，进 token，不写裸值。数值点的自测题逐题做过。文案按文案写作点写，空态、加载、错误、通知按状态反馈点做，焦点可见、键盘可操作、对比度达标。组件在打开、关闭、切换时给过渡，时长与曲线取自本库动效点，系统开了减弱动效就按 reduced-motion 兜底。需求开了框架的，组件用第 3 步那行配套的官方组件库，单文件经 import map 从 esm.sh 引，地址带 ?bundle 与 external（React 库写 external=react,react-dom，Vue 库写 external=vue），样式按该库文档引全量 CSS；引完后把库的主题变量映射到该站基准规范的值：品牌色、语义色（成功、错误、警告）、文字色、字阶、间距、圆角、动效时长逐项重设，覆盖库默认，映射清单连 `文件:行号` 写进取值记录，库默认值残留算未完成。引库时锁版本，不用 latest。图表不随组件库绑：默认 ECharts，用它的主题与调色盘把颜色、字体、动效映射到同一套规范值；Carbon 体系的项目用 @carbon/charts；只在纯测试页或极简需求里手写 SVG。同类组件不再手写；没开的照常手写结构与样式。',
    gate: '裸值为零，自测题全过，出处随稿附上；结构与第 4 步的件名一致；开了框架时组件来自该行组件库，页面里没有手写的同类组件，库默认主题变量已映射到规范值并记了出处；图表库主题同样映射到规范值；文案与空态、加载、错误、通知逐项有产出；焦点可见，键盘可用；有状态变化的组件都有过渡，动效值有出处。任一项不过先定归属：数值与出处回第 5 步，其余缺项回第 4 步补点。',
  },
  {
    n: 7,
    title: '测试回炉',
    desc: `用浏览器自动化逐个真点（表单校验、筛选、导航、弹层开合），量 320 / 375 / 768 / 1280 四档的宽度与溢出，再按所选基准规范的断点逐个边界量一次。对比度按正文 4.5:1、大字（24px 或 19px 粗体以上）3:1、图形与控件边界 3:1 核对；键盘 Tab 走一遍，焦点环看得见，空态、加载、错误逐态造出来看。验收必选${REVIEW_RULES.map((r) => `${r.title}（${r.tasks.join(' / ')}）`).join('、')}，逐条过，不只跑自测。`,
    gate: `交互、键盘、焦点、对比度、状态逐态与四档加断点边界的宽度逐项有结果，对比度按 4.5:1 与 3:1 逐项核过，${REVIEW_RULES.map((r) => r.title).join('、')}逐条过；不通过回第 4 步补点或第 5 步重取值，不许改设计点硬凑。`,
  },
]

/** 信息类型：不同信息给 AI 的导向不同，按分区归五类（进 /ai/design-points.json 的 usage） */
export type InfoType = 'values' | 'patterns' | 'layouts' | 'styles' | 'cases'
export const TYPE_BY_DOMAIN: Record<string, InfoType> = {
  type: 'values',
  color: 'values',
  motion: 'values',
  layout: 'values',
  icons: 'values',
  tokens: 'values',
  standards: 'values',
  dataviz: 'values',
  howto: 'values',
  bento: 'values',
  markdown: 'values',
  principles: 'values',
  patterns: 'patterns',
  components: 'patterns',
  a11y: 'patterns',
  layouts: 'layouts',
  styles: 'styles',
  brands: 'styles',
  cases: 'cases',
}

/** AI 提示词：首页页题旁的面板给出，复制发给 AI 即用 */
export const AI_PROMPT = `你要按 UI 设计规范出界面稿，数值禁止凭记忆编造，一切取值以 UISpecs 规范库原文为准：

${USAGE_STEPS.map((s) => `${s.n}. ${s.title}：${s.desc}判断依据：${s.gate}`).join('\n')}

另：结构由 Hallmark 介入，版式三件从它的版式库选（macrostructure 21 件、nav 14 件、footer 8 件），写出件名与理由，批内按 briefs/layouts.md 的速查表分配；本库给版型原型与数值，两边共同作用，不许拿默认骨架顶替；数值归本库，一个项目一个基准规范；一次生成多个站时先按 briefs/rotation/<批次>.json 分配版式与强调色，并用 scripts/check-rotation.mjs 校验，通过再开批。站点命名走 NameYouLike 口径（起名提示词与核验：https://github.com/hey-yx/NameYouLike），英文产品名、绑产品事实、落一次真实碰撞检索，结果记进取值记录；引库锁版本，不用 latest；图表不随组件库绑，默认 ECharts，用主题与调色盘把颜色、字体、动效映射到该站基准规范，Carbon 体系的项目用 @carbon/charts，纯测试页或极简需求才手写 SVG。`

/** 维护规则：从旧 AGENTS.md 收敛成的短条目；页面不再展示，机器可读版在 /ai/guide.json 的 maintenance 字段 */
export const MAINTENANCE_RULES: { title: string; items: string[] }[] = [
  {
    title: '收文',
    items: [
      '只收全文，导读卡与半截正文不收；抓不到正文的页面直接跳过',
      '官方同源 Markdown 优先，能拿仓库原文就不爬渲染页',
      'AI 已会的通用设计法则、语法速查、纯趋势叙述文不收',
    ],
  },
  {
    title: '入库',
    items: [
      '路径 content/<分区>/<域名>--<slug>.md，分区名即目录名',
      'frontmatter 必填 id、title、source、section、tag、fetched、status、publisher；id 写入后不改',
      '加完条目在任务路由里补一行，路径写真实文件名；构建会校验引用',
    ],
  },
  {
    title: '分区与标签',
    items: [
      '分区顺序与标题在 site/src/data/sections.ts；学习路径分区（howto、bento）的顺序即阅读顺序',
      '规范分区排序：国际官方 → 工程类 → 国内 → 中文社区实战',
      '标签从词表选，不造新词：规范、品牌规范、研究、实战、课程、工程、案例库、语法标准、写作规范、阅读排版',
    ],
  },
  {
    title: '回流',
    items: [
      '每站 FINDINGS 收官把新缺口回填「基准规范缺口与派生」，取值记录格式问题回填模板',
      '同一缺口不许在两个站重复出现：第二次出现说明规则没写进 guide',
      '取值记录交付前跑 scripts/check-ledger.py 过格式',
    ],
  },
  {
    title: '站点',
    items: [
      '全部前端文件在 site/，改 site/src/ 不改 site/dist/（构建产物）',
      '零描边：层级靠字重、间距、底色与灰阶，不引入边框线',
      '信号色面积 < 5%，亮暗两态同步改，色值只走 token 区',
      '交付前 1280 / 768 / 375 / 320 四档无横向溢出，⌘K 面板流程真跑',
    ],
  },
]

/** 按设计场景推导该读哪几篇：设计地图数据里每个设计点都挂着场景与文章
 *
 * mode：full（默认，/ai/guide.md|json 独立导出，带任务→文章表）；
 * slim（/ai/design-points.json 的 guide 字段，任务→文章可由 points 与 points_by_task 推出，不重复列）。
 */
export function buildGuideMarkdown(
  tasks: Record<string, { name: string; short: string }>,
  points: { name: string; tasks: string[]; articles: string[] }[],
  opts: { mode?: 'full' | 'slim' } = {},
): string {
  const mode = opts.mode ?? 'full'
  const lines: string[] = []
  lines.push('# 指南：怎么用本库')
  lines.push('')
  lines.push('一个项目一个基准规范，基准规范拥有数值决定权，其余来源只取原则；可访问性底线高于任何风格。')
  lines.push('')
  lines.push('## 分工')
  lines.push('版式由 Hallmark 介入：macrostructure、nav、footer 三件从它的版式库选（21 件、14 件、8 件），批内按 briefs/layouts.md 的速查表分配，在取值记录里写出件名与理由；库内的版型原型与数值一并参与，两边共同作用，营销页与后台页不共用一套默认骨架（侧栏加表格、单栏文档、等宽卡片网格都算默认骨架，只有写明理由才成立）。数值归本库：一个项目一个基准规范。设计点给取值依据与搭配方法，不决定版式。')
  lines.push('')
  lines.push('## 一批站怎么分配版式与配色')
  lines.push('一次生成多个站时，需求只写产品是什么、给谁用；版式与强调色在开批前统一分配，落 `briefs/rotation/<批次>.json`（一批一份，批内不重复，换一批可以重排），每站一份 macrostructure、nav、footer 与一个强调色，并写一句为什么是这组。挑件的依据是 `briefs/layouts.md`：先按产品形态定位（营销页、应用页、文档、内容发现、流程、叙事），再从 21 个版式、14 个导航、8 个页脚里选，不要凭感觉。规则：同一批版式与导航不重复，页脚每种最多两次，色系不少于六种、同色系最多两站且明度差至少 20，强调色只在该站基准规范的色板原文里取。分配完跑 `node scripts/check-rotation.mjs`，不通过不开批。单站生成不走这一步。')
  lines.push('')
  lines.push('## 七步')
  for (const s of USAGE_STEPS) lines.push(`${s.n}. ${s.title}：${s.desc}判断依据：${s.gate}`)
  lines.push('')
  lines.push('## 项目选型方案')
  lines.push('框架一列给该行官方组件库，需求开了框架时按它引；服务端模板（GOV.UK、USWDS、NHS.UK）、原生（Apple HIG）与纯规范（W3C DTCG）没有 React 或 Vue 组件库，写「无」。新品牌官网、复刻站点、品牌官网三行自己没有库，跟随所选或所抽体系的库，开了框架时按那一行的组件库引。')
  lines.push('')
  lines.push('| 产品语境 | 基准规范 | 框架 / 组件库 | 读这批文件 |')
  lines.push('| --- | --- | --- | --- |')
  for (const m of MAIN_SOURCES) {
    const files = m.files.map((f) => `\`${f}\``).join(' ') || m.note || '见 brands 分区'
    const stacks = m.stacks?.map((s) => `${s.framework === 'react' ? 'React' : 'Vue'} 用 ${s.pkg}`).join('、') || '无'
    lines.push(`| ${m.context} | ${m.source} | ${stacks} | ${files} |`)
  }
  lines.push('')
  lines.push('## 基准规范缺口与派生')
  lines.push('基准规范没覆盖的维度禁止现场各自派生（五个案例曾组合出五套互不对齐的间距）：先按下表回源取次源，回不到才走兜底档；例外与派生值连同理由记进 DECISIONS，缺口记进 FINDINGS。')
  lines.push('')
  lines.push('| 缺口维度 | 回源文章 | 处理与兜底 |')
  lines.push('| --- | --- | --- |')
  for (const g of GAP_RULES) {
    const files = g.files.map((f) => `\`${f}\``).join(' ') || '（库无对应原文）'
    lines.push(`| ${g.dim} | ${files} | ${g.rule} |`)
  }
  lines.push('')
  lines.push('## 方法层必读')
  lines.push('')
  lines.push('出稿前必读这三个方法点，配色、层级与布局的搭配规则在原文里；数值层只管取值，不管搭配。')
  lines.push('')
  for (const m of METHOD_REQUIRED) lines.push(`- ${m.name}（${m.id}）：${m.why}`)
  lines.push('')
  if (mode === 'slim') {
    lines.push('设计场景 → 该读哪几篇不在此重复：按 points[].tasks 或 points_by_task 反查 points[].articles。')
    lines.push('')
    return lines.join('\n')
  }
  lines.push('## 设计场景 → 该读哪几篇')
  for (const [id, t] of Object.entries(tasks)) {
    const arts = new Set<string>()
    for (const p of points) {
      if (!p.tasks.includes(id)) continue
      for (const a of p.articles) arts.add(a)
    }
    lines.push('')
    lines.push(`### ${id.toUpperCase()} ${t.name}`)
    lines.push(t.short)
    for (const a of arts) lines.push(`- content/${a}`)
  }
  lines.push('')
  return lines.join('\n')
}
