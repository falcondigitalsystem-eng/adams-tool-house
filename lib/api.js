const STRAPI_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337';

export async function fetchFromCMS(path, { nextOptions } = {}) {
  const res = await fetch(`${STRAPI_URL}${path}`, { cache: 'no-store', ...nextOptions });
  if (!res.ok) throw new Error(`CMS error: ${res.status}`);
  return res.json();
}
