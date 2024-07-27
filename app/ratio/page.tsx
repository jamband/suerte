import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Ratio",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-button--default", text: "Button" },
    { slug: "components-button-group--default", text: "Button Group" },
  ];

  return (
    <>
      <Breadcrumb text="Ratio" />
      <Heading>Ratio</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
