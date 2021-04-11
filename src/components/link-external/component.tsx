import { _Props } from "./types";

/* eslint-disable react/jsx-no-target-blank */
export const Component: React.VFC<_Props> = (props) => (
  <a href={props.href} rel={props.rel} {...props} target="_blank">
    {props.children}
  </a>
);
