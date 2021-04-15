import { Component } from "./component";
import type { Props } from "./types";

export const Button: React.VFC<Props> = (props) => {
  const type = props.type ? props.type : "button";
  const className = `btn ${props.className}`;

  return <Component {...props} type={type} className={className} />;
};
