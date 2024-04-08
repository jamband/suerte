import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button type="button" className={styles.container} onClick={props.onClick}>
    {props.children}
  </button>
);
