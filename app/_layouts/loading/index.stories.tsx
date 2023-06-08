import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

const meta = {
  title: "_layouts/Loading",
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        asPath: "/",
        events: {
          on: (_: string, callback: (pathname: string) => void) => {
            callback("/foo");
          },
          off: () => {
            //
          },
        },
      },
    },
  },
};
