import { Meta, Story } from "@storybook/react";
import { CloseButton } from "~/components/close-button";
import { Alert as Component } from ".";
import { Props } from "./types";

export default {
  title: `components/${Component.name}`,
  args: {
    className: "alert-primary show",
  },
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const Default = _.bind({});
Default.args = {
  children: "foo",
};

export const Stylings = _.bind({});
Stylings.args = {
  children: "foo",
};
Stylings.argTypes = {
  className: {
    control: {
      type: "select",
      options: {
        normal: "alert-primary show",
        success: "alert-success show",
        danger: "alert-danger show",
        custom: "bg-light shadow-sm show",
      },
    },
  },
};

export const WithDismiss = _.bind({});
WithDismiss.args = {
  children: (
    <>
      foo
      <CloseButton dismiss="alert" />
    </>
  ),
};
