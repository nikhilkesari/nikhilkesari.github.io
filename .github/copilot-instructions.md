# Copilot Instructions — nikhilkesari.github.io

Personal portfolio site for Nikhil S Kesari (Engineering Manager).
Live at https://nikhilkesari.github.io

## Stack

- **No build step.** Tailwind CSS is loaded via CDN (`https://cdn.tailwindcss.com`). Do not introduce npm, a bundler, or a build pipeline.
- Vanilla HTML5 (`index.html` — single file, all sections inline)
- Vanilla JavaScript ES6+ (`assets/main.js`)
- Custom CSS (`assets/style.css`) — animations, scroll effects, card styles only; layout is Tailwind

## Project Structure

```
index.html        # Entire site — nav, hero, about, skills, projects, contact, footer
assets/
  style.css       # Custom animations and overrides (not layout)
  main.js         # Mobile nav toggle, scroll-reveal, sticky header, active nav highlight
```

## Colour Palette (brand tokens defined in `index.html` tailwind.config)

| Token              | Hex       |
|--------------------|-----------|
| brand.orange       | `#FFA763` |
| brand.yellow       | `#FFE19C` |
| brand.cream        | `#FFFFE3` |
| brand.sky-blue     | `#BDEDFF` |
| brand.light-blue   | `#D6FAFF` |

Always use these tokens (or the raw hex values already present in the file) for new UI elements. Do not introduce new colours.

## Section IDs

`#hero` · `#about` · `#skills` · `#projects` · `#contact`

Navigation links use anchor IDs — keep them stable when editing sections.

## Conventions

- Tailwind utility classes are the primary styling mechanism. Only add to `style.css` when Tailwind can't cover it (e.g., `@keyframes`, `backdrop-filter` combos).
- Section backgrounds alternate: white (`bg-white`) and light-blue (`bg-[#D6FAFF]`).
- All external links use `target="_blank" rel="noopener noreferrer"`.
- The copyright year (`#year`) is set dynamically in `main.js` — do not hardcode it.
- No testing framework exists. Validate visually by opening `index.html` in a browser.
