import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

const meta = {
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Story;

export const FooPage = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/foo",
      },
    },
  },
} satisfies Story;
