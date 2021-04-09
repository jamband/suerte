import { useCallback, useContext, useRef } from "react";
import { DispatchContext, StateContext } from "~/contexts/notification";

export const useNotification = () => {
  const notificationRef = useRef<HTMLDivElement>(null);

  const showNotification = () => {
    import("bootstrap/js/dist/toast").then((module) => {
      new module.default(notificationRef.current!).show();
    });
  };

  return { notificationRef, showNotification } as const;
};

export const useNotificationState = () => {
  return useContext(StateContext);
};

export const useNotificationAction = () => {
  const dispatch = useContext(DispatchContext);

  const setNotification = useCallback(
    (message: string) => {
      dispatch({
        type: "show",
        message: message,
      });
    },
    [dispatch]
  );

  const clearNotification = useCallback(() => {
    dispatch({ type: "clear" });
  }, [dispatch]);

  return { setNotification, clearNotification } as const;
};
