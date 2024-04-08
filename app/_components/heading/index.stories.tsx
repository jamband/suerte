import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";

const meta = {
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default = {
  render: () => <Heading>foo</Heading>,
} satisfies Story;
