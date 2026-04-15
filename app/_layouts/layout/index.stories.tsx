import preview from "../../../.storybook/preview";
import { Layout } from ".";

const meta = preview.meta({
  component: Layout,
});

export const Default = meta.story({
  args: {
    children: "foo",
  },
});
