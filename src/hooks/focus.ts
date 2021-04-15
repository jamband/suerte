import { useEffect, useRef } from "react";

export const useFocus = () => {
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusRef.current?.focus();
  }, [focusRef]);

  return { focusRef } as const;
};
