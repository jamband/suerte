import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    className={props.className}
    role="progressbar"
    style={{ width: `${props.now}%` }}
    aria-valuenow={props.now}
    aria-valuemin={props.min}
    aria-valuemax={props.max}
    aria-valuetext={props.text}
  />
);
