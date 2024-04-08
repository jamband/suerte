import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { fn } from "@storybook/test";

const meta = {
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof Button> = {
  render: () => <Button>foo</Button>,
};

export const Disabled: StoryObj<typeof Button> = {
  render: () => <Button>foo</Button>,
};
