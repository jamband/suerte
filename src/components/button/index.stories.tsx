import { IconInfoCircleFill } from "@/icons/info-circle-fill";
import type { Meta, Story } from "@storybook/react";
import { Button } from ".";
import type { Props } from "./types";

export default {
  title: `components/${Button.name}`,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const _: Story<Props> = (args) => <Button {...args} />;

export const Default = _.bind({});
Default.args = {
  type: "button",
  className: "btn-primary",
  children: "foo",
};

export const Sizings = _.bind({});
Sizings.args = {
  type: "button",
  className: "btn-primary",
  children: "foo",
};
Sizings.argTypes = {
  className: {
    control: {
      type: "inline-radio",
      options: {
        small: "btn-primary btn-sm",
        normal: "btn-primary",
        large: "btn-primary btn-lg",
      },
    },
  },
};

export const Link = _.bind({});
Link.args = {
  type: "button",
  className: "btn-link",
  children: "foo",
};

export const WithIcon = _.bind({});
WithIcon.args = {
  type: "button",
  className: "btn-primary",
  children: (
    <>
      <IconInfoCircleFill
        style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
      />
      <span className="ms-2">foo</span>
    </>
  ),
};

export const Disabled = _.bind({});
Disabled.args = {
  type: "button",
  className: "btn-primary",
  disabled: true,
  children: "foo",
};
