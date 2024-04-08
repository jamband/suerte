"use client";

import { useId } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Dropdown: React.FC<Props> = (props) => {
  const id = useId();

  const onClick = (event: React.MouseEvent) => {
    const element = event.currentTarget;
    if (element.hasAttribute("open")) {
      setTimeout(() => {
        element.removeAttribute("open");
      }, 100);
    }
  };

  const onBlur = (event: React.FocusEvent) => {
    const element = event.currentTarget;
    if (
      element.hasAttribute("open") &&
      id !== event.relatedTarget?.parentElement?.parentElement?.id
    ) {
      setTimeout(() => {
        element.removeAttribute("open");
      }, 100);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      const element = event.currentTarget;

      if (element.hasAttribute("open")) {
        element.removeAttribute("open");
      }
    }
  };

  return (
    <Component
      {...props}
      id={id}
      onClick={onClick}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  );
};
