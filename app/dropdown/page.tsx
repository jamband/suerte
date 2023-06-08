import { Breadcrumb } from "@/_components/breadcrumb";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Dropdown",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Dropdown" />
      <h1>Dropdown</h1>
      <Content />
    </>
  );
}
