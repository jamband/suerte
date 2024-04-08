import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import type { Metadata } from "next";
import { Collapse } from "./_components/collapse";

export const metadata: Metadata = {
  title: "Collapse",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Collapse" />
      <Heading>Collapse</Heading>
      <Collapse />
    </>
  );
}
