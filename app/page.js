import { shopifyFetch } from "@/lib/shopify";
import SiteShell from "@/components/SiteShell";

const QUERY = `{
  products(first: 12) {
    edges { node {
      id title handle
      featuredImage { url altText }
      priceRange { minVariantPrice { amount currencyCode } }
    } }
  }
}`;

export default async function Home() {
  const data = await shopifyFetch(QUERY);
  const products = data.products.edges.map((e) => e.node);

  return (
    <SiteShell hero>
      <main id="products" className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Featured products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => {
            const { amount, currencyCode } = p.priceRange.minVariantPrice;
            return (
              <a
                key={p.id}
                href={`/products/${p.handle}`}
                className="group border border-gray-200 rounded-xl overflow-hidden bg-white transition hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  {p.featuredImage && (
                    <img
                      src={p.featuredImage.url}
                      alt={p.featuredImage.altText || p.title}
                      className="w-full h-full object-contain transition group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="font-semibold leading-tight">{p.title}</h2>
                  <span className="inline-block mt-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {Number(amount).toFixed(2)} {currencyCode}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </SiteShell>
  );
}