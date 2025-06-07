import type { StorybookConfig } from "@storybook/nextjs";

export default {
  framework: "@storybook/nextjs",
  stories: ["../app/**/*.stories.tsx"],
  core: { disableTelemetry: true },
} satisfies StorybookConfig;
