import { Breadcrumb } from "@/_components/breadcrumb";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Modal",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Modal" />
      <h1>Modal</h1>
      <Content />
    </>
  );
}
