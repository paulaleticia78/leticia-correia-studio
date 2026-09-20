import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta final: bege + nude + rosé + champagne/dourado.
        // Valores exatos pedidos: bg principal #F7F0EA, bg secundário #EFE1D8,
        // off-white #FCF9F6, rosé #C99586, rosé claro #E7CFC8,
        // dourado/champagne #B9976B, texto principal #4A342D, texto secundário #765F56.
        cream: {
          50: "#fcf9f6", // off-white — contraste pontual
          100: "#f7f0ea", // bege principal (fundo geral)
          200: "#efe1d8", // bege secundário, entre secções
        },
        sand: {
          300: "#efe1d8", // bege secundário → champagne
          400: "#dcc4a3", // champagne intermédio
          500: "#b9976b", // dourado/champagne
        },
        clay: {
          400: "#e7cfc8", // rosé claro
          500: "#c99586", // rosé
          600: "#a97867", // rosé profundo — texto/detalhe de apoio
        },
        ink: {
          950: "#2e211b",
          900: "#4a342d", // texto principal — contraste forte
          800: "#5a4239",
          700: "#6b4f45",
          600: "#765f56", // texto secundário
        },
        rose: {
          200: "#e7cfc8",
          400: "#c99586",
          600: "#a97867",
        },
        gold: {
          300: "#e3cbae",
          500: "#b9976b",
          600: "#9c7e55",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(28, 24, 21, 0.25)",
        card: "0 12px 32px -16px rgba(28, 24, 21, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
