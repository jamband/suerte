import { useRef } from "react";

export const useToast = () => {
  const toastRef = useRef<HTMLDivElement>(null);

  const showToast = () => {
    import("bootstrap/js/dist/toast").then((module) => {
      new module.default(toastRef.current!).show();
    });
  };

  return { toastRef, showToast };
};
