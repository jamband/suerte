import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
      flexDirection: props.direction ? "column" : "row",
      gap: props.gap,
    }}
  >
    {props.children}
  </div>
);
