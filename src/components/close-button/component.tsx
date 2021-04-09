import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <button
    type="button"
    className={props.className}
    aria-label="Close"
    onClick={props.onClick}
    data-bs-dismiss={props.dismiss}
  />
);
