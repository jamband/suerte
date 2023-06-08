"use client";

import { useAlert } from "@/alert/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Alert: React.FC<Props> = (props) => {
  useAlert();

  const className = `alert ${props.className} alert-dismissible fade`;

  return <Component {...props} className={className} />;
};
