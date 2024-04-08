import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

const meta = {
  component: Pagination,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const OneTenth = {
  parameters: {
    nextjs: {
      navigation: {
        query: { page: 1 },
      },
    },
  },
  render: () => <Pagination pathname="/" currentPage={1} lastPage={10} />,
} satisfies Story;

export const TwoTenths = {
  parameters: {
    nextjs: {
      navigation: {
        query: { page: 2 },
      },
    },
  },
  render: () => <Pagination pathname="/" currentPage={2} lastPage={10} />,
} satisfies Story;

export const TenTenths = {
  parameters: {
    nextjs: {
      navigation: {
        query: { page: 10 },
      },
    },
  },
  render: () => <Pagination pathname="/" currentPage={10} lastPage={10} />,
} satisfies Story;
