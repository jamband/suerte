import { useAlert } from "~/hooks/alert";
import { Component } from "./component";
import type { Props } from "./types";

export const Alert: React.VFC<Props> = (props) => {
  useAlert();

  const className = `alert ${props.className} alert-dismissible fade`;

  return <Component {...props} className={className} />;
};
