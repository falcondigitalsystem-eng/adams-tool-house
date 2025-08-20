export const metadata = {
  title: 'Brands — Adams Tool House',
  description: 'Popular tool, welding, and safety brands we supply.',
};

const brands = [
  { name: 'Bosch', desc: 'Power tools & accessories' },
  { name: 'Makita', desc: 'Cordless & corded tools' },
  { name: 'DeWalt', desc: 'Industrial-grade tools' },
  { name: 'HiKOKI (Hitachi)', desc: 'Professional power tools' },
  { name: 'ESAB', desc: 'Welding wires & machines' },
  { name: 'Miller', desc: 'Welders and equipment' },
  { name: '3M', desc: 'Safety, masks, abrasives' },
  { name: 'Stanley', desc: 'Hand tools & storage' },
];

export default function BrandsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-3">Brands</h1>
      <p className="text-gray-600 mb-8">
        We source and supply genuine products from leading global brands.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <div
            key={b.name}
            className="rounded-xl border p-5 hover:shadow-sm transition"
          >
            <div className="text-lg font-semibold">{b.name}</div>
            <div className="text-gray-600 mt-1">{b.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border p-6">
        <h2 className="text-xl font-semibold mb-2">Don’t see your brand?</h2>
        <p className="text-gray-600">
          We can source most major industrial brands.{' '}
          <a href="/contact" className="text-blue-600 underline">
            Contact us
          </a>{' '}
          for availability and quotes.
        </p>
      </div>
    </main>
  );
}
