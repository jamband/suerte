import { Button } from "@/_components/button";
import { IconInfoCircleFill } from "@/_icons/info-circle-fill";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Button
      type="button"
      className="btn-primary btn-sm w-25"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapse"
      onClick={props.collapse.toggle}
      disabled={props.collapse.disabled || !props.collapse.ready}
    >
      {props.collapse.isCollapsed ? "Show" : "Hide"}
    </Button>
    <div
      ref={props.collapse.ref}
      id="collapseExample"
      className="collapse mt-3"
    >
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
