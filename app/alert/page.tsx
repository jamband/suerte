import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Alert",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-button--default", text: "Button" },
    { slug: "icons-base--icons", text: "Icons" },
    { slug: "components-close-button--default", text: "Close Button" },
    { slug: "components-alert--default", text: "Alert" },
  ];

  return (
    <>
      <Breadcrumb text="Alert" />
      <Heading>Alert</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
