/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily :{
      Maglite: ["Maglite","sans-serif"],
      LufgaLight: ["LufgaLight","sans-serif"],
      default: ["Impact","sans-serif"],
      Courier: ["Courier New","sans"],
      Calming: ["Calming","sans"],
      Old: ["Comic Sans Ms","sans"]
    },
    extend: { 
      backgroundImage: {
        paper: `url(/textures/paper.jpg)`,
        dirt: `url(/textures/dirt.jpg)`,
      },
    },
},
  plugins: []
}
