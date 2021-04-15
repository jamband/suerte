import { Meta, Story } from "@storybook/react";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { DropdownButtonLink as Component } from ".";
import type { Props } from "./types";

export default {
  title: `components/${Component.name}`,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const Default = _.bind({});
Default.args = {
  children: "foo",
};

export const WithIcon = _.bind({});
WithIcon.args = {
  children: (
    <>
      <IconInfoCircleFill className="w-4 h-4" /> foo
    </>
  ),
};
