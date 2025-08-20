import HeroSlider from "../components/HeroSlider";
import ProductGrid from "../components/ProductGrid";

export default function Page() {
  return (
    <div>
      <section className="container-narrow py-10">
        <HeroSlider />
      </section>
      <section className="container-narrow py-10">
        <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
        {/* Replace with dynamic categories from CMS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/categories/power-tools" className="block border rounded-lg p-6 hover:shadow-md transition">
            <div className="text-lg font-medium mb-2">Power Tools</div>
            <p className="opacity-80 text-sm">Drills, Saws, Grinders, and more.</p>
          </a>
          <a href="/categories/welding" className="block border rounded-lg p-6 hover:shadow-md transition">
            <div className="text-lg font-medium mb-2">Welding</div>
            <p className="opacity-80 text-sm">Welders, helmets, electrodes, consumables.</p>
          </a>
          <a href="/categories/safety" className="block border rounded-lg p-6 hover:shadow-md transition">
            <div className="text-lg font-medium mb-2">Safety</div>
            <p className="opacity-80 text-sm">PPE, gloves, helmets, vests.</p>
          </a>
        </div>
      </section>
      <section className="container-narrow py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <ProductGrid />
      </section>
    </div>
  );
}
