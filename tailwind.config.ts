import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-500': "#98908B",
        'beige-100': "#F8F4F0",
        "grey900": "#201F24",
        "grey500": "#696868",
        "grey300": "#B3B3B3",
        "grey100": "#F2F2F2",
        "green": "#277C78",
        "yellow": "#F2CDAC",
        "cyan": "#82C9D7",
        "navy": "#626070",
        "red": "#C94736",
        "purple-500": "#826CB0",
        "purple-100": "#AF81BA",
        "turquoise": "#597C7C",
        "brown": "#93674F",
        "magenta": "#934F6F",
        "blue": "#3F82B2",
        "navy-grey": "#97A0AC",
        "army-green": "#7F9161",
        "gold": "#CAB361",
        "orange": "#BE6C49",
      },
      screens: {
        
      }
    },
  },
  plugins: [],
};
export default config;
