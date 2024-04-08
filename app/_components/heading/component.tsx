import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <h1 className={styles.container}>{props.children}</h1>
);
