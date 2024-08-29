const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        'blue': '4px 4px 4px  rgba(17, 130, 206, 1)',
      },
      boxShadow: {
        '3xl': '0px 5px 30px 0px rgba(0, 0, 0, 0.3)',
      }

    },
    darkMode: "class",
    plugins: [nextui()],
  },

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            secondary: {
              DEFAULT: "#f5741c",
            },
            charly: {
              DEFAULT: "#0083ca"
            },
            charly2: {
              DEFAULT: "rgb(8, 56, 247)"
            },
            charly3: {
              DEFAULT: "#2e34ae"
            },
            charly4: {
              DEFAULT: "#d6e6f1"
            },
            charly5:{
              DEFAULT:"#093d5f"
            },
            charly6:{
              DEFAULT:"#0083ca"
            }
          }
        }
      }
    }),

    require('tailwindcss-textshadow')
  ],
}
