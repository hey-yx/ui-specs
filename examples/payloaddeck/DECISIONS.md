# DECISIONS — PayloadDeck API docs

Intent: `briefs/payloaddeck.md`. Guide: `site/dist/ai/guide.md`. Routing pack: `site/dist/ai/design-points.json`.
Every number below is either cited to a line in `content/` or explicitly marked **DERIVED** with the rule it follows.

---

## 1. Design premises

| Item | Value | Basis |
| --- | --- | --- |
| Audience | Backend / data engineers integrating a log-parsing API for the first time | `briefs/payloaddeck.md` |
| Product context | Developer-tool API reference; task is "make one request work, then look up failures" | routing pack, point `project-primer` |
| Main source | **Primer** | Guide project-selection table: developer-tool documentation → Primer |
| Design scenario | Read → copy a request → run it → map an error code → try it in-page | briefs/payloaddeck.md |
| Tone | Utilitarian-technical: imperative, verb-first, no marketing adjectives | `content/patterns/primer--notification-messaging.md:27` (feedback sits next to the action it describes, not in decoration); `content/markdown/learn.microsoft.com--top-10-tips-style-voice.md:114` (start each statement with a verb, cut "you can" / "there is") |
| Language | English UI, `<html lang="en">` | briefs/payloaddeck.md |

---

## 2. Structure decisions

| Decision | What was built | Basis |
| --- | --- | --- |
| Macrostructure | Long Document (three-rail docs): one continuous reference, no landing-page hero | Primer split page guidance — `content/layout/primer.style--layout.md:238` |
| Column 1 (208px) | Chapter rail: 7 sections, always visible ≥768px | `content/layout/primer.style--layout.md:280` (left pane: region nav); `content/patterns/primer--navigation.md:62` (nav list in the sidebar of a split page), `content/patterns/primer--navigation.md:152` (sidebar always visible on wide viewports) |
| Column 2 (fluid) | Content region, `minmax(0,1fr)` so long code wraps inside its column instead of pushing the grid | `content/layout/primer.style--layout.md:276` (content region) |
| Column 3 (220px) | In-page table of contents, sticky, from h2/h3 | `content/layout/primer.style--layout.md:284` (right pane: metadata / auxiliary) |
| Top bar | Static, scrolls away; brand + section tag + version chip | `content/layout/primer.style--layout.md:141` ("App header ... never fixed to the top of the viewport") |
| Footer | One line, after the fold, on the only page | `content/layout/primer.style--layout.md:204` (app footer, after the fold, present in all core pages) |
| Narrow viewports (<768px) | Chapter rail becomes a left drawer + scrim; right TOC collapses to a `<details>` block above the h1 | `content/patterns/primer--navigation.md:185` (sidebar hidden on narrow, options move into a menu) |
| Skip link | First focusable element, jumps to `#main` | `content/patterns/primer--navigation.md:219` (skip links bypass redundant navigation) |
| Accent placement | Links, current chapter, focus ring, primary button, version chip only | `content/color/primer.style--color.md:170` (accent = links, selected, active, focus, neutral information) |
| Heading levels | One h1, section h2, sub-step h3; both h2/h3 are TOC entries | `content/patterns/primer--navigation.md:148` (section headings reflect hierarchy, marked up as h3–h6 under a page header) |

---

## 3. Colour table

Palette taken as **one whole set** from GOV.UK (gap-fill row 色值: the main source provides semantic roles but no hex values — `content/color/primer.style--color.md:67` lists token categories, the value tables are images).

