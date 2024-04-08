import type { Meta, StoryObj } from "@storybook/react";
import { DropdownDivider } from ".";

const meta = {
  component: DropdownDivider,
} satisfies Meta<typeof DropdownDivider>;

export default meta;
type Story = StoryObj<typeof DropdownDivider>;

export const Default = {
  render: () => <DropdownDivider />,
} satisfies Story;
