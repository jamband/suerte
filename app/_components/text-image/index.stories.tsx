import type { Meta, StoryObj } from "@storybook/react";
import { TextImage } from ".";
import { Gap } from "../gap";

const meta = {
  component: TextImage,
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof TextImage>;

export const Default = {
  render: () => (
    <Gap gap="1rem">
      <TextImage text="red" color="#fff" background="#ed7c7c" />
      <TextImage text="green" color="#fff" background="#4b9c69" />
      <TextImage text="blue" color="#fff" background="#74a7e6" />
    </Gap>
  ),
} satisfies Story;
