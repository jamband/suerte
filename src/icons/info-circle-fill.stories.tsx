import type { Meta, Story } from "@storybook/react";
import type { Props } from "./base/types";
import { IconInfoCircleFill } from "./info-circle-fill";

export default {
  title: `icons/${IconInfoCircleFill.name}`,
} as Meta;

const _: Story<Props> = (args) => <IconInfoCircleFill {...args} />;

export const Default = _.bind({});
Default.args = {
  style: { height: "1em", width: "1em", verticalAlign: "-0.125em" },
};

export const withText = _.bind({});
withText.args = {
  style: { height: "1em", width: "1em", verticalAlign: "-0.125em" },
};
withText.decorators = [
  (story) => (
    <>
      {story()}
      <span className="ms-1">Foo</span>
    </>
  ),
];

export const withLargeText = _.bind({});
withLargeText.args = {
  style: { height: "1em", width: "1em", verticalAlign: "-0.125em" },
};
withLargeText.decorators = [
  (story) => (
    <div className="display-1">
      {story()}
      <span className="ms-1">Foo</span>
    </div>
  ),
];
