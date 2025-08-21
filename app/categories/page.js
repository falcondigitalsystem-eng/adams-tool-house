// app/categories/page.js
export const revalidate = 60;

const CMS = process.env.NEXT_PUBLIC_CMS_URL;

async function getCategories() {
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

  const url = `${CMS}/api/categories?fields[0]=name&sort=name&pagination[pageSize]=100`;
  const { data } = await safeFetch(url);

  let names = (data || []).map((c) => c?.attributes?.name).filter(Boolean);

  if (!names.length) names = ["Power Tools", "Welding", "Safety"];

  return names;
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container-narrow py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Categories</h1>
      <p className="opacity-80">
        Browse our main categories. The full catalog is coming online soon.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((name) => (
          <a
            key={name}
            href="/products"
            className="block rounded-xl border p-6 hover:shadow-sm transition"
          >
            <div className="font-medium">{name}</div>
            <div className="text-sm opacity-70 mt-1">See {name.toLowerCase()}.</div>
          </a>
        ))}
      </div>

      <div className="pt-6">
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </div>
  );
}
