import type { Dispatch, SetStateAction } from "react";

export type Props = {
  //
};

export type _Props = Props & {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  bar: number;
  clear: () => void;
};
