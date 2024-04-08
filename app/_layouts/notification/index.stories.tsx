import { StateContext as NotificationStateContext } from "@/_contexts/notification";
import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from ".";

const meta = {
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default = {
  decorators: [
    (Story) => (
      <NotificationStateContext.Provider value="foo">
        <Story />
      </NotificationStateContext.Provider>
    ),
  ],
} satisfies Story;
