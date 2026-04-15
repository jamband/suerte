import preview from "../../../../.storybook/preview";
import { FormLabel } from ".";

const meta = preview.meta({
  component: FormLabel,
});

export const Default = meta.story({
  args: {
    htmlFor: "foo",
    children: "foo",
  },
});

export const Required = meta.story({
  args: {
    htmlFor: "foo",
    required: true,
    children: "foo",
  },
});
