"use client";

import { useState } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Content: React.FC<Props> = (props) => {
  const [ratioSelector, setRatioSelector] = useState("");
  const ratioList = ["21x9", "16x9", "4x3", "1x1"];

  const handleRatioSelector = (ratio: string) => {
    const ratios = [
      { ratio: "21x9", selector: "ratio-21x9" },
      { ratio: "16x9", selector: "ratio-16x9" },
      { ratio: "4x3", selector: "ratio-4x3" },
      { ratio: "1x1", selector: "ratio-1x1" },
    ];

    setRatioSelector(
      ratios.find((_) => _.ratio === ratio)?.selector || ratioSelector
    );
  };

  return (
    <Component
      {...props}
      ratioList={ratioList}
      handleRatioSelector={handleRatioSelector}
      ratioSelector={ratioSelector}
    />
  );
};
