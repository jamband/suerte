import type { Meta, Story } from "@storybook/react";
import { Pagination } from ".";
import type { Props } from "./types";

export default {
  title: `components/${Pagination.name}`,
} as Meta;

const _: Story<Props> = (args) => <Pagination {...args} />;

export const Default = _.bind({});
Default.args = {
  currentPage: 1,
  pageCount: 5,
};
Default.argTypes = {
  currentPage: {
    control: {
      type: "select",
      options: [1, 2, 3, 4, 5],
    },
  },
};
Default.parameters = {
  nextRouter: {
    pathname: "/",
  },
};
