import type { Meta, Story } from "@storybook/react";
import { ExternalLink } from ".";
import type { Props } from "./types";

export default {
  title: `components/${ExternalLink.name}`,
  args: {
    href: "https://github.com/jamband/suerte",
  },
} as Meta;

const _: Story<Props> = (args) => <ExternalLink {...args} />;

export const Default = _.bind({});
Default.args = {
  children: "foo",
};
