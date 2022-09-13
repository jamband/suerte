import { useRouter } from "next/router";
import { Pagination } from "~/components/pagination";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  const router = useRouter();

  const data = ".".repeat(26);
  const currentPage = Number(router.query.page) || 1;
  const pageCount = data.length;
  const content = data.slice(0, currentPage);

  return (
    <>
      <h1>Pagination</h1>
      <p className="text-center">{content}</p>
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </>
  );
};

Page.getLayout = (page) => <Layout title="Pagination">{page}</Layout>;

export default Page;
