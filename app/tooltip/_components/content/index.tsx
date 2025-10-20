"use client";

import { useState } from "react";
import { Component } from "./component";
import type { Placement } from "./types";

export const Content: React.FC = () => {
  const [placement, setPlacement] = useState<Placement>("top");
  const [permanent, setPermanent] = useState(false);

  const handlePlacement = (event: React.MouseEvent) => {
    const placement = event.currentTarget.textContent;
    if (
      placement === "top" ||
      placement === "right" ||
      placement === "bottom" ||
      placement === "left"
    ) {
      setPlacement(placement);
    }
  };

  const togglePermanent = () => {
    setPermanent((previous) => !previous);
  };

  return (
    <Component
      placement={placement}
      handlePlacement={handlePlacement}
      permanent={permanent}
      togglePermanent={togglePermanent}
    />
  );
};
