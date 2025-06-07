import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { CloseButton } from ".";

const meta = {
  component: CloseButton,
  args: { onClick: fn() },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default = {
  render: (args) => <CloseButton {...args} />,
} satisfies Story;
