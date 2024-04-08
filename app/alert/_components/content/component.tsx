import { Alert } from "@/_components/alert";
import { Button } from "@/_components/button";
import { APP_DESCRIPTION } from "@/_constants/app";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <Button className={styles.reload} onClick={props.reload}>
      Reload
    </Button>
    <Alert type="info" className={styles.alert} dismissible>
      {APP_DESCRIPTION}
    </Alert>
  </div>
);
