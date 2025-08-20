/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Replace these with Adam's Tool House brand hex codes when available
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          text: "var(--brand-text)",
          bg: "var(--brand-bg)"
        }
      },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: []
};
