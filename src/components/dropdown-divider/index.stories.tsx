import { Meta, Story } from "@storybook/react";
import { DropdownDivider as Component } from ".";

export default {
  title: `components/${Component.name}`,
} as Meta;

const _: Story = () => <Component />;

export const Default = _.bind({});
