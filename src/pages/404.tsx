import Link from "next/link";
import { IconInfoCircleFill } from "../icons/info-circle-fill";
import { Layout } from "../layouts/layout";

export default function Page() {
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
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Not Found">{page}</Layout>
);
