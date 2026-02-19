# Aura Bliss Trading Co — Marketing Website

Next.js 16 marketing website (JavaScript + JSX) for **Aura Bliss Trading Co**, authorised distributor of:

- **Finolex**, **Torrent** and **APAR** wires  
- **Legrand** switches and MCBs  
- **L&T** switches  

## Stack

- **Next.js 16** (App Router)
- **JavaScript** — all components use `.jsx`, config uses `.js` (no TypeScript)
- **Tailwind CSS**
- **React 19**

## Features

- **SEO**: Meta tags, Open Graph, Twitter cards, JSON-LD (Organization), sitemap, `robots.txt`
- **Pages**: Home, About Us, Products & Brands, Contact
- **Responsive**: Mobile-first layout with Tailwind CSS
- **Accessible**: Semantic HTML, ARIA, focus states

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://aurablisstrading.com`) for correct canonical URLs and sitemap.

## Contact & owner details

**No public listing was found for "Aura Bliss Trading Co"** in search results. All owner and contact details are driven from **`src/data/contact.js`**. Update that file with:

- **Owner:** `title` (e.g. Proprietor) and `name`
- **Address:** `line1`, `line2`, `city`, `state`, `pin`
- **Phone:** `primary` (and optional `secondary`)
- **Email:** already set to `info@aurablisstrading.com`
- **Business hours:** `weekdays`, `saturday`, `sunday`

The Contact page, footer and JSON-LD schema all use this data. Replace the `[placeholder]` values with your real details.

## Build

```bash
npm run build
npm start
```
