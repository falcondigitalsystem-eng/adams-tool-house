export const runtime = 'edge';

export async function POST(req) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());
  // TODO: Post to Strapi collection type `enquiries`, or send email via provider.
  console.log('Enquiry:', payload);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
