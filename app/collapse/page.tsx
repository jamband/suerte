import type { Metadata } from "next";
import { Content } from "./_components/content";
import { Breadcrumb } from "@/_components/breadcrumb";

export const metadata: Metadata = {
  title: "Collapse",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Collapse" />
      <h1>Collapse</h1>
      <Content />
    </>
  );
}
