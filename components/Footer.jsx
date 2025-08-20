export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-3">
        <section>
          <h3 className="font-semibold mb-2">Adams Tool House</h3>
          <p className="text-sm text-gray-600">
            Industrial tools & machinery supplies.
            <br />
            Al Quoz, Dubai, UAE
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Phone: +971 50 000 0000<br />
            Email: <a className="underline" href="mailto:sales@example.com">sales@example.com</a>
          </p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="/products">Products</a></li>
            <li><a className="hover:underline" href="/brands">Brands</a></li>
            <li><a className="hover:underline" href="/blog">Blog</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Business Hours</h3>
          <p className="text-sm text-gray-600">
            Mon–Sat: 9:00 – 18:00<br />
            Sunday: Closed
          </p>
        </section>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Adams Tool House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
