import { Meta, Story } from "@storybook/react";
import { Layout as Component } from ".";
import type { Props } from "./types";

export default {
  title: `layouts/${Component.name}`,
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const Default = _.bind({});
Default.args = {
  children: <h1>Foo</h1>,
};
