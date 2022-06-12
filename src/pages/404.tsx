import Link from "next/link";
import { IconInfoCircleFill } from "../icons/info-circle-fill";
import { Page } from "../layouts/page";

export default function View() {
  return (
    <Page title="Not Found">
      <h1>Not Found</h1>
      <IconInfoCircleFill />
      <span className="ps-1">Page not fonud.</span>
      <div className="mt-5 text-center">
        <Link href="/">Back to Home</Link>
      </div>
    </Page>
  );
}
