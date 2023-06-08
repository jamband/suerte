import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

const meta = {
  title: "pagination/_components/Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    pageCount: 5,
  },
  argTypes: {
    currentPage: {
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5],
      },
    },
  },
  parameters: {
    nextjs: {
      router: {
        pathname: "/",
      },
    },
  },
};
