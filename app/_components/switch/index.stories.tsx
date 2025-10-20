import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Switch } from ".";

const meta = {
  component: Switch,
  args: {
    checked: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default = {
  render: (args) => <Switch {...args} />,
} satisfies Story;
