import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import { CloseButton } from "../close-button";

const meta = {
  title: "components/Alert",
  component: Alert,
  args: {
    className: "alert-primary show",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "foo",
  },
};

export const Stylings: Story = {
  args: {
    children: "foo",
  },
  argTypes: {
    className: {
      control: "select",
      options: {
        normal: "alert-primary show",
        success: "alert-success show",
        danger: "alert-danger show",
        custom: "bg-light shadow-sm show",
      },
    },
  },
};

export const WithDismiss: Story = {
  args: {
    children: (
      <>
        foo
        <CloseButton dismiss="alert" />
      </>
    ),
  },
};
