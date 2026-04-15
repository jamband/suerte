import preview from "../../../.storybook/preview";
import { Button } from "../button";
import { ButtonGroup } from ".";

const meta = preview.meta({
  component: ButtonGroup,
});

export const Default = meta.story({
  render: () => (
    <ButtonGroup>
      <Button>foo</Button>
      <Button>bar</Button>
      <Button>baz</Button>
    </ButtonGroup>
  ),
});
