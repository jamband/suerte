import type { CSSProperties } from "react";

export type Props = {
  flow?: CSSProperties["flexFlow"];
  gap: CSSProperties["gap"];
  children: React.ReactNode;
};

export type _Props = Props;
