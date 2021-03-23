import { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <footer className="fixed-bottom py-3 text-center bg-light">
    {props.appName}
  </footer>
);
