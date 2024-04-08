import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from ".";

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const OnTopPage: Story = {
  args: {
    text: "",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export const OnFooPage: Story = {
  args: {
    text: "Foo",
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
