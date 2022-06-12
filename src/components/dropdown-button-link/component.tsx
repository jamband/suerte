import { Button } from "../button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Button
    type="button"
    className="dropdown-item btn-link"
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);
