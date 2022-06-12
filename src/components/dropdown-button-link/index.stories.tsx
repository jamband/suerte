import type { Meta, Story } from "@storybook/react";
import { DropdownButtonLink } from ".";
import { IconInfoCircleFill } from "../../icons/info-circle-fill";
import type { Props } from "./types";

export default {
  title: `components/${DropdownButtonLink.name}`,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const _: Story<Props> = (args) => <DropdownButtonLink {...args} />;

export const Default = _.bind({});
Default.args = {
  children: "foo",
};

export const WithIcon = _.bind({});
WithIcon.args = {
  children: (
    <>
      <IconInfoCircleFill
        style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
      />{" "}
      foo
    </>
  ),
};
