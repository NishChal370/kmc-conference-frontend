/** @type {import('tailwindcss').Config} */

export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

      theme: {
            extend: {
                  colors: {
                        primary: "#ff2a45",
                        mute: "rgb(0,0,0,0.021)",
                        red: "#ff2a45",
                  },

                  fontFamily: {
                        default: ["Nunito", "sans-serif"],
                        secondary: ["DM Serif Display", "sans-serif"],
                  },

                  textColor: {
                        default: "#141414",
                  },

                  borderColor: {
                        default: "rgb(0,0,0,0.1)",
                  },

                  screens: {
                        xs: "320px",
                  },
            },
      },
      plugins: [],
};
