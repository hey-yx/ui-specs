---
title: "W3C · CSS Containment Level 3（容器查询）"
source: https://www.w3.org/TR/css-contain-3/
section: standards
tag: "语法标准"
fetched: 2026-11-07
status: full
id: standards-6
publisher: "W3C"
---

# W3C · CSS Containment Level 3（容器查询）

> 来源：[https://www.w3.org/TR/css-contain-3/](https://www.w3.org/TR/css-contain-3/)

---

This is a diff spec over [CSS Containment Level 2](https://www.w3.org/TR/css-contain-2/). It is currently an Exploratory Working Draft: if you are implementing anything, please use Level 2 as a reference. We will merge the Level 2 text into this draft once it reaches CR.

### 1.1.  Module Interactions

This document defines new features not present in earlier specifications. In addition, it aims to replace and supersede [CSS-CONTAIN-1] once stable.

### 1.2.  Value Definitions

This specification follows the [CSS property definition conventions](https://www.w3.org/TR/CSS2/about.html#property-defs) from [CSS2] using the [value definition syntax](https://www.w3.org/TR/css-values-3/#value-defs) from [CSS-VALUES-3]. Value types not defined in this specification are defined in CSS Values & Units [CSS-VALUES-3]. Combination with other CSS modules may expand the definitions of these value types.

In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the [CSS-wide keywords](https://www.w3.org/TR/css-values-4/#css-wide-keywords) as their property value. For readability they have not been repeated explicitly.

## 2\.  Strong Containment: the [contain](https://www.w3.org/TR/css-contain-1/#propdef-contain) property

[CSS Containment 2 § 2 Strong Containment: the contain property](https://drafts.csswg.org/css-contain-2/#contain-property)

inline-size
     This value turns on inline-size containment for the element. This prevents the [inline-size](https://www.w3.org/TR/css-writing-modes-4/#inline-size) of its [principal box](https://www.w3.org/TR/css-display-3/#principal-box) from directly depending on its contents. 

Note: There can still be indirect dependencies, see § 3.1 Inline-Size Containment.

## 3\.  Types of Containment

[CSS Containment 2 § 3 Types of Containment](https://drafts.csswg.org/css-contain-2/#containment-types)

### 3.1.  Inline-Size Containment

Giving an element inline-size containment applies [size containment](https://www.w3.org/TR/css-contain-1/#size-containment) to the [inline-axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) sizing of its [principal box](https://www.w3.org/TR/css-display-3/#principal-box). This means the inline-axis [intrinsic sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-size) of the principal box are determined as if the element had no content. However, content continues to impact the box’s [block-axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis) intrinsic sizes as usual, and the box is allowed to [fragment](https://www.w3.org/TR/css-break-3/#fragmentation) normally in the block axis.

Note: In some cases, a box’s [block-axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis) [intrinsic sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-size) can impact layout in the parent [formatting context](https://www.w3.org/TR/css-display-3/#formatting-context) in ways that affect the box’s [inline size](https://www.w3.org/TR/css-writing-modes-4/#inline-size) (e.g. by triggering scrollbars on an ancestor element), creating a dependency of the box’s inline size on its own content. If this changed inline size results in a different [block size](https://www.w3.org/TR/css-writing-modes-4/#block-size), that new block size can loop into further impacting the parent formatting context, but not in a way that reverts it to the previously-problematic layout. 

For example, if scrollbars were introduced, they are not then removed, even if the consequent [block size](https://www.w3.org/TR/css-writing-modes-4/#block-size) is small enough to not need them; or if a box’s logical height collides with a lower-placed float and is cleared down to where it also has more available inline space and thus becomes short enough to not have collided, it is not them moved back up to its previous problematic size and position.

Thus, although inline-size containment prevents the box’s content from directly affecting its [inline size](https://www.w3.org/TR/css-writing-modes-4/#inline-size) through its [inline-axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) [intrinsic sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-size), its inline size can still indirectly depend on its contents by their effect on its [block size](https://www.w3.org/TR/css-writing-modes-4/#block-size).

In general, the relationship between an element’s inline size and it’s block size is unpredictable and non-monotonic, with the block size capable of shifting up and down arbitrarily as the inline size is changed. Infinite cycles are prevented by ensuring that layout does not revert to a previous (known-problematic) state, even if a naive analysis of the constraints would allow for such; in other words, layout always “moves forward”. We believe that current CSS layout specifications incorporate such rules, but to the extent that they don’t, please [inform the CSSWG](https://github.com/w3c/csswg-drafts/issues) so that these errors can be corrected.

Consider this example, where float placement creates a dependency of block sizes on inline sizes: 

    <section style="width: 200px; border: solid; display: flow-root;">
      <div style="float: left; width: 50px; height: 80px; background: blue;"></div>
      <div style="float: right; width: 50px; height: 80px; background: blue;"></div>
      <div style="float: left; width: 160px; height: 80px; background: navy;"></div>

      <article style="border: solid orangered; display: flow-root; min-width: min-content">
        <div style="background: orange; aspect-ratio: 1/1;">
          Article
        </div>
      </article>
    </section>

The block layout algorithm will first place the floating boxes, with the first two sitting in the left and right corners of the container, and the third, being too wide to fit between, being pushed below them.

The following `article` will then be laid out. Because it is [display: flow-root](https://www.w3.org/TR/css-display-3/#propdef-display), it cannot intersect any floats, and thus must take them into account when figuring out how to size and position itself.

The layout engine first attempts to place the `article` flush with the top of the container, resulting a 100px width, plenty wide enough to accommodate its [min-content size](https://www.w3.org/TR/css-sizing-3/#min-content). However, due to the [aspect-ratio](https://www.w3.org/TR/css-sizing-4/#propdef-aspect-ratio) of its child, this would cause the `article` to be 100px tall as well, which would intersect the third float 80px below, so this layout opportunity is discarded.

It then attempts to position the `article` flush with the top of the third float, in the narrow 40px-wide space to its right. However, since the `article`’s [min-width](https://www.w3.org/TR/css-sizing-3/#propdef-min-width) makes it too large to fit in the 40px-wide space beside the third float, it shifts below that one as well, forming a 200px square below all the floated boxes.

If the [min-width](https://www.w3.org/TR/css-sizing-3/#propdef-min-width) is removed from the `article`, or if inline-size containment is added to either the `article` or `header` (causing min-width: min-content to resolve to zero), then the `article` will fit as a 40px square next to the final floated `div` (possibly with some of its content overflowing).

At this point, the width and height of the `article` (40px each) _would_ fit back in the first considered space, flush with the top of the container. However, the box is not returned to the previous position, because the layout engine knows already that this position would result in an invalid layout.

Giving an element inline-size containment has no effect if any of the following are true:

## 4\.  Container Queries

While [media queries](https://www.w3.org/TR/mediaqueries-5/#media-query) provide a method to query aspects of the user agent or device environment that a document is being displayed in (such as viewport dimensions or user preferences), container queries allow testing aspects of elements within the document (such as box dimensions or computed styles).

By default, all elements are query containers for the purpose of container style queries, and can be established as query containers for container size queries by specifying the additional query types using the container-type property (or the container [shorthand](https://www.w3.org/TR/css-cascade-5/#shorthand-property)). Style rules applying to a query container’s [shadow-including descendants](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) can be conditioned by querying against it, using the @container [conditional group rule](https://www.w3.org/TR/css3-conditional/#conditional-group-rule).

For example, we can define the main content area and sidebar as containers, and then describe a .media-object that changes from vertical to horizontal layout depending on the size of its container: 

    main, aside {
      container: my-layout / inline-size;
    }

    .media-object {
      display: grid;
      grid-template: 'img' auto 'content' auto / 100%;
    }

    @container my-layout (inline-size > 45em) {
      .media-object {
        grid-template: 'img content' auto / auto 1fr;
      }
    }

Media objects in the main and sidebar areas will each respond to their own container context.

For selectors with pseudo elements, query containers can be established by the [shadow-including inclusive ancestors](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-ancestor) of the [ultimate originating element](https://www.w3.org/TR/selectors-4/#ultimate-originating-element).

It follows that: 

  * Pseudo elements themselves can not be query containers

  * [::before](https://www.w3.org/TR/css-pseudo-4/#selectordef-before), [::after](https://www.w3.org/TR/css-pseudo-4/#selectordef-after), [::marker](https://www.w3.org/TR/css-pseudo-4/#selectordef-marker), and [::backdrop](https://fullscreen.spec.whatwg.org/#css-pe-backdrop) query their originating elements

  * [::first-letter](https://www.w3.org/TR/css-pseudo-4/#selectordef-first-letter) and [::first-line](https://www.w3.org/TR/css-pseudo-4/#selectordef-first-line) query their originating elements, even if the [fictional tag sequence](https://www.w3.org/TR/css-pseudo-4/#fictional-tag-sequence) may push the `::first-line` past other elements for the purpose of inheritance and rendering

  * Multiple pseudo elements do not allow pseudo elements to be query containers for other pseudo elements. E.g., the host, but not the `::part()`, can be the query container for `::before` in `host::part()::before`. Similarly, `::before` can not be the query container for the `::marker` in `div::before::marker`

  * [::slotted()](https://drafts.csswg.org/css-scoping-1/#selectordef-slotted) selectors can query containers inside the shadow tree, including the slot itself

  * [::part()](https://www.w3.org/TR/css-shadow-parts-1/#selectordef-part) selectors can query its originating host, but not internal query containers inside the shadow tree

  * [::placeholder](https://www.w3.org/TR/css-pseudo-4/#selectordef-placeholder) and [::file-selector-button](https://www.w3.org/TR/css-pseudo-4/#selectordef-file-selector-button) can query the input element, but do not expose any internal containers if the input element is implemented using a shadow tree

A ::before selector querying the size of the originating element: 

    <style>
      #container {
        width: 100px;
        container-type: inline-size;
      }
      @container (inline-size < 150px) {
        #inner::before {
          content: "BEFORE";
        }
      }
    </style>
    <div id=container>
      <span id=inner></span>
    </div>

A ::slotted() selector for styling a shadow host child can query a container in the shadow tree: 

    <div id=host style="width:200px">
      <template shadowroot=open>
        <style>
          #container {
            width: 100px;
            container-type: inline-size;
          }
          @container (inline-size < 150px) {
            ::slotted(span) {
              color: green;
            }
          }
        </style>
        <div id=container>
          <slot />
        </div>
      </template>
      <span id=slotted>Green</span>
    </div>

### 4.1.  Creating Query Containers: the container-type property

The container-type property establishes the element as a query container for the purpose of container queries that require explicit containment (such as container size queries), allowing [style rules](https://www.w3.org/TR/css-syntax-3/#style-rule) styling its descendants to query various aspects of its sizing and layout, and respond accordingly.

Unless otherwise noted, all elements are query containers for the purpose container queries that do no require explicit containment (such as container style queries), reagardless of the specified container-type.

Values have the following meanings:

size
     Establishes a query container for container size queries on both the [inline](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) and [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis). Applies [layout containment](https://www.w3.org/TR/css-contain-1/#layout-containment), [style containment](https://drafts.csswg.org/css-contain-2/#style-containment), and [size containment](https://www.w3.org/TR/css-contain-1/#size-containment) to the [principal box](https://www.w3.org/TR/css-display-3/#principal-box). 
inline-size
     Establishes a query container for container size queries on the container’s own [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis). Applies [layout containment](https://www.w3.org/TR/css-contain-1/#layout-containment), [style containment](https://drafts.csswg.org/css-contain-2/#style-containment), and inline-size containment to the [principal box](https://www.w3.org/TR/css-display-3/#principal-box). 
normal
     The element is not a query container for any container size queries, but remains a query container for container style queries. 

For example, authors can create container-responsive typography, adjusting [font-size](https://www.w3.org/TR/css-fonts-4/#propdef-font-size), [line-height](https://www.w3.org/TR/CSS2/visudet.html#propdef-line-height), and other typographic concerns based on the size of a container: 

    aside, main {
      container-type: inline-size;
    }

    h2 { font-size: 1.2em; }

    @container (width > 40em) {
      h2 { font-size: 1.5em; }
    }

The 40em value used in the query condition is relative to the [computed value](https://www.w3.org/TR/css-cascade-5/#computed-value) of [font-size](https://www.w3.org/TR/css-fonts-4/#propdef-font-size) on the relevant query container.

Containers can also expose computed style values for querying. This can be useful for toggling behavior across multiple properties: 

    section {
      container-type: style;
    }

    @container (--cards: small) {
      article {
        border: thin solid silver;
        border-radius: 0.5em;
        padding: 1em;
      }
    }

### 4.2.  Naming Query Containers: the container-name property

The container-name property specifies a list of query container names. These names can be used by @container rules to filter which query containers are targeted.

none
     The query container has no query container name. 
[<custom-ident>](https://www.w3.org/TR/css-values-4/#identifier-value)
     Specifies a query container name as an [identifier](https://www.w3.org/TR/css-values-4/#css-css-identifier). The keywords none, and, [not](https://www.w3.org/TR/mediaqueries-5/#valdef-media-not), and or are excluded from this [<custom-ident>](https://www.w3.org/TR/css-values-4/#identifier-value). 

In some cases, we want to query aspects of a specific container, even if it’s not the nearest ancestor container. For example, we might want to query the height of a main content area, and the width of a more nested inline-container. 

    main {
      container-type: size;
      container-name: my-page-layout;
    }

    .my-component {
      container-type: inline-size;
      container-name: my-component-library;
    }

    @container my-page-layout (block-size > 12em) {
      .card { margin-block: 2em; }
    }

    @container my-component-library (inline-size > 30em) {
      .card { margin-inline: 2em; }
    }

### 4.3.  Creating Named Containers: the container shorthand

The container [shorthand property](https://www.w3.org/TR/css-cascade-5/#shorthand-property) sets both container-type and container-name in the same declaration. If <'container-type'> is omitted, it is reset to its [initial value](https://www.w3.org/TR/css-cascade-5/#initial-value).

We can define both a container-type and container-name using the shorthand syntax: 

    main {
      container: my-layout / size;
    }

    .grid-item {
      container: my-component / inline-size;
    }

### 4.4.  Container Queries: the @container rule

The @container rule is a [conditional group rule](https://www.w3.org/TR/css3-conditional/#conditional-group-rule) whose condition is a container query, which is a boolean combination of container size queries and/or container style queries. Style declarations within the [<stylesheet>](https://www.w3.org/TR/css-syntax-3/#typedef-stylesheet) block of an @container rule are [filtered](https://www.w3.org/TR/css-cascade-4/#filtering) by its condition to only match when the container query is true for their element’s query container.

The syntax of the @container rule is:

    @container [ <container-name> ][?](https://www.w3.org/TR/css-values-4/#mult-opt) <container-condition> {
      [<stylesheet>](https://www.w3.org/TR/css-syntax-3/#typedef-stylesheet)
    }

where:

    <container-name> = [<custom-ident>](https://www.w3.org/TR/css-values-4/#identifier-value)
    <container-condition> = not <query-in-parens>
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) <query-in-parens> [ [ and <query-in-parens> ][*](https://www.w3.org/TR/css-values-4/#mult-zero-plus) [|](https://www.w3.org/TR/css-values-4/#comb-one) [ or <query-in-parens> ][*](https://www.w3.org/TR/css-values-4/#mult-zero-plus) ]
    <query-in-parens>     = ( <container-condition> )
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) ( <size-feature> )
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) style( <style-query> )
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) [<general-enclosed>](https://www.w3.org/TR/mediaqueries-5/#typedef-general-enclosed)

    <style-query>         = <style-condition> [|](https://www.w3.org/TR/css-values-4/#comb-one) <style-feature>
    <style-condition>     = not <style-in-parens>
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) <style-in-parens> [ [ and <style-in-parens> ][*](https://www.w3.org/TR/css-values-4/#mult-zero-plus) [|](https://www.w3.org/TR/css-values-4/#comb-one) [ or <style-in-parens> ][*](https://www.w3.org/TR/css-values-4/#mult-zero-plus) ]
    <style-in-parens>     = ( <style-condition> )
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) ( <style-feature> )
                          [|](https://www.w3.org/TR/css-values-4/#comb-one) [<general-enclosed>](https://www.w3.org/TR/mediaqueries-5/#typedef-general-enclosed)

The keywords none, and, [not](https://www.w3.org/TR/mediaqueries-5/#valdef-media-not), and or are excluded from the [<custom-ident>](https://www.w3.org/TR/css-values-4/#identifier-value) above.

For each element, the query container to be queried is selected from among the element’s ancestor query containers that are established as a valid query container for all the container features in the <container-condition>. The optional <container-name> filters the set of query containers considered to just those with a matching query container name.

Once an eligible query container has been selected for an element, each container feature in the <container-condition> is evaluated against that query container. If no ancestor is an eligible query container, then the container query is unknown for that element.

As with [media queries](https://www.w3.org/TR/mediaqueries-5/#media-query), we can string together multiple conditions in a single query list: 

    @container card (inline-size > 30em) and style(--responsive: true) {
      /* styles */
    }

The styles above will only be applied if there is an ancestor container named "card" that meets both the inline-size and style conditions.

Style rules defined on an element inside multiple nested container queries apply when all of the wrapping container queries are true for that element.

Note: Nested container queries can evaluate in relation to different containers, so it is not always possible to merge the individual <container-condition>s into a single query.

While it is not possible to query multiple containers in a single container query, that can be achieved by nesting multiple queries: 

    @container card (inline-size > 30em) {
      @container style(--responsive: true) {
        /* styles */
      }
    }

The styles above will only be applied if there is an ancestor container named "card" that meets the inline-size condition, as well as an ancestor container meeting style condition.

Global, name-defining [at-rules](https://www.w3.org/TR/css-syntax-3/#at-rule) such as [@keyframes](https://www.w3.org/TR/css-animations-1/#at-ruledef-keyframes) or [@font-face](https://www.w3.org/TR/css-fonts-5/#at-font-face-rule) or [@layer](https://www.w3.org/TR/css-cascade-5/#at-ruledef-layer) that are defined inside container queries are not constrained by the container query conditions.

### 4.5.  Animated Containers

A change in the evaluation of a container query must be part of a [style change event](https://www.w3.org/TR/css-transitions-1/#style-change-event), even when the change occurred because of [animation effects](https://www.w3.org/TR/web-animations-1/#effect-value).

A transition on a sibling element can indirectly affect the size of a container, triggering [style change events](https://www.w3.org/TR/css-transitions-1/#style-change-event) whenever container queries change their evaluation as a result: 

    main {
      display: flex;
      width: 300px;
    }

    #container {
      container-type: inline-size;
      flex: 1;
    }

    /* Resolved width is initially 200px, but changes as the transition
       on #sibling progresses. */
    #inner {
      transition: 1s background-color;
      background-color: tomato;
    }

    /* When this container query starts (or stops) applying, a transition
       must start on background-color on #inner. */
    @container (width <= 150px) {
      #inner {
        background-color: skyblue;
      }
    }

    #sibling {
      width: 100px;
      transition: width 1s;
    }

    #sibling:hover {
      width: 200px;
    }

    <main>
      <div id=container>
        <div id=inner>Inner</div>
      </div>
      <div id=sibling>Sibling</div>
    </main>

Changes in [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value) caused by container query length units must also be part of a [style change event](https://www.w3.org/TR/css-transitions-1/#style-change-event).

## 5\.  Container Features

A container feature queries a specific aspect of a query container.

### 5.1.  Size Container Features

A container size query allows querying the size of the query container’s [principal box](https://www.w3.org/TR/css-display-3/#principal-box). It is a boolean combination of individual size features (<size-feature>) that each query a single, specific dimensional feature of the query container. The syntax of a <size-feature> is the same as for a [media feature](https://www.w3.org/TR/mediaqueries-5/#media-feature): a feature name, a comparator, and a value. [mediaqueries-5] The boolean syntax and logic combining size features into a size query is the same as for [CSS feature queries](https://www.w3.org/TR/css3-conditional/#css-feature-queries). (See [@supports](https://www.w3.org/TR/css3-conditional/#at-ruledef-supports). [CSS-CONDITIONAL-3])

If the query container does not have a [principal box](https://www.w3.org/TR/css-display-3/#principal-box), or the principal box is not a [layout containment box](https://drafts.csswg.org/css-contain-2/#layout-containment-box), or the query container does not support container size queries on the relevant axes, then the result of evaluating the size feature is unknown.

[Relative length](https://www.w3.org/TR/css-values-4/#relative-length) units (including container query length units) in container query conditions are evaluated based on the the [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value) of the query container.

Note: This is different from the handling of relative units in [media queries](https://www.w3.org/TR/mediaqueries-5/#media-query).

For example, query containers with different font-sizes will evaluate [em](https://www.w3.org/TR/css-values-4/#em)-based queries relative to their own font sizes: 

    aside, main {
      container-type: inline-size;
    }

    aside { font-size: 16px; }
    main { font-size: 24px; }

    @container (width > 40em) {
      h2 { font-size: 1.5em; }
    }

The 40em value used in the query condition is relative to the [computed value](https://www.w3.org/TR/css-cascade-5/#computed-value) of [font-size](https://www.w3.org/TR/css-fonts-4/#propdef-font-size) on the relevant query container:

  * For any h2 inside aside, the query condition will be true above 640px.

  * For any h2 inside main, the query condition will be true above 960px.

#### 5.1.1.  Width: the width feature

The width container feature queries the [width](https://www.w3.org/TR/css-sizing-3/#width) of the query container’s [content box](https://www.w3.org/TR/css-box-4/#content-box).

#### 5.1.2.  Height: the height feature

The height container feature queries the [height](https://www.w3.org/TR/css-sizing-3/#height) of the query container’s [content box](https://www.w3.org/TR/css-box-4/#content-box).

#### 5.1.3.  Inline-size: the inline-size feature

The inline-size container feature queries the [size](https://www.w3.org/TR/css-sizing-3/#size) of the query container’s [content box](https://www.w3.org/TR/css-box-4/#content-box) in the query container’s [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis).

#### 5.1.4.  Block-size: the block-size feature

The block-size container feature queries the [size](https://www.w3.org/TR/css-sizing-3/#size) of the query container’s [content box](https://www.w3.org/TR/css-box-4/#content-box) in the query container’s [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis).

#### 5.1.5.  Aspect-ratio: the aspect-ratio feature

The aspect-ratio container feature is defined as the ratio of the value of the width container feature to the value of the height container feature.

#### 5.1.6.  Orientation: the orientation feature

Name: | orientation  
---|---  
For: | @container  
Value: | portrait [|](https://www.w3.org/TR/css-values-4/#comb-one) landscape   
Type: | discrete   

portrait
     The orientation container feature is portrait when the value of the height container feature is greater than or equal to the value of the width container feature. 
landscape
    Otherwise orientation is landscape. 

### 5.2.  Style Container Features

A container style query allows querying the [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value) of the query container. It is a boolean combination of individual style features (<style-feature>) that each query a single, specific property of the query container. The syntax of a <style-feature> is the same as for a [declaration](https://www.w3.org/TR/css-syntax-3/#declaration) [CSS-SYNTAX-3], and its query is true if the computed value of the given property on the query container matches the given value (which is also computed with respect to the query container), unknown if the property or its value is invalid or unsupported, and false otherwise. The boolean syntax and logic combining style features into a style query is the same as for [CSS feature queries](https://www.w3.org/TR/css3-conditional/#css-feature-queries). (See [@supports](https://www.w3.org/TR/css3-conditional/#at-ruledef-supports). [CSS-CONDITIONAL-3])

Style features that query a [shorthand property](https://www.w3.org/TR/css-cascade-5/#shorthand-property) are true if the [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value) match for each of its [longhand properties](https://www.w3.org/TR/css-cascade-5/#longhand), and false otherwise.

[Cascade-dependent keywords](https://drafts.csswg.org/css-cascade-5/#cascade-dependent-keyword), such as [revert](https://www.w3.org/TR/css-cascade-5/#valdef-all-revert) and [revert-layer](https://www.w3.org/TR/css-cascade-5/#valdef-all-revert-layer), are invalid as values in a style feature, and cause the container style query to be false.

Note: The remaining non-cascade-dependent [CSS-wide keywords](https://www.w3.org/TR/css-values-4/#css-wide-keywords) are [computed](https://www.w3.org/TR/css-cascade-5/#computed-value) with respect to the query container, the same as other values.

## 6\.  Container Relative Lengths: the cqw, cqh, cqi, cqb, cqmin, cqmax units

Container query length units specify a length relative to the dimensions of a query container. Style sheets that use container query length units can more easily move components from one query container to another.

The container query length units are:

For each element, container query length units are evaluated as container size queries on the relevant axis (or axes) described by the unit. The query container for each axis is the nearest ancestor container that accepts container size queries on that axis. If no eligible query container is available, then use the [small viewport size](https://www.w3.org/TR/css-values-4/#small-viewport-size) for that axis.

Note: In some cases cqi and cqb units on the same element will evaluate in relation to different query containers. Similarly, cqmin and cqmax units represent the larger or smaller of the cqi and cqb units, even when those dimensions come from different query containers.

Child elements do not inherit the relative values as specified for their parent; they inherit the [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value).

Authors can ensure that container query length units have an appropriate query container by applying them inside a container query that relies on the same container-type. Custom fallback values can be defined outside the container query: 

    /* The fallback value does not rely on containment */
    h2 { font-size: 1.2em; }

    @container (inline-size >= 0px) {
      /* only applies when an inline-size container is available */
      h2 { font-size: calc(1.2em + 1cqi); }
    }

## 7\. APIs

### 7.1.  The `CSSContainerRule` interface

The `CSSContainerRule` interface represents a @container rule.

    [[Exposed](https://webidl.spec.whatwg.org/#Exposed)=Window]
    interface CSSContainerRule : [CSSConditionRule](https://www.w3.org/TR/css3-conditional/#cssconditionrule) {
    };

`conditionText` of type `CSSOMString` (CSSContainerRule-specific definition for attribute on CSSConditionRule) 
    The `conditionText` attribute (defined on the `CSSConditionRule` parent rule), on getting, must return the condition that was specified, without any logical simplifications, so that the returned condition will evaluate to the same result as the specified condition in any conformant implementation of this specification (including implementations that implement future extensions allowed by the [<general-enclosed>](https://www.w3.org/TR/mediaqueries-5/#typedef-general-enclosed) extensibility mechanism in this specification). In other words, token stream simplifications are allowed (such as reducing whitespace to a single space or omitting it in cases where it is known to be optional), but logical simplifications (such as removal of unneeded parentheses, or simplification based on evaluating results) are not allowed. 

Add CSSOM API for CSSContainerRule [[Issue #7033]](https://github.com/w3c/csswg-drafts/issues/7033)

Container Queries should have a `matchContainer` method. This will be modeled on `[matchMedia()](https://www.w3.org/TR/cssom-view/#dom-window-matchmedia)` and the `[MediaQueryList](https://www.w3.org/TR/cssom-view/#mediaquerylist)` interface, but applied to Elements rather than the Window. When measuring layout sizes, it behaves Similar to `resizeObserver`, but it provides the additional Container Query syntax and features. [[Issue #6205]](https://github.com/w3c/csswg-drafts/issues/6205)

## 8\. Suppressing An Element’s Contents Entirely: the [content-visibility](https://drafts.csswg.org/css-contain-2/#propdef-content-visibility) property

[CSS Containment 2 § 4 Suppressing An Element’s Contents Entirely: the content-visibility property](https://drafts.csswg.org/css-contain-2/#content-visibility)

## 9\. Privacy and Security Considerations

[CSS Containment 2 § 5 Privacy and Security Considerations](https://drafts.csswg.org/css-contain-2/#priv-sec)

## Appendix A. Changes

This appendix is _informative_.

###  Changes since the 21 December 2021 First Public Working Draft

Significant changes since the [21 December 2021 First Public Working Draft](https://www.w3.org/TR/2021/WD-css-contain-3-20211221/) include:

[CSS Containment 2 § Changes](https://drafts.csswg.org/css-contain-2/#changes)

## Acknowledgments

Comments and previous work from Adam Argyle, Amelia Bellamy-Royds, Anders Hartvoll Ruud, Brian Kardell, Chris Coyier, Christopher Kirk-Nielsen, David Herron, Elika J. Etemad (fantasai), Eric Portis, Ethan Marcotte, Geoff Graham, Gregory Wild-Smith, Ian Kilpatrick, Jen Simmons, Kenneth Rohde Christiansen, L. David Baron, Lea Verou, Martin Auswöger, Martine Dowden, Mike Riethmuller, Morten Stenshorne, Nicole Sullivan, Rune Lillesveen, Scott Jehl Scott Kellum, Stacy Kvernmo, Theresa O’Connor, Una Kravets, and many others have contributed to this specification.

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification. 

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [RFC2119]

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this: 

Informative notes begin with the word “Note” and are set apart from the normative text with `class="note"`, like this: 

Note, this is an informative note.

Advisements are normative sections styled to evoke special attention and are set apart from other normative text with `<strong class="advisement">`, like this: **UAs MUST provide an accessible alternative.**

A style sheet is conformant to this specification if all of its statements that use syntax defined in this module are valid according to the generic CSS grammar and the individual grammars of each feature defined in this module. 

A renderer is conformant to this specification if, in addition to interpreting the style sheet as defined by the appropriate specifications, it supports all the features defined by this specification by parsing them correctly and rendering the document accordingly. However, the inability of a UA to correctly render a document due to limitations of the device does not make the UA non-conformant. (For example, a UA is not required to render color on a monochrome monitor.) 

An authoring tool is conformant to this specification if it writes style sheets that are syntactically correct according to the generic CSS grammar and the individual grammars of each feature in this module, and meet all other conformance requirements of style sheets as described in this module. 

So that authors can exploit the forward-compatible parsing rules to assign fallback values, CSS renderers **must** treat as invalid (and [ignore as appropriate](https://www.w3.org/TR/CSS21/conform.html#ignore)) any at-rules, properties, property values, keywords, and other syntactic constructs for which they have no usable level of support. In particular, user agents **must not** selectively ignore unsupported component values and honor supported values in a single multi-value property declaration: if any value is considered invalid (as unsupported values must be), CSS requires that the entire declaration be ignored.

Once a specification reaches the Candidate Recommendation stage, non-experimental implementations are possible, and implementors should release an unprefixed implementation of any CR-level feature they can demonstrate to be correctly implemented according to spec. 

To establish and maintain the interoperability of CSS across implementations, the CSS Working Group requests that non-experimental CSS renderers submit an implementation report (and, if necessary, the testcases used for that implementation report) to the W3C before releasing an unprefixed implementation of any CSS features. Testcases submitted to W3C are subject to review and correction by the CSS Working Group.
