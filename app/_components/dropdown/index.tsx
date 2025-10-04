"use client";

import { useRef } from "react";
import { Component } from "./component";
import styles from "./styles.module.css";
import type { Props } from "./types";

export const Dropdown: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const open = () => {
    contentRef.current?.classList.add(styles.transition);
    requestAnimationFrame(() => {
      containerRef.current?.setAttribute("open", "true");
    });
  };

  const close = () => {
    contentRef.current?.classList.remove(styles.transition);
    contentRef.current?.addEventListener(
      "transitionend",
      () => {
        containerRef.current?.removeAttribute("open");
      },
      { once: true },
    );
  };

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (containerRef.current?.open) {
      close();
    } else {
      open();
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (containerRef.current?.open) {
      if (event.key === "Escape") {
        close();
      }
    }
  };

  const onBlur = (event: React.FocusEvent) => {
    if (containerRef.current?.open) {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        close();
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
        close();
      }
    }
  };

  return (
    <Component
      {...props}
      containerRef={containerRef}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
      contentRef={contentRef}
      onClickCapture={onClickCapture}
    />
  );
};
