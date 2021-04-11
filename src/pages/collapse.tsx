import { Button } from "~/components/button";
import { useCollapse } from "~/hooks/collapse";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { Page } from "~/layouts/page";

export default function View() {
  const { isCollapsed, toggleCollapse } = useCollapse();

  return (
    <Page title="Collapse">
      <h1>Collapse</h1>
      <Button
        className="btn-primary btn-sm w-24"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapse"
        onClick={toggleCollapse}
      >
        {isCollapsed ? "Show" : "Hide"}
      </Button>
      <div id="collapseExample" className="collapse mt-3">
        <div className="p-3 shadow-sm bg-light rounded">
          <IconInfoCircleFill className="w-4 h-4" />
          <span className="ps-1">
            Toggle the visibility of content across your project.
          </span>
        </div>
      </div>
    </Page>
  );
}