| Token | Value | Source line | Used for | Measured contrast |
| --- | --- | --- | --- | --- |
| `--paper` | `#ffffff` | `content/color/govuk--colour.md:476` | Page background | — |
| `--canvas` | `#f3f3f3` | `content/color/govuk--colour.md:470` | Code blocks, table header, disabled fill | — |
| `--tint` | `#f6f5fa` | `content/color/govuk--colour.md:302` | Current-chapter background | — |
| `--ink` | `#0b0c0c` | `content/color/govuk--colour.md:454` | Body text | **19.59:1** on paper |
| `--muted` | `#484949` | `content/color/govuk--colour.md:458` | Secondary text, breadcrumb, footer | **9.03:1** |
| `--subtle` | `#858686` | `content/color/govuk--colour.md:462` | Control borders (input, button, code card) | **3.65:1** (non-text ≥3:1) |
| `--hair` | `#cecece` | `content/color/govuk--colour.md:466` | Decorative dividers (no control boundary) | 1.57:1 — decorative only |
| `--accent` | `#54319f` | `content/color/govuk--colour.md:286` | Links, active chapter, focus ring, primary button | **9.06:1** with white text; **8.36:1** as text on tint |
| `--accent-hover` | `#3f2577` | `content/color/govuk--colour.md:306` | Hover/active darkening of the same hue | 12.05:1 with white text |
| `--success` | `#0f7a52` | `content/color/govuk--colour.md:222` | "Copied" confirmation | **4.82:1** on paper |
| `--danger` | `#ca3535` | `content/color/govuk--colour.md:346` | Error messages, invalid borders | **5.16:1** on paper |
| `--warnbg` | `#fffdf2` | `content/color/govuk--colour.md:422` | Note background (Retry-After) | ink on it = 19.2:1 |
| `--warnline` | `#ffdd00` | `content/color/govuk--colour.md:406` | Note left stripe | decorative only, not a boundary |
| `--on-accent` | `#ffffff` | `content/color/govuk--colour.md:476` | Text on accent fill | 9.06:1 |

Rules applied:

- Text ≥ **4.5:1**; non-text UI boundaries ≥ **3:1** — `content/color/designsystem.digital.gov--color-overview.md:44` (4.5:1 normal text, 3:1 large text or non-text), `content/a11y/w3c--wcag-2.2.md:871` (WCAG 2.2 target size).
- Disabled text is **3.29:1** — WCAG explicitly exempts inactive controls; recorded rather than "fixed".
- Never colour alone: current chapter also gets a tint fill and 600 weight; errors also get a left rule, an icon-free `Error` label and inline text (`content/patterns/govuk--validation.md:68`).
- One hue for emphasis; neutrals for everything else (`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:208` — darker variations lower brightness and raise saturation; `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:238` — hover is the darker variation; `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76` — at most 3 type sizes, colour used sparingly).

Accent fill measured at **6,625 px² = 0.575 %** of the 1280×900 viewport (0.123 % of the full 4,205 px page) — well under the ≤5 % emphasis budget in the guide's colour point.

---

## 4. Type scale, line height, weight

| Role | Size | Line height | Source |
| --- | --- | --- | --- |
| Body / UI | 16px | 24px | Size: `content/type/govuk--type-scale.md:100` (`govuk-body-s`, 16px) |
| Section heading h2 / lede | 19px | 27px | Size: `content/type/govuk--type-scale.md:92` (19px) |
| Page title h1 / h3 | 24px | 32px | Size: `content/type/govuk--type-scale.md:84` (24px) |
| Mono / code | 16px | 24px | **No extra size**: code stays on the body step; mono family plus tabular numerals carry the distinction (`content/type/primer.style--typography.md:53`) |

- **Line height = font size + 8** — hard rule in the run brief; formula source `content/type/tdesign.tencent.com--fonts.md:67` ("font size + 8"). Implemented per element with zero specificity: `:where(body, body *){line-height:calc(1em + 8px)}`, so each element computes from its own font size rather than inheriting a fixed value. The three size steps therefore resolve to 24, 27 and 32 px; these are formula products, not independent source values.
- Body floor **16px** — `content/type/designsystem.digital.gov--typography.md:34`.
- Exactly three sizes — `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76` ("3 type sizes at most").
- Weights **400 / 600 only** — `content/type/primer.style--typography.md:47` (Primer offers light/normal/medium/semibold; this page uses the two ends); no light text on light ground.
- Measure **≤ 80ch**, left-aligned, ragged right, no letter-spacing changes — `content/type/primer.style--typography.md:67`, `content/type/primer.style--typography.md:69`, `content/type/primer.style--typography.md:73`.
- Line height aligns to the 4px baseline grid — `content/type/primer.style--typography.md:29`. 24 and 32 land on it; **27 does not**, a known consequence of the brief's `size + 8` rule for the 19px step (19 + 8 = 27). Recorded rather than silently rounded, since the brief's formula outranks the grid preference.

