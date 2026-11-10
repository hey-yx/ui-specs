---
title: "IBM Carbon · Select 下拉选择用法"
source: https://carbondesignsystem.com/components/select/usage/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-carbon-select
publisher: "IBM Carbon"
---

# IBM Carbon · Select 下拉选择用法

> 来源：[https://carbondesignsystem.com/components/select/usage/](https://carbondesignsystem.com/components/select/usage/)

---

Select [with AI label](https://react.carbondesignsystem.com/?path=/story/components-select--with-ai-label) is now stable. This addition changes the visual appearance of the component and introduces an AI explainability feature when AI is present in the component. See the [AI presence](https://www.carbondesignsystem.com/building-blocks/core/components/select/guidelines#ai-presence) section for more details.

## Live demo

---

---

This live demo contains only a preview of functionality and styles available for this component. View the [full demo](https://react.carbondesignsystem.com/?path=/story/components-select--default&globals=theme:white) on Storybook for additional information such as its version, controls, and API documentation.

## Overview

The select component collects user-provided information from a list of options. Selects are usually used in forms where a user submits data and chooses one option from a list.

![Select component](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-1.png)

### When to use

            - Use the select component inside a form where users are selecting from a list of options and submitting data.
            - When the experience is mostly form-based.

### When not to use

It is best practice not to use a select if there are fewer than three options for selection. In this case, use a [radio button](https://www.carbondesignsystem.com/building-blocks/core/components/radio-button/guidelines) group instead.

### Select versus Dropdown

While the select and [dropdown](https://www.carbondesignsystem.com/building-blocks/core/components/dropdown/guidelines) components look similar, they have different functions.

            - A select presents a list of options from which the users can select only one item from that list. It works best in forms when users choose an option from the select list and submit data.
            - A dropdown presents a list of options that users can select one or several options from that list. Dropdown options are used for taking an action, filtering, or sorting existing content.
Another important difference between the two components is the underlying code. The select list appearance will be determined by the browser being used, while the dropdown list can be styled as needed.

![Dropdown versus Select](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-2.png)

Example of a select list of options for data submission on the left versus a dropdown list of actionable options on the right.

### Variants

| Variant | Purpose |
| --- | --- |
| *Default* | Typically used in forms with a variety of other components. |
| *Inline select* | Used when there are multiple select fields within a form. |

#### Default select

Default selects are used in forms with other components.

![Example of a default select](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-3.png)

#### Inline select

Inline select is useful when you have multiple select fields within a form. Inline selects have less visual weight on a page because they are borderless.

![Example of an inline select](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-4.png)

## Formatting

### Anatomy

![Select anatomy default](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-anatomy-default.png)

            1. **Labels:** Text that informs the user what to expect in the list of dropdown options.
            2. **Default option:** An empty option selected by default. The user can decide whether to choose a different option from the list. Depending on the use case, this defaulted behavior can be modified to be a prefilled selection to the first option in the list, which is typically shown in alphabetical order, or the prefilled selection could be a frequent or commonly used option that is on the list.
            3. **Helper text** (optional, except for error and warning): Assistive text to help the user choose the right selection. Helper text is shown in a tooltip for fluid styles.
            4. **Field:** Persists when the dropdown is open or closed.
            5. **Option:** A choice for the user, shown with other choices in a list.
            6. **List:** A list of options to choose from, displayed as an open state.
            7. **Status icon:** Indicates the state of the select, either error or warning.
            8. **Error or Warning text**: Replaces the helper text when an error or warning state appears.

### Styling

There are two styles of select inputs, default and fluid. They share the same functionality but look visually different, influencing where to use them.

| Style | Appearance | Use case |
| --- | --- | --- |
| Default | A traditional style where the label is positioned outside and above the input field. | Use when white space is needed between input components or in productive moments where space is at a premium, and smaller components are needed. |
| Fluid | An alternative style where the label is placed inside of the input field and is stacked inline with the user input text. | Use in expressive moments, fluid forms, contained spaces, or attached to complex components, like a toolbar. |
![Default and fluid select styles](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-styling.png)

### Sizing

#### Default input heights

There are four sizes of search: extra small, small, medium, and large. Use consistent component sizes throughout a layout to maintain alignment and visual harmony.

| Default size | Height (px/rem) | Use case |
| --- | --- | --- |
| Extra small (xs) | 24 / 1.5 | Use for highly dense layouts where maximizing information within limited space is a priority. |
| Small (sm) | 32 / 2 | Use for compact interfaces that require reduced component height while maintaining comfortable readability and interaction. |
| Medium (md) | 40 / 2.5 | Use as the default and most commonly used size. Use when no specific density or spacing requirement exist. |
| Large (lg) | 48 / 3 | Use in spacious layouts where increased emphasis and easier interaction are important. |
![Select default sizes](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-sizes-fixed.png)

Sizes for select: extra small, small, medium, and large

#### Fluid input height

There is only one input height at 64px and it is visually larger than the default input height. The list height is controlled by the browser.

![Select fluid size](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-sizes-fluid.png)

Fluid input height size for select

#### Width

There is no minimum or maximum width for a select. The width can be customized appropriately for its context.

## Content

### Main elements

#### Label

Concise labels for text and data inputs help users understand what information is being requested of them.

             - Labels inform users what to expect in the list of select options.
             - Labels are not helper text; be succinct. Use one to three words only.

#### Helper text

             - Helper text is pertinent information that assists the user in choosing the right selection from the select list.
             - Helper text is optional but replaced with warning or error text when these states appear.

#### List order

If applicable, the list should be in alphabetical order or in increasing order relative to the content. Otherwise, the order of the select list should be based on the frequency of use.

![Select list order](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-list-order.png)

## Universal behaviors

### States

The select has multiple interactive states for both default and inline variants: **enabled**, **hover**, **selected**, **focus**, **open**, **error**, **warning**, **disabled**, skeleton, and **read-only**.

| State | When to use |
| --- | --- |
| *Enabled* | When the select is live and a user is not directly interacting with it. This is commonly referred to as the default or normal state of the component. An enabled select field should contain a default value. |
| *Hover* | When a user’s mouse cursor is hovering over the field. |
| *Selected* | When a user opens the list and selects an option within the list. |
| *Focus* | When a user tabs to or clicks on the select field, the field becomes focused, indicating the user has successfully navigated to the component. |
| *Open* | When a user opens the list. |
| *Error* | When a select component marked as “required” has not had an option selected. It can also be triggered due to a system error. This state requires a user response before data can be submitted or saved. |
| *Warning* | When you need to call the user’s attention to an exception condition. The condition might not be an error but can cause problems if not resolved. |
| *Disabled* | When the user cannot interact with a component and all interactive functions have been removed. Unlike read-only states, disabled states are not focusable, are not read by screen readers, and do not need to pass visual contrast, making them inaccessible if they need to be interpreted. |
| *Skeleton* | Used on an initial page load to indicate that the select has not yet fully loaded. |
| *Read-only* | When the user can review but not modify the component. This state removes all interactive functions like the disabled state but can still be focusable, accessible by screen readers, and passes visual contrast for readability. |
![Select default interactive state](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-states-default.png)

### Interactions

#### Mouse

Users can open and close the list by clicking the chevron icon or clicking anywhere within the field. To select an option, the user can click anywhere inside an option list.

![Select mouse interaction default](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-interaction-default.png)

### Keyboard

            - The dropdown field is the element that receives focus. All keyboard interactions happen from this element.
            - Users can open the list by pressing `Space`, `Enter`, the `Down arrow`, or the `Up arrow`.
            - Users can move the highlighted option to the next option by pressing the `Down arrow`.
            - Users can move the highlighted option to the previous option by pressing the `Up arrow`.
            - Users can close the list by pressing `Escape`, `Space`, or `Enter`.
![Select keyboard interaction default](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-usage-keyboard-interaction-default.png)

### Validation

#### Invalid

Real-time validation helps to streamline the process of filling out a form. The error state is triggered if the data is invalid or a required field is left empty. The error state has three visual indicators to signify invalid content: a red border, an error icon indicator, and an error message.

![Select invalid state default](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-invalid-state-fixed.png)

## AI presence

Select has a modification that takes on the AI visual styling when the AI label is present in the input. The AI variant functions the same as the normal version except with the addition of the AI label which is both a visual indicator and the trigger for the explainability popover.

For more information on designing for AI, see the[Carbon for AI](https://www.carbondesignsystem.com/building-blocks/foundations/carbon-for-ai) guidelines.

![Default select with AI presence](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-AI-presence-default-usage.png)

### Revert to AI

A select can toggle between the AI variant and the non-AI variant depending on the user’s interaction. If the user manually overrides the AI-suggested content then the input will change from the AI variant to the non-AI variant. Once edited, the user should still be able to switch back to the initially AI generated content via a revert to AI button.

![Default select with AI revert](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/select-revert-to-AI-default-usage.png)

### Related

            - If there are fewer than three options to choose from, use a radio button group instead.
            - If multi-select is necessary, use [dropdown](https://www.carbondesignsystem.com/building-blocks/core/components/dropdown/guidelines) instead. Dropdown options are used to take an action, navigating outside of the current context, filtering or sorting existing content.
