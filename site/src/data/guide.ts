/**
 * 指南数据（站点内唯一真源）。
 *
 * 历史：先前的 AI-USAGE.md 与 AGENTS.md 已删，改用结构化数据。
 * 步骤与提示词只在这里维护：/ai/design-points.json 的 guide 字段由
 * buildGuideMarkdown() 以 slim 模式生成（去掉与 points 重复的任务→文章表），
 * /ai/guide.md|json 用 full 模式（独立可读）；构建前校验直接读本文件的 content/ 路径。
 * 四者共享这一份。
 */

import { REFERENCE_SCREENS } from './reference-screens.ts'

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
  /** 适用场景与换用条件，弹窗里单独一块 */
  scenario?: { use: string; switchTo: string }
  /** 基准规范文章：一个项目只从这些文件里取数值 */
  files: string[]
  /** 补充说明：细页、分区入口或数值可取性 */
  note?: string
  /** 移出项目选型主表，仅保留文章牵引 */
  archived?: boolean
}

/** 按常用程度排序：中文产品 UI 置顶，原生应用在末位。顺序同时决定设计地图「项目选型方案」组、/ai/guide.md 对照表与 /ai/guide.json 的 main_sources。 */
export const MAIN_SOURCES: MainSource[] = [
  {
    context: "中文产品 UI（中后台 / 工具 / 内容 / 协作）",
    id: "project-tdesign",
    scenario: {
      use: "中文通用中后台、职位目录、SaaS 官网与协作工作台；React 或 Vue 都有官方组件库。",
      switchTo: "商家/课程后台换 Polaris；开发者/代码/提示词工具换 Primer；高密度数据与情报流换 Carbon；创意/媒体解析换 Spectrum；日程/医疗门户换 Fluent 2；消费级多角色对话壳换 Apple HIG。",
    },
    short: "中文产品 UI（TDesign）",
    source: "TDesign（腾讯）",
    stacks: [{ framework: 'react', pkg: 'tdesign-react' }, { framework: 'vue', pkg: 'tdesign-vue-next' }],
    files: ["content/color/tdesign.tencent.com--color.md", "content/type/tdesign.tencent.com--fonts.md", "content/layout/tdesign.tencent.com--layout.md", "content/icons/tdesign.tencent.com--icon.md", "content/motion/tdesign.tencent.com--motion.md", "content/color/tdesign.tencent.com--dark.md", "content/patterns/tdesign.tencent.com--backoffice-tasks.md", "content/principles/tdesign.tencent.com--values.md", "content/components/tdesign.tencent.com--input.md", "content/components/tdesign.tencent.com--select.md", "content/components/tdesign.tencent.com--checkbox.md", "content/components/tdesign.tencent.com--radio.md", "content/components/tdesign.tencent.com--switch.md", "content/components/tdesign.tencent.com--table.md", "content/components/tdesign.tencent.com--dialog.md", "content/components/tdesign.tencent.com--message.md", "content/components/tdesign.tencent.com--tabs.md", "content/components/tdesign.tencent.com--pagination.md", "content/components/tdesign.tencent.com--date-picker.md", "content/components/tdesign.tencent.com--form.md", "content/components/tdesign.tencent.com--upload.md", "content/components/tdesign.tencent.com--tag.md", "content/components/tdesign.tencent.com--tooltip.md", "content/components/tdesign.tencent.com--button.md", "content/components/tdesign.tencent.com--cascader.md", "content/components/tdesign.tencent.com--divider.md", "content/components/tdesign.tencent.com--drawer.md", "content/components/tdesign.tencent.com--dropdown.md", "content/components/tdesign.tencent.com--icon.md", "content/components/tdesign.tencent.com--input-number.md", "content/components/tdesign.tencent.com--layout.md", "content/components/tdesign.tencent.com--list.md", "content/components/tdesign.tencent.com--loading.md", "content/components/tdesign.tencent.com--menu.md", "content/components/tdesign.tencent.com--popconfirm.md", "content/components/tdesign.tencent.com--search.md", "content/components/tdesign.tencent.com--slider.md", "content/components/tdesign.tencent.com--steps.md", "content/components/tdesign.tencent.com--textarea.md", "content/components/tdesign.tencent.com--tree.md"],
    note: "token 级，数值全在正文。用于中文通用中后台、目录与官网，与其他 6 套官方选型按产品同构平权分流（不把它强行当全站唯一默认皮肤）；价值观篇 principles/tdesign.tencent.com--values.md 只作气质参照，不取数值",
  },
  {
    context: "企业产品 / 数据密集界面",
    id: "project-carbon",
    scenario: {
      use: "企业数据密集界面、监控与运维台、多维复杂表格；需要 IBM 直角与 Blue 60 语言的 React 产品。",
      switchTo: "中文通用后台换 TDesign；轻量 KPI 看板或需要原生 1px 细边框亮暗双主题的工具台换 Umami；代码/仓库类开发者工具换 Primer；没有 React 时只能按 Carbon CSS 做 CSS-only。",
    },
    short: "企业数据密集（IBM Carbon）",
    source: "Carbon（IBM）",
    stacks: [{ framework: 'react', pkg: '@carbon/react' }],
    files: ["content/color/carbondesignsystem.com--color.md", "content/type/carbondesignsystem.com--typography.md", "content/layout/carbondesignsystem.com--spacing.md", "content/motion/carbondesignsystem.com--motion.md", "content/layout/carbondesignsystem.com--2x-grid.md", "content/layout/carbondesignsystem.com--2x-grid-usage.md", "content/motion/carbondesignsystem.com--motion-choreography.md", "content/color/carbondesignsystem.com--themes.md", "content/icons/carbondesignsystem.com--iconography.md", "content/components/carbondesignsystem.com--select-usage.md", "content/components/carbondesignsystem.com--text-input-usage.md", "content/components/carbondesignsystem.com--checkbox-usage.md", "content/components/carbondesignsystem.com--radio-button-usage.md", "content/components/carbondesignsystem.com--toggle-usage.md", "content/components/carbondesignsystem.com--dropdown-usage.md", "content/components/carbondesignsystem.com--notification-usage.md", "content/components/carbondesignsystem.com--tooltip-usage.md", "content/components/carbondesignsystem.com--progress-bar-usage.md", "content/components/carbondesignsystem.com--pagination-usage.md", "content/components/carbondesignsystem.com--breadcrumb-usage.md", "content/components/carbondesignsystem.com--tag-usage.md", "content/components/carbondesignsystem.com--search-usage.md", "content/components/carbondesignsystem.com--menu-usage.md", "content/components/carbondesignsystem.com--list-usage.md", "content/components/carbondesignsystem.com--link-usage.md", "content/components/carbondesignsystem.com--accordion-usage.md", "content/components/carbondesignsystem.com--date-picker-usage.md", "content/components/carbondesignsystem.com--slider-usage.md", "content/components/carbondesignsystem.com--tile-usage.md", "content/components/carbondesignsystem.com--loading-usage.md", "content/a11y/carbondesignsystem.com--a11y-color.md", "content/a11y/carbondesignsystem.com--a11y-keyboard.md", "content/a11y/carbondesignsystem.com--a11y-overview.md", "content/components/carbondesignsystem.com--button-usage.md", "content/components/carbondesignsystem.com--data-table-usage.md", "content/components/carbondesignsystem.com--modal-usage.md", "content/components/carbondesignsystem.com--tabs-usage.md", "content/patterns/carbon--common-actions.md", "content/patterns/carbon--dialog-pattern.md", "content/patterns/carbon--disabled-states.md", "content/patterns/carbon--disclosures-pattern.md", "content/patterns/carbon--empty-states-pattern.md", "content/patterns/carbon--filtering.md", "content/patterns/carbon--fluid-styles.md", "content/patterns/carbon--forms-pattern.md", "content/patterns/carbon--global-header.md", "content/patterns/carbon--loading-pattern.md", "content/patterns/carbon--login-pattern.md", "content/patterns/carbon--notification-pattern.md", "content/patterns/carbon--overflow-content.md", "content/patterns/carbon--read-only-states-pattern.md", "content/patterns/carbon--search-pattern.md", "content/patterns/carbon--status-indicator-pattern.md", "content/patterns/carbon--text-toolbar-pattern.md", "content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md", "content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md", "content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md", "content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md", "content/dataviz/carbondesignsystem.com--data-visualization-flow-charts.md", "content/dataviz/carbondesignsystem.com--data-visualization-gantt-charts.md", "content/dataviz/carbondesignsystem.com--data-visualization-legends.md", "content/dataviz/carbondesignsystem.com--data-visualization-spatial-charts.md"],
    note: "招牌语法为 48px #161616 全局顶栏 + Inline Notification + 0px 直角 1px 齐平指标带与 DataTable（忌双层框套框）；原文仅含黑白灰底色与字阶公式，语义色与字阶按 GAP_RULES 整套回源",
  },


  {
    context: "商家后台 / 商家工具",
    id: "project-polaris",
    scenario: {
      use: "商家后台、电商运营、订单与商品管理，尤其 Shopify 生态的 React 项目。",
      switchTo: "中文通用后台换 TDesign；需要暗色模式时换 TDesign Dark 或 Umami；需要 IBM 数据密集语言换 Carbon。",
    },
    short: "商家后台（Shopify Polaris）",
    source: "Polaris（Shopify）",
    stacks: [{ framework: 'react', pkg: '@shopify/polaris' }],
    files: ["content/color/polaris.shopify.com--color.md", "content/type/polaris.shopify.com--typography.md", "content/layout/polaris.shopify.com--layout.md", "content/icons/polaris.shopify.com--iconography.md", "content/motion/polaris.shopify.com--motion.md", "content/layout/polaris.shopify.com--depth.md", "content/dataviz/polaris.shopify.com--data-visualizations.md", "content/components/polaris.shopify.com--button.md", "content/components/polaris.shopify.com--form-layout.md", "content/components/polaris.shopify.com--index-table.md", "content/layout/polaris.shopify.com--density.md", "content/layout/polaris.shopify.com--layout-tokens.md", "content/motion/polaris.shopify.com--creating-motion.md", "content/principles/polaris.shopify.com--interaction-states.md", "content/type/polaris.shopify.com--font-and-typescale.md", "content/type/polaris.shopify.com--using-type.md", "content/components/polaris--button.md", "content/components/polaris--button-group.md", "content/components/polaris--link.md", "content/components/polaris--badge.md", "content/components/polaris--banner.md", "content/components/polaris--empty-state.md", "content/components/polaris--progress.md", "content/components/polaris--checkbox.md", "content/components/polaris--choice-list.md", "content/components/polaris--date-picker.md", "content/components/polaris--form.md", "content/components/polaris--select.md", "content/components/polaris--switch.md", "content/components/polaris--text-field.md", "content/components/polaris--text-area.md", "content/components/polaris--table.md", "content/components/polaris--page.md", "content/components/polaris--section.md", "content/components/polaris--modal.md", "content/components/polaris--popover.md", "content/components/polaris--avatar.md", "content/components/polaris--chip.md", "content/components/polaris--tooltip.md", "content/tokens/polaris.shopify.com--tokens.md"],
    note: "文章只给原则，数值取同版本官方 CSS token 快照 tokens/polaris.shopify.com--tokens.md（@shopify/polaris@13.9.5）；#F7F7F7 浅灰画布托举 #FFFFFF 圆角 12px 索引卡与 IndexFilters + IndexTable（忌把过滤胶囊散堆表外，按钮高 32px / 圆角 8px）；官方不支持暗色模式，要暗色换行或按缺口兜底",
  },
  {
    context: "开发者工具 / 代码协作",
    id: "project-primer",
    scenario: {
      use: "开发者工具、代码协作、仓库、CLI 与 Pull Request 类产品，GitHub 风格明确时。",
      switchTo: "轻量指标看板与开关/密钥配置台换 Umami；高密度运维监控与复杂表格换 Carbon；普通中文企业后台换 TDesign。",
    },
    short: "开发者工具（GitHub Primer）",
    source: "Primer（GitHub）",
    stacks: [{ framework: 'react', pkg: '@primer/react' }],
    files: ["content/color/primer.style--color.md", "content/color/primer.style--color-overview.md", "content/color/primer.style--base-scales.md", "content/color/primer.style--theming.md", "content/tokens/primer.style--color-themes.md", "content/type/primer.style--typography.md", "content/icons/primer.style--octicons-guidelines.md", "content/layout/primer.style--layout.md", "content/patterns/primer--notification-messaging.md", "content/layout/primer.style--responsive.md", "content/patterns/primer--data-visualization.md", "content/patterns/primer--degraded-experiences.md", "content/patterns/primer--empty-states.md", "content/patterns/primer--feature-onboarding.md", "content/patterns/primer--forms-overview.md", "content/patterns/primer--loading.md", "content/patterns/primer--navigation.md", "content/patterns/primer--progressive-disclosure.md", "content/patterns/primer--saving.md", "content/tokens/primer.style--primitives-token-names.md", "content/components/primer--action-bar.md", "content/components/primer--action-list.md", "content/components/primer--action-menu.md", "content/components/primer--autocomplete.md", "content/components/primer--avatar-pair.md", "content/components/primer--avatar-stack.md", "content/components/primer--avatar.md", "content/components/primer--banner.md", "content/components/primer--blankslate.md", "content/components/primer--box.md", "content/components/primer--branch-name.md", "content/components/primer--breadcrumbs.md", "content/components/primer--button-group.md", "content/components/primer--button.md", "content/components/primer--checkbox-group.md", "content/components/primer--checkbox.md", "content/components/primer--comment-box.md", "content/components/primer--data-table.md", "content/components/primer--dialog.md", "content/components/primer--form-control.md", "content/components/primer--heading.md", "content/components/primer--icon-button.md", "content/components/primer--icon.md", "content/components/primer--inline-message.md", "content/components/primer--label.md", "content/components/primer--link.md", "content/components/primer--nav-list.md", "content/components/primer--overlay.md", "content/components/primer--page-header.md", "content/components/primer--pagehead.md", "content/components/primer--pagination.md", "content/components/primer--popover.md", "content/components/primer--progress-bar.md", "content/components/primer--radio-group.md", "content/components/primer--radio.md", "content/components/primer--relative-time.md", "content/components/primer--segmented-control.md", "content/components/primer--select.md", "content/components/primer--selectpanel.md", "content/components/primer--skeleton-box.md", "content/components/primer--skeleton-text.md", "content/components/primer--spinner.md", "content/components/primer--split-page-layout.md", "content/components/primer--state-label.md", "content/components/primer--subnav.md", "content/components/primer--tab-nav.md", "content/components/primer--tab-panels.md", "content/components/primer--text-input-with-tokens.md", "content/components/primer--text-input.md", "content/components/primer--text.md", "content/components/primer--textarea.md", "content/components/primer--timeline.md", "content/components/primer--toggle-switch.md", "content/components/primer--tooltip.md", "content/components/primer--tree-view.md", "content/components/primer--truncate.md", "content/components/primer--underline-nav.md", "content/components/primer--underline-panels.md"],
    note: "控制台走 PageHeader + UnderlineNav + 单行 hairline 指标带 + SplitLayout 紧凑列表/表（32px 控件，忌大块方框墙）；字阶、间距、动效按 GAP_RULES 成套补齐",
  },
  {
    context: "创意与内容工具",
    id: "project-spectrum",
    scenario: {
      use: "创意、内容、媒体工具，Adobe 生态，React 项目。",
      switchTo: "数据密集后台换 Carbon；中文通用后台换 TDesign；非创意产品换行。",
    },
    short: "创意工具（Adobe Spectrum）",
    source: "Spectrum（Adobe）",
    stacks: [{ framework: 'react', pkg: '@adobe/react-spectrum' }],
    files: ["content/color/spectrum.adobe.com--color.md", "content/type/spectrum.adobe.com--typography.md", "content/type/spectrum.adobe.com--typography-system.md", "content/layout/spectrum.adobe.com--spacing.md", "content/motion/spectrum.adobe.com--motion.md", "content/icons/spectrum.adobe.com--iconography.md", "content/layout/spectrum.adobe.com--component-spacing.md", "content/layout/spectrum.adobe.com--layout-spacing.md", "content/tokens/spectrum.adobe.com--tokens.md"],
    note: "文章只给原则，数值取同版本官方 CSS token 快照 tokens/spectrum.adobe.com--tokens.md（@adobe/react-spectrum@3.47.7）；控件默认高 32px",
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
    context: "Windows / Microsoft 365 应用（Fluent 生态）",
    id: "project-fluent-2",
    scenario: {
      use: "Windows、Microsoft 365 生态应用，React 项目。",
      switchTo: "跨平台 Web 后台换 TDesign 或 Carbon；Apple 原生换 Apple HIG；Android 原生按平台规范手写。",
    },
    short: "Fluent 2",
    source: "Fluent 2（Microsoft）",
    stacks: [{ framework: 'react', pkg: '@fluentui/react-components' }],
    files: ["content/tokens/fluent-2--tokens.md", "content/principles/fluent-2--introduction.md", "content/principles/fluent-2--styling.md", "content/color/fluent-2--color.md", "content/type/fluent-2--typography.md", "content/layout/fluent-2--layout.md", "content/motion/fluent-2--motion.md", "content/layout/fluent-2--elevation.md", "content/tokens/fluent-2--design-tokens.md", "content/a11y/fluent-2--focus.md", "content/components/fluent-2--button.md", "content/components/fluent-2--dialog.md", "content/components/fluent-2--menu.md", "content/markdown/learn.microsoft.com--brand-voice-above-all-simple-human.md", "content/markdown/learn.microsoft.com--top-10-tips-style-voice.md"],
    note: "Fluent UI 官方文档、官方站基础页与 token：支持品牌浅底画布（如 #ebf3fc）+ 清晰层级与粘性右栏存根；Windows / M365 生态走这一行，Web 通用后台不拿它当默认",
  },
  {
    context: "原生应用（iOS / macOS / visionOS）",
    id: "project-apple-hig",
    scenario: {
      use: "iOS / macOS / visionOS 原生应用，或明确需要 Apple 半透明材质顶栏与分组分层气质的消费级多角色对话壳。",
      switchTo: "常规 Web 通用中后台换 TDesign；开发者与控制台产品换 Primer 或 Umami；Windows / M365 生态换 Fluent 2。",
    },
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
    note: "Apple HIG 分栏应用采用半透明材质顶栏与分组分层；原文缺十六进制色板、px 间距与 ms 动效表，这三项按 GAP_RULES 成套回源并记账",
  },
  {
    context: "复刻 Umami 风格（轻量数据看板 / 工具后台）",
    id: "project-umami",
    scenario: {
      use: "轻量流量与业务分析看板、API/Webhook 密钥与配置台、Feature Flag 开关面板，以及需要原生亮/暗双主题与 1px 细边框卡片语言的工具后台（版式不绑定原站侧栏，由 Hallmark 灵活调配）。",
      switchTo: "高密度运维表格与企业监控换 Carbon；代码协作/仓库/CLI 类开发者工具换 Primer；中文多表单通用中后台换 TDesign；营销官网换品牌规范。",
    },
    short: "轻量看板（Umami）",
    source: "Umami（站点抽取）",
    stacks: [{ framework: 'react', pkg: '@umami/react-zen' }],
    files: ["content/brands/designmd--umami.md"],
    note: "只取表面语言与数值（#3080ff 主色、Light/Dark 双色板、Inter 字阶、6px/12px 圆角、150ms 微交互及 300ms 弹簧弹窗/加载动效）；React 项目可直接选用 MIT 开源组件库 @umami/react-zen；页面版式与外壳结构不锁定原站，按 briefs/layouts.md 自由选配",
  }
]

