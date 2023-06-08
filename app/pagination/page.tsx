import { Breadcrumb } from "@/_layouts/breadcrumb";
import type { Metadata } from "next";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Pagination" />
      <h1 className="mb-6">Pagination</h1>
      <Content />
    </>
  );
}
