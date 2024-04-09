import type { useDialog } from "@/_hooks/dialog";

type Dialog = ReturnType<typeof useDialog>;

export type Image = {
  text: "red" | "green" | "blue";
  background: `#${string}`;
};

export type _Props = {
  images: Array<Image>;
  image: Image;
  modalRef: Dialog["ref"];
  showModal: (image: Image) => void;
  closeModalOnBackgroundClick: Dialog["closeOnBackgroundClick"];
  closeModalOnEscapeKeyDown: Dialog["closeOnEscapeKeyDown"];
};