/** 数值文章缺口与派生：examples/ 各站（含测试批次）的 FINDINGS.md 反复踩到的缺口收敛成回源规则。
 * 数值文章没覆盖的维度禁止现场各自派生（五站曾组合出五套互不对齐的间距）：先按下表回源取次源，
 * 回不到才走兜底档；例外与派生值连同理由记进 DECISIONS，缺口记进 FINDINGS。 */
export type GapRule = {
  /** 缺口维度 */
  dim: string
  /** 回源文章：数值文章缺这维度时改从这些原文取值，仍记 文件:行号 */
  files: string[]
  /** 处理与兜底 */
  rule: string
}

export const GAP_RULES: GapRule[] = [
  {
    dim: '间距',
    files: ['content/layout/uisdc.com--code-for-design-of-spacing.md', 'content/layout/polaris.shopify.com--layout-tokens.md'],
    rule: '数值文章没有 spacing scale 时从回源文章整套取一种尺度（8px 基数、优设 8/16/24/32/48/64、Polaris 4px 基数），全站只用这一套；批次默认取 8px 基数，换用别套回源必须在 DECISIONS 记理由；禁止拿字阶步进自己组合。',
  },
  {
    dim: '动效时长与缓动',
    files: [
      'content/motion/nngroup.com--animation-duration.md',
      'content/motion/carbondesignsystem.com--motion.md',
      'content/standards/w3c--css-easing-1.md',
      'content/motion/ui-specs--motion-implementation.md',
      'content/motion/transitions.dev--10-success-check.md',
    ],
    rule: '数值文章没有动效篇时按场景档位从回源文章取时长与缓动，进场比退出稍长；prefers-reduced-motion 兜底照做。风格层已下线，时长一律按 UX 回源取（交互微动效 200-300ms 档），裁决记取值记录；批次默认取 NN/g 100/200/300 三档，缓动优先引 W3C 定值曲线，回源确无曲线才用 CSS 关键字，禁止自造 cubic-bezier。组件过渡的「怎么动」从 transitions.dev 动效点取，「动多久」按本条档位取，两笔账分开记。',
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
    rule: '数值文章只给分隔线颜色没给线宽时，1px 记 derived；装饰分隔色不承担控件边界，边界按非文本 3:1 另取。',
  },
  {
    dim: '色阶当文字',
    files: ['content/color/tdesign.tencent.com--color.md', 'content/type/tdesign.tencent.com--fonts.md'],
    rule: '色阶值不等于能当文字，原文自述的对比度也会错（fonts.md 自述文字对比满足 4.5，其白色 35% 档压 #181818 实测 3.23:1）；任何色值当文字前对实际底色复算，不达 4.5 的档只给禁用与装饰，文字换同族深档（只在所取数值文章的色板内加深；数值文章无色板按派生色 token 深化，不跨源借色）；数值文章语义 token 映射出的 hover / active 同样按实际底色复算，不达 AA 就同族换档并记取值记录。',
  },
  {
    dim: '图表几何参数',
    files: [],
    rule: '数值文章不给轴档数、柱宽、环半径这类几何参数：标 derived 全站统一自定，不冒充原文值；构图原则回源 Carbon 图表解剖系列（content/dataviz/）。',
  },
  {
    dim: '组件尺寸',
    files: [],
    rule: '数值文章不给输入框、表格行高等组件尺寸：标 derived 全站统一（行高与控件高度成套自定），不逐处随手取。',
  },
  {
    dim: '组件阴影与底边',
    files: [],
    rule: '数值文章只给按钮形态、没给阴影 hex 时，先查该组件的官方 CSS 取实际 box-shadow；拿不到才用 2px 当前文字色或主色压深做底边，标 derived 记进 DECISIONS；浅灰底只做填充，不承担控件边界。',
  },
  {
    dim: '色值',
    files: ['content/color/tdesign.tencent.com--color.md'],
    rule: '数值文章只有语义规则没给色板数值时，要么回源取色板原文值（TDesign 色阶）做整套 token，要么成套派生逐条标 derived 记 FINDINGS；两半混用是缺陷。',
  },
  {
    dim: '字阶',
    files: ['content/type/tdesign.tencent.com--fonts.md'],
    rule: '数值文章没给字号时，回源取一套字阶原文值（TDesign 字阶）或派生 3-4 档标 derived；全站只用这一套，行高同源定。',
  },
  {
    dim: '正文行长',
    files: [],
    rule: '数值文章没给行长时用 max-width 封顶（英文每行 60-75 字符；中文 35-45 字，窄栏可到 20-35，同页只用一种），值标 derived；长行是可读性问题不是风格问题。',
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
    rule: '数值文章没给目标尺寸时：桌面端紧贴选中选型原生控件高度（32px-36px，不强拉 44px 大块胶囊），任意可点目标高度 >= 24px（满足 WCAG 2.2 SC 2.5.8）；移动端（< 768px 或 coarse 指针）通过媒体查询抬高至 >= 44px；焦点环用 2px 实线加 2px 偏移高对比样式；标 derived。',
  },
  {
    dim: '金额排版',
    files: [],
    rule: '数值文章没给金额排版时：两位小数、千分位分隔、负号在币种符号前、金额用 tabular-nums（数字字体缺字时按「数字字体」条降级），全站一套；标 derived。',
  },
]

