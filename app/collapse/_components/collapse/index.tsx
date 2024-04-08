"use client";

import { useState } from "react";
import { Component } from "./component";

export const Collapse: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);

  const onClick = () => {
    setDisabled(true);
    setShow((previous) => !previous);
  };

  const onTransitionEnd = () => {
    setDisabled(false);
  };

  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      show={show}
      onTransitionEnd={onTransitionEnd}
    />
  );
};
