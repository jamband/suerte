import type { Meta, StoryObj } from "@storybook/react";
import { Gap } from ".";

const meta = {
  component: Gap,
} satisfies Meta<typeof Gap>;

export default meta;
type Story = StoryObj<typeof Gap>;

export const Row = {
  render: () => (
    <Gap gap="1rem">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </Gap>
  ),
} satisfies Story;

export const Column = {
  render: () => (
    <Gap direction="column" gap="1rem">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </Gap>
  ),
} satisfies Story;
