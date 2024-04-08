import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import type { Metadata } from "next";
import { Toast } from "./_components/toast";

export const metadata: Metadata = {
  title: "Toast",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Toast" />
      <Heading>Toast</Heading>
      <Toast />
    </>
  );
}
