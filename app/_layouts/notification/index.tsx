"use client";

import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { useEffect, useRef } from "react";
import { Component } from "./component";
import styles from "./styles.module.css";

export const Notification: React.FC = () => {
  const notification = useNotificationState();
  const { resetNotification } = useNotificationAction();
  const containerRef = useRef<HTMLDivElement>(null);

  const show = () => {
    containerRef.current?.classList.add(styles.show);
    setTimeout(() => {
      containerRef.current?.classList.add(styles.transition);
    }, 100);
  };

  const close = () => {
    containerRef.current?.classList.remove(styles.transition);

    containerRef.current?.addEventListener(
      "transitionend",
      () => {
        resetNotification();
        containerRef.current?.classList.remove(styles.show);
      },
      { once: true },
    );
  };

  useEffect(() => {
    if (notification) {
      show();
    }
  }, [notification]);

  return (
    <Component
      containerRef={containerRef}
      notification={notification}
      close={close}
    />
  );
};
