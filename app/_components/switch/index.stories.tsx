import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";
import { Switch } from ".";

const meta = preview.meta({
  component: Switch,
});

export const Default = meta.story({
  args: {
    checked: false,
    onClick: fn(),
  },
});
