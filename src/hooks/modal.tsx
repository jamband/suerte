import { useEffect } from "react";

export const useModal = () => {
  useEffect(() => {
    import("bootstrap/js/dist/modal");
  }, []);
};
