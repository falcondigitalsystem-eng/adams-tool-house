import Link from 'next/link';

const WHATSAPP = 'https://wa.me/971500000000'; // put your real WhatsApp

export default function HomePage() {
  return (
    <main>
      {/* ... hero container ... */}
      <div className="flex gap-3">
        <Link
          href="/products"
          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Browse Products
        </Link>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-gray-50"
        >
          WhatsApp
        </a>
      </div>
      {/* ... rest of page ... */}
    </main>
  );
}
