import { Meta, Story } from "@storybook/react";
import { Loading as Component } from ".";

export default {
  title: `layouts/${Component.name}`,
} as Meta;

const _: Story = (args) => <Component {...args} />;

export const Default = _.bind({});

Default.parameters = {
  nextRouter: {
    asPath: "/",
    events: {
      on: (_: string, callback: (pathname: string) => void) => {
        callback("/foo");
      },
      off: () => {
        //
      },
    },
  },
};
