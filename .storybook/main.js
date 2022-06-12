module.exports = {
  typescript: {
    reactDocgen: false,
  },
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
};
