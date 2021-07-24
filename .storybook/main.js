const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  core: {
    builder: "webpack5",
  },
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
          },
        },
      },
    },
    "storybook-addon-next-router",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
