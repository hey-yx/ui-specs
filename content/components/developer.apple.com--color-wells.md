---
title: "Apple HIG · Component · Color wells 颜色选择器"
source: https://developer.apple.com/design/human-interface-guidelines/color-wells
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-apple-color-wells
publisher: "Apple"
---

# Apple HIG · Component · Color wells 颜色选择器

> 来源：[https://developer.apple.com/design/human-interface-guidelines/color-wells](https://developer.apple.com/design/human-interface-guidelines/color-wells)

---

![A stylized representation of a color-selection popover extending down from an expanded button. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://developer.apple.com/tutorials/images/com.apple.HIG/components-color-well-intro@2x.png)

A color well displays a color picker when people tap or click it. This color picker can be the system-provided one or a custom interface that you design.

## Best practices
**Consider the system-provided color picker for a familiar experience.** Using the built-in color picker provides a consistent experience, in addition to letting people save a set of colors they can access from any app. The system-defined color picker can also help provide a familiar experience when developing apps across iOS, iPadOS, and macOS.

## Platform considerations
*No additional considerations for iOS, iPadOS, or visionOS. Not supported in tvOS or watchOS.*

### macOS
When people click a color well, it receives a highlight to provide visual confirmation that it’s active. It then opens a color picker so people can choose a color. After they make a selection, the color well updates to show the new color.

Color wells also support drag and drop, so people can drag colors from one color well to another, and from the color picker to a color well.
