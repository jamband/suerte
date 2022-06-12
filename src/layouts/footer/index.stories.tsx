import type { Meta, Story } from "@storybook/react";
import { Footer } from ".";

export default {
  title: `layouts/${Footer.name}`,
} as Meta;

const _: Story = (args) => <Footer {...args} />;

export const Default = _.bind({});
