import { APP_NAME } from "~/constants/app";
import { Component } from "./component";

export const Header: React.VFC = () => {
  const appName = APP_NAME;

  return <Component appName={appName} />;
};
