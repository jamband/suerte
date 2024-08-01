import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Toast",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-button--default", text: "Button" },
    { slug: "components-alert--default", text: "Alert" },
    { slug: "icons-base--icons", text: "Icons" },
    { slug: "layouts-notification--default", text: "Notification" },
  ];

  return (
    <>
      <Breadcrumb text="Toast" />
      <Heading>Toast</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
