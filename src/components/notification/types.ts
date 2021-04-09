import { RefObject } from "react";

export type _Props = {
  message: string;
  notificationRef: RefObject<HTMLDivElement>;
  clear: () => void;
};
