module.exports = {
  darkMode: "media",
  content: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      "./hugo_stats.json",
      "./func/*.html",
      "./layouts/**/*.html",
      "./assets/js/**/*.jsx",
    ],
  },
  theme: {
    colors: {
      transparent: "transparent",
      tahiti: "#001c48",
      bodybg: "#f2f2f3",
    },
    extend: {
      // Fonts are stored in their own module to tidy up the root config file.
      fontFamily: {
        robregular: ["Roboto-Regular"],
        robmono: ["Roboto-mono"],
        code: ["source code pro", "monospace"],
      },
      fontFamily: require("./fonts.config.js"),
      fontSize: {
        huge: [
          "13rem",
          {
            letterSpacing: "1.2",
            lineHeight: ".9",
          },
        ],
      },
    },
  },
    plugins: [
        require("@tailwindcss/typography"),
        // ...
    ],
};
