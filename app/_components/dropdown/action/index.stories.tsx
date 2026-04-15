import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";
import { DropdownAction } from ".";

const meta = preview.meta({
  component: DropdownAction,
});

export const Default = meta.story({
  args: {
    onClick: fn(),
    children: "foo",
  },
});
