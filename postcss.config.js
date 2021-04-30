module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          "postcss-flexbugs-fixes",
          [
            "postcss-preset-env",
            {
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
              features: {
                "custom-properties": false,
              },
            },
          ],
          [
            "@fullhuman/postcss-purgecss",
            {
              content: [
                "./node_modules/bootstrap/js/dist/alert.js",
                "./node_modules/bootstrap/js/dist/button.js",
                "./node_modules/bootstrap/js/dist/collapse.js",
                "./node_modules/bootstrap/js/dist/dropdown.js",
                "./node_modules/bootstrap/js/dist/modal.js",
                "./node_modules/bootstrap/js/dist/offcanvas.js",
                "./node_modules/bootstrap/js/dist/toast.js",
                "./src/**/*.tsx",
              ],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: ["html", "body"],
            },
          ],
        ]
      : [],
};
