import type { Meta, Story } from "@storybook/react";
import { ImagePlaceholder } from ".";
import type { Props } from "./types";

export default {
  title: `components/${ImagePlaceholder.name}`,
} as Meta;

const _: Story<Props> = (args) => <ImagePlaceholder {...args} />;

export const Default = _.bind({});
Default.args = {
  text: "foo",
  textSize: "3em",
  textFill: "#f8f9fa",
  rectFill: "#4b9c69",
  height: 300,
  className: "rounded font-monospace",
};
