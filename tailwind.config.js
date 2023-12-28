/** @type {import('tailwindcss').Config} */

export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

      theme: {
            extend: {
                  colors: {
                        primary: "#ff2a45",
                        mute: "rgb(0,0,0,0.05)",
                  },

                  fontFamily: {
                        default: ["Nunito Sans", "sans-serif"],
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
