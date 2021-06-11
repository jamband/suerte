/** @jest-environment jsdom */
import { act, renderHook } from "@testing-library/react-hooks";
import { NotificationProvider } from "~/contexts/notification";
import { useNotificationAction, useNotificationState } from "./notification";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <NotificationProvider>{children}</NotificationProvider>
);

test("initial state", () => {
  const { result } = renderHook(() => useNotificationState(), {
    wrapper,
  });
  expect(result.current.message).toBe("");
});

test("show", () => {
  const { result } = renderHook(
    () => {
      const state = useNotificationState();
      const { setNotification } = useNotificationAction();
      return { state, setNotification };
    },
    { wrapper }
  );

  expect(result.current.state.message).toBe("");

  act(() => result.current.setNotification("foo"));
  expect(result.current.state.message).toBe("foo");
});

test("clear", () => {
  const { result } = renderHook(
    () => {
      const state = useNotificationState();
      const { setNotification, clearNotification } = useNotificationAction();
      return { state, setNotification, clearNotification };
    },
    { wrapper }
  );

  act(() => result.current.setNotification("foo"));
  expect(result.current.state.message).toBe("foo");

  act(result.current.clearNotification);
  expect(result.current.state.message).toBe("");
});
