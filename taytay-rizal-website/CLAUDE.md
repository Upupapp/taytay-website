# CLAUDE.md — Taytay, Rizal Municipal Website

Context for Claude Code when working in this repo.

## What this is
An 8-page informational website for the Municipality of Taytay, Rizal, hosted as a **plain static site** on GitHub Pages. There is no framework, no build step and no package.json. Keep it that way unless the owner asks otherwise.

## Structure
- `index.html`, `about.html`, `government.html`, `barangays.html`, `tourism.html`, `community.html`, `news.html`, `contact.html` are the pages. Each one is self-contained. Styles are mostly inline `style="…"` attributes, plus a small `<style>` block in `<head>` for base rules and media queries.
- `assets/images/` holds all photos and `taytay-seal.png`. Reference them with relative paths (`assets/images/…`). Never use absolute `/` paths, because the site is served from `/taytay-website/` on GitHub Pages.
- `assets/js/barangays.js` holds the barangay data array and the live search. It renders cards into `#brgy-list` and shows `#brgy-none` when nothing matches.
- `assets/js/news.js` holds the news posts array and the All/News/Announcements filter. It renders into `#news-tabs` and `#news-grid`.
- `assets/js/scenes-strip.js` makes the Home page photo strip (`#scenes-strip` / `#scenes-track`) drift sideways in an endless loop. It clones the figures (copies are `aria-hidden`), keeps moving under the mouse (the owner asked for no hover pause), lets a mouse drag it, and stays still when the visitor's system asks for reduced motion. To add or remove a photo, edit only the original figures in `index.html`.
- `docs/` holds the design system, data sources, image list and a plain-text copy of every page. Update these when content changes.
- `design-source/` holds the original Claude Design files. They are reference only and are not served by the site. Don't edit them.

## Rules
- **Header, nav and footer are repeated in every page.** When you change one (a nav label, address, phone or hours), change it in all 8 HTML files.
- Use only the colors and fonts in `docs/DESIGN-SYSTEM.md`: navy `#0B2A6F`, gold `#F5C02E`, red `#C8102E`, with Bricolage Grotesque, Instrument Serif Italic and Figtree.
- Keep pages responsive. Use `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))` grids and `clamp()` font sizes, and check at 390px width that nothing scrolls sideways. Long emails and URLs need `overflow-wrap: anywhere`.
- Every `<img>` needs a meaningful `alt`.
- Facts must be real. Don't invent officials, numbers, dates or phone numbers. If something is unknown, ask the owner. Record sources and open questions in `docs/DATA-AND-SOURCES.md`.
- Don't add sections or features the owner didn't ask for.
- Escape any user-visible text added to the JS data arrays. The render functions already escape fields through `esc()`.

## Common tasks
- **Add a news post:** add an object at the top of `posts` in `assets/js/news.js` (`kind`, `tag`, `date`, `title`, `summary`, `img`, `alt`, `pos`, `href`). If it should also appear on the Home page, edit the "News & Announcements" section in `index.html`.
- **Update a barangay:** edit the matching object in `assets/js/barangays.js`. If populations change, recompute `share` (percent of the total) and `bar` (percent of the largest barangay).
- **Replace a placeholder link:** search for `href="#"`. The four Transparency links in `government.html` still need real URLs.

## Preview
Open `index.html` directly in a browser, or run `python -m http.server 8000` in the repo root and go to http://localhost:8000.

## Deploy
Commit and push to `main`. GitHub Pages serves the site from the repo root (Settings → Pages → Deploy from a branch → `main` / root). The `.nojekyll` file must stay.
