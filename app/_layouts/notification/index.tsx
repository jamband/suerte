"use client";

import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { useEffect, useRef } from "react";
import { Component } from "./component";

export const Notification: React.FC = () => {
  const { message } = useNotificationState();
  const { clearNotification } = useNotificationAction();
  const containerRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    const container = containerRef.current;
    if (container) {
      container.style.opacity = "0";
      setTimeout(() => clearNotification(), 300);
    }
  };

  useEffect(() => {
    let timeoutId: number;

    if (message) {
      const container = containerRef.current;
      if (container) {
        container.style.opacity = "1";

        timeoutId = window.setTimeout(() => {
          container.style.opacity = "0";
          setTimeout(() => clearNotification(), 300);
        }, 5000);
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, clearNotification]);

  return (
    <Component
      containerRef={containerRef}
      message={message}
      onClick={onClick}
    />
  );
};
