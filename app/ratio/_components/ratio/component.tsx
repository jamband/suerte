import { Button } from "@/_components/button";
import { ButtonGroup } from "@/_components/button-group";
import { TextImage } from "@/_components/text-image";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <ButtonGroup className={styles.buttonGroup}>
      <Button
        className={styles.button}
        onClick={props.onClick}
        disabled={props.disabled("21x9")}
      >
        21x9
      </Button>
      <Button
        className={styles.button}
        onClick={props.onClick}
        disabled={props.disabled("16x9")}
      >
        16x9
      </Button>
      <Button
        className={styles.button}
        onClick={props.onClick}
        disabled={props.disabled("4x3")}
      >
        4x3
      </Button>
      <Button
        className={styles.button}
        onClick={props.onClick}
        disabled={props.disabled("1x1")}
      >
        1x1
      </Button>
    </ButtonGroup>
    <TextImage
      text={props.text}
      color="#6b7280"
      background="#e5e7eb"
      className={styles.textImage}
      style={{ aspectRatio: props.aspectRatio }}
    />
  </>
);
