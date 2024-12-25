/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
      backgroundImage: {
        pricelist: "url('/assets/pricelist.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // light theme
        cream: {
          bright: "#EDF6FF",
          light: "#F1F0E8",
          dark: "#E5E1DA",
        },
        paragraph: {
          bright: "#898D92",
          light: "#233942",
          dark: "#222222",
        },
        blue: {
          bright: "#B3C8CF",
          light: "#89A8B2",
          dark: "#005691",
        },
        // dark theme
        black: {
          bright: "#0D0F11",
          light: "#0F0F0F",
          main: "#000",
        },
        cyan: {
          950: "#083344",
        },
        gray: {
          200: "#e5e7eb",
          300: "#d1d5db",

          400: "#898D92", // basic

          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        white: "#fff",
        teal: {
          bright: "#508195",
          light: "#233942",
          dark: "#141F24",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};
