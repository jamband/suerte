import { useEffect, useState } from "react";

export const useOffcanvas = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await import("bootstrap/js/dist/offcanvas");
      setReady(true);
    })();
  }, []);

  return {
    ready,
  } as const;
};
