# mjlee111.github.io

Personal profile site. Static HTML/CSS/JS, no build step. Served by GitHub Pages from `main` / `(root)` at https://mjlee111.github.io.

## Files
- `index.html` — page content (About, Experience, Activities) and head metadata (description, Open Graph)
- `script.js` — `PROJECTS` array that renders the Projects section and the project dialog
- `style.css` — styles (dark by default, light follows the OS setting)
- `images/` — `profile.webp`, project images, and `og.jpg` (1200×630 link-preview card)
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` — site icons
- `_editor.html` — local editor for the files above (Chrome / Edge). The underscore prefix keeps it out of the GitHub Pages (Jekyll) build.

## Editing
- Open `_editor.html` in a browser and choose the site folder, or edit the files directly.
- Project detail text: a blank line (`\n\n`) starts a new paragraph, a single `\n` is a line break.
- `class="tbd"` highlights unfinished content. The editor's `tbd` checkbox toggles it.

## Images
- Use WebP for photos and screenshots; the original PNG/JPG files are in git history.
- Keep images at most about 1400 px wide (the project dialog shows them at up to 656 CSS px). The portrait is shown at up to 272 CSS px.
- `og.jpg` contains the name, title, and portrait as rendered text and image. Regenerate it if those change, and keep the `og:image` URL in `index.html` absolute.
