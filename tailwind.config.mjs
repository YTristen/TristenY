/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    nextui({
		themes: {
			"purple-dark": {
			  extend: "dark", // <- inherit default values from dark theme
			  colors: {
				background: "#0D001A",
				foreground: "#ffffff",
				primary:  {
					50: '#fae6ff',
					100: '#e5b9fb',
					200: '#d28bf4',
					300: '#c05dee',
					400: '#ad30e9',
					500: '#9417cf',
					600: '#7311a2',
					700: '#520b75',
					800: '#320547',
					900: '#13001c',
					DEFAULT: "#9417cf",
					foreground: "#ffffff",
				},
				focus: "#F182F6",
			  },
			},
		  },
		
    })
  ]
};