Measured in the browser: `.lede` = 16/24, `h2` = 19/27, `h1` = 24/32.

---

## 5. Spacing, radius, container, breakpoints

| Item | Value | Source / rule |
| --- | --- | --- |
| Base unit | 8px | `content/layout/atlassian.design--spacing.md:32` (`space.100 = 8px`, 8px base) |
| Scale | 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 | `content/layout/atlassian.design--spacing.md:70` (4px), `content/layout/atlassian.design--spacing.md:86` (8px), `content/layout/atlassian.design--spacing.md:94` (12px), `content/layout/atlassian.design--spacing.md:102` (16px), `content/layout/atlassian.design--spacing.md:118` (24px), `content/layout/atlassian.design--spacing.md:126` (32px), `content/layout/atlassian.design--spacing.md:134` (40px), `content/layout/atlassian.design--spacing.md:142` (48px), `content/layout/atlassian.design--spacing.md:150` (64px) |
| Radius | 4px small, 8px large | **DERIVED** per gap-fill row 圆角 (main source has no numeric radius) |
| Hairline | 1px | **DERIVED** per gap-fill row 发丝线宽 |
| Page max width | 1280px | `content/layout/primer.style--layout.md:102` (1280px breakpoint), `content/layout/primer.style--layout.md:122` (max-width 1280px) |
| Page padding | 16px below 768, 24px from 1280 | `content/layout/primer.style--layout.md:113` (16px), `content/layout/primer.style--layout.md:117` (24px) |
| Breakpoints | 320 / 544 / 768 / 1012 / 1280 / 1400 | `content/layout/primer.style--layout.md:98`–`content/layout/primer.style--layout.md:103` (full ladder); this page implements 544, 768, 1012, 1280 |
| Minimum viewport | 320px | `content/layout/primer.style--responsive.md:39` (smallest supported viewport) |
| Control height | 32px desktop | `content/layout/primer.style--responsive.md:56` (Primer medium button is 32px tall) |
| Icon size | 24px | `content/icons/primer.style--octicons-guidelines.md:28` (two versions: 16px and 24px) |
| Touch targets | 44px on ≤767px for chapter links, tabs, buttons and the narrow TOC summary | `content/layout/primer.style--responsive.md:62` (44px touch target); AA floor 24px at `content/layout/primer.style--responsive.md:54` |
| Focus ring | 2px solid accent, 2px offset | **DERIVED** per gap-fill row 触控目标与焦点环; 9.06:1 against paper, above the 3:1 focus-indicator floor (`content/a11y/web.dev--a11y-focus.md:228`) |
| Drawer width | `min(86vw, 300px)` | **DERIVED** per page-design layer rule (overlay width by viewport share) |
| Scrim | `rgba(0,0,0,0.45)` | **DERIVED** per gap-fill row 弹层遮罩 |

Spacing is applied as one scale — no ad-hoc 10px/14px/22px values anywhere in the stylesheet.

---

## 6. Motion

| Token | Value | Source |
| --- | --- | --- |
| `--dur-micro` | 100ms | `content/motion/nngroup.com--animation-duration.md:80` (100ms ≈ instantaneous causal link) |
| `--dur-out` | 200ms | `content/motion/nngroup.com--animation-duration.md:84` (disappear 200ms) |
| `--dur-in` | 300ms | `content/motion/nngroup.com--animation-duration.md:84` (appear 300ms) |
| `--e-in` | `cubic-bezier(0.42, 0, 1, 1)` (`ease-in`) | `content/standards/w3c--css-easing-1.md:134` |
| `--e-out` | `cubic-bezier(0, 0, 0.58, 1)` (`ease-out`) | `content/standards/w3c--css-easing-1.md:138` |
| `--e-panel` | `cubic-bezier(0, 0.4, 0, 1)` (Atlassian ease-out-bold) | `content/motion/atlassian.design--motion.md:72` |
| Reduced motion | durations → 0.01ms, iteration 1 | `content/layout/primer.style--responsive.md:86` (respect `prefers-reduced-motion`) |

No motion exceeds 300ms; nothing animates on page load; hover uses colour only (no transform).

---

## 7. Design-point routing

