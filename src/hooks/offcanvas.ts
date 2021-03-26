import { useEffect } from "react";

export const useOffcanvas = () => {
  useEffect(() => {
    import("bootstrap/js/dist/offcanvas");
  }, []);
};
