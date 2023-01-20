const path = require("path");

module.exports = {
  typescript: {
    reactDocgen: false,
  },
  stories: ["../src/**/*.stories.tsx"],
  core: {
    builder: "webpack5",
    disableTelemetry: true,
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
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};
