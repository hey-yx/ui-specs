---
title: "NHS.UK · Typography 字体排印"
source: https://service-manual.nhs.uk/design-system/styles/typography
section: type
tag: "规范"
fetched: 2026-10-20
status: full
id: type-16
publisher: "NHS.UK"
---

# NHS.UK · Typography 字体排印

> 来源：[https://service-manual.nhs.uk/design-system/styles/typography](https://service-manual.nhs.uk/design-system/styles/typography)

---

## Styles – Typography

Our fonts and typographic styles, and how to apply them.

## Font

### Frutiger

Frutiger is the brand font for the NHS. NHS England has a licence for 3 weights of the font which NHS organisations in England can sign up to use.

[Find out more about registering for a free licence](https://service-manual.nhs.uk/design-system/styles/use-frutiger-font).

The web font is referenced in the NHS.UK frontend.

### Fallback font

Default to Arial when Frutiger isn't available.

`font-family: "Frutiger W01", Arial, sans-serif;`

## Headings

Use heading tags such as `<h1>`, `<h2>` and so on, to tag the headings on a page. Apply a heading class, such as `nhsuk-heading-l`, to style them visually. Style headings consistently to create a clear content structure throughout your service.

Find out more about writing and structuring [headings in the content guide](https://service-manual.nhs.uk/content/formatting#headings).

### Headings in transactional journeys

For question pages and short content pages across a transactional journey, use `nhsuk-heading-l` for the main page heading `<h1>`, followed by `nhsuk-heading-m` for `<h2>` and so on.

If you're designing a form, read about [making labels and legends headings (GOV.UK)](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

```
<h1 class="nhsuk-heading-l">nhsuk-heading-l</h1>
<h2 class="nhsuk-heading-m">nhsuk-heading-m</h2>
<h3 class="nhsuk-heading-s">nhsuk-heading-s</h3>
<h4 class="nhsuk-heading-xs">nhsuk-heading-xs</h4>
```

### Headings in long content and other types of pages

Some pages benefit from a larger `<h1>` to allow for better visual balance and more heading levels. Examples include:

*   longer content pages
*   start pages
*   dashboards

For these pages, start with `nhsuk-heading-xl` for the `<h1>`, `nhsuk-heading-l` for `<h2>`, and so on.

```
<h1 class="nhsuk-heading-xl">nhsuk-heading-xl</h1>
<h2 class="nhsuk-heading-l">nhsuk-heading-l</h2>
<h3 class="nhsuk-heading-m">nhsuk-heading-m</h3>
<h4 class="nhsuk-heading-s">nhsuk-heading-s</h4>
<h5 class="nhsuk-heading-xs">nhsuk-heading-xs</h5>
```

### Headings with captions

Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above or below it.

(Do not confuse headings with captions with [table captions](https://service-manual.nhs.uk/design-system/components/table#table-captions).)

```
<span class="nhsuk-caption-xl">nhsuk-caption-xl</span>
<h1 class="nhsuk-heading-xl">nhsuk-heading-xl</h1>

<span class="nhsuk-caption-l">nhsuk-caption-l</span>
<h1 class="nhsuk-heading-l">nhsuk-heading-l</h1>

<span class="nhsuk-caption-m">nhsuk-caption-m</span>
<h1 class="nhsuk-heading-m">nhsuk-heading-m</h1>
```

If the caption should be considered part of the page heading, you can also nest the caption within the `<h1>`, using the appropriate heading and caption classes.

```
<h1 class="nhsuk-heading-l">
  <span class="nhsuk-caption-l">nhsuk-caption-l</span>
  nhsuk-heading-l
</h1>
```

## Labels and legends

Style form field labels and fieldset legends to match heading sizes for visual hierarchy.

When using Nunjucks, you can set the size of labels and legends using the `size` option, for example: `size: "l"`. You can use sizes `s`, `m`, `l`, `xl`.

### Styling labels

*   [HTML code for typography styling labels](#typography-styling-labels-example-html)
*   [Nunjucks code for typography styling labels](#typography-styling-labels-example-nunjucks)

*   [HTML code for typography styling legends](#typography-styling-legends-example-html)
*   [Nunjucks code for typography styling legends](#typography-styling-legends-example-nunjucks)

See how to [use labels and legends on question pages](https://service-manual.nhs.uk/design-system/patterns/question-pages#using-legends-labels-and-captions).

## Paragraphs

### Body

The default paragraph font size is 19px on large screens and 16px on small screens.

```
<p class="nhsuk-body">nhsuk-body</p>
```

You can also add classes to create a lead paragraph or smaller body copy to convey hierarchy in your page.

### Lead paragraph

A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content. Lead paragraphs use 26px type on desktop and should only be used once per page if needed.

```
<p class="nhsuk-body-l">nhsuk-body-l</p>
```

### Body small

You can use the `nhsuk-body-s` class sparingly to make your paragraph font size smaller: 16px on larger screens and 14px on smaller screens.

The majority of your body copy should use the standard 19px paragraph size.

```
<p class="nhsuk-body-s">nhsuk-body-s</p>
```

### Bold, italics and underlining

Do not use italics or underlining (except for [links](#links), which are underlined by default). Use bold sparingly.

Find out more about [bold, italics and underlining on the Formatting page in the content guide](https://service-manual.nhs.uk/content/formatting#bold-italics-and-underlining).

## Font override classes

You might need to set the font size or font weight of an element outside of the predefined heading and paragraph classes. For this you can use the font override classes in your HTML or reference the typography mixins in your own components.

### Font size

The full NHS.UK typography scale goes from 14px up to 64px on large screens. You can add these font size override classes to any other typographic class or element and they will change the font size.

```
<p class="nhsuk-u-font-size-64">nhsuk-u-font-size-64</p>
<p class="nhsuk-u-font-size-48">nhsuk-u-font-size-48</p>
<p class="nhsuk-u-font-size-36">nhsuk-u-font-size-36</p>
<p class="nhsuk-u-font-size-26">nhsuk-u-font-size-26</p>
<p class="nhsuk-u-font-size-22">nhsuk-u-font-size-22</p>
<p class="nhsuk-u-font-size-19">nhsuk-u-font-size-19</p>
<p class="nhsuk-u-font-size-16">nhsuk-u-font-size-16</p>
<p class="nhsuk-u-font-size-14">nhsuk-u-font-size-14</p>
```

### Font weight

As with the font size, you can add a font weight override class to any other typographic class or element to change the font weight to regular or bold weight.

```
<p class="nhsuk-u-font-weight-normal">nhsuk-u-font-weight-normal</p>
<p class="nhsuk-u-font-weight-bold">nhsuk-u-font-weight-bold</p>
```

### Breaking up long words

Long words, including email addresses, can create problems in limited spaces such as mobile device screens and data tables. They can overflow the layout, making users scroll horizontally to view some of your content.

You can help to reduce these issues by surrounding content likely to overflow with `nhsuk-u-text-break-word`.

When words are longer than the width of the container, this class splits them onto multiple lines. It makes the split exactly where the word would otherwise overflow, but this can make it difficult to read. You can control where a word can be split. There are 2 ways to do this.

#### Break with hyphen

Insert the `&shy;­` HTML tag into the word at all the points where it's OK to break it up. It will add a hyphen where it breaks and will move the rest of the word to the next line.

Only use `&shy;­` for long words. Do not use it for email addresses, for example, as it will insert a hyphen which users may mistake for part of the email address.

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half">
    <p><code>nhsuk-u-text-break-word</code></p>
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-one-third nhsuk-u-one-third">
        <div class="nhsuk-card">
          <p class="nhsuk-u-text-break-word">hyperparathyroidism</p>
        </div>
      </div>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half">
    <p><code>&amp;shy;</code></p>
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-one-third nhsuk-u-one-third">
        <div class="nhsuk-card">
          <p class="nhsuk-u-text-break-word">hyper&shy;para&shy;thyroidism</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Break without hyphen

Insert the `<wbr>` HTML tag into your word at all the points where it's OK to break it up and add a line break. This is useful for long email addresses.

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half">
    <p><code>nhsuk-u-text-break-word</code></p>
    <div class="nhsuk-card">
      <p>We'll send an email to: <span class="nhsuk-u-text-break-word">communications@nettlegrovehealthpartnershipfamilypractice.nhs.net</span>.</p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half">
    <p><code>&lt;wbr&gt;</code></p>
    <div class="nhsuk-card">
      <p>We'll send an email to: <span class="nhsuk-u-text-break-word">communications@<wbr>nettlegrove<wbr>health<wbr>partnership<wbr>family<wbr>practice.nhs.net</span>.</p>
    </div>
  </div>
</div>
```

There is also an example of [breaking long email addresses in the table component](https://service-manual.nhs.uk/design-system/components/table#word-breaks-table).

## Links

Links are blue and underlined by default with a [styled focus state](https://service-manual.nhs.uk/design-system/styles/focus-state) for people who use keyboards or other devices to navigate through a page.

If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

```
<a href="#" class="nhsuk-link">Link</a>
```

If it's not helpful to distinguish between visited and unvisited states, for example when linking to pages with frequently-changing content, such as the dashboard for an admin interface, use the `nhsuk-link--no-visited-state` modifier class.

```
<a href="#" class="nhsuk-link nhsuk-link--no-visited-state">Link nhsuk-link--no-visited-state</a>
```

If the link is on a dark background, for example in custom components, use the `nhsuk-link--reverse` modifier class to make the text white.

The white links and background colour must have a contrast ratio of at least 4.5:1 to meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA (W3C)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

```
<a href="#" class="nhsuk-link nhsuk-link--reverse">Example link</a>
```

## Lists

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

```
<ul class="nhsuk-list">
  <li><a href="#">Money, work and benefits</a></li>
  <li><a href="#">Care after a hospital stay</a></li>
  <li><a href="#">Support and benefits for carers</a></li>
</ul>
```

### Bulleted lists

Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

```
<p>Symptoms can include:</p>
<ul class="nhsuk-list nhsuk-list--bullet">
  <li>tiredness and lack of energy</li>
  <li>shortness of breath</li>
  <li>noticeable heartbeats (heart palpitations)</li>
  <li>pale skin</li>
</ul>
```

### Numbered lists

Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence.

```
<h3>How to gargle with salt water</h3>
<ol class="nhsuk-list nhsuk-list--number">
  <li>Dissolve half a teaspoon of salt in a glass of warm water.</li>
  <li>Gargle with the solution then spit it out – don't swallow it.</li>
  <li>Repeat as often as you like.</li>
</ol>
```

## Section break

You can use the `nhsuk-section-break` classes on an `<hr>` element to create a thematic break between sections of content. `nhsuk-section-break` has class-based modifiers for different size margins.

By default `nhsuk-section-break` is only visible by its margin. You can add the `nhsuk-section-break--visible` class to make it visible with a separator line.

```
<hr class="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible">
<hr class="nhsuk-section-break nhsuk-section-break--l nhsuk-section-break--visible">
<hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">
<hr class="nhsuk-section-break nhsuk-section-break--visible">
```

## Text alignment

Left align text in English. Text is left-aligned by default.

The straight edge of left-aligned text helps people who use screen magnifiers. It saves them having to search around the screen for the next line or item. People who use magnifiers may miss things that are not left-aligned.

Some people with cognitive differences have difficulty with blocks of text that are justified (aligned to left and right margins). Only centre align or fully justify text if you can show a clear clinical or user need.

For translations into languages that run right to left (like Arabic), right align instead.

### Text alignment override classes

You need to use the text alignment override class in your HTML to right align text.

Here is an example of Arabic.

```
<p class="nhsuk-u-text-align-right">تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار</p>
```

## Research

We've tested our typography with lots of users including, for example, people with dyslexia and colour blindness.
