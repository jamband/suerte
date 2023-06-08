"use client";

import { useNotificationAction } from "@/_hooks/notification";
import { Component } from "./component";
import type { Props } from "./types";

export const ActionButton: React.FC<Props> = (props) => {
  const { setNotification } = useNotificationAction();

  const showNotification = () => {
    setNotification("Hello, world! This is a toast message.");
  };

  return <Component {...props} showNotification={showNotification} />;
};
