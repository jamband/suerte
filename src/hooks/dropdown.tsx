import { useEffect } from "react";

export const useDropdown = () => {
  useEffect(() => {
    import("bootstrap/js/dist/dropdown");
  }, []);
};
