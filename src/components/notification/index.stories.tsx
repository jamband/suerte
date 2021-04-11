import { Meta, Story } from "@storybook/react";
import { StateContext as NotificationStateContext } from "~/contexts/notification";
import { Notification as Component } from ".";

export default {
  title: `components/${Component.name}`,
} as Meta;

const _: Story = (args) => <Component {...args} />;

export const Default = _.bind({});
Default.decorators = [
  (story) => (
    <NotificationStateContext.Provider value={{ message: Component.name }}>
      {story()}
    </NotificationStateContext.Provider>
  ),
];
