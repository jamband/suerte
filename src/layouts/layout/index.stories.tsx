import { Meta, Story } from "@storybook/react";
import { Layout } from ".";
import type { Props } from "./types";

export default {
  title: `layouts/${Layout.name}`,
} as Meta;

const _: Story<Props> = (args) => <Layout {...args} />;

export const Default = _.bind({});
Default.args = {
  children: <h1>Foo</h1>,
};
