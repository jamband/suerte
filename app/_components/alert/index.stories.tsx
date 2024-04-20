import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import { Gap } from "../gap";

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default = {
  render: () => (
    <Gap flow="column" gap="1rem">
      <Alert>this is a test.</Alert>
      <Alert type="info">this is a test.</Alert>
      <Alert dismissible>this is a test.</Alert>
      <Alert>{"this is a test. ".repeat(10).trim()}</Alert>
      <Alert type="info">{"this is a test. ".repeat(10).trim()}</Alert>
      <Alert type="info" dismissible>
        {"this is a test. ".repeat(10).trim()}
      </Alert>
    </Gap>
  ),
} satisfies Story;
