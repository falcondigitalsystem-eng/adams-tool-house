// app/page.js
import Link from "next/link";
import { getHomeData } from "../lib/api";

export const revalidate = 300; // ISR for the whole page

export default async function Home() {
  const { categories, brands } = await getHomeData();

  return (
    <>
      {/* HERO */}
      <section className="border-b">
        <div className="container-narrow py-14 md:py-20">
          <div className="bg-primary/5 rounded-xl p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Industrial Tools & Machinery
            </h1>
            <p className="text-lg opacity-80 mb-6">
              Power tools, compressors, welding, safety & more.
            </p>
            <div className="flex gap-3">
              <Link href="/products" className="btn-primary">Browse Products</Link>
              <a
                href="https://wa.me/971558763747"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CATEGORIES (from Strapi, with fallback) */}
      <section className="container-narrow py-12 md:py-16">
        <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {(categories.length
            ? categories
            : [
                { id: "fallback-1", attributes: { name: "Power Tools", slug: "power-tools", description: "Drills, saws, grinders, and more." } },
                { id: "fallback-2", attributes: { name: "Welding", slug: "welding", description: "Welders, helmets, electrodes, consumables." } },
                { id: "fallback-3", attributes: { name: "Safety", slug: "safety", description: "PPE, gloves, helmets, vests." } },
              ]
          ).map((c) => (
            <Link
              key={c.id}
              href={`/categories/${c.attributes.slug}`}
              className="block rounded-xl border p-6 hover:shadow-sm transition"
            >
              <div className="font-semibold mb-1">{c.attributes.name}</div>
              <div className="opacity-70 text-sm">{c.attributes.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* BRANDS (from Strapi, with fallback) */}
      <section className="container-narrow pb-16">
        <h2 className="text-2xl font-semibold mb-6">Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {(brands.length
            ? brands
            : [
                { id: "brand-1", attributes: { name: "Bosch" } },
                { id: "brand-2", attributes: { name: "Makita" } },
                { id: "brand-3", attributes: { name: "Dewalt" } },
                { id: "brand-4", attributes: { name: "3M" } },
              ]
          ).map((b) => (
            <div
              key={b.id}
              className="rounded-lg border p-4 text-center bg-white"
              title={b.attributes.name}
            >
              <span className="font-medium">{b.attributes.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
