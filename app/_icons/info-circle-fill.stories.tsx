import type { Meta, StoryObj } from "@storybook/react";
import { IconInfoCircleFill } from "./info-circle-fill";

const meta = {
  title: "_icons/IconInfoCircleFill",
  component: IconInfoCircleFill,
} satisfies Meta<typeof IconInfoCircleFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { height: "1em", width: "1em", verticalAlign: "-0.125em" },
  },
};

export const withText: Story = {
  args: {
    style: { height: "1em", width: "1em", verticalAlign: "-0.125em" },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <span className="ms-1">Foo</span>
      </>
    ),
  ],
};

export const withLargeText: Story = {
  args: {
    style: { height: "1em", width: "1em", verticalAlign: "-0.125em" },
  },
  decorators: [
    (Story) => (
      <div className="display-1">
        <Story />
        <span className="ms-1">Foo</span>
      </div>
    ),
  ],
};
