import preview from "../../../../.storybook/preview";
import { FormFeedback } from ".";

const meta = preview.meta({
  component: FormFeedback,
});

export const Default = meta.story({
  args: {
    id: "foo-feedback",
    message: "foo",
  },
});

export const Invalid = meta.story({
  args: {
    id: "foo-feedback",
    state: "invalid",
    message: "foo",
  },
});

export const Valid = meta.story({
  args: {
    id: "foo-feedback",
    state: "valid",
    message: "foo",
  },
});
