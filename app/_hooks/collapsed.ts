import { useEffect, useRef } from "react";

export const useCollapsed = () => {
  const collapseRef = useRef<HTMLDivElement>(null);

  const collapsed = () => {
    import("bootstrap/js/dist/collapse").then((module) => {
      if (collapseRef.current) {
        new module.default(collapseRef.current).hide();
      }
    });
  };

  useEffect(() => {
    import("bootstrap/js/dist/collapse");
  });

  return { collapseRef, collapsed } as const;
};
