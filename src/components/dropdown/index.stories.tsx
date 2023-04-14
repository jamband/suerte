import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import { DropdownButtonLink } from "../dropdown-button-link";
import { DropdownDivider } from "../dropdown-divider";

const meta = {
  title: "components/Dropdown",
  component: Dropdown,
  args: {
    id: "foo",
    label: Dropdown.name,
    className: "btn btn-primary",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownButtonLink>Foo</DropdownButtonLink>
        <DropdownButtonLink>Bar</DropdownButtonLink>
      </>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    children: (
      <>
        <DropdownButtonLink>Foo</DropdownButtonLink>
        <DropdownDivider />
        <DropdownButtonLink>Bar</DropdownButtonLink>
      </>
    ),
  },
};
