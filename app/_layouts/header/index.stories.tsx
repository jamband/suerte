import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default = {
  render: () => <Header />,
} satisfies Story;
