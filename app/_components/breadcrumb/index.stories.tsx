import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from ".";

const meta = {
  title: "_components/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnTopPage: Story = {
  args: {
    text: "",
  },
  parameters: {
    nextjs: {
      router: {
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
      router: {
        pathname: "/foo",
      },
    },
  },
};
