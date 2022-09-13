import type { Meta, Story } from "@storybook/react";
import { StateContext as NotificationStateContext } from "~/contexts/notification";
import { Notification } from ".";

export default {
  title: `components/${Notification.name}`,
} as Meta;

const _: Story = (args) => <Notification {...args} />;

export const Default = _.bind({});
Default.decorators = [
  (story) => (
    <NotificationStateContext.Provider value={{ message: Notification.name }}>
      {story()}
    </NotificationStateContext.Provider>
  ),
];