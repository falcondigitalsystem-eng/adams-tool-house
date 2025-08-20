export default function Categories() {
  return (
    <div className="container-narrow py-10">
      <h1 className="text-3xl font-semibold mb-6">All Categories</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace with CMS-driven categories */}
        {['Power Tools','Welding','Safety','Air Compressors','Generators','Accessories'].map((c) => (
          <a key={c} href={`/categories/${c.toLowerCase().replace(/\s+/g,'-')}`} className="block border rounded-lg p-6 hover:shadow-md transition">
            <div className="text-lg font-medium mb-2">{c}</div>
            <p className="opacity-80 text-sm">Browse {c} products</p>
          </a>
        ))}
      </div>
    </div>
  );
}
