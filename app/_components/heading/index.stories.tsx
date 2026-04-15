import preview from "../../../.storybook/preview";
import { Heading } from ".";

const meta = preview.meta({
  component: Heading,
});

export const Default = meta.story({
  args: {
    children: "foo",
  },
});
