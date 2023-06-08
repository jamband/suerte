import { Breadcrumb } from "@/_layouts/breadcrumb";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Form",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Form" />
      <h1>Form</h1>
      <Content />
    </>
  );
}
