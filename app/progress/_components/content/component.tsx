import { Button } from "@/_components/button";
import { ButtonGroup } from "@/_components/button-group";
import { Progress } from "@/_components/progress";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <ButtonGroup className={styles.buttonGroup}>
      <Button
        className={styles.button}
        onClick={props.action}
        disabled={props.bar === 100}
      >
        {props.actionText}
      </Button>
      <Button
        className={styles.button}
        onClick={props.clear}
        disabled={props.bar === 0}
      >
        Clear
      </Button>
    </ButtonGroup>
    <div className={styles.progressContainer}>
      <Progress
        className={styles.progress}
        now={props.bar}
        min={0}
        max={100}
        text={props.progressText}
      />
    </div>
    <div className={styles.progressText}>{props.progressText}</div>
  </>
);
