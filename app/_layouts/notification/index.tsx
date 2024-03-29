"use client";

import {
  useNotification,
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { Component } from "./component";

export const Notification: React.FC = () => {
  const { notificationRef, showNotification } = useNotification();
  const { message } = useNotificationState();
  const { clearNotification } = useNotificationAction();

  if (message === "") {
    return null;
  }

  showNotification();

  notificationRef.current?.addEventListener("hidden.bs.toast", () => {
    clearNotification();
  });

  return (
    <Component
      message={message}
      notificationRef={notificationRef}
      clear={clearNotification}
    />
  );
};
