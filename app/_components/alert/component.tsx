import { IconInfoCircleFill } from "@/_icons/info-circle-fill";
import { CloseButton } from "../close-button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${styles.container} ${props.className || ""}`} role="alert">
    {props.type === "info" && (
      <div className={styles.type}>
        <IconInfoCircleFill className={styles.typeIcon} />
      </div>
    )}
    <div className={styles.main}>{props.children}</div>
    {props.dismissible && (
      <CloseButton className={styles.close} onClick={props.onClick} />
    )}
  </div>
);
