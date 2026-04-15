import preview from "../../../.storybook/preview";
import { Pagination } from ".";

const meta = preview.meta({
  component: Pagination,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
});

export const OneTenth = meta.story({
  parameters: {
    nextjs: {
      navigation: {
        query: { page: "1" },
      },
    },
  },
  args: {
    pathname: "/",
    currentPage: 1,
    lastPage: 10,
  },
});

export const TwoTenths = meta.story({
  parameters: {
    nextjs: {
      navigation: {
        query: { page: "2" },
      },
    },
  },
  args: {
    pathname: "/",
    currentPage: 2,
    lastPage: 10,
  },
});

export const TenTenths = meta.story({
  parameters: {
    nextjs: {
      navigation: {
        query: { page: "10" },
      },
    },
  },
  args: {
    pathname: "/",
    currentPage: 10,
    lastPage: 10,
  },
});
