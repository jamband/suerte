import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type="button"
    role="switch"
    className={`${styles.container} ${props.className || ""}`}
    aria-checked={props.checked}
    onClick={props.onClick}
  >
    <div className={styles.off}>off</div>
    <div className={styles.on}>on</div>
  </button>
);