| Point | Criterion that selected it | Where it lands |
| --- | --- | --- |
| `project-primer` | Developer-tool documentation intent | Whole page: three-rail docs shell, palette roles, copy tone |
| `layout-spacing-scale` | Dense reference page needs a consistent rhythm | All margins/padding from 4–64 scale |
| `type-scale-steps` + `type-body-min-size` | Long-form reading at 16px floor | 16/19/24; body 16px |
| `type-line-height-box` | Code-adjacent prose needs predictable blocks | `size + 8` everywhere |
| `type-measure-limit` | Prose lines must stay scannable | `.prose{max-width:80ch}` |
| `type-weight-restraint` | Only two emphasis levels needed | 400 / 600 |
| `type-hierarchy-recipe` | One h1, clear section stack | h1 24 → h2 19 → h3 16 |
| `color-semantic-roles` | Success / danger / info states | copied = success, invalid = danger, note = warnbg |
| `color-contrast-threshold` + `a11y-contrast-threshold` | Text and control boundaries | 4.5:1 text, 3:1 non-text, measured in §8 |
| `a11y-focus-visibility` | Keyboard path through drawer, tabs, form | 2px accent ring, 2px offset, visible on all controls |
| `motion-duration` + `motion-easing` + `motion-reduced` | Drawer and copy feedback | 100/200/300ms, three named curves, reduced-motion off switch |
| `components-table-tag` | Error-code lookup table (table half of the point; no tag chips were needed) | `<caption>`, `scope="col"`, monospace HTTP and code columns (`content/components/govuk--table.md:80`, `content/components/govuk--table.md:132`) |
| `components-button-hierarchy` | One main action per view | One primary "Validate request"; secondary tabs/Clear |
| `patterns-form-validation` | Try-it form can fail two ways | Error summary focus + `Error:` title prefix + inline messages + `novalidate` (`content/patterns/govuk--validation.md:66`, `content/patterns/govuk--validation.md:67`, `content/patterns/govuk--validation.md:111`) |
| `patterns-search-filter` | Error table is long enough to filter | Instant filter, live count `Showing N of 9`, Clear-all, empty state (`content/patterns/carbon--filtering.md:104`, `content/patterns/carbon--filtering.md:122`, `content/patterns/carbon--filtering.md:132`) |
| `components-admonitions` | One caution about `Retry-After` | Inline note, not a modal or toast |
| `patterns-global-nav` + `components-nav-aids` | Orientation in a long page | Static top bar, chapter rail, in-page TOC, skip link |
| `markdown-en-voice` | Reference prose in English | Verb-first steps, second person, no filler |

---

## 8. Delivery self-check (measured, not asserted)

Harness: real Chromium via CDP, `file://` load, no build, no server.

| Gate | Method | Result |
| --- | --- | --- |
| Horizontal overflow | `scrollWidth` vs `clientWidth` at 320/375/768/1280 | 320/320, 375/375, 768/768, 1280/1280 — no overflow |
| External resources | `performance.getEntriesByType('resource').length` at all four widths | **0** in every case |
| Line-height rule | TreeWalker over every text node, `|lineHeight − (fontSize+8)| ≤ 0.6` | **218 nodes, 0 violations** |
| Text contrast | computed colour vs nearest opaque background, WCAG formula | body 19.59, muted 9.03, nav 9.03, active nav 8.36, primary 9.06, tab 8.17, error 5.16, copied 4.82, footer 9.03, note 19.2 — min non-disabled **4.82** |
| Disabled text | same | 3.29 — WCAG-exempt for inactive controls, documented not hidden |
| Non-text contrast | border colours vs paper | input/button/code border **3.65**, active tab rule 9.06 — all ≥3:1 |
| Accent fill share | sum of accent-background element areas at 1280×900 | 6,625 px² = **0.575 %** viewport |
| Tabs | click Python → read state | active label cURL→Python, 1 visible panel, `aria-selected` moves |
| Copy | real CDP mouse press/release at button centre | badge 1, method `clipboard`, reverts to 0 after 2 s |
| Filter | type `server`, `zzz`, Clear | 9 → 3 → 0 ("Showing 0 of 9" + empty state) → 9 |
| Form (empty) | submit | 2 errors, 2 inline messages, summary shown, focus `#error-summary`, title prefixed |
| Form (valid) | fill key + log line, submit | 0 errors, result visible, key echoed masked `lr_l…7d6c` |
| Drawer 375 | open → close | closed: `visibility:hidden`; open: visible, `aria-expanded=true`, scrim shown, `aria-hidden=false`; close: hidden after the 220ms exit (harness timer throttling delayed the observed flip to ≤600ms), `aria-expanded=false`, focus back on trigger |
| TOC tracking | scroll to h3/h2 ids, dispatch scroll | h-send → "Send the request", h-read → "Read the response", error-codes, try-it, version, bottom edge → "Version & build" |
| Page height | `scrollHeight` at 1280 | 4,205 px |

