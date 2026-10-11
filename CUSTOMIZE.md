# Customization Checklist

Complete these steps to make this project fully yours. Search the codebase for `YOUR_` and `yourdomain.com` to find anything left over.

## Identity

- [ ] Edit `lib/site-brand.ts` — replace all `YOUR_*` placeholders (name, description, taglines, hero copy, contact, address, socials, benefits, categories, reviews, about)
- [ ] Update `BRAND_COLORS` in `lib/site-brand.ts`, then mirror in `app/globals.css`, `tailwind.config.js`, `public/manifest.json` and the `themeColor` / `theme-color` values in `app/layout.tsx`
- [ ] Replace `yourdomain.com` in `.env.local` and deployment env
- [ ] Update `package.json` name, author, homepage, repository URL

## Content

- [ ] Replace the sample categories and products in `lib/mock-catalog.ts` (used until Supabase is connected)
- [ ] Review page copy in `app/(store)/about/page.tsx`, `components/WhoWeAreSection.tsx` and `app/(store)/page.tsx`
- [ ] Review delivery prices, zones and timeframes in `app/(store)/shipping/page.tsx` and `app/(store)/faqs/page.tsx`
- [ ] Review opening hours in `app/(store)/contact/page.tsx`

## Assets (see `/public/ASSETS_GUIDE.md`)

- [ ] Replace `/public/logo.png`, `logo-header.png`, `logo-footer.png`, `logo-mark.png`
- [ ] Replace `/public/favicon.ico`, `/app/favicon.ico`, `/public/favicon.png`
- [ ] Replace `/public/apple-touch-icon.png`, `/public/icon-192.png`, `/public/icon-512.png`
- [ ] Replace `/public/og-image.png` (1200×630px)
- [ ] Replace `/public/hero.jpg` and update `HERO_SLIDES` alt text in `lib/site-brand.ts`
- [ ] Optional: drop your logo at `/public/logo-source.png` and run `npm run assets:brand`

## Configuration

- [ ] Fill in all values in `.env.local` (copy from `.env.example`)
- [ ] Create a Supabase project; set `NEXT_PUBLIC_SUPABASE_*` and `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Replace `YOUR_SUPABASE_PROJECT_REF` in `package.json` scripts, then run `npm run supabase:migrate`
- [ ] Create an admin user with `npm run create-admin`
- [ ] Configure Moolre payment keys (`MOOLRE_*`)
- [ ] Configure Resend (`RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_EMAIL`)
- [ ] Set `NEXT_PUBLIC_APP_URL` to your production URL
- [ ] Optional: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, reCAPTCHA keys

## Legal & content

- [ ] Replace `/LICENSE` with your chosen license
- [ ] Review `app/(store)/terms/page.tsx` and `privacy/page.tsx`
- [ ] Update CMS settings in Supabase or via admin when live

## SEO

- [ ] Update `public/robots.txt` sitemap URL
- [ ] Confirm metadata in `app/layout.tsx` and `lib/seo.ts`

## Deployment

- [ ] Set env vars on Vercel/Netlify
- [ ] Connect your Git repo (`YOUR_USERNAME/YOUR_REPO_NAME`)
- [ ] Configure custom domain

## Git remote

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```
