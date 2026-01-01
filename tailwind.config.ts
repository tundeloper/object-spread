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
					DEFAULT: "#AB6AFF",
					50: "#F5EDFF",
					100: "#E9D9FF",
					200: "#D4B3FF",
					300: "#BE8DFF",
					400: "#AB6AFF",
					500: "#9747FF",
					600: "#7A24E6",
					700: "#5E1AB3",
					800: "#421280",
					900: "#260A4D",
					foreground: "#FFFFFF",
				},
				secondary: {
					DEFAULT: "#05051B",
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
							DEFAULT: "#AB6AFF",
							50: "#F5EDFF",
							100: "#E9D9FF",
							200: "#D4B3FF",
							300: "#BE8DFF",
							400: "#AB6AFF",
							500: "#9747FF",
							600: "#7A24E6",
							700: "#5E1AB3",
							800: "#421280",
							900: "#260A4D",
							foreground: "#FFFFFF",
						},
						secondary: {
							DEFAULT: "#05051B",
							foreground: "#FFFFFF",
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: "#AB6AFF",
							foreground: "#FFFFFF",
						},
						secondary: {
							DEFAULT: "#05051B",
							foreground: "#FFFFFF",
						},
					},
				},
			},
		}),
	],
};

export default config;
