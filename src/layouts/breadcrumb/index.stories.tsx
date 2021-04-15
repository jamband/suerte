import { Meta, Story } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";
import { Breadcrumb as Component } from ".";
import type { Props } from "./types";

export default {
  title: `layouts/${Component.name}`,
  decorators: [withNextRouter],
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const OnTopPage = _.bind({});
OnTopPage.args = {
  text: "App",
};
OnTopPage.parameters = {
  nextRouter: {
    pathname: "/",
  },
};

export const OnFooPage = _.bind({});
OnFooPage.args = {
  text: "Foo · App",
};
OnFooPage.parameters = {
  nextRouter: {
    pathname: "/foo",
  },
};
