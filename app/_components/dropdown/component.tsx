import { IconAngleDown } from "@/_icons/angle-down";
import { IconEllipsis } from "@/_icons/ellipsis";
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
          <IconAngleDown className={styles.caret} />
        </div>
      ) : (
        <IconEllipsis className={styles.dots} />
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
