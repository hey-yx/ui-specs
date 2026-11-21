---
title: "IBM Carbon · Toggle 开关用法"
source: https://carbondesignsystem.com/components/toggle/usage/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-carbon-toggle
publisher: "IBM Carbon"
---

# IBM Carbon · Toggle 开关用法

> 来源：[https://carbondesignsystem.com/components/toggle/usage/](https://carbondesignsystem.com/components/toggle/usage/)

---

---

---

This live demo contains only a preview of functionality and styles available for this component. View the [full demo](https://react.carbondesignsystem.com/?path=/story/components-toggle--default&globals=theme:white) on Storybook for additional information such as its version, controls, and API documentation.

## Overview

Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches.

![Example of the toggle component in a UI](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle_usage_overview.png)

Example of the toggle component in a UI

### When to use

            - To turn off and on a single option that affects the system or page settings.
            - Ideal for settings or preferences that can be immediately applied.
            - Recommended for actions where the change is reversible without additional confirmation.

### When not to use

            - Avoid using toggles if the action requires immediate feedback or confirmation, such as deleting a file.
            - Don’t use toggles for more than two options; instead, use a [dropdown](https://www.carbondesignsystem.com/building-blocks/core/components/dropdown/guidelines#overview), [radio button](https://www.carbondesignsystem.com/building-blocks/core/components/radio-button/guidelines#overview), or [checkbox](https://www.carbondesignsystem.com/building-blocks/core/components/checkbox/guidelines#overview).
            - Avoid using toggles for settings that aren’t binary in nature or don’t provide instant application; instead use a different UI component, like a checkbox, in combination with a [button](https://www.carbondesignsystem.com/building-blocks/core/components/button/guidelines#overview).

### Variants

| Variant | Purpose |
| --- | --- |
| [Default toggle](https://www.carbondesignsystem.com/building-blocks/core/components/button/guidelines#default-toggle) | Use the default toggle when you need to specify a label text in addition to the toggle state text. Default toggles appear in forms or within full pages of information. |
| [Small toggle](https://www.carbondesignsystem.com/building-blocks/core/components/button/guidelines#small-toggle) | Use the small toggle when you do not need to specify label or state text. Small toggles are more compact in size and are used inline with other components. |

### Feature flags

A [feature flag](https://carbondesignsystem.com/components/overview/feature-flags/) has been added to the toggle to adjust its label spacing and changes its visual appearance, not its functionality. For code-specific feature flag information, refer to the [Code](https://www.carbondesignsystem.com/building-blocks/core/components/toggle/code#documentation) tab. The current toggle is not being deprecated, but teams are encouraged to use the feature flag toggle for their products moving forward. Once the next major release (v12) is released in the future, this feature flag will become the default version of the component.

The following is the feature flag change made to the toggle.

            - The spacing between the toggles label and its container is now 8px instead of 16px to improve consistency across our label spacing in other components.
            - This change applies to both the default and small toggles.
![Toggle with feature flag enabled](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-feature-flag-enabled.png)

## Formatting

### Anatomy

Default and small toggles are both comprised of a label text, a toggle button, and a state text. Default toggles are required to display a component label and state text, unlike the small toggle, where both these elements are optional. The small toggle displays a checkmark tick in the “on” state to ensure the toggle is still accessible when label and state text are unavailable.

![Anatomy of default and small toggle variants](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-anatomy.png)

Anatomy of default and small toggle variants

A. Label text 
B. Toggle 
C. State text

A. Label text (optional) 
B. Toggle 
C. State text (optional) 
D. Checkmark tick (on state)

### Sizing

The toggle component is available in two sizes: **default** and **small**.

![Sizes of toggle](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-sizes.png)

Sizes of toggle

## Content

### Label text

The label text must accompany the toggle to provide additional context and clarify its state. However, the label text is optional for small toggle.

### State text

Use the state text to describe the binary action of toggle so that the action is clear. It must be three words or less and is displayed on the side of a toggle. The state text is optional for small toggle.

### Language

Use adjectives rather than verbs to describe actions and the state of the object affected.

### Further guidance

For further content guidance, see Carbon’s [content guidelines](https://www.carbondesignsystem.com/building-blocks/foundations/content/overview).

## Behaviors

### States

The default and small toggle have two main states: **on** and **off**. Other interactive states are **focus**, **disabled**, **read-only**, and **skeleton**. For more information on toggle states, see the [Style](https://www.carbondesignsystem.com/building-blocks/core/components/toggle/specifications) tab.

| State | When to use |
| --- | --- |
| On | When a user clicks or uses the arrow keys to switch on the component. |
| Off | When a user clicks or uses the arrow keys to switch off the component. |
| Focus | When a user presses tab or clicks on the toggle, it becomes focused, indicating the user has successfully navigated to the component. |
| Disabled | When a user is not allowed to interact with the toggle due to either permissions, dependencies, or pre-requisites. The disabled state completely removes the interactive function from a component. The styling is not subject to WCAG contrast compliance. |
| Read-only | When the user can review but not modify the component. This state removes all interactive functions like the disabled state but can still be focusable, accessible by screen readers, and passes visual contrast for readability. |
| Skeleton | Use on an initial page load to indicate that the toggle has not yet fully loaded. |

### Interactions

#### Mouse

Toggle component is triggered on `Click` which switches between the “on” and “off” states. It also has a visible focus state when selected, ensuring accessibility.

#### Keyboard

For keyboard navigation, users can focus the toggle using the `Tab` key, providing visual feedback for keyboard users. Pressing `Enter` or `Space` changes the toggle’s state between “on” and “off”.

### Clickable areas

The toggle component has two clickable areas: the toggle switch itself and the label associated with it. Users can click either area to change the toggle’s state.

![Clickable areas of default and small toggle](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-clickable-areas.png)

Clickable areas of default and small toggle

## Default toggle

The default toggle is larger in size than the small toggle. They are commonly used in forms and can appear within full pages of information that are not restricted in space. Default toggles are required to display a visible label and a state text.

Default toggle has an available [feature flag](https://carbondesignsystem.com/components/overview/feature-flags/).

![An example of a dashboard using the default toggle with feature flag enabled](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-default-flag-enabled.png)

## Small toggle

The small toggle is often used in condensed spaces and appear inline with other components or content. The label and state text are optional for the small toggle.

Small toggle has an available [feature flag](https://carbondesignsystem.com/components/overview/feature-flags/).

![Example of the small toggle component in a UI, with feature flag enabled](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-small-flag-enabled.png)

Unlike the default toggle, the small toggle is more compact in size and displays a checkmark tick in the on state to ensure the toggle is still accessible without requiring visible label or state text. For example, inside [data table](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines) rows.

![Example of a small toggle in context without a visible label or state text](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/toggle-usage-small.png)

Example of a small toggle in context without a visible label or state text