---

## 9. Rework log (defects found by measurement, not by eye)

| # | Symptom | Root cause | Fix | Re-measured |
| --- | --- | --- | --- | --- |
| 1 | Desktop showed both "Close chapters" and "Chapters" | `.chapters-btn,.drawer-close{display:none}` sat before `.btn{display:inline-flex}`; equal specificity, later rule won | Moved the hide rule after `.btn` | 320/375 `inline-flex`, 768/1280 `none` |
| 2 | TOC contained "There is a problem" pointing at `#` | TOC collected every h2/h3, including the hidden error-summary heading | Filter `h.id && !h.closest('#error-summary')` | TOC = 8 real entries, no `#` href |
| 3 | Closed drawer still `visibility:visible` and reachable | `visibility` was listed in the transition; when the frame loop is constrained the discrete flip never lands | Transition `transform` only; `.closing` keeps visibility during the 200ms exit, removed by a 220ms timer | Closed → `hidden` after the 220ms exit |
| 4 | TOC/chapter highlight stuck on "Overview" while scrolling | Depended on `scroll` events, which the headless harness never dispatches | rect-based `syncActive()` on scroll/resize plus a 250ms interval fallback; also handles bottom-of-page | All headings and the bottom edge resolve correctly |
| 5 | `aria-hidden="true"` stuck on the sidebar after resizing up to desktop | Only set inside `setDrawer`, never cleared on breakpoint change | `matchMedia` change + resize handler clears `aria-hidden`/`open`/`closing` on desktop and focuses the first chapter link if focus was on the hidden close button | 1280 after resize: no `aria-hidden` |
| 6 | TOC only ever highlighted section h2s | `cur.querySelector('h2')` ignored h3 sub-steps | Track the last visible h2/h3, derive the chapter from `closest('section')` | h-send/h-read highlight individually |
| 7 | 320px metadata split `api.logreap.dev` mid-domain | Two-column `<dl>` at 320 | Stack label over value at ≤543px (Primer's 544 breakpoint) | 320/375 base URL on one line |

---

## 10. Values beyond the main source (explicitly derived)

| Value | Why it is not from Primer | Derivation rule |
| --- | --- | --- |
| Radius 4px / 8px | Primer gives no numeric radius | Gap-fill row 圆角: two steps, small on controls, large on cards |
| 1px hairline | No numeric line weight in the main source | Gap-fill row 发丝线宽 |
| Focus ring 2px + 2px offset | Primer describes focus visibility, not a pixel ring | Gap-fill row 触控目标与焦点环, contrast checked ≥3:1 |
| Drawer width `min(86vw,300px)` | No drawer spec in the library | Overlay width by viewport share |
| Scrim `rgba(0,0,0,.45)` | No overlay token | Gap-fill row 弹层遮罩 |
| Input height 40px | Only button 32px is sourced | Component-size row, 8px scale (32 + 8) |
| Code block padding 16px / 24px, table cell 12px 16px | Main source has no component padding table | 8px scale rows |
| Version chip 24px, padding 0 8px | No chip spec | 8px scale + 16px type |
| Right rail 220px, left rail 208px | Primer gives regions, not column widths | **DERIVED** — 208/220 fit the 1012px breakpoint with a ≥640px content column |
| Copy confirmation 2s | Primer shows the green check but no duration | Long enough to read 6 characters, short enough not to linger; motion row limits 100–300ms |

All other numbers in `index.html` trace to the citations in §3–§6; CSS comments carry the same `path:line` references inline.
