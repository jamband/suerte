import { Meta, Story } from "@storybook/react";
import { Header as Component } from ".";

export default {
  title: `layouts/${Component.name}`,
} as Meta;

const _: Story = (args) => <Component {...args} />;

export const Default = _.bind({});
