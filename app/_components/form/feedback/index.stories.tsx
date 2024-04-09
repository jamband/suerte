import type { Meta, StoryObj } from "@storybook/react";
import { FormFeedback } from ".";

const meta = {
  component: FormFeedback,
} satisfies Meta<typeof FormFeedback>;

export default meta;
type Story = StoryObj<typeof FormFeedback>;

export const Default = {
  render: () => <FormFeedback id="foo-feedback" message="foo" />,
} satisfies Story;

export const Invalid = {
  render: () => (
    <FormFeedback id="foo-feedback" state="invalid" message="foo" />
  ),
} satisfies Story;

export const Valid = {
  render: () => <FormFeedback id="foo-feedback" state="valid" message="foo" />,
} satisfies Story;
