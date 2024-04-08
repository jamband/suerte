import { Breadcrumb } from "@/_components/breadcrumb";
import { Heading } from "@/_components/heading";
import type { Metadata } from "next";
import { Progress } from "./_components/progress";

export const metadata: Metadata = {
  title: "Progress",
};

export default function Page() {
  return (
    <>
      <Breadcrumb text="Progress" />
      <Heading>Progress</Heading>
      <Progress />
    </>
  );
}
