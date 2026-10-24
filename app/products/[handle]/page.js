import { Suspense } from "react";
import { shopifyFetch } from "@/lib/shopify";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";

const QUERY = `
  query Product($handle: String!) {
    product(handle: $handle) {
      title
      description
      featuredImage { url altText }
      priceRange { minVariantPrice { amount currencyCode } }
    }
  }
`;

async function ProductDetails({ params }) {
  const { handle } = await params;
  const data = await shopifyFetch(QUERY, { handle });
  const p = data.product;
  if (!p) notFound();

  const { amount, currencyCode } = p.priceRange.minVariantPrice;

  return (
    <>
      {p.featuredImage && (
        <img
          src={p.featuredImage.url}
          alt={p.featuredImage.altText || p.title}
          className="my-6 rounded-xl border"
        />
      )}
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <span className="inline-block mt-3 bg-emerald-100 text-emerald-800 font-semibold px-4 py-1 rounded-full">
        {Number(amount).toFixed(2)} {currencyCode}
      </span>
      <p className="mt-4 text-gray-700">{p.description}</p>
    </>
  );
}

export default function ProductPage({ params }) {
  return (
    <SiteShell>
      <main className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-emerald-600 hover:underline">← Back to products</a>
        <Suspense fallback={<p className="my-4">Loading...</p>}>
          <ProductDetails params={params} />
        </Suspense>
      </main>
    </SiteShell>
  );
}