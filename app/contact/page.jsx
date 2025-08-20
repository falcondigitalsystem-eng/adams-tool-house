export const metadata = {
  title: 'Contact — Adams Tool House',
  description: 'Get in touch for quotes, product availability, and support.',
};

const EMAIL = 'sales@example.com';        // <-- change to your real email
const WHATSAPP = 'https://wa.me/971500000000'; // <-- change to your real WhatsApp link

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>

      <p className="text-gray-600 mb-8">
        Reach out for quotes, availability, or technical questions. We’ll get back to you fast.
      </p>

      <div className="grid gap-6">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center rounded-lg border px-5 py-3 hover:bg-gray-50"
        >
          Email us: {EMAIL}
        </a>

        <a
          href={WHATSAPP}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border px-5 py-3 hover:bg-gray-50"
        >
          Chat on WhatsApp
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Office</h2>
        <p className="text-gray-600">
          Adams Tool House<br />
          Industrial Area, Dubai<br />
          Open: Sun–Thu, 9:00 – 18:00
        </p>
      </section>
    </main>
  );
}

