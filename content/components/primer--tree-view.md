---
title: "GitHub Primer · Component · Tree view"
source: https://raw.githubusercontent.com/primer/design/main/content/components/tree-view.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-tree-view
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Tree view

> 来源：https://primer.style/components/tree-view

## Anatomy

![](https://user-images.githubusercontent.com/2313998/187719332-3ef9aa9e-476f-4e5a-93fa-5fbd203ece4a.png)

1. **Parent node**: A node that hides and shows child nodes by expanding and collapsing
2. **End node**: A node with no children
3. **Nesting level indicator lines**: Each line represents a level of nesting depth
4. **Chevron**: Toggles a parent node expanded or collapsed and indicates expanded/collapsed state
5. **Leading visual (optional)**: A visual cue for additional context
6. **Node label**: The text label for the node
7. **Trailing visual (optional)**: Same as a leading visual, but at the end

## Content

### Node label

Node labels should be a succinct title for whatever entity the node represents. For example, a file name.

By default, labels are truncated to a single line. However, node labels may be wrapped to multiple lines in cases where the entire label must always be visible.

When a node's text is truncated, it should still be accessible to users in some fashion. Truncation is only accessibly acceptable if there is some way for users - including those navigating with a keyboard - to see the non-truncated text.

    ![2 1 singleLineTruncation](https://user-images.githubusercontent.com/2313998/187719335-efd76d7a-40dc-4bc8-8053-64211dd97b51.png)

      Single line truncation

    ![2 2 multiLineLabel](https://user-images.githubusercontent.com/2313998/187719336-d85f8886-75d1-4b74-9e7a-766dd1fbc29d.png)

      Wrapping node label text

### Leading and trailing visuals

Leading and trailing visuals may be used as visual cues that communicate more information about a node.

If the leading or trailing visual contains useful information, make sure it has a screen-reader accessible text label. Note that the file and folder icons are not considered useful information, as the TreeView's underlying markup will communicate their presence.

Either all nodes have leading visuals, or no nodes have leading visuals. Leading visuals must be accompanied by a text label.

    ![3 1 DO-consistentLeadingViz](https://user-images.githubusercontent.com/2313998/187719338-9f860dfa-2110-4cf7-8d3b-583ff569605f.png)

      Render all nodes with leading visuals and text labels or just with text labels

    ![3 2 DONT-mixLeadingViz](https://user-images.githubusercontent.com/2313998/187719339-83fd7065-5b85-427f-8650-7fc0cae7214d.png)

      Don't have a tree where only some nodes have leading visuals

## Interaction

Keyboard users can expand or collapse nodes without activating them by using the left and right arrow keys.

To give cursor users an equivalent experience, there are two click areas:

- clicking the chevron only expands or collapses the node
- clicking anywhere else will activate the node

If the node cannot be activated, clicking anywhere on the node will expand it.

    ![4 1 hoverActivatable](https://user-images.githubusercontent.com/2313998/187719340-6f62c500-cd70-48b2-8fcf-18a7b6ef3151.png)
    Two click areas - toggle expanded or activate link

    ![4 2 hoverOnlyExpandable](https://user-images.githubusercontent.com/2313998/187719342-d4f9f6e9-6446-4479-846f-6d7c31fd832b.png)
    One click area - toggle expanded

Nodes may not contain any other interactive elements besides the chevron. Activating a node can only perform one action. For example, following a link.

    ![5 1 DO-singleActionPerNode](https://user-images.githubusercontent.com/2313998/187719344-abc7cfeb-82b0-4279-96df-ae732828c063.png)
    Limit nodes to a single action

    ![5 2 DONT-multiActionsPerNode](https://user-images.githubusercontent.com/2313998/187719346-0a3ad806-17a0-4414-a82b-7a1d78be7902.png)
    Don't put other interactive elements in a node

We have investigated the feasibility of supporting a context menu for each node, and that could be something we support in the future if we find we need it.

### States

![6 nodeStates](https://user-images.githubusercontent.com/2313998/187719347-b795a78e-a09e-4c19-9b90-1f181927e936.png)

Nodes have different visual treatments to indicate their state and hint what kind of user input they're ready to receive. These styles are inherited from the [action list](https://primer.style/components/action-list) component.

## Nesting

Nodes are visually nested using whitespace and alignment.

### Align leading icons

    Icons at the same level are center-aligned. The chevron should not break the alignment: parent nodes and child nodes
    keep their leading visuals aligned.

  ![19 leadingVizAlignment](https://user-images.githubusercontent.com/2313998/187768704-08fac391-f331-4a47-9181-073f1360677c.png)

### Indentation

  Each level of nesting increments the size of the indentation.
  ![20 nodesWithIndentations](https://user-images.githubusercontent.com/2313998/187768706-1910025a-f69b-487f-987b-319f3022cd09.png)

### Nesting level indicator lines

On devices with `:hover` support, the nesting indicator lines fade in when the user mouses over the entire component, or when there's focus inside the component.

On devices without `:hover`, the nesting indicator lines appear at all times.

  ![21 1 showLinesOnHover](https://user-images.githubusercontent.com/2313998/187768708-805527f9-3b7c-4f6b-ae37-e232f83916b6.png)
  ![21 2 alwaysShowLinesOnTouch](https://user-images.githubusercontent.com/2313998/187768711-2702a7aa-e902-4568-ab99-4570e28bf646.png)

### Handling deeply nested nodes

Navigating through deeply nested nodes can be cumbersome and visually clunky. If accessing nodes deeper than 10 levels deep is a common interaction for your use-case, reconsider whether a tree view is the best pattern.

Tree views are designed to be horizontally compact in order to support many levels of nesting and long node labels. This makes content truncation and horizontal overflow less likely to occur for deeply nested nodes, but infinite nesting makes those cases impossible to prevent entirely.

There are some strategies to avoid a tree view that horizontally overflows it's container:

- Allow the tree view's container to be manually resized
- Once a certain depth is reached, start the tree view from a deeper parent node and provide a way to navigate back up the tree
- Remove leading and trailing visuals

If a tree view is truly the best pattern for your use-case and none of the suggested strategies prevent horizontal overflow, opt for horizontal scrolling as a last resort instead of hiding overflowing content.

## Usage

### Tree views are only for hierarchical lists

A tree view solves a very specific problem. It's not a multi-purpose tool like an [action list](https://primer.style/components/action-list) or meant for site navigation like a [nav list](https://primer.style/components/nav-list).

Tree views are used to communicate a hierarchical list of items, and allow a user to navigate through, select, and take action on one or more items. A comparable experience would be a list of files in a code editor, or an operating system file explorer. While they may visually look like navigation, tree views have specific interaction modes and expectations for assistive technology that differs from other patterns. Trying to use a tree view for something that looks visually appropriate, but is not functionally inline with its intended use case may cause confusion or an unusable experience, especially if the user cannot see the screen.

  Before reaching for a tree view, first make sure that:

  the items in the tree view represent a list
  the list items are likely to have a parent-child relationship with more than 1 level of nesting
  the expand and collapse behavior aids in navigation instead of just making it more complex

    Some good cases for a tree view are:

    navigating the file structure of a repo
    navigating a codebase's symbols (types, constants, functions, etc) organized by their scope hierarchy

    A tree view would not be appropriate for:

    global sidebar navigation
    an FAQ that collapses answers under question headings

    ![7 1 DO-useForList](https://user-images.githubusercontent.com/2313998/187719349-c028a00f-0a27-4be2-bf67-815c2a036916.png)
    Use a tree view for a list

    ![7 2 DONT-useForAccordion](https://user-images.githubusercontent.com/2313998/187719350-de23e9ac-fd10-4e56-b2a4-aca93255adb7.png)
    Don't use a tree view for expanding and collapsing sections of content

### Expanding and collapsing nodes

A tree view can be a frustrating pattern if it forces users to spend a lot of time expanding and collapsing nodes to find what they're looking for.

#### Expanded by default

    When a child node is active, all of it's parent nodes should be expanded.
    If it's likely that a user will want to interact with all or most of the nodes in the tree, render the tree with all parent nodes expanded to start. For example: when reviewing a pull request, all of the changed files are shown to make it easy for reviewers to scan and navigate the changed files.

  ![8 openActiveParentNodes](https://user-images.githubusercontent.com/2313998/187719353-6708e315-28fb-422a-b65a-942ec963c36d.png)

#### Preserve expanded state when parent node is collapsed

    If a user expands nested parent nodes and then collapses a parent node higher in the hierarchy, persist the expanded
    parent nodes lower in the hierarchy. It could be frustrating to have to re-expand the nodes that were already
    opened.

#### Optionally combine parent nodes

    If no end nodes are in the ancestry and the parent nodes cannot be activated, you may combine parent nodes into a
    single parent node to reduce the levels of nesting. Less levels of nesting make for a more compact tree and less
    nodes for the user to expand to get to child nodes.

  ![10 combiningParentNodes](https://user-images.githubusercontent.com/2313998/187768688-4aeb4c79-5393-4e30-9da7-3a74b9d42257.png)

### Asynchronously loading child nodes

#### Show placeholder nodes (preferred)

    When we know the number of loading child nodes, show "skeleton" nodes until the nodes finish loading. This reassures
    the user that their request is in progress and provides a minimal preview of what's loading.

  ![11 skeletonLoadingNodes](https://user-images.githubusercontent.com/2313998/187719358-d3021980-4769-455d-9b7e-b295ffe5ccc6.png)

#### General loading indicator (fallback)

    When we don't know the number of loading child nodes, show a generic loading indicator.

  ![12 genericLoadingNodes](https://user-images.githubusercontent.com/2313998/187719359-bff335dc-fae5-4a82-9de9-752919309f61.png)

#### Handling loading errors

      Inform users why the data cannot be retrieved and give them a path to resolve it. The error message cannot appear
      in the tree view because it is not semantically a node in the tree. Instead, the error message should appear in a{' '}
      dialog with an optional call-to-action that can resolve the error.

      If the user dismisses the dialog, focus should be moved back to the collapsed parent node. If the user clicks a
      call-to-action that attempts to load the child nodes again, focus should be moved to the node in the tree that
      communicates the child nodes are loading.

      If we don't have enough information to write a useful error message, it's ok to write something generic like
      "Couldn't load".

  ![13 errorHandling](https://user-images.githubusercontent.com/2313998/188977489-cf88908a-2995-4c18-8f53-aa80a49ff724.png)

-

### Composition

    A common pattern is to render a tree view in a split page layout where the tree view is in the left pane, and a view
    for the selected file is rendered in the main content area.

  ![14 treeSplitPgLayout](https://user-images.githubusercontent.com/2313998/187719363-72304389-9464-42c3-9ff2-c2ef9cbef5ed.png)

    However, a tree view can also be rendered on it's own.

  ![15 treeStandalone](https://user-images.githubusercontent.com/2313998/187719365-e179970c-808c-498c-908b-bd98df9442f8.png)

#### Examples

  ![16 treeViewAsFileExplorer](https://user-images.githubusercontent.com/2313998/188683239-692e680a-673c-42a3-a532-42d5a0df51c3.png)

    A tree view being rendered in a split page layout.

  ![17 treeViewOnItsOwn](https://user-images.githubusercontent.com/2313998/188683240-052b6e5d-529c-456c-acb2-f376aa8da17e.png)

    A tree view that replaces itself with the content of the activated node.

#### Provide sufficient vertical space

Be considerate of the amount of vertical space a tree view can take up when all of it's nodes are expanded.

    ![18 1 DO-renderWithEnoughSpace](https://user-images.githubusercontent.com/2313998/187768699-d97f4119-f989-487c-9d81-aa9253dbd580.png)

      Render a tree view in an area with enough vertical space to comfortably browse the list, and doesn't push
      important content or controls below the bottom of the viewport

    ![18 2 DONT-renderTooSmall](https://user-images.githubusercontent.com/2313998/187768702-2881810c-7d1d-4e36-ae85-dfc35cf95cda.png)

      Don't render a tree view in an area that pushes down other content or forces users to scroll through small
      segments of the list

## Accessibility

### Behavioral expectations

The TreeView replicates the experience of an operating system's file explorer capabilities. It is designed to allow a user to navigate and take action on groups of items listed in a hierarchical format. This is a different experience than website navigation, which has a different mental model, operational requirements, and usability expectations.

### Label

    Tree views need an accessible name to be supplied, ideally via `aria-labelledby` pointing at an appropriate heading
    before the tree. If the tree view has enough surrounding context that it doesn't need a visible label, apply
    `sr-only` to the heading to hide it visually, but preserve the underlying programatic association.

  ![25 labelledTreeView](https://user-images.githubusercontent.com/2313998/187957351-02c80d5a-c2a3-42bc-9811-7ee40e8f6cba.png)

### Keyboard navigation

| Key(s)                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enter                                                                                                                                                                                  | Performs the default action (e.g. onclick event) for the focused node which is to activate the link.                                                                                                                                                                                                                                             |
| Tab                                                                                                                                                                                    | Moves focus outside of the tree view to the next focusable node.                                                                                                                                                                                                                                                                                 |
| ArrowDown                                                                                                                                                                              | Moves focus to the next node that is focusable without opening or closing a node. If focus is on the last node, does nothing.                                                                                                                                                                                         |
| ArrowUp                                                                                                                                                                                | Moves focus to the previous node that is focusable without opening or closing a node.If focus is on the first node, does nothing.                                                                                                                                                                                     |
| ArrowRight                                                                                                                                                                             | When focus is on a closed node, opens the node; focus does not move.When focus is on a open node, moves focus to the first child node.When focus is on an end node, does nothing.                                                                                                                            |
| ArrowLeft                                                                                                                                                                              | When focus is on an open node, closes the node.When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.When focus is on a root node that is also either an end node or a closed node, does nothing.                                                   |
| Home                                                                                                                                                                                   | Moves focus to first node without opening or closing a node.                                                                                                                                                                                                                                                                                     |
| End                                                                                                                                                                                    | Moves focus to the last node that can be focused without expanding any nodes that are closed.                                                                                                                                                                                                                                                    |
| a-z, A-Z, all printable characters | Focus moves to the next node with a name that starts with the typed character.Search wraps to first node if a matching name is not found among the nodes that follow the focused node.Search ignores nodes that are descendants of closed nodes.Focus should not move if no nodes match the search. |

#### Typeahead behavior

      Focus moves to the next node with a name that starts with the typed character(s). Wait for 300ms from the last key
      press to stop searching.

      Typeahead behavior is case insensitive, and any printable character can be used, not just alphanumeric characters.

      The `Space` key is ignored because it's being reserved for toggling a tree view node's checkbox. Nodes with
      checkboxes are not supported yet, but they may in the future.

### Focus behavior

#### Focus in

If moving focus into the TreeView for the first time, focus on the first node.

If moving focus back into the TreeView after the user already interacted with it, focus the previously focused TreeView node.

#### Focus out

If activating a node causes new content to appear without a page refresh, focus should be moved to the new content. By default, focus should be moved to the first focusable control within the main content region. We should avoid skipping any content so that the user can easily go back to the TreeView if they activate a node by accident.

If the first focusable element would cause a confusing experience for folks who listen to content using a screen reader, then an alternate element may be defined

### Minimum click target area for the chevron

      The chevron has a generous click area to make it an easier target to hit, but it's kept compact to preserve
      horizontal space in deeply nested nodes.

    When we detect that the user is on a device with a coarse pointer, the click target is enlarged.

  ![24 minTouchTarget](https://user-images.githubusercontent.com/2313998/187769276-d946bbbf-0fdb-4d40-8614-63b4ee17027e.png)

### Known accessibility issues (GitHub staff only)
