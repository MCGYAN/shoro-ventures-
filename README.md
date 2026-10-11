# Shoro Ventures

> Style That Speaks. Stylish shoes and clothing for men who value quality, comfort and a good appearance.

Built with Next.js 15 + Supabase, with an admin dashboard, Moolre payments (Mobile Money / card), Resend email and PWA support.

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in .env.local, then:
npm run dev
```

Open <http://localhost:3000>. Leave the Supabase variables blank to browse the storefront with the sample menswear catalog in `lib/mock-catalog.ts`.

## Brand

Identity and site copy live in `lib/site-brand.ts`.

| Colour | Hex |
|--------|-----|
| Navy Blue | `#142B4A` |
| Gold | `#D4AF37` |
| White | `#FFFFFF` |
| Light Grey | `#F3F5F7` |

The palette is mapped onto the existing Tailwind tokens in `tailwind.config.js` and `app/globals.css` (`brand-plum` = navy, `brand-gold` = gold, `brand-cream` = light grey).

The master logo is `public/logo-source.png`. `npm run assets:logo` (`scripts/generate-logo-assets.mjs`) recolours it into the navy/gold stacked logo (`logo.png`), a horizontal header lockup (`logo-header.png`), a white/gold footer logo (`logo-footer.png`), the monogram (`logo-mark.png`), app icons, favicon, OG image and hero background.

## Still to fill in

See [`CUSTOMIZE.md`](./CUSTOMIZE.md). Outstanding items: phone, WhatsApp, email, street address, city, social links, domain, product photos and a hero photo.

## Useful scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run assets:logo` | Regenerate logo variants, icons, OG image and hero background from `public/logo-source.png` |
| `npm run create-admin` | Create an admin user in Supabase |
| `npm run supabase:migrate` | Link your Supabase project and push migrations |

## Deployment

Set all environment variables on your host (e.g. Vercel), then:

```bash
npm run build
```

## License

See LICENSE.
