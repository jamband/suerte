import { Meta, Story } from "@storybook/react";
import { Dropdown as Component } from ".";
import { DropdownButtonLink } from "../dropdown-button-link";
import { DropdownDivider } from "../dropdown-divider";
import type { Props } from "./types";

export default {
  title: `components/${Component.name}`,
  args: {
    label: Component.name,
  },
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

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
