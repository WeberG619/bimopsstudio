/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional color palette
        // 2026-10 brand pass: the logo's teal #4CBEC4 and navy #1C2E52 replace the old amber / bright blue /
        // purple accents on every page (previous config: Website_Content/tailwind.config.js.before-2026-10-04)
        "deep-navy": "#0B1220",
        "electric-blue": "#4CBEC4",
        "accent-blue": "#2F9DA4",
        "lime-accent": "#4CBEC4",
        amber: {50:"#EEF9FA",100:"#D5F0F2",200:"#ABE1E5",300:"#81D2D8",400:"#62C6CD",500:"#4CBEC4",600:"#2F9DA4",700:"#237F85",800:"#1E5D61",900:"#143E41",950:"#0C2628"}, orange: {50:"#EEF9FA",100:"#D5F0F2",200:"#ABE1E5",300:"#81D2D8",400:"#62C6CD",500:"#4CBEC4",600:"#2F9DA4",700:"#237F85",800:"#1E5D61",900:"#143E41",950:"#0C2628"}, yellow: {50:"#EEF9FA",100:"#D5F0F2",200:"#ABE1E5",300:"#81D2D8",400:"#62C6CD",500:"#4CBEC4",600:"#2F9DA4",700:"#237F85",800:"#1E5D61",900:"#143E41",950:"#0C2628"}, blue: {50:"#EEF9FA",100:"#D5F0F2",200:"#ABE1E5",300:"#81D2D8",400:"#62C6CD",500:"#4CBEC4",600:"#2F9DA4",700:"#237F85",800:"#1E5D61",900:"#143E41",950:"#0C2628"}, sky: {50:"#EEF9FA",100:"#D5F0F2",200:"#ABE1E5",300:"#81D2D8",400:"#62C6CD",500:"#4CBEC4",600:"#2F9DA4",700:"#237F85",800:"#1E5D61",900:"#143E41",950:"#0C2628"}, cyan: {50:"#EEF9FA",100:"#D5F0F2",200:"#ABE1E5",300:"#81D2D8",400:"#62C6CD",500:"#4CBEC4",600:"#2F9DA4",700:"#237F85",800:"#1E5D61",900:"#143E41",950:"#0C2628"},
        indigo: {50:"#EEF2F8",100:"#D7E0EE",200:"#B0C1DD",300:"#8AA2CC",400:"#5F7FB4",500:"#3D5F96",600:"#2B4A7A",700:"#1C2E52",800:"#16253F",900:"#0F1A2E",950:"#0A1220"}, purple: {50:"#EEF2F8",100:"#D7E0EE",200:"#B0C1DD",300:"#8AA2CC",400:"#5F7FB4",500:"#3D5F96",600:"#2B4A7A",700:"#1C2E52",800:"#16253F",900:"#0F1A2E",950:"#0A1220"}, violet: {50:"#EEF2F8",100:"#D7E0EE",200:"#B0C1DD",300:"#8AA2CC",400:"#5F7FB4",500:"#3D5F96",600:"#2B4A7A",700:"#1C2E52",800:"#16253F",900:"#0F1A2E",950:"#0A1220"},
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "system-ui", "sans-serif"],
      },
      animation: {
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
