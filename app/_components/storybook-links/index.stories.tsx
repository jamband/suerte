import type { Meta, StoryObj } from "@storybook/react";
import { StorybookLinks } from ".";

const meta = {
  component: StorybookLinks,
} satisfies Meta<typeof StorybookLinks>;

export default meta;
type Story = StoryObj<typeof StorybookLinks>;

export const Default = {
  render: () => (
    <StorybookLinks
      links={[
        { slug: "components-foo--default", text: "Foo" },
        { slug: "components-bar--default", text: "Bar" },
        { slug: "components-baz--default", text: "Baz" },
      ]}
    />
  ),
} satisfies Story;
