---
title: "GitHub Primer · UI Pattern · Data visualization 数据可视化"
source: https://primer.style/ui-patterns/data-visualization/
section: patterns
tag: "规范"
fetched: 2026-11-01
status: full
id: patterns-40
publisher: "GitHub Primer"
---

# GitHub Primer · UI Pattern · Data visualization 数据可视化

> 来源：[https://primer.style/ui-patterns/data-visualization/](https://primer.style/ui-patterns/data-visualization/)

---

![A depiction of the anatomy of a chart component](https://user-images.githubusercontent.com/7265547/267488208-cf204662-bf3a-45a1-9c8f-1c21aa2a4549.png)

| Name         | Description                                                                                                                                                                                                          | Required                        |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Header       | Use to describe the contents of your chart. Keep the header title concise, but descriptive.                                                                                                                          | Yes                             |
| Subheader    | Use a sub header to provide additional context. If you choose not to show axis titles on your chart, you must give users context to the data on screen via a short description. ex. Showing new repositories by date | Yes                             |
| Legend       | Only show a legend when showing more than 1 data set                                                                                                                                                                 | Sometimes                       |
| Marks        | Chart marks are how you represent date on a chart. Common types of marks include bar, line, and area.                                                                                                                | Sometimes                       |
| Axis Titles  | Axis titles help users understand what is being measured in the displayed chart. If your chart doesn’t use titles, you must provide context to users via a description in the sub header.                            | Sometimes                       |
| Axis Labels  | Axis labels show the units of measurement for the chart.                                                                                                                                                             | Yes                             |
| Graph Lines  | Graph lines help users read the chart marks by connecting context to the axis labels. Some chart types only use horizontal lines and others only use vertical lines.                                                 | Yes                             |
| Axis         | The axis borders define the bounds of the chart.                                                                                                                                                                     | Yes                             |
| Point        | A point is a visual cue that is highlighted on hover.                                                                                                                                                                | Yes (used for line charts only) |
| Crosshair    | A crosshair is a visual cue shown in line charts, to help users connect the point to the axis label.                                                                                                                 | Yes (used for line charts only) |
| Tooltip      | Tooltips are shown on hover to display data at a given point on a chart. Note that there are single tooltips and multi-line tooltips.                                                                                | Yes                             |
| Toolbar Menu | The toolbar menu contains actions for additional chart interactions. For many chart types, users should be able to preview the data in a table and download the data in a CSV format.                                | Yes for most simple charts      |

You may see a number of different types of charts across GitHub, including the prolific contributions graph. Today, we support the creation of a specific set of charts and data visualizations, including:

- Bar charts
- Line charts
- Area charts
- Progress bars

We don't currently support the creation of new:

- Donut charts
- Sparklines

Stacked bar charts and progress bars should have a high contrast divider line between each segment. It helps to visually delineate between chart colors.

Chart / visualization marks need to be at a 3:1 ratio with the background.

**Note:** There aren’t clear rules on contrast between chart mark colors. We try our best to have reasonable contrast between elements so that they are distinguishable, because specific colors look similar for some types of colorblindness. (e.g. blue and purple look visually similar to some colorblind users). Again, this is where the high contrast divider line becomes helpful for bar charts and progress bars.

Sometimes there’s also meaning that is being conveyed with color that represents a state (error, success, critical), so in those cases, it can make sense to change the colors based on the semantic intent.
