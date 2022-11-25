import { useEffect, useState } from "react";

export const useDropdown = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await import("bootstrap/js/dist/dropdown");
      setReady(true);
    })();
  }, []);

  return {
    ready,
  } as const;
};
