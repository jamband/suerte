import Link from "next/link";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <>
      <h1>Not Found</h1>
      <IconInfoCircleFill />
      <span className="ps-1">Page not fonud.</span>
      <div className="mt-5 text-center">
        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Not Found">{page}</Layout>;

export default Page;
