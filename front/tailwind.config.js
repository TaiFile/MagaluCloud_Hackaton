/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        field_filling: "var(--field_filling)",
        field_disable_text: "var(--field_disable_text)",
        secondary_fields: "var(--secondary_fields)",
        field_text: "var(--field_text)",
        blue_background: "var(--blue_background)",
        main_color_fading_linear: "var(--main_color_fading_linear)",
      },
    },
    fontFamily: {
      martel: "Martel Sans",
    },
    colors: {
      primary: {
        button: "#236D9B",
        400: "#03588C",
        hover: "#59A0CC",
        disabled: "#E6E6E6",
      },
      secondary: {
        hover: "#BADCF1",
      },
      error: {
        600: "#FF2929",
      },
      transparent: "transparent",
      "light-yellow": "#F7F4ED",
      "ativo-green": "#62DB6E",
      "ativo-red": "#A43535",
      "call-to-action": "#236D9B",
      "field-filling": "#E3F0F8",
      "field-disable-filling": "#E6E6E6",
      "field-disable-text": "#AEAEAE",
      "secondary-fields": "#58859F",
      "call-to-action-hover": "#59A0CC",
      "secondary-hover": "#BADCF1",
      "field-text": "#656262",
      "blue-background": "#EFF7FA",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
