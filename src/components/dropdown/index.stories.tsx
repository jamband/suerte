import { Meta, Story } from "@storybook/react";
import { DropdownButtonLink } from "~/components/dropdown-button-link";
import { DropdownDivider } from "~/components/dropdown-divider";
import { Dropdown as Component } from ".";
import { Props } from "./types";

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
