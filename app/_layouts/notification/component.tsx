import { CloseButton } from "@/_components/close-button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    ref={props.containerRef}
    className={styles.container}
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div className={styles.notification}>{props.notification}</div>
    <CloseButton className={styles.close} onClick={props.close} />
  </div>
);
