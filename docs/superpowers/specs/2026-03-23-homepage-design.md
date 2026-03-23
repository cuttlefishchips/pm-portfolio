# Homepage Design Spec
**Date:** 2026-03-23
**Status:** Approved — ready for implementation

---

## Overview

Full homepage rebuild for `cuttlefishchips.github.io/pm-portfolio`. Single HTML file targeting growth-stage tech hiring managers (Figma, Vercel, Perplexity level) for Senior PM roles. Emotional goal: "I'm impressed with how she thinks."

---

## Page Structure

```
Nav (sticky, frosted on scroll)
↓
Hero section
↓
Three types of work (vertical stack)
↓
Contact section (dedicated)
↓
Footer (minimal, with CTA nudge)
```

---

## 1. Navigation

- **Position:** Sticky, `position: sticky; top: 0; z-index: 100`
- **Default state:** Transparent background, no border
- **Scrolled state (>40px):** `background: rgba(242,237,228,0.85)`, `backdrop-filter: blur(12px)`, border-bottom `--border`
- **Logo:** "Reiko" — Fraunces italic 300, 17px
- **Links:** Work · Thinking · Building — DM Mono 11px, `--text-faint`, hover to `--text`
- **JS trigger:** `window.addEventListener('scroll')` toggles `.scrolled` class at 40px

---

## 2. Hero Section

- **Eyebrow:** "Product Manager" — DM Mono 11px, `--coral`, `letter-spacing: 0.14em`
- **Headline:** `clamp(44px, 6.5vw, 88px)` Fraunces 300, `line-height: 0.97`, `letter-spacing: -0.02em`
  - Copy: "Good products start with the question *nobody wanted to ask.*"
  - "nobody wanted to ask." in italic weight 200, `--coral`
- **Sub copy:** "I'm Reiko, a PM who spent four years at Mighty Jaxx finding those questions and building what came after." — DM Sans 15px weight 300, `--text-muted`
- **Stats row:** 4 Years at MJ · 8+ Projects shipped — Fraunces 28px num + DM Mono 10px label
- **Decorative element:** Concentric ring (3 rings, `--border`) positioned right, `translateY(-50%)`. Placeholder for headshot.
- **Border bottom:** `1px solid --border`

---

## 3. Three Types of Work

- **Section label:** "Three types of work" — DM Mono 11px, `--text-faint`, with `::after` sliding line (48px, `--border`)
- **Layout:** Vertical stack, 3 rows, `border-top + border-bottom: 1px solid --border`, `gap: 1px; background: --border`
- **Each row grid:** `200px | 1fr | 220px`
- **Left accent:** `border-left: 4px solid [act colour]`
- **Hover states:** Background tints to act dim colour (`--mj-dim`, `--think-dim`, `--pulse-dim`)
- **Rows are `<a>` tags** linking to `/work`, `/thinking`, `/building`

### Row 1 — Work (Mighty Jaxx)
- Accent: `--mj` yellow
- Type label: WORK
- Name: Mighty Jaxx
- Teaser: "Four years deciding what got built and why. Payments, authentication, collectibles commerce."
- Featured preview: TBD (placeholder — confirm top MJ project)
- Link: "→ 4 projects"

### Row 2 — Thinking
- Accent: `--think` indigo
- Type label: CASE STUDIES
- Name: Thinking
- Teaser: "Problems I chose to think hard about outside my day job. Not because I had to. Because they were interesting."
- Featured preview: Cash Wallet — Payments redesign analysis
- Link: "→ 3 studies"

### Row 3 — Building
- Accent: `--pulse` teal
- Type label: PROJECTS
- Name: Building
- Teaser: "Personal projects I've shipped or am building. A hackathon, a Telegram bot, and whatever comes next."
- Featured preview: Pulse v1 — Problem to shipped in 6 weeks
- Link: "→ 1 project" (update count when hackathon added)

---

## 4. Contact Section

- **Section label:** "Get in touch" — same label pattern as above
- **Layout:** 2-column grid, `1fr 1fr`, gap 80px
- **Left:** Headline + sub copy
  - Headline: "Let's find the right question together." — Fraunces 32px–52px italic 300
  - Sub: "Open to senior PM roles at growth-stage companies. Fastest response on Telegram." — DM Sans 15px 300 `--text-muted`
- **Right:** Three icon buttons
  - Email: `mailto:reiko98@live.com.sg`
  - Telegram: `https://t.me/rracko`
  - LinkedIn: `https://www.linkedin.com/in/reikotan`
  - Icons: 56px circle, `--surface` bg, `--border` border, hover lifts `translateY(-3px)` + coral border + `--coral-dim` bg
  - Labels: DM Mono 10px `--text-faint` below each icon

---

## 5. Footer

- **Layout:** `space-between`, `align-items: center`
- **Left:** "Reiko" (Fraunces italic 300 14px `--text-muted`) + "© 2026" (DM Mono 10px `--text-faint`)
- **Right:** Same three icon buttons at 36px size (smaller than contact section), `--text-faint` at rest, coral on hover
- **Mobile:** Stacks to column, centered

---

## 6. Mobile (≤768px)

- `.page` padding: `0 24px`
- Nav padding: `18px 24px`, link gap: `20px`
- Hero title: `clamp(36px, 10vw, 56px)`
- Hero meta: `flex-direction: column`, stats left-aligned
- Decorative ring: `display: none`
- Act rows: `grid-template-columns: 1fr` (single column stack)
  - Accent moves from left border to top border
  - Left panel, middle panel, right panel each stack with bottom borders
- Contact: single column, gap 40px
- Footer: column, centered, gap 16px

---

## 7. Design System Tokens Used

All colours, typography, and spacing from `/design-system/palette-reference.html`. No new tokens introduced.

Key tokens: `--base`, `--surface`, `--border`, `--text`, `--text-muted`, `--text-faint`, `--mj`, `--mj-dim`, `--think`, `--think-dim`, `--pulse`, `--pulse-dim`, `--coral`, `--coral-dim`, `--ease-out`

Fonts: Fraunces (display/headings), DM Sans 300/400 (body), DM Mono (labels/data)

Background: SVG noise texture on `--base` at 3% opacity.

---

## 8. Brand Voice Compliance

- No em-dashes anywhere
- No banned vocabulary (leveraged, passionate about, drove alignment, key metrics, proven track record)
- Hero: reframe-first (B approach) — sharp observation before identity
- Work copy: decision-first, specific domains named
- Thinking copy: curiosity-driven, honest about motivation
- Building copy: personal, collection framing, warm

---

## Open Items (non-blocking for homepage build)

- Featured Mighty Jaxx project TBD — confirm which project leads the Work row
- Hero stats (4 years, 8+ projects) — confirm accuracy
- Headshot — confirm whether to place in decorative ring

---

## Reference Mockup

`/Users/reikotan/Desktop/claude/pm-portfolio/.superpowers/brainstorm/21491-1774233925/homepage-v4.html`
