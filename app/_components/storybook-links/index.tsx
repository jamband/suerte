import { Component } from "./component";
import type { Props } from "./types";

export const StorybookLinks: React.FC<Props> = (props) => {
  const storybookLink = "https://main--6072ecf8d15c7c002158718a.chromatic.com";

  return <Component {...props} storybookLink={storybookLink} />;
};
