---
title: "UX 规则速查表（119 条，跨规范横向清单）"
source: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/ux-guidelines.csv
section: patterns
tag: "规范"
fetched: 2026-11-02
status: full
id: patterns-58
publisher: "ui-ux-pro-max 规则速查"
---

# UX 规则速查表

> 来源：[ui-ux-pro-max-skill ux-guidelines.csv](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/src/ui-ux-pro-max/data/ux-guidelines.csv)

> 数据来源：[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)（MIT License，Copyright (c) 2024 Next Level Builder）的 `ux-guidelines.csv`，作者在同仓 `data-provenance.json` 里标注了各条的上游规范。
---

**这是索引，不是规范。** 这 119 条是作者从 WCAG 2.2、GOV.UK、Apple HIG、Material、Carbon 等官方规范摘抄整理的横向清单，一条一规则，带 Do/Don't 与代码示例。它的价值是「快速扫一遍找出疑点」，**不能当依据引用**：每组都标了上游一手规范，库内已有对应文章的读原文，库内没有的标了未覆盖。

- 代码示例用 Tailwind 类名语法（`w-6 h-6`、`transition-colors duration-200`），不是通用 CSS，照抄前换成自己项目的写法。
- 严重度是作者判断的，不是规范原文的措辞等级。
- 同一组内按上游编号排（主题连续顺序），严重度逐条标注。

## 先读这三篇

库内对应的一手文章，规则有疑问时读它们：

- `content/a11y/w3c--wcag-2.2.md`：WCAG 2.2 原文（无障碍类的最终依据）
- `content/components/govuk--error-summary.md` 与 `content/components/govuk--error-message.md`：GOV.UK 错误文案原文（表单类的最终依据）
- `content/a11y/web.dev--a11y-forms.md`：web.dev 表单无障碍

## 导航与定位（Navigation，6 条）

- **上游一手规范**：W3C ARIA APG（导航与键盘）、W3C WCAG 2.2
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/a11y/w3c--apg-breadcrumb.md`、`content/a11y/carbondesignsystem.com--a11y-keyboard.md`

**1. Smooth Scroll** · 严重度 高（High）

说明：Anchor links should scroll smoothly to target section

- ✓ 该做：Use scroll-behavior: smooth on html element
- ✗ 别做：Jump directly without transition
- 示例：`html { scroll-behavior: smooth; }`
- 反例：`<a href='#section'> without CSS`

**2. Sticky Navigation** · 严重度 中（Medium）

说明：Fixed nav should not obscure content

- ✓ 该做：Add padding-top to body equal to nav height
- ✗ 别做：Let nav overlap first section content
- 示例：`pt-20 (if nav is h-20)`
- 反例：`No padding compensation`

**3. Active State** · 严重度 中（Medium）

说明：Current page/section should be visually indicated

- ✓ 该做：Highlight active nav item with color/underline
- ✗ 别做：No visual feedback on current location
- 示例：`text-primary border-b-2`
- 反例：`All links same style`

**4. Back Button** · 严重度 高（High）

说明：Users expect back to work predictably

- ✓ 该做：Preserve navigation history properly
- ✗ 别做：Break browser/app back button behavior
- 示例：`history.pushState()`
- 反例：`location.replace()`

**5. Deep Linking** · 严重度 中（Medium）

说明：URLs should reflect current state for sharing

- ✓ 该做：Update URL on state/view changes
- ✗ 别做：Static URLs for dynamic content
- 示例：`Use query params or hash`
- 反例：`Single URL for all states`

**6. Breadcrumbs** · 严重度 低（Low）

说明：Show user location in site hierarchy

- ✓ 该做：Use for sites with 3+ levels of depth
- ✗ 别做：Use for flat single-level sites
- 示例：`Home > Category > Product`
- 反例：`Only on deep nested pages`

## 布局（Layout，9 条）

- **上游一手规范**：W3C CSS Grid、Every Layout 类布局原则
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/type/practicaltypography.com--line-spacing.md`、`content/standards/w3c--css-grid-1.md`

**15. Z-Index Management** · 严重度 高（High）

说明：Stacking context conflicts cause hidden elements

- ✓ 该做：Define z-index scale system (10 20 30 50)
- ✗ 别做：Use arbitrary large z-index values
- 示例：`z-10 z-20 z-50`
- 反例：`z-[9999]`

**16. Overflow Hidden** · 严重度 中（Medium）

说明：Hidden overflow can clip important content

- ✓ 该做：Test all content fits within containers
- ✗ 别做：Blindly apply overflow-hidden
- 示例：`overflow-auto with scroll`
- 反例：`overflow-hidden truncating content`

**17. Fixed Positioning** · 严重度 中（Medium）

说明：Fixed elements can overlap or be inaccessible

- ✓ 该做：Account for safe areas and other fixed elements
- ✗ 别做：Stack multiple fixed elements carelessly
- 示例：`Fixed nav + fixed bottom with gap`
- 反例：`Multiple overlapping fixed elements`

**18. Stacking Context** · 严重度 中（Medium）

说明：New stacking contexts reset z-index

- ✓ 该做：Understand what creates new stacking context
- ✗ 别做：Expect z-index to work across contexts
- 示例：`Parent with z-index isolates children`
- 反例：`z-index: 9999 not working`

**19. Content Jumping** · 严重度 高（High）

说明：Images badges validation text and skeleton replacements can shift nearby content when they update

- ✓ 该做：Reserve appropriate space or keep async states in a stable content-driven container
- ✗ 别做：Insert compact text or media without a layout strategy
- 示例：`aspect-ratio for media; stable count slot for badges`
- 反例：`Badge insertion pushes toolbar actions`

