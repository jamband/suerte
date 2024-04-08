import { FormFeedback } from "../feedback";
import { FormLabel } from "../label";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`${styles.container} ${props.className || ""}`}>
    <FormLabel htmlFor={props.id} required={props.required}>
      {props.label}
    </FormLabel>
    <input
      ref={props.focus ? props.focusRef : undefined}
      type={props.type}
      name={props.name}
      id={props.id}
      className={`${styles.input} ${props.inputClass || ""}
        ${props.state === "invalid" ? styles.invalidFeedback : ""}
        ${props.state === "valid" ? styles.validFeedback : ""}
      `}
      value={props.value}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      aria-required={props.required}
      aria-describedby={props.feedbackId}
    />
    {!!props.feedback && (
      <FormFeedback
        id={props.feedbackId}
        state={props.state}
        message={props.feedback}
      />
    )}
  </fieldset>
);
