const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
   default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx}",
   ],
   prefix: "",
   theme: {
      container: {
         center: true,
         padding: "2rem",
      },
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1400px",
      },
      extend: {
         colors: {
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
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
         backgroundImage: {
            hero: "url('/hero.png')",
            hero_shape: "url('/hero/Ellipse 29.svg')",
            hero_shape2_light: "url('/hero/shape-2-light.svg')",
            hero_shape2_dark: "url('/hero/shape-2-dark.svg')",
            dots_light: "url('/dots-light.svg')",
            dots_dark: "url('/dots-dark.svg')",
            about_shape_light: "url('/about/shape-light.svg')",
            about_shape_dark: "url('/about/shape-dark.svg')",
            contact_illustration_light:
               "url('/contact/illustration-light.svg')",
            contact_illustration_dark: "url('/contact/illustration-dark.svg')",
         },

         animation: {
            spotlight: "spotlight 2s ease .75s 1 forwards",
         },
         keyframes: {
            spotlight: {
               "0%": {
                  opacity: 0,
                  transform: "translate(-72%, -62%) scale(0.5)",
               },
               "100%": {
                  opacity: 1,
                  transform: "translate(-50%,-40%) scale(1)",
               },
            },
         },
      },
   },
   plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
   let allColors = flattenColorPalette(theme("colors"));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ":root": newVars,
   });
}
