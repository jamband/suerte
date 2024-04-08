import { Alert } from "@/_components/alert";
import { Button } from "@/_components/button";
import { Collapse } from "@/_components/collapse";
import { APP_DESCRIPTION } from "@/_constants/app";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <Button
      className={styles.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.show ? "Hide" : "Show"}
    </Button>
    <Collapse show={props.show} onTransitionEnd={props.onTransitionEnd}>
      <Alert type="info" className={styles.alert}>
        {APP_DESCRIPTION}
      </Alert>
    </Collapse>
  </div>
);
