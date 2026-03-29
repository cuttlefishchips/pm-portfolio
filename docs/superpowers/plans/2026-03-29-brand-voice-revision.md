# Brand Voice Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `design-system/brand-voice.html` with a new brand sentence, core voice qualities, Rule 05, content-type guidance blocks, and a copy self-review checklist.

**Architecture:** All changes are to a single self-contained HTML file. No JS changes. CSS additions go in the existing `<style>` block. New HTML sections go before the footer. Existing sections 01–06 and their content are left intact except for the brand sentence in the hero card and the section 03 label.

**Tech Stack:** HTML, CSS (inline in file), Google Fonts (already loaded)

**Spec:** `docs/superpowers/specs/2026-03-29-brand-voice-revision-design.md`

**Note on Act 2 register example:** The spec lists this as a change, but the existing example in the HTML ("I didn't work in fintech. Going in without assumptions helped me see something the product had been quietly papering over for a while.") is already strong and was confirmed as working well. The spec version is weaker. This plan intentionally leaves the Act 2 example unchanged.

---

## File Map

| File | Change |
|---|---|
| `design-system/brand-voice.html` | All changes — CSS additions, brand sentence, voice qualities, Rule 05, two new sections |

---

### Task 1: Update brand sentence in hero card

**Files:**
- Modify: `design-system/brand-voice.html:565-570`

- [ ] **Step 1: Replace brand sentence and annotation**

Find this block (lines 565–570):
```html
      <p class="hero-right-label">The brand in one sentence</p>
      <p class="brand-sentence">A PM who gets <span class="u">curious</span> about new problems quickly, connects dots across domains, and builds things to <em>understand</em> them better.</p>
      <div style="display:flex;flex-direction:column;gap:8px;padding-top:16px;border-top:1px solid var(--border);">
        <p style="font-family:'DM Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--faint);">What this sentence is doing</p>
        <p style="font-size:13px;font-weight:300;color:var(--muted);line-height:1.6;">Curious about problems → Act 2 self-initiated claim, humble framing. Connects dots across domains → intellectual range without bragging. Builds to understand → Pulse origin story, genuine motivation.</p>
      </div>
```

Replace with:
```html
      <p class="hero-right-label">The brand in one sentence</p>
      <p class="brand-sentence">Five years building products where a physical object and a digital layer have to work together. Most of what I know about product thinking came from getting that boundary wrong a few times first.</p>
      <div style="display:flex;flex-direction:column;gap:8px;padding-top:16px;border-top:1px solid var(--border);">
        <p style="font-family:'DM Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--faint);">What this sentence is doing</p>
        <p style="font-size:13px;font-weight:300;color:var(--muted);line-height:1.6;">Fast-context builder, not generalist. Physical-digital background named as the source of the thinking, not as a job title. Humility built in: the learning came from getting it wrong.</p>
      </div>
```

- [ ] **Step 2: Verify in browser**

Open `design-system/brand-voice.html` in a browser. Confirm the hero card shows the new two-sentence brand statement. Confirm the annotation reads "Fast-context builder...".

- [ ] **Step 3: Commit**

```bash
git add design-system/brand-voice.html
git commit -m "Update brand sentence to fast-context positioning claim"
```

---

### Task 2: Add CSS for new sections

**Files:**
- Modify: `design-system/brand-voice.html` — `<style>` block, before `</style>`

- [ ] **Step 1: Add CSS before the closing `</style>` tag**

Find `</style>` (line 552) and insert the following immediately before it:

```css
    /* ─── VOICE QUALITIES ─────────────────────────────────── */
    .voice-qualities {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 40px;
    }

    .vq-card {
      background: var(--surface);
      border-radius: 14px;
      padding: 24px 28px;
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .vq-title {
      font-family: 'Fraunces', serif;
      font-size: 16px;
      font-weight: 400;
      color: var(--text);
    }

    .vq-body {
      font-size: 13px;
      font-weight: 300;
      color: var(--muted);
      line-height: 1.6;
    }

    /* ─── CONTENT-TYPE BLOCKS ──────────────────────────────── */
    .ct-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .ct-block {
      background: var(--surface);
      border-radius: 16px;
      padding: 32px;
      border: 1px solid var(--border);
    }

    .ct-block h4 {
      font-family: 'Fraunces', serif;
      font-size: 18px;
      font-weight: 400;
      color: var(--text);
      margin-bottom: 6px;
    }

    .ct-warning {
      font-size: 13px;
      font-weight: 300;
      color: var(--muted);
      font-style: italic;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
    }

    .ct-examples {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .ct-ex {
      padding: 16px 18px;
      border-radius: 10px;
      border: 1px solid var(--border);
    }

    .ct-ex.before { background: rgba(255,255,255,0.4); }
    .ct-ex.after  { background: #FFF5EF; border-color: rgba(244,116,59,0.2); }

    .ct-ex-label {
      font-family: 'DM Mono', monospace;
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--faint);
      margin-bottom: 8px;
    }

    .ct-ex.after .ct-ex-label { color: var(--coral); }

    .ct-ex p {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.6;
      color: var(--muted);
    }

    .ct-ex.after p {
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-size: 14px;
      color: var(--text);
    }

    /* ─── CHECKLIST ────────────────────────────────────────── */
    .checklist {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .checklist-item {
      display: flex;
      align-items: baseline;
      gap: 16px;
      background: var(--surface);
      padding: 16px 24px;
      border: 1px solid var(--border);
      border-radius: 3px;
    }

    .checklist-item:first-child { border-radius: 14px 14px 3px 3px; }
    .checklist-item:last-child  { border-radius: 3px 3px 14px 14px; }

    .checklist-num {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: var(--faint);
      flex-shrink: 0;
      width: 16px;
    }

    .checklist-item p {
      font-size: 14px;
      font-weight: 300;
      color: var(--text);
      line-height: 1.55;
    }

    .checklist-item p strong { font-weight: 500; }
```