/** 方法层必读：出稿前必读这两篇，先定主辅与层级；布局、动效方法随点带出，点带 method 的先读方法篇 */
export const METHOD_REQUIRED = [
  { id: 'howto-ui-color-framework', name: '界面配色框架', why: '定主辅与面积：主色深浅变体怎么推、要不要加第二色相' },
  { id: 'howto-visual-hierarchy', name: '视觉层级', why: '定三档层级：字号最多 3 档，最大的元素不超过 2 个' },
  { id: 'howto-ui-polish', name: '界面美化细则', why: '间距分组、字重只留两档、左对齐、行高与对比的硬规则，落 CSS 前逐条对照' },
  { id: 'flow-layout-basics', name: '版式全流程', why: '从版面到数值的走法：先定栅格与间距档，再排内容，不从组件开始拼' },
]

/** 必选规则：tasks 命中即挂到点上；跨场景类别（如动效）用 pointPrefix 按 id 前缀命中 */
export type RequiredRule = {
  key: string
  label: string
  title: string
  tasks: string[]
  desc: string
  stage: 'build' | 'review'
  pointPrefix?: string
}

export const REQUIRED_RULES: RequiredRule[] = [
  { key: 'a11y', label: '无障碍', title: '无障碍', tasks: ['s16'], desc: '覆盖焦点、键盘、对比度', stage: 'build' },
  { key: 'review', label: '评审', title: '评审底线', tasks: ['s17'], desc: '按评审清单与逐页走查验收', stage: 'review' },
]

