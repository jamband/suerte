import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from ".";

const meta = {
  title: "_layouts/Layout",
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>Foo</h1>,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/foo",
      },
    },
  },
};
