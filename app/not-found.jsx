import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist. Try one of these:
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Back to Home
        </Link>
        <Link href="/products" className="rounded-lg border px-4 py-2 hover:bg-gray-50">
          Browse Products
        </Link>
        <Link href="/contact" className="rounded-lg border px-4 py-2 hover:bg-gray-50">
          Contact Us
        </Link>
      </div>
    </main>
  );
}
