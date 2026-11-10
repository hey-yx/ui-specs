---
title: "GitLab Pajamas · Foundation · Iconography 图标"
source: https://design.gitlab.com/product-foundations/iconography/
section: icons
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-icons
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Iconography 图标

> 来源：[https://design.gitlab.com/product-foundations/iconography/](https://design.gitlab.com/product-foundations/iconography/)

---

One of our values is to create a distinct GitLab personality that is strong and consistent. Iconography is a powerful visual cue to the user and should reflect our particular sense of style.

Icons take inspiration from elements expressed as part of the GitLab brand.

- **Balance and structure.** Regardless of symmetry, icons should feel complete and in control. Icons act as visual anchors or guides and should be designed to either stop or direct the eye.
- **Modern and approachable.** Border radius and open counters help our icons combine beauty and utility with a touch of personality.
- **Crisp and intentional.** Icon elements should have purpose and place.
- **Simple and concise.** Design to minimize time to comprehension. In the same way the concept of “invisible UI” moves a user to task completion without getting hung up on visual elements or controls, icons should move users to concept and action without extra time spent deciphering a metaphor.

## Icon collections

There are four icon collections used in the product (not including the Web IDE): UI, status, pipeline, file and folder icons. The design guidelines covered in the sections below only apply to UI and status icons.

### UI icons

As the largest of the four collections, comprising of several subcategories, these icons are used broadly in the product to represent GitLab concepts and indicate actions and information in the UI. UI icons can be interactive or informational depending on the context. Third-party brand icons are included in this collection, but are exempt from most design guidelines.

### Status icons

These smaller icons complement text or relevant content to indicate the general status, health, or the trend direction of an object. Due to their small size, these icons aren’t interactive unless paired with text or contained within an element, like a [badge](https://design.gitlab.com/components/badge) component, giving them a larger target size. These icons are prefixed with [`status-`](https://design.gitlab.com/product-foundations/iconography-directory/?q=status-).

### Pipeline icons

These icons represent the status of a pipeline, like running and pending. There are both bordered and borderless versions of each icon. They use a separate grid from all other icons and are also used to generate favicons associated with web pages. Although a pipeline status can overlap conceptually with status elsewhere in the product, these icons are strictly limited to the pipeline context. These icons are prefixed with [`status_`](https://design.gitlab.com/product-foundations/iconography-directory/?q=status_).

### File and folder type icons

These third-party icons have specific file and language associations, like SCSS, JavaScript, and YAML, and are maintained under a separate MIT license. More information can be found in the [project repository](https://github.com/PKief/vscode-material-icon-theme).

[View file icon directory](https://design.gitlab.com/product-foundations/file-icon-directory)

### Logos

These third-party logos must be used in accordance with [expressed use and approval](https://docs.google.com/spreadsheets/d/1fa4pzDgbtXSbjw1hex-jouoYu_NDwHpwQwJMbcBHmI4/edit?gid=0#gid=0) (internal). To request the addition of a new logo, follow the [third-party trademark process](https://handbook.gitlab.com/handbook/legal/policies/product-third-party-trademarks-guidelines/#process-for-adding-third-party-trademarks-to-gitlab).

[View logo directory](https://design.gitlab.com/product-foundations/logo-directory)

## Icon grids

Icon elements are aligned to a pixel grid. Elements within an icon, such as curves or diagonal lines, won’t always align exactly to the grid. This is okay; in these instances it’s better for the element to feel natural rather than forced.

Alignment considerations for a **1.5px** stroke are covered in the [Strokes](#strokes) section below.

In nearly all instances icons should be used at the size they were created at and not scaled. This keeps the icons crisp and consistent in the UI.

  
  
  
  

### 16 pixel grid

The **16px** icon size is the default, and most UI icons are created at this size. Icons using this **16×16 pixel** grid have a **14px** live area surrounded on all sides by **1px** for padding and optical sizing.

### 12 pixel grid

The **12px** grid is used for all status icons, and some UI icons. Icons using this **12×12 pixel** grid have a **10px** live area surrounded on all sides by **1px** for padding and optical sizing.

## Keylines

A keyline grid is a set of guides to help maintain [optical balance](#optical-balance) (visual weight) between icons. Use it as a starting point and guide, but not a hard rule. There are four basic shapes that represent common icon scale and placement. Squares can fill the live area, while circles and rectangles can extend into the padding, which allows icons to be proportionately consistent.

### Optical balance

In regard to icons, optical balance is the perceived size of an icon relative to other icons. The more that icons feel balanced with one another, the easier it will be to rely on other characteristics to provide visual hierarchy and flow in the UI. Icons that are not balanced can draw unnecessary attention to themselves, or seemingly disappear in the mix of other elements.

Here are a few considerations when trying to achieve optical balance.

- More detail equals more visual weight. As the _density_ of the graphic increases, it will draw more attention. Try offsetting this by simplifying detailed icons.
- Rotate narrow icons 45º, which gives them more visual weight.
- At times, optically adjusting an icon may mean less adherence to the grid or other spacing rules to the benefit of balance or clarity.

## Strokes

Nearly all UI icons use a **1.5px** stroke weight. Lines use rounded caps, unless doing so would misrepresent the metaphor, or if you are trying to infer depth or element clipping. Round line joins are optional and also depend on the metaphor. For example, a checkmark is one continuous object and the round line infers fluidity, whereas clock hands are two joined objects and a miter join defines a joint.

A **1.5px** stroke:

- Is more balanced with other UI elements and is similarly weighted to regular system font weights at body text sizes.
- Provides more room to convey abstract concepts and metaphors by allowing for both more detail where needed and extra space between elements for clarity.
- Works well in both light and dark UI.

Since icons use a **1.5px** stroke, there are a few alignment considerations:

- A stroke is either aligned to inside or center.
- Outside edges of closed shapes should align to whole pixels.
- A line should have at least one edge aligned to a whole pixel. This won't always be possible when two lines comprise an element that has to be centered within the grid or to other elements, but the line end points should always terminate on a whole pixel.

## Fills

Using a stroke (outline) is the default design approach, however a limited number of UI icons and all status icons use a solid fill instead. As a general rule, UI icons that use a solid fill have a specific reason for doing so. For example, the [`clear` icon](https://design.gitlab.com/product-foundations/iconography-directory/?q=~clear) (×) used to clear a text input requires extra visual weight to not be missed in the UI, and thus has a solid fill applied.

## Border radius

To have parity between inside and center aligned strokes with a **1.5px** weight, the border radius options are:

| **Stroke aligned inside** | **Stroke aligned center** | **Result**                                                                           |
| ------------------------- | ------------------------- | ------------------------------------------ |
| 0px                       | 0px                       |                                            |
| 1px                       | 0.25px                    |                                            |
| 2px (default)             | 1.25px                    |                                            |
| 3px                       | 2.25px                    |                                            |

Clarity should always override consistency, and the guides are flexible when necessary to best represent the metaphor or parts of it.

## Angles

Use increments of **15º** to achieve consistency throughout the icon set. Angles can be combined in an icon to create more dynamic shapes and movement, while remaining consistent as a whole.

## Shape

Sharp interior angles help icon clarity. A **1px** gap between elements is acceptable, but **2px** is preferred when possible — consistency will always help the icons feel more unified.

Design most icons in 2D. Depth and perspective should only be used when it’s absolutely necessary to clarify a concept, and even then **2px** strokes are used to add dimension instead of larger fill areas.

  
  
  
  

Simplify icons for clarity and legibility, avoiding embellishment or unnecessary details.

  
  
  
  

Remove or close counters that are less than `1px` to avoid distracting artifacts.

  
  
  
  

Use square caps and shape edges to directly indicate clipping or layering. Round should still be used when breaks and intersections are more stylistic.

  
  
  
  

## Concepts

### Design to the concept

The guidelines are helpful constraints to help focus on the _concept_ without overthinking _style_. On the other hand, it’s critical to not let the same guidelines negatively impact a metaphor. A great example is a shield icon. While the default border radius is `2px`, using that here could make the icon feel too friendly, when really we want to emphasize robust and accurate security.

In another more literal example, an icon representing tabular data should have crisp edges. Why? Because the UI of tables in the product have crisp, 90º angles. This creates a 1:1 relationship between the icon and the object it represents, making it much easier for users to infer the intended meaning.

As with all of the guidelines, there will always be some level of subjectivity. Use your best judgement, and test when necessary.

  
  
  
  
  
  
  
  

### Icon meaning

GitLab icons should reflect positive or neutral metaphors. Avoid concepts related to violence or that generally have a negative meaning. Ask yourself, will this icon benefit all users? Is there any potential that its meaning could be confusing or cause anxiety? If there's any doubt, explore other options that are at least neutral in meaning.

#### Specific meaning, specific icon

Using an icon consistently to represent a single concept or action helps with overall learnability for a user. For example, the icon used to represent a feature or an object shouldn't be used to refer to other unrelated concepts or actions in the UI.

Avoid using different icons to refer to one specific meaning. For example, [`pencil`](https://design.gitlab.com/product-foundations/iconography-directory/?q=~pencil) should be used for editing or updating an item, rather than [`pencil-square`](https://design.gitlab.com/product-foundations/iconography-directory/?q=pencil-square) which is used for composing.

  
  
  
  
  
  
  
  

#### Icons with multiple meanings

There are, however, several icons whose design doesn't match a single metaphor, but multiple. In these cases, meaning must be provided in context. Examples of these cases are:

- An [`eye` icon](https://design.gitlab.com/product-foundations/iconography-directory/?q=eye) to indicate a confidential issue can also be used to show a password, or to view a preview of an object.
- A [`chevron` icon](https://design.gitlab.com/product-foundations/iconography-directory/?q=chevron) in a [dropdown button](https://design.gitlab.com/components/button#dropdown-buttons) can also represent the expanded state of an [accordion](https://design.gitlab.com/components/accordion).
- A [`close` icon](https://design.gitlab.com/product-foundations/iconography-directory/?q=~close) (×) can indicate a [failed status](https://design.gitlab.com/product-foundations/iconography-directory/?q=status_failed) or, when used as a close action, closes a modal window or removes a connection between objects.
- A [`remove` icon](https://design.gitlab.com/product-foundations/iconography-directory/?q=~remove) typically represents permanently deleting an object or, in the case of tokens, revoking access.
- A [`lock` icon](https://design.gitlab.com/product-foundations/iconography-directory/?q=~lock) represents editing restrictions (read-only, file locking) and access restriction (private projects, setting set by admin/parent group).

In addition to context, ensure that `aria-label` attributes and/or tooltips are used to communicate the icon meaning.

#### Unique metaphors and concepts

If an icon is not accompanied by a label or its use isn't clear based on the immediately surrounding context, then provide a quick explanation in a tooltip.

  
  
  
  

#### Modern metaphors

Try to avoid potentially antiquated concepts, especially when something more modern is recognizable.

  
  
  
  

### Naming

Existing [GitLab SVGs icons](https://design.gitlab.com/product-foundations/iconography-directory/) haven't historically followed a naming convention, so you may encounter different patterns until we're able to address them individually. Use the following guidelines for new icons:

- When an icon represents a recognizable object, use the name of the object. For example, an icon of a pencil that represents editing is named `pencil`.
- When an icon represents an abstract metaphor or concept, choose a name that best represents the concept or use case. For example, an icon made of stacked shapes to represent an epic is named `epic`.
- The file name should be lowercase and use hyphens as a separator between terms. For example, `cloud-gear`.
- Icons in the [GitLab Product Icons](https://www.figma.com/community/file/1051267829358377715) Figma file contain keywords and usage details in the component description (each icon is a component) to help unite naming with use and concepts. We hope to eventually have similar capabilities in the [GitLab SVGs](https://design.gitlab.com/product-foundations/iconography-directory/) website.

## Usage

Icons are used to stress visual weight for elements with a high priority or to explain the universal knowledge in a simple way.

The level of visual weight from heavy to light is: **Icon and label → Icon → label.**

### Color inheritance

Icons inherit the color of their parent element. This aligns with the web's default behavior and creates a more consistent implementation across the product. Use explicit color variants for icons only when they require a color that differs from the parent element.

### Code reference

（组件 API 见原文）

For more information on how icons are referenced in the product, go to [GitLab Docs - Icons and SVG Illustrations](https://docs.gitlab.com/ee/development/fe_guide/icons.html).

### Accessibility

`gl-icon` icons are hidden from screen readers by default, as usages of icons are commonly decorative.

```vue
<!-- live-example -->
<gl-icon name="rocket" />
```

If the icon is not decorative, add an `aria-label` attribute to `gl-icon` to give it an accessible name. This label is read out by screen readers.

```vue
<!-- live-example -->
<gl-icon name="eye-slash" aria-label="Confidential issue" />
```

If the icon is clickable, use `gl-button` instead of `gl-icon` because a clickable element should semantically be a button.

```vue
<!-- live-example -->
<gl-button icon="close" category="tertiary" class="!gl-p-0" aria-label="Close" />
```

For more information about icons within GitLab, visit the
[GitLab accessibility guidelines](https://docs.gitlab.com/ee/development/fe_guide/accessibility#icons).
