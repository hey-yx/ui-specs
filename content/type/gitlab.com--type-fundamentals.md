---
title: "GitLab Pajamas · Foundation · Type Fundamentals 字体基础"
source: https://design.gitlab.com/product-foundations/type-fundamentals/
section: type
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-type-fundamentals
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Type Fundamentals 字体基础

> 来源：[https://design.gitlab.com/product-foundations/type-fundamentals/](https://design.gitlab.com/product-foundations/type-fundamentals/)

---

Text is the primary way of communicating within GitLab. A thoughtful use of semantics and visual hierarchy can provide consistency and clarity to aid in comprehension and action.

## Typefaces

Custom typefaces support a consistent core experience for users, regardless of their device. A finer control of font size, variable weight, and other attributes like disambiguation enable greater optimization of usability and polish.

The typefaces were chosen because:

- Tall x-height that improves legibility at small sizes and readability of mixed- and lower-case text.
- Features that include character disambiguation and [OpenType Font Variations](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview).
- Balanced and complementary pairing that supports the [GitLab brand expression](https://design.gitlab.com/brand-introduction).
- Open source.

### GitLab Sans

GitLab Sans, based on [Inter](https://rsms.me/inter/), is used for most user interface (UI) elements, with system fonts used as a back-up.

The quick orange tanuki jumps over the lazy dog. 1234567890

**Sans serif font stack**

```css
font-family:
  'GitLab Sans',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Noto Sans',
  Ubuntu,
  Cantarell,
  'Helvetica Neue',
  sans-serif,
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji';
```

<h3 class="gl-font-monospace">GitLab Mono</h3>

GitLab Mono, based on [JetBrains Mono](https://www.jetbrains.com/lp/mono/), is used for code-related elements, for example, code blocks, branch names, commit IDs, and pipeline IDs. The fonts are available to download in [this package](https://www.npmjs.com/package/@gitlab/fonts).

The quick orange tanuki jumps over the lazy dog. 1234567890

**Monospace font stack**

```css
font-family:
  'GitLab Mono', 'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas', 'Ubuntu Mono',
  'Courier New', 'andale mono', 'lucida console', monospace;
```

[Download the GitLab fonts ↗︎](https://gitlab-org.gitlab.io/frontend/fonts/)

## Type scales

GitLab utilizes two type scales: **dynamic** and **fixed**.

- The dynamic scale is used for any UI text within GitLab. The **500**–**800** options rely on the viewport width to dynamically change size between the **min** and **max**.
- The fixed scale is used for [Markdown](https://design.gitlab.com/product-foundations/type-markdown) (user generated content). Sizes match the **min** of the dynamic scale.

<table class="table-compact gl-mb-6">
<col>
<colgroup span="2"></colgroup>
<col>
<col>
<thead>
<tr>
<th rowspan="2">Design token</th>
<th colspan="2" class="gl-whitespace-nowrap">Dynamic scale</th>
<th rowspan="2" class="gl-whitespace-nowrap">Fixed scale</th>
<th rowspan="2">Use</th>
</tr>
<th>Min</th>
<th>Max</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>font.size.100</code></td>
<td>12px</td>
<td>12px</td>
<td>12px</td>
<td>Meta text, small labels</td>
</tr>
<tr>
<td><code>font.size.200</code></td>
<td>13px</td>
<td>13px</td>
<td>13px</td>
<td>Level 6 headings</td>
</tr>
<tr>
<td><code>font.size.300</code></td>
<td>14px</td>
<td>14px</td>
<td>14px</td>
<td>Level 5 headings, body text, input labels, help text</td>
</tr>
<tr>
<td><code>font.size.400</code></td>
<td>16px</td>
<td>16px</td>
<td>16px</td>
<td>Level 4 headings, large body text</td>
</tr>
<tr>
<td><code>font.size.500</code></td>
<td>18px</td>
<td>20px</td>
<td>18px</td>
<td>Level 3 headings</td>
</tr>
<tr>
<td><code>font.size.600</code></td>
<td>21px</td>
<td>25px</td>
<td>21px</td>
<td>Level 2 headings</td>
</tr>
<tr>
<td><code>font.size.700</code></td>
<td>24px</td>
<td>30px</td>
<td>24px</td>
<td>Level 1 headings, limited to one per page (see <a href="#semantics">Semantics</a>).</td>
</tr>
<tr>
<td><code>font.size.800</code></td>
<td>28px</td>
<td>36px</td>
<td>28px</td>
<td>A display option that can be applied to a level 1 heading to increase its prominence. This can be useful for a learning path or feature promotion. Limited to one per page.</td>
</tr>
</tbody>
</table>

Note that in implementation the variables use rem values ([relative units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)) instead of pixels ([absolute units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#absolute_length_units)), so that text respects browser settings for size and scale.

## Font-size

Text size is determined by the following parameters:

- Content type:
  - UI: default
  - Markdown: `markdown`
  - Compact Markdown: `compact-markdown`
- Media breakpoints:
  - `min-width: 0`: default
  - `min-width: 768px`: `md`
  - `min-width: 992px`: `lg`
  - `min-width: 1200px`: `xl`
- Font family:
  - Regular: default
  - Monospace: `monospace`
- Element type:
  - small paragraph / UI text: `sm`
  - medium paragraph / UI text: default
  - large paragraph / UI text: `lg`
  - headers: `h1..h6`

## Font weight

GitLab uses contrasting font weights to support visual hierarchy within the application. Generally, two weights are used by default: **400** and **600**.

<table class="table-compact gl-mb-6">
<thead>
<tr>
<th>Value</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td>Body copy and data tables</td>
</tr>
<tr>
<td style="font-weight:600;">600</td>
<td>Headings and specific UI elements, such as an input label</td>
</tr>
</tbody>
</table>

## Line-height

## Text color

There are a number of text colors defined in GitLab. Color choice depends on the location and purpose of the text.

（数值表见原文）

The disabled text color has a 3.52 contrast ratio on white, which falls short of the 4.5:1 ratio needed to pass [WCAG 2.2 SC 1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Disabled (inactive) elements are not required to have sufficient contrast, but we try to get as close as possible while still visually differentiating active and inactive text. Refer to the [forms](https://design.gitlab.com/patterns/forms#form-elements) pattern details for more information about placeholder text.

## Code reference

Typography is the most common place to accidentally rebuild the design system: a size, a weight, a line height, and a color together look like an ordinary set of utilities, but they reproduce a decision the type scale already made.

### Utilities

| Purpose     | Utilities                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Text size   | `gl-text-100` to `gl-text-800`, and the `gl-text-sm`, `gl-text-base`, and `gl-text-lg` aliases               |
| Weight      | `gl-font-normal` (`400`), `gl-font-bold` (`600`)                                                             |
| Line height | `gl-leading-16`, `gl-leading-20`, `gl-leading-24`, and the rest of the scale, `gl-leading-heading`           |
| Family      | `gl-font-monospace`                                                                                          |
| Color       | `gl-text-default`, `gl-text-subtle`, `gl-text-strong`, `gl-text-heading`, `gl-text-link`, `gl-text-disabled` |
| Wrapping    | `gl-truncate`, `gl-break-anywhere`, `gl-wrap-anywhere`, `gl-whitespace-nowrap`                               |
| Alignment   | `gl-text-left`, `gl-text-center`, `gl-text-right`                                                            |

Heading utilities are covered in [headings](https://design.gitlab.com/product-foundations/type-headings#code-reference). `gl-text-100` to `gl-text-800` map to the `font.size` steps of the [type scale](#type-scales); `gl-text-sm`, `gl-text-base`, and `gl-text-lg` are aliases for `100`, `300`, and `400`. `gl-text-base` is the default UI body size. `gl-text-xs` is below the type scale — don't use it.

Steps from `500` up are fluid: they scale with the viewport. Use the matching `gl-text-100-fixed` to `gl-text-800-fixed` utilities for [Markdown](https://design.gitlab.com/product-foundations/type-markdown) and other user-generated content.

### Size text from the scale

Text size utilities set `font-size` only; they don't carry a line height. Where the default line height isn't right for the size, pair it with a `gl-leading-*` value from the scale rather than a number of your own.

```vue
<!-- live-example expanded resizable="400" title="Line height from the scale" -->
<p class="gl-text-base gl-leading-20 gl-text-default">
  This job ran on a shared runner and finished in 3 minutes. Retry it to pick up the latest
  configuration.
</p>
```

```vue
<!-- live-example expanded resizable="400" title="Line height from a style attribute" -->
<p class="gl-text-base" style="line-height: 1.4">
  This job ran on a shared runner and finished in 3 minutes. Retry it to pick up the latest
  configuration.
</p>
```

### Use the documented weights

The product uses two weights: `400` for body copy and data tables, and `600` for headings and specific UI elements such as input labels.

```vue
<!-- live-example expanded title="Documented weight" -->
<span class="gl-font-bold">Total</span>
```

```vue
<!-- live-example expanded title="Undocumented weight" -->
<span class="gl-font-semibold">Total</span>
```

`gl-font-bold` is `600` in this preset, not `700`. `gl-font-semibold` resolves to `500`, which isn't one of the two weights the type system defines, so it reads as a near-miss against everything around it.

Weight is also not emphasis. Use `<strong>` or `<em>` when the meaning matters, so the emphasis reaches assistive technology as well as the eye.

### Use semantic text colors

Text color follows the same rule as everything else: semantic utilities only. See [color](https://design.gitlab.com/product-foundations/color#code-reference) for the full set and [type fundamentals](#text-color) for what each one is for.

```vue
<!-- live-example expanded title="Semantic text color" -->
<p class="gl-text-subtle">Updated 2 hours ago</p>
```

```vue
<!-- live-example expanded color-mode="dark" title="Color scale text color" -->
<p class="gl-text-gray-500">Updated 2 hours ago</p>
```

### Handle long text deliberately

Branch names, project paths, and user-entered values have no length limit.

- `gl-truncate` for single-line truncation with an ellipsis. When it sits inside a flex item, that item needs `gl-min-w-0` — see [truncate inside a flex container](https://design.gitlab.com/product-foundations/layout#truncate-inside-a-flex-container).
- `gl-break-anywhere` or `gl-wrap-anywhere` for long unbroken strings that must stay fully visible.
- `gl-whitespace-nowrap` only where wrapping would break meaning, such as a keyboard shortcut. It makes the element as wide as its content, so it needs a container that can handle that.

Truncated text always needs another way to read the full value. A [tooltip](https://design.gitlab.com/components/tooltip) is enough for reference content; if the user needs the value to complete a task, keep it available in the UI.

### Common pitfalls

#### Styling visually hidden text

```vue
<span class="gl-sr-only gl-text-lg gl-font-bold">3 open issues</span>
```

`gl-sr-only` removes the element from the visual layout, so neither the weight nor the size has any effect. Screen readers don't convey visual styling. Remove the styling and keep the class list honest about what the element does.

#### Two size or color utilities on the same element

```vue
<!-- live-example expanded title="Two size and two color utilities" -->
<p class="gl-text-base gl-text-sm">Which size is this?</p>
<p class="gl-text-danger gl-text-subtle">Which color is this?</p>
```

Each pair sets one property twice. The winner is decided by the order of the compiled stylesheet, not the order in the class attribute, so you can't tell which value applies by reading the markup — here `gl-text-sm` wins the first pair and `gl-text-subtle` wins the second. The color pair is also a design question rather than a formatting one: subtle and danger express different intents, so decide which one the text is. See [declare each property once](https://design.gitlab.com/product-foundations/css#declare-each-property-once) for how your editor can flag these as you type.
