/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    fontFamily: {
      primaryFont: ["var(--font-kalpurush)"]
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'esm': '500px',
  
        'sm': '640px',
  
        'md': '750px',
  
        'lg': '998px',
  
        'xl': '1024px',
  
        '2xl': '1280px',
  
        '4xl': '1535px'
      }
    },
  },
  plugins: [],
};
