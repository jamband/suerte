import { Button } from "~/components/button";
import { useCollapse } from "~/hooks/collapse";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  const collapse = useCollapse();

  return (
    <>
      <h1>Collapse</h1>
      <Button
        type="button"
        className="btn-primary btn-sm w-25"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapse"
        onClick={collapse.toggle}
        disabled={collapse.disabled || !collapse.ready}
      >
        {collapse.isCollapsed ? "Show" : "Hide"}
      </Button>
      <div ref={collapse.ref} id="collapseExample" className="collapse mt-3">
        <div className="p-3 shadow-sm bg-light rounded">
          <IconInfoCircleFill
            style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
          />
          <span className="ms-1">
            Toggle the visibility of content across your project.
          </span>
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Collapse">{page}</Layout>;

export default Page;
