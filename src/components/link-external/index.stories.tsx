import { Meta, Story } from "@storybook/react";
import { LinkExternal as Component } from ".";
import { Props } from "./types";

export default {
  title: `components/${Component.name}`,
  args: {
    href: "https://github.com/jamband/quiet-nextz",
  },
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const Default = _.bind({});
Default.args = {
  children: "foo",
};

export const WithSomeAttributes = _.bind({});
WithSomeAttributes.args = {
  children: "foo",
  rel: "author",
};
