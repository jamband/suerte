import { Breadcrumb } from "@/_components/breadcrumb";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Ratio",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Ratio" />
      <h1>Ratio</h1>
      <Content />
    </>
  );
}
