import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <button type={props.type} className={props.className} {...props}>
    {props.children}
  </button>
);
