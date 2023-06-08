"use client";

import { useCollapse } from "@/collapse/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Content: React.FC<Props> = (props) => {
  const collapse = useCollapse();

  return <Component {...props} collapse={collapse} />;
};
