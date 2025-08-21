// app/products/page.js
export const revalidate = 60; // refresh every 60s

const CMS = process.env.NEXT_PUBLIC_CMS_URL;

async function getData() {
  const safeFetch = async (url) => {
    try {
      if (!url || url.startsWith("undefined")) return { data: [] };
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) return { data: [] };
      return res.json();
    } catch {
      return { data: [] };
    }
  };

  const catsURL = `${CMS}/api/categories?fields[0]=name&sort=name&pagination[pageSize]=100`;
  const brandsURL = `${CMS}/api/brands?fields[0]=name&sort=name&pagination[pageSize]=100`;

  const [{ data: cats }, { data: brands }] = await Promise.all([
    safeFetch(catsURL),
    safeFetch(brandsURL),
  ]);

  let categoryNames =
    (cats || [])
      .map((c) => c?.attributes?.name)
      .filter(Boolean);

  let brandNames =
    (brands || [])
      .map((b) => b?.attributes?.name)
      .filter(Boolean);

  // HARD fallbacks so the page never looks empty
  if (!categoryNames?.length) categoryNames = ["Power Tools", "Welding", "Safety"];
  if (!brandNames?.length) brandNames = ["Bosch", "Makita", "Dewalt", "3M"];

  return { categoryNames, brandNames };
}

export default async function ProductsPage() {
  const { categoryNames, brandNames } = await getData();

  return (
    <div className="container-narrow py-12 space-y-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <p className="opacity-80">
        Our full product catalog is coming online. Explore top categories or contact us for a quote.
      </p>

      {/* Categories */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Top Categories</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {categoryNames.map((name) => (
            <a
              key={name}
              href="/categories"
              className="block rounded-xl border p-6 hover:shadow-sm transition"
            >
              <div className="font-medium">{name}</div>
              <div className="text-sm opacity-70 mt-1">
                Browse {name.toLowerCase()}.
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Brands</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {brandNames.map((name) => (
            <a
              key={name}
              href="/brands"
              className="block rounded-xl border p-6 text-center hover:shadow-sm transition"
            >
              <div className="font-medium">{name}</div>
            </a>
          ))}
        </div>
      </section>

      <div className="pt-6">
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </div>
  );
}
