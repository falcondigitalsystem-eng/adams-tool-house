export const revalidate = 60; // ISR every 60s

async function getData() {
  const base = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337';

  const [catsRes, brandsRes] = await Promise.all([
    fetch(`${base}/api/categories?populate=icon&pagination[pageSize]=12`, { next: { revalidate: 60 } }),
    fetch(`${base}/api/brands?populate=logo&pagination[pageSize]=12`, { next: { revalidate: 60 } }),
  ]);

  if (!catsRes.ok || !brandsRes.ok) {
    return { categories: [], brands: [] }; // don’t fail build if Strapi is empty
  }

  const [catsJson, brandsJson] = await Promise.all([catsRes.json(), brandsRes.json()]);
  return {
    categories: catsJson?.data ?? [],
    brands: brandsJson?.data ?? [],
  };
}

export default async function HomePage() {
  const { categories, brands } = await getData();

  return (
    <div className="container-narrow py-10 space-y-16">
      {/* Hero (we’ll replace with slider later) */}
      <section className="rounded-2xl border p-8">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Adams Tool House — Tools & Industrial Supplies in UAE
        </h1>
        <p className="opacity-80 mt-2">
          Power tools, safety products, construction equipment & accessories.
        </p>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Shop by Category</h2>
          <a href="/categories" className="text-sm underline">View all</a>
        </div>
        {categories.length === 0 ? (
          <p className="opacity-70">No categories yet. Add some in Strapi & publish.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((c) => (
              <a key={c.id} href={`/categories/${c.attributes.slug}`} className="border rounded-xl p-4 hover:shadow">
                <div className="text-sm font-medium">{c.attributes.name}</div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Brands */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Brands</h2>
          <a href="/brands" className="text-sm underline">View all</a>
        </div>
        {brands.length === 0 ? (
          <p className="opacity-70">No brands yet. Add some in Strapi & publish.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {brands.map((b) => (
              <a key={b.id} href={`/brands/${b.attributes.slug}`} className="border rounded-xl p-4 hover:shadow flex items-center justify-center">
                <span className="text-sm font-medium">{b.attributes.name}</span>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
