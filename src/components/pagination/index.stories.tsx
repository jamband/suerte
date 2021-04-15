import { Meta, Story } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";
import { Pagination as Component } from ".";
import type { Props } from "./types";

export default {
  title: `components/${Component.name}`,
  decorators: [withNextRouter],
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

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
