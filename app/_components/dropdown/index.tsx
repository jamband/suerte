"use client";

import { Component } from "./component";
import type { Props } from "./types";

export const Dropdown: React.FC<Props> = (props) => {
  const onClick = (event: React.MouseEvent) => {
    if (
      event.target instanceof HTMLAnchorElement ||
      event.target instanceof HTMLButtonElement
    ) {
      event.currentTarget.removeAttribute("open");
    }
  };

  const onBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      event.currentTarget.removeAttribute("open");
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.currentTarget.removeAttribute("open");
    }
  };

  return (
    <Component
      {...props}
      onClick={onClick}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  );
};
