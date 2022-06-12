import { IconChevronDown } from "../../icons/chevron-down";
import { Button } from "../button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className="btn-group">
    <Button
      id={props.id}
      className={props.className}
      data-bs-toggle="dropdown"
      aria-expanded={false}
    >
      <span className="pe-1">{props.label}</span>
      <IconChevronDown
        style={{ height: "0.75em", width: "0.75em", verticalAlign: "0em" }}
      />
    </Button>
    <div className="dropdown-menu shadow-sm" aria-labelledby={props.id}>
      {props.children}
    </div>
  </div>
);
