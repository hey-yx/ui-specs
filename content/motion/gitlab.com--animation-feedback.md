---
title: "GitLab Pajamas · Foundation · Animation Feedback 反馈动效"
source: https://design.gitlab.com/product-foundations/animation-feedback/
section: motion
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-motion-feedback
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Animation Feedback 反馈动效

> 来源：[https://design.gitlab.com/product-foundations/animation-feedback/](https://design.gitlab.com/product-foundations/animation-feedback/)

---

Feedback animation is used to confirm a user interaction with an interactive element.

## Guidelines

### When to use

1. State change transitions for interactive elements, such as hover, focus, and active.
1. To confirm a user interaction, including positive or negative feedback.

### Behavior

#### State change transitions

Interactive elements typically have four states: rest, hover, focus, and active. A component's appearance often changes between states as a response to interaction.

When the appearance changes, animate the transition between states using the following combinations.

| State    | Example                                                                                                                                                                                                                                       | Duration | Easing                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| `hover`  | （示例动效见原文） | `200ms`   | `$gl-easing-out-cubic` |
| `focus`  | （示例动效见原文）              | `200ms`  | `$gl-easing-out-cubic` |
| `active` | （示例动效见原文）                           | `500ms`  | `$gl-easing-out-cubic` |

| Do                                                                                                                                                                                                                                                                                                                                                                                      | Don't                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| （示例动效见原文）
Mimic the animation timing of real-world objects. Focus ring animates in 200ms.                                                                     | （示例动效见原文）（示例动效见原文）
Avoid both instant and slow animations. The instant animation in the first example makes the interface feel less lively. The slow animation in the second example makes the interface feel sluggish.                                                      |
| （示例动效见原文）
Use cubic-bezier easing for focus feedback to make the animation appear more natural. The input focus ring accelerates quickly and slows as it stops. | （示例动效见原文）（示例动效见原文）
Avoid using linear or other default easing functions for focus feedback animations. The first example uses linear easing for the focus ring. The second example uses default easing. These transitions make the focus ring feel less lively. |

#### List components state change

Components like navigation, tables, or those that contain a list of options have many interactive elements in close proximity. To prevent perceptions of slow performance, feedback should be fast.

| State   | Example                                                                                                                                                                                                                                                        | Duration | Easing                 |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| `hover` | （示例动效见原文） | `100m`   | `$gl-easing-out-cubic` |
| `focus` | （示例动效见原文）              | `100ms`  | `$gl-easing-out-cubic` |

#### Loading feedback

Set the button to the loading state following a user action, if the result of the action occurs on the same page without a reload.

```vue
<!-- live-example title="Loading button" -->
<gl-button loading>This is a button</gl-button>
```

#### Positive and negative feedback

### Accessibility

A component should change state instantly when `prefers-reduced-motion` is enabled unless it's essential for the workflow. Instantly changing state doesn't mean no animation. It should be invisible for users, but visible for the browser because some JavaScript actions rely on UI animation, so animation should last `0.01ms`.

```css
@media (prefers-reduced-motion: reduce) {
  .element {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
