import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import { StorybookLinks } from "@/_components/storybook-links";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Form",
};

export default function Page() {
  const storybookLinks = [
    { slug: "components-form-input--required", text: "Form Input Required" },
    { slug: "components-form-input--feedback", text: "Form Input Feedback" },
    { slug: "components-button--default", text: "Button" },
    { slug: "components-button-group--default", text: "Button Group" },
  ];

  return (
    <>
      <Breadcrumb text="Form" />
      <Heading>Form</Heading>
      <Content />
      <StorybookLinks links={storybookLinks} />
    </>
  );
}
