---
title: "web.dev · 无障碍：色彩与对比度"
source: https://raw.githubusercontent.com/GoogleChrome/web.dev/main/src/site/content/en/learn/accessibility/color-contrast/index.md
section: a11y
tag: "课程"
fetched: 2026-10-19
status: full
id: a11y-3
publisher: "Google web.dev"
---

# web.dev · 无障碍：色彩与对比度

> 来源：[https://raw.githubusercontent.com/GoogleChrome/web.dev/main/src/site/content/en/learn/accessibility/color-contrast/index.md](https://raw.githubusercontent.com/GoogleChrome/web.dev/main/src/site/content/en/learn/accessibility/color-contrast/index.md)

---

Have you ever tried to read text on a screen and found it difficult to read due
to the color scheme or struggled to see the screen in a very bright or
low-light environment? Or maybe you are someone with a more permanent color
vision issue, like the estimated [300 million people with color blindness](https://www.colourblindawareness.org/colour-blindness/)
or the [253 million people with low vision](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5820628/)? 

As a designer or developer, you need to understand how people perceive color
and contrast, whether temporary, situationally, or permanently. This will help
you best support their visual needs.

This module will introduce you to some accessible color and contrast fundamentals.

## Perceiving color

Did you know that objects do not possess color but reflect wavelengths of 
light? When you see color, your eyes receive and process those wavelengths and 
convert them to colors.

<figure>

</figure>

When it comes to digital accessibility, we talk about these wavelengths in
terms of hue, saturation, and lightness (HSL). The HSL model was created as an
alternative to the RGB color model and more closely aligns with how a human
perceives color.

In CSS, a color can be specified in many ways, such as using color names, RGB,
RGBa, HEX, HSL, HSLa, HSV, or HSVa values. HSLa is similar to HSL, only an
alpha value has been added. Alpha is a measurement of opacity and is defined as
a number between 0.0 (fully transparent) and 1.0 (fully opaque).

_Hue_ is a qualitative way to describe a color, such as red, green, or blue,
where each hue has a specific spot on the color spectrum with values ranging
from 0 to 360, with red at 0, green at 120, and blue at 240.

Saturation is the intensity of a color, measured in percentages ranging from 0%
to 100%. A color with full saturation (100%) would be very vivid, while a color
with no saturation (0%) would be grayscale or black and white.

Lightness is a color's light or dark character, measured in percentages ranging
from 0% (black) to 100% (white). 

## Measuring color contrast

To help support people with various visual disabilities, the WAI group created a
[color contrast formula](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) to
ensure [enough contrast exists](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
between the text and its background. When these color contrast ratios are
followed, people with moderately low vision can read text on the background
without needing contrast-enhancing assistive technology.

Let's look at images with a vibrant color palette and compare how that image
would appear to those with specific forms of color blindness.

<div class="switcher">
<figure>

    <figcaption>
      Photo by Alexander Grey on <a href="https://unsplash.com/photos/QGQz-IBBl5w">Unsplash</a>.
    </figcaption>
</figure>
<figure>

      <figcaption>        
        Photo by Clark Van Der Beken on <a href="https://unsplash.com/photos/xFdrt8YIoJc">Unsplash</a>.
      </figcaption>
</figure>
</div>

On the left, the image shows rainbow sand with purple, red, orange, yellow, aqua green, light blue, and dark blue colors. On the right is a brighter, multicolored rainbow pattern.

### Deuteranopia

<div class="switcher">
<figure>

</figure>
<figure>

</figure>
</div>

[Deuteranopia](https://www.color-blindness.com/deuteranopia-red-green-color-blindness/)
(commonly known as green blind) occurs in 1% to 5% of males, 0.35% to 0.1% of
females.

People with Deuteranopia have a reduced sensitivity to green light. This color blindness filter simulates what this type of color blindness might look like.

### Protanopia

<div class="switcher">
<figure>

</figure>
<figure>

</figure>
</div>

[Protanopia](https://www.color-blindness.com/protanopia-red-green-color-blindness/)
(commonly known as red blind) occurs in 1.01% to 1.08% of males and 0.02% of
0.03% of females.

People with Protanopia have a reduced sensitivity to red light. This color blindness filter simulates what this type of color blindness might look like.

### Achromatopsia or Monochromatism

<div class="switcher">
<figure>

</figure>
<figure>

</figure>
</div>

[Achromatopsia or Monochromatism](https://www.color-blindness.com/2007/07/20/monochromacy-complete-color-blindness/) (or complete color blindness) occurs very, very rarely.

People with Achromatopsia or Monochromatism have almost no perception of red,
green, or blue light. This color blindness filter simulates what this type of
color blindness might look like.

### Calculate color contrast

The color contrast formula uses the
[relative luminance](https://www.w3.org/TR/WCAG/#dfn-relative-luminance) of
colors to help determine contrast, which can range from 1 to 21. This formula
is often shortened to `[color value]:1`. For example, pure black against pure
white has the largest color contrast ratio at `21:1`.

```text
(L1 + 0.05) / (L2 + 0.05)
L1 is the relative luminance of the lighter color
L2 is the relative luminance of the darker colors
```

Regular-sized text, including images of text, must have a color contrast ratio
of `4.5:1` to pass the
[minimum WCAG requirements for color](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
Large-sized text and essential icons must have a color contrast ratio of `3:1`.
Large-sized text is characterized by being at least 18pt / 24px or 14pt /
18.5px bolded. Logos and decorative elements are exempt from these color
contrast requirements.

Thankfully, no advanced math is required as there are a lot of tools that will
do the color contrast calculations for you. Tools like
[Adobe Color](https://color.adobe.com/create/color-accessibility),
[Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/),
[Leonardo](https://leonardocolor.io/), and
[Chrome's DevTools color picker](https://developer.chrome.com/docs/devtools/accessibility/reference/#contrast)
can quickly tell you the color contrast ratios and offer suggestions to help
create the most inclusive color pairs and palettes.

## Using color

Without good color contrast levels in place, words, icons, and other graphical
elements are [hard to discover](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html),
and the design can quickly become inaccessible. But it's also important to pay
attention to [how the color is used](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
on the screen, as you cannot use color alone to convey information, actions, or
distinguish a visual element.

For example, if you say, "[click the green button to continue](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html),"
but omit any additional content or identifiers to the button, it would be
difficult for people with certain types of colorblindness to know which button
to click. Similarly, many graphs, charts, and tables use color alone to convey
information. Adding another identifier, like a pattern, text, or icon, is
crucial to help people understand the content.

Reviewing your digital products in grayscale is a good way to detect potential color issues quickly.

## Color-focused media queries

Beyond checking for color contrast ratios and the use of color on your screen,
you should consider applying the increasingly popular and supported
[media queries](/learn/design/media-features/#preferences) that offer the users
more control over what is displayed on the screen.

For example, using the [`@prefers-color-scheme`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) media query, you can create a dark theme, which can be helpful to people with [photophobia](https://w3c.github.io/low-vision-a11y-tf/requirements.html#light-and-glare-sensitivity) or light sensitivity. You could also build a high contrast theme with [`@prefers-contrast`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast), which supports people with color deficiencies and [contrast sensitivity](https://w3c.github.io/low-vision-a11y-tf/requirements.html#contrast-sensitivity).

There are additional media queries and OS settings to consider for color
accessibility, but they are far less supported than the two listed in this
module. See the article [Operating System and Browser Accessibility Display Modes](https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/)
for more information on the various OS accessibility settings.

### Prefers color scheme

The media query `@prefers-color-scheme` allows users to choose a light or
dark-themed version of the website or app they are visiting. You can see this
theme change in action by changing your light/dark preference settings and
navigating to a browser that supports this media query. Review the
[Mac](https://support.apple.com/en-us/HT208976) and
[Windows](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/) instructions for dark mode.

<figure>

<figcaption>macOS general settings for appearance.</figcaption>
</figure>

Compare light and dark mode.

<div class="switcher">
  <figure>

    <figcaption>Light mode.</figcaption>
  </figure>
  <figure>

    <figcaption>Dark mode.</figcaption>
  </figure>
</div>

### Prefers contrast

The [`@prefers-contrast`](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-contrast)
media query checks the user's OS settings to see if high contrast is toggled on
or off. You can see this theme change in action by changing your contrast
preference settings and navigating to a browser that supports this media query
([Mac](https://support.apple.com/lv-lv/guide/mac-help/unac089/mac) and [Windows](https://support.microsoft.com/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696) contrast mode settings).

Compare regular and high contrast.

<div class="switcher">
  <figure>

    <figcaption>Light mode, no contrast preference.</figcaption>
  </figure>
  <figure>

    <figcaption>Dark mode, high contrast preference.</figcaption>
  </figure>
</div>

### Layering media queries

You can use multiple color-focused media queries to give your users even more
choices. In this example, we stacked `@prefers-color-scheme` and
`@prefers-contrast` together.

Compare both color and contrast.

<div class="switcher">
  <figure>

    <figcaption>Light mode, no contrast preference.</figcaption>
  </figure>
  <figure>

    <figcaption>Dark mode, no contrast preference.</figcaption>
  </figure>
</div>

<div class="switcher">
  <figure>

    <figcaption>Light mode, high contrast preference.</figcaption>
  </figure>
  <figure>

    <figcaption>Dark mode, high contrast preference.</figcaption>
  </figure>
</div>
