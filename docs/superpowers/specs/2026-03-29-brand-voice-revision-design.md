# Brand Voice Revision — Design Spec
**Date:** 2026-03-29
**Scope:** `design-system/brand-voice.html`
**Status:** Approved, ready for implementation

---

## Problem

Two distinct issues:

**A — Positioning (brand sentence):** The current brand sentence fails the doc's own rules. "A PM who gets curious about new problems quickly, connects dots across domains, and builds things to understand them better" reads like the before column: three vague claims, no specificity, no evidence, no hiring manager benefit.

**C — Enforcement:** The doc is a passive reference card. It has no per-content-type guidance and no self-review mechanism. Copy reverts to portfolio-speak at four consistent failure points: hero copy, case study openings, role/contribution descriptions, and metrics framing.

---

## Approach

Option 2: Revise + add enforcement layer. One file, revised and extended. No split.

Changes:
1. Rewrite brand sentence around fast-context positioning claim
2. Update register descriptions and examples to be more specific to Reiko's background (names unchanged)
3. Add new content-type guidance section (four failure mode blocks)
4. Add Rule 05: Write like a person
5. Add copy self-review checklist

---

## Section 1: Brand Sentence Rewrite

**Primary positioning claim:** Fast-context builder. The domain is secondary; the pattern recognition is the skill.

**Current (do not use):**
> "A PM who gets curious about new problems quickly, connects dots across domains, and builds things to understand them better."

**Replacement (condensed, for the card):**
> "I get current fast in new domains. Five years building physical-digital products gave me enough context that the pattern recognition kicks in quickly when I step into something new."

**Replacement (full-length, for hero/about copy):**
> "I pick up new domains fast. Not because I'm a generalist — because I've had to build real products in enough different contexts that pattern recognition kicks in quickly. The physical-digital work at Mighty Jaxx. The fintech case study I did to see if the thinking transferred. It does. That's the thing."

Note: The full-length version uses an em-dash as a rhetorical device before Rule 05 was added. Revise to: "Not because I'm a generalist. Because I've had to build real products in enough different contexts that pattern recognition kicks in quickly."

---

## Section 2: Register Updates

Register names unchanged. Descriptions and examples updated to be grounded in Reiko's specific background.

### Act 1 / Mighty Jaxx — Professional authority

**Updated description:**
Physical products have no easy undo. The decisions here had real unit economics, real supply chain implications, real users who bought a physical object. Copy in this register carries that weight. It names what was decided and why, with the constraint visible.

**Updated example:**
> "The NFC chip cost 10x what a QR code costs. That's not a minor difference when you're putting one in every unit. We changed the model. Here's how."

**Example annotation:** Real constraint named first. Decision stated plainly. No ego.

### Act 2 / Self-Initiated — Intellectual curiosity

**Updated description:**
She goes into new domains deliberately, to test whether the thinking transfers. Not curious as a personality trait. Honest about what she knew coming in, what transferred, and what surprised her. The voice of someone who ran the experiment and came back with findings.

**Updated example:**
> "I didn't work in fintech. I went in to see if the pattern recognition transferred. It did, mostly. Where it didn't was more interesting than where it did."

**Example annotation:** Honest about starting from outside. Frames the project as a test. Names the finding without overstating it.

### Act 3 / Pulse — Builder's warmth

**Updated description:**
She builds things to understand problems. Building is her research method. Copy in this register leads with the reasoning that drove the build, not the build itself. The product speaks for itself; the copy explains what question it was answering.

**Updated example:**
> "I had four apps open every time I finished a run. I wanted to know if connecting them would tell me something different. So I built the thing to find out."

**Example annotation:** Problem-first. Personal without being sentimental. No hype. Lets the motivation do the work.

---

## Section 3: Content-Type Guidance (new section)

Four blocks, one per failure mode. Each block: context + what goes wrong + before + after.

### Block 1: Hero copy / writing about yourself

**What goes wrong:** Adjectives replace evidence. You describe yourself instead of showing yourself.

- Before: "I'm a product manager with a background in physical-digital products and a track record of shipping in ambiguous environments."
- After: "I've spent five years at the boundary of physical objects and digital systems. That context transfers. I know because I've tested it."

### Block 2: Case study opening paragraph

**What goes wrong:** First paragraph is background, not story. Company and role before problem.

- Before: "At Mighty Jaxx, I led the authentication team responsible for transitioning our product line from NFC to QR-based verification."
- After: "The NFC chip cost 10x what a QR code costs. That's not a minor difference when you're putting one in every unit. This is how we changed it."

### Block 3: Role and contribution

**What goes wrong:** Verbs describe involvement, not decisions. Led. Collaborated. Was responsible for.

- Before: "I led cross-functional collaboration between engineering, design, and operations to deliver the QR migration."
- After: "Three teams needed to move together on this. Engineering had concerns about the rollout timeline. I made the call to phase it. This is what that looked like."

### Block 4: Metrics and results

**What goes wrong:** The number is there but the framing is flat. The metric lands without weight.

- Before: "The QR migration resulted in a 56% repeat scan rate and 14,381 identified users."
- After: "56% of users scanned again after the first time. That's not a retention metric. It means the authentication became part of how people interact with the product."

**Note:** All four examples are directional — they show the structural move, not finished copy. Real case study copy will use actual numbers and decision points.

---

## Section 4: New Rule — Rule 05

**Card heading:** Write like a person, not a style guide.

**Body:**
No em-dashes. Replace with a period, a colon, or rewrite the sentence. Vary sentence length deliberately. Short sentences land harder after long ones. Long sentences carry texture when the thought needs it. Read copy aloud before publishing. If you wouldn't say it that way, rewrite it.

---

## Section 5: Copy Self-Review Checklist (new section)

Seven questions to run before publishing any copy. Question 7 is the hardest and most important.

1. Does the opening line start with what happened, not with who you are?
2. Is there a decision visible, not just an output?
3. Is every metric framed, not just stated?
4. Are there any em-dashes? Replace them.
5. Any words from the swap list? (leveraged, collaborated, drove alignment, key metrics, passionate about)
6. Read it aloud. Does any sentence sound like a LinkedIn bio? Rewrite it.
7. Could this copy describe any PM, or does it only work for you?

---

## Implementation Scope

**File to modify:** `design-system/brand-voice.html`

**Changes:**
- Replace brand sentence in hero card (Section 0)
- Update three register card descriptions and examples (Section 01)
- Add new Section 06: Content-type guidance (four blocks)
- Add Rule 05 card to existing rules grid (Section 03)
- Add new Section 07: Copy self-review checklist

**No changes to:** colour tokens, typography map, vocabulary swap list, headline examples, CSS, or doc structure.

---

## Out of Scope

- Rewriting live case study copy (separate task)
- Changes to palette-reference.html or visual-components.html
- Homepage or case study HTML files
