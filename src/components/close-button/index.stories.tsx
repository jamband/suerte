import { Meta, Story } from "@storybook/react";
import { Alert } from "~/components/alert";
import { Notification } from "~/components/notification";
import { StateContext as NotificationStateContext } from "~/contexts/notification";
import { CloseButton as Component } from ".";
import type { Props } from "./types";

export default {
  title: `components/${Component.name}`,
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

const _: Story<Props> = (args) => <Component {...args} />;

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
