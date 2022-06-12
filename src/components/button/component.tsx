import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button type={props.type} className={props.className} {...props}>
    {props.children}
  </button>
);
