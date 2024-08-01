import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Tabs",
};

export default function Page() {
  const storybookLinks = [{ slug: "icons-base--icons", text: "Icons" }];

  return (
    <>
      <Breadcrumb text="Tabs" />
      <Heading>Tabs</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
