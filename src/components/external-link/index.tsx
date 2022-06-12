import { Component } from "./component";
import type { Props } from "./types";

export const ExternalLink: React.FC<Props> = (props) => {
  let rel = "noopener noreferrer";
  if (props.rel) {
    rel += ` ${props.rel}`;
  }

  return <Component {...props} rel={rel} />;
};
