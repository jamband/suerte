import { Button } from "@/_components/button";
import { ButtonGroup } from "@/_components/button-group";
import { FormInput } from "@/_components/form/input";
import { FormSubmit } from "@/_components/form/submit";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    <div className={styles.code}>{props.code}</div>
    <form action={props.action}>
      <FormInput
        label="Code"
        type="text"
        name="code"
        feedback={props.feedback || "Please enter the code above."}
        state={props.inputState}
        className={styles.fieldset}
        value={props.input}
        onChange={props.onChange}
        required
      />
      <ButtonGroup className={styles.buttons}>
        <Button className={styles.button} onClick={props.reset}>
          Reset
        </Button>
        <FormSubmit className={styles.button} disabled={!props.input}>
          submit
        </FormSubmit>
      </ButtonGroup>
    </form>
  </div>
);
