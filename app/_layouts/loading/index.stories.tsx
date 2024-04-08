import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";
import { Header } from "../header";

const meta = {
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default = {
  render: () => (
    <>
      <Loading />
      <Header />
    </>
  ),
} satisfies Story;
