# Storefront Template

> Next.js 15 + Supabase e-commerce storefront with an admin dashboard, Moolre payments (Mobile Money / card), Resend email, and PWA support. Ships with a mock catalog so you can preview it without a database.

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in .env.local, then:
npm run dev
```

Open <http://localhost:3000>. Leave the Supabase variables blank to browse the storefront with placeholder products.

## Make it yours

Work through [`CUSTOMIZE.md`](./CUSTOMIZE.md). The short version:

1. Edit `lib/site-brand.ts`, replace every `YOUR_*` placeholder (name, contact details, copy, reviews, categories).
2. Replace the placeholder images in `/public` (see `public/ASSETS_GUIDE.md`).
3. Adjust the palette in `lib/site-brand.ts`, `app/globals.css` and `tailwind.config.js`.
4. Swap the sample products in `lib/mock-catalog.ts`, or connect Supabase and add real products in `/admin`.

## Environment Variables

Copy `.env.example` to `.env.local` and set your Supabase, Moolre, Resend, and app URL values.

## Useful scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run assets:placeholder` | Regenerate neutral placeholder logo, icons, OG image and hero |
| `npm run assets:brand` | Build logo/icon/OG variants from `public/logo-source.png` |
| `npm run create-admin` | Create an admin user in Supabase |
| `npm run supabase:migrate` | Link your Supabase project and push migrations |

## Deployment

Set all environment variables on your host (e.g. Vercel), then:

```bash
npm run build
```

## License

See LICENSE.
