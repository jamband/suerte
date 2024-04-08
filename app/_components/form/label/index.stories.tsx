import type { Meta, StoryObj } from "@storybook/react";
import { FormLabel } from ".";

const meta = {
  component: FormLabel,
} satisfies Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof FormLabel>;

export const Default = {
  render: () => <FormLabel htmlFor="foo">foo</FormLabel>,
} satisfies Story;

export const Required = {
  render: () => (
    <FormLabel htmlFor="foo" required>
      foo
    </FormLabel>
  ),
} satisfies Story;
