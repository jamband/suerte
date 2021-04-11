import { AnchorHTMLAttributes } from "react";

export type Props = {
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type _Props = Props;
