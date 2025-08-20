export const metadata = {
  title: 'Contact — Adams Tool House',
  description:
    'Reach Adams Tool House for product inquiries, quotes, and support.',
};

const WHATSAPP = 'https://wa.me/15551234567'; // ← put your WhatsApp number here
const EMAIL = 'sales@example.com';            // ← put your email here
const PHONE = '+1 (555) 123-4567';            // ← put your phone here

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-3">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Tell us what you need—part numbers, brands, or a quick quote—and we’ll
        get back to you fast.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact cards */}
        <section className="space-y-4">
          <div className="rounded-xl border p-5">
            <div className="font-semibold">Phone</div>
            <div className="text-gray-700">{PHONE}</div>
          </div>

          <div className="rounded-xl border p-5">
            <div className="font-semibold">Email</div>
            <a href={`mailto:${EMAIL}`} className="text-blue-600 underline">
              {EMAIL}
            </a>
          </div>

          <div className="rounded-xl border p-5">
            <div className="font-semibold">WhatsApp</div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-block mt-1 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Simple form (mailto) */}
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>
          <form
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                placeholder="What products/brands do you need?"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Send
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            Prefer direct email? Write to <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
