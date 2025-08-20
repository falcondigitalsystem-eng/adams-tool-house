# Adams Tool House — Headless Starter (Next.js + Tailwind)

This is a production-grade starter for Adams Tool House, modeled on a catalog-first site (similar to Adex).

## Quick Start

```bash
cd frontend
npm i
npm run dev
```

Then open http://localhost:3000

## Deploy (Vercel)

1. Push this `frontend` folder to a new GitHub repo
2. Import the repo into Vercel
3. Set Environment Variables (Vercel):
   - `SITE_URL` -> your domain (e.g., https://adamstoolhouse.com)
   - `NEXT_PUBLIC_CMS_URL` -> Strapi URL (e.g., https://cms.adams.example)
4. Deploy
5. Add your custom domain in Vercel; enable HTTPS

## Theming

Edit `styles/globals.css` brand variables:

```css
:root {
  --brand-primary: #0b5fa5; /* replace with exact colors from adamstoolhouse.com */
  --brand-secondary: #f29f05;
  --brand-accent: #0a2540;
  --brand-text: #0f172a;
  --brand-bg: #ffffff;
}
```

## Slider

- Slider uses CSS scroll-snap for stability on any host.
- Replace slide images/text inside `components/HeroSlider.js`.

## SEO

- `next-sitemap` will generate `/sitemap.xml` and `/robots.txt` at build.
- `DefaultSeo` in `app/layout.js` sets OpenGraph & Twitter tags.
- Add JSON-LD per page if needed.

## Security

- Strong security headers in `middleware.js` (CSP, XFO, XCTO, Permissions-Policy, Referrer-Policy).
- Put Cloudflare in front for WAF/DDoS.
- Use HTTPS to enable HSTS at the edge (Cloudflare).

## Connect to Strapi (CMS)

1. Provision Strapi on a VPS/Render/Railway with Postgres.
2. Configure CORS in Strapi to allow your Vercel domain.
3. Create collections:
   - Category: name (UID), description, banner image, sort
   - Brand: name (UID), logo, description, website
   - Product: title (UID), gallery, specs (key/value repeatable), brand (rel), category (rel), pdf datasheet, featured (bool)
   - Blog Post: title, cover, content (Rich Text)
   - Enquiry: name, email, phone, message
   - Site Settings: logo, phone, whatsapp, address, social links
4. In Next.js, set `NEXT_PUBLIC_CMS_URL` to your Strapi URL.

## API route

- `app/api/enquiry/route.js` is a placeholder. Change to persist `enquiries` in Strapi or call your mail provider.

## Core Web Vitals
- Next/Image + caching on Vercel
- Use modern formats (WebP/AVIF) and reasonable sizes
