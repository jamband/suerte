import { Breadcrumb } from "@/_components/breadcrumb";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Progress",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Progress" />
      <h1>Progress</h1>
      <Content />
    </>
  );
}