- [ ] **Step 2: Verify no syntax errors**

Open the file in a browser. Confirm page loads without visual breakage. No styling changes are visible yet — this step only adds CSS classes, none of which are used yet.

- [ ] **Step 3: Commit**

```bash
git add design-system/brand-voice.html
git commit -m "Add CSS for voice qualities, content-type blocks, checklist"
```

---

### Task 3: Add voice qualities and Rule 05 to Section 03

**Files:**
- Modify: `design-system/brand-voice.html:675-718`

- [ ] **Step 1: Update section label from "Four rules" to "Rules and qualities"**

Find:
```html
    <p class="section-label">03 · Four rules · Non-negotiable</p>
```

Replace with:
```html
    <p class="section-label">03 · Rules and qualities · Non-negotiable</p>
```

- [ ] **Step 2: Add voice qualities block before the rules grid**

Find:
```html
    <div class="rules-grid">
```

Insert the following immediately before it:
```html
    <div class="voice-qualities">
      <div class="vq-card">
        <p class="vq-title">Humility is structural.</p>
        <p class="vq-body">Never position yourself against others. Never imply you saw what the team missed or brought something they lacked. The work speaks for itself. If a line only works because it implies someone else was wrong or slower, rewrite it.</p>
      </div>
      <div class="vq-card">
        <p class="vq-title">Elegant and gracious.</p>
        <p class="vq-body">The writing should feel considered, not clipped. Warm without being effusive. Every sentence earns its place. Gracefulness comes from giving the reader enough without giving them too much.</p>
      </div>
      <div class="vq-card">
        <p class="vq-title">Length in balance.</p>
        <p class="vq-body">Short sentences create emphasis. Longer ones carry texture and thought. The two should work together. Vary deliberately, not by accident.</p>
      </div>
    </div>

```

- [ ] **Step 3: Add Rule 05 card inside the rules grid**

Find the closing `</div>` of the rules grid — it follows Rule 04 and closes before `</div>` of the section:
```html
      </div>
    </div>
  </div>


  <!-- ═══ TYPOGRAPHY ↔ VOICE MAP
```

Insert Rule 05 immediately before the `</div>` that closes `.rules-grid`:
```html
      <div class="rule-card">
        <div class="rule-num">05</div>
        <h4>Write like a person, not a <em>style guide.</em></h4>
        <p>No em-dashes. Replace with a period, a colon, or rewrite the sentence. Vary sentence length deliberately. Short sentences land harder after long ones. Long sentences carry texture when the thought needs it. Read copy aloud before publishing. If you wouldn't say it that way, rewrite it.</p>
        <div class="rule-examples">
          <div class="ex no"><span class="icon">✕</span> "I leveraged cross-functional alignment to drive — and deliver — a 56% improvement in authenticated user identification."</div>
          <div class="ex yes"><span class="icon">→</span> "14,381 users scanned and came through as identified collectors. Before QR, they were anonymous buyers."</div>
        </div>
      </div>
```

- [ ] **Step 4: Verify in browser**

Open the file. Confirm Section 03 shows three voice quality cards above the rules grid, and Rule 05 appears after Rule 04. Confirm layout is not broken on the rules grid (should still be 2-column).

- [ ] **Step 5: Commit**

```bash
git add design-system/brand-voice.html
git commit -m "Add voice qualities and Rule 05 to Section 03"
```

---

### Task 4: Add Section 07 — Content-type guidance

**Files:**
- Modify: `design-system/brand-voice.html:876-879`

- [ ] **Step 1: Insert new section before the footer comment**

Find:
```html
  <!-- FOOTER -->
```

