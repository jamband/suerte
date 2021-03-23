import { APP_NAME } from "~/constants/app";
import { Component } from "./component";

export const Footer: React.VFC = () => {
  const appName = APP_NAME;

  return <Component appName={appName} />;
};
