import preview from "../../../.storybook/preview";
import { StorybookLinks } from ".";

const meta = preview.meta({
  component: StorybookLinks,
});

export const Default = meta.story({
  args: {
    links: [
      { slug: "components-foo--default", text: "Foo" },
      { slug: "components-bar--default", text: "Bar" },
      { slug: "components-baz--default", text: "Baz" },
    ],
  },
});
