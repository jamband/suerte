import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    ref={props.containerRef}
    className={styles.container}
    onTransitionEnd={props.onTransitionEnd}
  >
    <div ref={props.mainRef} className={styles.main}>
      {props.children}
    </div>
  </div>
);
