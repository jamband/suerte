import { useRef } from "react";

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const show = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  const closeOnBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === ref.current) {
      close();
    }
  };

  const closeOnEscapeKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  };

  return {
    ref,
    show,
    close,
    closeOnBackgroundClick,
    closeOnEscapeKeyDown,
  } as const;
};
