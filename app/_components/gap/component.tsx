import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    style={{
      display: "flex",
      flexFlow: props.flow,
      alignContent: "flex-start",
      gap: props.gap,
    }}
  >
    {props.children}
  </div>
);
