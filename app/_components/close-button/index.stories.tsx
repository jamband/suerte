import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";
import { CloseButton } from ".";

const meta = preview.meta({
  component: CloseButton,
});

export const Default = meta.story({
  args: {
    onClick: fn(),
  },
});
