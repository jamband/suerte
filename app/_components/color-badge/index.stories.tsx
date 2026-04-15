import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";
import { Gap } from "../gap";
import { ColorBadge } from ".";

const onClick = fn();
const meta = preview.meta({
  component: ColorBadge,
  args: { onClick },
});

export const Default = meta.story({
  render: () => (
    <Gap gap="1rem">
      <ColorBadge onClick={onClick} color="#ed7c7c" text="red" />
      <ColorBadge onClick={onClick} color="#4b9c69" text="green" />
      <ColorBadge onClick={onClick} color="#74a7e6" text="blue" />
    </Gap>
  ),
});
