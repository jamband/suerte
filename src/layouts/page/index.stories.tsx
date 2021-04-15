import { Meta, Story } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";
import { Page as Component } from ".";
import type { Props } from "./types";

export default {
  title: `layouts/${Component.name}`,
  decorators: [withNextRouter],
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const OnTop = _.bind({});
OnTop.args = {
  title: "",
  children: <h1>Home</h1>,
};

export const OnFoo = _.bind({});
OnFoo.args = {
  title: "Foo",
  children: <h1>Foo</h1>,
};
OnFoo.parameters = {
  nextRouter: {
    pathname: "/foo",
  },
};
