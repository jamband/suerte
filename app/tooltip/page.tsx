import type { Metadata } from "next";
import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Tooltip",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-breadcrumb--on-foo-page", text: "Breadcrumb" },
    { slug: "components-heading--default", text: "Heading" },
    { slug: "components-button--default", text: "Button" },
    { slug: "components-button-group--default", text: "ButtonGroup" },
    { slug: "components-switch--default", text: "Switch" },
    { slug: "components-tooltip--default", text: "Tooltip" },
  ];

  return (
    <>
      <Breadcrumb text="Tooltip" />
      <Heading>Tooltip</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
