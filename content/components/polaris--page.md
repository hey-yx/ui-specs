---
title: "Shopify Polaris · Page 页面骨架"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/page
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-page
publisher: "Shopify Polaris"
---

# Shopify Polaris · Page 页面骨架

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/page](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/page)

---

The page component provides a styled page layout within your app, including breadcrumbs, page actions, and content areas with automatic spacing. Use page as the outermost container for your App Home extension.

Page handles the top-level structure of your app's interface, including the heading, primary and secondary actions, and optional breadcrumb navigation. Nest [section](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/section) components inside page to organize content into logical groups.

#### Use cases

* **App layouts:** Use as the main container for your app's primary interface with automatic spacing and preset layouts.
* **Resource management:** Create resource management pages with headings, primary actions, and secondary navigation.
* **Settings pages:** Build settings or configuration pages with structured content and aside panels.
* **Detail views:** Display resource detail pages with breadcrumb navigation and contextual actions.

```html
<s-page heading="Products">
  <s-section>
    <s-text>Hello World</s-text>
  </s-section>
</s-page>
```

## Properties

Use as the outer wrapper of a page.

* **heading**

  **string**

  The main page heading

* **inline​Size**

  **"small" | "base" | "large"**

  **Default: 'base'**

  The inline size of the page

  * `base` corresponds to a set default inline size
  * `large` full width with whitespace

### Slots

The page component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **aside**

  **HTMLElement**

  The content to display in the aside section of the page.

  This slot is only rendered when `inlineSize` is "base".

* **breadcrumb-actions**

  **HTMLElement**

  The navigation back actions for the page.

  Only accepts link components.

* **children**

  **HTMLElement**

  The main page content displayed within the page component, which serves as the primary container for the page's information and interface elements.

* **primary-action**

  **HTMLElement**

  The primary action for the page.

  Only accepts a single button component with a `variant` of `primary`.

* **secondary-actions**

  **HTMLElement**

  The secondary actions for the page.

  Only accepts button group and button components with a `variant` of `secondary` or `auto`.

* **supplemental-start**

  **HTMLElement**

  A slot for content that comes before the main content, such as an `s-banner`.

### Organize content with sections

Create a consistent page structure with automatic spacing. This example combines a heading with organized content sections.

```html
<s-page heading="Products">
  <s-section>
    <s-text>Hello World</s-text>
  </s-section>
</s-page>
```

### Use small width for forms

Create a focused layout for forms and simple workflows. This example uses the `inlineSize="small"` setting for narrower content.

### Use large width for dashboards

Display data-rich content like dashboards or analytics. This example uses the `inlineSize="large"` setting for wider layouts.

### Add breadcrumb navigation

Help merchants understand where they are in your app. This example adds a breadcrumb link back to a parent page.

### Add page actions

Provide quick access to common operations from the page header. This example adds primary and secondary action buttons.

### Edit page with all slots

Combine all page features for complex editing workflows. This example integrates breadcrumbs, actions, form content, and an aside panel.

## Best practices

* Always provide a heading that describes the current page.
* Include breadcrumbs when the page is part of a multi-page flow so merchants can navigate back.
* Include page actions in the header only if they're relevant to the entire page.
* Include no more than one primary action and three secondary actions per page.
* Don't include actions at the bottom of the page.

## Limitations

* The `inlineSize` property only accepts `small`, `base` (default), or `large` values.
* Breadcrumb actions only support link and button components.
* The `aside` slot is only visible when `inlineSize` is set to `base`.
