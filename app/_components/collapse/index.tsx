"use client";

import { useEffect, useRef } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Collapse: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const main = mainRef.current;

    if (container && main) {
      if (props.show) {
        main.style.display = "block";
        container.style.height = `${container.scrollHeight}px`;
      } else {
        container.style.height = "0";
        setTimeout(() => (main.style.display = "none"), 300);
      }
    }
  }, [props.show]);

  return <Component {...props} containerRef={containerRef} mainRef={mainRef} />;
};
