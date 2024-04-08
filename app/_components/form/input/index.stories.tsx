import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from ".";

const meta = {
  component: FormInput,
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Text = {
  render: () => <FormInput label="foo" type="text" name="foo" />,
} satisfies Story;

export const Email = {
  render: () => <FormInput label="email" type="email" name="email" />,
} satisfies Story;

export const Password = {
  render: () => <FormInput label="password" type="password" name="password" />,
} satisfies Story;

export const Required = {
  render: () => <FormInput label="foo" type="text" name="foo" required />,
} satisfies Story;

export const Focus = {
  render: () => <FormInput label="foo" type="text" name="foo" focus />,
} satisfies Story;

export const Placeholder = {
  render: () => (
    <FormInput
      label="foo"
      type="email"
      name="email"
      placeholder="foo@example.com"
    />
  ),
} satisfies Story;

export const DefaultValue = {
  render: () => (
    <FormInput
      label="foo"
      type="email"
      name="email"
      defaultValue="foo@example.com"
    />
  ),
} satisfies Story;

export const Feedback = {
  render: () => (
    <FormInput label="foo" type="text" name="foo" feedback="feedback..." />
  ),
} satisfies Story;

export const InvalidFeedback = {
  render: () => (
    <FormInput
      label="foo"
      type="text"
      name="foo"
      feedback="invalid feedback..."
      state="invalid"
    />
  ),
} satisfies Story;

export const ValidFeedback = {
  render: () => (
    <FormInput
      label="foo"
      type="text"
      name="foo"
      feedback="valid feedback..."
      state="valid"
    />
  ),
} satisfies Story;
