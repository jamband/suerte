import { StateContext as NotificationStateContext } from "@/contexts/notification";
import { Notification } from "@/layouts/notification";
import type { Meta, StoryObj } from "@storybook/react";
import { CloseButton } from ".";
import { Alert } from "../alert";

const meta = {
  title: "components/CloseButton",
  component: CloseButton,
  argTypes: {
    onClick: {
      action: "clicked",
    },
    dismiss: {
      control: "select",
      options: {
        alert: "alert",
        offcanvas: "offcanvas",
        toast: "toast",
      },
    },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAlert: Story = {
  args: {
    dismiss: "alert",
  },
  decorators: [
    (Story) => (
      <Alert className="bg-light shadow-sm show">
        foo
        <Story />
      </Alert>
    ),
  ],
};

export const WithNotification: Story = {
  args: {
    className: "me-3 m-auto btn-close-white",
    dismiss: "toast",
  },
  decorators: [
    (Story) => {
      return (
        <NotificationStateContext.Provider value={{ message: "foo" }}>
          <Notification />
          <Story />
        </NotificationStateContext.Provider>
      );
    },
  ],
};
