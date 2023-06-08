"use client";

import { useEffect, useState } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Content: React.FC<Props> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [bar, setBar] = useState(0);

  const clear = () => {
    setBar(0);
    setIsActive(false);
  };

  useEffect(() => {
    let intervalId: number;

    if (isActive) {
      intervalId = window.setInterval(() => {
        if (bar === 100) {
          return;
        }
        setBar((previous) => previous + 1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isActive, bar]);

  return (
    <Component
      {...props}
      isActive={isActive}
      setIsActive={setIsActive}
      bar={bar}
      clear={clear}
    />
  );
};
