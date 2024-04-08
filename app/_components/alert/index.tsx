"use client";

import { Component } from "./component";
import type { Props } from "./types";

export const Alert: React.FC<Props> = (props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const container = event.currentTarget.parentElement;

    if (container && container.getAttribute("role") === "alert") {
      container.style.opacity = "0";

      container.addEventListener("transitionend", () => {
        container.remove();
      });
    }
  };

  return <Component {...props} onClick={onClick} />;
};
