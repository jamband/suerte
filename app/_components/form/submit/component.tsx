import { Button } from "@/_components/button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Button
    type="submit"
    className={props.className}
    disabled={props.disabled || props.pending}
  >
    {props.children}
  </Button>
);
