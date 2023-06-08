import { Component } from "./component";
import type { Props } from "./types";

export const Layout: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
