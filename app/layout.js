import '../styles/globals.css';

export const metadata = {
  title: 'Adams Tool House | Tools & Industrial Supplies in UAE',
  description: 'CMS-driven catalog site for Adams Tool House.',
  openGraph: {
    type: 'website',
    siteName: 'Adams Tool House',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="container-narrow py-4 flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <img src="/logo.svg" alt="Adams Tool House" className="h-8 w-auto" />
              </a>
              <nav className="flex gap-6 text-sm">
                <a href="/categories" className="hover:underline">Products</a>
                <a href="/brands" className="hover:underline">Brands</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/contact" className="btn-primary">Contact</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t mt-16">
            <div className="container-narrow py-10 grid md:grid-cols-3 gap-10 text-sm">
              <div>
                <div className="font-semibold mb-2">Adams Tool House</div>
                <p className="opacity-80">Power tools, construction equipment, safety products & accessories.</p>
              </div>
              <div>
                <div className="font-semibold mb-2">Quick Links</div>
                <ul className="space-y-2">
                  <li><a href="/categories" className="hover:underline">Categories</a></li>
                  <li><a href="/brands" className="hover:underline">Brands</a></li>
                  <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Contact</div>
                <p className="opacity-80">
                  Dubai, UAE<br />
                  Email: info@adamstoolhouse.com<br />
                  Phone: +971 55 876 3747
                </p>
              </div>
            </div>
            <div className="text-center text-xs py-6 opacity-70">
              © {new Date().getFullYear()} Adams Tool House
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
