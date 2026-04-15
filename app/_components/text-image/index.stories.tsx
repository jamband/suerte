import preview from "../../../.storybook/preview";
import { Gap } from "../gap";
import { TextImage } from ".";

const meta = preview.meta({
  component: TextImage,
});

export const Default = meta.story({
  render: () => (
    <Gap gap="1rem">
      <TextImage text="red" color="#fff" background="#ed7c7c" />
      <TextImage text="green" color="#fff" background="#4b9c69" />
      <TextImage text="blue" color="#fff" background="#74a7e6" />
    </Gap>
  ),
});
