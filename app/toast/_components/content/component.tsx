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
    <Alert type="info">
      <p>
        On mobile, notifications will appear at the top of the screen, on other
        devices they will appear in the top right corner.
      </p>
      <p>Toast persists even if you move to other pages.</p>
    </Alert>
  </div>
);
