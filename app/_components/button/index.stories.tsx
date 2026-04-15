import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";
import { Button } from ".";

const meta = preview.meta({
  component: Button,
});

export const Default = meta.story({
  args: {
    onClick: fn(),
    children: "foo",
  },
});

export const Disabled = meta.story({
  args: {
    onClick: fn(),
    disabled: true,
    children: "foo",
  },
});
