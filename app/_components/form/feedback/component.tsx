import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {!props.state && (
      <div id={props.id} className={styles.container}>
        {props.message}
      </div>
    )}
    {props.state === "invalid" && (
      <div id={props.id} className={styles.invalid}>
        {props.message}
      </div>
    )}
    {props.state === "valid" && (
      <div id={props.id} className={styles.valid}>
        {props.message}
      </div>
    )}
  </>
);
