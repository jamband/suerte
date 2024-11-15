"use client";

import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { useCallback, useEffect, useRef } from "react";
import { Component } from "./component";

export const Notification: React.FC = () => {
  const notification = useNotificationState();
  const { resetNotification } = useNotificationAction();
  const containerRef = useRef<HTMLDivElement>(null);

  const show = () => {
    const container = containerRef.current;
    if (container) {
      container.style.display = "flex";
      container.style.opacity = "1";
    }
  };

  const close = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      container.style.opacity = "0";

      container.addEventListener(
        "transitionend",
        () => {
          resetNotification();
          container.style.display = "none";
        },
        { once: true },
      );
    }
  }, [resetNotification]);

  useEffect(() => {
    let timeoutId: number;

    if (notification) {
      show();
      timeoutId = window.setTimeout(close, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification, close]);

  return (
    <Component
      containerRef={containerRef}
      notification={notification}
      close={close}
    />
  );
};
