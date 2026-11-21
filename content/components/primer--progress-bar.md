---
title: "GitHub Primer · Component · Progress bar"
source: https://raw.githubusercontent.com/primer/design/main/content/components/progress-bar.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-progress-bar
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Progress bar

> 来源：https://primer.style/components/progress-bar

![](https://user-images.githubusercontent.com/2313998/227374230-647f77d0-4e50-44de-a663-b94a0e63befe.png)

## Usage

A progress bar is a simple chart that can be used to show how complete something is, or visualize parts that make up a whole.

### Best practices

![](https://user-images.githubusercontent.com/2313998/227374232-f0f8d3dd-b4da-4f8b-a528-932d82b012da.png)

When using multiple segments, use colors that are easy to tell apart and include a legend that identifies what each segment represents.

![](https://user-images.githubusercontent.com/2313998/227374235-3cfc45ba-e0f6-4c50-9d73-de812b084d59.png)

Default to pairing the progress bar with text that explicitly shows the value(s) of the filled segment(s). Text values are not explicitly required, but should only be omitted when the progress is intentionally vague.

    ![](https://user-images.githubusercontent.com/2313998/227374238-9cc0053c-6b09-45c4-bd6a-e5abbf3a8cc2.png)
    Limit the number of segments.

    ![](https://user-images.githubusercontent.com/2313998/227374240-aa7e2faa-d7cb-4862-ac07-1d755eff50d5.png)
    Don't overload a progress bar with too many segments.

When using multiple segments, avoid overwhelming users by with too many segments. This is especially important for narrow progress bars. Consider a different kind of chart for these cases.

## Options

### With multiple segments

A progress bar may use segments to represent multiple parts of a whole.

![](https://user-images.githubusercontent.com/2313998/227374241-9f750ba7-993f-4ae6-aaa0-71189cea7aad.png)

### Color

The color of the filled part(s) of the progress bar may be customized. Default to using [`success.emphasis`](https://primer.style/primitives/colors#success) for a progress bar that only shows a single segment.

![](https://user-images.githubusercontent.com/2313998/227374242-17251995-3001-4fca-b450-eb9c510bee22.png)

### Size

The size may be adjusted to adapt the progress bar to different contexts.

Size options:

- Small
- Medium (default)
- Large

![](https://user-images.githubusercontent.com/2313998/227374243-798808a3-1cb0-40b1-827c-e06925d1d4a4.png)

### Width

By default, a progress bar will fill it's parent. However, a progress bar can be any width.

![](https://user-images.githubusercontent.com/2313998/227374245-3e64d14f-5cf8-4710-bc34-1393bd39877a.png)

## Accessibility

When rendering multiple segments, the segment colors should have a 3:1 contrast ratio with colors of adjacent segments.

Progress bars can only be interpreted by sighted users. Include a text description to support assistive technologies like screen readers.

For example, "tasks: 8 of 10 complete" for a single segment, or "tasks: 80 done, 14 in progress, 6 open" for multiple segments.

![](https://user-images.githubusercontent.com/2313998/227374246-1e06193f-34e8-411f-9aee-6eb212923059.png)

If the progress bar value is already shown as text adjacent to the progress bar, don't use a redundant label for the progress bar.

![](https://user-images.githubusercontent.com/2313998/227374248-4c1fdb50-903a-4725-93e9-40eabb11baca.png)

### Known accessibility issues (GitHub staff only)
