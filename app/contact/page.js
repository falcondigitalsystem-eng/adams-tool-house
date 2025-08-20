export default function Contact() {
  return (
    <div className="container-narrow py-10">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form className="grid gap-4 max-w-xl" method="post" action="/api/enquiry">
        <input className="border rounded px-3 py-2" name="name" placeholder="Your name" required />
        <input className="border rounded px-3 py-2" name="email" placeholder="Email" type="email" required />
        <input className="border rounded px-3 py-2" name="phone" placeholder="Phone" />
        <textarea className="border rounded px-3 py-2" name="message" placeholder="Your message" rows="5" required />
        <button className="btn-primary" type="submit">Send Enquiry</button>
      </form>
    </div>
  );
}
