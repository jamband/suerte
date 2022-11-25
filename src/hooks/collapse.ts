import { useEffect, useRef, useState } from "react";
import { useToggle } from "./toggle";

export const useCollapse = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [disabled, setDisabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [isCollapsed, toggleCollapse] = useToggle(true);

  const toggle = () => {
    setDisabled(true);
    toggleCollapse();

    ref.current?.addEventListener("shown.bs.collapse", () => {
      setDisabled(false);
    });

    ref.current?.addEventListener("hidden.bs.collapse", () => {
      setDisabled(false);
    });
  };

  useEffect(() => {
    (async () => {
      await import("bootstrap/js/dist/collapse");
      setReady(true);
    })();
  }, []);

  return {
    ref,
    disabled,
    ready,
    isCollapsed,
    toggle,
  } as const;
};
