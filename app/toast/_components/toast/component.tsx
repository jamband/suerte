import { Alert } from "@/_components/alert";
import { Button } from "@/_components/button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <Button
      className={styles.button}
      onClick={props.showNotification}
      disabled={props.disabled}
    >
      Show
    </Button>
    <Alert type="info" className={styles.alert}>
      Toast persists even if you move to other pages.
    </Alert>
  </div>
);
