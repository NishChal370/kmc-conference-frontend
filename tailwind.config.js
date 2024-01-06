/** @type {import('tailwindcss').Config} */

export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

      theme: {
            extend: {
                  colors: {
                        primary: "#bd1701",
                        mute: "rgb(0,0,0,0.021)",
                        red: "#bd1701",
                        error: "#de4504",
                  },

                  fontFamily: {
                        default: ["Open Sans", "sans-serif"],
                  },

                  textColor: {
                        default: "rgb(26, 29, 38)",
                        mute: "#94a3b8",
                  },

                  borderColor: {
                        default: "rgb(0,0,0,0.1)",
                  },

                  boxShadow: {
                        button: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  },

                  screens: {
                        xs: "320px",
                  },
            },
      },
      plugins: [],
};
