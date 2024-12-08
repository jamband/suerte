import { DispatchContext, StateContext } from "@/_contexts/notification";
import type { State } from "@/_reducers/notification";
import { use, useCallback } from "react";

export const useNotificationState = () => {
  return use(StateContext);
};

export const useNotificationAction = () => {
  const dispatch = use(DispatchContext);

  const setNotification = useCallback(
    (payload: State) => {
      dispatch({ type: "set", payload });
    },
    [dispatch],
  );

  const resetNotification = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  return {
    setNotification,
    resetNotification,
  } as const;
};
