import { useDropdown } from "@/dropdown/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Dropdown: React.FC<Props> = (props) => {
  const { ready } = useDropdown();

  let className = "btn dropdown-toggle";
  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} ready={ready} />;
};
