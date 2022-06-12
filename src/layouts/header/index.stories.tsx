import { Meta, Story } from "@storybook/react";
import { Header } from ".";

export default {
  title: `layouts/${Header.name}`,
} as Meta;

const _: Story = (args) => <Header {...args} />;

export const Default = _.bind({});
