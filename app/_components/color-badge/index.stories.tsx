import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { ColorBadge } from ".";
import { Gap } from "../gap";

const meta = {
  component: ColorBadge,
  args: { onClick: fn() },
} satisfies Meta<typeof ColorBadge>;

export default meta;
type Story = StoryObj<typeof ColorBadge>;

export const Default = {
  render: (args) => (
    <Gap gap="1rem">
      <ColorBadge {...args} color="#ed7c7c" text="red" />
      <ColorBadge {...args} color="#4b9c69" text="green" />
      <ColorBadge {...args} color="#74a7e6" text="blue" />
    </Gap>
  ),
} satisfies Story;
