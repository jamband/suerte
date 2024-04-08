import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default = {
  render: () => <Footer />,
} satisfies Story;
