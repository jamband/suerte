import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div className={props.className}>{props.children}</div>
);