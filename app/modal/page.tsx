import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Modal",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-text-image--default", text: "Text Image" },
    { slug: "components-color-badge--default", text: "Color Badge" },
    { slug: "icons-base--icons", text: "Icons" },
    { slug: "components-close-button--default", text: "Close Button" },
  ];

  return (
    <>
      <Breadcrumb text="Modal" />
      <Heading>Modal</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
