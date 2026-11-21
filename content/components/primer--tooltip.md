---
title: "GitHub Primer · Component · Tooltip"
source: https://raw.githubusercontent.com/primer/design/main/content/components/tooltip.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-tooltip
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Tooltip

> 来源：https://primer.style/components/tooltip

⚠️ Usage Warning ⚠️

    Tooltips as a UI pattern should be the last resort for conveying information as they are hidden by default and often
    with zero or little visual indicator of its existence. See{' '}
    tooltip alternatives before using this component.

## Usage

![Three examples of tooltips on interactive elements](https://github.com/primer/primitives/assets/18661030/172aa8f6-2273-4719-bb63-8dd678ffcbc9)

- Reserve tooltips to visually surface the label for icon buttons.
- Keep the tooltip text minimal.
- **Never** include tooltips on non-interactive components (`div`, `span`, `p`) because it will not be accessible for keyboard or screen reader users.

### Best practices

    ![Icon buttons with tooltips for edit, favorite, and sponsor](https://github.com/primer/primitives/assets/18661030/e9f86af8-3792-4794-af68-ad0efccd8bc8)
    Use a tooltip on an icon button to help convey the purpose of the action

    ![Non-interactive text element activating a long and wordy tooltip on hover](https://github.com/primer/primitives/assets/18661030/1d8d86a2-8ee7-40d2-8934-c3d36f34d9b3)
    Don't use tooltips on non-interactive elements

## Options

### Label

  ![icon button with tooltip as a label](https://github.com/primer/design/assets/18661030/b06d4fc2-d4e6-482d-a9b9-05eb866ce3e1)

    Icon buttons have a visually hidden label utilizing `aria-label`. To instead display that label in a tooltip, the
    `label` option should be used. The `label` serves as the accessible name for the control utilitizing
    `aria-labelledby` under the hood.

### Description

The `description` is intended to supplement the control's text label by utilitizing `aria-describedby` under the hood, and will be announced to a screen reader in addition to the label. Keep the description short and concise.

#### Icon button with visually hidden label

  ![Icon button with tooltip as a description](https://github.com/primer/design/assets/18661030/2d0cd085-2454-406e-8c99-bc8bd3dd20db)

    Icon buttons have a visually hidden label utilizing `aria-label`. To provide context in addition to the visually
    hidden label, use the `description` option.

#### Button with visible label

  ![Button labeled Notifications with tooltip as a description](https://github.com/primer/design/assets/18661030/a85cc241-c194-498d-b6ad-8e973fd18aca)

    For buttons that have a visible label, the `description` option can also be used to provide additional context.

### Position

By default, the Tooltip component will position itself below the interactive control in a centered alignment. The position is dependant on the space available within the viewport, and it will never break outside of it. It may appear to the top, bottom, left, or right of the interactive control.

![tooltips rendered in all possible positions surrounding a control](https://github.com/primer/design/assets/18661030/c620d282-1efd-4556-9d9c-770c37359fc9)

## Alternatives to tooltips

Before adding a tooltip, please consider: Is this information essential and necessary? Can the UI be made clearer? Can the information be shown on the page by default? See Tooltip alternatives for more accessible alternatives.

We use aria-label for tooltip contents. However, aria-label replaces the text content of an element in screen readers, so only use Tooltip on elements with no existing text content.

A tooltip may only be used on an element that is interactive such as a button or a link. Even if an element is focusable, a tooltip may only be used if the element does something when it's clicked.

### 1. Persist the content

If possible, persist the content so it's always available rather than using a tooltip, which hides content by default. This ensures that the content is always discovered and surfaced to users regardless of device.

    ![Information about how many discussions can be pinned added to the confirmation dialog](https://github.com/primer/primitives/assets/18661030/e66db2af-723c-4cfa-8d97-47a42f17047d)
    Find an appropriate permanent place to display additional information.

    ![Information about how many discussions can be pinned within tooltip on non-interactive element](https://github.com/primer/primitives/assets/18661030/283a5677-ea86-40de-9a84-6751a9b531f8)
    Don't use a tooltip to add additional helpful information

### 2. Don't duplicate content

If the tooltip duplicates content that is already available on the page, remove it.

    ![Pointer hovering over a link with no tooltip](https://github.com/primer/primitives/assets/18661030/d62b048f-1095-41d8-8bfb-fef204ba50dc)
    Remove any duplicate tooltip text.

    ![Screenshot of tooltip with GitHub username, @inkblotty, on a static span that says @inkblotty](https://github.com/primer/primitives/assets/18661030/78046a69-57f2-4fcd-9f17-fc06576d704f)
    Don't set tooltips that duplicate the trigger element content.

### 3. Use a modal

Consider using a modal, which is accessible for mobile users and allows you to structure content that may otherwise be crammed into a tooltip.

    ![Screenshot of GitHub Actions page with a modal that conveys workflow file information about a runner](https://user-images.githubusercontent.com/40274682/160210527-2319e408-d433-407f-aac2-66eaf9e63246.png)
    Do use a pattern that is accessible to a larger number of users such as a modal

    ![Screenshot of GitHub Actions page using a tooltip on a static element to convey long workflow file information](https://github.com/primer/primitives/assets/18661030/f1107770-cf3b-4bc1-9f75-a766833c67e0)
    Don't place long content inside a tooltip

### 4. Use a summary disclosure

Consider using a summary disclosure that is accessible for mobile users and also offers the ability to show or hide content.

    ![Screenshot of GitHub pricing page that uses a summary disclosure to hide and show additional information on each point](https://user-images.githubusercontent.com/40274682/160211684-6c102dd6-4039-4c7b-8c52-eeeb71a27db5.png)
    Do use a pattern that is accessible to a larger number of users such as a summary disclosure

    ![Screenshot of GitHub pricing page using a tooltip to hide and show long descriptions on each point](https://github.com/primer/primitives/assets/18661030/8efbc68b-7fa9-409d-a020-2e5d75337005)
    Don't use tooltips on non-interactive elements

### Other

If you are unsure which alternative is more suited to your scenario and need help, consult a designer or the GitHub Accessibility team (if you are GitHub staff) for advice.

## Additional resources

- [Your tooltips are bogus](https://heydonworks.com/article/your-tooltips-are-bogus/)
- [erb lint rule: NoAriaLabelMisuseCounter](https://github.com/github/erblint-github/blob/main/docs/rules/accessibility/no-aria-label-misuse-counter.md#no-aria-label-misuse-counter)
- [Rails tooltip linter](https://github.com/primer/view_components/blob/main/lib/primer/view_components/linters/tooltipped_migration.rb)

### Known accessibility issues
