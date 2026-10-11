# Asset Replacement Guide

Every image in this folder is a neutral placeholder. Replace them with your own files (keep the same names), or regenerate the placeholders with `npm run assets:placeholder`.

| File | Size | Purpose |
|------|------|---------|
| `/public/logo.png` | ~800×400px, transparent | Main logo (about page, structured data) |
| `/public/logo-header.png` | ~800×400px, transparent | Header logo (on light background) |
| `/public/logo-footer.png` | ~800×400px, transparent | Footer logo (on dark brand background) |
| `/public/logo-mark.png` | 512×512px, transparent | Square emblem / monogram |
| `/public/favicon.ico` + `/app/favicon.ico` | 32×32px | Browser tab icon |
| `/public/favicon.png` | 32×32px | PNG favicon |
| `/public/apple-touch-icon.png` | 180×180px | iOS home screen |
| `/public/icon-192.png` | 192×192px | Android PWA |
| `/public/icon-512.png` | 512×512px | PWA splash (maskable) |
| `/public/og-image.png` | 1200×630px | Social share preview |
| `/public/hero.jpg` | 1920×1080px | Homepage hero photo |

After replacing logos or the hero, bump `LOGO_VERSION` / `HERO_IMAGE_VERSION` in `lib/site-brand.ts` to bust browser caches.

## Generate logo variants automatically

Drop a high-resolution logo on a black background at `/public/logo-source.png`, then run `npm run assets:brand`. It produces the header/footer logos, emblem, icons, favicon and OG image. Adjust the crop ratios and colours in `scripts/process-brand-assets.mjs` to suit your artwork.

## Tools

- [RealFaviconGenerator](https://realfavicongenerator.net)
- [OG Playground](https://og-playground.vercel.app)
- [Squoosh](https://squoosh.app) — image compression