**20. Viewport Units** · 严重度 中（Medium）

说明：100vh can be problematic on mobile browsers

- ✓ 该做：Use dvh or account for mobile browser chrome
- ✗ 别做：Use 100vh for full-screen mobile layouts
- 示例：`min-h-dvh or min-h-screen`
- 反例：`h-screen on mobile`

**21. Container Width** · 严重度 中（Medium）

说明：Content too wide is hard to read

- ✓ 该做：Limit max-width for text content (65-75ch)
- ✗ 别做：Let text span full viewport width
- 示例：`max-w-prose or max-w-3xl`
- 反例：`Full width paragraphs`

**111. Long Token Wrapping** · 严重度 高（High）

说明：URLs identifiers and user content must not force horizontal overflow

- ✓ 该做：Use overflow-wrap anywhere and let flex or grid text children shrink
- ✗ 别做：Apply word-break break-all to all prose
- 示例：`.token { min-inline-size: 0; overflow-wrap: anywhere; }`
- 反例：`.token { white-space: nowrap; }`

**115. Chip Collection Reflow** · 严重度 高（High）

说明：Filter chips and editable value collections must preserve labels when space or text size changes

- ✓ 该做：Wrap the collection or use an operable +n disclosure for hidden overflow values
- ✗ 别做：Force all chips into one clipped row or hide overflow values
- 示例：`<div class='chip-list'>{chips}</div> with flex-wrap`
- 反例：`<div class='chip-list' style='height:32px;overflow:hidden'>`

## 响应式（Responsive，8 条）

- **上游一手规范**：W3C CSS Grid 与响应式布局实践
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/standards/w3c--css-grid-1.md`

**64. Mobile First** · 严重度 中（Medium）

说明：Design for mobile then enhance for larger

- ✓ 该做：Start with mobile styles then add breakpoints
- ✗ 别做：Desktop-first causing mobile issues
- 示例：`Default mobile + md: lg: xl:`
- 反例：`Desktop default + max-width queries`

**65. Breakpoint Testing** · 严重度 中（Medium）

说明：Test at all common screen sizes

- ✓ 该做：Test at 320 375 414 768 1024 1440
- ✗ 别做：Only test on your device
- 示例：`Multiple device testing`
- 反例：`Single device development`

**66. Touch Friendly** · 严重度 高（High）

说明：Mobile layouts need touch-sized targets

- ✓ 该做：Increase touch targets on mobile
- ✗ 别做：Same tiny buttons on mobile
- 示例：`Larger buttons on mobile`
- 反例：`Desktop-sized targets on mobile`

**67. Readable Font Size** · 严重度 高（High）

说明：Text must be readable on all devices

- ✓ 该做：Minimum 16px body text on mobile
- ✗ 别做：Tiny text on mobile
- 示例：`text-base or larger`
- 反例：`text-xs for body text`

**68. Viewport Meta** · 严重度 高（High）

说明：Set viewport for mobile devices

- ✓ 该做：Use width=device-width initial-scale=1
- ✗ 别做：Missing or incorrect viewport
- 示例：`<meta name='viewport'...>`
- 反例：`No viewport meta tag`

**69. Horizontal Scroll** · 严重度 高（High）

说明：Avoid horizontal scrolling

- ✓ 该做：Ensure content fits viewport width
- ✗ 别做：Content wider than viewport
- 示例：`max-w-full overflow-x-hidden`
- 反例：`Horizontal scrollbar on mobile`

**70. Image Scaling** · 严重度 中（Medium）

说明：Images should scale with container

- ✓ 该做：Use max-width: 100% on images
- ✗ 别做：Fixed width images overflow
- 示例：`max-w-full h-auto`
- 反例：`width='800' fixed`

**71. Table Handling** · 严重度 中（Medium）

说明：Tables can overflow on mobile

- ✓ 该做：Use horizontal scroll or card layout
- ✗ 别做：Wide tables breaking layout
- 示例：`overflow-x-auto wrapper`
- 反例：`Table overflows viewport`

## 表单（Forms，11 条）

- **上游一手规范**：GOV.UK Design System 表单与错误文案（库内有一手原文）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/components/govuk--error-message.md`、`content/components/govuk--error-summary.md`、`content/patterns/govuk--validation.md`、`content/a11y/web.dev--a11y-forms.md`

**54. Input Labels** · 严重度 高（High）

说明：Every input needs a visible label

- ✓ 该做：Always show label above or beside input
- ✗ 别做：Placeholder as only label
- 示例：`<label>Email</label><input>`
- 反例：`placeholder='Email' only`

**55. Error Placement** · 严重度 高（High）

说明：Each invalid field needs an inline error connected to that field

- ✓ 该做：Show a specific error below the input and reference it with aria-describedby
- ✗ 别做：Show only a top-level error without identifying each invalid field
- 示例：`<input aria-describedby="email-error"><p id="email-error">Enter an email address</p>`
- 反例：`Red border or summary only`

**56. Inline Validation** · 严重度 中（Medium）

说明：Validate as user types or on blur

- ✓ 该做：Validate on blur for most fields
- ✗ 别做：Validate only on submit
- 示例：`onBlur validation`
- 反例：`Submit-only validation`

**57. Input Types** · 严重度 中（Medium）

说明：Use appropriate input types

- ✓ 该做：Use email tel number url etc
- ✗ 别做：Text input for everything
- 示例：`type='email'`
- 反例：`type='text' for email`

