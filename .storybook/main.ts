import { defineMain } from "@storybook/nextjs/node";

export default defineMain({
  framework: "@storybook/nextjs",
  stories: ["../app/**/*.stories.tsx"],
  core: { disableTelemetry: true },
});
