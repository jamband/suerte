import { IconX } from "@/_icons/x";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type="button"
    className={`${styles.container} ${props.className || ""}`}
    aria-label="close"
    onClick={props.onClick}
  >
    <IconX className={styles.icon} />
  </button>
);
