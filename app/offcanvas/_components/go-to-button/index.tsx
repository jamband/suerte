"use client";

import { useOffcanvas } from "@/offcanvas/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const GoToButton: React.FC<Props> = (props) => {
  const offcanvas = useOffcanvas();

  return <Component {...props} offcanvas={offcanvas} />;
};
