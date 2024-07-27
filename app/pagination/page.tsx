import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-box-image--default", text: "Box Image" },
    { slug: "components-pagination--one-tenth", text: "Pagination" },
  ];

  return (
    <>
      <Breadcrumb text="Pagination" />
      <Heading>Pagination</Heading>
      <Suspense>
        <Content />
      </Suspense>
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
