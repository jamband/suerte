import { IconChevronDown } from "@/_icons/chevron-down";
import { IconThreeDots } from "@/_icons/three-dots";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <details
    className={styles.container}
    onClick={props.onClick}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
  >
    <summary
      className={`${styles.button} ${props.className || ""}`}
      aria-label={props.label ? undefined : "more"}
    >
      {props.label ? (
        <div className={styles.labelContainer}>
          {props.label}
          <IconChevronDown className={styles.caret} />
        </div>
      ) : (
        <IconThreeDots className={styles.dots} />
      )}
    </summary>
    <div className={styles.content}>{props.children}</div>
  </details>
);
