"use client";

import { APP_DESCRIPTION } from "@/_constants/app";
import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { Component } from "./component";

export const Toast: React.FC = () => {
  const notification = useNotificationState();
  const { setNotification } = useNotificationAction();

  const showNotification = () => {
    setNotification(APP_DESCRIPTION);
  };

  const disabled = notification.message !== "";

  return <Component showNotification={showNotification} disabled={disabled} />;
};
