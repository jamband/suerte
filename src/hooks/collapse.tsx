import { useEffect } from "react";
import { useToggle } from "./toggle";

export const useCollapse = () => {
  const [isCollapsed, toggleCollapse] = useToggle(true);

  useEffect(() => {
    import("bootstrap/js/dist/collapse");
  }, []);

  return { isCollapsed, toggleCollapse };
};
