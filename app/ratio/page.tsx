import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import type { Metadata } from "next";
import { Ratio } from "./_components/ratio";

export const metadata: Metadata = {
  title: "Ratio",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Ratio" />
      <Heading>Ratio</Heading>
      <Ratio />
    </>
  );
}
