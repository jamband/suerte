import { DispatchContext, StateContext } from "@/_contexts/notification";
import { useCallback, useContext } from "react";

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
