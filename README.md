# Nuranova Solutions Website

Official portfolio and sales website for Nuranova Solutions, a Sri Lankan software and web-development company.

## Technology stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form and Zod
- Lucide React
- Vercel Analytics and Speed Insights
- Resend-ready contact email route

## Installation

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and fill values:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PHONE_NUMBER`

If `RESEND_API_KEY` is not configured, the API route logs validated form payloads only in development.

## Logo placement

Logo files are stored in `public/brand/`:

- `nuranova-logo.png`
- `nuranova-mark.png`

## Editing packages

Business packages: `src/data/business-packages.ts`

Hospitality packages: `src/data/hospitality-packages.ts`

## Adding portfolio projects

Add project objects in `src/data/projects.ts`. Concept projects must keep `concept: true` until they are real client work.

## Contact email

Configure Resend with `RESEND_API_KEY` and set `CONTACT_TO_EMAIL=nuranovasolutions@gmail.com`.

## Deploying to Vercel

1. Push the repository to GitHub or import directly into Vercel.
2. Add the environment variables in Vercel Project Settings.
3. Deploy with the default Next.js settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

## Connecting a custom domain

Add the domain in Vercel Domains, update DNS records as instructed by Vercel, then update `NEXT_PUBLIC_SITE_URL`.

## Testing checklist

- Test at 320, 360, 390, 430, 768, 1024, 1280 and 1440 px widths.
- Confirm no horizontal overflow.
- Confirm header, mobile menu and sticky mobile action bar work.
- Confirm phone, WhatsApp and email links.
- Confirm quote form validation and server response.
- Run `npm run lint`.
- Run `npm run build`.