Insert the following immediately before it:
```html
  <!-- ═══ CONTENT-TYPE GUIDANCE ══════════════════════════════ -->
  <div class="section">
    <p class="section-label">07 · Content-type guidance · Where copy slips</p>

    <div class="ct-grid">

      <div class="ct-block">
        <h4>Hero copy / writing about yourself</h4>
        <p class="ct-warning">What goes wrong: adjectives replace evidence. You describe yourself instead of showing yourself.</p>
        <div class="ct-examples">
          <div class="ct-ex before">
            <p class="ct-ex-label">Do not use</p>
            <p>"I'm a product manager with a background in physical-digital products and a track record of shipping in ambiguous environments."</p>
          </div>
          <div class="ct-ex after">
            <p class="ct-ex-label">Use this</p>
            <p>"Five years building products where a physical object and a digital layer have to work together. The problems are different from pure software, and so is the thinking that comes out of it."</p>
          </div>
        </div>
      </div>

      <div class="ct-block">
        <h4>Case study opening paragraph</h4>
        <p class="ct-warning">What goes wrong: first paragraph is background, not story. Company and role before problem.</p>
        <div class="ct-examples">
          <div class="ct-ex before">
            <p class="ct-ex-label">Do not use</p>
            <p>"At Mighty Jaxx, I led the authentication team responsible for transitioning our product line from NFC to QR-based verification."</p>
          </div>
          <div class="ct-ex after">
            <p class="ct-ex-label">Use this</p>
            <p>"The NFC chip cost ten times what a QR code costs. That number sat underneath a lot of decisions for longer than it should have."</p>
          </div>
        </div>
      </div>

      <div class="ct-block">
        <h4>Role and contribution</h4>
        <p class="ct-warning">What goes wrong: verbs describe involvement, not decisions. Led. Collaborated. Was responsible for.</p>
        <div class="ct-examples">
          <div class="ct-ex before">
            <p class="ct-ex-label">Do not use</p>
            <p>"I led cross-functional collaboration between engineering, design, and operations to deliver the QR migration."</p>
          </div>
          <div class="ct-ex after">
            <p class="ct-ex-label">Use this</p>
            <p>"Engineering needed to trust the rollout plan before anything moved. Getting there took longer than the timeline assumed, and the conversations along the way changed what we shipped."</p>
          </div>
        </div>
      </div>

      <div class="ct-block">
        <h4>Metrics and results</h4>
        <p class="ct-warning">What goes wrong: the number is there but the framing is flat. The metric lands without weight.</p>
        <div class="ct-examples">
          <div class="ct-ex before">
            <p class="ct-ex-label">Do not use</p>
            <p>"The QR migration resulted in a 56% repeat scan rate and 14,381 identified users."</p>
          </div>
          <div class="ct-ex after">
            <p class="ct-ex-label">Use this</p>
            <p>"14,381 users scanned and came through as identified collectors. Before QR, they were anonymous buyers. That distinction matters for everything that comes after the sale."</p>
          </div>
        </div>
      </div>

    </div>
  </div>


```

- [ ] **Step 2: Verify in browser**

Scroll to the bottom of the page. Confirm four content-type blocks render correctly with before/after columns side by side. Confirm the "after" column uses Fraunces italic and has the coral border tint.

- [ ] **Step 3: Commit**

```bash
git add design-system/brand-voice.html
git commit -m "Add Section 07: content-type guidance blocks"
```

---

### Task 5: Add Section 08 — Copy self-review checklist

**Files:**
- Modify: `design-system/brand-voice.html` — after Section 07, before footer

- [ ] **Step 1: Insert checklist section**

Find the `<!-- FOOTER -->` comment again (now shifted down after Task 4). Insert immediately before it:

```html
  <!-- ═══ COPY SELF-REVIEW ════════════════════════════════════ -->
  <div class="section">
    <p class="section-label">08 · Copy self-review · Run before publishing</p>

    <div class="checklist">
      <div class="checklist-item">
        <span class="checklist-num">01</span>
        <p>Does the opening line start with what happened, not with who you are?</p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">02</span>
        <p>Is there a decision visible, not just an output?</p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">03</span>
        <p>Is every metric framed, not just stated?</p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">04</span>
        <p>Are there any em-dashes? Replace them.</p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">05</span>
        <p>Any words from the swap list? <strong>leveraged · collaborated · drove alignment · key metrics · passionate about</strong></p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">06</span>
        <p>Read it aloud. Does any sentence sound like a LinkedIn bio? Rewrite it.</p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">07</span>
        <p>Could this copy describe any PM, or does it only work for you?</p>
      </div>
      <div class="checklist-item">
        <span class="checklist-num">08</span>
        <p>Does any line imply you found what others missed, or position you as smarter than the room? Rewrite it.</p>
      </div>
    </div>
  </div>


```

- [ ] **Step 2: Verify in browser**

Scroll to bottom. Confirm eight checklist items render as a stacked list with rounded top and bottom corners, mono numbers on the left.

- [ ] **Step 3: Commit**

```bash
git add design-system/brand-voice.html
git commit -m "Add Section 08: copy self-review checklist"
```

---

### Task 6: Push to main and verify live

- [ ] **Step 1: Push to GitHub Pages**

```bash
git push origin main
```

- [ ] **Step 2: Verify live**

Open `https://cuttlefishchips.github.io/pm-portfolio/design-system/brand-voice.html`

Confirm:
- New brand sentence in hero card
- Voice qualities row above rules grid in Section 03
- Rule 05 after Rule 04
- Section 07 with four content-type blocks
- Section 08 with eight checklist items
- No layout breakage on existing sections 01–06
