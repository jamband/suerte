import { IconChevronDown } from "~/icons/chevron-down";
import { Button } from "~/components/button";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div className="btn-group">
    <Button
      id={props.id}
      className={props.className}
      data-bs-toggle="dropdown"
      aria-expanded={false}
    >
      <span className="pe-1">{props.label}</span>
      <IconChevronDown className="w-3 h-3" />
    </Button>
    <div className="dropdown-menu shadow-sm" aria-labelledby={props.id}>
      {props.children}
    </div>
  </div>
);
