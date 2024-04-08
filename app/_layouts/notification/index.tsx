"use client";

import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { useEffect, useRef } from "react";
import { Component } from "./component";

export const Notification: React.FC = () => {
  const notification = useNotificationState();
  const { resetNotification } = useNotificationAction();
  const containerRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    const container = containerRef.current;
    if (container) {
      container.style.opacity = "0";
      setTimeout(() => resetNotification(), 300);
    }
  };

  useEffect(() => {
    let timeoutId: number;

    if (notification) {
      const container = containerRef.current;
      if (container) {
        container.style.opacity = "1";

        timeoutId = window.setTimeout(() => {
          container.style.opacity = "0";
          setTimeout(() => resetNotification(), 300);
        }, 5000);
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification, resetNotification]);

  return (
    <Component
      containerRef={containerRef}
      notification={notification}
      onClick={onClick}
    />
  );
};
