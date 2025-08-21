// lib/api.js
const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || '';
export const cmsBase = CMS_URL.replace(/\/$/, ''); // trim trailing slash

async function safeFetchJSON(path, init = {}) {
  try {
    if (!cmsBase) return null;
    const url = `${cmsBase}${path.startsWith('/') ? path : `/${path}`}`;
    const res = await fetch(url, {
      ...init,
      // Cache & ISR so we don't hit CMS on every request and builds don't fail
      next: { revalidate: 300 },
      cache: 'force-cache',
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null; // never blow up builds
  }
}

export async function getHomeData() {
  // Adjust the query params to match your Strapi collections
  const [categories, brands] = await Promise.all([
    safeFetchJSON('/api/categories?pagination[pageSize]=6&sort[0]=name:asc'),
    safeFetchJSON('/api/brands?pagination[pageSize]=8&sort[0]=name:asc'),
  ]);

  return {
    categories: categories?.data ?? [],
    brands: brands?.data ?? [],
  };
}
