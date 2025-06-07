import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Dropdown } from ".";
import { DropdownAction } from "./action";
import { DropdownDivider } from "./divider";

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default = {
  render: () => (
    <Dropdown label="dropdown">
      <DropdownAction onClick={fn()}>foo</DropdownAction>
      <DropdownDivider />
      <DropdownAction onClick={fn()}>bar</DropdownAction>
      <DropdownAction onClick={fn()}>baz</DropdownAction>
    </Dropdown>
  ),
} satisfies Story;

export const WithoutLabel = {
  render: () => (
    <Dropdown>
      <DropdownAction onClick={fn()}>foo</DropdownAction>
      <DropdownDivider />
      <DropdownAction onClick={fn()}>bar</DropdownAction>
      <DropdownAction onClick={fn()}>baz</DropdownAction>
    </Dropdown>
  ),
} satisfies Story;
