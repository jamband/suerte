import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    className={`${styles.container} ${props.className || ""}`}
    style={props.style}
  >
    <title>{props.text}</title>
    <rect width="100%" height="100%" fill={props.background} />
    <text x="50%" y="50%" fill={props.color} dy="0.3em">
      {props.text}
    </text>
  </svg>
);
