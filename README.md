# 👑 Princess Day

A warm, private gift website made for someone special. Built with Vite + React — no external CSS frameworks, no trackers, no ads.

---

## ✨ What's inside

| Section | Description |
|---------|-------------|
| Hero | Animated crown, personalised name from URL hash |
| A note from a friend | Warm personal card |
| Things that are true about you | 9 emoji + truth cards |
| Compliment generator | No-repeat-back-to-back compliments |
| Kindness wall | 10-wish carousel, keyboard navigable |
| A little treat | Tap-to-blow-the-candle interactive SVG cake |
| A little pause | Breathing circle, gratitude prompt, stretch reminder |
| Sound toggle | Soft Web Audio tone, off by default |
| Theme toggle | Light ↔ dark, respects prefers-color-scheme |
| Animated background | Floating petals/leaves/butterflies (pure CSS) |
| Emoji rain | Shower of 🌸🐝🦋🐰 on button press |

---

## 🛠 Setup

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # → dist/
npm run preview    # preview the built site locally
```

---

## 📝 Editing content (no code changes needed)

All text lives in [`data/content.json`](./data/content.json).

| Key | What it controls |
|-----|-----------------|
| `name` | Default name shown in the hero |
| `note` | The personal note card text |
| `truths` | Array of `{ emoji, text }` truth cards |
| `compliments` | Pool of compliment strings |
| `wishes` | Array of `{ emoji, text }` kindness-wall slides |
| `gratitudePrompts` | Gratitude activity prompt strings |
| `stretchText` | Stretch activity description |

After editing, just redeploy (or `npm run dev` to preview locally).

---

## 🔗 URL personalisation

The name in the hero reads from the URL hash — no code change needed:

```
https://your-site.netlify.app/#Osheen   → "Happy Princess Day, Osheen 👑"
https://your-site.netlify.app/#Sarah    → "Happy Princess Day, Sarah 👑"
https://your-site.netlify.app/          → uses name in content.json
```

---

## 🌐 Deploy to Netlify

### Option A — Netlify CLI (fastest, one command)

```bash
npm run build
npx netlify-cli deploy --dir=dist --prod
# → Follow the prompts; you'll get a live URL.
```

### Option B — GitHub + Netlify (recommended for easy updates)

1. Push this repo to a **private** GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
3. Choose your repo.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site** — you'll get a `*.netlify.app` URL.
7. Every future `git push` will auto-redeploy.

### Option C — Cloudflare Pages

1. Push to a private GitHub repo.
2. [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**.
3. Build command: `npm run build` | Output directory: `dist`.
4. Deploy — you'll get a `*.pages.dev` URL.

---

## 🌏 Custom domain (Netlify)

1. **Netlify dashboard** → your site → **Domain management** → **Add custom domain**.
2. Enter e.g. `princess-day.yourdomain.com`.
3. Netlify shows a **CNAME** value like `abc123.netlify.app`.
4. At your domain registrar, add:
   ```
   Type: CNAME
   Host: princess-day
   Value: abc123.netlify.app
   TTL: auto
   ```
5. Netlify auto-provisions a free HTTPS certificate within a few minutes.

For **Cloudflare Pages**: Site → **Custom domains** → **Set up a custom domain**.

---

## 🧰 Tech stack

| Thing | Choice |
|-------|--------|
| Framework | React 19 + Vite |
| Styling | CSS custom properties (zero external CSS libraries) |
| Sound | Web Audio API — two 432/436 Hz oscillators; no audio files |
| Fonts | Georgia (serif headings) + system-ui (body) — zero download |
| Animation | CSS `@keyframes` + `transition` only — no JS animation loops |
| Data | `data/content.json` — Vite imports it at build time |
| Deployment | Netlify (config included) |

---

## 🔒 Privacy

- `<meta name="robots" content="noindex, nofollow">` prevents search engine indexing.
- No cookies, no analytics, no third-party scripts.
- Fonts are system fonts — no Google Fonts requests.
