# Natural Aceh

A responsive homepage concept for Natural Aceh, built with Nuxt, Vue, and Tailwind CSS. Organization descriptions, program themes, address, and phone numbers are based on the public reference website: [naturalaceh.org](https://naturalaceh.org/). Legal registration details and unverified social accounts are intentionally omitted.

## Stack

- Nuxt 4 and Vue 3
- Tailwind CSS v4 through the official `@tailwindcss/vite` plugin integration
- `@nuxtjs/i18n` with browser language detection and English/Indonesian messages

The project was already on Nuxt 4, so the implementation keeps the existing version instead of downgrading to Nuxt 3.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

```text
app/
  assets/css/main.css
  components/
    SiteHeader.vue
    SiteFooter.vue
    NavMenuItem.vue
  data/
    news.ts
    navigation.json
  pages/
    index.vue
  app.vue
i18n/
  locales/
    en.json
    id.json
scripts/
  scrape-naturalaceh-navigation.mjs
nuxt.config.ts
```

The homepage contains the organization overview, programs, recent news, and contact information. Its content is localized in English and Bahasa Indonesia. Indonesian browser languages are directed to `/id`; other languages use English. Visitors can switch languages from the header, and their choice is saved in a cookie.

## Styling guidelines

- Use forest green for identity and important actions, leaf green for emphasis, warm white for reading surfaces, and muted green for supporting text.
- Keep body copy comfortable to scan and display headings restrained; the serif italic accent is reserved for short phrases.
- Use generous section spacing, image-led program cards, and fine separators instead of wrapping every section in a card.
- Keep navigation and calls to action clear on small screens; preserve visible keyboard focus and reduced-motion preferences.
- Replace remote Unsplash placeholders with approved Natural Aceh photography before production use.
- Tailwind v4 theme tokens live in the `@theme` block in `app/assets/css/main.css`.

## Navigation data

The navigation tree is scraped from the official homepage. Refresh it with:

```bash
node scripts/scrape-naturalaceh-navigation.mjs
```

The script groups source items into Programs, Stories, Get involved, and Resources while preserving every original destination URL. Menu destinations open in a new tab.

## Production

```bash
npm run build
npm run preview
```

Background music attempts to autoplay. The small fixed control in the bottom-right corner mutes or unmutes it and provides localized accessible labels. Browsers that block audible autoplay can start playback from the same control.
