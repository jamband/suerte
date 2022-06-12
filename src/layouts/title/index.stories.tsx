import type { Meta, Story } from "@storybook/react";
import { Page } from ".";
import type { Props } from "./types";

export default {
  title: `layouts/${Page.name}`,
} as Meta;

const _: Story<Props> = (args) => <Page {...args} />;

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
