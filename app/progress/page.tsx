import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Progress",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-button--default", text: "Button" },
    { slug: "components-button-group--default", text: "Button Group" },
    { slug: "components-progress--default", text: "Progress" },
  ];

  return (
    <>
      <Breadcrumb text="Progress" />
      <Heading>Progress</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