**58. Autofill Support** · 严重度 中（Medium）

说明：Help browsers autofill correctly

- ✓ 该做：Use autocomplete attribute properly
- ✗ 别做：Block or ignore autofill
- 示例：`autocomplete='email'`
- 反例：`autocomplete='off' everywhere`

**59. Required Indicators** · 严重度 中（Medium）

说明：Mark required fields clearly

- ✓ 该做：Use asterisk or (required) text
- ✗ 别做：No indication of required fields
- 示例：`* required indicator`
- 反例：`Guess which are required`

**60. Password Visibility** · 严重度 中（Medium）

说明：Let users see password while typing

- ✓ 该做：Toggle to show/hide password
- ✗ 别做：No visibility toggle
- 示例：`Show/hide password button`
- 反例：`Password always hidden`

**61. Submit Feedback** · 严重度 高（High）

说明：Confirm form submission status

- ✓ 该做：Show loading then success/error state
- ✗ 别做：No feedback after submit
- 示例：`Loading -> Success message`
- 反例：`Button click with no response`

**62. Input Affordance** · 严重度 中（Medium）

说明：Inputs should look interactive

- ✓ 该做：Use distinct input styling
- ✗ 别做：Inputs that look like plain text
- 示例：`Border/background on inputs`
- 反例：`Borderless inputs`

**63. Mobile Keyboards** · 严重度 中（Medium）

说明：Show appropriate keyboard for input type

- ✓ 该做：Use inputmode attribute
- ✗ 别做：Default keyboard for all inputs
- 示例：`inputmode='numeric'`
- 反例：`Text keyboard for numbers`

**106. Redundant Entry** · 严重度 中（Medium）

说明：WCAG 2.2 A avoids requiring the same information twice in one process

- ✓ 该做：Auto-populate prior values or let users select previously entered information
- ✗ 别做：Ask users to retype the same address or account data without necessity
- 示例：`reuse confirmed shipping address`
- 反例：`repeat full address form`

## 表单无障碍（Forms / Accessibility，1 条）

- **上游一手规范**：GOV.UK 错误汇总、web.dev 表单无障碍
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/components/govuk--error-summary.md`、`content/a11y/web.dev--a11y-forms.md`

**109. Focusable Error Summary** · 严重度 高（High）

说明：An error summary for failed validation complements inline field errors and must be easy to find by keyboard and screen reader users

- ✓ 该做：Place it at the top of the form; move focus to its heading or container after failed submit; link each item to its invalid field; retain inline errors
- ✗ 别做：Replace inline errors with a visual-only summary or move focus on every blur
- 示例：`<div role="alert" tabindex="-1" aria-labelledby="error-title"><h2 id="error-title">There is a problem</h2><a href="#email">Enter an email address</a></div>`
- 反例：`Toast only with no field links or focus target`

## 数据录入（Data Entry，1 条）

- **上游一手规范**：GOV.UK 地址输入
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/patterns/govuk--addresses.md`

**91. Bulk Actions** · 严重度 低（Low）

说明：Editing one by one is tedious

- ✓ 该做：Allow multi-select and bulk edit
- ✗ 别做：Single row actions only
- 示例：`Checkbox column + Action bar`
- 反例：`Repeated actions per row`

## 搜索（Search，2 条）

- **上游一手规范**：IBM Carbon 搜索模式
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/patterns/carbon--search-pattern.md`

**89. Autocomplete** · 严重度 中（Medium）

说明：Help users find results faster

- ✓ 该做：Show predictions as user types
- ✗ 别做：Require full type and enter
- 示例：`Debounced fetch + dropdown`
- 反例：`No suggestions`

**90. No Results** · 严重度 中（Medium）

说明：Dead ends frustrate users

- ✓ 该做：Show 'No results' with suggestions
- ✗ 别做：Blank screen or '0 results'
- 示例：`Try searching for X instead`
- 反例：`No results found.`

## 交互（Interaction，8 条）

- **上游一手规范**：WCAG 2.2 Focus、GitHub Primer 交互模式
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/a11y/web.dev--a11y-focus.md`、`content/patterns/primer--navigation.md`

**28. Focus States** · 严重度 高（High）

说明：Keyboard focus, including controls inside a modal, needs a visible indicator

- ✓ 该做：Use a visible focus ring on every interactive control, including modal controls
- ✗ 别做：Remove focus outline without replacement
- 示例：`focus:ring-2 focus:ring-blue-500`
- 反例：`outline-none without alternative`

**29. Hover States** · 严重度 中（Medium）

说明：Visual feedback on interactive elements

- ✓ 该做：Change cursor and add subtle visual change
- ✗ 别做：No hover feedback on clickable elements
- 示例：`hover:bg-gray-100 cursor-pointer`
- 反例：`No hover style`

**30. Active States** · 严重度 中（Medium）

说明：Show immediate feedback on press/click

- ✓ 该做：Add pressed/active state visual change
- ✗ 别做：No feedback during interaction
- 示例：`active:scale-95`
- 反例：`No active state`

**31. Disabled States** · 严重度 中（Medium）

说明：Clearly indicate non-interactive elements

- ✓ 该做：Reduce opacity and change cursor
- ✗ 别做：Confuse disabled with normal state
- 示例：`opacity-50 cursor-not-allowed`
- 反例：`Same style as enabled`

**32. Loading Buttons** · 严重度 高（High）

说明：Prevent double submission during async actions

- ✓ 该做：Disable button and show loading state
- ✗ 别做：Allow multiple clicks during processing
- 示例：`disabled={loading} spinner`
- 反例：`Button clickable while loading`

