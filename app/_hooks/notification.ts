import { DispatchContext, StateContext } from "@/_contexts/notification";
import { useCallback, useContext, useRef } from "react";

export const useNotification = () => {
  const notificationRef = useRef<HTMLDivElement>(null);

  const showNotification = () => {
    import("bootstrap/js/dist/toast").then((module) => {
      if (notificationRef.current) {
        new module.default(notificationRef.current).show();
      }
    });
  };

  return {
    notificationRef,
    showNotification,
  } as const;
};

export const useNotificationState = () => {
  return useContext(StateContext);
};

export const useNotificationAction = () => {
  const dispatch = useContext(DispatchContext);

  const setNotification = (message: string) =>
    dispatch({
      type: "show",
      payload: message,
    });

  const clearNotification = () =>
    dispatch({
      type: "clear",
    });

  return {
    setNotification: useCallback(setNotification, [dispatch]),
    clearNotification: useCallback(clearNotification, [dispatch]),
  } as const;
};
