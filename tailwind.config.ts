import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        ralewayDots: ['"Raleway Dots"', 'cursive'],
        glitch: ['Rubik Glitch', 'cursive'],
        rampart: ['Rampart One', 'cursive'],
        mystery: ['Mystery Quest', 'cursive'],
        barrie: ['Barriecito', 'cursive'],
        eater: ['Eater', 'cursive'],
        erica: ['Erica One', 'cursive'],
        faster: ['Faster One', 'cursive'],
        spice: ['Bungee Spice', 'cursive'],
        frijole: ['Frijole', 'cursive'],
        kranky: ['Kranky', 'cursive'],
        
        
      },
      backgroundImage: {
        'custom-banner': "url('/img/banner-vector-1.png'), url('/img/banner-vector-2.png')",
        'pattern': "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1)), linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slowspin: "spin 10s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        slide: "slide 2s ease-in-out infinite",
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slide: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
