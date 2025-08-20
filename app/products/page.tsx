// app/products/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Products | Adams Tool House",
  description:
    "Browse industrial tools, welding, safety gear, and more from Adams Tool House.",
};

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <p className="text-slate-600 mb-8">
        Our full product catalog is coming online. In the meantime, explore our
        top categories or contact us for a quote.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-medium">Power Tools</h2>
          <p className="text-sm text-slate-600">
            Drills, saws, grinders, and more.
          </p>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-medium">Welding</h2>
          <p className="text-sm text-slate-600">
            Machines, helmets, electrodes, consumables.
          </p>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-medium">Safety</h2>
          <p className="text-sm text-slate-600">PPE, gloves, helmets, vests.</p>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
