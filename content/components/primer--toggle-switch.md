---
title: "GitHub Primer · Component · Toggle switch"
source: https://raw.githubusercontent.com/primer/design/main/content/components/toggle-switch.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-toggle-switch
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Toggle switch

> 来源：https://primer.style/components/toggle-switch

## Anatomy

![Diagram of toggle switch with its parts labeled](https://user-images.githubusercontent.com/2313998/226448730-9e4233ec-feff-4982-acce-9aa8ca5beac2.png)

- **Track**: The clickable area where the toggle switch moves back and forth
- **Knob**: Changes color and position depending on whether the switch is on or off
- **Status**: A text label showing whether the switch is on or off

## Options

### Label and description

      Every toggle switch should have a label that says what is being turned on or off. Optionally, you may include a
      description about the setting that is being turned on or off.

      Labels should be succinct, and can describe an object or an action (for example: "Discussions" or "Automatically
      watch repositories"). Don't use phrases that describe the switch's state in your label.

  ![](https://user-images.githubusercontent.com/2313998/226448731-96a9bc7d-6c4f-4f30-8e32-ff73d0a76474.png)

    ![](https://user-images.githubusercontent.com/2313998/226448719-fd65a0ea-bbfb-4b53-a00d-2ca0db8f0991.png)
    Use succinct phrases with verbs or nouns

    ![](https://user-images.githubusercontent.com/2313998/226448723-86d146d8-1a92-4506-8a5e-106a8bc0b8a7.png)
    Don't use phrases that describe the switch's state

### Layout

      By default, lay out a toggle switch horizontally justified with its label and optional description.

      You may use a vertical layout when a toggle switch is layed out inline with other content, or if a horizontal
      layout would put the switch too far from its label. If the vertical layout is left-aligned, the "on"/"off" text
      may be moved to the right of the switch.

    ![](https://user-images.githubusercontent.com/2313998/226448731-96a9bc7d-6c4f-4f30-8e32-ff73d0a76474.png)
    ![](https://user-images.githubusercontent.com/2313998/226448741-72a264f6-3269-4d09-8afe-75042a189a54.png)

### Size

    A small variant is provided to maintain visual hierarchy, or for dense areas where the default size will not fit.

  ![](https://user-images.githubusercontent.com/2313998/226448738-1dff6c1c-eac3-4a0a-850e-02d579272a11.png)

### Loading

    When a toggle switch is waiting for something to load before toggling, a loading indicator should be displayed. The
    switch should not prematurely toggle from "on" to "off". Wait until loading is complete before showing a change.

  ![](https://user-images.githubusercontent.com/2313998/226448735-1e9f8d24-a084-4cee-ae59-fbabce944d7a.png)

### Progressive disclosure

    The progressive disclosure pattern may be used to hide or
    show content based on whether a toggle switch is on. Content revealed on toggle switch activation should always come{' '}
    after the toggle switch.

  ![](https://user-images.githubusercontent.com/2313998/226448736-db898a3c-8b68-4e5e-a4e8-ad1f6d549062.png)

## Mixed values

Since a toggle switch can only be "on" or "off", it could be confusing to use a switch to represent mixed values.

If you have a group of configuration options that can be disabled, use a button instead of a toggle switch. Disabling the group turns off all configuration options, but remembers their previous state when the user wants to turn that section back on. While the section is disabled, the configuration options are hidden.

![Configuration options section that can be enabled or disabled. Configuration controls are hidden when it is disabled.](https://user-images.githubusercontent.com/2313998/226448737-ed98e831-ecbc-476e-809a-6799bf73a5f7.png)

    ![](https://user-images.githubusercontent.com/2313998/226448725-d7cb6db8-9738-4097-89f4-9279fec7400a.png)
    Use a button to affect multiple related toggles

    ![](https://user-images.githubusercontent.com/2313998/226448727-20d008fa-866b-4c6d-849a-81941e5d09eb.png)
    Don't use a toggle switch to represent mixed values

## Toggle switch vs checkbox

Toggle switches are buttons that change and save a boolean configuration option when they are toggled.
Checkboxes are form inputs that are used to select one or more items from a list, and are not saved without explicit confirmation such as pressing a **Save** button.

A toggle switch should never be used as a replacement for a checkbox. See [saving patterns](https://primer.style/ui-patterns/saving) for more details.

    ![](https://user-images.githubusercontent.com/2313998/226448728-73c5ca2d-82c4-4d8a-b043-d200dff3ae16.png)
    Use a toggle switch like a button

    ![](https://user-images.githubusercontent.com/2313998/226448729-46e2b1e1-61ed-4773-bdba-29f7c0174052.png)
    Don't use a toggle switch as a replacement for a checkbox

## Accessibility

### Keyboard navigation

Toggle switches should have the same keyboard navigation features as a button. A toggle switch may be focused using the `Tab` key, and pressing the `Enter` or `Space` key will toggle the switch.

### Touch target

When the UI is rendered on a touch-screen device, ensure that the toggle switch has a large enough touch target size. The toggle switch should respond to hovers, clicks, and taps anywhere in the touch target area, even if it isn't directly on the control.

![Diagram showing touch target size on medium and small toggle switches](https://user-images.githubusercontent.com/2313998/226448740-1506ddb5-3cdb-4aef-9a3b-0d66839e7d11.png)

### Known accessibility issues (GitHub staff only)
