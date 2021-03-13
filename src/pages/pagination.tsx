import { useRouter } from "next/router";
import { Pagination } from "~/components/pagination";
import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  const router = useRouter();

  const data = ".".repeat(26);
  const currentPage = Number(router.query.page) || 1;
  const pageCount = data.length;
  const content = data.slice(0, currentPage);

  return (
    <Page title="Pagination">
      <h1>Pagination</h1>
      <p className="text-center">{content}</p>
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </Page>
  );
};

export default View;
