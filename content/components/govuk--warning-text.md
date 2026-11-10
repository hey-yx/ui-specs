---
title: "GOV.UK · Component · Warning text 警告文字"
source: https://design-system.service.gov.uk/components/warning-text/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-46
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Warning text 警告文字

> 来源：[https://design-system.service.gov.uk/components/warning-text/](https://design-system.service.gov.uk/components/warning-text/)

---

*   [HTML](https://design-system.service.gov.uk/components/warning-text/#warning-text-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/warning-text/#warning-text-example-nunjucks)

## When to use this component

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.

## How it works

There are 2 ways to use the warning text component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

*   [HTML](https://design-system.service.gov.uk/components/warning-text/#warning-text-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/warning-text/#warning-text-second-example-nunjucks)

You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Oct 2024 | [GOV.UK Frontend v5.7.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.7.0) | Fixed text not appearing in bold if user agent styles were overridden. |
| Apr 2024 | [GOV.UK Frontend v5.3.1](https://github.com/alphagov/govuk-frontend/releases/tag/v5.3.1) | Updated the icon colours to use the root text and background colours, rather than hardcoded as black and white. This allows the Warning text icon to change appearance if these colours are customised by a user. |
| Dec 2023 | [GOV.UK Frontend v5.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.0.0) | Removed styles associated with the `govuk-warning-text__assistive` CSS class. Use the `govuk-visually-hidden` class instead. |
| Apr 2023 | [GOV.UK Frontend v4.6.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.6.0) | Set a default value for the `iconFallbackText` parameter, so it no longer needs to be specifed manually. |
| May 2021 | [GOV.UK Frontend v3.12.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.12.0) | Fixed icon outline appearing clipped when using Microsoft Edge in forced colours mode. |
