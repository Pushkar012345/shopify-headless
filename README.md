# Pushkar Store – Headless Shopify Storefront

A headless e-commerce storefront built with **Next.js** that pulls live products from a **Shopify** store using the **Storefront API (GraphQL)**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-10b981?style=for-the-badge)](https://shopify-headless-lemon-psi.vercel.app/)

## Features

- Product listing page with live data from Shopify
- Dynamic product detail pages (`/products/[handle]`)
- Responsive layout with header, hero banner and footer
- Server-side data fetching with 60s revalidation
- Environment-based config (no secrets in the repo)

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Data | Shopify Storefront API (GraphQL) |
| Hosting | Vercel |

## Getting Started

```bash
git clone https://github.com/Pushkar012345/shopify-headless.git
cd shopify-headless
npm install
```

Create a `.env.local` file:

```
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Project Structure

```
app/
  page.js                  # Home: product grid
  products/[handle]/page.js # Product detail page
components/
  SiteShell.js             # Shared header, hero and footer
lib/
  shopify.js               # Storefront API fetch helper
```

## Related Work

Also built a custom Shopify theme (Liquid) with merchant-editable sections, developed with the Shopify CLI.

## Author

**Pushkar Pawar**
[GitHub](https://github.com/Pushkar012345) · [LinkedIn](https://www.linkedin.com/in/pushkarpawar314/)