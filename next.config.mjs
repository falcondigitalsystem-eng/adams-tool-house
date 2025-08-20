/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Keep this if you like
  experimental: { optimizeCss: true },

  // IMPORTANT: Do NOT set `output: 'export'` — we want SSR on Vercel.
  images: {
    remotePatterns: [
      // Strapi uploads (adjust if your Render URL changes)
      { protocol: 'https', hostname: 'adams-cms.onrender.com', pathname: '/uploads/**' },
      // Cloudinary (optional if you later use it)
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
