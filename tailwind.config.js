// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        "loaderpro-theme": {
          // custom theme
          extend: "light",
          colors: {
            primary: {
              50: "#fff8eb",
              100: "#fdebc8",
              200: "#fcd48b",
              300: "#fab84f",
              400: "#f8991d",
              500: "#f27a0e",
              600: "#d65709",
              700: "#b2390b",
              800: "#772510",
              900: "#441004",
              DEFAULT: "#f8991d",
            },
            focus: "#BEF264",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
