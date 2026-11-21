---
title: "GitHub Primer · Component · Segmented control"
source: https://raw.githubusercontent.com/primer/design/main/content/components/segmented-control.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-segmented-control
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Segmented control

> 来源：https://primer.style/components/segmented-control

## Anatomy

![A diagram of a segmented control with three buttons. The labeled parts of the segmented control are: the selected third button, the icon in the second button, and the text label in the second button.](https://github.com/primer/design/assets/2313998/c5bf30c6-d66a-4708-90da-b5bfac3c034b)

## Usage

### For implicitly saved settings

The primary purpose of a segmented control is to pick a value from a list of options and immediately apply that selection. It's similar to a group of radio inputs except radio group selections need to be explicitly saved via form submission.

![](https://github.com/primer/design/assets/2313998/24017512-e1e5-47bb-9fbb-dc2ffb7e9c62)

For more information about explicit and automatic save patterns, see the [saving pattern guidleines](https://primer.style/ui-patterns/saving).

### To toggle content visibility

  The current implementations of our segmented control do not support rendering segments as links (`` tags).
  Continue to avoid using segmented controls that change the URL until we have a solution for rendering segments as links.

Segmented controls may also be used to change how content in a view is rendered. The following use cases are an acceptable use for a segmented control:

- **Sort control**: Activating a segment affects the order of a list of items.
- **Filter control**: Activating a segment affects the visibility of items in a list, and there is a segment that shows the full list.
- **Content formatting picker**: Activating a segment changes the formatting of the same content.

    ![A screenshot of a GitHub discussions list with the segmented segmented control for sorting highlighted. The sort options are 'Oldest', 'Newest', and 'Top'.](https://github.com/primer/design/assets/2313998/dbec961f-64b2-4701-8d81-d178dd6ab206)
    As a sort control

    ![A screenshot of the GitHub organization insights page with the segmented control for filtering highlighted. The options are 'All results' and 'Open security advisories'. ](https://github.com/primer/design/assets/2313998/6d3ddfc8-f8e9-44ca-ac5f-43cbdaaf8969)
    As a filter control

    ![A screenshot of the GitHub billing dashboard with a chart showing costs. The segmented control to switch between the chart type is highlighted. The options are 'Line', 'Area', and 'Bar'](https://github.com/primer/design/assets/2313998/b56ef0a9-45b6-4cb0-9f7e-10921967ae36)
    As a content formatting picker

If selecting a segment changes the URL, the segments should be rendered as `` tags.

See the [decision tree](https://primer.style/ui-patterns/navigation#choosing-a-pattern-for-tabbed-navigation) for choosing a pattern for tabbed interfaces for more detailed guidance and alternative patterns.

## Content

### Segments

A segmented control should have 2–5 choices with text labels, or up to 6 icon-only segments. Too many choices can be difficult to parse and take up too much horizontal space. If there are more than 5 choices, use another choice selection pattern such as a group of radio inputs or a dropdown menu.

    ![](https://user-images.githubusercontent.com/2313998/182705421-fb58f024-323f-48b8-81ae-70db5fc0aed1.png)
    Use a segmented control for picking from 5 (6 for icon-only segments) or fewer options.

    ![](https://user-images.githubusercontent.com/2313998/182705422-2cb47d94-952c-4a7a-8f2f-627cc1ef3204.png)
    Don't use a segmented control for more than 5 options.

    ![](https://user-images.githubusercontent.com/2313998/182705424-d85bee5f-3996-4078-9185-6c494e7d6067.png)

      Use a segmented control for selecting from a list of static values. You may use an auxiliary dropdown adjacent to
      the segmented control.

    ![](https://user-images.githubusercontent.com/2313998/182705425-c79d6522-1f0e-40d9-8c4d-78bef58cceae.png)
    Don't use a segmented control with a choice that is a dropdown.

### Segment icons

    Icons can be rendered in each segment as a visual cue to help users understand their options.

  ![](https://user-images.githubusercontent.com/2313998/182705434-baf679ea-14de-4b62-b83f-f833c1058694.png)

#### Effective visual cues

Be consistent with the way visual cues are used in each segment. Use either all icons, all text labels, or all text labels with icons.

Do not change icons to communicate state.

    ![](https://github.com/primer/design/assets/2313998/4b1bfdea-d222-4a2d-a60f-a6adfb7d33f1)
    Use icons as a visual cue to communicate what the choice does.

    ![](https://github.com/primer/design/assets/2313998/777d35a1-37e8-4198-b9a3-d91a72a22de2)
    Change or add icons to indicate whether the choice is selected.

    ![](https://user-images.githubusercontent.com/2313998/182711267-c71a91e0-7bde-435b-a0e3-72ca4ea34e55.png)
    Keep the visual cues in each segment consistent.

    ![](https://user-images.githubusercontent.com/2313998/182711268-f61ec450-fb10-41ba-b736-5fe1e5bddc87.png)
    Don't mix visual cues between segments.

#### Icon-only segments

Use icons without a visible text label sparingly, and only with icons that are easily understood by an average GitHub user. When a segment has an icon without a visible text label, the text label should be shown in a tooltip.

    ![](https://user-images.githubusercontent.com/2313998/182705427-29e7dfe2-b714-4baf-96d9-2871b46eaf05.png)
    Use icons without a visible label when the icon's meaning is obvious.

    ![](https://user-images.githubusercontent.com/2313998/182705428-112e7ebf-d483-49f1-aabf-44866c31b7f9.png)
    Don't use obscure icons without a visible label.

### Segment label text

Segmented control segment labels should be nouns or noun phrases that succinctly describe the choice. Segment labels may not wrap to multiple lines.

    ![](https://user-images.githubusercontent.com/2313998/182705434-baf679ea-14de-4b62-b83f-f833c1058694.png)
    Phrase choice labels as nouns or noun phrases with as few characters as possible.

    ![](https://user-images.githubusercontent.com/2313998/182705435-e5ee0c9e-d4e7-4db5-b865-7f1001fb3e3e.png)
    Phrase choice labels as an action or with unnecessarily long strings of text.

### Contextual information

      Label

      Segmented controls must have a text label, even if the label is only accessible to screen readers. A visible label
      is the most direct way to identify what the control is used for, but the location and surrounding elements of the
      control often give enough context to visually hide the label.

      Caption

      An optional caption may be used to provide additional context to help users make a selection or explain what
      effect the selection will have. Caption text should be as short as possible.

  ![](https://user-images.githubusercontent.com/2313998/182711443-bf68d139-dfd9-477f-853e-de217a96f5d8.png)

See the [layout](#layout) section for ways to compose a segmented control with a label.

## Interaction

Selections are mutually exclusive. Once a selection has been made, it can only be deselected by making a new selection.

A segmented control does not require a "Save" button to apply the selection. When a choice is selected, the selection immediately affects an object, state, or view.

## Layout

### Composing the control with a label and caption

#### Single-column

  A single-column layout is the same way form controls (for example, text inputs) are layed out. The single-column layout is useful for preserving horizontal space.

  ![](https://github.com/primer/design/assets/2313998/397dad08-8ae4-40fb-9b0b-c41208057161)

#### Two-column

A two-column layout can be used to:

- Align the control with adjacent elements
- Conserve vertical space
- Group related controls in a way that is easy to scan

    ![](https://github.com/primer/design/assets/2313998/a9a9230c-406f-42dc-9d41-eb160e00c5e7)

    ![](https://github.com/primer/design/assets/2313998/cb9a26c6-ad3b-42ba-b80f-fd921670f8d6)

### Fill available width

    A segmented control's width can stretch each button evenly to fill the width of the control's parent. This option is
    intended to make the segmented control easier to adapt into different layouts.

  ![](https://user-images.githubusercontent.com/2313998/182705451-8eb238e0-7a4e-4c6c-a9ed-291e35ce1bf1.png)

### Responsive design

There are cases where a segmented control needs to be placed in a spot that is too narrow to accommodate all of its options. In these cases, the control can be adapted to fit in the narrow area without sacrificing usability.

      Convert to an action menu

      Swapping out the segmented control for an action menu is especially helpful when:

        The icons cannot be understood without visible text labels
        The control is still too wide when text labels are hidden

  ![](https://user-images.githubusercontent.com/2313998/182705449-0b054ec5-26e3-4bff-b5c0-313966badadf.png)

      Only show icons

      If your segmented control uses icons that can be understood without a visible text label, then you can hide the
      text labels and rely only on icons. The text from the hidden label will still be visible in a tooltip.

  ![](https://user-images.githubusercontent.com/2313998/182705450-6a68767c-f7e5-4e3d-972f-38d30267df71.png)

    ![](https://user-images.githubusercontent.com/2313998/182705447-1f9ef99d-b6f2-4a98-af13-d34654236d30.png)

      Replace the segmented control with an action menu or use icons that are easily understood without text labels.

    ![](https://user-images.githubusercontent.com/2313998/182705446-bfa04d0b-dbfa-4d1b-b732-c50503d65735.png)
    Wrap the buttons to multiple lines, use an overflow button, or remove buttons

## Accessibility

A segmented control is treated like a [list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) where each [list item](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) contains a button.

Do not treat a segmented control like any of the following ARIA roles:

- [`radiogroup`](https://developer.mozilla.org/en-US/docs/web/accessibility/aria/roles/radiogroup_role), which would require a save button to apply the changes.
- [`tablist`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role), which is used to switch between [tab panels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) of different content.
- [`toolbar`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role), which is a collection of function buttons.

These other roles have their own keyboard navigation rules and are treated differently by screen readers and other assistive technologies. Designs that treat segmented controls like tabs or radio buttons would be confusing for users who interact with the web using assistive technologies.

### Keyboard navigation

#### `Tab`

`Tab` behaves just like it would in a list of focusable elements.

When tabbing into the segmented control from an adjacent focusable element, the first or last button receives focus.

- Focus will be brought to the first segmented control button if focus is being moved from _before_ the segmented control.
- Focus will be brought to the last segmented control button if focus is being moved from _after_ the segmented control.

#### `Enter` or `Space`

Pressing `Enter` or `Space` while focused on a deselected button selects that button. This is the default behavior for buttons.

If the focused button is already selected, pressing `Enter` or `Space` should not deselect the button.

#### `Arrow Left` or `Arrow Right`

Unlike radio groups and toolbars, the left and right arrow keys do not change the focus or selection.

### Touch targets

Ensure segmented control buttons have a large enough touch target size. On devices that have a pointer with limited accuracy (such as touchscreen phones), provide a larger touch target area. The buttons should respond to hovers, clicks, and taps anywhere in the touch target area, even if it isn't directly on the control.
  ![](https://user-images.githubusercontent.com/2313998/182705453-f0a68ed8-4e07-4ce3-8c09-0ead2d08b816.png)

### Known accessibility issues (GitHub staff only)

## Related links

- [Radio group](https://primer.style/components/radio-group)
- [Underline nav](https://primer.style/components/underline-nav)
- [Underline panels](https://primer.style/components/underline-panels)
- [Navigation](https://primer.style/ui-patterns/navigation)
- [Saving](https://primer.style/ui-patterns/saving)
