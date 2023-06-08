import type { Meta, StoryObj } from "@storybook/react";
import { ImageBadge } from ".";

const meta = {
  title: "modal/_components/ImageBadge",
  component: ImageBadge,
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof ImageBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "btn-primary shadow-sm",
    text: "foo",
    color: "#4b9c69",
    dataBsToggle: "foo",
    dataBsTarget: "#bar",
    disabled: false,
  },
};
