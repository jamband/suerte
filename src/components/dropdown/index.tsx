import { useDropdown } from "~/hooks/dropdown";
import { Component } from "./component";
import type { Props } from "./types";

export const Dropdown: React.VFC<Props> = (props) => {
  useDropdown();

  let className = "btn dropdown-toggle";
  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} />;
};
