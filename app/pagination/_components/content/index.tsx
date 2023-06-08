"use client";

import { useSearchParams } from "next/navigation";
import { Component } from "./component";
import type { Props } from "./types";

export const Content: React.FC<Props> = (props) => {
  const searchParams = useSearchParams();

  const data = ".".repeat(26);
  const currentPage = Number(searchParams.get("page") || 1);
  const pageCount = data.length;
  const content = data.slice(0, currentPage);

  return (
    <Component
      {...props}
      content={content}
      currentPage={currentPage}
      pageCount={pageCount}
    />
  );
};
