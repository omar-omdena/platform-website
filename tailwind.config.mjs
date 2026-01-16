const config = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm)"],
      },
      colors: {
        /* =========================
           Brand – Umaku
        ========================= */

        primary: {
          DEFAULT: "#3559E4", // brand anchor
          soft: "#5F7FF0", // hover / focus / subtle UI
          accent: "#9BB2FF", // highlights, AI signals
        },

        secondary: {
          DEFAULT: "#FE8275",
          soft: "#FF9F8D", // hover / focus / subtle UI
          accent: "#FFC2B7", // highlights, AI signals
        },

        success: {
          DEFAULT: "#4BAE4F",
        },

        /* =========================
             Backgrounds
        ========================= */

        background: {
          soft: "#FFFFFF", // light sections
          muted: "#F0F3FF", // alternating sections
        },

        /* =========================
            Text
        ========================= */

        text: {
          primary: "#000000", // main headings
          secondary: "#3A3F4A", // body text
          muted: "#6B7280", // helper text
        },

        /* =========================
            Borders & Dividers
        ========================= */

        border: {
          subtle: "#E3E8F5",
          muted: "#C9D2EE",
        },
      },
    },
  },
  plugins: [],
};

export default config;
