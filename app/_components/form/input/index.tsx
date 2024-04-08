"use client";

import { useFocus } from "@/_hooks/focus";
import { useId } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const FormInput: React.FC<Props> = (props) => {
  const id = useId();
  const { focusRef } = useFocus();

  return (
    <Component
      {...props}
      id={id}
      focusRef={focusRef}
      feedbackId={`${id}-feedback`}
    />
  );
};
