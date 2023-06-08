"use client";

import { useModal } from "@/modal/_hooks";
import { useState } from "react";
import { Component } from "./component";
import type { Image, Props } from "./types";

export const Content: React.FC<Props> = (props) => {
  const modal = useModal();

  const [image, setImage] = useState<Image>({
    color: "#ed7c7c",
    text: "red",
  });

  const images: Array<Image> = [
    { color: "#ed7c7c", text: "red" },
    { color: "#4b9c69", text: "green" },
    { color: "#74a7e6", text: "blue" },
  ];

  const showImage = (image: Image) => {
    setImage(image);
  };

  return (
    <Component
      {...props}
      images={images}
      showImage={showImage}
      modal={modal}
      image={image}
    />
  );
};
