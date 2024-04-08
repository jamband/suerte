import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DropdownAction } from ".";

const meta = {
  component: DropdownAction,
  args: { onClick: fn() },
} satisfies Meta<typeof DropdownAction>;

export default meta;
type Story = StoryObj<typeof DropdownAction>;

export const Default = {
  render: (args) => <DropdownAction {...args}>foo</DropdownAction>,
} satisfies Story;