/** 场景必选：命中就要走完的点层，不靠 AI 自己挑；对不上的场景直接跳过，命中但本期决定不做，在 DECISIONS 写一句理由 */
/** 必读点：场景命中就全读，由本库判定，AI 不许自己减。points 里的 id 必须能在设计地图找到，check-map 会校验 */
export const REQUIRED_SCENARIOS: { id: string; when: string; why: string; points: string[] }[] = [
  { id: 's2', when: '所有项目', why: '骨架、栅格、信息架构与留白决定主画布克制与数值落地', points: ['flow-layout-basics', 'howto-visual-hierarchy', 'howto-ui-polish', 'patterns-progressive-disclosure'] },
  { id: 's3', when: '所有项目', why: '色字距动效的取值口径与色板原文，缺一项就会出现裸值', points: ['flow-values', 'type-hierarchy-recipe', 'layout-spacing-values'] },
  { id: 's16', when: '有界面就要验', why: '对比度、焦点与键盘是可访问性底线，高于任何风格', points: ['flow-a11y', 'a11y-wcag-checklist', 'a11y-contrast-threshold'] },
  { id: 's4', when: '有文案', why: '语气与微文案决定空态、报错、按钮说不说得清', points: ['flow-copywriting', 'markdown-cn-copywriting'] },
  { id: 's17', when: '所有项目', why: '评审底线是交付前最后一道逐条走查', points: ['flow-review', 'patterns-review-checklist'] },
  { id: 's8', when: '有状态变化的功能', why: '空态、加载、错误、成功要逐态造出来看', points: ['flow-states', 'patterns-feedback-criteria'] },
  { id: 's9', when: '有表单或提交', why: '校验时机、报错文案与错误恢复不能临场编', points: ['flow-form', 'components-form', 'a11y-form-structure'] },
  { id: 's5', when: '用了组件库或自建控件', why: '控件形态与组件库默认样式要按点对齐，不许留默认皮肤', points: ['flow-components', 'components-button-hierarchy'] },
  { id: 's7', when: '多页面或多分区', why: '导航层级与当前位置决定用户找不找得到', points: ['flow-navigation', 'patterns-global-nav'] },
  { id: 's12', when: '后台、列表或数据面板', why: '表格密度、筛选与批量操作来自数据面板场景', points: ['flow-backoffice', 'layouts-dashboard-density'] },
  { id: 's11', when: '营销页或落地页', why: '首屏主张、转化路径与信任结构来自落地页场景', points: ['flow-landing', 'layouts-page-selection-chain'] },
  { id: 's10', when: '有图表或指标', why: '图表选型与坐标轴口径不能用默认配置糊过去', points: ['flow-dataviz', 'dataviz-panel-density'] },
  { id: 's6', when: '有图标', why: '图标尺寸、描边与语义对齐同一套图标原文，不用混搭图标集', points: ['flow-icons', 'icons-unity'] },
]

