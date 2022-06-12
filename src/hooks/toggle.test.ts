/** @jest-environment jsdom */
import { act, renderHook } from "@testing-library/react";
import { useToggle } from "./toggle";

test("type", () => {
  const { result } = renderHook(() => useToggle(true));
  expect(typeof result.current[0]).toBe("boolean");
  expect(typeof result.current[1]).toBe("function");
});

test("initial value: true", () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current[0]).toBe(true);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(false);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
});

test("initial value: false", () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current[0]).toBe(false);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(false);
});
