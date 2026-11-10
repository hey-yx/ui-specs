---
title: "GitLab Pajamas · Foundation · Animation 动效"
source: https://design.gitlab.com/product-foundations/animation-fundamentals/
section: motion
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-motion-animation
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Animation 动效

> 来源：[https://design.gitlab.com/product-foundations/animation-fundamentals/](https://design.gitlab.com/product-foundations/animation-fundamentals/)

---

Animation is a tool to help convey important relationships, changes, or transitions between elements. It's used sparingly and intentionally, highlighting the right elements at the right moment.

## Types of animation

1. **[Feedback](https://design.gitlab.com/product-foundations/animation-feedback)**: Confirm a user interaction with an interactive element.
1. **Focus**: Highlight important content outside of a user's current context.
1. **Explanation**: Show a user an element's properties, and its relationship to other elements.
1. **Engagement**: Help a user feel supported while waiting.
1. **Emotional**: Build emotional bonds with a user and express the brand — it can make a user feel welcome and supported.

## Principles

Use animation deliberately to enhance the experience without dominating it. Animation should not be added without a good reason. Too much animation can distract a user and disrupt their task.

- **Be realistic.** An animation should feel natural and mirror traits from the real world, such as acceleration, gravity, and volume.
- **Be purposeful.** An animation should assist and support the user experience without distracting from it.
- **Be optional and accessible.** An animation should respect the user's motion preferences by using the `prefers-reduced-motion` CSS media query.

## Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the animation feel more natural, cohesive, and connected.

| Example                                                                                                                                                                   | Variable               | Value                               | Use                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------- | -------------------------- |
| （示例动效见原文）      | `$gl-easing-linear`    | `linear`                            |                            |
| （示例动效见原文）    | `$gl-easing-default`   | `ease`                              | Hover animation            |
| （示例动效见原文） | `$gl-easing-out-cubic` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Focus and action animation |

## Duration

The duration is the time an animation takes from start to finish. The animated element's scale, easing, and complexity should influence the total duration. This means that the greater the distance traveled and the more complex the animated object, the longer the animation duration should be.

| Value   | Use                                                |
| ------- | -------------------------------------------------- |
| `100ms` | List item hover and focus transition               |
| `200ms` | Hover and focus transition of interactive elements |
| `500ms` | Action feedback                                    |
| `600ms` | Position changes, complex transitions              |

## Patterns

Patterns are reusable animations.

### Page auto-scroll

An auto-scroll transition can be used to bring a content block into view while sticky or fixed elements remain in place. For example, a link in a header can smoothly scroll a section of the page into view that was previously outside of the browser's viewport. Likewise, when a user navigates to a section of a page from an external link, the page can smoothly scroll to that section after it loads.

### Skeleton loading

A [skeleton loader](https://design.gitlab.com/components/skeleton-loader) uses a horizontally pulsing animation with a linear `1s` timing. Learn more about [skeleton loaders](https://design.gitlab.com/components/skeleton-loader).
