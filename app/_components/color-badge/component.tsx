import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type="button"
    className={`${styles.container} ${props.className || ""}`}
    onClick={props.onClick}
  >
    <svg
      className={styles.main}
      width="30"
      height="30"
      role="img"
      aria-label={props.text}
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{props.text}</title>
      <rect width="100%" height="100%" fill={props.color}></rect>
    </svg>
    <div className={styles.text}>{props.text}</div>
  </button>
);
