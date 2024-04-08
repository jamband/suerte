import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from ".";

const meta = {
  component: Breadcrumb,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const OnTopPage = {
  render: () => <Breadcrumb text="" />,
  parameters: {
    nextjs: {
      navigation: { pathname: "/" },
    },
  },
} satisfies Story;

export const OnFooPage = {
  render: () => <Breadcrumb text="Foo" />,
  parameters: {
    nextjs: {
      navigation: { pathname: "/foo" },
    },
  },
} satisfies Story;
