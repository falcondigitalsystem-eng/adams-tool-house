// app/test/page.jsx
export const dynamic = 'force-dynamic';   // don't prerender at build
export const revalidate = 0;              // no static cache

const API = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL;

async function getJSON(path) {
  if (!API) throw new Error('Missing NEXT_PUBLIC_API_URL (or NEXT_PUBLIC_STRAPI_URL)');
  const url = `${API}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

export default async function TestPage() {
  try {
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
  } catch (e) {
    return (
      <main style={{padding: 24, fontFamily: 'sans-serif'}}>
        <h1 style={{fontSize: 20, fontWeight: 700, marginBottom: 12}}>Test error</h1>
        <p><strong>API:</strong> {API || '(not set)'}</p>
        <pre style={{background:'#fef3c7', padding:12, borderRadius:8, whiteSpace:'pre-wrap'}}>
{String(e?.message || e)}
        </pre>
      </main>
    );
  }
}
