import type { Meta, StoryObj } from "@storybook/react";
import { BoxImage } from ".";
import { Gap } from "../gap";

const meta = {
  component: BoxImage,
} satisfies Meta<typeof BoxImage>;

export default meta;
type Story = StoryObj<typeof BoxImage>;

export const Default = {
  render: () => (
    <Gap gap="1rem">
      <BoxImage size={30} color="#ed7c7c" title="red" />
      <BoxImage size={60} color="#4b9c69" title="green" />
      <BoxImage size={90} color="#74a7e6" title="blue" />
    </Gap>
  ),
} satisfies Story;
