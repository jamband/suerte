import preview from "../../../../.storybook/preview";
import { FormSubmit } from ".";

const meta = preview.meta({
  component: FormSubmit,
});

export const Default = meta.story({
  args: {
    children: "submit",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    children: "submit",
  },
});
