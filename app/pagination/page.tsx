import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import type { Metadata } from "next";
import { Pagination } from "./_components/pagination";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Pagination" />
      <Heading>Pagination</Heading>
      <Pagination />
    </>
  );
}
