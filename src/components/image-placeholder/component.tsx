import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <svg
    className={props.className}
    width="100%"
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Image cap"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    style={{
      textAnchor: "middle",
      userSelect: "none",
      fontSize: props.textSize,
    }}
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill={props.rectFill} />
    <text x="50%" y="50%" fill={props.textFill} dy="0.3em">
      {props.text}
    </text>
  </svg>
);
