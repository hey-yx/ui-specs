---
title: "Primer · Typography 字体"
source: https://raw.githubusercontent.com/primer/design/main/content/foundations/typography.mdx
section: type
tag: "规范"
fetched: 2026-10-19
status: full
id: type-2
publisher: "GitHub Primer"
---

# Primer · Typography 字体

> 来源：[https://raw.githubusercontent.com/primer/design/main/content/foundations/typography.mdx](https://raw.githubusercontent.com/primer/design/main/content/foundations/typography.mdx)

---

---
title: Typography
description: Text sizes, weights and font families used across GitHub.
---

The following typographic styles are not yet fully integrated into Primer components or CSS utilities

## Typographic styles

### Overview

Typography design tokens use `rem` units for a more [accessible](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) browser zoom experience. Additionally, line height values are unitless and vary per style, making them align to the 4px grid. Each style is opinionated, as reflected in the “shorthand” tokens which control size, family, weight, and line-height with a single `font` CSS declaration.



### Headings



### Body



### Code



## Font weight

Font weight options include light, normal, medium, and semibold.



## Font family

Each font stack uses system fonts, which are optimized for performance.



## Best practices

### Hierarchy

When establishing hierarchy for GitHub products, designers should remember that we stress efficient, clean reading experiences for our users. Refrain from utilizing color as a primary method of emphasis.

### Readability

- **Line height**—Utilize line-height tokens for proper alignment.

- **Line length**—It's considered a good practice to keep lines around 80 characters or less—[W3 Page Structure Guidelines](https://www.w3.org/WAI/tutorials/page-structure/styling/). Cases vary depending on the situation, but this serves as a general rule of thumb for designing layouts.

- **Type alignment**—Our content is typically left-aligned and ragged right. Be sensible in deviating from this standard, as justifying, centering, and right-aligning text is atypical of GitHub products.

- **Font weight**—Adjust font weight to add emphasis and differentiate content hierarchy.

- **Letter spacing**—Please refrain from altering letter-spacing on our products. There may be rare scenarios in which this is acceptable, but generally speaking, this should be avoided altogether.


  
    <img
      src="https://user-images.githubusercontent.com/18661030/234685417-f1cbb3b6-dfdf-4594-9b96-357569aaa688.png"
      role="presentation"
      width="456"
      alt="A button with text in all caps"
    />
    Use weight CSS variables to set font-weight
  
  
    <img
      src="https://user-images.githubusercontent.com/18661030/234685419-2f935ad2-5f78-4b23-8529-274030ea6039.png"
      role="presentation"
      width="456"
      alt="A button with text in all caps"
    />
    Don't use arbitrary weight number values for font-weight
  



  
    <img
      src="https://user-images.githubusercontent.com/18661030/234685422-963b8278-e6d0-49c9-9943-1f781975c21a.png"
      role="presentation"
      width="456"
      alt="A button with text in all caps"
    />
    Use semantic title markup combined with styles
  
  
    <img
      src="https://user-images.githubusercontent.com/18661030/234685425-ba616cab-d7e6-445e-9ed2-33425a4efd30.png"
      role="presentation"
      width="456"
      alt="A button with text in all caps"
    />
    Don’t adjust semantic heading tag order to achieve a specific visual design
  


## Related components

- [Heading](/components/heading)
- [PageHeader](/components/page-header)
- [Text](/components/text)

export const meta = {displayName: 'Typography'}
