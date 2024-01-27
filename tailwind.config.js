/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f8faff",
        link: "#346bd4",
        "secondary-text": "#858585",
        "light-gohan": "#fff",
        mediumslateblue: {
          "100": "#7a75ff",
          "200": "#605bff",
        },
        "field-color-darker": "#eaeaea",
        darkgray: {
          "100": "#9a9",
          "200": "#999",
        },
        black: "#000",
        background: "#f5f5f5",
        gray: {
          "100": "#fcfcff",
          "200": "#fafafb",
        },
        "light-trunks": "#999ca0",
        "light-bulma": "#231f20",
        gainsboro: "#e6e6e6",
        "light-piccolo-piccolo": "#0e6fff",
        "light-beerus-beerus": "#f2f2f2",
        dodgerblue: "#5b93ff",
        "light-beerus-hover": "rgba(0, 0, 0, 0.08)",
        text: "#030229",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        "avertastd-regular": "AvertaStd-Regular",
        "paragraph-ui-type-text-2xl-s": "Figtree",
        nunito: "Nunito",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "56xl": "75px",
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      sm: "14px",
      "3xs": "10px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
