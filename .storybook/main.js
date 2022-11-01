const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

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
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