**33. Error Feedback** · 严重度 高（High）

说明：Users need to know when something fails

- ✓ 该做：Show clear error messages near problem
- ✗ 别做：Silent failures with no feedback
- 示例：`Red border + error message`
- 反例：`No indication of error`

**34. Success Feedback** · 严重度 中（Medium）

说明：Confirm successful actions to users

- ✓ 该做：Show success message or visual change
- ✗ 别做：No confirmation of completed action
- 示例：`Toast notification or checkmark`
- 反例：`Action completes silently`

**35. Confirmation Dialogs** · 严重度 高（High）

说明：Prevent accidental destructive actions

- ✓ 该做：Confirm before delete/irreversible actions
- ✗ 别做：Delete without confirmation
- 示例：`Are you sure modal`
- 反例：`Direct delete on click`

## 触摸与移动端（Touch，6 条）

- **上游一手规范**：WCAG 2.2 Target Size（2.5.8）、Apple HIG（44pt 点击区）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/a11y/w3c--easy-checks.md`

**22. Touch Target Size** · 严重度 高（High）

说明：Touch target guidance depends on platform and web context

- ✓ 该做：Use 44pt on iOS and 48dp on Android; for web use the separate WCAG Target Size rule
- ✗ 别做：Treat one unit or minimum as universal across platforms
- 示例：`iOS 44pt; Android 48dp; Web 24 CSS px plus WCAG exceptions`
- 反例：`w-6 h-6 buttons`

**23. Touch Spacing** · 严重度 中（Medium）

说明：Adjacent touch targets need adequate spacing

- ✓ 该做：Minimum 8px gap between touch targets
- ✗ 别做：Tightly packed clickable elements
- 示例：`gap-2 between buttons`
- 反例：`gap-0 or gap-1`

**24. Gesture Conflicts** · 严重度 中（Medium）

说明：Custom gestures can conflict with system

- ✓ 该做：Avoid horizontal swipe on main content
- ✗ 别做：Override system gestures
- 示例：`Vertical scroll primary`
- 反例：`Horizontal swipe carousel only`

**25. Tap Delay** · 严重度 中（Medium）

说明：300ms tap delay feels laggy

- ✓ 该做：Use touch-action CSS or fastclick
- ✗ 别做：Default mobile tap handling
- 示例：`touch-action: manipulation`
- 反例：`No touch optimization`

**26. Pull to Refresh** · 严重度 低（Low）

说明：Accidental refresh is frustrating

- ✓ 该做：Disable where not needed
- ✗ 别做：Enable by default everywhere
- 示例：`overscroll-behavior: contain`
- 反例：`Default overscroll`

**27. Haptic Feedback** · 严重度 低（Low）

说明：Tactile feedback improves interaction feel

- ✓ 该做：Use for confirmations and important actions
- ✗ 别做：Overuse vibration feedback
- 示例：`navigator.vibrate(10)`
- 反例：`Vibrate on every tap`

## 动效（Animation，10 条）

- **上游一手规范**：Apple HIG Motion、Polaris Motion、WCAG 2.2（动画与减弱动效）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/motion/nngroup.com--animation-purpose-ux.md`、`content/motion/polaris.shopify.com--motion.md`

**7. Excessive Motion** · 严重度 高（High）

说明：Too many animations cause distraction and motion sickness

- ✓ 该做：Animate 1-2 key elements per view maximum
- ✗ 别做：Animate everything that moves
- 示例：`Single hero animation`
- 反例：`animate-bounce on 5+ elements`

**8. Duration Timing** · 严重度 中（Medium）

说明：Motion duration depends on distance complexity platform and user context

- ✓ 该做：Use shared motion tokens and test that feedback stays responsive
- ✗ 别做：Present 150-300ms or any cutoff as a universal requirement
- 示例：`transition-colors duration-200`
- 反例：`One duration copied to every transition`

**9. Reduced Motion** · 严重度 高（High）

说明：Respect user's motion preferences

- ✓ 该做：Check prefers-reduced-motion media query
- ✗ 别做：Ignore accessibility motion settings
- 示例：`@media (prefers-reduced-motion: reduce)`
- 反例：`No motion query check`

**10. Loading States** · 严重度 高（High）

说明：Show feedback during async operations

- ✓ 该做：Use skeleton screens or spinners
- ✗ 别做：Leave UI frozen with no feedback
- 示例：`animate-pulse skeleton`
- 反例：`Blank screen while loading`

**11. Hover vs Tap** · 严重度 高（High）

说明：Hover effects don't work on touch devices

- ✓ 该做：Use click/tap for primary interactions
- ✗ 别做：Rely only on hover for important actions
- 示例：`onClick handler`
- 反例：`onMouseEnter only`

**12. Continuous Animation** · 严重度 中（Medium）

说明：Infinite animations are distracting

- ✓ 该做：Use for loading indicators only
- ✗ 别做：Use for decorative elements
- 示例：`animate-spin on loader`
- 反例：`animate-bounce on icons`

**13. Transform Performance** · 严重度 中（Medium）

说明：Some CSS properties trigger expensive repaints

- ✓ 该做：Use transform and opacity for animations
- ✗ 别做：Animate width/height/top/left properties
- 示例：`transform: translateY()`
- 反例：`top: 10px animation`

**14. Easing Functions** · 严重度 低（Low）

说明：Easing should match how an element changes speed and purpose

- ✓ 该做：Use deceleration when arriving acceleration when leaving and linear for constant-rate progress
- ✗ 别做：Reject linear easing even for steady rotation or progress
- 示例：`ease-out for entry; linear for spinner`
- 反例：`ease-in-out for every motion`

