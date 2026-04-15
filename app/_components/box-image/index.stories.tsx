import preview from "../../../.storybook/preview";
import { Gap } from "../gap";
import { BoxImage } from ".";

const meta = preview.meta({
  component: BoxImage,
});

export const Default = meta.story({
  render: () => (
    <Gap gap="1rem">
      <BoxImage size={30} color="#ed7c7c" title="red" />
      <BoxImage size={60} color="#4b9c69" title="green" />
      <BoxImage size={90} color="#74a7e6" title="blue" />
    </Gap>
  ),
});