/** 点命中的必选规则：场景规则按 tasks 命中；带 pointPrefix 的按 id 前缀命中 */
export function requiredRulesFor(point: { id: string; tasks: string[] }): RequiredRule[] {
  return REQUIRED_RULES.filter((r) =>
    r.pointPrefix ? point.id.startsWith(r.pointPrefix) : point.tasks.some((t) => r.tasks.includes(t)),
  )
}

/** 用法：/ai/guide.md|json 与 /ai/design-points.json 带上 */
export type UsageStep = {
  n: number
  title: string
  /** 提示词原文：AI_PROMPT 由这一步拼，desc 是指南里的展开说明 */
  prompt: string
  desc: string
  /** 每步的判断依据：没有这条产物就算没走完，用来防「声称完成」 */
  gate: string
  branch?: { title: string; desc: string }[]
}

/**
 * 暂时屏蔽项目选型方案：guide.md 与 AI 包（design-points.json）里不出现选型表、来源契约和选型点，
 * 数值文章改由设计场景的设计点带。恢复时改回 true；选型表从 MAIN_SOURCES 重建，6 步与 USAGE 文案是提示词设计，不随开关回滚。
 * MAIN_SOURCES 与站点设计地图不受影响，guide.json 的 main_sources 留给站点与 check-map 用。
 */
export const SHOW_PROJECT_SELECTION = true

