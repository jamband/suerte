import type { useDialog } from "@/_hooks/dialog";

export type Image = {
  text: "red" | "green" | "blue";
  background: `#${string}`;
};

export type _Props = {
  images: Array<Image>;
  image: Image;
  modal: ReturnType<typeof useDialog>;
  showModal: (image: Image) => void;
};
