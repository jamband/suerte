import { Component } from "./component";
import { Props } from "./types";

export const LinkExternal: React.VFC<Props> = (props) => {
  let rel = "noopener noreferrer";
  if (props.rel) {
    rel += ` ${props.rel}`;
  }

  return <Component {...props} rel={rel} />;
};
