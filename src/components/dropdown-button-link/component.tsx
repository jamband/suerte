import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <button
    type="button"
    className="dropdown-item btn-link"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
