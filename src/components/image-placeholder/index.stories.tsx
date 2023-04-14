import type { Meta, StoryObj } from "@storybook/react";
import { ImagePlaceholder } from ".";

const meta = {
  title: "components/ImagePlaceholder",
  component: ImagePlaceholder,
} satisfies Meta<typeof ImagePlaceholder>;

export default meta;
type Story = StoryObj<typeof ImagePlaceholder>;

export const Default: Story = {
  args: {
    text: "foo",
    textSize: "3em",
    textFill: "#f8f9fa",
    rectFill: "#4b9c69",
    height: 300,
    className: "rounded font-monospace",
  },
};
