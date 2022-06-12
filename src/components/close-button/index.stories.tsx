import type { Meta, Story } from "@storybook/react";
import { CloseButton } from ".";
import { StateContext as NotificationStateContext } from "../../contexts/notification";
import { Notification } from "../../layouts/notification";
import { Alert } from "../alert";
import type { Props } from "./types";

export default {
  title: `components/${CloseButton.name}`,
  argTypes: {
    onClick: {
      action: "clicked",
    },
    dismiss: {
      control: {
        type: "select",
        options: {
          alert: "alert",
          offcanvas: "offcanvas",
          toast: "toast",
        },
      },
    },
  },
} as Meta;

const _: Story<Props> = (args) => <CloseButton {...args} />;

export const Default = _.bind({});

export const WithAlert = _.bind({});
WithAlert.args = {
  dismiss: "alert",
};
WithAlert.decorators = [
  (story) => (
    <Alert className="bg-light shadow-sm show">
      foo
      {story()}
    </Alert>
  ),
];

export const WithNotification = _.bind({});
WithNotification.args = {
  className: "me-3 m-auto btn-close-white",
  dismiss: "toast",
};
WithNotification.decorators = [
  (story) => {
    return (
      <NotificationStateContext.Provider value={{ message: "foo" }}>
        <Notification />
        {story()}
      </NotificationStateContext.Provider>
    );
  },
];
