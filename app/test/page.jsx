// app/test/page.jsx
const API = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL;

async function getJSON(path) {
  const url = `${API}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    // cache SSR for a minute so Vercel doesn't re-fetch on every hit
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

export default async function TestPage() {
  if (!API) {
    return (
      <main style={{padding: 24, fontFamily: 'sans-serif'}}>
        <h1>Missing API base URL</h1>
        <p>Set <code>NEXT_PUBLIC_API_URL</code> in Vercel → Project Settings → Environment Variables.</p>
      </main>
    );
  }

  const [cats, brands, prods] = await Promise.all([
    getJSON('/api/categories?populate=image'),
    getJSON('/api/brands?populate=logo'),
    getJSON('/api/products?populate[images]=*&populate[brand]=*&populate[category]=*'),
  ]);

  return (
    <main style={{padding: 24, fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>Strapi Connection Test</h1>
      <p style={{marginBottom: 24}}>API: <code>{API}</code></p>

      <section style={{marginBottom: 24}}>
        <h2 style={{fontWeight: 600}}>Categories</h2>
        <pre style={{background:'#f4f4f5', padding:12, borderRadius:8}}>
{JSON.stringify(cats?.data?.map(c => c?.attributes?.name), null, 2)}
        </pre>
      </section>

      <section style={{marginBottom: 24}}>
        <h2 style={{fontWeight: 600}}>Brands</h2>
        <pre style={{background:'#f4f4f5', padding:12, borderRadius:8}}>
{JSON.stringify(brands?.data?.map(b => b?.attributes?.name), null, 2)}
        </pre>
      </section>

      <section>
        <h2 style={{fontWeight: 600}}>Products (name & price)</h2>
        <pre style={{background:'#f4f4f5', padding:12, borderRadius:8}}>
{JSON.stringify(prods?.data?.map(p => ({
  name: p?.attributes?.name,
  price: p?.attributes?.price
})), null, 2)}
        </pre>
      </section>
    </main>
  );
}
