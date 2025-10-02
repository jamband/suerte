import { useRef } from "react";

export const useDialog = (token: string) => {
  const ref = useRef<HTMLDialogElement>(null);

  const show = () => {
    ref.current?.classList.add(token);
    ref.current?.showModal();

    requestAnimationFrame(() => {
      ref.current?.classList.remove(token);
    });
  };

  const close = () => {
    ref.current?.classList.add(token);

    ref.current?.addEventListener(
      "transitionend",
      () => {
        ref.current?.classList.remove(token);
        ref.current?.close();
      },
      { once: true },
    );
  };

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
