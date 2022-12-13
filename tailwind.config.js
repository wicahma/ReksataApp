  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
      serif: ["Crimson Text", "ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      colors: {
        errie: {
          50: "#0B0B0B",
          100: "#0D0D0D",
          200: "#101010",
          300: "#121212",
          400: "#141414",
          500: "#232323",
          600: "#313131",
          700: "#404040",
          800: "#4E4E4E",
          900: "#5D5D5D",
        },
        cultured: {
          50: "#4D4D4C",
          100: "#767775",
          200: "#9DA09D",
          300: "#C6C9C8",
          400: "#EEF0F2",
          500: "#F1F3F5",
          600: "#F5F6F7",
          700: "#F8F9FA",
          800: "#FCFCFC",
          900: "#FFFFFF",
        },
        rishie: {
          50: "#2E1106",
          100: "#5F230C",
          200: "#903512",
          300: "#C14719",
          400: "#F2591F",
          500: "#F57342",
          600: "#F88E66",
          700: "#FBA98A",
          800: "#FDC4AE",
          900: "#FEDFD3",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
  daisyui: {
    styled: true,
    themes: [],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
