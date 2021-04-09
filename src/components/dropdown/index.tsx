import { useDropdown } from "~/hooks/dropdown";
import { Props } from "./types";
import { Component } from "./component";

export const Dropdown = (props: Props) => {
  useDropdown();

  let className = "btn dropdown-toggle";
  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} />;
};
