import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Dropdown",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-dropdown--default", text: "Dropdown" },
    { slug: "components-dropdown-action--default", text: "Dropdown Action" },
    { slug: "components-dropdown-divider--default", text: "Dropdown Divider" },
    { slug: "icons-base--icons", text: "Icons" },
  ];

  return (
    <>
      <Breadcrumb text="Dropdown" />
      <Heading>Dropdown</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
