"use client";

import { useEffect, useState } from "react";
import { Component } from "./component";

export const Progress: React.FC = () => {
  const [bar, setBar] = useState(0);
  const [active, setActive] = useState(false);

  const clear = () => {
    setBar(0);
    setActive(false);
  };

  const action = () => {
    setActive((previous) => !previous);
  };

  const actionText = () => {
    if (bar === 0 || bar === 100) return "Start";
    if (active && bar !== 0) return "Pause";
    return "Continue";
  };

  const progressText = () => {
    if (bar === 100) return "Completed!";
    if (bar !== 100 && active) return `Loading... ${bar}%`;
    return `${bar}%`;
  };

  useEffect(() => {
    let intervalId: number;

    if (active) {
      intervalId = window.setInterval(() => {
        if (bar === 100) return;
        setBar((previous) => previous + 1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [active, bar]);

  return (
    <Component
      bar={bar}
      action={action}
      actionText={actionText()}
      clear={clear}
      progressText={progressText()}
    />
  );
};
