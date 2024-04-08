export type InputState = undefined | "invalid" | "valid";

export type _Props = {
  action: (formData: FormData) => void;
  code: string;
  input: string;
  inputState: InputState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  feedback: string;
  reset: () => void;
};
