---
name: testing-cv-site
description: Test the bilingual (TR/EN) static CV website end-to-end. Use when verifying UI changes to the CV site (language toggle, theme toggle, sections, responsive menu).
---

# Testing the CV Website

Static site (plain HTML/CSS/JS). No build, no backend, no CI, no credentials needed.

## Run locally
```bash
cd <repo> && python3 -m http.server 8000
# open http://localhost:8000/
```

## State persistence gotcha
Language and theme are saved in `localStorage` (`cv-lang`, `cv-theme`). A previous
session's choices persist and can make the page open in EN/dark unexpectedly. To start
from a clean default (TR + system theme) before recording, clear them once via the
browser console (setup step, not part of the recorded test):
```js
localStorage.removeItem('cv-lang'); localStorage.removeItem('cv-theme');
```
then reload.

## Primary flow to test (UI)
All content is data-driven from `js/data.js`; rendering/toggles live in `js/main.js`.
1. **Language toggle** — click the `#lang-toggle` button (top-right, shows "EN"/"TR").
   Assert headings/nav switch (e.g. "Hakkımda" ↔ "About Me") and button label flips.
2. **Theme toggle** — click `#theme-toggle` (🌙/☀️). Assert background light↔dark.
3. **Sections** — scroll; assert Experience/Education/Skills/Projects/Languages/Contact
   are all populated (no empty sections, no `[object Object]`/`undefined`).
4. **Avatar fallback** — if no `assets/profile.jpg`, hero shows a gray circle with the
   name's initial (inline SVG data-URI). A solid black circle = double-encoding bug in
   the fallback (use real `#hex` colors inside `encodeURIComponent`, not `%23`).
5. **Responsive menu (regression)** — narrow the window (<720px) so `#menu-toggle` (☰)
   appears; click it; assert vertical nav opens and clicking a link closes it + scrolls.

To narrow the window on Linux:
```bash
wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz
wmctrl -r :ACTIVE: -e 0,60,30,460,720
```

## Deploy
GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.

## Devin Secrets Needed
None.
