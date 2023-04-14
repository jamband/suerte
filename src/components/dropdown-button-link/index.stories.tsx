import { IconInfoCircleFill } from "@/icons/info-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownButtonLink } from ".";

const meta = {
  title: "components/DropdownButtonLink",
  component: DropdownButtonLink,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof DropdownButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "foo",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <IconInfoCircleFill
          style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
        />{" "}
        foo
      </>
    ),
  },
};
