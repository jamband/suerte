import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState((previous) => !previous);
  }, []);

  return [state, toggle] as const;
};
