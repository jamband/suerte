import type { Props as FeedbackProps } from "../feedback/types";

export type Props = {
  className?: string;
  label: string;
  type: "email" | "password" | "text";
  name: string;
  inputClass?: string;
  feedback?: string;
  state?: "invalid" | "valid";
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  focus?: boolean;
  required?: boolean;
};

export type _Props = Props & {
  id: string;
  focusRef: React.RefObject<HTMLInputElement>;
  feedbackId: FeedbackProps["id"];
};
