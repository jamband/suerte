import { useEffect, useState } from "react";

export const useModal = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await import("bootstrap/js/dist/modal");
      setReady(true);
    })();
  }, []);

  return {
    ready,
  } as const;
};
