export default function Brands() {
  const brands = ['Makita','Dewalt','Telwin','Hioki','Unior','ABAC','Bosch','Milwaukee'];
  return (
    <div className="container-narrow py-10">
      <h1 className="text-3xl font-semibold mb-6">Brands</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((b) => (
          <div key={b} className="border rounded-lg p-6 hover:shadow-md transition">
            <div className="text-lg font-medium mb-2">{b}</div>
            <p className="opacity-80 text-sm">Explore {b} products</p>
          </div>
        ))}
      </div>
    </div>
  );
}
