import preview from "../../../.storybook/preview";
import { Gap } from "../gap";
import { Alert } from ".";

const meta = preview.meta({
  component: Alert,
});

export const Default = meta.story({
  render: () => (
    <Gap flow="column" gap="1rem">
      <Alert>this is a test.</Alert>
      <Alert type="info">this is a test.</Alert>
      <Alert dismissible>this is a test.</Alert>
      <Alert>{"this is a test. ".repeat(10).trim()}</Alert>
      <Alert type="info">{"this is a test. ".repeat(10).trim()}</Alert>
      <Alert type="info" dismissible>
        {"this is a test. ".repeat(10).trim()}
      </Alert>
      <Alert type="info" dismissible>
        <p>{"this is a test. ".repeat(5).trim()}</p>
        <p>{"this is a test. ".repeat(5).trim()}</p>
      </Alert>
    </Gap>
  ),
});
