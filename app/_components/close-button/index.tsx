import { Component } from "./component";
import type { Props } from "./types";

export const CloseButton: React.FC<Props> = (props) => {
  let className = "btn-close";
  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} />;
};
