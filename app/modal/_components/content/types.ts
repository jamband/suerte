import type { useModal } from "@/modal/_hooks";

export type Image = {
  color: `#${string}`;
  text: string;
};

export type Props = {
  //
};

export type _Props = Props & {
  images: Array<Image>;
  showImage: (image: Image) => void;
  modal: ReturnType<typeof useModal>;
  image: Image;
};
