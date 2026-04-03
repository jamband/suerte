"use client";

import { useRef } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Dropdown: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (containerRef.current?.open) {
      if (event.key === "Escape") {
        containerRef.current.removeAttribute("open");
      }
    }
  };

  const onBlur = (event: React.FocusEvent) => {
    if (containerRef.current?.open) {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        containerRef.current.removeAttribute("open");
      }
    }
  };

  const onClickCapture = (event: React.MouseEvent) => {
    event.preventDefault();
    if (
      event.target instanceof HTMLAnchorElement ||
      event.target instanceof HTMLButtonElement
    ) {
      if (containerRef.current?.open) {
        containerRef.current.removeAttribute("open");
      }
    }
  };

  return (
    <Component
      {...props}
      containerRef={containerRef}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      contentRef={contentRef}
      onClickCapture={onClickCapture}
    />
  );
};
