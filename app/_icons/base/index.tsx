import type { Props } from "./types";

export const Icon: React.FC<Props> = (props) => (
  <svg
    className={props.className}
    viewBox={props.viewBox}
    fill="currentColor"
    role="img"
    aria-hidden={true}
  >
    {props.children}
  </svg>
);
