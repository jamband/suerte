import { useEffect, useRef } from "react";

export const useFocus = () => {
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return { focusRef } as const;
};
