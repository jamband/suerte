"use client";

import { useDialog } from "@/_hooks/dialog";
import { useState } from "react";
import { Component } from "./component";
import styles from "./styles.module.css";
import type { Image } from "./types";

export const Content: React.FC = () => {
  const [image, setImage] = useState<Image>({
    text: "red",
    background: "#ed7c7c",
  });

  const modal = useDialog(styles.transition);

  const images: Array<Image> = [
    { text: "red", background: "#ed7c7c" },
    { text: "green", background: "#4b9c69" },
    { text: "blue", background: "#74a7e6" },
  ];

  const showModal = (image: Image) => {
    setImage(image);
    modal.show();
  };

  return (
    <Component
      images={images}
      image={image}
      modal={modal}
      showModal={showModal}
    />
  );
};
