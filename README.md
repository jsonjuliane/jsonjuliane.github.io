# Kim Jason Juliane — Portfolio

Personal portfolio site for Kim Jason Juliane, Senior Mobile Engineer.

## Deploy to GitHub Pages (jsonjuliane.github.io)

1. Create a new repository named `jsonjuliane.github.io` on GitHub.
2. Push this folder to the repo:

```bash
cd /Users/json/Documents/portfolio
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/jsonjuliane/jsonjuliane.github.io.git
git push -u origin main
```

3. In repo **Settings → Pages**, set source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://jsonjuliane.github.io/`.

### Local development

Open `index.html` in a browser, or run a local server:

```bash
cd /Users/json/Documents/portfolio
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Structure

```
portfolio/
├── index.html          # Single-page portfolio
├── favicon.svg         # Favicon (KJ initials)
├── og-image.jpg        # Social share image (1200×630)
├── css/style.css       # Styles, dark/light theme
├── js/main.js          # Theme toggle, project modals, contact form
├── photo/              # Hero photo
├── projects/           # Project screenshots (Skedgo, LalaFood, Upmood, etc.)
└── resume/             # Resume (HTML light/dark, PDF, markdown source)
```

## Features

- **SEO:** Open Graph and Twitter Card meta tags for rich link previews
- **Analytics:** Plausible (privacy-friendly, no cookies). Add `jsonjuliane.github.io` to your [Plausible](https://plausible.io) account to enable.
- Dark/light mode toggle (persists via localStorage)
- Resume link switches with theme (light/dark versions)
- Project modals with screenshot carousel and external links
- Contact form (opens mailto)
- "Ask Me" availability section
- Responsive layout
