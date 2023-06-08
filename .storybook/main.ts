import type { StorybookConfig } from "@storybook/nextjs";

export default {
  framework: "@storybook/nextjs",
  stories: ["../app/**/*.stories.tsx"],
  core: { disableTelemetry: true },
  addons: ["@storybook/addon-essentials"],
} satisfies StorybookConfig;
