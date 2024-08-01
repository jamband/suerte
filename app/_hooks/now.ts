import { useEffect, useState } from "react";

export const useNow = (ms?: number) => {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState(new Date());
    }, ms || 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [ms]);

  return [state, setState] as const;
};
