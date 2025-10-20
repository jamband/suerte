import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <button
      type="button"
      className={`${styles.button} ${props.buttonStyle}`}
      aria-describedby={props.id}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
    <div
      id={props.id}
      className={`${styles.tooltip} ${props.tooltipStyle}
        ${props.placement === "top" ? styles.top : ""}
        ${props.placement === "right" ? styles.right : ""}
        ${props.placement === "bottom" ? styles.bottom : ""}
        ${props.placement === "left" ? styles.left : ""}`}
      role="tooltip"
    >
      {props.title}
    </div>
  </div>
);