export const USAGE_STEPS: UsageStep[] = [
  {
    n: 1,
    title: '拉包与定语境',
    prompt: '先拉 `<站点地址>/ai/routing.json` 与 `<站点地址>/ai/reference-screens.json`（仓库内直接读本库源码与 `briefs/layouts.md`；完整包在 `/ai/design-points.json`）。写三句：产品是什么、谁在用、他这次要完成的一件事；价格、时效、资质以常规行内文字标 `[待确认]`（不套彩色徽标），不编。再按产品同构从「项目选型方案」7 套体系里挑一行作为唯一数值源并写理由（禁止拿英文品牌 `DESIGN.md` 硬套普通中文产品，也不预设必须落 TDesign）。点名主场景 `sX` 与附加场景并写理由。',
    desc: '先拉总路由与首屏参考；写产品、用户、主任务三句；按产品同构定选型行与命中场景；硬事实缺的标 [待确认]。',
    gate: '包拿到手；产品、用户、主任务三句齐全；选型行已定且写了理由；主场景与附加场景已点名并写了命中理由；补全项有标记。',
  },
  {
    n: 2,
    title: '定方向与选点',
    prompt: '先定语气：编辑、技术、克制、活泼、奢华、粗野，选一个极端。再从 `brands-*` 挑两个和产品内容同源的腔调锚（只借手法与气质，不拿英文品牌皮肤硬套中文产品），各写一句它给什么手法，选一个并写另一个为什么不合身。摘 3 个可见手法，逐条写落在首屏哪一处：至少 1 个改变主数据形状（分组、行解剖、价尺、账本），至少 1 个承担产品动作（价签、票据、排班格、队列、时间轴）。设计点不由你挑：按 guide 的「场景必选」表，命中的必读点全读（仓库外按需拉 `<站点地址>/ai/points/<id>.json` 与原文 `<站点地址>/md/<path>`），`points` 列出的 id 一个不漏，读完写一句每点给的约束。读点要出表，一行一条：`点 id | 约束一句 | 落点件位`；这一页用不上的写 `不适用 + 理由`，不许空着跳过。',
    desc: '语气选一个极端；两个同源腔调锚，写各自手法与取舍（不硬套英文皮肤）；3 个手法有首屏落点，1 个改数据形状、1 个承担产品动作；必读点按场景表全读，不自选点。',
    gate: '语气是一个极端；两个腔调锚同源且有取舍；3 个手法有首屏落点，其中 1 个改数据形状、1 个承担产品动作；场景命中的必读点全部读到，约束表逐行有落点或不适用理由；数值主源已定。',
  },
  {
    n: 3,
    title: '定版式与灰模',
    prompt: '版式完全按产品形态与选型自由组合，不套预制外壳：仓库内走 Hallmark 流程（读 `references/macrostructures.md` 与 `briefs/layouts.md`），按产品动作独立选 `macro`、`nav`、`footer` 与页底处理，避开最近 3 条 `macrostructure`（读 `.hallmark/log.json`）；仓库外拉 `/ai/reference-screens.json`（只借件位与密度）加 `routing.json` 的 `recent_macrostructures` 与 `layouts` 设计点定三件。控制台、看板与比价表必须在 `1280×800` 首屏直接露出主图表或前 8-10 行主表（禁止用大标题与三排筛选胶囊把主工件挤出首屏）。多站批必须同时声明 `<meta name="frame" content="batch=...; nav=...; footer=...; base=#xxxxxx">` 并满足同批避重（`nav` 不重复、`footer` 每种 ≤ 2 次、灰底 ≤ 半数，页脚 DOM 骨架全库不撞车）。灰模 3 张：真数据、无颜色、只分区块、480px 宽，各写一句骨架和产品动作落点；选一张并写另外两张的淘汰理由，灰模没选定不写 CSS。多页项目在灰模阶段定共用件；多站批先出方向表。',
    desc: '按产品形态与选型自由定 `macro`、`nav`、`footer`、`base` 并避重；控制台/看板/比价表必须在 1280×800 首屏直接露出主图表或主表行；出 3 张灰模选定后再写 CSS。',
    gate: '已定 `batch`/`macro`/`nav`/`footer` 与页底 `base` 且避开最近 3 条记录；同批 `nav` 无重复、`footer` ≤ 2 次、页脚骨架全库不撞车；核心工件首屏直出；3 张灰模有骨架描述与产品动作落点；选定与淘汰理由都有。',
  },
  {
    n: 4,
    title: '取值与落稿',
    prompt: '数值一律只从第 1 步选中的选型行 `files` 取，同一 token 只落一篇原文、不跨源拼值（缺失维度按 `GAP_RULES` 回源）。数值逐条记 `content/完整路径:行号`；其他文章只取原则与反例。先落原始字阶、间距、色板、栅格，再表面 token，最后语义 token；颜色和字体进命名 token，组件里不写裸值。表面语法与明暗极性随选型与产品形态自由分化（禁止把「白底压 `#f3f3f3` 圆角灰卡 + 通用单行页脚」当默认皮肤，也禁止「框套框」与超过 5 项的满屏胶囊墙——多指标用单条 1px 齐平分割带，长筛选项收进下拉或单一 Tab 工具条）：Spectrum 可用浅色带与清晰边框，Carbon 用 `48px #161616` 全局头、`0px` 直角与 1px 齐平指标带，Polaris 用 `#303030` 深栏 + `#F7F7F7` 托举 `IndexTable` 单卡，Primer 用 `PageHeader + UnderlineNav + 单层 Box/ActionList`，Fluent 2 可用品牌浅蓝底与报头/存根，Apple HIG 用半透明分栏，TDesign 亦可选暗色表或彩色浅带。文案只写产品真实事实，不在正文贴「演示口径」自检词；a11y 与四态（空/错/加载/超长）写进初稿。',
    desc: '按选中选型行唯一主源取值并记 `content/完整路径:行号`；表面语法、顶栏、页脚与明暗极性随选型和产品自由分化（多指标用 1px 齐平分割带，禁框套框与满屏胶囊墙，桌面贴合 32-36px 控件密度）；a11y 与四态进初稿。',
    gate: '每个值有行号；同一 token 一篇原文，跨源拼值为零；裸值为零；表面与外壳贴合选型和品类且无自检演示腔；首屏数据或操作区够实；a11y 在初稿；第 2 步约束表每一行都能在稿子里指到落点。',
  },
  {
    n: 5,
    title: '验收',
    prompt: '四档 320 / 375 / 768 / 1280 无横向溢出；正文对比度 4.5:1、大字 3:1；键盘顺序与焦点可见；空态、加载、错误、成功逐态造出来；桌面控件贴合原生 32-36px 密度（>= 24px），移动端 `< 768px` 触控目标 >= 44px；`prefers-reduced-motion` 下无动画；未开框架外部请求为 0。读数写进 FINDINGS，不写「已检查」。仓库内跑 `check-ledger.py` 与 `check-frame.py`，有 Hallmark 就跑 slop 自查 critical 项；没有就用硬指标加去 logo、主色复判，还像通用后台的回炉。',
    desc: '四档无溢出；对比度、键盘、逐态、桌面 >=24px/移动 >=44px 目标、减少动效、外部请求各有读数并写进 FINDINGS；仓库内过 `check-ledger` 与 `check-frame`，用硬指标与去 logo、主色复判。',
    gate: '四档与对比度、键盘、逐态、触控、减少动效、外部请求都有读数；`check-ledger` 与 `check-frame`（或去 logo 主色复判）有结果；回炉项已复测。',
  },
  {
    n: 6,
    title: '回炉与定稿',
    prompt: '逐个真点主流程（筛选、排序、认领、提交、撤销），记前后状态，改完复测受影响项。多页项目加一项跨页检查：页头、页脚、编号、线型与字阶同形，换页不改字号与间距；只改颜色占位不算对齐。定稿做评审底线 s17；仓库内跑 `scripts/score-case.py <案例目录>` 评分并把新站记入 `.hallmark/log.json`，仓库外用四档读数与评审底线替代；再开一轮新上下文复核，不过线回炉，不改设计点硬凑。案例交五件（仓库内放 `examples/`）：`index.html`、`DECISIONS.md`、`FINDINGS.md`、`preview.png`、`meta.json`。',
    desc: '逐个真点主流程并记前后状态；定稿做评审底线、评分（仓库内补写 `.hallmark/log.json`）与新上下文复核；案例交付五件。',
    gate: '主流程每步有前后状态；多页项目跨页一致；评审、评分、log 记录与新上下文复核都有结果；不过线有回炉记录；五件交付物齐全且字段有值。',
  },
]

