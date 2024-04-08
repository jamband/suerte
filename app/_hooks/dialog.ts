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

  const hide = () => {
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

  const hideOnBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === ref.current) hide();
  };

  const hideOnEscapeKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    if (event.key === "Escape") hide();
  };

  return {
    ref,
    show,
    hide,
    hideOnBackgroundClick,
    hideOnEscapeKeyDown,
  } as const;
};
