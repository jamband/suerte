import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    className={props.className}
    viewBox={`0 0 ${props.size} ${props.size}`}
    role="img"
    aria-label={props.title}
    aria-hidden={props.disabled}
  >
    <rect
      width={props.size}
      height={props.size}
      rx="2"
      ry="2"
      fill={props.color}
      className={styles.rect}
    />
  </svg>
);
