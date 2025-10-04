import { IconChevronDown } from "@/_icons/chevron-down";
import { IconThreeDots } from "@/_icons/three-dots";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <details
    ref={props.containerRef}
    className={styles.container}
    onBlur={props.onBlur}
  >
    <summary
      className={`${styles.button} ${props.className || ""}`}
      aria-label={props.label ? undefined : "more"}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
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
    <div
      ref={props.contentRef}
      className={styles.content}
      onClickCapture={props.onClickCapture}
    >
      {props.children}
    </div>
  </details>
);
