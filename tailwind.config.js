/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      LufgaLight: ["LufgaLight","sans"],
      Calming: ["Calming","sans"],
      Allenoire: ["Allenoire","sans"],
    },
    extend:{
      backgroundImage: {
        // grain: `url(/textures/grain.png)`,
        // grain2: `url(/textures/grain2.png)`,
        grain: `url(/textures/grain.png)`,
      },
    },
},
  plugins: [],
}
