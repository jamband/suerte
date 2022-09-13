import type { Meta, Story } from "@storybook/react";
import { Dropdown } from ".";
import { DropdownButtonLink } from "../dropdown-button-link";
import { DropdownDivider } from "../dropdown-divider";
import type { Props } from "./types";

export default {
  title: `components/${Dropdown.name}`,
  args: {
    label: Dropdown.name,
  },
} as Meta;

const _: Story<Props> = (args) => (
  <Dropdown {...args} className="btn btn-primary" />
);

export const Default = _.bind({});

export const WithButtonLink = _.bind({});
WithButtonLink.args = {
  children: (
    <>
      <DropdownButtonLink>Foo</DropdownButtonLink>
      <DropdownButtonLink>Bar</DropdownButtonLink>
    </>
  ),
};

export const WithButtonLinkAndDivider = _.bind({});
WithButtonLinkAndDivider.args = {
  children: (
    <>
      <DropdownButtonLink>Foo</DropdownButtonLink>
      <DropdownDivider />
      <DropdownButtonLink>Bar</DropdownButtonLink>
    </>
  ),
};
