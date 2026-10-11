# Asset Guide

`/public/logo-source.png` is the master Shoro Ventures logo (single-colour artwork on a flat background, stacked as monogram / SHORO / VENTURES). `npm run assets:logo` (`scripts/generate-logo-assets.mjs`) turns it into every file below. To update the logo, replace `logo-source.png` (ideally higher resolution, same layout) and re-run the command.

| File | Purpose |
|------|---------|
| `/public/logo.png` | Stacked logo, navy + gold on transparent (about page, structured data) |
| `/public/logo-header.png` | Horizontal lockup, navy + gold (header) |
| `/public/logo-footer.png` | Stacked logo, white + gold (navy footer) |
| `/public/logo-mark.png` | SV monogram, navy on transparent |
| `/public/favicon.ico` + `/app/favicon.ico` + `/public/favicon.png` | Browser tab icon |
| `/public/apple-touch-icon.png` | iOS home screen (180×180) |
| `/public/icon-192.png` / `icon-512.png` | Android PWA icons |
| `/public/og-image.png` | Social share preview (1200×630) |
| `/public/hero.jpg` | Homepage hero background (replace with a real lifestyle photo when available) |

After replacing logos or the hero, bump `LOGO_VERSION` / `HERO_IMAGE_VERSION` in `lib/site-brand.ts` to bust browser caches.

## Tools

- [RealFaviconGenerator](https://realfavicongenerator.net)
- [OG Playground](https://og-playground.vercel.app)
- [Squoosh](https://squoosh.app) — image compression
