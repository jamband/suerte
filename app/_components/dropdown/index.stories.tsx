import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";
import { Dropdown } from ".";
import { DropdownAction } from "./action";
import { DropdownDivider } from "./divider";

const meta = preview.meta({
  component: Dropdown,
});

export const Default = meta.story({
  render: () => (
    <Dropdown label="dropdown">
      <DropdownAction onClick={fn()}>foo</DropdownAction>
      <DropdownDivider />
      <DropdownAction onClick={fn()}>bar</DropdownAction>
      <DropdownAction onClick={fn()}>baz</DropdownAction>
    </Dropdown>
  ),
});

export const WithoutLabel = meta.story({
  render: () => (
    <Dropdown>
      <DropdownAction onClick={fn()}>foo</DropdownAction>
      <DropdownDivider />
      <DropdownAction onClick={fn()}>bar</DropdownAction>
      <DropdownAction onClick={fn()}>baz</DropdownAction>
    </Dropdown>
  ),
});
