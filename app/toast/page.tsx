import { Breadcrumb } from "@/_layouts/breadcrumb";
import type { Metadata } from "next";
import { ActionButton } from "./_components/action-button";

export const metadata: Metadata = {
  title: "Toast",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Toast" />
      <h1>Toast</h1>
      <ActionButton />
    </>
  );
}
