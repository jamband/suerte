import { StateContext as NotificationStateContext } from "@/contexts/notification";
import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from ".";

const meta = {
  title: "components/Notification",
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <NotificationStateContext.Provider value={{ message: Notification.name }}>
        <Story />
      </NotificationStateContext.Provider>
    ),
  ],
};
