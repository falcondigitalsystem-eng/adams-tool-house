export default function ProductGrid() {
  // Replace with CMS-fetched items
  const items = [
    { id: 1, name: 'Makita Drill Driver', price: 'On Request', href: '#' },
    { id: 2, name: 'Dewalt Angle Grinder', price: 'On Request', href: '#' },
    { id: 3, name: 'Telwin Welder', price: 'On Request', href: '#' },
    { id: 4, name: 'Hioki Multimeter', price: 'On Request', href: '#' },
    { id: 5, name: 'ABAC Air Compressor', price: 'On Request', href: '#' },
    { id: 6, name: 'Safety Helmet', price: 'On Request', href: '#' },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <a key={p.id} href={p.href} className="block border rounded-lg p-6 hover:shadow-md transition">
          <div className="h-40 bg-gray-100 rounded mb-4" />
          <div className="text-lg font-medium mb-1">{p.name}</div>
          <div className="text-sm opacity-80">{p.price}</div>
        </a>
      ))}
    </div>
  );
}
