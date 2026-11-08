# FINDINGS — PayloadDeck API docs

Run: `examples/payloaddeck/` · 2026-11-07 · single-file page, no build, verified over `file://`.

---

## 1. Where this draft lands against the pass line

All figures below were produced in the same browser session as the delivered file. No estimates.

| Check | Pass line | Measured |
| --- | --- | --- |
| Horizontal overflow at 320 / 375 / 768 / 1280 | `scrollWidth === clientWidth` | 320/320, 375/375, 768/768, 1280/1280 |
| External requests | 0 | `performance.getEntriesByType('resource').length === 0` at all four widths |
| Line-height rule (`font-size + 8`) | 0 violations | **218 text nodes, 0 violations** (tolerance 0.6px) |
| Text contrast | ≥ 4.5:1 | min non-disabled **4.82:1** (`Copied` label); body 19.59, muted 9.03, error 5.16, active tab 8.17 |
| Non-text boundaries | ≥ 3:1 | input / button / code border **3.65:1**; active tab rule 9.06:1 |
| Accent share | ≤ 5 % of viewport | **0.575 %** (6,625 px² at 1280×900) |
| Tabs | state changes, one panel | cURL → Python, 1 visible panel |
| Copy | confirmation, then revert | badge appears (Clipboard API) and clears after 2 s |
| Filter | live count + clear + empty state | 9 → 3 (`server`) → 0 (`Showing 0 of 9` + empty state) → 9 |
| Form | error summary + inline + title | empty submit: 2 errors, 2 inline messages, focus `#error-summary`, title prefixed; valid submit: 0 errors, result visible |
| Drawer | closed not reachable, open labelled | closed `visibility:hidden`; open `aria-expanded=true`, scrim shown; closes after the 220 ms exit (observed hidden by 600 ms under harness timer throttling), focus returns |
| TOC tracking | follows h2/h3 and page end | "Send the request", "Read the response", "Error codes", "Version & build" all resolve |

The page is 4,205 px tall at 1280×900, 33,651 bytes, one file, zero dependencies.

---

## 2. Numeric gaps and how they were filled

The gap table lives at `site/dist/ai/guide.md:33`–`site/dist/ai/guide.md:52` ("基准规范缺口与派生"). Each row was applied as written; nothing was improvised per component.

| Gap | Row | Handling | Evidence |
| --- | --- | --- | --- |
| Colour values | `site/dist/ai/guide.md:46` (`色值`) | Primer defines roles but ships no hex (its value tables are images, `content/color/primer.style--color.md:67`). Took the **GOV.UK palette as one whole set** — paper, canvas, tint, ink, muted, subtle, hair, accent, hover, success, danger, warning bg/stripe | 14 tokens, each cited to `content/color/govuk--colour.md:<line>` in the CSS and in DECISIONS §3 |
| Type scale | `site/dist/ai/guide.md:47` (`字阶`) | Took the **GOV.UK type scale as one whole set**: 16 / 19 / 24 px | `content/type/govuk--type-scale.md:100`, `content/type/govuk--type-scale.md:92`, `content/type/govuk--type-scale.md:84` |
| Line height | `site/dist/ai/guide.md:47` ("行高同源定") vs run brief | The brief's hard rule (`font-size + 8`) wins. This is a **recorded divergence**: GDS's own table pairs 19px with 25px, the brief pairs it with 27px | Formula source `content/type/tdesign.tencent.com--fonts.md:67`; DECISIONS §4 |
| Spacing | `site/dist/ai/guide.md:38` (`间距`) | **Atlassian 8px base**, one scale 4–64 px, no locally invented steps | `content/layout/atlassian.design--spacing.md:32`, `content/layout/atlassian.design--spacing.md:70`–`content/layout/atlassian.design--spacing.md:150` |
| Motion durations | `site/dist/ai/guide.md:39` (`动效时长与缓动`) | **NN/g 100 / 200 / 300 ms**; enter 300 ms, exit 200 ms (enter longer than exit) | `content/motion/nngroup.com--animation-duration.md:80`, `content/motion/nngroup.com--animation-duration.md:84` |
| Easing | `site/dist/ai/guide.md:39` | Named curves only, no invented bezier: `ease-in` and `ease-out` from W3C, Atlassian's panel curve | `content/standards/w3c--css-easing-1.md:134`, `content/standards/w3c--css-easing-1.md:138`; `content/motion/atlassian.design--motion.md:72` |
| Radius | `site/dist/ai/guide.md:40` (`圆角`) | Two derived steps, 4 / 8 px, used everywhere | marked **derived** in DECISIONS §10 |
| Hairline | `site/dist/ai/guide.md:42` (`发丝线宽`) | 1 px derived for decorative rules; control boundaries use `#858686` at 3.65:1 instead | measured border contrast |
| Component sizes | `site/dist/ai/guide.md:45` (`组件尺寸`) | Derived and consistent: 32 px buttons, 40 px inputs, 24 px version chip, 12/16 px cell padding | DECISIONS §10 |
| Touch target + focus ring | `site/dist/ai/guide.md:51` (`触控目标与焦点环`) | 44 px targets at ≤767 px; focus ring 2 px solid accent + 2 px offset, 9.06:1 | `content/layout/primer.style--responsive.md:62`; `content/a11y/w3c--wcag-2.2.md:871` |
| Overlay scrim | `site/dist/ai/guide.md:50` (`弹层遮罩`) | One scrim `rgba(0,0,0,0.45)`, no second layer | derived, one value globally |
| Line length | `site/dist/ai/guide.md:48` (`正文行长`) | **No gap**: the main source caps lines at ~80 characters, so the 60–75 fallback was not used | `content/type/primer.style--typography.md:67` |
| Colour-as-text | `site/dist/ai/guide.md:43` (`色阶当文字`) | Every text colour recomputed against its real background; accent on tint 8.36:1, hover on white 12.05:1; the pale warning stripe is decoration only, never text | measured values in DECISIONS §3 |
| First-screen share | `site/dist/ai/guide.md:49` | **Not applicable**: no hero, the page opens on the reference itself | — |
| Numeric font / money / chart geometry | `site/dist/ai/guide.md:41`, `site/dist/ai/guide.md:44`, `site/dist/ai/guide.md:52` | **Not applicable**: no numerals-in-columns, no prices, no charts | — |

