export async function shopifyFetch(query, variables = {}) {
  const res = await fetch(
    `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2026-07/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    }
  );
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}