**108. Auto-Rotating Content Controls** · 严重度 高（High）

说明：Auto-rotating content needs user control

- ✓ 该做：Provide previous next and play/pause; stop on focus or hover and when reduced motion is requested
- ✗ 别做：Auto-advance slides without a stop control
- 示例：`button aria-label="Pause carousel"`
- 反例：`timer-only carousel`

**119. Cancellable State Transitions** · 严重度 高（High）

说明：Rapid compact-control changes can interrupt an in-flight transition

- ✓ 该做：Cancel or replace prior motion; set the final semantic state directly and handle cancellation cleanup
- ✗ 别做：Depend on animationend or transitionend for required state correctness
- 示例：`previous?.cancel(); setSelected(next)`
- 反例：`Enable the chip only inside transitionend`

## 反馈与状态（Feedback，6 条）

- **上游一手规范**：GitHub Primer 通知消息、IBM Carbon 通知模式
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/patterns/primer--notification-messaging.md`、`content/patterns/carbon--notification-pattern.md`

**78. Loading Indicators** · 严重度 高（High）

说明：Loading feedback should match the expected wait and avoid flashing for near-instant work

- ✓ 该做：Follow platform and component guidance; preserve layout focus and accessible busy status
- ✗ 别做：Apply one timing threshold to every operation or leave long waits unexplained
- 示例：`Stable skeleton or progress with aria-busy`
- 反例：`Flickering spinner or frozen UI`

**79. Empty States** · 严重度 中（Medium）

说明：Guide users when no content exists

- ✓ 该做：Show helpful message and action
- ✗ 别做：Blank empty screens
- 示例：`No items yet. Create one!`
- 反例：`Empty white space`

**80. Error Recovery** · 严重度 中（Medium）

说明：Help users recover from errors

- ✓ 该做：Provide clear next steps
- ✗ 别做：Error without recovery path
- 示例：`Try again button + help link`
- 反例：`Error message only`

**81. Progress Indicators** · 严重度 中（Medium）

说明：Show progress for multi-step processes

- ✓ 该做：Step indicators or progress bar
- ✗ 别做：No indication of progress
- 示例：`Step 2 of 4 indicator`
- 反例：`No step information`

**82. Toast Notifications** · 严重度 中（Medium）

说明：Transient messages for non-critical info

- ✓ 该做：Auto-dismiss after 3-5 seconds
- ✗ 别做：Toasts that never disappear
- 示例：`Auto-dismiss toast`
- 反例：`Persistent toast`

**83. Confirmation Messages** · 严重度 中（Medium）

说明：Confirm successful actions

- ✓ 该做：Brief success message
- ✗ 别做：Silent success
- 示例：`Saved successfully toast`
- 反例：`No confirmation`

## 新手引导（Onboarding，1 条）

- **上游一手规范**：GitHub Primer 新功能引导
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/patterns/primer--feature-onboarding.md`

**88. User Freedom** · 严重度 中（Medium）

说明：Users should be able to skip tutorials

- ✓ 该做：Provide Skip and Back buttons
- ✗ 别做：Force linear unskippable tour
- 示例：`Skip Tutorial button`
- 反例：`Locked overlay until finished`

## 内容（Content，7 条）

- **上游一手规范**：中文文案排版指北（库内一手）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/markdown/github.com--chinese-copywriting-guidelines.md`

**84. Truncation** · 严重度 中（Medium）

说明：Handle long content gracefully

- ✓ 该做：Truncate with ellipsis and expand option
- ✗ 别做：Overflow or broken layout
- 示例：`line-clamp-2 with expand`
- 反例：`Overflow or cut off`

**85. Date Formatting** · 严重度 低（Low）

说明：Use locale-appropriate date formats

- ✓ 该做：Use relative or locale-aware dates
- ✗ 别做：Ambiguous date formats
- 示例：`2 hours ago or locale format`
- 反例：`01/02/03`

**86. Number Formatting** · 严重度 低（Low）

说明：Format large numbers for readability

- ✓ 该做：Use thousand separators or abbreviations
- ✗ 别做：Long unformatted numbers
- 示例：`1.2K or 1,234`
- 反例：`1234567`

**87. Placeholder Content** · 严重度 低（Low）

说明：Show realistic placeholders during dev

- ✓ 该做：Use realistic sample data
- ✗ 别做：Lorem ipsum everywhere
- 示例：`Real sample content`
- 反例：`Lorem ipsum`

**113. Essential Text Truncation** · 严重度 严重（Critical）

说明：Headings actions errors safety text and distinguishing names need complete access

- ✓ 该做：Wrap stack resize or provide a visible full-detail path
- ✗ 别做：Clamp essential meaning only to make cards uniform
- 示例：`Action label wraps or opens full details`
- 反例：`Primary action shown only as an unexplained ellipsis`

**114. Compact Label Semantics** · 严重度 高（High）

说明：Badges communicate state while chips or tags represent values or actions

- ✓ 该做：Choose static or interactive markup from the label's meaning and ownership
- ✗ 别做：Make every pill clickable or encode status with color alone
- 示例：`<span class='status'>Pending</span>`
- 反例：`<div class='pill' onclick='toggle()'>Pending</div>`

**116. Compact Label Overflow** · 严重度 高（High）

说明：A badge chip or pill label should stay whole on one line when practical and disclose unavoidable truncation

- ✓ 该做：Bound only unpredictable values; use nowrap with a shrinkable label; expose full text to keyboard pointer and touch users
- ✗ 别做：Let one compact label wrap to a second line or use a hover-only tooltip
- 示例：`Flexible label with min-width 0 and an operable full-value disclosure`
- 反例：`Fixed-width badge wraps to second line or clips with title-only recovery`

## 文字排版（Typography，7 条）

- **上游一手规范**：Polaris 字体与字阶、Practical Typography
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/type/polaris.shopify.com--font-and-typescale.md`、`content/markdown/practicaltypography.com--type-composition.md`

