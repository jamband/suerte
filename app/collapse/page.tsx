import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Collapse",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Collapse" />
      <Heading>Collapse</Heading>
      <Content />
    </>
  );
}
