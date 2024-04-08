import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from ".";

const meta = {
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default = {
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
} satisfies Story;
