---
name: Shubhkaran Dhillon
description: Dusk Almanac. An ephemeris for a running system, set as precise tables in warm light.
colors:
  dusk-950: "oklch(0.185 0.028 286)"
  dusk-900: "oklch(0.225 0.032 286)"
  dusk-850: "oklch(0.255 0.034 286)"
  rule: "oklch(0.34 0.03 288)"
  rule-strong: "oklch(0.46 0.035 288)"
  ink: "oklch(0.95 0.015 75)"
  ink-soft: "oklch(0.83 0.025 70)"
  ink-faint: "oklch(0.7 0.03 70)"
  amber: "oklch(0.81 0.14 68)"
  amber-strong: "oklch(0.73 0.165 55)"
  amber-wash: "oklch(0.81 0.14 68 / 0.1)"
  on-amber: "oklch(0.2 0.03 286)"
  haze: "oklch(0.8 0.07 25)"
  sage: "oklch(0.8 0.085 145)"
typography:
  name:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 13.4vw, 11.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 112"
  display:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 6.6vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.5rem + 1.9vw, 3.1rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 100"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 1.25rem + 0.9vw, 2rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 110"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.78rem, 0.76rem + 0.1vw, 0.84rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 78"
  mono:
    fontFamily: "'Fragment Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "clamp(0.78rem, 0.76rem + 0.1vw, 0.84rem)"
    fontWeight: 400
    letterSpacing: "0"
    fontFeature: "'tnum'"
rounded:
  hairline: "2px"
  box: "3px"
  pill: "999px"
  dot: "50%"
spacing:
  3xs: "0.25rem"
  2xs: "0.5rem"
  xs: "0.75rem"
  s: "1rem"
  m: "1.5rem"
  l: "2.25rem"
  xl: "clamp(3rem, 2rem + 4vw, 5rem)"
  2xl: "clamp(5rem, 3rem + 8vw, 10rem)"
  gutter: "clamp(1rem, 0.4rem + 3vw, 3rem)"
  max: "88rem"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.on-amber}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.2em"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-amber}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.2em"
    height: "3rem"
  button-ghost-hover:
    textColor: "{colors.amber}"
  nav-capsule:
    backgroundColor: "{colors.dusk-900}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.3rem"
  nav-link-hover:
    backgroundColor: "{colors.dusk-850}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.95rem"
    height: "2.6rem"
  tag:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.7em"
  status-strip:
    textColor: "{colors.ink-soft}"
    typography: "{typography.mono}"
  section-head:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
---

# Design System: Shubhkaran Dhillon

## Overview

**Creative North Star: "Dusk Almanac"**

The page is an ephemeris for a running system: precise tables about warm light. The ground is the sky just after the sun drops (a dusk indigo-charcoal), the ink is warm paper-white under sodium light, and the one accent is sodium amber, evolved from the incumbent orange. Every reading on the page is set like an almanac entry: a hairline rule above, a huge specimen word or numeral, and a tiny compressed margin note beside it.

Density is editorial rather than dashboard. Sections are separated by generous vertical air (up to 10rem) and held together by 1px rules, not by surfaces. One typeface, Archivo Variable, carries everything; its width axis supplies the tension, stretching to 112-118 for specimens and compressing to 78 for annotations. Fragment Mono appears only where the page reports a time, a date, or a version. The page rejects the centered-hero-plus-card-grid developer template and the cold-blue terminal.

Motion is sparse and authored. There is one orchestrated hero entrance, one signature scroll line in amber, and a distinct, section-specific reveal for each section, all behind `prefers-reduced-motion: no-preference` and scoped to `.js [data-inview='false']` so content is visible without JavaScript.

**Key Characteristics:**
- Dark-only (`color-scheme: dark`), OKLCH tokens throughout, all hues sampled from the golden-hour plate.
- One face on a fixed specimen ladder; width axis, not a second family, makes the contrast.
- Hairline rules and almanac tables instead of cards, panels, or glass.
- Amber is the "now" signal: the current release, the scroll line, the primary CTA, metrics in running prose.
- Sage means "up"; haze marks quiet secondary readings (sunset, changelog markers, stack wires).

