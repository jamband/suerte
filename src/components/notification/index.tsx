import {
  useNotification,
  useNotificationAction,
  useNotificationState,
} from "~/hooks/notification";
import { Component } from "./component";

export const Notification: React.VFC = () => {
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