**72. Line Height** · 严重度 中（Medium）

说明：Adequate line height improves readability

- ✓ 该做：Use 1.5-1.75 for body text
- ✗ 别做：Cramped or excessive line height
- 示例：`leading-relaxed (1.625)`
- 反例：`leading-none (1)`

**73. Line Length** · 严重度 中（Medium）

说明：Long lines are hard to read

- ✓ 该做：Limit to 65-75 characters per line
- ✗ 别做：Full-width text on large screens
- 示例：`max-w-prose`
- 反例：`Full viewport width text`

**74. Font Size Scale** · 严重度 中（Medium）

说明：Consistent type hierarchy aids scanning

- ✓ 该做：Use consistent modular scale
- ✗ 别做：Random font sizes
- 示例：`Type scale (12 14 16 18 24 32)`
- 反例：`Arbitrary sizes`

**75. Font Loading** · 严重度 中（Medium）

说明：Fonts should load without layout shift

- ✓ 该做：Reserve space with fallback font
- ✗ 别做：Layout shift when fonts load
- 示例：`font-display: swap + similar fallback`
- 反例：`No fallback font`

**76. Contrast Readability** · 严重度 高（High）

说明：Body text needs good contrast

- ✓ 该做：Use darker text on light backgrounds
- ✗ 别做：Gray text on gray background
- 示例：`text-gray-900 on white`
- 反例：`text-gray-400 on gray-100`

**77. Heading Clarity** · 严重度 中（Medium）

说明：Headings should stand out from body

- ✓ 该做：Clear size/weight difference
- ✗ 别做：Headings similar to body text
- 示例：`Bold + larger size`
- 反例：`Same size as body`

**110. Heading Line Balance** · 严重度 中（Medium）

说明：Short multi-line headings may use balanced wrapping as a progressive visual heuristic

- ✓ 该做：Bound the measure and test natural-wrap fallback across widths fonts and locales
- ✗ 别做：Promise an exact final line or insert blanket nonbreaking spaces or hardcoded br tags
- 示例：`.hero-title { max-inline-size: 20ch; text-wrap: balance; }`
- 反例：`Heading copy rewritten with forced last-line breaks`

## 无障碍（Accessibility，20 条）

- **上游一手规范**：W3C WCAG 2.2 全文（库内有一手原文，本表只是速查索引）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/a11y/w3c--wcag-2.2.md`、`content/a11y/web.dev--a11y-color-contrast.md`

**36. Color Contrast** · 严重度 高（High）

说明：Text must be readable against background

- ✓ 该做：Minimum 4.5:1 ratio for normal text
- ✗ 别做：Low contrast text
- 示例：`#333 on white (7:1)`
- 反例：`#999 on white (2.8:1)`

**37. Color Only** · 严重度 高（High）

说明：Don't convey information by color alone

- ✓ 该做：Use icons/text in addition to color
- ✗ 别做：Red/green only for error/success
- 示例：`Red text + error icon`
- 反例：`Red border only for error`

**38. Alt Text** · 严重度 高（High）

说明：Images need text alternatives

- ✓ 该做：Descriptive alt text for meaningful images
- ✗ 别做：Empty or missing alt attributes
- 示例：`alt='Dog playing in park'`
- 反例：`alt='' for content images`

**39. Heading Hierarchy** · 严重度 中（Medium）

说明：Screen readers use headings for navigation

- ✓ 该做：Use sequential heading levels h1-h6
- ✗ 别做：Skip heading levels or misuse for styling
- 示例：`h1 then h2 then h3`
- 反例：`h1 then h4`

**40. ARIA Labels** · 严重度 高（High）

说明：Interactive elements need accessible names

- ✓ 该做：Add aria-label for icon-only buttons
- ✗ 别做：Icon buttons without labels
- 示例：`aria-label='Close menu'`
- 反例：`<button><Icon/></button>`

**41. Keyboard Navigation** · 严重度 高（High）

说明：Web users need complete keyboard navigation with visible focus on every operable control

- ✓ 该做：Keep tab order aligned with visual order and test every action without a pointer
- ✗ 别做：Keyboard traps or illogical tab order
- 示例：`tabIndex for custom order`
- 反例：`Unreachable elements`

**42. Screen Reader** · 严重度 中（Medium）

说明：Content should make sense when read aloud

- ✓ 该做：Use semantic HTML and ARIA properly
- ✗ 别做：Div soup with no semantics
- 示例：`<nav> <main> <article>`
- 反例：`<div> for everything`

**43. Form Labels** · 严重度 高（High）

说明：Inputs must have associated labels

- ✓ 该做：Use label with for attribute or wrap input
- ✗ 别做：Placeholder-only inputs
- 示例：`<label for='email'>`
- 反例：`placeholder='Email' only`

**44. Error Messages** · 严重度 高（High）

说明：Error messages must be announced

- ✓ 该做：Use aria-live or role=alert for errors
- ✗ 别做：Visual-only error indication
- 示例：`role='alert'`
- 反例：`Red border only`

**45. Skip Links** · 严重度 中（Medium）

