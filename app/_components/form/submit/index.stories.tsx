import type { Meta, StoryObj } from "@storybook/react";
import { FormSubmit } from ".";

const meta = {
  component: FormSubmit,
} satisfies Meta<typeof FormSubmit>;

export default meta;
type Story = StoryObj<typeof FormSubmit>;

export const Default = {
  render: () => <FormSubmit>submit</FormSubmit>,
} satisfies Story;

export const Disabled = {
  render: () => <FormSubmit disabled>submit</FormSubmit>,
} satisfies Story;
