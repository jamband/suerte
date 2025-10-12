import { IconXMark } from "@/_icons/x-mark";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type="button"
    className={`${styles.container} ${props.className || ""}`}
    aria-label="close"
    onClick={props.onClick}
  >
    <IconXMark className={styles.icon} />
  </button>
);
