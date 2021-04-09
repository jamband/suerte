import { IconChevronDown } from "~/icons/chevron-down";
import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div className="btn-group">
    <button
      className={props.className}
      type="button"
      id={props.id}
      data-bs-toggle="dropdown"
      aria-expanded={false}
    >
      <span className="pe-1">{props.label}</span>
      <IconChevronDown className="w-3 h-3" />
    </button>
    <div className="dropdown-menu shadow-sm" aria-labelledby={props.id}>
      {props.children}
    </div>
  </div>
);
