---
title: "GOV.UK · Component · Select 下拉选择框"
source: https://design-system.service.gov.uk/components/select/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-36
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Select 下拉选择框

> 来源：[https://design-system.service.gov.uk/components/select/](https://design-system.service.gov.uk/components/select/)

---

*   [HTML](https://design-system.service.gov.uk/components/select/#select-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/select/#select-example-nunjucks)

## When to use this component

The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.

## When not to use this component

The select component allows users to choose an option from a long list. Before using the select component, try asking users questions which will allow you to present them with fewer options.

Asking questions means you’re less likely to need to use the select component, and can consider using a different solution, such as a [Radios component](https://design-system.service.gov.uk/components/radios/).

## How it works

If you use the component for settings, you can make an option pre-selected by default when users first see it.

If you use the component for questions, you should not pre-select any of the options in case it influences users’ answers.

There are 2 ways to use the select component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

*   [HTML](https://design-system.service.gov.uk/components/select/#select-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/select/#select-second-example-nunjucks)

### Select with hint

You can add hint text to help the user understand the options and choose one of them.

Keep hint text to a single short sentence, without any full stops.

Do not use links in hint text. While screen readers will read out the link text, they usually do not tell users the text is a link.

*   [HTML](https://design-system.service.gov.uk/components/select/#select-with-hint-select-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/select/#select-with-hint-select-example-nunjucks)

### Error messages

Display an error message if the user has not selected an option.

Style error messages as shown in the example:

*   [HTML](https://design-system.service.gov.uk/components/select/#select-with-error-select-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/select/#select-with-error-select-example-nunjucks)

### Avoid adding functionality to allow selecting multiple options

The select component does not support selecting multiple options, [as there’s a history of poor usability and assistive technology support for `<select multiple>`](https://www.24a11y.com/2019/select-your-poison/). If you need to ask the user to pick more than one item from a list, it’s almost always better to use another method, such as a list of checkboxes.

## Research on this component

User research has shown that some users struggle with selects.

### Known issues and gaps

Research shows that users can struggle with selects, particularly when users have:

*   been unable to close the select
*   tried to type into the select
*   confused focused items with selected items
*   tried to pinch zoom select options on smaller devices
*   not understood that they can scroll down to see more items, or how to

For more detail watch this video with [examples of users struggling with selects](https://www.youtube.com/watch?v=-dH6a6eMdXE).

This blog shows [an example where a text input is used over a select](https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/) for asking a user for a date.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Mar 2025 | [GOV.UK Frontend v5.9.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.9.0) | The `id` parameter now defaults to match `name` if an `id` is not provided. |
| Oct 2024 | Guidance | Expanded guidance on writing hint text. |
| Dec 2023 | [GOV.UK Frontend v5.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.0.0) | Updated how the Select Nunjucks macro handles options without a `value` provided. The value would previously be set to an empty string. As of 5.0.0, the HTML attribute is not set and the control’s value is the same as the display text of the option, as is the case with native `<select>` elements. |
| Aug 2023 | Guidance | Added guidance about error messaging. |
| Apr 2023 | [GOV.UK Frontend v4.6.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.6.0) | Added `disabled` parameter and updated disabled styles. |
