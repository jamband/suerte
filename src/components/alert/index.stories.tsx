import { Meta, Story } from "@storybook/react";
import { Alert } from ".";
import { CloseButton } from "../close-button";
import type { Props } from "./types";

export default {
  title: `components/${Alert.name}`,
  args: {
    className: "alert-primary show",
  },
} as Meta;

const _: Story<Props> = (args) => <Alert {...args} />;

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
