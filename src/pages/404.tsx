import Link from "next/link";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  return (
    <Page title="Not Found">
      <h1>Not Found</h1>
      <IconInfoCircleFill className="w-4 h-4" />
      <span className="ps-1">Page not fonud.</span>
      <div className="mt-5 text-center">
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    </Page>
  );
};

export default View;
