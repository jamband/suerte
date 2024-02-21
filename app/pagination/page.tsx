import { Breadcrumb } from "@/_components/breadcrumb";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Content } from "./_components/content";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Pagination" />
      <h1 className="mb-6">Pagination</h1>
      <Suspense>
        <Content />
      </Suspense>
    </>
  );
}
