# Quick Task 001: Evaluate Nav System — Findings

## Verdict
NEEDS FIXES BEFORE ROLLOUT

The core functionality works well and the visual design is solid, but there are two critical accessibility gaps (no keyboard navigation, no Escape key) that block rollout for a professional portfolio. There are also a handful of minor issues worth cleaning up while copying to other pages.

---

## Issues Found

### Critical (must fix before rollout)

**1. No keyboard navigation in the dropdown**
There is no `keydown` handler anywhere in the JS. This means:
- Pressing `Escape` while the dropdown is open does nothing — users have to click away to close it.
- Arrow keys do not move focus between section links.
- Users who navigate entirely by keyboard are stuck once they tab into an open dropdown.
This is a WCAG 2.1 failure (criterion 2.1.1 Keyboard) and a bad look on a PM portfolio.

**2. No focus management when dropdown opens**
`toggleDropdown()` never calls `.focus()` on anything after opening. A keyboard user who presses Enter on "Sections" opens the panel but focus stays on the button — there is no signal that 9 links are now available below it. The first link (or the "Back to top" anchor) should receive focus on open.

**3. `aria-expanded` is set to the boolean `false` (not the string `"false"`)**
In `closeDropdown()`: `sectBtn.setAttribute('aria-expanded', false)`. `setAttribute` coerces its second argument to a string, so this actually writes `"false"` — which is coincidentally correct — but it is inconsistent with `toggleDropdown()` which passes the boolean `isOpen`. When `isOpen` is `true` the written value is `"true"`, which is fine. When `isOpen` is `false` it writes `"false"`, which is also fine. So this is not a live bug, but it is fragile and should be normalised to explicit string literals `"true"` / `"false"` before copy-pasting.

**4. Missing `aria-haspopup="true"` on the Sections button**
`sectBtn` has `aria-expanded` and `aria-controls` but not `aria-haspopup`. Screen readers use this attribute to announce that activating the button opens a menu/listbox. Without it, VoiceOver/NVDA users get no upfront hint that a panel will appear.

---

### Minor (fix during rollout)

**5. Dropdown positioned at `top: 60px` but nav height is `58px`**
`.sect-dropdown { top: 60px }` vs `nav { height: 58px }`. The 2px gap is invisible on most monitors but creates a thin strip where the dropdown is technically detached from the nav. It should be `top: 58px` (or `calc(58px + 2px)` if the 2px border-bottom is intentional visual padding).

**6. No `role` on the dropdown or its list**
The `<div id="sectDropdown">` has no ARIA role. Adding `role="dialog"` or `role="navigation"` (with `aria-label="Page sections"`) would give screen reader users a landmark they can jump to. The `<ul>` inside is already semantically correct, but a wrapping landmark would help.

**7. `sect-link` click handler uses `setTimeout(closeDropdown, 80)` — the delay is unnecessary**
The 80 ms delay was presumably added to let the anchor navigation fire before the dropdown collapses. With `smooth` scroll behavior this is harmless, but it means the dropdown flickers open briefly after the click. Removing the timeout (just call `closeDropdown()` directly) is cleaner and works correctly because the hash navigation is synchronous.

**8. Active section highlighting races on fast scroll**
The `sectionObserver` rootMargin is `-30% 0px -60% 0px`, which means only sections occupying the middle 10% of the viewport trigger `isIntersecting = true`. On fast scroll or on short sections this window may be skipped entirely, leaving no link highlighted. A common fix is to track the last-known section and only clear `active` when a new section enters, rather than removing it the moment a section exits.

**9. `back-to-top` button is placed in the DOM before `<nav>` (line 665 vs 667)**
DOM order affects tab order. The back-to-top button will receive keyboard focus before the nav logo and the Sections button, which is confusing. It should be placed at the end of `<body>` (after the footer), where it is visually and logically a bottom-of-page control.

**10. No `inert` or `visibility: hidden` applied to the closed dropdown**
When the dropdown is closed it uses `opacity: 0; pointer-events: none` but is not `inert` or `display: none`. This means its links are still in the tab order — a keyboard user tabbing through the page will silently tab through 9 invisible anchor elements. Fix: add `display: none` on the closed state (transitioning in from `display: none` requires a short JS trick or the new `@starting-style` rule), or add `tabindex="-1"` to all links when closed and restore on open, or use the HTML `inert` attribute on the container.

---

### No action needed

- **Dropdown `max-height: 65vh; overflow-y: auto`** — already handles 20+ sections gracefully. The scroll container is the `<ul>`, which is the right element.
- **`right: 48px` on desktop / `right: 16px` on mobile** — the `@media (max-width: 600px)` override is in place and correct. `left: 16px` is also set so the dropdown won't overflow the viewport on narrow screens.
- **Click-outside-to-close** — the `document.addEventListener('click', ...)` handler is correct. It checks `!sectDropdown.contains(e.target) && e.target !== sectBtn`, which cleanly excludes both the dropdown contents and the button itself. No false-positive closes.
- **Reading progress bar** — independent of the nav system, works correctly at `z-index: 99` (below the nav's `z-index: 100`).
- **z-index stack** — nav at 100, dropdown at 200, back-to-top at 9999. No conflicts for the current layout.
- **Short page / no scroll** — the back-to-top button simply never becomes visible (threshold 400px), which is the correct behaviour.
- **`IntersectionObserver` for scroll reveal** — separate observer from the section highlighter, unobserves after first trigger, no memory leak.

---

## Scalability Assessment

The implementation is well-structured for copy-paste rollout. The JS is self-contained in a `<script>` block at the bottom of `<body>` with no external dependencies. The CSS is isolated under clear comment blocks (`/* ── SECTIONS DROPDOWN NAV ── */`, `/* ── BACK TO TOP ── */`).

**What is page-generic (copy as-is):**
- All CSS for `.sect-btn`, `.sect-dropdown`, `.back-to-top`, and their states
- The `@media (max-width: 600px)` dropdown override
- The entire `<script>` block (all IDs and class names are reused unchanged)
- The `<button class="back-to-top" id="backToTop">` element
- The `<button class="sect-btn" id="sectBtn">` element inside nav

**What changes per case study page:**
- The `<ul>` inside `<div id="sectDropdown">` — the section links must match each page's `<section id="...">` anchors.
- The nav logo `href` depth (`../../index.html` for one level of nesting, `../index.html` for another).
- The `<title>` tag and hero content (obviously).

**Risk if copied without fixes:**
Issues 1, 2, 4, and 10 above will be replicated verbatim to every page. It is worth fixing them in the vault page first so the corrected version becomes the master template.

---

## Rollout Checklist

For each new case study page:

- [ ] Copy CSS blocks: `SECTIONS DROPDOWN NAV` and `BACK TO TOP` and the mobile `@media` override
- [ ] Copy the `<div id="sectDropdown">` element and update the `<ul>` links to match the new page's section IDs
- [ ] Copy the `<button class="back-to-top">` element (move it to end of body — see Issue 9)
- [ ] Copy the `<button class="sect-btn">` into the nav's `.nav-right`
- [ ] Copy the full `<script>` block unchanged
- [ ] Verify every `href="#anchor"` in the dropdown matches a real `<section id="anchor">` on the page
- [ ] Adjust nav logo `href` depth to match directory structure
- [ ] After applying fixes from Issues 1, 2, 4, 10 to the vault master, verify keyboard nav works end-to-end before rolling out
