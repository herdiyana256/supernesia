/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Mobile
      'xs':  '320px',   // iPhone SE, Galaxy A series kecil
      'sm':  '375px',   // iPhone 12/13/14 standard
      'md':  '390px',   // iPhone 14 Pro, 15
      'lg':  '414px',   // iPhone Plus/Max, Galaxy S series

      // Tablet
      'tab-sm':  '600px',   // Tab kecil, iPad Mini portrait
      'tab':     '768px',   // iPad, Samsung Tab A portrait
      'tab-lg':  '820px',   // iPad Air portrait
      'tab-xl':  '1024px',  // iPad Pro 11", Tab landscape

      // Desktop
      'desk-sm': '1280px',  // Laptop 13"
      'desk':    '1440px',  // Desktop standard
      'desk-lg': '1920px',  // Full HD monitor
      'desk-xl': '2560px',  // 2K/4K monitor
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: "1.125rem", // 18px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // ✅ Brand colors — exact Figma values
        primary: {
          DEFAULT: "#D9E061", // Figma Yellow
          foreground: "#16232A",
        },
        secondary: {
          DEFAULT: "#EC5B70", // Figma Pink
          foreground: "#FFFFFF",
        },
        "brand-dark": "#16232A",    // Figma Dark Background
        "brand-yellow": "#D9E061",  // Figma Yellow
        "brand-pink": "#EC5B70",    // Figma Pink

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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
