import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',

  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "olive": "#cbe2c8",
        "softlime": "#e8fd9d",
        "grayviolet": "#d6dfea",
        'midgrey': '#E8EEEA',
        'pgreen': '#76BC6A',
        'pyellow': '#E9FF79',
        'pgray': '#D1D6D3',
        'pblue': '#D6DFEA',
       
      },
      height: {
        "circle": "3rem",
        'avatar': '2.5rem',
       
      },
      width: {
        "circle": "3rem",
        'avatar': '2.5rem',
      },

     
        
      
     },
    },
  plugins: [],
  
};

export default config;
