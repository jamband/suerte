import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from ".";
import { Button } from "../button";

const meta = {
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default = {
  render: () => (
    <ButtonGroup>
      <Button>foo</Button>
      <Button>bar</Button>
      <Button>baz</Button>
    </ButtonGroup>
  ),
} satisfies Story;
