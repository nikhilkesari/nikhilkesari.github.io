# nikhilkesari.github.io

Personal website for **Nikhil S Kesari — Engineering Manager**.  
Live at → [https://nikhilkesari.github.io](https://nikhilkesari.github.io)

## Stack

- [Tailwind CSS](https://tailwindcss.com) (CDN — no build step)
- Vanilla HTML5
- Vanilla JavaScript (ES6+)

## Project Structure

```
.
├── index.html        # Single-page site
├── assets/
│   ├── style.css     # Custom CSS (animations, scroll, card styles)
│   └── main.js       # Mobile nav, scroll-reveal, active nav highlight
└── README.md
```

## Preview locally

No build tool required — just open the file in a browser:

```bash
open index.html
# or use a local dev server for smoother experience:
npx serve .
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub named exactly `nikhilkesari.github.io`
2. Push this folder to the `main` branch:

```bash
git remote add origin https://github.com/nikhilkesari/nikhilkesari.github.io.git
git push -u origin main
```

3. Go to **Settings → Pages** in the repo
4. Under *Source*, select **Deploy from a branch → main → / (root)**
5. Save — your site will be live at `https://nikhilkesari.github.io` within a minute or two.

## Customising

- **Content** — edit `index.html` directly; all sections are clearly commented
- **Colours** — change `indigo` / `slate` classes throughout, or update the Tailwind config block in `<head>`
- **Projects** — duplicate any `<article class="project-card">` block and update the details
