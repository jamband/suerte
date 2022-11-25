import type { Meta, Story } from "@storybook/react";
import { ImageBadge } from ".";
import type { Props } from "./types";

export default {
  title: `components/${ImageBadge.name}`,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const _: Story<Props> = (args) => <ImageBadge {...args} />;

export const Default = _.bind({});
Default.args = {
  className: "btn-primary shadow-sm",
  text: "foo",
  color: "#4b9c69",
  dataBsToggle: "foo",
  dataBsTarget: "#bar",
  disabled: false,
};
