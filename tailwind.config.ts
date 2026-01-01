import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			fontFamily: {
				sans: ["Creato Display", "ui-sans-serif", "system-ui"],
			},
			colors: {
				primary: {
					DEFAULT: "purple-600",
					50: "#E6F2FF",
					100: "#CCE6FF",
					200: "#99CCFF",
					300: "#66B3FF",
					400: "#3399FF",
					500: "#005C9D",
					600: "#004A7D",
					700: "#00385E",
					800: "#00263E",
					900: "#00131F",
					foreground: "#FFFFFF",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#005C9D",
							50: "#E6F2FF",
							100: "#CCE6FF",
							200: "#99CCFF",
							300: "#66B3FF",
							400: "#3399FF",
							500: "#005C9D",
							600: "#004A7D",
							700: "#00385E",
							800: "#00263E",
							900: "#00131F",
							foreground: "#FFFFFF",
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: "#3399FF",
							foreground: "#FFFFFF",
						},
					},
				},
			},
		}),
	],
};

export default config;
