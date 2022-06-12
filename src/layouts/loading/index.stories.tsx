import { Meta, Story } from "@storybook/react";
import { Loading } from ".";

export default {
  title: `layouts/${Loading.name}`,
} as Meta;

const _: Story = (args) => <Loading {...args} />;

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
