import preview from "../../../.storybook/preview";
import { Gap } from ".";

const meta = preview.meta({
  component: Gap,
});

export const Row = meta.story({
  render: () => (
    <Gap gap="1rem">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </Gap>
  ),
});

export const Column = meta.story({
  render: () => (
    <Gap flow="column" gap="1rem">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </Gap>
  ),
});