/** 开发者默认模式（4 步）：按产品同构定选型、自由组合骨架与外壳、选型数值与四态底线、默认只做首页直接交付 */
export const DEV_STEPS: { n: number; title: string; prompt: string }[] = [
  {
    n: 1,
    title: '定选型底座与自由骨架',
    prompt:
      '先拉 `<站点地址>/ai/routing.json` 与 `<站点地址>/ai/reference-screens.json`（仓库内直接读本库与 `briefs/layouts.md`）。按产品同构从 `routing.json` 的 `main_sources` 确定唯一项目选型行（TDesign / Carbon / Primer / Polaris / Spectrum / Fluent 2 / Apple HIG 平权分流，不默认强落 TDesign；`brands/` 仅在明确要复刻某品牌时当皮肤）。结构与外壳（`macro`、`nav`、`footer`、页底色）按产品动作与 `recent_macrostructures` 避重自由组合，参考 `reference-screens` 密度骨架和 `howto`/`layouts` 点，不套任何预制固定外壳。',
  },
  {
    n: 2,
    title: '造真数据与分化表面语法',
    prompt:
      '先在内部明确产品是什么、谁在用、首屏要完成的一件事；价格、时效、资质等未给出的硬事实以常规行内文字标 `[待确认]`（不套彩色徽标），不瞎编。按选型行与产品品类分化表面语法、明暗极性与顶栏/页脚形态，禁止千站一面：SaaS/官网可用短句大字配真实产品切片与悬浮/宣言壳；打开即用的工具直接让真实操作区占领首屏（如半透明分栏、极简两极、终端面包屑或可关闭公告深栏）；报刊/情报可用 `0px` 直角、`1px` 印刷线与 `⌘K` 检索条；工程/媒体可用暗色模式或品牌浅底带。从选型色板挑主色，字重与行高按选型原文走。',
  },
  {
    n: 3,
    title: '克制层次落稿与四态底线',
    prompt:
      '按选中选型行的边界语言分层（Carbon 用 48px 全局头 + 0px 直角齐平指标带，Primer 用 PageHeader + UnderlineNav + 单层 Box，Polaris 用 #F7F7F7 托举 IndexTable 单卡，避免框套框与满屏筛选胶囊墙）；颜色、字阶、间距、圆角全部进命名 token，不写裸值。坚持信息架构与渐进披露：主画布只留高频核心概览（多指标优先连体 1px 齐平分割带，主图给足宽幅呼吸感），低频配置、多条件规则与长明细下钻收进 Modal / Drawer / Tab / 独立设置视图，避免首屏数据堆砌。控制台/看板/比价表在 1280×800 首屏必须直接露出主图或主表行。主流程真实可点（筛选、搜索、切换、提交等），同时内置空态、加载态、错误态与超长文本折行；正文保持真实产品口吻，不在主操作区贴满「演示口径」自检词。可访问性高于风格：正文对比度 ≥ 4.5:1、大字与控件边界 ≥ 3:1、键盘路径完整且焦点环高对比可见、桌面控件贴合原生 32-36px 密度（任意可点目标 ≥ 24px，移动端 `< 768px` 扩至 ≥ 44px）、`:hover` 包进 `@media (hover: hover)`、`prefers-reduced-motion` 关闭动画；图表用内联 SVG。',
  },
  {
    n: 4,
    title: '静默自检并交付',
    prompt:
      '在 320 / 375 / 768 / 1280 四档确认无横向溢出、无控制台报错，且去掉 logo 和主色后仍能认出产品、没有撞壳模板感。默认直接交付可运行代码 + 5 行以内简短说明（所用选型行、外壳 `nav/footer/base` 选择、主色与字体降级、待确认项），不输出灰模过程稿、行号台账和五件套文档；仅当需求明确要求「审计模式」时，才按 `<站点地址>/ai/guide.md` 走完整 6 步。',
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
  brands: 'styles',
  cases: 'cases',
}

/** 公开 AI 提示词（默认开发者模式）：首页「复制提示词」直接复制这份，简洁、按需拉包、默认只做首页 */
export const AI_PROMPT = [
  '按 UISpecs 生成生产级界面。默认范围：未指定多页时只做网站首页；优先适配当前项目技术栈（React / Vue / Next.js / Tailwind 等），无现有工程时产出零外部请求的单文件 HTML。',
  '视觉与防固化硬律（六条）：1. 按产品同构在 7 套官方选型（TDesign / Carbon / Primer / Polaris / Spectrum / Fluent 2 / Apple HIG）及 Umami 轻量看板间择其一并沿用其原生表面语言，禁止把「白纸压 `#f3f3f3` 灰卡 + 通用单行页脚」当全站唯一皮肤；2. 顶栏、页脚、页底色随产品动作与选型分化，多站/多页保持外观轮换不撞壳；3. 核心工件首屏直出与渐进披露（控制台、看板、比价表在 1280×800 首屏直接露出主图或主表行；多指标用连体 1px 齐平分割带，主图给足宽幅呼吸感，低频配置、多条件筛选与明细下钻收进弹窗/抽屉/设置子页，禁止用框套框、独立小卡片墙或三排胶囊墙堆砌首屏，桌面保持 32-36px 原生控件密度，移动端扩至 ≥ 44px）；4. 标题与首屏重心服务产品形态（官网可用大字主张，工具/对话/挂号直接让操作区顶格进首屏，禁用中文标题上挂 `01 / SECTION` 英文装饰眉题）；5. 真实业务主语（给足真数据、真实交互或定制产品部件，禁用黑底 JSON 终端、三列大图标卡或抽象占位色块）；6. 真实产品口吻（去掉 logo 与主色后仍认得出产品，不在正文到处挂「演示口径」自检词）。',
  ...DEV_STEPS.map((s) => `${s.n}. ${s.title}：${s.prompt}`),
].join('\n\n')

/** 仓库审计提示词（6 步严格模式）：用于 UISpecs 案例验收与行号溯源 */
export const AUDIT_PROMPT = [
  '按 UISpecs 审计模式出界面稿（交五件套与行号台账）。选中选型行是唯一数值源并逐条记 `content/完整路径:行号`，禁止拿英文品牌 DESIGN.md 硬套中文产品；外壳（`nav`/`footer`/`base`）按 `briefs/layouts.md` 轮换并由 `check-frame.py` 验重。',
  '运行环境：仓库内按本地路径读；仓库外按需拉 `<站点地址>/ai/routing.json`、`/ai/points/<id>.json`、`/ai/reference-screens.json` 与原文 `/md/<path>`，不读本地文件、不跑本地脚本。',
  ...USAGE_STEPS.map((s) => `${s.n}. ${s.title}：${s.prompt}`),
].join('\n\n')

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
      '每站 FINDINGS 收官把新缺口回填「数值文章缺口与派生」，取值记录格式问题回填模板',
      '同一缺口不许在两个站重复出现：第二次出现说明规则没写进 guide',
      '取值记录交付前跑 scripts/check-ledger.py 过格式；外壳避重跑 scripts/check-frame.py；改过设计地图跑 scripts/check-map.py 核对场景、点与文章三者一致',
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
  lines.push('先按语境选一行项目选型，数值只从这一行的原文取，一个值不跨来源拼；可访问性底线高于任何风格。')
  lines.push('')
  lines.push('## 分工')
  lines.push('结构与数值解耦、7 套选型平权分流：按产品语境从项目选型方案确定唯一数值底座（TDesign / Carbon / Primer / Polaris / Spectrum / Fluent 2 / Apple HIG，不把任一体系或 `#ffffff/#f3f3f3` 当默认通用外壳，也不拿英文品牌 `DESIGN.md` 硬套中文产品）。结构与外壳在仓库内走 Hallmark 件库（`macro`、`nav`、`footer` 配合 `.hallmark/log.json` 与 `check-frame.py` 避重），在仓库外参考 `/ai/reference-screens.json` 与 `howto`/`layouts` 设计点自由组合；控制台、看板、比价表在 1280×800 首屏直接露出主图表或主表行，多指标用 1px 齐平分割带且桌面保留 32-36px 原生控件密度（移动端 < 768px 扩至 ≥ 44px）。')
  lines.push('')
  lines.push('## 一次生成多个站怎么挑版式与配色')
  lines.push('一次生成多个站时，需求写产品、用户、主任务与关键内容，缺的事实标 [待确认] 或演示口径；版式与强调色在开批前按表分配，每站一份版式骨架与一个强调色，并写一句为什么是这组，选完直接用在这次生成里，不写进项目文件。挑件的依据是 `briefs/layouts.md`：先按产品形态定位（营销页、应用页、文档、内容发现、流程、叙事），再从版式库里挑合适的件，件名按 Hallmark 的叫法，不强行凑件数。强调色只在该站色彩点的色板原文里取，挑完写一句为什么。单站生成不按这条批量流程走；版式交给 Hallmark，强调色按色彩点的色板当场挑。')
  lines.push('')
  lines.push('## 场景必选')
  lines.push('按项目实际功能判：表里的场景对得上就走完对应设计点，对不上就跳过，不硬凑；命中但本期决定不做，写一句理由。标「所有项目」的三行（S2、S3、S17）是所有项目都要过的底子。')
  lines.push('')
  lines.push('必读点由本库判定，场景命中就全读，执行方不自选点；篇目由每个点的 articles 带出。下表是必读点，对应 `tasks.required_points`；`tasks.related_points` 与 `points_by_task` 是同场景的全部相关点，用来扩读，不替代必读点。')
  lines.push('')
  lines.push('| 设计场景 | 什么时候必选 | 必读点 | 为什么 |')
  lines.push('| --- | --- | --- | --- |')
  for (const r of REQUIRED_SCENARIOS) {
    const pts = r.points.map((x) => `\`${x}\``).join(' ')
    lines.push(`| ${r.id.toUpperCase()} ${tasks[r.id]?.name ?? ''} | ${r.when} | ${pts} | ${r.why} |`)
  }
  lines.push('')
  lines.push(`## ${USAGE_STEPS.length} 步`)
  for (const s of USAGE_STEPS) lines.push(`${s.n}. ${s.title}：${s.desc}判断依据：${s.gate}`)
  lines.push('')
  lines.push('## 参考首屏')
  lines.push('照抄件位与密度，配色与数值从主源原文取。')
  lines.push('')
  for (const r of REFERENCE_SCREENS) {
    lines.push(`### 参考 ${r.id} · ${r.role}`)
    lines.push(r.take)
    lines.push('')
    lines.push('```html')
    lines.push(r.code)
    lines.push('```')
    lines.push('')
  }
  if (SHOW_PROJECT_SELECTION) {
    lines.push('## 项目选型方案')
    lines.push('一个项目只选一行。这一行是数值的唯一源头：间距、字阶、色板、圆角、线型只从它的基准规范文章取，别的来源只出原则与反例。按语境选，不按「哪个常见」选。')
    lines.push('')
    lines.push('| 产品语境 | 基准规范 | 框架 / 组件库 | 数值文章 |')
    lines.push('| --- | --- | --- | --- |')
    for (const m of MAIN_SOURCES.filter((x) => !x.archived)) {
      const files = m.files.length ? `${m.files.length} 篇（见该行 \`project-*\` 点的 articles）` : m.note || '见 brands 分区'
      const stacks = m.stacks?.map((s) => `${s.framework === 'react' ? 'React' : 'Vue'} 用 ${s.pkg}`).join('、') || '无'
      lines.push(`| ${m.context} | ${m.source} | ${stacks} | ${files} |`)
    }
    lines.push('')
    lines.push('选中行的全部文章在 `points` 里 `kind` 为 `source` 的点的 `articles`；框架开了才引该行组件库，组件不手写默认皮肤。')
    lines.push('')
  }
  lines.push('## 数值文章缺口与派生')
  lines.push('数值文章没覆盖的维度禁止现场各自派生（五个案例曾组合出五套互不对齐的间距）：先按下表回源取次源，回不到才走兜底档；例外与派生值连同理由记进 DECISIONS，缺口记进 FINDINGS。')
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
  lines.push(`出稿前必读这 ${METHOD_REQUIRED.length} 个方法点，先定主辅与层级；布局、动效方法随点带出，点带 method 的先读方法篇。`)
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
    if (!SHOW_PROJECT_SELECTION && id === 's1') continue
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
