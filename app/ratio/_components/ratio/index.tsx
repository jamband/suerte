"use client";

import { useState } from "react";
import { Component } from "./component";

export const Ratio: React.FC = () => {
  const [text, setText] = useState("21x9");

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setText(event.currentTarget.textContent || "");
  };

  const disabled = (ratio: `${number}x${number}`) => {
    return ratio === text ? true : false;
  };

  const aspectRatio = text.replace("x", " / ");

  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      text={text}
      aspectRatio={aspectRatio}
    />
  );
};
