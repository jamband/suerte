import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Collapse",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-button--default", text: "Button" },
    { slug: "components-collapse--default", text: "Collapse" },
    { slug: "components-alert--default", text: "Alert" },
  ];

  return (
    <>
      <Breadcrumb text="Collapse" />
      <Heading>Collapse</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
