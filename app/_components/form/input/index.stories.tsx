import preview from "../../../../.storybook/preview";
import { FormInput } from ".";

const meta = preview.meta({
  component: FormInput,
});

export const Text = meta.story({
  args: {
    label: "foo",
    type: "text",
    name: "foo",
  },
});

export const Email = meta.story({
  args: {
    label: "email",
    type: "email",
    name: "email",
  },
});

export const Password = meta.story({
  args: {
    label: "password",
    type: "password",
    name: "password",
  },
});

export const Required = meta.story({
  args: {
    label: "foo",
    type: "text",
    name: "foo",
    required: true,
  },
});

export const Focus = meta.story({
  args: {
    label: "foo",
    type: "text",
    name: "foo",
    focus: true,
  },
});

export const Placeholder = meta.story({
  args: {
    label: "foo",
    type: "email",
    name: "email",
    placeholder: "foo@example.com",
  },
});

export const DefaultValue = meta.story({
  args: {
    label: "foo",
    type: "email",
    name: "email",
    defaultValue: "foo@example.com",
  },
});

export const Feedback = meta.story({
  args: {
    label: "foo",
    type: "text",
    name: "foo",
    feedback: "feedback...",
  },
});

export const InvalidFeedback = meta.story({
  args: {
    label: "foo",
    type: "text",
    name: "foo",
    feedback: "invalid feedback...",
    state: "invalid",
  },
});

export const ValidFeedback = meta.story({
  args: {
    label: "foo",
    type: "text",
    name: "foo",
    feedback: "valid feedback...",
    state: "valid",
  },
});