## Colors

A single warm accent burning on a cool, near-black dusk ground, with two desaturated horizon tones kept quiet.

### Primary
- **Sodium Amber** (`amber`): The "now" color. Second line of the name, the uptime scroll line, the primary button, the current release's version and deploy line, metric highlights in prose, the `Currently` status item, hover state for every link and arrow, focus rings, and text selection. **Amber Strong** (`amber-strong`) is its deeper defined sibling; **Amber Wash** (`amber-wash`) tints the infrastructure layer of the stack drawing. Text on amber always uses **On-Amber** (`on-amber`), a near-ground indigo.

### Secondary
- **Planter Sage** (`sage`): Status only. The "Operational" dot and label, "In production", the nav home dot, project state dots, the footer status line, and the copied state of the copy-email button. Sage never decorates; it reports that something is up.

### Tertiary
- **Horizon Haze** (`haze`): Quiet secondary readings: the computed sunset time, the `+` markers on changelog notes, project stack lists in the index, the wire labels in the stack drawing, and inline error text.

### Neutral
- **Dusk Ground** (`dusk-950`): Page background, mobile nav sheet, stack boxes. Also the `theme-color` and the source of the hero plate scrim.
- **Dusk Raised** (`dusk-900`): The floating nav capsule, badge hover fill, stack chips.
- **Dusk Lift** (`dusk-850`): Image wells behind plates and thumbnails, nav link hover, nav monogram.
- **Hairline** (`rule`): Every structural 1px rule: section heads, table rows, changelog notes, badge grid, footer.
- **Hairline Strong** (`rule-strong`): Rules that must read as edges: ghost button and tag outlines, stack boxes, wires, the dashed language rail, status strip separators.
- **Paper Ink** (`ink`), **Soft Ink** (`ink-soft`), **Faint Ink** (`ink-faint`): Three text steps for primary, supporting, and annotation copy. Faint ink is also the non-current release version color.

### Named Rules
**The Sodium Lamp Rule.** Amber marks the present tense: what is current, live, or actionable. A past release, an inactive link, or a decorative flourish is never amber.

**The Status Light Rule.** Sage is reserved for "up" states and always pairs with the status dot or a status word. It is never a decorative accent.

## Typography

**Display Font:** Archivo Variable (self-hosted via `@fontsource-variable/archivo/wdth.css`, falling back to Archivo, ui-sans-serif, system-ui)
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** Archivo Variable compressed (wdth 78) for labels; Fragment Mono 400 for times, dates, and versions

**Character:** One grotesque pulled in two directions. Expanded, heavy, tightly tracked specimens sit against compressed, small margin notes, so the contrast is in width rather than in family.

### Hierarchy
The ladder is fixed (`--step--1` to `--step-6`); sizes are never set ad hoc.
- **Name** (800, `clamp(2.6rem, 13.4vw, 11.5rem)`, 0.86, wdth 112, -0.045em): The hero name only, on two staggered lines, the second indented 0.9em and set in amber.
- **Display** (800, step-4 to step-6, 0.9, wdth 118, -0.035 to -0.045em): Section-head words, the featured project title (step-6 at 52rem+), Signal numerals (step-5), changelog versions (step-4), the contact sign-off (step-5, wdth 112).
- **Headline** (650, step-3, 1.08, wdth 100, -0.025em, balanced, max 18ch): The hero claim.
- **Title** (700-750, step-2, 1.1, wdth 106-110, -0.02 to -0.025em): Company names, project index titles, contact link names, the contributions heading. Featured purpose uses step-2 at weight 550 and normal width.
- **Body** (400, step-0, 1.6, wdth 100): Running copy, capped at 52ch in the hero and 68ch in changelog notes; `text-wrap: pretty`.
- **Label** (500, step--1, 1.4, wdth 78, +0.01em, sentence case): Margin notes beside section heads (bumped to step-0), figcaptions, release meta, tags, project state and stack, contact link meta.
- **Mono** (Fragment Mono 400, step--1, tabular numerals): The ticking clock and the status strip around it, sunset time, release date ranges, the contributions calendar.

