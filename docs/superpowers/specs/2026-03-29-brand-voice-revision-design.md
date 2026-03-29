# Brand Voice Revision — Design Spec
**Date:** 2026-03-29
**Scope:** `design-system/brand-voice.html`
**Status:** Approved, ready for implementation

---

## Problem

Two distinct issues:

**A — Positioning (brand sentence):** The current brand sentence fails the doc's own rules. Three vague claims, no specificity, no evidence, no hiring manager benefit.

**C — Enforcement:** The doc is a passive reference card. It has no per-content-type guidance and no self-review mechanism. Copy reverts to portfolio-speak at four consistent failure points: hero copy, case study openings, role/contribution descriptions, and metrics framing.

---

## Approach

Revise + add enforcement layer. One file, revised and extended. No split.

Register descriptions and examples are left largely intact — the existing examples in the doc are good. The work is adding what's missing: a clearer brand sentence, new principles, content-type guidance, and a checklist.

---

## Section 1: Brand Sentence Rewrite

**Primary positioning claim:** Fast-context builder. The domain is secondary; the pattern recognition is the skill.

**Current (do not use):**
> "A PM who gets curious about new problems quickly, connects dots across domains, and builds things to understand them better."

**Replacement:**
> "Five years building products where a physical object and a digital layer have to work together. Most of what I know about product thinking came from getting that boundary wrong a few times first."

---

## Section 2: Register Examples

Register names and structure unchanged. Examples updated to match the voice quality of the existing doc.

### Act 1 / Mighty Jaxx — Professional authority

> "The data showed most vault additions happened before the first scroll, so we moved the CTA up. Wishlist additions went up 18% over the following two weeks."

*(Existing example — keep as-is. It already works.)*

### Act 2 / Self-Initiated — Intellectual curiosity

> "I hadn't worked in fintech before the Alta project. Going in without a strong prior on how it should work meant I spent longer asking basic questions than I might have otherwise. Some of those questions led somewhere."

### Act 3 / Pulse — Builder's warmth

> "It started because I was opening four different apps to understand one run. I wanted something that connected all of it and just told me what mattered."

*(Existing example — keep as-is. It already works.)*

---

## Section 3: Content-Type Guidance (new section)

Four blocks, one per failure mode. Each block: what goes wrong + before + after.

### Block 1: Hero copy / writing about yourself

**What goes wrong:** Adjectives replace evidence. You describe yourself instead of showing yourself.

- Before: "I'm a product manager with a background in physical-digital products and a track record of shipping in ambiguous environments."
- After: "Five years building products where a physical object and a digital layer have to work together. The problems are different from pure software, and so is the thinking that comes out of it."

### Block 2: Case study opening paragraph

**What goes wrong:** First paragraph is background, not story. Company and role before problem.

- Before: "At Mighty Jaxx, I led the authentication team responsible for transitioning our product line from NFC to QR-based verification."
- After: "The NFC chip cost ten times what a QR code costs. That number sat underneath a lot of decisions for longer than it should have."

### Block 3: Role and contribution

**What goes wrong:** Verbs describe involvement, not decisions. Led. Collaborated. Was responsible for.

- Before: "I led cross-functional collaboration between engineering, design, and operations to deliver the QR migration."
- After: "Engineering needed to trust the rollout plan before anything moved. Getting there took longer than the timeline assumed, and the conversations along the way changed what we shipped."

### Block 4: Metrics and results

**What goes wrong:** The number is there but the framing is flat.

- Before: "The QR migration resulted in a 56% repeat scan rate and 14,381 identified users."
- After: "14,381 users scanned and came through as identified collectors. Before QR, they were anonymous buyers. That distinction matters for everything that comes after the sale."

All four examples are directional. They show the structural move, not finished copy.

---

## Core Voice Qualities (new, to be added to doc)

**Humility is structural.**
Never position Reiko against others. Never imply she saw what the team missed, found what others overlooked, or brought something they lacked. The work speaks for itself. If a line only works because it implies someone else was wrong or slower, rewrite it.

**Elegant and gracious.**
The writing should feel considered, not clipped. Warm without being effusive. Every sentence earns its place. Gracefulness comes from giving the reader enough without giving them too much.

**Length in balance.**
Short sentences create emphasis. Longer ones carry texture and thought. The two should work together. Vary deliberately, not by accident.

---

## Section 4: New Rule — Rule 05

**Card heading:** Write like a person, not a style guide.

**Body:**
No em-dashes. Replace with a period, a colon, or rewrite the sentence. Vary sentence length deliberately. Short sentences land harder after long ones. Long sentences carry texture when the thought needs it. Read copy aloud before publishing. If you wouldn't say it that way, rewrite it.

---

## Section 5: Copy Self-Review Checklist (new section)

Run before publishing any copy. Question 7 is the hardest and most important.

1. Does the opening line start with what happened, not with who you are?
2. Is there a decision visible, not just an output?
3. Is every metric framed, not just stated?
4. Are there any em-dashes? Replace them.
5. Any words from the swap list? (leveraged, collaborated, drove alignment, key metrics, passionate about)
6. Read it aloud. Does any sentence sound like a LinkedIn bio? Rewrite it.
7. Could this copy describe any PM, or does it only work for you?
8. Does any line imply you found what others missed, or position you as smarter than the room? Rewrite it.

---

## Implementation Scope

**File to modify:** `design-system/brand-voice.html`

**Changes:**
- Replace brand sentence in hero card
- Update Act 2 register example
- Add core voice qualities to hero section
- Add Rule 05 card to rules grid
- Add new section: Content-type guidance (four blocks)
- Add new section: Copy self-review checklist

**No changes to:** Act 1 and Act 3 register examples, colour tokens, typography map, vocabulary swap list, headline examples, CSS, or doc structure.

---

## Out of Scope

- Rewriting live case study copy (separate task)
- Changes to palette-reference.html or visual-components.html
- Homepage or case study HTML files
