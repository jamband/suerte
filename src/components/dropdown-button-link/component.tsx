import { Button } from "~/components/button";
import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <Button className="dropdown-item btn-link" onClick={props.onClick}>
    {props.children}
  </Button>
);
