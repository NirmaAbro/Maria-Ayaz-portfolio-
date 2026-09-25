/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens -- see README "Design notes" for rationale.
        ink: "#1B2A41",       // deep navy-ink -- headings, primary text
        paper: "#EFEDE4",     // warm bone paper -- page background
        panel: "#F7F5EE",     // slightly lighter panel background
        teal: "#3A6B63",      // muted research-teal -- primary accent
        tealdark: "#2A4E48",
        gold: "#B08A2E",      // ochre -- used sparingly (nods to "Gold Medalist")
        charcoal: "#2B2B2B",
        line: "#DAD4C4",      // hairline borders
        muted: "#6B6459",     // secondary/meta text
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(27,42,65,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
