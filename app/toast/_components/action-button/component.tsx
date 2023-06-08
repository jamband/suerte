import { Button } from "@/_components/button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Button
    type="button"
    className="btn-primary"
    onClick={props.showNotification}
  >
    Show
  </Button>
);
