import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from ".";

const meta = {
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default = {
  render: () => <Layout>foo</Layout>,
} satisfies Story;
