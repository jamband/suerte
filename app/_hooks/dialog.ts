import { useRef } from "react";

export const useDialog = (token: string) => {
  const ref = useRef<HTMLDialogElement>(null);

  const show = () => {
    const dialog = ref.current;
    dialog?.classList.add(token);
    dialog?.showModal();

    requestAnimationFrame(() => {
      dialog?.classList.remove(token);
    });
  };

  const close = () => {
    const dialog = ref.current;
    dialog?.classList.add(token);

    dialog?.addEventListener(
      "transitionend",
      () => {
        dialog.classList.remove(token);
        dialog.close();
      },
      { once: true },
    );
  };

  const closeOnBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === ref.current) close();
  };

  const closeOnEscapeKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    if (event.key === "Escape") close();
  };

  return {
    ref,
    show,
    close,
    closeOnBackgroundClick,
    closeOnEscapeKeyDown,
  } as const;
};
