# Customization Checklist

Shoro Ventures branding (name, colours, logo, copy, sample catalog) is applied. Search the codebase for `YOUR_`, `0000000000` and `yourdomain.com` to find what is left.

## Identity

- [x] Name, tagline, brand copy, colours and logo
- [ ] In `lib/site-brand.ts`: phone, WhatsApp number, email, street address, city, social links
- [ ] Replace `yourdomain.com` in `lib/site-brand.ts`, `.env.local`, `package.json` and deployment env
- [ ] Update `package.json` homepage and repository URL

## Content

- [ ] Swap the sample menswear products in `lib/mock-catalog.ts` for real stock and prices (used until Supabase is connected)
- [ ] Replace the sample customer reviews in `lib/site-brand.ts` with real ones
- [ ] Review delivery prices, zones and timeframes in `app/(store)/shipping/page.tsx` and `app/(store)/faqs/page.tsx`
- [ ] Review opening hours in `app/(store)/contact/page.tsx`

## Assets (see `/public/ASSETS_GUIDE.md`)

- [x] Logo, icons, favicon and OG image (`npm run assets:logo`)
- [ ] Replace `/public/hero.jpg` with a real lifestyle photo (currently a navy brand background)
- [ ] Add product photos (via admin once Supabase is connected, or `image` fields in `lib/mock-catalog.ts`)

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
