import type { Meta, StoryObj } from "@storybook/react";
import { DropdownDivider } from ".";

const meta = {
  title: "components/DropdownDivider",
  component: DropdownDivider,
} satisfies Meta<typeof DropdownDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
