import { Meta, Story } from "@storybook/react";
import { Notification as Component } from ".";
import { StateContext as NotificationStateContext } from "../../contexts/notification";

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