说明：Allow keyboard users to skip navigation

- ✓ 该做：Provide skip to main content link
- ✗ 别做：No skip link on nav-heavy pages
- 示例：`Skip to main content link`
- 反例：`100 tabs to reach content`

**99. Motion Sensitivity** · 严重度 高（High）

说明：Parallax/Scroll-jacking causes nausea

- ✓ 该做：Honor prefers-reduced-motion and present the final readable state without parallax or scroll-jacking
- ✗ 别做：Force scroll effects
- 示例：`@media (prefers-reduced-motion)`
- 反例：`ScrollTrigger.create()`

**100. Focus Not Obscured (Minimum)** · 严重度 高（High）

说明：WCAG 2.2 AA requires keyboard focus to remain at least partially visible

- ✓ 该做：Offset sticky UI with scroll-padding and dismiss or move persistent overlays
- ✗ 别做：Let headers footers banners or chat widgets fully cover focus
- 示例：`scroll-padding-top: var(--header-height)`
- 反例：`fixed overlay covers :focus`

**101. Focus Not Obscured (Enhanced)** · 严重度 中（Medium）

说明：WCAG 2.2 AAA requires keyboard focus to remain fully visible

- ✓ 该做：Keep the entire focused component unobscured by author-created content
- ✗ 别做：Present this enhanced AAA criterion as an AA requirement or allow persistent UI to hide any part of focus
- 示例：`close persistent overlay before focus moves behind it`
- 反例：`sticky footer covers half the focused button`

**102. Focus Appearance** · 严重度 中（Medium）

说明：WCAG 2.2 AAA defines minimum area and contrast for focus indicators

- ✓ 该做：Use an indicator at least as large as a 2 CSS px perimeter with 3:1 state contrast
- ✗ 别做：Present this enhanced AAA criterion as an AA requirement or use a thin low-contrast outline
- 示例：`outline: 2px solid currentColor; outline-offset: 2px`
- 反例：`box-shadow: 0 0 1px low-contrast`

**103. Dragging Movements** · 严重度 高（High）

说明：WCAG 2.2 AA requires a single-pointer alternative for author-controlled drag operations

- ✓ 该做：Add buttons menus or tap-to-move controls and retain keyboard operation
- ✗ 别做：Make dragging the only way to reorder resize or select
- 示例：`Move up and Move down buttons beside drag handle`
- 反例：`drag handle only`

**104. Target Size (Minimum)** · 严重度 高（High）

说明：WCAG 2.2 AA requires 24 CSS px pointer targets or an applicable exception

- ✓ 该做：Use at least 24 by 24 CSS px or verify spacing equivalent inline user-agent or essential exceptions
- ✗ 别做：Assume native 44pt or 48dp guidance defines web conformance
- 示例：`min-width: 24px; min-height: 24px`
- 反例：`tiny adjacent icon buttons`

**105. Consistent Help** · 严重度 中（Medium）

说明：WCAG 2.2 A requires repeated help mechanisms to stay in the same relative order

- ✓ 该做：Keep contact self-help and automated help in consistent locations
- ✗ 别做：Move help controls to different locations on each page
- 示例：`shared header help menu`
- 反例：`page-specific help placement`

**112. Text Reflow and Spacing** · 严重度 严重（Critical）

说明：Text must remain available at narrow widths zoom and user spacing overrides

- ✓ 该做：Use fluid sizes content-driven height and unitless line height
- ✗ 别做：Clip text in fixed-width or fixed-height boxes
- 示例：`.copy { inline-size: min(100%, 65ch); height: auto; line-height: 1.5; }`
- 反例：`.copy { width: 900px; height: 40px; overflow: hidden; }`

**117. Compact Control Semantics** · 严重度 严重（Critical）

说明：Interactive chips need a native role accessible name state keyboard operation and visible focus

- ✓ 该做：Prefer a button and expose pressed or selected state that matches the visible label
- ✗ 别做：Use a clickable div or reveal the only action on hover
- 示例：`<button aria-pressed='true'>Open now</button>`
- 反例：`<div class='selected' onclick='toggle()'>Open now</div>`

**118. Contextual Live Badge Updates** · 严重度 高（High）

说明：Async badge and count changes should announce a meaningful contextual status without moving focus

- ✓ 该做：Use one appropriate atomic status message such as 3 items in cart
- ✗ 别做：Announce a bare number or make every badge a competing live region
- 示例：`<span role='status' aria-atomic='true'>3 items in cart</span>`
- 反例：`<span aria-live='polite'>3</span>`

## 安全与无障碍（Security / Accessibility，1 条）

- **上游一手规范**：WCAG 2.2 可访问身份验证
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/a11y/w3c--wcag-2.2.md`

**107. Accessible Authentication (Minimum)** · 严重度 严重（Critical）

说明：WCAG 2.2 AA says authentication must not depend only on a cognitive function test unless an exception applies

- ✓ 该做：Allow password managers and paste; offer passkeys OAuth or another non-cognitive method
- ✗ 别做：Block paste or require manual OTP transcription with no alternative
- 示例：`autocomplete="current-password" and paste allowed`
- 反例：`onpaste preventDefault`

## AI 交互（AI Interaction，3 条）

- **上游一手规范**：AI 交互界面的反馈模式（库内暂无专门一手文章，属未覆盖）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/patterns/carbon--notification-pattern.md`

**92. Disclaimer** · 严重度 高（High）

说明：Users need to know they talk to AI

- ✓ 该做：Clearly label AI generated content
- ✗ 别做：Present AI as human
- 示例：`AI Assistant label`
- 反例：`Fake human name without label`