### Named Rules
**The Specimen Ladder Rule.** Section heads step down by weight of evidence: Changelog and Services at step-5, Signal and Stack at step-4, Credentials at step-3. A new section declares its rung with `--head-size`; it does not invent a size.

**The Width Axis Rule.** Tension comes from `font-variation-settings: 'wdth'`: 112-118 for specimens, 106-110 for titles, 100 for reading, 78 for annotations. Labels are never set in mono.

**The Clock Face Rule.** Fragment Mono is reserved for times, dates, and versions. If a value is not a reading of time, it is set in Archivo. The one built exception is the hero status strip, which is set in mono as a whole because it reads as a single instrument line around the live clock; it is not a precedent for mono labels elsewhere.

## Layout

A single column of sections inside a centered wrap (max 88rem, fluid gutter `clamp(1rem, 0.4rem + 3vw, 3rem)`). Sections open with `space-2xl` above and a section head: one oversized word left, a compressed label right-aligned at 48rem+, a 1px rule beneath, then `space-xl` before content. Spacing comes from one rhythm (3xs to 2xl); fluid steps only at xl and 2xl.

Breakpoints are observed at 40rem, 48rem, 52rem, 60rem, and 80rem.
- **Hero** is a 12-column grid. Below 60rem the plate sits under the pitch (columns 3-12, then 5-12 at 40rem). At 60rem+ the hero fills `100svh`, the plate spans columns 9-12 and rises into the first line of the name (offset by 0.42 of the name size), the name sits above it in z-order, and a dusk scrim (ground at 92% to 0% over the top 34%) appears on the plate only at that width.
- **Almanac tables** (Signal) go 1, 2, then 4 columns at 80rem, switching from bottom rules to vertical left rules.
- **Changelog** becomes a 3fr/9fr ledger at 52rem with a sticky version column.
- **The quarter offset.** At 52rem+ the project index, the contact email, and the contact links start 25% in; the left gutter holds the project hover preview.
- **Nav** is a floating capsule top-right; inline links at 60rem+, a full-screen ruled sheet below.

## Elevation & Depth

The page is flat. Depth comes from the three-step dusk ramp (950, 900, 850) and from z-order (the name over the plate), not from shadow. Two soft, wide, low-opacity shadows exist, and only on elements that float above the page.

### Shadow Vocabulary
- **Floating capsule** (`box-shadow: 0 10px 30px -12px oklch(0.1 0.03 286 / 0.7)`): The fixed nav only.
- **Gutter preview** (`box-shadow: 0 24px 50px -20px oklch(0.08 0.03 286 / 0.85)`): The project screenshot that surfaces in the left gutter on hover.
- **Status halo** (`box-shadow: 0 0 0 3px oklch(0.8 0.085 145 / 0.18)`): A sage ring around the status dot; a light, not a lift.

### Named Rules
**The Hairline Rule.** Structure is drawn with 1px `rule` lines, never with filled surfaces. If a group needs separating, add a rule or air; do not add a panel.

## Shapes

Three radii and nothing between. Images and in-diagram chips are near-square (2px); diagram boxes and the dashed rail are 3px; anything you press or that labels is a full pill (999px: buttons, nav capsule, nav links, tags); status dots and the monogram are circles. Recurring silhouettes: the downward-pointing wire with a small triangular arrowhead in the stack drawing, and the `+` marker in changelog notes.

## Components

### Buttons
Calm, pill-shaped links acting as buttons.
- **Shape:** full pill (999px), minimum height 3rem, padding 0.7em 1.2em, weight 600, icon gap 0.6em with 1.05em icons.
- **Primary:** amber fill, on-amber text. Used once per region for the main action (Email me).
- **Hover / Focus:** primary turns to ink; ghost border and text turn amber. Transitions on color only at 180ms with the out-expo curve. Focus is a 2px amber outline offset 3px site-wide.
- **Ghost:** transparent with a `rule-strong` 1px border and ink text (Résumé, View source, Copy).

