"use client";

import { Component } from "./component";
import type { Props } from "./types";

export const ReloadButton: React.FC<Props> = (props) => {
  const reload = () => location.reload();

  return <Component {...props} reload={reload} />;
};
