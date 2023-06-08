import type { Dispatch, RefObject, SetStateAction } from "react";

export type Props = {
  //
};

export type _Props = Props & {
  code: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  focusRef: RefObject<HTMLInputElement>;
  error: string;
  isSubmit: boolean;
  refreshCode: () => void;
  submit: () => void;
};
