export const metadata = {
  title: 'Brands — Adams Tool House',
  description: 'Industrial tools & machinery brands we carry.',
};

export default function BrandsPage() {
  const brands = [
    'Bosch', 'Makita', 'DeWalt', 'Hilti', 'Lincoln Electric', '3M',
  ];

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Brands</h1>
      <p className="text-gray-600 mb-8">
        Our full brand catalog is coming online. For availability and quotes, please contact us.
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {brands.map((b) => (
          <li key={b} className="rounded-xl border p-4">{b}</li>
        ))}
      </ul>
    </main>
  );
}
