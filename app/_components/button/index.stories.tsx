import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Button } from ".";

const meta = {
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default = {
  render: (args) => <Button {...args}>foo</Button>,
} satisfies Story;

export const Disabled = {
  render: (args) => (
    <Button {...args} disabled>
      foo
    </Button>
  ),
} satisfies Story;
