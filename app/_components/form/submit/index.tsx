"use client";

import { useFormStatus } from "react-dom";
import { Component } from "./component";
import type { Props } from "./types";

export const FormSubmit: React.FC<Props> = (props) => {
  const { pending } = useFormStatus();

  return <Component {...props} pending={pending} />;
};
