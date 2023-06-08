import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "./_components/breadcrumb";
import { IconInfoCircleFill } from "./_icons/info-circle-fill";

/**
 * note: metadata for this file is not working yet
 * next.js version: 13.4.4
 */
export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <>
      <Breadcrumb text="Not Found" />
      <h1>Not Found</h1>
      <IconInfoCircleFill
        style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
      />
      <span className="ps-1">Page not fonud.</span>
      <div className="mt-5 text-center">
        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}
