import { useEffect } from "react";

export const useAlert = () => {
  useEffect(() => {
    import("bootstrap/js/dist/alert");
  }, []);
};