### Chips
- **Style:** tags are compressed labels in `ink-soft` with a `rule-strong` hairline pill (padding 0.3em 0.7em). In the stack drawing, items are 2px-radius chips on `dusk-900` with a `rule` border; the infrastructure layer tints them with amber at 40% border / 8% fill.

### Navigation
- **Style:** a fixed pill capsule top-right on `dusk-900` with a `rule` border, holding an SD monogram (with a sage dot) and inline links at weight 500 in `ink-soft`.
- **States:** hover fills `dusk-850` and brightens to ink; the current section shows ink text and a small amber dot that scales in.
- **Mobile:** an amber pill toggle with a two-bar icon that crosses to an X; it opens a full-screen ground sheet listing sections as ruled rows in display type (wdth 118), staggered in.

### Uptime Line (signature)
A 2px amber line fixed to the top edge, scaled on X by scroll progress. It is the only persistent motion on the page and is fed by the same rAF-throttled scroll listener that drives the nav.

### Status Strip
The hero's opening line, set entirely in Fragment Mono as one instrument readout (the sole exception to the Clock Face Rule): sage dot and "Operational", location, a live clock ticking every second with the zone in faint ink, the computed sunset in haze, and "Currently" in amber, separated by short `rule-strong` bars at 52rem+ and closed by a hairline.

### Almanac Table
Signal readings as a definition list: a compressed label and note above a huge tabular numeral (wdth 118, 106 at 80rem+) with an amber sign and a raised amber suffix. Numerals count up on reveal over 1.4s with a hidden ghost reserving their final width, so nothing shifts.

### Changelog Ledger
Each role is a release: a version in display type (faint, amber when current), a mono date range, an "In production" sage line, then the company title, a label meta line, and notes as ruled rows with haze `+` markers. At 52rem+ the version column is sticky behind a hairline deploy line that turns amber for the current release.

### Index Row
Projects after the featured lead are ruled rows: title, purpose, haze stack, state with dot, and an up-right arrow. Hover turns the title and arrow amber, nudges the arrow up-right, and at 52rem+ unclips a 4:3 screenshot into the left gutter.

### Plate
Photographs sit in a 2px frame on a `dusk-850` well with a label figcaption ("Fig. 1") separated by a hairline.

### Motion
- **Hero entrance (once):** status fades in; each name line rises from behind a clip (900ms); the plate unclips upward like a horizon (1300ms) while the image settles from 1.12 scale and lowered saturation (1800ms); the pitch and caption fade in at 620ms.
- **Section reveals (each its own):** Signal rows rise in sequence while numerals count; changelog tags slide in from the left and notes unclip; the featured project rises and index rows slide in from the right; stack layers provision bottom-up with the rail last; badges set down like stamps from 0.96 scale; the contact sign-off rises line by line.
- **Curves:** out-expo `cubic-bezier(0.16, 1, 0.3, 1)` for nearly everything; durations 180ms (state), 420ms (small transforms), 900ms (entrances).

## Do's and Don'ts

### Do:
- **Do** take every color from the OKLCH tokens and every size from the step ladder; declare section head size via `--head-size`.
- **Do** separate content with 1px `rule` hairlines and vertical air; let tables, ledgers, and ruled lists carry structure.
- **Do** pair every section head word with a compressed label margin note beside it, not above it.
- **Do** reserve amber for the current, live, or actionable thing, and sage for "up" states with a dot.
- **Do** give each new section its own reveal, inside `prefers-reduced-motion: no-preference` and scoped to `.js [data-inview='false']`.
- **Do** keep the hero's plate overlap and dusk scrim confined to 60rem and up.

### Don't:
- **Don't** wrap content in cards, filled panels, or glass. The boxes in the stack drawing are diagram notation, not cards, and belong only to diagrams.
- **Don't** set labels, names, or prose in Fragment Mono; mono is for times, dates, and versions.
- **Don't** add a second accent hue or use cold blue; the palette is sampled from the golden-hour plate.
- **Don't** add a second persistent motion alongside the uptime line, or loop animations after the entrance.
- **Don't** put a small label above a heading as an eyebrow; margin notes sit beside the head word.
- **Don't** add hard or offset shadows; the only shadows are the two soft floating ones and the status halo.
