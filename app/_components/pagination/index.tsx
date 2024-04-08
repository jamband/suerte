"use client";

import { useSearchParams } from "next/navigation";
import { Component } from "./component";
import type { Part, Props } from "./types";

export const Pagination: React.FC<Props> = (props) => {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || "1");
  const parts: Array<Part> = ["First", "Previous", "Next", "Last"];

  const disabled = (part: Part) => {
    return ["First", "Previous"].includes(part)
      ? props.currentPage < 2
      : props.currentPage >= props.lastPage;
  };

  const symbol = (part: Part) => {
    return ["First", "Previous"].includes(part) ? "←" : "→";
  };

  const href = (part: Part) => {
    const pathname = "/pagination";
    if (part === "First") return pathname;
    if (part === "Next") return `${pathname}?page=${currentPage + 1}`;
    if (part === "Previous") return `${pathname}?page=${currentPage - 1}`;
    return `${pathname}?page=${props.lastPage}`;
  };

  return (
    <Component
      {...props}
      parts={parts}
      disabled={disabled}
      symbol={symbol}
      href={href}
    />
  );
};
