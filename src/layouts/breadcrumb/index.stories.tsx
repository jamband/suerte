import { Meta, Story } from "@storybook/react";
import { Breadcrumb as Component } from ".";
import type { Props } from "./types";

export default {
  title: `layouts/${Component.name}`,
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