Two-source rule respected: primer owns structure, tone and semantic roles; GOV.UK owns the palette and type scale; Atlassian owns spacing; NN/g + W3C own motion. No value is blended from two palettes or two scales.

---

## 3. New gaps (not covered by the library as it stands)

These are the places where this build needed a decision the library does not currently supply. All are candidates for backfill.

1. **Docs shell geometry.** Primer's split-page article describes regions but gives no column widths. This page uses 208 px / fluid / 220 px at ≥1012 px, chosen so the content column stays ≥640 px. No source exists for those two numbers; they are recorded as derived, but a `docs shell` pattern with tested widths would remove the guesswork.
2. **In-page TOC behaviour.** No article states how the current heading should be marked (this build uses `aria-current` on both rails, chapter = `location`, TOC = `true`), nor how to handle the last section at the bottom of the page (this build force-selects the final heading when the scroll is at the end).
3. **Code block chrome.** Tabs inside a code sample, a copy button with a transient success label, and long-line handling are standard in developer docs; the library has no component entry for any of the three. The success label borrows Primer's green check rule (`content/patterns/primer--notification-messaging.md:81`, `content/patterns/primer--notification-messaging.md:85`) but the 2 s duration is invented.
4. **Drawer width and scrim on docs rails.** The navigation article says the sidebar becomes a menu on narrow viewports (`content/patterns/primer--navigation.md:185`) but gives no width, no scrim, and no breakpoint. `min(86vw,300px)` and 767 px are both derived.
5. **Filter over a table.** Carbon covers filter categories and clear-all (`content/patterns/carbon--filtering.md:122`, `content/patterns/carbon--filtering.md:132`) but not the combined "filter input + live count + empty state" unit used here; the wording `Showing N of 9` is invented.
6. **Validation on a two-field demo form.** GOV.UK covers the error summary and inline messages in detail (`content/patterns/govuk--validation.md:66`–`content/patterns/govuk--validation.md:68`), but not the case where the whole form is a code sample that also has a success result panel; hiding the result on error is this build's choice.

---

## 4. Known limits

- **Static file only.** Opened as `file://`; no server, no build step, no framework. Verified in Chromium via CDP.
- **Harness limits that shaped the implementation.** The headless session does not advance `requestAnimationFrame` or CSS transitions, does not dispatch native `scroll` events on programmatic scroll, and refuses `navigator.clipboard` without a real user gesture. Two implementation choices exist because of this: the drawer exit uses a timer-removed `.closing` class instead of transitioning `visibility`, and the TOC has a 250 ms `setInterval` fallback next to the normal `scroll` listener. Both are correct in a real browser; the fallback also covers browsers that throttle scroll handlers.
- **Copy fallback not exercised.** The code prefers `navigator.clipboard` and falls back to a hidden `<textarea>` + `execCommand`. The success path was verified through a real mouse gesture; the fallback branch was not triggered in this browser.
- **JavaScript-dependent interactions.** Tabs, copy, filter and the try-it result need JS. Without it the page still reads end to end: the cURL panel is the default visible tab, all sections and the error table render, and the form carries `novalidate` so the browser never shows native validation bubbles; it simply cannot validate or return a result.
- **Single theme.** Light only; no dark mode tokens, because the intent did not ask for one and the palette set is single-valued.
- **Contrast figures are for the delivered palette.** Any palette swap requires recomputing the whole table; the disabled state (3.29:1) is deliberately below AA and relies on the WCAG inactive-control exemption.
