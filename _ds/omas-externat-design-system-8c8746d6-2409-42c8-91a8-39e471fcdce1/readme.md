# OMAS Externat — Design System

## Context

**OMAS** (Organisation Musulmane des Acteurs de Santé) is a French non-profit, founded in 2015, that federates health professionals and students around ethics and mutual support. **OMAS Externat** is one of its programs: academic support and mentorship for health students, alongside the "Plan Réussite PASS LAS" exam-prep track — helping students through the competitive PASS/LAS first-year medical curriculum.

**Sources available for this design system:** a single logo file (`uploads/logo omas externat.png`). No codebase, Figma file, product copy, or existing screens were provided. Everything below — palette, type, components — is built from scratch around the logo, per direction from the user (playful/collegiate tone, French copy, indigo+teal+warm-accent palette). If a real site, app, or brand guideline exists later, treat that as ground truth over this document.

## Scope

Per the user's direction, this pass covers **foundations and components only** — no UI kit screens were built (no product surfaces were specified to recreate).

## Index

- `styles.css` — root stylesheet, imports all tokens
- `tokens/` — `colors.css`, `fonts.css`, `typography.css`, `spacing.css`, `effects.css`
- `assets/logo/` — the only brand asset provided
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand)
- `components/actions/` — Button, IconButton
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/data-display/` — Card, Badge, Tag
- `components/navigation/` — Tabs
- `components/feedback/` — Dialog, Toast, Tooltip
- `SKILL.md` — portable skill file for use outside this tool

### Components (14)
Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip.

No component source was provided, so this is a standard primitive set sized to a lightweight ed-tech product (course/session cards, sign-up forms, tags for subjects, status toasts) rather than an enumerated inventory.

## Content fundamentals

No product copy was provided, so this is a starting convention, not an observed pattern:
- **Language:** French, matching the association's own materials.
- **Voice:** direct address, "tu" (peer-to-peer, student-to-student) rather than formal "vous" — fits a student mentorship program. Example: *"Réussis ta PASS"*, *"Tu vas rejoindre le groupe PASS du samedi."*
- **Casing:** sentence case for body copy and buttons ("S'inscrire", not "S'INSCRIRE"); the logo's all-caps treatment is a brand-mark exception, not a UI convention.
- **Tone:** encouraging and concrete — talks about specific programs (PASS, LAS, mentorat) rather than generic motivational language.
- **Emoji:** not used in UI copy.

## Visual foundations

- **Palette:** indigo `#2D2F84` and teal `#00A09A`, sampled directly from the logo, as primary/secondary. Two warm accents — sunflower `#FFC94A` and coral `#F2603E` — added for tags, highlights, and energy, per the user's choice to expand beyond the two logo colors. Neutrals are indigo-tinted cool grays ("ink" scale), not pure gray, to stay warm with the brand hue.
- **Type:** Poppins (display, weight 700–900) for headings — bold, geometric, chunky, matching the logo's confident block letterforms. Karla (body, 400–700) for text — a grounded humanist sans that keeps long-form copy readable. **Neither font file was provided**; both are close Google Fonts substitutes loaded via CDN in `tokens/fonts.css`. Flag: swap these out if OMAS has real brand fonts.
- **Spacing:** 4px base grid, tokens from `space-1` (4px) to `space-24` (96px).
- **Corner radius:** chunky, pill-leaning — `radius-sm` 10px up to `radius-pill`. No sharp corners anywhere.
- **Shadows — two systems:**
  - Soft elevation (`shadow-sm/md/lg`) — tinted indigo, blurred, for floating surfaces like dialogs and dropdowns.
  - **Sticker shadow** (`shadow-sticker-*`) — a hard, unblurred, offset shadow with no blur radius, directly lifted from the logo's own drop shadow (sampled from the source PNG). This is the system's signature motif: primary/secondary buttons and featured cards carry it, and it "collapses" on press (element translates into the shadow, shadow disappears) for a tactile push effect.
- **Backgrounds:** flat brand colors only — no gradients, no photography, no patterns (none were provided to draw from).
- **Animation:** two easings — `ease-bounce` (springy overshoot) for interactive feedback like checkmarks and toggles, `ease-standard` for layout/opacity transitions. Durations 120–320ms. No page-level or scroll-triggered animation.
- **Hover states:** solid-fill buttons darken one step; outline/ghost buttons gain a soft tinted background.
- **Press states:** sticker-shadow elements translate 3px toward the shadow and drop it, rather than scaling or darkening.
- **Borders:** 2px solid, used mainly on inputs and outline buttons (not 1px hairlines) to match the chunky feel.
- **Transparency/blur:** minimal — only a semi-transparent scrim (`rgba(20,21,42,.45)`) behind modals. No frosted-glass/backdrop-blur anywhere.
- **Imagery:** none provided. Course/event card images are left as plain color placeholders (`surface-teal-soft`) rather than invented photography.

## Iconography

No icon set was provided. **Lucide** (CDN, stroke-based, 2px weight, rounded caps) is substituted as the closest generic match to the logo's rounded-terminal letterforms — flagged as a substitution. No icon font, no PNG icon set, no emoji-as-icon usage. Swap for OMAS's real icon set if one exists.

## Brand assets

Only asset on hand: `assets/logo/omas-externat-logo.png` (the wordmark, transparent background, with its own drop shadow baked in). No standalone mark, no monochrome or reversed version — until those exist, render the logo only at the sizes shown in `guidelines/brand-logo.html` (on white, on indigo-800, on teal-600), and fall back to plain "OMAS Externat" type set in Poppins wherever a second lockup would be needed.

## Caveats & how to help

This design system was built from **one logo file only** — everything else (palette expansion, type pairing, spacing, shadow system, component set) is an original construction in the brand's spirit, not an extraction from real product materials. To make this genuinely accurate:

1. **Fonts** — confirm or send OMAS's real brand fonts; Poppins/Karla are placeholders.
2. **Product screens** — if OMAS Externat has a real website, portal, or app, share the code or a Figma link so components and a UI kit can be rebuilt against the real thing instead of invented from scratch.
3. **Real copy** — actual program names, session/event copy, and tone examples would replace the placeholder French text used throughout.
4. **Icons/imagery** — if OMAS has its own icon set or photography, send it so Lucide/placeholder colors can be swapped out.

Tell me what to prioritize and I'll iterate.