**93. Streaming** · 严重度 中（Medium）

说明：Waiting for full text is slow

- ✓ 该做：Stream text response token by token
- ✗ 别做：Show loading spinner for 10s+
- 示例：`Typewriter effect`
- 反例：`Spinner until 100% complete`

**98. Feedback Loop** · 严重度 低（Low）

说明：AI needs user feedback to improve

- ✓ 该做：Thumps up/down or 'Regenerate'
- ✗ 别做：Static output only
- 示例：`Feedback component`
- 反例：`Read-only text`

## 空间界面（Spatial UI，2 条）

- **上游一手规范**：Apple visionOS 空间界面（一手原文未收）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：Apple HIG 布局 / 色彩原文（content/layout/developer.apple.com--layout.md、content/color/developer.apple.com--color.md）；动效原文已删（无时长数值）；visionOS 风格卡已随风格层下线

**94. Gaze Hover** · 严重度 高（High）

说明：Elements should respond to eye tracking before pinch

- ✓ 该做：Scale/highlight element on look
- ✗ 别做：Static element until pinch
- 示例：`hoverEffect()`
- 反例：`onTap only`

**95. Depth Layering** · 严重度 中（Medium）

说明：UI needs Z-depth to separate content from environment

- ✓ 该做：Use glass material and z-offset
- ✗ 别做：Flat opaque panels blocking view
- 示例：`.glassBackgroundEffect()`
- 反例：`bg-white`

## 性能（Performance，8 条）

- **上游一手规范**：web.dev 与 Chrome 官方性能实践
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：`content/cases/developer.chrome.com--scroll-animation-performance-case-study.md`

**46. Image Optimization** · 严重度 高（High）

说明：Large images slow page load

- ✓ 该做：Use appropriate size and format (WebP)
- ✗ 别做：Unoptimized full-size images
- 示例：`srcset with multiple sizes`
- 反例：`4000px image for 400px display`

**47. Lazy Loading** · 严重度 中（Medium）

说明：Load content as needed

- ✓ 该做：Lazy load below-fold images and content
- ✗ 别做：Load everything upfront
- 示例：`loading='lazy'`
- 反例：`All images eager load`

**48. Code Splitting** · 严重度 中（Medium）

说明：Large bundles slow initial load

- ✓ 该做：Split code by route/feature
- ✗ 别做：Single large bundle
- 示例：`dynamic import()`
- 反例：`All code in main bundle`

**49. Caching** · 严重度 中（Medium）

说明：Repeat visits should be fast

- ✓ 该做：Set appropriate cache headers
- ✗ 别做：No caching strategy
- 示例：`Cache-Control headers`
- 反例：`Every request hits server`

**50. Font Loading** · 严重度 中（Medium）

说明：Web fonts can block rendering

- ✓ 该做：Use font-display swap or optional
- ✗ 别做：Invisible text during font load
- 示例：`font-display: swap`
- 反例：`FOIT (Flash of Invisible Text)`

**51. Third Party Scripts** · 严重度 中（Medium）

说明：External scripts can block rendering

- ✓ 该做：Load non-critical scripts async/defer
- ✗ 别做：Synchronous third-party scripts
- 示例：`async or defer attribute`
- 反例：`<script src='...'> in head`

**52. Bundle Size** · 严重度 中（Medium）

说明：Large JavaScript slows interaction

- ✓ 该做：Monitor and minimize bundle size
- ✗ 别做：Ignore bundle size growth
- 示例：`Bundle analyzer`
- 反例：`No size monitoring`

**53. Render Blocking** · 严重度 中（Medium）

说明：CSS/JS can block first paint

- ✓ 该做：Inline critical CSS defer non-critical
- ✗ 别做：Large blocking CSS files
- 示例：`Critical CSS inline`
- 反例：`All CSS in head`

## 可持续性（Sustainability，2 条）

- **上游一手规范**：无对应一手规范（库内未覆盖）
- **排序**：按上游编号（主题连续顺序），严重度逐条标注
- **库内对应文章**：无（一手原文未收，属库内未覆盖）

**96. Auto-Play Video** · 严重度 中（Medium）

说明：Autoplaying media consumes data and creates motion barriers

- ✓ 该做：Prefer click-to-play; provide pause and captions; stop off-screen and honor reduced motion
- ✗ 别做：Auto-play high-resolution loops without pause or captions
- 示例：`<video controls preload="none"><track kind="captions" /></video>`
- 反例：`autoplay loop`

**97. Asset Weight** · 严重度 中（Medium）

说明：Heavy 3D/Image assets increase carbon footprint

- ✓ 该做：Compress and lazy load 3D models
- ✗ 别做：Load 50MB textures
- 示例：`Draco compression`
- 反例：`Raw .obj files`

## 附录：上游官方规范清单

作者在 `data-provenance.json` 里标注的官方出处，共 16 条：

- https://design-system.service.gov.uk/components/error-message/
- https://design-system.service.gov.uk/components/error-summary/
- https://fluent2.microsoft.design/components/web/react/core/skeleton/usage
- https://fluent2.microsoft.design/components/web/react/core/tag/usage
- https://fluent2.microsoft.design/motion
- https://fluent2.microsoft.design/wait-ux
- https://m3.material.io/foundations/interaction/states/overview
- https://www.w3.org/TR/css-animations-1/
- https://www.w3.org/TR/css-text-4/
- https://www.w3.org/TR/web-animations-1/
- https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html
- https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- https://www.w3.org/WAI/tutorials/forms/notifications/

